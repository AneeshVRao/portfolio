const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

let hasError = false;

walkDir(path.join(__dirname, '../src'), (filePath) => {
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx')) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    // Match keys containing service_..., template_..., or Bearer ...
    if (/service_[a-zA-Z0-9]+|template_[a-zA-Z0-9]+|Bearer\s+[a-zA-Z0-9_-]+/.test(line)) {
      const isOk = 
        line.includes('import.meta.env') || 
        line.includes('service_default') || 
        line.includes('template_contact') ||
        line.includes('service_id') || 
        line.includes('template_id') || 
        line.includes('template_params');
        
      if (!isOk) {
        console.error(`❌ Potential hardcoded credentials found in ${filePath} at line ${index + 1}:`);
        console.error(`   > ${line.trim()}`);
        hasError = true;
      }
    }
  });
});

if (hasError) {
  console.error('\n🔒 Commit blocked: Hardcoded keys detected outside of environment variables.');
  process.exit(1);
} else {
  console.log('✅ Credentials scan passed.');
  process.exit(0);
}
