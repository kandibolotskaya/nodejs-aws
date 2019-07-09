import { Command } from '@oclif/command';

import { AWSError } from 'aws-sdk';

import aws, { bucketParams } from '../aws';
import { logWithPrettier, prettyJSON } from '../utils';

export default class SearchFiles extends Command {
  static description = 'List an AWS buckets files that match a "filter" regex';

  static examples = [`$ nodejs-aws search-files image-name`];

  static args = [
    { name: 'search', required: true, description: 'Search pattern' },
  ];

  async run() {
    const { args } = this.parse(SearchFiles);

    if (!args.search.length) {
      this.error('Search pattern is empty.');
    }

    aws
      .listObjects({ ...bucketParams, Prefix: args.search })
      .promise()
      .then(logWithPrettier(this.log, prettyJSON))
      .catch((err: AWSError) => this.error(err));
  }
}
