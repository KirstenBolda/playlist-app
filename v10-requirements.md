# Playlist Requirements

![version](./img/version.svg) ![number 1](./img/numbers/number-1.svg)![number 0](./img/numbers/number-0.svg)

---

[Create Delete buttons](#create)

#### [x] Create delete buttons in the song list

#### [x] Create delete buttons in the playlist

[Each Song Element should have a delete button](#button)

#### [x] Create a delete button for each song

#### [x] Create a delete button for the song and artist name, and url (one button deletes all three at once)

[Each List Element should have an `id` that has the song position](#position)

#### [x] The `li` element has an `id` corresponding to the song's position
#### [x] The `li` element has an `id` corresponding to the song/artist/url position

[The delete buttons should have access to the song `id`](#access)

#### [x] The delete button should have access to the song `li` element 
#### [x] The delete button should have access to the song/artist/url `li` elements (all three are treated as one item)

[Clicking the delete button should update the song list and the DOM](#update)

#### [ ] Click the delete button to update the songlist.songs array and the DOM

#### [ ] Click the delete button to update the playlist.songsAndArtists array and the DOM

![dots separator](./img/dots-separator.svg)

## Create

#### Create delete buttons for each element in the song list
- add a new method to the `view` object 

```
createDeleteButton: function () {
    
  }
```
- create a variable for the delete button
- return the delete button

```
createDeleteButton: function () {
    var deleteButton = ;
    return deleteButton;
  }
```

- create a new element for the delete button and assign it to the variable

```
var deleteButton = document.createElement('button');
```
- give the button some text element
  - access the `.textContent property`

```
deleteButton.textContent = 'Delete Song';
```
- use `class` to access all the buttons

```
deleteButton.className = 'deleteButton';
```

- test the `createDeleteButton()` method using the console:

enter:
```
view.createDeleteButton();
```

returns:
```  
<button class="deleteButton">Delete Song</button>
```

#### Create delete buttons for each element in the playlist
- add a new method to the `viewPlaylist` object 

```
createDeleteButton: function () {
    
  }
```
- create a variable for the delete button
- return the delete button

```
createDeleteButton: function () {
    var deleteButton = ;
    return deleteButton;
  }
```

- create a new element for the delete button and assign it to the variable

```
var deleteButton = document.createElement('button');
```
- give the button some text element
  - access the `.textContent property`

```
deleteButton.textContent = 'Remove';
```
- use `class` to access all the buttons

```
deleteButton.className = 'deleteButton';
```

- test the `createDeleteButton()` method using the console:

enter:
```
viewPlaylist.createDeleteButton();
```

returns:
```  
<button class="deleteButton">Remove</button>
```
## Button
#### Create a delete button for each song

- append a delete button to the `songLi` element inside the `displaySongs` method
  - use the createDeleteButton method created in the previous step

```
songLi.appendChild(this.createDeleteButton());
```

- full view object looks like this:

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
// create the new delete button here:
      songLi.appendChild(this.createDeleteButton());
      songsUl.appendChild(songLi);
    }
  },
  createDeleteButton: function () {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Song';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
}
```

- test the button addition by entering some songs into the app
- the delete button should appear in the DOM
   - it will not be functional yet


#### Create a delete button for the song and artist name, and url (one button deletes all three at once)

- append a delete button to the `playlistLi` element inside the `displaySongs` method
  - use the createDeleteButton method created in the previous step

```
playlistLi.appendChild(this.createDeleteButton());
```

- full viewPlaylist object looks like this:

```
var viewPlaylist = {
  displaySongsAndArtists: function () {
    var songsAndArtistsOl = document.querySelector('.viewPlaylist');
    songsAndArtistsOl.innerHTML = '';
    for (var i = 0; i < playlist.songsAndArtists.length; i++) {
      var playlistLi = document.createElement('li');
      var songsAndArtistsDisplay = playlist.songsAndArtists[i];
      var playlistItemStatus = '';

      if (songsAndArtistsDisplay.played === true) {
        playlistItemStatus = '[====] ' + playlist.songsAndArtists[i].song + ' by ' + playlist.songsAndArtists[i].artist;
      } else {
        playlistItemStatus = '[......] ' + playlist.songsAndArtists[i].song + ' by ' + playlist.songsAndArtists[i].artist;
      }

      playlistLi.textContent = playlistItemStatus;
      playlistLi.appendChild(this.createDeleteButton());
      songsAndArtistsOl.appendChild(playlistLi);
    }
  },
  createDeleteButton: function () {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
};
```

- test the button addition by entering some songs/artists/urls into the app
- the delete button should appear in the DOM
   - it will not be functional yet

## Position
#### The `li` element should have an `id` corresponding to the song's position
- set the id property of the `songLi` to `i` in the displaySongs method:

```
songLi.id = i;
```

- check that the id has been added by entering some songs and opening the elements inspector

```
<ul class="viewSonglist">
  <li id="0">( ) Hurt<button class="deleteButton">Delete Song</button></li>
  <li id="1">( ) Infinite Circle<button class="deleteButton">Delete Song</button></li>
  <li id="2">( ) The Trip<button class="deleteButton">Delete Song</button></li>
</ul>
```

#### The `li` element should have an `id` corresponding to the song/artist/url position
- set the id property of the `playlistLi` to `i` in the displaySongs method:

```
playlistLi.id = i;
```

- check that the id has been added by entering some songs/artists/urls and opening the elements inspector

```
<ol class="viewPlaylist">
  <li id="0">[......] Lucid Dream by Owl City<button class="deleteButton">Remove</button></li>
  <li id="1">[......] Maybe It's Time by Bradley Cooper<button class="deleteButton">Remove</button></li>
  <li id="2">[......] The Trip by Still Corners<button class="deleteButton">Remove</button></li>
</ol>
```
## Access
#### The delete button should have access to the song `li` element 

- create a single event listener for the delete buttons in the unordered list, instead of creating an event listener for every button

- create a variable `songsUl` that targets the unordered list

```
var songsUl = document.querySelector('ul');
```

- add an event listener with a click event and a callback function to the delete button:
  - add an event parameter to the callback function

```
songsUl.addEventListener('click', function (event) {
    console.log(event);
});
```

- to check this click on the delete button and see the mouse event object output in the console:

```
MouseEvent {isTrusted: true, screenX: -723, screenY: 336, clientX: 548, clientY: 202, …}
```

- check the `target` property on the mouse event object to confirm with item was clicked:
  - hovering over the target property highlights the associated DOM object
  - target indicates which item was clicked on

```
target: button.deleteButton
```

- access the `li` element with the corresponding `id` using the parent node property:
  - listed under `target: button.deleteButton`
```
parentNode: li#0
```
- use dot notation to access the `li` parentNode with the corresponding `id`

```
console.log(event.target.parentNode.id);
```
- click delete button and the id of the corresponding song is displayed to the console:

```
1                            songlist.js:121
```

#### The delete button should have access to the song/artist/url `li` elements (all three are treated as one item)

- below the objects in the js file, create a single event listener for the delete buttons in the ordered list, instead of creating an event listener for every button

- create a variable `songAndArtistUl` that targets the ordered list

```
var songAndArtistUl = document.querySelector('ol');
```

- add an event listener with a click event and a callback function to the delete button:
  - add an event parameter to the callback function

```
songAndArtistUl.addEventListener('click', function (event) {
    console.log(event);
});
```

- to check this click on the delete button and see the mouse event object output in the console:
```
MouseEvent {isTrusted: true, screenX: -384, screenY: 273, clientX: 689, clientY: 138, …}
```

- check the `target` property on the mouse event object to confirm with item was clicked:
  - hovering over the target property highlights the associated DOM object
  - target indicates which item was clicked on

```
target: button.deleteButton
```

- access the `li` element with the corresponding `id` using the parent node property:
  - listed under `target: button.deleteButton`
```
parentNode: li#0
```
- use dot notation to access the `li` parentNode with the corresponding `id`

```
console.log(event.target.parentNode.id);
```

- full function:
```
songAndArtistUl.addEventListener('click', function (event) {
  console.log(event.target.parentNode.id);
});
```
- click delete button and the id of the corresponding song is displayed to the console:

```
0                            songlist.js:151
```

## Update

#### Click the delete button to update the songlist.songs array and the DOM

- get the element that was clicked on

```
var elementClicked = event.target;
```

- check if elementClicked is a delete button

```
if (elementClicked.className === 'deleteButton') {

}
```
- if true, run handlers.deleteSong

```
if (elementClicked.className === 'deleteButton') {
  // run handlers.deleteSong
}
```

##### Modify the `handlers.deleteSong` method
- remove the input line in the `handlers.deleteSong` method:

- original `handlers.deleteSong` method:
```
deleteSong: function () {
    var deleteSongPositionInput = document.getElementById('deleteSongPositionInput');
    songList.deleteSong(deleteSongPositionInput.valueAsNumber);
    deleteSongPositionInput.value = '';
    view.displaySongs();
  },
```

remove the position input and the reset of the position value:
```
var deleteSongPositionInput = document.getElementById('deleteSongPositionInput');

deleteSongPositionInput.value = '';

```
- modified handlers.deleteSong method:
```
deleteSong: function () {

    songList.deleteSong(deleteSongPositionInput.valueAsNumber);
    view.displaySongs();
  },
```

- pass a position into the deleteSong method:

```
deleteSong: function (position) {
    songList.deleteSong(position);
    view.displaySongs();
  },
```

- run handlers.deleteSong with a position parameter, which is the `id` of the `li` element

```
if (elementClicked.className === 'deleteButton') {
  // run handlers.deleteSong(position)
}
```

- elementClicked.parentNode.id is a string and position is a number
- use parseInt to turn a string into a number and paste into handlers.deleteSong:
```
parseInt(elementClicked.parentNode.id);
```



#### Click the delete button to update the playlist.songsAndArtists array and the DOM