# Playlist Requirements

![version](./img/version.svg) ![number 9](./img/numbers/number-9.svg)

---

[Create a List Element for each song](#list)

#### [x] Add a `<li>` element for each song

#### [x] Add a `<li>` element for each song, artist and url

[Each List Element should contain the song name](#contain)

#### [x] Insert the text for the song name into the `<li>` element

#### [x] Insert the text for the song and artist name, and the url into the `<li>` element

[Each List Element should show whether the song was played](#played)

#### [ ] Display the played status of each song

#### [ ] Display the played status of the song alongside the artist and the url

![dots separator](./img/dots-separator.svg)

## List

#### Add a `<li>` element for each song

##### Inserting elements into the DOM
- use JavaScript to dynamically insert list items into the DOM
  - create a list item variable

```
var songLi = document.createElement('li');
songLi
// returns
<li></li>
```

- select the unordered list item in the DOM:

```
var songsUl = document.querySelector('ul');
songsUl
// returns
<ul>
    </ul>
```

- add the list item to the list using `appendChild()`

```
songsUl.appendChild(songLi);
// returns
<li></li>
// inserts empty bullet on the page
```

##### Create an object for viewing elements in the DOM

- make sure there is a `<ul></ul>` element in the `html`
- create a new object called `view`
  - doesn't change any logic or provide data
  - only affects what the user sees by rendering the data to the screen
- select the `<ul></ul>` and save into a variable
  - add a class if there will be more than one `<ul></ul>`
  - `class = "viewSonglist"`
- clear the innerHTML of the `<ul></ul>` before loading the new list
- create `<li></li>` and save into a variable
- insert `<li></li>` into the `<ul></ul>` using the `.appendChild` method

The `view` object:
```
var view = {
  displaySongs: function () {
    var songsUl = document.querySelector('.viewSonglist');
    songsUl.innerHTML = '';
    for (var i = 0; i < songList.songs.length; i++) {
      var songLi = document.createElement('li');
      songsUl.appendChild(songLi);
    }
  }
}
```
##### Create an object for viewing ordered playlist elements in the DOM
- create a `<ol></ol>` element in the `html`
  - the songs should be numbered to play in a given order

- create a new object called `viewPlaylist`
- select the `<ol></ol>` and save into a variable
  - for more than one `<ol></ol>` per page add a class 
  - `class="viewPlaylist"`
- clear the innerHTML of the `<ol></ol>` before loading the new list
- create `<li></li>` and save into a variable
- insert `<li></li>` into the `<ol></ol>` using the .appendChild method

```
var viewPlaylist = {
  displaySongsAndArtists: function () {
    var songsAndArtistsOl = document.querySelector('.viewPlaylist');
    songsAndArtistsOl.innerHTML = '';
    for (var i = 0; i < playlist.songsAndArtists.length; i++) {
      var playlistLi = document.createElement('li');
      songsAndArtistsOl.appendChild(playlistLi);
    }
  }
};
```

![dots separator](./img/dots-separator.svg)

## Contain

##### Insert the text for the song name into the `<li>` element

- use `.textContent` method to add text to the `songsLi` variable
 - access the `songName` property for each of the songs
```
songsLi.textContent = songList.songs[i].songName;
```

- `view` object with `.textContent` method:
```
var view = {
  displaySongs: function () {
    var songsUl = document.querySelector('.viewSonglist');
    songsUl.innerHTML = '';
    for (var i = 0; i < songList.songs.length; i++) {
      var songLi = document.createElement('li');
      var song = songList.songs[i];
      var songTextWithStatus = '';
      songLi.textContent = songList.songs[i].songName;
      songsUl.appendChild(songLi);
    }
  }
}
```

#### Add a `<li>` element containing the song, artist and url

##### Insert the text for the song and artist name, and the url into the `<li>` element

- create a `<ol></ol>` element in the `html`
  - the songs should be numbered to play in a given order

- create a new object called `viewPlaylist`
- select the `<ol></ol>` and save into a variable
  - for more than one `<ol></ol>` per page add a class 
  - `class="viewPlaylist"`
- clear the innerHTML of the `<ol></ol>` before loading the new list
- create `<li></li>` and save into a variable
- insert `<li></li>` into the `<ol></ol>` using the .appendChild method

```
var viewPlaylist = {
  displaySongsAndArtists: function () {
    var songsAndArtistsOl = document.querySelector('.viewPlaylist');
    songsAndArtistsOl.innerHTML = '';
    for (var i = 0; i < playlist.songsAndArtists.length; i++) {
      var playlistLi = document.createElement('li');
      playlistLi.textContent = playlist.songsAndArtists[i].song + 
      ' by ' + playlist.songsAndArtists[i].artist + 
      ' at ' + playlist.songsAndArtists[i].audioLink;
      songsAndArtistsOl.appendChild(playlistLi);
    }
  }
};
```

- for adding `<a></a>` links into the list try: http://jsfiddle.net/BFvXf/


![dots separator](./img/dots-separator.svg)

## Played

#### Display the played status of each song

- create a variable that will change based on the played / not played status
  - `var songTextWithStatus = ''; `
- use `if` / `else` to determine whether song was played
```
  if (song.played === true) {
        songTextWithStatus = '(x) ' + song.songName;
      } else {
        songTextWithStatus = '( ) ' + song.songName;
      }
```
- create variable for song to access the each song:
  - `var song = songList.songs[i];`
  - this variable is optional but saves time and makes code easier to read
- set .textContent to result of conditional
  - `songLi.textContent = songTextWithStatus;`

- `view` object with played status conditional:
```
var view = {
  displaySongs: function () {
    var songsUl = document.querySelector('.viewSonglist');
    songsUl.innerHTML = '';
    for (var i = 0; i < songList.songs.length; i++) {
      var songLi = document.createElement('li');
      var song = songList.songs[i];
      var songTextWithStatus = '';

      if (song.played === true) {
          songTextWithStatus = '(x) ' + song.songName;
      } else {
        songTextWithStatus = '( ) ' + song.songName;
      }

      songLi.textContent = songTextWithStatus;
      songsUl.appendChild(songLi);
    }
  }
}
```

#### Display the played status of the song alongside the artist and the url