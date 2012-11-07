    var currentLocation=0;
    function WrongWay() {
      var message="You cannot go this way";
      UpdateText(message);
        }
    function movenorth() {
      if (currentLocation===0) {
          currentLocation=1;
          TowelRack();
            document.getElementById("button_West").disabled=true;
            document.getElementById("button_East").disabled=true;
            document.getElementById("button_North").disabled=false;
            document.getElementById("button_South").disabled=false;
            }
       else if(currentLocation===1) {
          currentLocation=5;
          LockedDoor();
            document.getElementById("button_North").disabled=true;
            document.getElementById("button_West").disabled=true;
            document.getElementById("button_East").disabled=true;
            document.getElementById("button_South").disabled=false;
            }
       else if(currentLocation===2) {
          currentLocation=0;
          DarkMustyBathroom();
            document.getElementById("button_North").disabled=false;
            document.getElementById("button_West").disabled=false;
            document.getElementById("button_East").disabled=false;
            document.getElementById("button_South").disabled=false;
          }
       else if(currentLocation===3) {
        currentLocation=6;
        Grove();
          document.getElementById("button_West").disabled=true;
          document.getElementById("button_East").disabled=true;
          document.getElementById("button_North").disabled=false;
          document.getElementById("button_South").disabled=false;
        }
       else if(currentLocation===6) {
        currentLocation=7
        GraveStone();
          document.getElementById("button_North").disabled=true;
          document.getElementById("button_South").disabled=false;
          document.getElementById("button_East").disabled=true;
          document.getElementById("button_West").disabled=true;
        }
       else if(currentLocation===8) {
        currentLocation=3
        TwoDoors();
          document.getElementById("button_North").disabled=false;
          document.getElementById("button_South").disabled=false;
          document.getElementById("button_East").disabled=false;
          document.getElementById("button_West").disabled=true;
        }
        else if(currentLocation===5) {
          WrongWay();
          }
        else if(currentLocation===4) {
          WrongWay();
          }
        else if(currentLocation===7) {
          WrongWay();
          }
        else if(currentLocation===9) {
          WrongWay();
          }
     }
     
     function movesouth() {
      if(currentLocation===0) {
          currentLocation=2;
          CloggedToilet();
            document.getElementById("button_South").disabled=true;
            document.getElementById("button_West").disabled=true;
            document.getElementById("button_East").disabled=true;
            document.getElementById("button_North").disabled=false;
            }
        else if(currentLocation===1) {
            currentLocation=0;
            DarkMustyBathroom();
            document.getElementById("button_South").disabled=false;
            document.getElementById("button_West").disabled=false;
            document.getElementById("button_East").disabled=false;
            document.getElementById("button_North").disabled=false;
            }
        else if(currentLocation===5) {
            currentLocation=1;
            TowelRack();
            document.getElementById("button_West").disabled=true;
            document.getElementById("button_East").disabled=true;
            document.getElementById("button_North").disabled=false;
            document.getElementById("button_South").disabled=false;
            }
         else if(currentLocation===3) {
          currentLocation=8;
          Garden();
          document.getElementById("button_North").disabled=false;
          document.getElementById("button_East").disabled=true;
          document.getElementById("button_West").disabled=false;
          document.getElementById("button_South").disabled=true;
          }
         else if(currentLocation===6) {
          currentLocation=3;
          TwoDoors();
          document.getElementById("button_North").disabled=false;
          document.getElementById("button_South").disabled=false;
          document.getElementById("button_West").disabled=false;
          document.getElementById("button_East").disabled=true;
          }
         else if(currentLocation===7) {
          currentLocation=6;
          Grove();
          document.getElementById("button_North").disabled=false;
          document.getElementById("button_West").disabled=true;
          document.getElementById("button_South").disabled=false;
          document.getElementById("button_East").disabled=true;
          }
          else if(currentLocation===2) {
            WrongWay();
          }
          else if(currentLocation===4) {
            WrongWay();
          }
          else if(currentLocation===8) {
            WrongWay();
          }
          else if(currentLocation===9) {
            WrongWay();
          }
      }
     function movewest() {
     if(currentLocation===0) {
        currentLocation=3;
        TwoDoors();
          document.getElementById("button_North").disabled=false;
          document.getElementById("button_South").disabled=false;
          document.getElementById("button_West").disabled=true;
          document.getElementById("button_East").disabled=false;
     }
     else if(currentLocation===4) {
        currentLocation=0;
        DarkMustyBathroom();
          document.getElementById("button_North").disabled=false;
          document.getElementById("button_South").disabled=false;
          document.getElementById("button_West").disabled=false;
          document.getElementById("button_East").disabled=false;
     }
     else if(currentLocation===8) {
      currentLocation=9;
      Shed();
          document.getElementById("button_North").disabled=true;
          document.getElementById("button_West").disabled=true;
          document.getElementById("button_South").disabled=true;
          document.getElementById("button_East").disabled=false;
      }
      else if(currentLocation===3) {
        WrongWay();
      }
      else if(currentLocation===9) {
        WrongWay();
      }
      else if(currentLocation===7) {
        WrongWay();
      }
      else if(currentLocation===6) {
        WrongWay();
      }
      else if(currentLocation===1) {
        WrongWay();
      }
      else if(currentLocation===5) {
        WrongWay();
      }
      else if(currentLocation===2) {
        WrongWay();
      }
    }
      
     function moveeast() {
      if(currentLocation===0) {
        currentLocation=4;
        Sink();
          document.getElementById("button_East").disabled=true;
          document.getElementById("button_North").disabled=true;
          document.getElementById("button_South").disabled=true;
          document.getElementById("button_West").disabled=false;
          }
        else if(currentLocation===3) {
          currentLocation=0;
          DarkMustyBathroom();
          document.getElementById("button_North").disabled=false;
          document.getElementById("button_South").disabled=false;
          document.getElementById("button_East").disabled=false;
          document.getElementById("button_West").disabled=false;
            }
        else if(currentLocation===9) {
          currentLocation=8;
          Garden();
          document.getElementById("button_North").disabled=false;
          document.getElementById("button_West").disabled=false;
          document.getElementById("button_South").disabled=true;
          document.getElementById("button_East").disabled=true;
          }
         else if(currentLocation===4) {
          WrongWay();
         }
         else if(currentLocation===2) {
          WrongWay();
         }
         else if(currentLocation===1) {
          WrongWay();
         }
         else if(currentLocation===5) {
          WrongWay();
         }
         else if(currentLocation===8) {
          WrongWay();
         }
         else if(currentLocation===6) {
          WrongWay();
         }
         else if(currentLocation===7) {
          WrongWay();
         }
       }
      function help() {
        var message="The valid commands are N,S,E,W or n,s,e,w. There are also the help/Help and take. Make sure you visit all the locations to get all the points!";
        UpdateText(message);
        }

