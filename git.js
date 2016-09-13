const { exec } = require('child_process');

/**
 * Creates a new git commit
 *
 * @param {String} tag - A tag name (eg: v1.2.3)
 * @return {Promise} - Resolves the tag name
 */
const createGitCommit = tag => new Promise((resolve) => {
  const cmdAdd = 'git add composer.json';
  exec(cmdAdd, (err1) => {
    if (!err1) {
      const cmdCommit = `git commit -m ${tag}`;
      exec(cmdCommit, (err2) => {
        if (!err2) {
          resolve(tag);
        }
      });
    }
  });
});

/**
 * Creates a new git tag
 *
 * @param {String} tag - A tag name (eg: v1.2.3)
 * @return {Promise} - Resolves the tag name
 */
const createGitTag = tag => new Promise((resolve) => {
  const cmd = `git tag -a ${tag} -m "${tag}"`;
  exec(cmd, (err) => {
    if (!err) {
      resolve(tag);
    }
  });
});

module.exports = {
  createGitCommit,
  createGitTag,
};
