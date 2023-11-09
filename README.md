# IPL Data Analysis Project

This project allows you to perform data analysis on Indian Premier League (IPL) cricket matches and deliveries data. It includes several functions to extract valuable insights from the IPL dataset.

## How to Run

Follow these steps to run the project:

1. Clone the repository to your local machine:

2. Install the required dependencies using npm:

3. Run the project:

4. You can specify which analysis to run by changing the `problemNumber` variable in `src/main.js`. The available problem numbers are from 1 to 9.

## Usage

### Problem 1: Calculate Matches Per Year

This function calculates the number of matches played in each IPL season and writes the result to a JSON file.

### Problem 2: Calculate Extra Runs Conceded in 2016

This function calculates the extra runs conceded by each team in the year 2016 and writes the result to a JSON file.

### Problem 3: Calculate Top Economical Bowlers in 2015

This function identifies and ranks the top 10 economical bowlers in the year 2015 and writes the result to a JSON file.

### Problem 4: Calculate Matches Won Per Team Per Year

This function determines the number of matches won by each team in each IPL season and writes the result to a JSON file.

### Problem 5: Find Teams That Won the Toss and Match

This function identifies the teams that won both the toss and the match for each season and writes the result to a JSON file.

### Problem 6: Find Players With the Most Player of the Match Awards

This function identifies the player with the most Player of the Match awards for each IPL season and writes the result to a JSON file.

### Problem 7: Calculate Batsman Strike Rate

This function calculates the strike rate of batsmen for each season and writes the result to a JSON file.

### Problem 8: Find the Number of Times a Player Was Dismissed by Another Player

This function identifies the number of times one player has been dismissed by another player and writes the result to a JSON file.

### Problem 9: Find the Bowler With the Best Economy in Super Overs

This function identifies the bowler with the best economy rate in super overs and writes the result to a JSON file.

You can run each of these analyses individually by specifying the corresponding problem number in `src/main.js`.


## Output Files

- 1-matches-per-year.js
- 2-matches-won-per-team-per-year.js
- 3-extra-runs-per-team-2016.js
- 4-top-10-economical-bowlers.js
- 5-times-team-won-toss-match.js
- 6-player-of-match-each-season.js
- 7-strike-rate.js
- 8-max-dismiss.js
- 9-best-economy-bowler-in-superovers.js

## Directory structure:

- src/
  - server/
    - 1-matches-per-year.js
    - 2-matches-won-per-team-per-year.js
  - public/
    - output
      - matchesPerYear.json
      - ...
  - data/
    - matches.csv
    - deliveries.csv
- package.json
- package-lock.json
- .gitignore
- README.md

## Contributing

If you'd like to contribute to this project, feel free to open an issue or create a pull request with your changes.
