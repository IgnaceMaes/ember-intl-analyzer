#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const pkgDir = require('pkg-dir');
const { run } = require('../index');

let rootDir = pkgDir.sync();

process.exitCode = run(rootDir).catch(error => {
  console.error(chalk.red(error.stack));
});
