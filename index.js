// Import two Node.js modules 'fs' & 'csv-parser'
const fs = require('fs');
const csv = require('csv-parser');

const matchesPerYear = require('./src/server/1-matches-per-year.js');
const matchesWonPerTeamPerYear = require('./src/server/2-matches-won-per-team-per-year.js');
const extraRuns2016 = require('./src/server/3-extra-runs-per-team-2016.js');
const topTenBowler = require('./src/server/4-top-10-economical-bowlers.js');
const wonTossAndMatch = require('./src/server/5-times-team-won-toss-match.js')
const playerOfMatch = require('./src/server/6-player-of-match-each-season.js');
const strikeRate = require('./src/server/7-strike-rate.js');
const dismissedCount = require('./src/server/8-max-dismiss.js');
const bestEconomy = require('./src/server/9-best-economy-bowler-in-superovers.js');

const matchesData = [];                     // Fetching matches.csv file data into matchesData array
fs.createReadStream('./src/data/matches.csv')  // 'fs.createReadStream' method used to open a readable stream for the CSV file you want to read.

  .pipe(csv())                       // This allows the data from the file stream to be processed by the csv-parser.

  //event listeners
  .on('data', (data) => {
    matchesData.push(data);         // Process each row of data here
  })
  .on('end', () => {
    const deliveriesData = [];      // Fetching deliveries.csv file data into deliveriesDate array.
    fs.createReadStream('./src/data/deliveries.csv')

      .pipe(csv())              

      .on('data', (data) => {
        deliveriesData.push(data);     // Process each row of data here
      })
      .on('end', () => {
        const result1 = matchesPerYear(matchesData);
        const result2 = matchesWonPerTeamPerYear(matchesData);
        const result3 = extraRuns2016(matchesData);
        const result4 = topTenBowler(matchesData, deliveriesData);
        const result5 = wonTossAndMatch(matchesData);
        const result6 = playerOfMatch(matchesData);
        const result7 = strikeRate(matchesData, deliveriesData);
        const result8 = dismissedCount(deliveriesData);
        const result9 = bestEconomy(deliveriesData);

        // Write the JSON data to a file
        fs.writeFileSync('./src/public/output/1-matches-per-year.json', JSON.stringify(result1, null, 2));
        fs.writeFileSync('./src/public/output/2-matches-won-per-team-per-year.json', JSON.stringify(result2, null, 2));
        fs.writeFileSync('./src/public/output/3-extra-runs-per-team-2016.json', JSON.stringify(result3, null, 2));
        fs.writeFileSync('./src/public/output/4-top-10-economical-bowlers.json', JSON.stringify(result4, null, 2));
        fs.writeFileSync('./src/public/output/5-times-team-won-toss-match.json', JSON.stringify(result5, null, 2));
        fs.writeFileSync('./src/public/output/6-player-of-match-each-season.json', JSON.stringify(result6, null, 2));
        fs.writeFileSync('./src/public/output/7-strike-rate.json', JSON.stringify(result7, null, 2));
        fs.writeFileSync('./src/public/output/8-max-dismiss.json', JSON.stringify(result8, null, 2));
        fs.writeFileSync('./src/public/output/9-best-economy-bowler-in-superovers.json', JSON.stringify(result9, null, 2));

      });
  });

  
  

