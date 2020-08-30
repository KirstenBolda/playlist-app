# Playlist Requirements

![number 2](./img/numbers/number-2.svg)
---
## Display

#### [x] It should have a function to display the songs

#### [x] It should have a function to display the artist associated with each song

## Add
#### [ ] It should have a function to add new songs and artists

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

