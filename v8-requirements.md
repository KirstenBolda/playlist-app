# Playlist Requirements

![version](./img/version.svg) ![number 8](./img/numbers/number-8.svg)

---

## Refactor existing inputs
[Refactor buttons](#buttons)

#### [x] Connect `display songs` function and `toggle all` function to display songs and toggle all buttons using a handler object

#### [x] Connect `display playlist` function and `toggle all` function to display playlist and toggle all buttons using a handler object

## Add inputs for methods requiring an argument

[Add song](#add)

#### [x] Add working controls for `.addSong`

#### [x] Add working controls for `.addSongAndArtist`

[Change song](#change)

#### [x] Add working controls for `.changeSong`

#### [x] Add working controls for `changeSongAndArtist`

[Delete song](#delete)
#### [x] Add working controls for `.deleteSong`

#### [x] Add working controls for `deleteSongAndArtist`

[Toggle played](#played)
#### [x] Add working controls for `.togglePlayed` (songList object)

#### [x] Add working controls for `.togglePlayed` (playlist object)

![dots separator](./img/dots-separator.svg)

## Buttons

### Refactor

- cut id attribute from buttons html
- replace with `onclick` attribute
- create `handlers` object to access the functions from the html
  - handles different clicks on an event
  - all the methods that handle different events will go into this object

```
var handlers = {
  displaySongs: function () {
    songList.displaySongs();
  },
  toggleAll: function () {
    songList.toggleAll()
  }
}
```
- cut `getElementById` and `addEventListener` code

```
let displaySongsButton = document.getElementById('displaySongsButton');
let toggleSongsButton = document.getElementById('toggleSongsButton');

displaySongsButton.addEventListener('click', function () {
  songList.displaySongs();
});
toggleSongsButton.addEventListener('click', function () {
  songList.toggleAll();
});
```

- cut old buttons:

```
<button id = "displaySongsButton">Display songs</button>
<button id = "toggleSongsButton">Toggle All songs</button>
```
![dots separator](./img/dots-separator.svg)

## Add

#### Add a button to add a song

- create a new button for adding songs in `index.html`

```
<div>
  <button onclick="">Add Song</button>
  <input id="addSongTextInput" type="text">
</div>
```

Looks like this:
<div>
  <button onclick="">Add Song</button>
  <input id="addSongTextInput" type="text">
</div>

- add a new method to the handlers object for adding songs

   - access the input using `.getElementById()`
   - add `.value` to access the input from the DOM

```
addSong: function () {
  var addSongTextInput = document.getElementById('addSongTextInput');
  songList.addSong(addSongTextInput.value);
```
- add a final line setting `.value` to an empty string to empty the input box once new song is added

```
addSong: function () {
  var addSongTextInput = document.getElementById('addSongTextInput');
  songList.addSong(addSongTextInput.value);
  addSongTextInput.value = '';
```

### Add buttons to add the song and artist and a link

- create new buttons for adding songs, artists and link in `index.html`

```
<div>
  <button onclick="">Add Song Info</button> 
</div>
```
- add separate inputs with labels for each of the song items in the playlist object:

```
<div class="new_entries">
  <button onclick="playlistHandlers.addSongAndArtist()">Add Song Info</button>
  <br>
  <label for="addSongName">Song Name:</label><input id="addSongName" type="text">
  <br>
  <label for="addArtistName">Artist Name:</label><input id="addArtistName" type="text">
  <br>
  <label for="addLinkUrl">Link to Audio:</label><input id="addLinkUrl" type="text">
</div>
```

Looks like this:
<div class="new_entries">
  <button onclick="playlistHandlers.addSongAndArtist()">Add Song Info</button>
  <br>
  <label for="addSongName">Song Name:</label><input id="addSongName" type="text">
  <br>
  <label for="addArtistName">Artist Name:</label><input id="addArtistName" type="text">
  <br>
  <label for="addLinkUrl">Link to Audio:</label><input id="addLinkUrl" type="text">
</div>

- add a new method to the handlers object for adding each song, artist and url item:

   - access each input using `.getElementById()`
   - add `.value` to access the input from the DOM
   - fill in each of the method parameters with the new variables
   - reset the blank field after the song, artist and url are added

```
addSongAndArtist: function () {
    var addSongName = document.getElementById('addSongName');
    var addArtistName = document.getElementById('addArtistName');
    var addLinkUrl = document.getElementById('addLinkUrl');
    playlist.addSongAndArtist(addSongName.value, addArtistName.value, addLinkUrl.value);
    addSongName.value = '';
    addArtistName.value = '';
    addLinkUrl.value = '';
  }
```

![dots separator](./img/dots-separator.svg)

## Change

#### Add working controls for `.changeSong`

- create the button and inputs for changing a song in a new div in `index.html`
  - two inputs:
    - position of the song to be changed
    - new song to be entered

```
<div>
  <button onclick="handlers.changeSong()">Change Song</button>
  <input id="changeSongPositionInput" type="number">
  <input id="changeSongTextInput" type="text">
</div>
```

Looks like this:
<div>
  <button onclick="handlers.changeSong()">Change Song</button>
  <input id="changeSongPositionInput" type="number">
  <input id="changeSongTextInput" type="text">
</div>

- add the changeSong method to the handlers object:
  - save each input as a variable
  - insert these variables as parameters into the function
    - use valueAsNumber instead of value for a number (value would save the number as a string)
  - call the function
  - clear the inputs after the function has run
    - clear both numbers and strings with value 

```
changeSong: function () {
    var changeSongPositionInput = document.getElementById('changeSongPositionInput');
    var changeSongTextInput = document.getElementById('changeSongTextInput');
    songList.changeSong(changeSongPositionInput.valueAsNumber, changeSongTextInput.value);
    changeSongPositionInput.value = '';
    changeSongTextInput.value = '';
  }
```

#### Add working controls for `changeSongAndArtist`

- create the button and inputs for changing a song, artist or url in a new div in `index.html`
  - two inputs:
    - position of the item to be changed (only need to enter one position, all the items are in the same object)
    - new item to be entered

```
<button onclick="playlistHandlers.changeSongAndArtist()">Change Song Info</button>
<br>
<label for="changeSongPosInput">Song Position:</label>
<input id="changeSongPosInput" type="number">
<br>
<label for="changeSongNameInput">Song Name:</label>
<input id="changeSongNameInput" type="text">
<br>
          
<label for="changeArtistNameInput">Artist Name:</label>
<input id="changeArtistNameInput" type="text">
<br>
          
<label for="changeLinkTextInput">Link URL:</label>
<input id="changeLinkTextInput" type="text">
```
- add the changeSongAndArtist method to the handlers object:
  - save each input as a variable
  - insert these variables as parameters into the function
    - use valueAsNumber instead of value for a number (value would save the number as a string)
  - call the function
  - clear the inputs after the function has run
    - clear both numbers and strings with value 

```
changeSongAndArtist: function () {
  // variables
    var changeSongPosInput = document.getElementById('changeSongPosInput');
    var changeSongNameInput = document.getElementById('changeSongNameInput');
    var changeArtistNameInput = document.getElementById('changeArtistNameInput');
    var changeLinkTextInput = document.getElementById('changeLinkTextInput');
  // call the method from playlist object
    playlist.changeSongAndArtist(changeSongPosInput.valueAsNumber, changeSongNameInput.value, changeArtistNameInput.value, changeLinkTextInput.value);
  // clear the inputs after entering the new data
    changeSongPosInput.value = '';
    changeSongNameInput.value = '';
    changeArtistNameInput.value = '';
    changeLinkTextInput.value = '';
  }
```
![dots separator](./img/dots-separator.svg)

## Delete

#### Add working controls for `.deleteSong`

- create the button and input for deleting a song in a new div in `index.html`
    - position of the song to be deleted

```
<div>
  <button onclick="handlers.deleteSong()">Delete Song</button>
  <input id="deleteSongPositionInput" type="number">
</div>
```

Looks like this:

<div>
  <button onclick="handlers.deleteSong()">Delete Song</button>
  <input id="deleteSongPositionInput" type="number">
</div>

- add the deleteSong method to the handlers object:
  - create a variable for the position input
  - clear the input field after the song is deleted

```
deleteSong: function () {
    var deleteSongPositionInput = document.getElementById('deleteSongPositionInput');
    songList.deleteSong(deleteSongPositionInput.valueAsNumber);
    deleteSongPositionInput.value = '';
  }
```

#### Add working controls for `deleteSongAndArtist`

- create the button and input for deleting a song in a new div in `index.html`
    - input for the position of the song to be deleted
    - input type is number

```
<div>
  <button onclick="handlers.deleteSong()">Delete Song</button>
  <input id="deleteSongPositionInput" type="number" min = 0>
</div>
```

Looks like this:
<div>
  <button onclick="handlers.deleteSong()">Delete Song</button>
  <input id="deleteSongPositionInput" type="number" min = 0>
</div>

- add the deleteSongAndArtist method to the playlisthandlers object:
  - create a variable for the position input
  - clear the input field after the song is deleted

```
deleteSongAndArtist: function () {
      var deleteSongPosInput = document.getElementById('deleteSongPosInput');
      playlist.deleteSongAndArtist(deleteSongPosInput.valueAsNumber);
      deleteSongPosInput.value = '';
    }
```
![dots separator](./img/dots-separator.svg)

## Played

#### Add working controls for `.togglePlayed` (songList object)

- prototype the togglePlayed feature in the `index.html` file
  - add a button with the togglePlayed method onclick
  - add an input field with the type of number for the position of the song to be toggle from played

```
<div>
  <button onclick="handlers.togglePlayed">Toggle Played</button>
  <input id="togglePlayedPositionInput" type="number" min=0>
</div>
```
Looks like this:

<div>
  <button onclick="handlers.togglePlayed">Toggle Played</button>
  <input id="togglePlayedPositionInput" type="number" min=0>
</div>

- add the `togglePlayed` feature to the `handlers` object
  - create a variable for the input using getElementById
  - call the method from the `songList` object
  - clear the input after performing the method

```
togglePlayed: function () {
    var togglePlayedPositionInput = document.getElementById('togglePlayedPositionInput');
    songList.togglePlayed(togglePlayedPositionInput.valueAsNumber);
    togglePlayedPositionInput.value = '';
  }
```

- rearrange the handlers object so the methods are in the same order as the songlist object

#### Add working controls for `.togglePlayed` (playlist object)

- prototype the togglePlayed feature in the `index.html` file
  - add a button with the togglePlayed method onclick
  - add an input field with the type of number for the position of the song to be toggle from played

```
<div class="panel">
  <button onclick="playlistHandlers.togglePlayed()">Toggle Played</button>
  <br>
  <label for="togglePlayedPosInput">Song Position:</label>
  <input id="togglePlayedPosInput" type="number" min=0>
</div>
```

Looks like this:

<div class="panel">
  <button onclick="playlistHandlers.togglePlayed()">Toggle Played</button>
  <br>
  <label for="togglePlayedPosInput">Song Position:</label>
  <input id="togglePlayedPosInput" type="number" min=0>
</div>

- add the `togglePlayed` feature to the `playlistHandlers` object
  - create a variable for the input using getElementById
  - call the method from the `playlist` object
  - clear the input after performing the method

- rearrange the playlistHandlers object so the methods are in the same order as the playlist object

![dots separator](./img/dots-separator.svg)

## ~~~~~  Version 8 Complete ~~~~~