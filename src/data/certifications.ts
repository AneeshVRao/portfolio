export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: 'deep-learning',
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2025',
    url: 'https://coursera.org'
  },
  {
    id: 'aws-cloud',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    url: 'https://aws.amazon.com'
  },
  {
    id: 'nvidia-cuda',
    title: 'Accelerated Computing with CUDA C/C++',
    issuer: 'NVIDIA DLI',
    date: '2024',
    url: 'https://nvidia.com'
  },
  {
    id: 'google-cloud',
    title: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: '2025',
    url: 'https://cloud.google.com'
  },
  {
    id: 'tensorflow',
    title: 'TensorFlow Developer Certificate',
    issuer: 'TensorFlow / Google',
    date: '2024',
    url: 'https://tensorflow.org'
  },
  {
    id: 'full-stack',
    title: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    date: '2024',
    url: 'https://freecodecamp.org'
  }
]
