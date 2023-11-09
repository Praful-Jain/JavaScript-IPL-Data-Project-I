// Find the bowler with the best economy in super overs

function bestEconomy(deliveriesData)
{
    deliveriesData = deliveriesData.filter( (delivery) => delivery.is_super_over!=0  );

    const bowlerBallRun = []; 
    deliveriesData.forEach((delivery) => {
        const bowler = delivery.bowler;
    
        // Initialize bowler if not present
        if (!bowlerBallRun[bowler]) {
            bowlerBallRun[bowler] = { balls: 0, runs: 0 };
        }
    
        // Increment balls bowled
        if (delivery.wide_runs == 0 && delivery.noball_runs == 0) {
            bowlerBallRun[bowler].balls++;
        }
    
        // Increment runs conceded
        if (delivery.bye_runs == 0 && delivery.legbye_runs == 0) {
            bowlerBallRun[bowler].runs += parseInt(delivery.total_runs);
        }
    });
  
    // Calculating best economy
    var result = {};
    Object.keys(bowlerBallRun).forEach((player) => {
        const { balls, runs } = bowlerBallRun[player];
        const economy = (runs * 6 / balls).toFixed(2);

        if (!result.economy || parseFloat(economy) < result.economy) {
            result.name = player;
            result.economy = parseFloat(economy);
        }
    });
    return result;
}

module.exports = bestEconomy;
