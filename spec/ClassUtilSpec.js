describe("ClassUtil", function() {
  describe("Normal Items-collection", function() {
    var items;
    var item2;
    beforeEach(function() {
      items = new Items(DummyItem.prototype.constructor);
      items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
      items.add({start:'2011-09-02',end:'2011-09-21'});
      items.add({start:'2011-09-03',end:'2011-09-22'});
      item2=items.item(2);
    });
    it("should be able to create items collection", function() {
      expect(items.item(0).type).toEqual('musik');
      expect(item2.type).toEqual('basic');
      expect(item2.start).toEqual('2011-09-03');
    });
    it("should keep count", function() {
      expect(items.count()).toEqual(3);
      items.remove(1);
      expect(items.count()).toEqual(2);
      expect(items.item(1).end).toEqual('2011-09-22');
      expect(items.item(1)).toEqual(item2);
      expect(item2.end).toEqual('2011-09-22');
    });  
  });
  
 
  describe("SortedItems", function() {
    var items;
    var item2
    
    it("create items collection", function() {
      items = new SortedItems(DummyItem.prototype.constructor,'start');
      expect(items.field).toEqual('start');
    });      
    it("add items to collection", function() {
      items = new SortedItems(DummyItem.prototype.constructor,'start');
      test = items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
      expect(test.start).toEqual('2011-09-04');
      expect(items.count()).toEqual(1);
    });  
    
    it("Remove", function() {
      items = new SortedItems(DummyItem.prototype.constructor,'start');
      items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
      items.add({start:'2011-09-02',end:'2011-09-21'});
      items.add({start:'2011-09-03',end:'2011-09-22'});
      items.remove(1);
      expect(items.count()).toEqual(2);
    });  
    it("Sort Ascending on field start", function() {
      items = new SortedItems(DummyItem.prototype.constructor,'start');
      items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
      items.add({start:'2011-09-02',end:'2011-09-21'});
      items.add({start:'2011-09-03',end:'2011-09-22'});
      expect(items.item(2).start).toEqual('2011-09-04');
      expect(items.item(0).start).toEqual('2011-09-02');
    });  
    it("Error handling", function() {
      items = new SortedItems(DummyItem.prototype.constructor,'start');
      items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
      items.add({start:'2011-09-02',end:'2011-09-21'});
      items.add({start:'2011-09-03',end:'2011-09-22'});
      expect(function () {items.item('sadfasfd');}).toThrow("undefined index");
      expect(function () {items.item(1000);}).toThrow("undefined index");
    });  
  });  
  
});
