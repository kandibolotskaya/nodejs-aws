import { Command } from '@oclif/command';

import { AWSError } from 'aws-sdk';

import aws, { bucketParams } from '../aws';
import { logWithPrettier, prettyJSON } from '../utils';

export default class ListAllFiles extends Command {
  static description = 'List all files in an S3 Bucket';

  static examples = [`$ nodejs-aws list-all-files`];

  async run() {
    aws
      .listObjects(bucketParams)
      .promise()
      .then(logWithPrettier(this.log, prettyJSON))
      .catch((err: AWSError) => this.error(err));
  }
}
