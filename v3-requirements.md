# Playlist Requirements

![version](./img/version.svg) ![number 3](./img/numbers/number-3.svg)
---
## Storage

#### [x] It should store the songs in an object

#### [x] It should store the song/artist arrays in a playlist object


## Display

#### [x] It should have a displaySongs method

#### [x] It should have a display Song and Artist method

## Add

#### [x] It should have an add Songs method

#### [x] It should have an add Songs and Artists method

## Modify

#### [x] It should have a change Song method

#### [x] It should have a change Song and Artist method

## Delete

#### [ ] It should have a method to delete a song

#### [ ] It should have a method to delete a song and artist simultaneously

![dots separator](./img/dots-separator.svg)

## Storage

#### It should store the songs in an object

 The original song list:

```
var songs = ['The Trip', 'Carry On', 'Tightrope', 'Blue Jeans'];
```

- create an object containing the songs:
- insert object between `<script></script>` tags in html file
```
var songList = {
  songs: ['The Trip', 'Carry On', 'Tightrope', 'Blue Jeans']
};
```

- enter songs in console to return:
```
 songs: Array(4)
    0: "The Trip"
    1: "Carry On"
    2: "Tightrope"
    3: "Blue Jeans"
```

#### It should store the song/artist arrays in a playlist object

The original song and artist list:
```
var songsAndArtists = [
    ['The Trip','Still Corners'],
    ['Carry On','The Crystal Method'], 
    ['Tightrope','Above and Beyond'], 
    ['Blue Jeans','Lana Del Rey']
    ];   
```
- create an object containing the songs/artists arrays
- insert object between `<script></script>` tags in html file

```
var playlist = {
  songsAndArtists: [
    ['The Trip','Still Corners'],
    ['Carry On','The Crystal Method'], 
    ['Tightrope','Above and Beyond'], 
    ['Blue Jeans','Lana Del Rey']
    ]
};
```
![dots separator](./img/dots-separator.svg)

#### It should have a displaySongs method

- add a method derived from the version 2 function to the songList object

- songList object:
```
var songList = {
  songs: ['The Trip', 'Carry On', 'Tightrope', 'Blue Jeans']
};
```

- display songs function:
```
function displaySongs() {
  console.log('My Playlist:', songs);
}
```
- songList object with display method added:
```
var songList = {
  songs: ['The Trip', 'Carry On', 'Tightrope', 'Blue Jeans'],
  displaySongs: function() {
    console.log('My Playlist:', this.songs);
  }
};
```
- update object between `<script></script>` tags in html file

- run the method to test:

```
songList.displaySongs();
// returns:
My Playlist:
  0: "The Trip"
  1: "Carry On"
  2: "Tightrope"
  3: "Blue Jeans"

```

#### It should have a display Song and Artist method

- playlist object:
```
var playlist = {
  songsAndArtists: [
    ['The Trip','Still Corners'],
    ['Carry On','The Crystal Method'], 
    ['Tightrope','Above and Beyond'], 
    ['Blue Jeans','Lana Del Rey']
    ]
};
```

- display songs and artists function:

```
function displaySongsAndArtists() {
  console.log('My Playlist:', songsAndArtists);
}
```

- playlist object with display method added:

```
var playlist = {
  songsAndArtists: [
    ['The Trip','Still Corners'],
    ['Carry On','The Crystal Method'], 
    ['Tightrope','Above and Beyond'], 
    ['Blue Jeans','Lana Del Rey']
    ],
    displaySongsAndArtists: function() {
      console.log('My Playlist:', this.songsAndArtists);
    }
};
```

- update object between `<script></script>` tags in html file

- run the method to test:

```
playlist.displaySongsAndArtists();
// returns:
My Playlist:
  0: (2) ["The Trip", "Still Corners"]
  1: (2) ["Carry On", "The Crystal Method"]
  2: (2) ["Tightrope", "Above and Beyond"]
  3: (2) ["Blue Jeans", "Lana Del Rey"]

```
![dots separator](./img/dots-separator.svg)

#### It should have an add Songs method

- add a method derived from the version 2 function to the songList object

- songList object:
```
 var songList = {
  songs: ['The Trip', 
          'Carry On', 
          'Tightrope', 
          'Blue Jeans'],
  displaySongs: function() {
    console.log('My Playlist:', this.songs);
  }
};
```

