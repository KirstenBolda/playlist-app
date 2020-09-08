# Playlist Requirements

![version](./img/version.svg) ![number 3](./img/numbers/number-3.svg)
---
## Storage

#### [x] It should store the songs in an object

#### [x] It should store the song/artist arrays in a playlist object


## Display

#### [ ] It should have a displaySongs method

#### [ ] It should have a display Song and Artist method

## Add

#### [ ] It should have an add Songs method

#### [ ] It should have an add Songs and Artists method

## Modify

#### [ ] It should have a change Song method

#### [ ] It should have a change Song and Artist method

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