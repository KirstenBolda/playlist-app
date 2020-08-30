# Playlist Requirements

![number 2](./img/numbers/number-2.svg)
---
## Display

#### [x] It should have a function to display the songs

#### [x] It should have a function to display the artist associated with each song

## Add
#### [x] It should have a function to add new songs and artists

## Modify
#### [ ] It should have a function to change a song

#### [ ] It should have a function to change an artist

#### [ ] It should have a function to change an artist and song

## Delete

#### [ ] It should have a function to delete a song

#### [ ] It should have a function to delete an artist

#### [ ] It should have a function to delete a song and artist together

![dots separator](./img/dots-separator.svg)

#### It should have a function to display the songs

The songs to display:
```
var songs = ['The Trip', 'Carry On', 'Tightrope', 'Blue Jeans'];
```

- create a function to display the songs

```
function displaySongs() {
  // code to run
  console.log('My Playlist:', songs);
}
```
- run the function:
```
displaySongs()
// returns:
My Playlist: (4) ["The Trip", "Carry On", "Tightrope", "Blue Jeans"]
```

#### It should have a function to display the artist associated with each song

The song and artist array:

```
var songsAndArtists = [
                ['The Trip','Still Corners'],
                ['Carry On','The Crystal Method'], 
                ['Tightrope','Above and Beyond'], 
                ['Blue Jeans','Lana Del Rey'] 
                ];  
``` 
- create a function to display the song/artist array

```
function displaySongsAndArtists() {
  console.log('My Playlist:', songsAndArtists);
}
```
- run the function:
```
displaySongsAndArtists()
// returns:
My Playlist: 
          0: (2) ["The Trip", "Still Corners"]
          1: (2) ["Carry On", "The Crystal Method"]
          2: (2) ["Tightrope", "Above and Beyond"]
          3: (2) ["Blue Jeans", "Lana Del Rey"]

```
![dots separator](./img/dots-separator.svg)

#### It should have a function to add new songs and artists

##### Starting with just songs:

The original song list:
```
var songs = ['The Trip', 'Carry On', 'Tightrope', 'Blue Jeans'];
```

- create a function to add a song:

```
function addSong() {
  songs.push('New Song');
}
```
- use the function to add a song:

```
addSong()
// returns:
undefined
```

- view the new array using the `displaySongs()` function created in step one

```
displaySongs()
// returns:
My Playlist: (5) ["The Trip", "Carry On", "Tightrope", "Blue Jeans", "New Song"]
```

- instead of returning undefined and then running the displaySongs() function separately, update the addSong() function to include the `displaySongs()` function inside the `addSong()` function
```
function addSong() {
  songs.push('New Song');
  displaySongs();
}
```

- call addSong() function:
```
addSong()
// returns:
My Playlist: (6) ["The Trip", "Carry On", "Tightrope", "Blue Jeans", "New Song", "New Song"]
```

- customize the addSong() function by adding a parameter for the song to be added
- need to provide a value for song when calling the function

```
function addSong(song) {
  songs.push(song);
  displaySongs();
}
```
- call addSong() function with a song:
   - make sure the value is a string
```
addSong('Infinite Circle')
// returns:
My Playlist: (7) ["The Trip", "Carry On", "Tightrope", "Blue Jeans", "New Song", "New Song", "Infinite Circle"]
```

##### Add the song and artist array:

The original song and artist list:
```
var songsAndArtists = [
                ['The Trip','Still Corners'],
                ['Carry On','The Crystal Method'], 
                ['Tightrope','Above and Beyond'], 
                ['Blue Jeans','Lana Del Rey']
                ];           
```
- make sure `displaySongsAndArtists()` is available in the program:

```
function displaySongsAndArtists() {
  console.log('My Playlist:', songsAndArtists);
}
```
- add a new song and artist array to the songsAndArtists array:
```
function addSongAndArtist() {
  songsAndArtists.push(['New Song','New Artist']);
  displaySongsAndArtists();
}
```
- customize the function with parameters for the new song and artist array
```
function addSongAndArtist([newSong, newArtist]) {
  songsAndArtists.push([newSong, newArtist]);
  displaySongsAndArtists();
}
```
- run the function with the song and artist array as the argument
  - keep track of quotes and brackets syntax!

```
addSongAndArtist(['Infinite Circle', 'James Blackshaw'])
// returns
My Playlist: 
    0: (2) ["The Trip", "Still Corners"]
    1: (2) ["Carry On", "The Crystal Method"]
    2: (2) ["Tightrope", "Above and Beyond"]
    3: (2) ["Blue Jeans", "Lana Del Rey"]
    4: (2) ["Infinite Circle", "James Blackshaw"]
```
![dots separator](./img/dots-separator.svg)

#### It should have a function to change a song

The original song list:
```
var songs = ['The Trip', 'Carry On', 'Tightrope', 'Blue Jeans'];
```

- use parameters to access the song to be changed
  - Two parameters:
    - 1. The song to be changed
    - 2. The new value for the song

```
function changeSong(position, newSong) {
  songs[position] = newSong;
}
```
- improve the function by including displaySongs() inside the function
```
function changeSong(position, newSong) {
  songs[position] = newSong;
  displaySongs();
}
```
- call the function:

```
changeSong(0, 'The Trip')
// returns:
My Playlist: (4) ["The Trip", "Carry On", "Tightrope", "Blue Jeans"]
```

#### It should have a function to change an artist and song

The original song and artist list:
```
var songsAndArtists = [
                ['The Trip','Still Corners'],
                ['Carry On','The Crystal Method'], 
                ['Tightrope','Above and Beyond'], 
                ['Blue Jeans','Lana Del Rey']
                ];           
```
- use parameters to access the song to be changed
  - Two parameters:
    - 1. The song to be changed
    - 2. The new value for the song
```
function changeSongOrArtist(position, position2, newData) {
  songsAndArtists[position][position2] = newData;
  displaySongsAndArtists();
}
```

console.log(songsAndArtists[0][1]);
