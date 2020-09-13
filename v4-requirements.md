# Playlist Requirements

![version](./img/version.svg) ![number 4](./img/numbers/number-4.svg)
---

## Should Add Song Objects
[Code for adding songs feature](#add)

#### [x] Add an object for songs instead of a string

#### [x] Add a song/artist object instead of an array

#### [x] Add a link to an audio file of the song in the playlist array

## Modify Song Name
[Code for modifying songs feature](#modify)

#### [x] Update changeSong to change a song name property

#### [ ] Update changeSongOrArtist to change a song, artist or url property

## Change song status
[Code for changing songs status feature](#status)

#### [ ] Song status should change from played to not played

#### [ ] Song/artist status should change from played to not played

## Replay Songs
[Code for replay songs feature](#repeat)

#### [ ] It should have a method to repeat a song

#### [ ] It should have a method to repeat a song and artist 


![dots separator](./img/dots-separator.svg)
## Add

#### It should store the songs as an object instead of as a string

- version 3 object:
```  
var songList = {
    songs: ['The Trip', 
            'Carry On', 
            'Tightrope', 
            'Blue Jeans'],
    displaySongs: function() {
      console.log('My Playlist:', this.songs);
    },
    addSong: function(song) {
      this.songs.push(song);
      this.displaySongs();
    },
    changeSong: function(position, newSong) {
      this.songs[position] = newSong;
      this.displaySongs();
    }, 
    deleteSong: function(position) {
      this.songs.splice(position, 1);
      this.displaySongs();
    }
  };
  ```

  - first remove the songs array where songs are stored as text:

```  
var songList = {
    songs: []


    displaySongs: function() {
      console.log('My Playlist:', this.songs);
    },
    addSong: function(song) {
      this.songs.push(song);
      this.displaySongs();
    },
    changeSong: function(position, newSong) {
      this.songs[position] = newSong;
      this.displaySongs();
    }, 
    deleteSong: function(position) {
      this.songs.splice(position, 1);
      this.displaySongs();
    }
  };
```
- modify addSong method to push an object with properties
of song name and whether song has been played yet:

```  
var songList = {
    songs: [],

    displaySongs: function() {
      console.log('My Playlist:', this.songs);
    },
    addSong: function(songName) {
      this.songs.push({
       songName: songName,
       played: false
      });
      this.displaySongs();
    },
    changeSong: function(position, newSong) {
      this.songs[position] = newSong;
      this.displaySongs();
    }, 
    deleteSong: function(position) {
      this.songs.splice(position, 1);
      this.displaySongs();
    }
  };
  ```

  - test the new method:
``` 
 songList.addSong('Wildness');
  // returns:
  My Playlist: 
    0: {songName: "Wildness", played: false}
```

#### Add a song/artist object instead of an array

- version 3 object:
```
var playlist = {
      songsAndArtists: [
        ['The Trip', 'Still Corners'],
        ['Carry On', 'The Crystal Method'],
        ['Tightrope', 'Above and Beyond'],
        ['Blue Jeans', 'Lana Del Rey']
      ],
      displaySongsAndArtists: function () {
        console.log('My Playlist:', this.songsAndArtists);
      },
      addSongAndArtist: function (newSong, newArtist) {
        this.songsAndArtists.push([newSong, newArtist]);
        this.displaySongsAndArtists();
      },
      changeSongAndArtist: function (songArray, newSong, newArtist) {
        const songIndex = 0;
        const artistIndex = 1;
        this.songsAndArtists[songArray][0] = newSong;
        this.songsAndArtists[songArray][1] = newArtist;
        this.displaySongsAndArtists();
      },
      deleteSongAndArtist: function (position) {
        this.songsAndArtists.splice(position, 1);
        this.displaySongsAndArtists();
      }
    };
```

- first remove the songs array where songs are stored as text:
```
var playlist = {
      songsAndArtists: [],

      displaySongsAndArtists: function () {
        console.log('My Playlist:', this.songsAndArtists);
      },
      addSongAndArtist: function (newSong, newArtist) {
        this.songsAndArtists.push([newSong, newArtist]);
        this.displaySongsAndArtists();
      },
      changeSongAndArtist: function (songArray, newSong, newArtist) {
        const songIndex = 0;
        const artistIndex = 1;
        this.songsAndArtists[songArray][0] = newSong;
        this.songsAndArtists[songArray][1] = newArtist;
        this.displaySongsAndArtists();
      },
      deleteSongAndArtist: function (position) {
        this.songsAndArtists.splice(position, 1);
        this.displaySongsAndArtists();
      }
    };
```
- modify addSong method to push an object with properties
of song name and whether song has been played yet:

```
var playlist = {
      songsAndArtists: [],

      displaySongsAndArtists: function () {
        console.log('My Playlist:', this.songsAndArtists);
      },
      addSongAndArtist: function (newSong, newArtist, linkToAudio) {
        this.songsAndArtists.push({
          song: newSong,
          artist: newArtist,
          played: false,
          audioLink: linkToAudio
        });
        this.displaySongsAndArtists();
      },
      changeSongAndArtist: function (songArray, newSong, newArtist) {
        const songIndex = 0;
        const artistIndex = 1;
        this.songsAndArtists[songArray][0] = newSong;
        this.songsAndArtists[songArray][1] = newArtist;
        this.displaySongsAndArtists();
      },
      deleteSongAndArtist: function (position) {
        this.songsAndArtists.splice(position, 1);
        this.displaySongsAndArtists();
      }
    };
```
- test the method using two sets of parameters, one with an audio link to YouTube, one with a link to a local copy of a song:

```
playlist.addSongAndArtist('Lucid Dream', 'Owl City', 'https://www.youtube.com/watch?v=RMaLi0xsEWY')
// returns:
My Playlist:
  0: {song: "Lucid Dream", artist: "Owl City", played: false, audioLink: "https://www.youtube.com/watch?v=RMaLi0xsEWY"}

playlist.addSongAndArtist('The Trip', 'Still Corners', '/Users/kirstenbolda/Music/Music/Media.localized/Still Corners/Strange Pleasures (Bonus Track Version)/01 The Trip.m4a' )
// returns:
My Playlist:
  (2) [{…}, {…}]
    0:
      artist: "Owl City"
      audioLink: "https://www.youtube.com/watch?v=RMaLi0xsEWY"
      played: false
      song: "Lucid Dream"
      __proto__: Object
    1:
      artist: "Still Corners"
      audioLink: "/Users/xxxxxxxxxx/Music/Music/Media.localized/Still Corners/Strange Pleasures (Bonus Track Version)/01 The Trip.m4a"
      played: false
      song: "The Trip"
```
![dots separator](./img/dots-separator.svg)

## Modify

#### Modify Song Name

#### Update changeSong to change a song name property

- version 3 changeSong method:

```
var songList = {
      songs: [],

      displaySongs: function () {
        console.log('My Playlist:', this.songs);
      },
      addSong: function (songName) {
        this.songs.push({
          songName: songName,
          played: false
        });
        this.displaySongs();
      },
      changeSong: function (position, newSong) {
        this.songs[position] = newSong;
        this.displaySongs();
      },
      deleteSong: function (position) {
        this.songs.splice(position, 1);
        this.displaySongs();
      }
    };
```

- update changeSong to modify the text of a song with songName property in songList property:

```
var songList = {
      songs: [],

      displaySongs: function () {
        console.log('My Playlist:', this.songs);
      },
      addSong: function (songName) {
        this.songs.push({
          songName: songName,
          played: false
        });
        this.displaySongs();
      },
      changeSong: function (position, newSong) {
        this.songs[position].songName = newSong;
        this.displaySongs();
      },
      deleteSong: function (position) {
        this.songs.splice(position, 1);
        this.displaySongs();
      }
    };
```
- test the new method:

```
// first add a song:
songList.addSong('Wildness');
// returns:
My Playlist:
    0: {songName: "Wildness", played: false}
// then change the song in position 0
songList.changeSong("Lucid Dreaming");
// returns:
My Playlist:
    0: {songName: "Lucid Dreaming", played: false}
```


#### Update changeSongOrArtist to change a song, artist or url property

![number 4](./img/numbers/number-4.svg)
![dots separator](./img/dots-separator.svg)

## Status



![dots separator](./img/dots-separator.svg)

## Repeat


![dots separator](./img/dots-separator.svg)

