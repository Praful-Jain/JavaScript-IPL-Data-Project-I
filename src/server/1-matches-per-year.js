// Number of matches played per year for all the years in IPL.
function matchesPerYear(matchesData){
    const seasonData = matchesData.map( (obj) =>  {
        return obj.season;
    });

    const matches_played = {};
    seasonData.forEach( (year) => {
        if(matches_played[year]){
            matches_played[year]++;
        }
        else{
            matches_played[year]=1;
        }
    });
    // console.log(matches_played);
    return matches_played;
}

module.exports = matchesPerYear;
