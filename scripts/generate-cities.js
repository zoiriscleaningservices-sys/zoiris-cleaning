const allCities = require('all-the-cities');
const fs = require('fs');

const alabamaCities = allCities
  .filter(c => c.loc && c.loc.type === 'Point' && c.country === 'US' && c.adminCode === 'AL')
  .map(c => {
    const slug = c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-al';
    return {
      slug,
      name: c.name,
      state: 'AL',
      county: c.adminCode2 || 'Unknown', // Sometimes adminCode2 has county
      pop: c.population || 0
    };
  })
  .sort((a, b) => b.pop - a.pop);

// Deduplicate by slug
const uniqueSlugs = new Set();
const finalCities = [];
for (const city of alabamaCities) {
  if (!uniqueSlugs.has(city.slug)) {
    uniqueSlugs.add(city.slug);
    finalCities.push(city);
  }
}

// Ensure the original top ones the user wanted are there, specifically Mobile and Baldwin area
// Let's add them explicitly if missing (they shouldn't be, but just in case)
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

const fileContent = `// Auto-generated Alabama Cities (Count: ${finalCities.length})
// Pre-sorted by population to allow Next.js to pre-render the top cities

const cities = ${JSON.stringify(finalCities, null, 2)};

module.exports = cities;
`;

fs.writeFileSync('./data/cities.js', fileContent);
console.log('Successfully generated data/cities.js with ' + finalCities.length + ' cities.');
