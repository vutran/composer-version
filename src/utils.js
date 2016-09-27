/**
 * Get the next version
 *
 * @param {String} version - The current version
 * @param {String} type - The type of increment (major, minor, patch)
 */
const getNextVersion = (version, type) => {
  const v = version.split('.');
  let nextMajor = parseInt(v[0], 10);
  let nextMinor = parseInt(v[1], 10);
  let nextPatch = parseInt(v[2], 10);
  const bumpType = type ? type.toLowerCase() : '';
  switch (bumpType) {
    case 'major':
      nextMajor += 1;
      nextMinor = 0;
      nextPatch = 0;
      break;
    case 'minor':
      nextMinor += 1;
      nextPatch = 0;
      break;
    case 'patch':
      nextPatch += 1;
      break;
    default:
      throw new Error('Invalid version.');
  }
  return [nextMajor, nextMinor, nextPatch].join('.');
};

module.exports = {
  getNextVersion,
};
