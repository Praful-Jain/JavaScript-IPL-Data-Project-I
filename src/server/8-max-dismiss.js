// Find the highest number of times one player has been dismissed by another player

function dismissedCount(deliveriesData)
{
    const dismissedPlayers={};
    deliveriesData.forEach((delivery) => {
        if(delivery.player_dismissed && delivery.dismissal_kind != 'run out')
        {
            const bowler = delivery.bowler;
            const batsman = delivery.batsman;
            if(!dismissedPlayers[bowler])
                dismissedPlayers[bowler]={};
            if(!dismissedPlayers[bowler][batsman])
                dismissedPlayers[bowler][batsman]=1;
            else
                dismissedPlayers[bowler][batsman]++;
        }
    });
    const result={
        bowler : '',
        batsman : '',
        wickets: 0
    }

    Object.keys(dismissedPlayers).forEach( (bowler) => {
        
        const batsmanRecord = dismissedPlayers[bowler]; // record of batsmans dismissed by each bowler
        
        Object.keys(batsmanRecord).forEach( (batsman) => {
            if(result.wickets < batsmanRecord[batsman])
            {
                result.bowler = bowler;
                result.batsman = batsman;
                result.wickets = batsmanRecord[batsman];
            }
        });
    });
    // console.log(result);
    return result;
}

module.exports = dismissedCount;
