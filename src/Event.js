AbstractEvent = {
  start : function(){
    return this.start;    
  }
}
//Event.inheritsFrom(AbstractEvent);
Episode.inheritsFrom(AbstractEvent);

function Episode(o) {
  if (!o.start) {
    throw new Error("Event skal ha' en start!");
  }  
  var _o=o;
  this.type=(o.type)?o.type:"basic";  
  this.start=o.start;
  this.end=o.end;
  this.toString = function(){
    return this.type + "--fra:"+this.start+"-til-"+this.end;
  }
}
