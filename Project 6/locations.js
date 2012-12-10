    var PlayerHasPlunger=false;
    var PlayerHasDiamond=false;
    var PlayerHasCoin=false;
    var PlayerHasRing=false;
    
      function PlayerTakePlunger() {
      if(currentLocation===1 && PlayerHasPlunger===false) {
        PlayerHasPlunger=true;
        UpdateText(item[0].notTaken);
       }
      else if(currentLocation===1 && PlayerHasPlunger===true) {
        UpdateText(item[0].taken);
       }
     }
    function PlayerTakeDiamond() {
        if(currentLocation===2 && PlayerHasDiamond===true) {
         UpdateText(item[1].taken);
         }
        else if(currentLocation===2 && PlayerHasPlunger===true) {
          PlayerHasDiamond=true;
          UpdateText(item[1].notTaken);
         }
        if(currentLocation===2 && PlayerHasPlunger===false) {
        var msg="You cannot get the sparkling thing without the plunger";
        UpdateText(msg);
        }
    }
    function PlayerTakeCoin() {
      if(currentLocation===7 && PlayerHasCoin===true) {
        UpdateText(item[2].taken);
        }
      else if(currentLocation===7 && PlayerHasRing===true) {
        UpdateText(item[2].notTaken);
        PlayerHasCoin=true;
        }
    
      if(currentLocation===7 && PlayerHasRing===false) {
        var msg="You cannot get the coin without the ring";
        UpdateText(msg);
        }
    }
    function PlayerTakeRing() {
      if(currentLocation===8 && PlayerHasRing===true) {
        UpdateText(item[3].taken);
        }
      else if(currentLocation===8 && PlayerHasDiamond===true) {
        UpdateText(item[3].notTaken);
        PlayerHasRing=true;
        }

      if(currentLocation===8 && PlayerHasDiamond===false) {
        var msg="You cannot get the ring without the Diamond";
        UpdateText(msg);
        }
    }
    function WinGame() {
      if(currentLocation===9 && PlayerHasCoin===true) {
        var msg="You have won the game! Reload page to restart";
        UpdateText(msg);
        }
      else{
        var msg="Yeah right! Keep Trying!";
        UpdateText(msg);
        }
    }
    function Inventory() {
      var InventoryStarter="Inventory: ";
      UpdateText(InventoryStarter);
      if(PlayerHasPlunger===true) {
        UpdateText(item[0].description);
        }
      if(PlayerHasDiamond===true) {
        UpdateText(item[1].description);
        }
      if(PlayerHasCoin===true) {
        UpdateText(item[2].description)
        }
      if(PlayerHasRing===true) {
        UpdateText(item[3].description)
        }
    }
    function UpdateText(msg) {
      var someNewName = document.getElementById("start");
      someNewName.value=msg+"\n"+"\n"+someNewName.value;
      }
    // starting location
    function DarkMustyBathroom() {
      UpdateText(locale[0].description);
      currentLocation=0;
        }
    
    //north of room
    function TowelRack() {
      if(area1===true) {
       score+=5;
       area1=false;
        }
      UpdateText(locale[1].description);
      currentLocation=1;
     }
    //south of room
    function CloggedToilet() {
      if(area2===true) {
        score+=5;
        area2=false;
          }
      UpdateText(locale[2].description);
      currentLocation=2;

      }
    //west of room
    function TwoDoors() {
      if(area3===true) {
        score+=5;
        area3=false;
        }
      UpdateText(locale[3].description);
      currentLocation=3;
      }
    //east of room
    function Sink() {
      if(area4===true) {
        score+=5;
        area4=false;
          }
      UpdateText(locale[4].description);
      currentLocation=4;
      }
    //northwest of room
    function LockedDoor() {
      if(area5===true) {
        score+=5;
        area5=false;
          }
      UpdateText(locale[5].description);
      currentLocation=5;
        }
     function Grove() { 
      if(area6===true) {
        score+=5;
        area6=false;
        }
       UpdateText(locale[6].description);
       currentLocation=6;
      }
      
     function GraveStone() {
      if(area7===true) {
        score+=5;
        area7=false;
        }
      UpdateText(locale[7].description);
      currentLocation=7;
      }
     function Garden() {
      if(area8===true) {
        score+=5;
        area8=false;
        }
       UpdateText(locale[8].description);
       currentLocation=8;
      }
     function Shed() {
      if(area9===true) {
        score+=5;
        area9=false;
        }
       UpdateText(locale[9].description);
       currentLocation=9;
       }