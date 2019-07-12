import * as AWS from 'aws-sdk';

import config from './config';

export const bucketParams = {
  Bucket: config.bucketName,
  Marker: config.marker,
};

export default new AWS.S3({
  apiVersion: config.apiVersion,
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
});
