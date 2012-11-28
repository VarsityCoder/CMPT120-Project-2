    var PlayerHasPlunger=false;
    var PlayerHasKey=false;
    var PlayerHasNote=false;
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
    function PlayerTakeKey() {
        if(currentLocation===2 && PlayerHasKey===false) {
          PlayerHasKey=true;
          UpdateText(item[1].notTaken);
        }
      else if(currentLocation===2 && PlayerHasKey===true) {
        UpdateText(item[1].taken);
        }
    }
    function PlayerTakeNote() {
      if(currentLocation===7 && PlayerHasNote===false) {
        UpdateText(item[2].notTaken);
        PlayerHasNote=true;
        }
      else if(currentLocation===7 && PlayerHasNote===true) {
        UpdateText(item[2].taken);
        }
    }
    function PlayerTakeRing() {
      if(currentLocation===8 && PlayerHasRing===false) {
        UpdateText(item[3].notTaken);
        PlayerHasRing=true;
        }
      else if(currentLocation===8 && PlayerHasRing===true) {
        UpdateText(item[3].taken);
        }
    }
      
    function Inventory() {
      var InventoryStarter="Inventory: ";
      UpdateText(InventoryStarter);
      if(PlayerHasPlunger===true) {
        UpdateText(item[0].description);
        }
      if(PlayerHasKey===true) {
        UpdateText(item[1].description);
        }
      if(PlayerHasNote===true) {
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