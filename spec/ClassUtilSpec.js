describe("Items", function() {
  var items;
  var item2;
  beforeEach(function() {
    //event = new Event();
    //episode1 = new Episode({start:'2011-09-01',end:'2011-09-20'});
    //episode2 = new Episode({start:'2011-09-02',end:'2011-09-21'});
    //episode3 = new Episode({start:'2011-09-03',end:'2011-09-22'});
    //organizer = new Contact();
    items = new Items(Episode.prototype.constructor);
    items.add({type:'musik',start:'2011-09-04',end:'2011-09-20'});
    items.add({start:'2011-09-02',end:'2011-09-21'});
    items.add({start:'2011-09-03',end:'2011-09-22'});
    item2=items.item(2);
  });
  describe("Normal Items-collection", function() {
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