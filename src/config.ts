const config = require('dotenv').config();

export interface Config {
  bucketName: string;
  apiVersion: string;
}

export default {
  bucketName: config.parsed.BUCKET_NAME,
  apiVersion: config.parsed.API_VERSION,
} as Config;
