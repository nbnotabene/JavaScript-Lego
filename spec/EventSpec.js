describe("Event", function() {
  var event;
  var place;
  var organizer;

  beforeEach(function() {
    event = new Event();
    //place = new Contact();
    //organizer = new Contact();
  });
  describe("Opret event", function() {
    it("should be able to create event", function() {
      event = new Event();
      event.create('sadfasd', 1, "222222", {start:'2011-07-31 20:30',end:'2011-07-31 20:30'});
      expect(event.type()).toEqual('Koncert');
      expect(event.when[0].start).toEqual('2011-07-31 20:30');
    });
    it("should throw an exception if event has no start", function() {
      expect(function() {
        event.create('sadfasd', 1, "222222", {end:'2011-07-31 20:30'});
      }).toThrow("Event skal ha' en start!");
    });
  });
  describe("When event is created", function() {
    beforeEach(function() {
      event = new Event();
      event.create('sadfasd', 1, "222222", {start:'2011-07-31 20:30',end:'2011-07-31 20:30'});
      //place = new Contact();
      //organizer = new Contact();
    });
    it("should create a 'basic' Occurrence", function() {
      expect(event.when[0].type).toEqual('basic');
    });
    it("should be able to modify event", function() {
      event.type('Film');
      expect(event.type()).toEqual('Film');
    });
    it("should be able to add event occurrence", function() {
      event.addOccurrence({start:'2011-07-31 20:30',end:'2011-07-31 20:30'});
      expect(event.when[1].start).toEqual('2011-07-31 20:30');
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
});

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