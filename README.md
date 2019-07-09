nodejs-aws
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nodejs-aws.svg)](https://npmjs.org/package/nodejs-aws)
[![Downloads/week](https://img.shields.io/npm/dw/nodejs-aws.svg)](https://npmjs.org/package/nodejs-aws)
[![License](https://img.shields.io/npm/l/nodejs-aws.svg)](https://github.com/kandibolotskaya/nodejs-aws/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g nodejs-aws
$ nodejs-aws COMMAND
running command...
$ nodejs-aws (-v|--version|version)
nodejs-aws/0.0.0 linux-x64 node-v11.13.0
$ nodejs-aws --help [COMMAND]
USAGE
  $ nodejs-aws COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nodejs-aws hello [FILE]`](#nodejs-aws-hello-file)
* [`nodejs-aws help [COMMAND]`](#nodejs-aws-help-command)

## `nodejs-aws hello [FILE]`

describe the command here

```
USAGE
  $ nodejs-aws hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ nodejs-aws hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/kandibolotskaya/nodejs-aws/blob/v0.0.0/src/commands/hello.ts)_

## `nodejs-aws help [COMMAND]`

display help for nodejs-aws

```
USAGE
  $ nodejs-aws help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->
