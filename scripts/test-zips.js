const zips = require('us-zips');
const keys = Object.keys(zips);
const alZips = keys.filter(z => zips[z].state === 'AL');
console.log('AL Zips:', alZips.length);
if (alZips.length > 0) {
  console.log('Sample:', zips[alZips[0]]);
} else {
  // Try logging the first item to see structure
  console.log('First zip structure:', zips[keys[0]]);
}
