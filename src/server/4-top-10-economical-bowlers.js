// Top 10 economical bowlers in the year 2015
function topTenBowler(matchesData, deliveriesData){

    let matchIdsOf2015=[];

    matchesData.forEach((match) => {
        if (match.season==2015) {
            matchIdsOf2015.push(match.id);
        }
    })

    let bowlerRunsBalls = {};

    deliveriesData.forEach( (delivery) => {

        if (matchIdsOf2015.includes(delivery.match_id))
        {
            let bowler = delivery.bowler;
            let netruns = Number(delivery.total_runs)-Number(delivery.bye_runs)-Number(delivery.legbye_runs);

            if (bowlerRunsBalls[bowler]) 
            {
                bowlerRunsBalls[bowler][0] += netruns;
                if (delivery.wide_runs=='0' && delivery.noball_runs=='0')
                {
                    bowlerRunsBalls[bowler][1]++;
                }
            }
            else
            {
                bowlerRunsBalls[bowler] = [netruns, 0];
                if (delivery.wide_runs=='0' && delivery.noball_runs=='0') 
                {
                    bowlerRunsBalls[bowler][1]=1;
                }
            }
        }
    });

    // Calculating the economy rate (ER)
    const economyPerBowler = [];
    economyPerBowler.push({Year : 2015});
    for (const bowler in bowlerRunsBalls) {
        const runsConceded = bowlerRunsBalls[bowler][0];
        const ballsBowled = bowlerRunsBalls[bowler][1];
        const oversBowled =  ballsBowled / 6; // Calculate the number of overs bowled
        
        const economyRate = (runsConceded / oversBowled).toFixed(2);
        economyPerBowler.push({ bowler , economyRate }); 
    }

    economyPerBowler.sort((a,b) => a.economyRate - b.economyRate);
    const top10Economy = economyPerBowler.slice(0, 10);
    //console.log(top10Economy);
    return top10Economy;
}

module.exports = topTenBowler;
