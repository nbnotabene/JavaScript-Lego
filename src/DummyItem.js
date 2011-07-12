function DummyItem(o) {
  if (!o.start) {
    throw new Error("Event skal ha' en start!");
  }  
  var _o=o;
  this.type=(o.type)?o.type:"basic";  
  this.start=o.start;
  this.end=o.end;
  this.toString = function(){
    return this.type + "--from:"+this.start+"-to-"+this.end;
  }
}


function CollectionClient(o) {
  this.name = o.name;
  var episodes = new Items(Episode.prototype.constructor,'start');
  this.episodes = function(){
    return episodes;
  }
  var sortedEpisodes = new SortedItems(Episode.prototype.constructor,'start');
  this.sortedEpisodes = function(){
    return sortedEpisodes;
  }
}