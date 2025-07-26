const fs = require('fs');

// Read the saints data
const content = fs.readFileSync('./lib/saints-data.ts', 'utf8');

// Extract all feast dates
const feastDateMatches = content.match(/feastDate:\s*"([^"]+)"/g) || [];
const feastDates = feastDateMatches.map(match => match.replace(/feastDate:\s*"([^"]+)"/, '$1'));

// Create a set of unique dates
const uniqueDates = new Set(feastDates);

// Months with their days
const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 29 }, // Including leap year
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 }
];

console.log('Saints Coverage Report:');
console.log('======================\n');

let totalMissing = 0;
const missingDays = [];

months.forEach(month => {
  const covered = [];
  const missing = [];
  
  for (let day = 1; day <= month.days; day++) {
    const dateStr = `${month.name} ${day}`;
    if (uniqueDates.has(dateStr)) {
      covered.push(day);
    } else {
      missing.push(day);
      missingDays.push(dateStr);
    }
  }
  
  console.log(`${month.name}:`);
  console.log(`  Total days: ${month.days}`);
  console.log(`  Covered: ${covered.length}`);
  console.log(`  Missing: ${missing.length}`);
  if (missing.length > 0) {
    console.log(`  Missing days: ${missing.join(', ')}`);
  }
  console.log();
  
  totalMissing += missing.length;
});

console.log(`\nTotal unique dates covered: ${uniqueDates.size}`);
console.log(`Total days missing: ${totalMissing}`);
console.log(`Total feast date entries: ${feastDates.length}`);

// Save missing days to a file for reference
fs.writeFileSync('./scripts/missing-saints-days.txt', missingDays.join('\n'));
console.log('\nMissing days saved to scripts/missing-saints-days.txt');