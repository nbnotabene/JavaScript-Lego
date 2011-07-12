Function.prototype.inheritsFrom = function( parentClassOrObject ){ 
  if ( parentClassOrObject.constructor == Function ) 
  { 
    //Normal Inheritance 
    this.prototype = new parentClassOrObject;
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject.prototype;
  } 
  else 
  { 
    //Pure Virtual Inheritance 
    this.prototype = parentClassOrObject;
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject;
  } 
  return this;
} 


function Items(oConstructor){
  // ************************************************************************ 
  // Generic Collection Class 
  // nbinfo.dk: 2011 
  // *********************************************************************** 
  this._list = [];  //private
  this.oConstructor=oConstructor;  //constructor for new item/elements
  this.toString = function(){
    var sOut = "[";
    for (var nItm = 0; nItm <= this._list.length - 1; nItm++) {
      sOut += "[" + this._list[nItm].toString() + "]";
    }
    sOut += "]";    
    return sOut;
  }
  this.add = function(paramObj){
    //this._list.push(oItem);
    var oc = new this.oConstructor(paramObj);
    this._list.push(oc);
    return oc;
  }
  this.item = function(key,obj){
    if (obj) {
      var oc = new this.oConstructor(obj);
      this._list[key] = oc;
    } else {
      //try { 
        var oc = this._list[key];
      //} catch(err) {
      //  throw "undefined index"; //new Error("undefined index");
      //}
    }
    if (oc===undefined) throw new Error("undefined index"); //new Error("undefined index");
    return oc;
  }
  this.removeAll = function(inx){
    this._list = new Array;
  }
  this.remove = function(inx){
    return this._list.splice(inx,1);
  }
  this.count = function(){
    return this._list.length;
  }
  
  //exists, remove, removeAll
  this.items = function(){
    return this;
  }
}//Items


function SortedItems(oConstructor,field,desc){
  // ************************************************************************ 
  // Generic Sorted Collection Class 
  // nbinfo.dk: 2011 
  // *********************************************************************** 
  this._list = [];  //private
  this.oConstructor=oConstructor;  //constructor for new item/elements
  this.field=field;
  this.desc=(desc)?true:false;
  this.get_sortet_pos = function (obj) {
    //get pos of new insert
    if (!this.desc) {  //asc
      for(var i=(this._list.length-1);i>-1; i--) {
        if (this._list[i][this.field] <= obj[this.field]) return i+1;
      }
    } else { //desc
      for(var i=(this._list.length-1);i>-1; i--) {
        if (this._list[i][this.field] >= obj[this.field]) return i+1;
      }
    }
    return 0;
  };
  this.add = function(paramObj){
    //this._list.push(oItem);
    var oc = new this.oConstructor(paramObj);
    if (this._list.length==0) {
      this._list.push(oc);
    } else {
      inx = this.get_sortet_pos(oc);
      this._list.splice(inx,0,oc);
    } 
    return oc;
  }  
}


SortedItems.inheritsFrom(Items);
