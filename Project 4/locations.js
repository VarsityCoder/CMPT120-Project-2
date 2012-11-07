    var PlayerHasPlunger=false;
    var PlayerHasKey=false;
    
      function PlayerTakePlunger() {
      if(currentLocation===1 && PlayerHasPlunger===false) {
        var Plunger="You take the plunger";
        PlayerHasPlunger=true;
        UpdateText(Plunger);
       }
      else if(currentLocation===1 && PlayerHasPlunger===true) {
        var NoPlunger="You already have the plunger";
        UpdateText(NoPlunger);
       }
     }
    function PlayerTakeKey() {
        if(currentLocation===2 && PlayerHasKey===false) {
        var Key="You take the key";
        PlayerHasKey=true;
        UpdateText(Key);
        }
      else if(currentLocation===2 && PlayerHasKey===true) {
        var NoKey="You already have the key";
        UpdateText(NoKey);
        }
    }
    function Inventory() { 
      if(PlayerHasPlunger===true) {
        var InventoryPlunger="Plunger";
        UpdateText(InventoryPlunger);
        }
      if(PlayerHasKey===true) {
        var InventoryKey="Key";
        UpdateText(InventoryKey);
        }
    }
    function UpdateText(msg) {
      var someNewName = document.getElementById("start");
      someNewName.value=msg+"\n"+ "\n"+ someNewName.value;
      }
    // starting location
    function DarkMustyBathroom() {
      var message="You are in a dark musty bathroom";
      UpdateText(message);
        }
    
    //north of room
    function TowelRack() {
      if(area1===true) {
       score+=5;
       area1=false;
        }
      var message="A towel rack with a plunger on the side.You can take the Plunger";
      UpdateText(message);
      currentLocation=1;
     }
    //south of room
    function CloggedToilet() {
      if(area2===true) {
        score+=5;
        area2=false;
          }
      var message="A clogged toilet, you see something sparkling on the bottom of the toilet. You can take the sparkling thing";
      UpdateText(message);
      currentLocation=2;

      }
    //west of room
    function TwoDoors() {
      if(area3===true) {
        score+=5;
        area3=false;
        }
      var message="There are two doors with a windows. There appears to be a storm outside";
      UpdateText(message);
      currentLocation=3;
      }
    //east of room
    function Sink() {
      if(area4===true) {
        score+=5;
        area4=false;
          }
      var message="A sink with a mirror. You see your reflection in the mirror, you look tired.";
      UpdateText(message);
      currentLocation=4;
      }
    //northwest of room
    function LockedDoor() {
      if(area5===true) {
        score+=5;
        area5=false;
          }
      var message="You see a door and try to open it. The door is locked you need a key to open it";
      UpdateText(message);
      currentLocation=5;
        }
     function Grove() { 
      if(area6===true) {
        score+=5;
        area6=false;
        }
       var message="You go through a small grove, shielding you from the rain";
       UpdateText(message);
       currentLocation=6;
      }
      
     function GraveStone() {
      if(area7===true) {
        score+=5;
        area7=false;
        }
      var message="You see a gravestone. On the gravestone it reads 'My Sweet Harper, I will love you forever'";
      UpdateText(message);
      currentLocation=7;
      }
     function Garden() {
      if(area8===true) {
        score+=5;
        area8=false;
        }
       var message="You go through a garden. In the garden there is a statue of a General.";
       UpdateText(message);
       currentLocation=8;
      }
     function Shed() {
      if(area9===true) {
        score+=5;
        area9=false;
        }
       var message="You see a shed. There is a light inside";
       UpdateText(message);
       currentLocation=9;
       }