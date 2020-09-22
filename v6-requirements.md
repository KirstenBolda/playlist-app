# Playlist Requirements

![version](./img/version.svg) ![number 6](./img/numbers/number-6.svg)

---

## If all songs are played, reset them to unplayed
[Code for reset to unplayed](#reset)

#### [x] Toggle the complete list of played songs to unplayed

#### [x] Toggle the complete list of song/artists list items to unplayed

## If some songs are played, toggle all to played
[Code for setting all songs to played](#played)

#### [x] Set all songs to played if some have been played

#### [x] Set all song/artist items to played if some have been played.


![dots separator](./img/dots-separator.svg)

## Reset 

#### If all the songs are played, create a method to toggle them all back to unplayed.

- version 5 code:

```
var songList = {
      songs: [],

      displaySongs: function () {
        if (this.songs.length === 0) {
          console.log('Your song list is empty!')
        } else {
          console.log('My Playlist:');
          for (let i = 0; i < this.songs.length; i++) {
            // console.log(this.songs[i].songName);

            if (this.songs[i].played === true) {
              console.log('(x)', this.songs[i].songName);
            } else {
              console.log('( )', this.songs[i].songName);
            }
          }
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
      },
      togglePlayed: function (position) {
        var song = this.songs[position];
        song.played = !song.played;
        this.displaySongs();
      }
    };
```

- create a new method called `toggleAll`:
  - create variables for:
     - the total songs on the list
     - the number of songs played
  - use a `for` loop to determine the number of songs played by looping through the object's played property
  - create a conditional to compare number of songs to whether each song has been played
  - use another `for` loop to check status of songs
  - compare number of played songs to total number of songs
  - if played songs equals total songs, use a `for` loop to toggle the status back to unplayed
  

```
var songList = {
      songs: [],

      displaySongs: function () {
        if (this.songs.length === 0) {
          console.log('Your song list is empty!')
        } else {
          console.log('My Playlist:');
          for (let i = 0; i < this.songs.length; i++) {
            // console.log(this.songs[i].songName);

            if (this.songs[i].played === true) {
              console.log('(x)', this.songs[i].songName);
            } else {
              console.log('( )', this.songs[i].songName);
            }
          }
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
      },
      togglePlayed: function (position) {
        var song = this.songs[position];
        song.played = !song.played;
        this.displaySongs();
      },
      toggleAll: function( ) {
        let totalSongs = this.songs.length;
        let playedSongs = 0;
        
        // determine the number of played songs:
        for (let i = 0; i < totalSongs; i++) {
          if (this.songs[i].played === true) {
            playedSongs++;
          }
        }
        if (playedSongs === totalSongs ) {
          // reset all the songs to unplayed:
          for (let i = 0; i < totalSongs; i++) {
            this.songs[i].played = false;
          }          
        }
       this.displaySongs();
      }
    };
```

#### If all the songs/artist items are played, create a method to toggle them all back to unplayed.

- version 5 code:

```
var playlist = {
      songsAndArtists: [{
          song: "Lucid Dream",
          artist: "Owl City",
          played: false,
          audioLink: "https://www.youtube.com/watch?v=RMaLi0xsEWY"
        },
        {
          song: "Maybe It's Time",
          artist: "Bradley Cooper",
          played: false,
          audioLink: "https://www.youtube.com/watch?v=RdljoTFMhO4"
        }
      ],

      displaySongsAndArtists: function () {
        if (this.songsAndArtists.length === 0) {
          console.log('Your playlist is empty!');
        } else {
          console.log('My Playlist:');
          for (let i = 0; i < this.songsAndArtists.length; i++) {
           
            if (this.songsAndArtists[i].played === true) {
              console.log('[=====]', this.songsAndArtists[i].song + ' by ' + this.songsAndArtists[i].artist);
            } else {
              console.log('[     ]', this.songsAndArtists[i].song + ' by ' + this.songsAndArtists[i].artist);
            }
          }
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
      changeSongAndArtist: function (position,
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

      togglePlayed: function (position) {
        var song = this.songsAndArtists[position];
        song.played = !song.played;
        this.displaySongsAndArtists();
      }
    };
```
- create a new method called `toggleAll`:
  - create variables for:
     - the total songs on the list
     - the number of songs played
  - use a `for` loop to determine the number of songs played by looping through the object's played property
  - create a conditional to compare number of songs to whether each song has been played
  - use another `for` loop to check status of songs
  - compare number of played songs to total number of songs
  - if played songs equals total songs, use a `for` loop to toggle the status back to unplayed

```
var playlist = {
      songsAndArtists: [{
          song: "Lucid Dream",
          artist: "Owl City",
          played: false,
          audioLink: "https://www.youtube.com/watch?v=RMaLi0xsEWY"
        },
        {
          song: "Maybe It's Time",
          artist: "Bradley Cooper",
          played: false,
          audioLink: "https://www.youtube.com/watch?v=RdljoTFMhO4"
        }
      ],

      displaySongsAndArtists: function () {
        if (this.songsAndArtists.length === 0) {
          console.log('Your playlist is empty!');
        } else {
          console.log('My Playlist:');
          for (let i = 0; i < this.songsAndArtists.length; i++) {
           
            if (this.songsAndArtists[i].played === true) {
              console.log('[=====]', this.songsAndArtists[i].song + ' by ' + this.songsAndArtists[i].artist);
            } else {
              console.log('[     ]', this.songsAndArtists[i].song + ' by ' + this.songsAndArtists[i].artist);
            }
          }
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
      changeSongAndArtist: function (position,
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

      togglePlayed: function (position) {
        var song = this.songsAndArtists[position];
        song.played = !song.played;
        this.displaySongsAndArtists();
      },
      toggleAll: function() {
        let totalSongs = this.songsAndArtists.length;
        let playedSongs = 0;

        // determine the number of playedSongs:
        for (let i = 0; i < totalSongs; i++) {
          if (this.songsAndArtists[i].played === true) {
            playedSongs++;
          }
        }

        // compare playedSongs to totalSongs:
        if (playedSongs === totalSongs ) {
          for(let i = 0; i < totalSongs; i++) {
            this.songsAndArtists[i].played = false;
          }
        }
        this.displaySongsAndArtists();
      }
    };
```

![dots separator](./img/dots-separator.svg)

##Played

#### Set all songs to played if some have been played

- version 5 code for songs with toggleAll method:
  - add an `else` statement to set all songs to played if only some of them have been played

```
var songList = {
      songs: [],

      displaySongs: function () {
        if (this.songs.length === 0) {
          console.log('Your song list is empty!')
        } else {
          console.log('My Playlist:');
          for (let i = 0; i < this.songs.length; i++) {
            // console.log(this.songs[i].songName);

            if (this.songs[i].played === true) {
              console.log('(x)', this.songs[i].songName);
            } else {
              console.log('( )', this.songs[i].songName);
            }
          }
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
      },
      togglePlayed: function (position) {
        var song = this.songs[position];
        song.played = !song.played;
        this.displaySongs();
      },
      toggleAll: function( ) {
        let totalSongs = this.songs.length;
        let playedSongs = 0;
        
        // determine the number of played songs:
        for (let i = 0; i < totalSongs; i++) {
          if (this.songs[i].played === true) {
            playedSongs++;
          }
        }
    // if all songs are played set them to unplayed:
        if (playedSongs === totalSongs ) {
          // reset all the songs to unplayed:
          for (let i = 0; i < totalSongs; i++) {
            this.songs[i].played = false;
          }          
        } else {
  // if some songs are played set all songs to played:
          for (let i = 0; i < totalSongs; i++) {
            this.songs[i].played = true;
          } 
        }
       this.displaySongs();
      }
    };
```

#### Set all song/artist items to played if some have been played.

- version 5 code for songs with toggleAll method:
  - add an `else` statement to toggleAll to set all songs to played if only some of them have been played

```
var playlist = {
      songsAndArtists: [{
          song: "Lucid Dream",
          artist: "Owl City",
          played: false,
          audioLink: "https://www.youtube.com/watch?v=RMaLi0xsEWY"
        },
        {
          song: "Maybe It's Time",
          artist: "Bradley Cooper",
          played: false,
          audioLink: "https://www.youtube.com/watch?v=RdljoTFMhO4"
        }
      ],

      displaySongsAndArtists: function () {
        if (this.songsAndArtists.length === 0) {
          console.log('Your playlist is empty!');
        } else {
          console.log('My Playlist:');
          for (let i = 0; i < this.songsAndArtists.length; i++) {
           
            if (this.songsAndArtists[i].played === true) {
              console.log('[=====]', this.songsAndArtists[i].song + ' by ' + this.songsAndArtists[i].artist);
            } else {
              console.log('[     ]', this.songsAndArtists[i].song + ' by ' + this.songsAndArtists[i].artist);
            }
          }
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
      changeSongAndArtist: function (position,
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

      togglePlayed: function (position) {
        var song = this.songsAndArtists[position];
        song.played = !song.played;
        this.displaySongsAndArtists();
      },
      toggleAll: function() {
        let totalSongs = this.songsAndArtists.length;
        let playedSongs = 0;

        // determine the number of playedSongs:
        for (let i = 0; i < totalSongs; i++) {
          if (this.songsAndArtists[i].played === true) {
            playedSongs++;
          }
        }

        // compare playedSongs to totalSongs:
        if (playedSongs === totalSongs ) {
          for(let i = 0; i < totalSongs; i++) {
            this.songsAndArtists[i].played = false;
          }
        } else {
          for(let i = 0; i < totalSongs; i++) {
            this.songsAndArtists[i].played = true;
          }
        }
        this.displaySongsAndArtists();
      }
    };
```
![dots separator](./img/dots-separator.svg)
## ~~~~~  Version 6 Complete ~~~~~