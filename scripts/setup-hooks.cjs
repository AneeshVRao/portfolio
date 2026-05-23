const fs = require('fs');
const path = require('path');

const gitHooksDir = path.join(__dirname, '../.git/hooks');

if (!fs.existsSync(gitHooksDir)) {
  console.log('⚠️ .git directory not found. Skipping git hooks installation.');
  process.exit(0);
}

const preCommitHook = `#!/bin/sh
echo "🔒 Running Pre-Commit Credentials Scan..."
node scripts/scan-credentials.cjs
`;

const prePushHook = `#!/bin/sh
echo "🚀 Running Pre-Push E2E Validation (Lint + Build + Tests)..."
npm run lint && npm run build || exit 1

echo "🌐 Starting temporary preview server..."
npx vite preview --port 5173 &
SERVER_PID=$!

# Wait for server to start
sleep 3

# Run tests
node test-portfolio.cjs
TEST_STATUS=$?

# Stop server
echo "🛑 Stopping temporary preview server (PID $SERVER_PID)..."
kill $SERVER_PID

# Exit with test status
if [ $TEST_STATUS -ne 0 ]; then
  echo "❌ Pre-push validation failed!"
  exit 1
fi

echo "✅ Pre-push validation passed successfully!"
exit 0
`;

try {
  const preCommitPath = path.join(gitHooksDir, 'pre-commit');
  const prePushPath = path.join(gitHooksDir, 'pre-push');

  fs.writeFileSync(preCommitPath, preCommitHook, { mode: 0o755 });
  console.log('✅ Installed pre-commit hook.');

  fs.writeFileSync(prePushPath, prePushHook, { mode: 0o755 });
  console.log('✅ Installed pre-push hook.');

  // Set executable permissions if on Unix/macOS
  try {
    fs.chmodSync(preCommitPath, '755');
    fs.chmodSync(prePushPath, '755');
  } catch (e) {
    // ignore permission errors on Windows
  }

  console.log('🎉 Git hooks successfully configured!');
} catch (err) {
  console.error('❌ Failed to configure git hooks:', err);
  process.exit(1);
}
