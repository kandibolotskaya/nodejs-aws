import * as AWS from 'aws-sdk';

import config from './config';

export const bucketParams = {
  Bucket: config.bucketName,
};

export default new AWS.S3({
  apiVersion: config.apiVersion,
});
