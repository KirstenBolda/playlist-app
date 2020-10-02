# Playlist Requirements

![version](./img/version.svg) ![number 8](./img/numbers/number-8.svg)

---

## Refactor to eliminate redundant buttons
[Refactor buttons](#buttons)

#### [x] Connect `display songs` function and `toggle all` function to display songs and toggle all buttons using a handler object

#### [ ] Connect `display playlist` function and `toggle all` function to display playlist and toggle all buttons

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
