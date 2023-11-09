// Number of matches won per team per year in IPL.
function matchesWonPerTeamPerYear(matchesData){

  const seasonWinnerData = matchesData.map( (obj) =>  {
      return [obj.season, obj.winner];
  });

  const winnersPerYear = seasonWinnerData.reduce((acc, [season, winner]) => {
      if (!acc[season]) {
        acc[season] = {};
      }
    
      if (!acc[season][winner]) {
        acc[season][winner] = 1;
      } 
      else {
        acc[season][winner]++;
      }
    
      return acc;
    }, {});
    // console.log(winnersPerYear);
    return winnersPerYear;
}

module.exports = matchesWonPerTeamPerYear;
