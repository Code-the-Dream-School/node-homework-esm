import os from 'os';
import path from 'path';
import fs from 'fs';

const sampleFilesDir = path.join(import.meta.dirname, 'sample-files');
if (!fs.existsSync(sampleFilesDir)) {
  fs.mkdirSync(sampleFilesDir, { recursive: true });
}

// OS module


// Path module

// fs.promises API


// Streams for large files- log first 40 chars of each chunk