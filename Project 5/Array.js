var locale=new Array();
var item= new Array();

function locales(_id, _name, _description, _item) {
   this.id          = _id;
   this.name        = _name;
   this.description = _description;
   this.item        = _item;       
 }
 // the not taken and taken were added because you said we had to modify the take command to use the array
 function items(_id, _name, _description, _notTaken, _taken) {
    this.id          = _id;
    this.name        = _name;
    this.description = _description;
    this.notTaken    = _notTaken;
    this.taken       = _taken;
 }
 
     this.toString = function items() {
      var betVal = "";
      betVal ="[items]"                          
                this.id                    
                this.name
                this.description
                this.notTaken
                this.taken;
       return betVal;
 }
     this.toString = function locales() {
      var retVal = "";
      retVal = "[locales]"                         
                 this.id                    
                 this.name                
                 this.description  
                 this.item;                

      return retVal;
 }   


 