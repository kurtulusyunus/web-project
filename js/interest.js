var logo = document.querySelector("#logo");
var name = document.querySelector("#name");
var total = document.querySelector("#total");
var wins = document.querySelector("#wins");
var draws = document.querySelector("#draws");
var loses = document.querySelector("#loses");

var goalsFor = document.querySelector("#goals-for");
var goalsAgainst = document.querySelector("#goals-against");
var failedToScore = document.querySelector("#failed-to-score");
var biggestGoalsForHome = document.querySelector("#biggest-goals-for-home");
var biggestGoalsForAway = document.querySelector("#biggest-goals-for-away");

function getData() {
  fetch(
    "https://v3.football.api-sports.io/teams/statistics?season=2021&team=549&league=203",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "74f9e1ee24d113f169a083f0ae8ce515",
      },
    }
  )
    .then((response) =>
      response.json().then((data) => {
        var statistics = data["response"];
        console.log(statistics);
        logo.src = statistics["team"]["logo"];
        name.innerHTML = statistics["team"]["name"];
        total.innerHTML = statistics["fixtures"]["played"]["total"];
        wins.innerHTML = statistics["fixtures"]["wins"]["total"];
        draws.innerHTML = statistics["fixtures"]["draws"]["total"];
        loses.innerHTML = statistics["fixtures"]["loses"]["total"];

        goalsFor.innerHTML = statistics["goals"]["for"]["total"]["total"];
        goalsAgainst.innerHTML =
          statistics["goals"]["against"]["total"]["total"];
        failedToScore.innerHTML = statistics["failed_to_score"]["total"];
        biggestGoalsForHome.innerHTML =
          statistics["biggest"]["goals"]["for"]["home"];
        biggestGoalsForAway.innerHTML =
          statistics["biggest"]["goals"]["for"]["away"];
      })
    )
    .catch((err) => {
      console.log(err);
    });
}

getData();