describe("CollectionClient", function() {
  var client;
  var items;
  var sortedItems;
  
  beforeEach(function() {
    client = new CollectionClient({name:'client'});
    items = client.episodes();
    sortedItems = client.sortedEpisodes();
    items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
    items.add({start:'2011-09-02',end:'2011-09-21'});
    items.add({start:'2011-09-03',end:'2011-09-22'});
    sortedItems.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
    sortedItems.add({start:'2011-09-02',end:'2011-09-21'});
    sortedItems.add({start:'2011-09-03',end:'2011-09-22'});
  });

 
  it("client items collection", function() {
    expect(items.item(1).start).toEqual('2011-09-02');
  });      
  it("client sortedItems collection", function() {
    expect(sortedItems.item(1).start).toEqual('2011-09-03');
  });      
  it("count items", function() {
    expect(items.count()).toEqual(3);
    expect(sortedItems.count()).toEqual(3);
  });  
  
  it("Remove (and sort)", function() {
    items.remove(1);
    expect(items.count()).toEqual(2);
    sortedItems.remove(1);
    expect(sortedItems.count()).toEqual(2);
    expect(sortedItems.item(1).start).toEqual('2011-09-04');
  });  

  it("Error handling", function() {
    expect(function () {items.item('sadfasfd');}).toThrow("undefined index");
    expect(function () {items.item(1000);}).toThrow("undefined index");
  });  
});