
   function init() { 
      
    locale[0] = new locales("Location 0", "Dark Musty Bathroom", "You are in a dark musty bathroom", "none");
    locale[1] = new locales("Location 1", "Towel Rack", "A towel rack with a plunger on the side.You can take the plunger", "Plunger");
    locale[2] = new locales("Location 2", "Clogged Toilet", "A clogged toilet, you see something sparkling on the bottom of the toilet. You can take the sparkling thing", "Key");
    locale[3] = new locales("Location 3", "Two Doors", "There are two doors with a windows. There appears to be a storm outside", "none");
    locale[4] = new locales("Location 4", "Sink", "A sink with a mirror. You see your reflection in the mirror, you look tired.", "none");
    locale[5] = new locales("Location 5", "LockedDoor", "You see a door and try to open it. The door is locked you need a key to open it","none");
    locale[6] = new locales("Location 6", "Grove", "You go through a small grove, shielding you from the rain", "none");
    locale[7] = new locales("Location 7", "Gravestone", "You see a gravestone. On the gravestone it reads 'My Sweet Harper, I will love you forever. There is a note on the grave", "Note");
    locale[8] = new locales("Location 8", "Garden", "You go through a garden. In the garden there is a statue of a General. There is a ring on the General's finger", "Ring");
    locale[9] = new locales("Location 9", "Shed", "You see a shed. There is a light inside", "none");
    item[0] = new items("item 0", "Plunger", "An old Plunger", "You take the Plunger", "You already have the Plunger")
    item[1] = new items("item 1", "Key", "A sparkling Key", "You take the Key", "You already have the Key")
    item[2] = new items("item 2", "Note","An unreadable Note", "You take the Note", "You already have the Note")
    item[3] = new items("item 3", "Ring", "A golden Ring", "You take the Ring", "You already have the Ring")
    DarkMustyBathroom();
    
 }