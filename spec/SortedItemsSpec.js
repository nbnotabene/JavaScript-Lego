describe("SortedItems", function() {
    var items;
    var item2
    //beforeEach(function() {
    /*items = new SortedItems(Episode.prototype.constructor,'start');
      items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
      items.add({start:'2011-09-02',end:'2011-09-21'});
      items.add({start:'2011-09-03',end:'2011-09-22'});
      item2=items.item(2);
    });*/
    it("create items collection", function() {
      items = new SortedItems(Episode.prototype.constructor,'start');
      expect(items.field).toEqual('start');
    });      
    it("add items to collection", function() {
      items = new SortedItems(Episode.prototype.constructor,'start');
      test = items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
      expect(test.start).toEqual('2011-09-04');
      expect(items.count()).toEqual(1);
    });  
    
    it("Remove", function() {
      items = new SortedItems(Episode.prototype.constructor,'start');
      items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
      items.add({start:'2011-09-02',end:'2011-09-21'});
      items.add({start:'2011-09-03',end:'2011-09-22'});
      items.remove(1);
      expect(items.count()).toEqual(2);
    });  
    it("Sortere", function() {
      items = new SortedItems(Episode.prototype.constructor,'start');
      items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
      items.add({start:'2011-09-02',end:'2011-09-21'});
      items.add({start:'2011-09-03',end:'2011-09-22'});
      expect(items.item(2).start).toEqual('2011-09-04');
      expect(items.item(0).start).toEqual('2011-09-02');
    });  
    it("Error handling", function() {
      items = new SortedItems(Episode.prototype.constructor,'start');
      items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
      items.add({start:'2011-09-02',end:'2011-09-21'});
      items.add({start:'2011-09-03',end:'2011-09-22'});
			expect(function () {items.item('sadfasfd');}).toThrow("undefined index");
      expect(function () {items.item(1000);}).toThrow("undefined index");
      //expect(items.item(3)).toThrow("undefined index");
      //expect(items.item(4).start).toThrow('undefined index');
    });  
});


  /*
  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrow("song is already playing");
    });
  });
  */

/*
describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrow("song is already playing");
    });
  });
});
*/