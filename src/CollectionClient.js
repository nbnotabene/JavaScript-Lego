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
  var _episodes = new Items(DummyItem.prototype.constructor,'start');
  var _sortedEpisodes = new SortedItems(DummyItem.prototype.constructor,'start');
  this.episodes = function(){
    return _episodes.items();
  }
  this.sortedEpisodes = function(){
    return _sortedEpisodes.items();
  }
  this.list = function(){
    return _episodes._list;
  }
}