- addSong function:
```
 function addSong(song) {
  songs.push(song);
  displaySongs();
}
```
- songList object with addSong method added:
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
  }
};
```

#### It should have an add Songs and Artists method

- playlist object:

```
var playlist = {
  songsAndArtists: [
    ['The Trip','Still Corners'],
    ['Carry On','The Crystal Method'], 
    ['Tightrope','Above and Beyond'], 
    ['Blue Jeans','Lana Del Rey']
    ],
    displaySongsAndArtists: function() {
      console.log('My Playlist:', this.songsAndArtists);
    }
};
```

- add songs and artists function:

```
function addSongAndArtist([newSong, newArtist]) {
  songsAndArtists.push([newSong, newArtist]);
  displaySongsAndArtists();
}
```

- playlist object with addSongAndArtis method added:

```
var playlist = {
  songsAndArtists: [
    ['The Trip','Still Corners'],
    ['Carry On','The Crystal Method'], 
    ['Tightrope','Above and Beyond'], 
    ['Blue Jeans','Lana Del Rey']
    ],
    displaySongsAndArtists: function() {
      console.log('My Playlist:', this.songsAndArtists);
    },
    addSongAndArtist: function(newSong, newArtist) {
      this.songsAndArtists.push([newSong, newArtist]);
      this.displaySongsAndArtists();
    }
};
```
- update object between `<script></script>` tags in html file

- run the method to test:

```
playlist.addSongAndArtist('Slowly', 'Haberdashery');
// returns:
My Playlist: 
    0: (2) ["The Trip", "Still Corners"]
    1: (2) ["Carry On", "The Crystal Method"]
    2: (2) ["Tightrope", "Above and Beyond"]
    3: (2) ["Blue Jeans", "Lana Del Rey"]
    4: (2) ["Slowly", "Haberdashery"]
```
![dots separator](./img/dots-separator.svg)

#### It should have a change Song method

- add the changeSong method derived from the version 2 function to the songList object

- songList object:
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
  }
};
```
- version 2 changeSong function:

```
function changeSong(position, newSong) {
  songs[position] = newSong;
  displaySongs();
}
```
- changeSong function added as a method:

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
  }
};
```

- test the new method:
```
songList.changeSong(0, 'Infinite Circle' );
// returns:
My Playlist: 
    0: "Infinite Circle"
    1: "Carry On"
    2: "Tightrope"
    3: "Blue Jeans"

```

#### It should have a change Song and Artist method

- add the changeSongAndArtist method derived from the version 2 function to the playlist object

- playlist object:

```
var playlist = {
  songsAndArtists: [
    ['The Trip','Still Corners'],
    ['Carry On','The Crystal Method'], 
    ['Tightrope','Above and Beyond'], 
    ['Blue Jeans','Lana Del Rey']
    ],
    displaySongsAndArtists: function() {
      console.log('My Playlist:', this.songsAndArtists);
    },
    addSongAndArtist: function(newSong, newArtist) {
      this.songsAndArtists.push([newSong, newArtist]);
      this.displaySongsAndArtists();
    }
};
```

- the version 2 addSongAndArtist function:
```
function changeSongAndArtist(songArray, songIndex, artistIndex, newSong, newArtist) {
  songsAndArtists[songArray][songIndex] = newSong;
  songsAndArtists[songArray][artistIndex] = newArtist;
  displaySongsAndArtists();
}
```

- add the changeSongAndArtist method to the playlist object:

```
var playlist = {
  songsAndArtists: [
    ['The Trip','Still Corners'],
    ['Carry On','The Crystal Method'], 
    ['Tightrope','Above and Beyond'], 
    ['Blue Jeans','Lana Del Rey']
    ],
    displaySongsAndArtists: function() {
      console.log('My Playlist:', this.songsAndArtists);
    },
    addSongAndArtist: function(newSong, newArtist) {
      this.songsAndArtists.push([newSong, newArtist]);
      this.displaySongsAndArtists();
    },
    changeSongAndArtist: function(songArray, songIndex, artistIndex, newSong, newArtist) {
      this.songsAndArtists[songArray][songIndex] = newSong;
      this.songsAndArtists[songArray][artistIndex] = newArtist;
      this.displaySongsAndArtists();
    }
};
```

- test the new method:
```
playlist.changeSongAndArtist(2, 0, 1, 'Prayer in C', 'Robin Schulz');
// returns
My Playlist: 
    0: (2) ["The Trip", "Still Corners"]
    1: (2) ["Carry On", "The Crystal Method"]
    2: (2) ["Prayer in C", "Robin Schulz"]
    3: (2) ["Blue Jeans", "Lana Del Rey"]
```
- improve by hard coding song position and artist position:

```
var playlist = {
  songsAndArtists: [
    ['The Trip','Still Corners'],
    ['Carry On','The Crystal Method'], 
    ['Tightrope','Above and Beyond'], 
    ['Blue Jeans','Lana Del Rey']
    ],
    displaySongsAndArtists: function() {
      console.log('My Playlist:', this.songsAndArtists);
    },
    addSongAndArtist: function(newSong, newArtist) {
      this.songsAndArtists.push([newSong, newArtist]);
      this.displaySongsAndArtists();
    },
    changeSongAndArtist: function(songArray, newSong, newArtist) {
      const songIndex = 0;
      const artistIndex = 1;
      this.songsAndArtists[songArray][0] = newSong;
      this.songsAndArtists[songArray][1] = newArtist;
      this.displaySongsAndArtists();
    }
};
```

- test the shorter method:

```
playlist.changeSongAndArtist(0, 'Haunted', 'The Pogues');
// returns:
My Playlist:
  0: (2) ["Haunted", "The Pogues"]
  1: (2) ["Carry On", "The Crystal Method"]
  2: (2) ["Tightrope", "Above and Beyond"]
  3: (2) ["Blue Jeans", "Lana Del Rey"]
  ```
![dots separator](./img/dots-separator.svg)