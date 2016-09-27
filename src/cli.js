#!/usr/bin/env node

const composerVersion = require('./');

if (process.argv.length >= 3) {
  const args = process.argv[2].split(' ');
  composerVersion(args).then((tag) => {
    // eslint-disable-next-line no-console
    console.log(tag);
  });
} else {
  // eslint-disable-next-line no-console
  console.error('Please specify version increment type: (major, minor, patch)');
}
