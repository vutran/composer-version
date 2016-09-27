const path = require('path');
const fs = require('fs');
const { getNextVersion } = require('./utils');
const { createGitCommit, createGitTag } = require('./git');

module.exports = args => new Promise((resolve) => {
  const composerJson = path.join(process.cwd(), 'composer.json');
  // read the composer.json file
  // eslint-disable-next-line global-require
  const pkg = require(composerJson);
  // get the bump type
  const type = args[0];
  // set the next version
  const nextVersion = pkg.version ? getNextVersion(pkg.version, type) : '0.0.0';
  pkg.version = nextVersion;
  // write to the composer.json file
  fs.writeFileSync(composerJson, JSON.stringify(pkg, null, '\t'));
  // set tag name
  const tagName = `v${nextVersion}`;
  // create a new git commit and tag it
  createGitCommit(tagName)
    .then(createGitTag)
    .then(tag => resolve(tag));
});
