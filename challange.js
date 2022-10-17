
// initiallizing the varibles and targets
let target1=document.querySelector("#text11");
let target2=document.querySelector("#text2");
let target3=document.querySelector("#check");
let target4=document.querySelector(".pera").innerText;
// let target5=document.querySelector(".pera").textContent;


const game = {
  team1: "Byern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "neuer",
      "pavard",
      "martinez",
      "Alaba",
      "Devies",
      "kimmich",
      "Coman",
      "Muller",
      "Gnerby",
      "Lewandoski",
    ],
    [
      "burki",
      "schulz",
      "Hummels",
      "Akanji",
      "hakimi",
      "weigil",
      "witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["lewandoski", "Gnarby", "Lewendoski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: null,
    x: 3.25,
    team2: null,
  },
};
let players1, players2;
players1 = game.players[0];
players2 = game.players[1];

players1[0] = "neuer(Gk)";
players2[0] = "burki (GK)";

let Allplayer = [players1 + players2];
console.log(Allplayer);
players1.push("Thiago", "Coutinho", "Perisic");

let finalplayer1 = [players1];

// 'Thiago','Coutinho','Perisic'
let player = [players1, players2];

console.log(game);
// working on odds


//  document.querySelector("#check").addEventListener("click",(a,b,c)=>{
  
    const {
        odds:{ team1,x:draw, team2 },
}=game;

console.log(team1,draw,team2);
// console.log("button has been clicked");
// })
 
 console.log(team1,draw,team2);

 function printFoals(...players){
 
     console.log(`${players.length} goals were scored`);
   
 }
 printFoals(...game.scored);


//  team1<team2 && console.log("team1 is more likely to win");
//  team1>team2 && console.log("team2 is more likely to win");

//  for(const allp of Allplayer)
//  console.log(allp);

 game.players[0][6]="hummels";

 game.players[1][2]="comons";

 console.log(players1);
 console.log(players2);
 function adding()
 {
   
     game.odds.team1=target1.value;
     game.odds.team2=target2.value;
 }
target3.addEventListener('click',()=>{

    console.log("button is clicked");
    adding();

//  team1<team2 && console.log("team1 is more likely to win");
//  team1>team2 && console.log("team2 is more likely to win");
 
//  team1<team2 && document.querySelector(".pera").innerText="team1 is more likely to win";
//  team1>team2 && document.querySelector(".pera").innerText="team2 is more likely to win";
 if(game.odds.team1 < game.odds.team2){
  document.querySelector(".pera").innerText= "team 1 is more likely to win";

 }
 else if(game.odds.team1 > game.odds.team2){
     document.querySelector(".pera").innerText="team 2 is more likely to win";
   
 }
 
});