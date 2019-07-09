import * as fs from 'fs';

import { Command } from '@oclif/command';

import { AWSError } from 'aws-sdk';

import aws, { bucketParams } from '../aws';
import { logWithPrettier, prettyJSON } from '../utils';

export default class UploadFile extends Command {
  static description =
    'Upload a local file to a defined location in the bucket';

  static examples = [`$ nodejs-aws upload-file image.jpg`];

  static args = [
    { name: 'file', required: true, description: 'Path to file' },
    { name: 'key', required: true, description: 'File name in bucket' },
  ];

  async run() {
    const { args } = this.parse(UploadFile);

    if (!fs.lstatSync(args.file).isFile()) {
      this.error('Please enter path to file!');
    }

    aws
      .upload({
        ...bucketParams,
        Key: args.key,
        Body: fs.createReadStream(args.file),
      })
      .promise()
      .then(logWithPrettier(this.log, prettyJSON))
      .catch((err: AWSError) => this.error(err));
  }
}
