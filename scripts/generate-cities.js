const allCities = require('all-the-cities');
const zipcodes = require('zipcodes');
const fs = require('fs');

// 1. Get all Alabama cities
const alabamaCities = allCities
  .filter(c => c.loc && c.loc.type === 'Point' && c.country === 'US' && c.adminCode === 'AL')
  .map(c => {
    const slug = c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-al';
    return {
      slug,
      name: c.name,
      state: 'AL',
      county: c.adminCode2 || 'Unknown',
      pop: c.population || 0
    };
  });

// 2. Get all Alabama ZIP codes
const alZips = Object.values(zipcodes.codes).filter(z => z.state === 'AL');
const zipLocations = alZips.map(z => {
  const slug = `${z.zip}-al`;
  return {
    slug,
    name: z.zip,
    state: 'AL',
    county: 'Unknown',
    pop: 0
  };
});

// 3. Alabama Counties
const countyNames = [
  "Autauga", "Baldwin", "Barbour", "Bibb", "Blount", "Bullock", "Butler", "Calhoun", "Chambers", "Cherokee",
  "Chilton", "Choctaw", "Clarke", "Clay", "Cleburne", "Coffee", "Colbert", "Conecuh", "Coosa", "Covington",
  "Crenshaw", "Cullman", "Dale", "Dallas", "DeKalb", "Elmore", "Escambia", "Etowah", "Fayette", "Franklin",
  "Geneva", "Greene", "Hale", "Henry", "Houston", "Jackson", "Jefferson", "Lamar", "Lauderdale", "Lawrence",
  "Lee", "Limestone", "Lowndes", "Macon", "Madison", "Marengo", "Marion", "Marshall", "Mobile", "Monroe",
  "Montgomery", "Morgan", "Perry", "Pickens", "Pike", "Randolph", "Russell", "St. Clair", "Shelby", "Sumter",
  "Talladega", "Tallapoosa", "Tuscaloosa", "Walker", "Washington", "Wilcox", "Winston"
];

const countyLocations = countyNames.map(name => {
  const slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-county-al`;
  return {
    slug,
    name: `${name} County`,
    state: 'AL',
    county: name,
    pop: 0
  };
});

const combinedCities = [...alabamaCities, ...zipLocations, ...countyLocations];

// Deduplicate by slug
const uniqueSlugs = new Set();
const finalCities = [];
for (const city of combinedCities) {
  if (!uniqueSlugs.has(city.slug)) {
    uniqueSlugs.add(city.slug);
    finalCities.push(city);
  }
}

// Ensure the original top ones the user wanted are there, specifically Mobile and Baldwin area
const manualAdditions = [
  { slug: "mobile-al", name: "Mobile", state: "AL" },
  { slug: "spanish-fort-al", name: "Spanish Fort", state: "AL" },
  { slug: "saraland-al", name: "Saraland", state: "AL" },
  { slug: "daphne-al", name: "Daphne", state: "AL" },
  { slug: "eight-mile-al", name: "Eight Mile", state: "AL" },
  { slug: "satsuma-al", name: "Satsuma", state: "AL" },
  { slug: "montrose-al", name: "Montrose", state: "AL" },
  { slug: "theodore-al", name: "Theodore", state: "AL" },
  { slug: "semmes-al", name: "Semmes", state: "AL" },
  { slug: "fairhope-al", name: "Fairhope", state: "AL" },
  { slug: "birmingham-al", name: "Birmingham", state: "AL", pop: 200000 },
  { slug: "huntsville-al", name: "Huntsville", state: "AL", pop: 200000 },
];

for (const ma of manualAdditions) {
  if (!uniqueSlugs.has(ma.slug)) {
    finalCities.push({ ...ma, pop: 50000, county: 'Added' });
    uniqueSlugs.add(ma.slug);
  }
}

// Re-sort by population
finalCities.sort((a, b) => b.pop - a.pop);

const fileContent = `// Auto-generated Alabama-Only SEO Hub (Count: ${finalCities.length})
// Pre-sorted by population to allow Next.js to pre-render the top cities

const cities = ${JSON.stringify(finalCities, null, 2)};

module.exports = cities;
`;

fs.writeFileSync('./data/cities.js', fileContent);
console.log('Successfully generated data/cities.js with ' + finalCities.length + ' ALABAMA-ONLY cities/zips/counties.');
