//Progression 1 - create a Manager array and return it
// let managerName = "Alex Ferguson";
// let managerAge = 78;
// let currentTeam = "Manchester FC";
// let trophiesWon = 27;

createManager=(managerName, managerAge, currentTeam, trophiesWon)=>{
  var Manager=[];
  Manager.push(managerName);
  Manager.push(managerAge);
  Manager.push(currentTeam);
  Manager.push(trophiesWon);
  return Manager;
}


//Write your function here


// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

createFormation=(formation)=>{
  if(formation.length===0)
  {
    return null;
  }
  else{
    var obj={};
    obj.defender=formation[0];
    obj.midfield=formation[1];
    obj.forward=formation[2];
    return obj;
  }  
}

//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

filterByDebut=(year)=>{
  let output=players.filter(array=>array.debut===year);
  // console.log(output);
  return output;
}

//Progression 4 - Filter players that play at the position _______

filterByPosition=(position)=>{
  let output=players.filter(array=>array.position===position);
  return output;
}



//Progression 5 - Filter players that have won ______ award

filterByAward=(awardname)=>{
  let empty=[];
  players.forEach(element=>empty.push(element.awards));
  let play=[];
  for(let i=0;i<empty.length;i++){
    for(let j=0;j<empty[i].length;j++){
        if(empty[i][j].name===awardname){
            play.push(players[i]);
        }
      }
  }
  return play;
}

//Progression 6 - Filter players that won ______ award ____ times

filterByAwardxTimes=(awardname,times)=>{
  let empty=[];
  players.forEach(element=>empty.push(element.awards));
  let play=[];
  for(let i=0;i<empty.length;i++){
    let count=0;
    for(let j=0;j<empty[i].length;j++){
        if(empty[i][j].name===awardname){
          count++;
        }
    }
    if(count===times){
      play.push(players[i]);
    }
  }
  return play;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

filterByAwardxCountry=(awardname,country)=>{
  let empty=[];
  players.forEach(element=>empty.push(element.awards));
  let play=[];
  for(let i=0;i<empty.length;i++){
    for(let j=0;j<empty[i].length;j++){
        if(empty[i][j].name===awardname && players[i].country===country){
            play.push(players[i]);
        }
      }
  }
  return play;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

filterByNoOfAwardsxTeamxAge=(times,teamname,age)=>{
  let play=[];
  for(let i=0;i<players.length;i++){
    if(players[i].team===teamname && players[i].age<age && players[i].awards.length>=times)
    {
      play.push(players[i]);
    }
  }
  return play;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won


//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
