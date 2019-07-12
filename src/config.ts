const config = require('dotenv').config();

export interface Config {
  bucketName: string;
  apiVersion: string;
  accessKeyId: string;
  secretAccessKey: string;
  marker: number;
}

export default {
  bucketName: config.parsed.BUCKET_NAME,
  apiVersion: config.parsed.API_VERSION,
  accessKeyId: config.parsed.ACCESS_KEY,
  secretAccessKey: config.parsed.SECRET_KEY,
  marker: config.parsed.MARKER,
} as Config;
