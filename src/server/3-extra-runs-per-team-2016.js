// Extra runs conceded per team in the year 2016
function extraRuns2016(matchesData){

    const matches2016 = matchesData.filter((obj) => {
        return obj.season === '2016';
    })
    
    const extraRuns = matches2016.map( (obj) =>  {
        return [obj.winner, obj.win_by_runs];
    }).reduce((acc,[winner,runs_conceded]) => {
        if(!acc[winner])
            acc[winner]=parseInt(runs_conceded,10);
        else
            acc[winner]+=parseInt(runs_conceded,10);

        return acc;
    },{});

    // console.log(extraRuns);
    return extraRuns;
}

module.exports = extraRuns2016;
