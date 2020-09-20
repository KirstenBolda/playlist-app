# Playlist Requirements

![version](./img/version.svg) ![number 5](./img/numbers/number-5.svg)

---

## Should Show Song/Artist Name
[Code for showing songs feature](#show)

#### [x] Show each song name in the songs object

#### [ ] Show each song and artist in the playlist object


## Should indicate whether song has been played
[Code for indicate played songs feature](#played)

#### [ ] Indicate played status of song

#### [ ] Indicate played status of song including artist name


![dots separator](./img/dots-separator.svg)

#### Review: Using a for loop to iterate through the songs array:

```
var songs = ['The Trip', 'Carry On', 'Tightrope', 'Blue Jeans'];

for (var i = 0; i < songs.length; i++ ) {
   console.log(songs[i]);
}
// returns:
The Trip
Carry On
Tightrope
Blue Jeans
```

#Show
![dots separator](./img/dots-separator.svg)

#### Show each song name in the songs object


- version 4 displaySongs method in songList object:

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

- Add a `for` loop to the display songs method

```
var songList = {
      songs: [],

      displaySongs: function () {
        console.log('My Playlist:');
        for (let i = 0; i < this.songs.length; i++ ) {
            console.log(this.songs[i].songName);
        }
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
#### Show each song and artist in the playlist object

- version 4 displaySongs method in playlist object:

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
  changeSongAndArtist: function ( position, 
                                  newSong, 
                                  newArtist, 
                                  audioLink) {
    this.songsAndArtists[position].song = newSong;
    this.songsAndArtists[position].artist = newArtist;
    this.songsAndArtists[position].audioLink = audioLink;
    this.displaySongsAndArtists();
  },
  
  deleteSongAndArtist: function (position) {
    this.songsAndArtists.splice(position, 1);
    this.displaySongsAndArtists();
  },
 
  togglePlayed: function(position) {
    var song = this.songsAndArtists[position];
    song.played = !song.played;
    this.displaySongsAndArtists();
  }
};
```

- Add a `for` loop to the displaySongsAndArtists method:

```
var playlist = {
  songsAndArtists: [],

  displaySongsAndArtists: function () {
    console.log('My Playlist:');
    for (let i = 0; i < this.songsAndArtists.length; i++ ) {
      console.log(this.songsAndArtists[i].song + ' by ' + this.songsAndArtists[i].artist);
    }
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
  changeSongAndArtist: function ( position, 
                                  newSong, 
                                  newArtist, 
                                  audioLink) {
    this.songsAndArtists[position].song = newSong;
    this.songsAndArtists[position].artist = newArtist;
    this.songsAndArtists[position].audioLink = audioLink;
    this.displaySongsAndArtists();
  },
  
  deleteSongAndArtist: function (position) {
    this.songsAndArtists.splice(position, 1);
    this.displaySongsAndArtists();
  },
 
  togglePlayed: function(position) {
    var song = this.songsAndArtists[position];
    song.played = !song.played;
    this.displaySongsAndArtists();
  }
};
```


#Played
![dots separator](./img/dots-separator.svg)