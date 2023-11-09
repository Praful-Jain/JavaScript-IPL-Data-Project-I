// Find a player who has won the highest number of Player of the Match awards for each season

function playerOfMatch(matchesData){

    // Extracting [season,player_of_match] from matchesData
    const data = matchesData.map( (match) => {
        return [match.season,match.player_of_match];
    })

    // making an object of objects where first key will be season and second key will be player name and it's value will be number of player_of_match won
    const player_of_match = data.reduce( ( acc , [season, player] ) => {
        if(!acc[season]){
            acc[season]={};
        }

        if(!acc[season][player]){
            acc[season][player] = 1;
        }
        else{
            acc[season][player]+=1;
        }

        return acc;
    },{});


    const highestPlayerOfMatch = {};
    // finding player who has won the highest number of Player of the Match
    for(let season in player_of_match)
    {
        const season_data = player_of_match[season];
        var playerofmatch = 'player';
        var count = -1 ;
        for(let player in season_data)
        {   
            if(season_data[player] > count)
            {
                count = season_data[player];
                playerofmatch = player;
            }
        }
        highestPlayerOfMatch[season]={}
        highestPlayerOfMatch[season].playerofmatch = playerofmatch;
        highestPlayerOfMatch[season].count = count;
    }
    // console.log(highestPlayerOfMatch);
    return highestPlayerOfMatch;
}

module.exports = playerOfMatch;
