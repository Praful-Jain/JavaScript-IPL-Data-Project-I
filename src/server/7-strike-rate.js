// Find the strike rate of a batsman for each season

function strikeRate(matchesData, deliveriesData)
{
    // extract [match_id , batsman , total_runs] from deliveries
    const data = deliveriesData.map( (deliveries) => {
        return [ deliveries.match_id , deliveries.batsman , deliveries.total_runs ];
    });

    //extract [season,matchid] from matches
    const arr = matchesData.map( (matches) => {
        return [matches.season , matches.id];
    })

    // season_id -- contains matchid's array in each season
    const season_id = arr.reduce( (acc,[season,id] ) => {
        if(!acc[season]){
            acc[season]=[];
        }
        acc[season].push(id);
        return acc;
    },{});

    // it will contain no.of runs scored and balls played by each player in each season
    const kohliStrikeRecord={};
    for(let index=0; index<data.length; index++)
    {
        const id = data[index][0], batsman = data[index][1], run = data[index][2];
        var year;

        for (let season in season_id) {
            if (season_id[season].includes(id)) {
                kohliStrikeRecord[season] = kohliStrikeRecord[season] || {};
                year = season;
                break; // Exiting the loop after finding the season
            }
        }
        
        if(batsman == 'V Kohli'){
            if(!kohliStrikeRecord[year].batsman)
            {
                kohliStrikeRecord[year]={
                    batsman: batsman,
                    runs: parseInt(run),
                    balls: 1
                };
            }
            else
            {
                kohliStrikeRecord[year].runs += parseInt(run);   
                kohliStrikeRecord[year].balls++;
            }
        }
    }

    // Calculating strikeRate of 'V Kohli'
    for(let year in kohliStrikeRecord)
    {
        const runs = kohliStrikeRecord[year].runs;
        const balls = kohliStrikeRecord[year].balls;
        kohliStrikeRecord[year].strikeRate= ((runs/balls)*100).toFixed(2);

    }
    
    return kohliStrikeRecord;
}

module.exports = strikeRate;
