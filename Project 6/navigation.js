    var area1=true;
    var area2=true;
    var area3=true;
    var area4=true;
    var area5=true;
    var area6=true;
    var area7=true;
    var area8=true;
    var area9=true;
    var currentLocation=0;
    var score=0;    var north=0;
    var south=1;
    var east=2;
    var west=3;
    var currentLocation=0;
    var navi=[ // n  s  e  w
          /*0*/   [1, 2, 4, 3],
          /*1*/   [5, 0, -1, -1],
          /*2*/   [0, -1,-1,-1],
          /*3*/   [6, 8, 0, -1],
          /*4*/   [-1,-1,-1, 0],
          /*5*/   [-1, 1, -1, -1],
          /*6*/   [7, 3, -1,-1],
          /*7*/   [-1,6,-1,-1],
          /*8*/   [3, -1,-1, 9],
          /*9*/   [-1,-1,8,-1]
                 ];
      function move(dir) {
        var newLocation=navi[currentLocation][dir];
        if(newLocation !== -1) {
          currentLocation = newLocation;
          updateLocation();
    } else {
      var msg="You cannot go this way.";
      UpdateText(msg);
      }
    }  
    function WrongWay() {
      var message="You cannot go this way";
      UpdateText(message);
        }
    function help() {
      var message="The valid commands are N,S,E,W or n,s,e,w. There are also the help/Help, take/Take, and the win/Win command,and i/I for inventory. The win command is used to win the game when you have collected all of the items and are near the shed. Make sure you visit all the locations to get all the points!";
      UpdateText(message);
        }
      
function updateLocation() {
  switch (currentLocation)
{
  case 0:DarkMustyBathroom();
            document.getElementById("button_North").disabled=false;
            document.getElementById("button_West").disabled=false;
            document.getElementById("button_East").disabled=false;
            document.getElementById("button_South").disabled=false;
    break;
  case 1:TowelRack();
            document.getElementById("button_North").disabled=false;
            document.getElementById("button_West").disabled=true;
            document.getElementById("button_East").disabled=true;
            document.getElementById("button_South").disabled=false;
    break;
  case 2:CloggedToilet();
            document.getElementById("button_North").disabled=false;
            document.getElementById("button_West").disabled=true;
            document.getElementById("button_East").disabled=true;
            document.getElementById("button_South").disabled=true;
    break;
  case 3:TwoDoors();
            document.getElementById("button_North").disabled=false;
            document.getElementById("button_West").disabled=true;
            document.getElementById("button_East").disabled=false;
            document.getElementById("button_South").disabled=false;
    break;
  case 4:Sink();
            document.getElementById("button_North").disabled=true;
            document.getElementById("button_West").disabled=false;
            document.getElementById("button_East").disabled=true;
            document.getElementById("button_South").disabled=true;
    break;
  case 5:LockedDoor();
            document.getElementById("button_North").disabled=true;
            document.getElementById("button_West").disabled=true;
            document.getElementById("button_East").disabled=true;
            document.getElementById("button_South").disabled=false;
    break;
  case 6:Grove();
            document.getElementById("button_North").disabled=false;
            document.getElementById("button_West").disabled=true;
            document.getElementById("button_East").disabled=true;
            document.getElementById("button_South").disabled=false;
    break;
  case 7:GraveStone();
            document.getElementById("button_North").disabled=true;
            document.getElementById("button_West").disabled=true;
            document.getElementById("button_East").disabled=true;
            document.getElementById("button_South").disabled=false;
    break;
  case 8:Garden();
            document.getElementById("button_North").disabled=false;
            document.getElementById("button_West").disabled=false;
            document.getElementById("button_East").disabled=true;
            document.getElementById("button_South").disabled=true;
    break;
  case 9:Shed();
            document.getElementById("button_North").disabled=true;
            document.getElementById("button_West").disabled=true;
            document.getElementById("button_East").disabled=false;
            document.getElementById("button_South").disabled=true;
    break;
  }
}