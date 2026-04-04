const c = require('all-the-cities');
const al = c.filter(x => x.country === 'US' && x.adminCode === 'AL');
console.log('AL cities:', al.length);
console.log('Sample:', JSON.stringify(al[0]));
