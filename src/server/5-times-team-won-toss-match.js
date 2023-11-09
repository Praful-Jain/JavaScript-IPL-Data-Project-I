// Find the number of times each team won the toss and also won the match
function wonTossAndMatch(matchesData){

    /*
    step-1 : filter team who won both toss and match
    step-2 : extract only team_name using map
    */ 
    const wonBoth = matchesData.filter( (match) => {
        return match.toss_winner == match.winner;
    })
    .map( (match) => {
        return match.winner;
    });


    var distinctNames={};
    wonBoth.forEach((team) => {
        if(!distinctNames[team]){
            distinctNames[team]=1;
        }
        else{
            distinctNames[team]++;
        }
    });
    return distinctNames;
}

module.exports = wonTossAndMatch;
