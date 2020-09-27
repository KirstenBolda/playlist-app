# Playlist Requirements

![version](./img/version.svg) ![number 7](./img/numbers/number-7.svg)

---
## Add Display and Toggle Buttons
[Code for adding display buttons](#buttons)

#### [x] There should be a "Display Songs" button and a "Toggle Played" button in the app

#### [x] There should be a "Display Playlist" button and a "Toggle Played" button for the playlist

## Click button to run display function
[Code for displaying songs and playlist](#display)

#### [x] Clicking "Display Songs" should run songs.displaySongs

#### [x] Clicking "Display Playlist" should run playlist.displayPlaylist

## Click button to toggle played function
[Code for toggle played](#toggle)

#### [ ] Clicking "Toggle Played" should run songlist.toggleAll

#### [ ] Clicking "Toggle Played" should run playlist.toggleAll

![dots separator](./img/dots-separator.svg)

---
##### Linking to an external `script.js` file:

- put the link at the end of the `html` file inside the `<script></script>` tags
```
<script src="./script.js"></script>
```
---

## Buttons

#### There should be a "Display Songs" button and a "Toggle Played" button in the app

- Add the `<button></button>` element to the HTML

- Looks like this: <button></button>

- Enter the name of the button:

`<button>Display Songs</button>`

- Looks like this:  <button>Display Songs</button>

HTML for the display and toggle buttons:

```
<h2>Songlist</h2>

  <button>Display songs</button>
  <br>
  <button>Toggle All songs</button>
  <h2>Playlist</h2>
  
  <button>Display Playlist</button>
  <br>
  <button>Toggle Playlist Songs</button>
```

Looks like this:
<h2>Songlist</h2>

  <button>Display songs</button>
  <button>Toggle All songs</button>
  <h2>Playlist</h2>
  
  <button>Display Playlist</button>
  <button>Toggle Playlist Songs</button>

![dots separator](./img/dots-separator.svg)


## Display

#### Clicking "Display Songs" should run songs.displaySongs

##### Steps:
1. Get access to the display songs button
  - give the button an id: displaySongsButton

  ```
  <button id = "displaySongsButton">Display songs</button>
  <button id = "toggleSongsButton">Toggle All songs</button>
  ```
  - create a variable to represent the button

```
let displaySongsButton = document.getElementById('displaySongsButton');
```
2. Run the displaySongs method when the displaySongsButton is clicked:
  - add an event listener method to the button's variable

```
  displaySongsButton.addEventListener('click', function() {
songList.displaySongs();
});
```

#### Clicking "Display Playlist" should run playlist.displaySongsAndArtists()

##### Steps:
1. Get access to the display playlist button
  - give the button an id: displayPlaylistButton

```
<button id= "displayPlaylistButton">Display Playlist</button>
```
  - create a variable to represent the button

```
let displayPlaylistButton = document.getElementById('displayPlaylistButton');
```

2. Run the displayPlaylist method when the displayPlaylistButton is clicked:
  - add an event listener method to the button's variable

```
  displayPlaylistButton.addEventListener('click', function() {
playlist.displaySongsAndArtists();
});
```
![dots separator](./img/dots-separator.svg)




