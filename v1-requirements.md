# Playlist Requirements

![number 1](./img/numbers/number-1.svg)
---
#### [x] It should have a place to store the songs

#### [x] It should have a place to store the artist associated with each song

#### [x] It should have a place to display the songs

#### [x] It should have a place to display the artist associated with each song

#### [x] It should have a way to add new songs

#### [ ] It should have a way to change a song

#### [ ] It should have a way to delete a song

![dots separator](./img/dots-separator.svg)

#### It should have a place to store the songs
 ### Store songs:

 ```
 var songs = ['The Trip', 'Carry On', 'Tightrope', 'Blue Jeans'];
 ```

 ### Store artists:
 ```
 var artists = ['Still Corners','The Crystal Method', 'Above and Beyond', 'Lana Del Rey'];
 ```

 ### Store song and artist array of arrays:
 ```
 var songsAndArtists = [
                ['The Trip','Still Corners'],
                ['Carry On','The Crystal Method'], 
                ['Tightrope','Above and Beyond'], 
                ['Blue Jeans','Lana Del Rey'] 
                ];           
  ```

 ![dots separator](./img/dots-separator.svg)
 
*Note:* Use `about:blank` to create a blank tab in the Chrome browser

#### It should have a place to display the songs

### Display songs:

- pass `songs`, `artists`, `songsAndArtists` variables into `console.log()` method
  - note that variables, unlike strings, don't need to be in quotes 

```
console.log(songs);
// returns: ["The Trip", "Carry On", "Tightrope", "Blue Jeans"]
``` 

```
console.log(artists);
// returns: ["Still Corners", "The Crystal Method", "Above and Beyond", "Lana Del Rey"]
```

```
console.log(songsAndArtists);
// returns: [Array(2), Array(2), Array(2), Array(2)]
  0: (2) ["The Trip", "Still Corners"]
  1: (2) ["Carry On", "The Crystal Method"]
  2: (2) ["Tightrope", "Above and Beyond"]
  3: (2) ["Blue Jeans", "Lana Del Rey"]
``` 

### Display songs with a playlist title:

```
console.log('My Playlist: ', songsAndArtists);
// returns: 
My Playlist:  (4) [Array(2), Array(2), Array(2), Array(2)]
  0: (2) ["The Trip", "Still Corners"]
  1: (2) ["Carry On", "The Crystal Method"]
  2: (2) ["Tightrope", "Above and Beyond"]
  3: (2) ["Blue Jeans", "Lana Del Rey"]
```
![dots separator](./img/dots-separator.svg)

#### It should have a way to add new songs

### Add songs
- use .push method to add songs to the end of the array

```
songs.push('Trust the Sun');
// returns: 5
console.log(songs);
// returns: (5) ["The Trip", "Carry On", "Tightrope", "Blue Jeans", "Trust the Sun"]
```

```
artists.push('Elbow');
// returns: 5
console.log(artists);
// returns: (5) ["Still Corners", "The Crystal Method", "Above and Beyond", "Lana Del Rey", "Elbow"]
```

```
songsAndArtists.push(['Trust the Sun', 'Elbow']);
// returns: 5
console.log(songsAndArtists);
// returns: (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
  0: (2) ["The Trip", "Still Corners"]
  1: (2) ["Carry On", "The Crystal Method"]
  2: (2) ["Tightrope", "Above and Beyond"]
  3: (2) ["Blue Jeans", "Lana Del Rey"]
  4: (2) ["Trust the Sun", "Elbow"]
```
![dots separator](./img/dots-separator.svg)
#### It should have a way to change a song

