const zipcodes = require('zipcodes');

const alZips = Object.values(zipcodes.codes).filter(z => z.state === 'AL');
console.log('Total AL Zips:', alZips.length);

// Also extract unique counties from Alabama
const counties = new Set();
for (const z of alZips) {
  if (z.county) {
    counties.add(z.county);
  }
}
console.log('Total AL Counties:', counties.size);

// Show a sample of each data
console.log('Zip Sample:', alZips[0]);
console.log('County Sample:', Array.from(counties)[0]);
