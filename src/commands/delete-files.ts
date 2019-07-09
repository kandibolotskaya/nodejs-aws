import { Command } from '@oclif/command';

import { AWSError } from 'aws-sdk';

import aws, { bucketParams } from '../aws';
import { logWithPrettier, prettyJSON } from '../utils';
import { ListObjectsOutput, Object as S3Object } from 'aws-sdk/clients/s3';

export default class DeleteFiles extends Command {
  static description = 'Delete all files matching a regex from a bucket';

  static examples = [`$ nodejs-aws delete-files file-name`];

  static args = [
    { name: 'search', required: true, description: 'Search pattern' },
  ];

  async run() {
    const { args } = this.parse(DeleteFiles);

    if (!args.search.length) {
      this.error('Search pattern is empty.');
    }

    aws
      .listObjects({ ...bucketParams, Prefix: args.search })
      .promise()
      .then((data: ListObjectsOutput) => {
        if (data.Contents && data.Contents.length) {
          const Objects = data.Contents.map((value: S3Object) => ({
            Key: value.Key || '',
          }));
          const Quiet = false;

          return aws
            .deleteObjects({ ...bucketParams, Delete: { Objects, Quiet } })
            .promise()
            .then(logWithPrettier(this.log, prettyJSON))
            .catch((err: AWSError) => this.error(err));
        }

        this.warn('Not found any files.');
      })
      .catch((err: AWSError) => this.error(err));
  }
}
