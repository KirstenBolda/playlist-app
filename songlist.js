// ************SONGLIST************** //

var songList = {
  songs: [],

  addSong: function (songName) {
    this.songs.push({
      songName: songName,
      played: false
    });
    //this.displaySongs();
  },
  changeSong: function (position, newSong) {
    this.songs[position].songName = newSong;
    //this.displaySongs();
  },
  deleteSong: function (position) {
    this.songs.splice(position, 1);
    //this.displaySongs();
  },
  togglePlayed: function (position) {
    var song = this.songs[position];
    song.played = !song.played;
    //this.displaySongs();
  },
  toggleAll: function () {
    let totalSongs = this.songs.length;
    let playedSongs = 0;

    // determine the number of played songs:
    for (let i = 0; i < totalSongs; i++) {
      if (this.songs[i].played === true) {
        playedSongs++;
      }
    }
    // if all songs are played set them to unplayed:
    if (playedSongs === totalSongs) {
      // reset all the songs to unplayed:
      for (let i = 0; i < totalSongs; i++) {
        this.songs[i].played = false;
      }
    } else {
      // if some songs are played set all songs to played:
      for (let i = 0; i < totalSongs; i++) {
        this.songs[i].played = true;
      }
    }
    //this.displaySongs();
  }
};


var handlers = {
  // displaySongs: function () {
  //   songList.displaySongs();
  // },
  addSong: function () {
    var addSongTextInput = document.getElementById('addSongTextInput');
    songList.addSong(addSongTextInput.value);
    addSongTextInput.value = '';
    view.displaySongs();
  },
  changeSong: function () {
    var changeSongPositionInput = document.getElementById('changeSongPositionInput');
    var changeSongTextInput = document.getElementById('changeSongTextInput');
    songList.changeSong(changeSongPositionInput.valueAsNumber, changeSongTextInput.value);
    changeSongPositionInput.value = '';
    changeSongTextInput.value = '';
    view.displaySongs();
  },
  deleteSong: function () {
    var deleteSongPositionInput = document.getElementById('deleteSongPositionInput');
    songList.deleteSong(deleteSongPositionInput.valueAsNumber);
    deleteSongPositionInput.value = '';
    view.displaySongs();
  },
  togglePlayed: function () {
    var togglePlayedPositionInput = document.getElementById('togglePlayedPositionInput');
    songList.togglePlayed(togglePlayedPositionInput.valueAsNumber);
    togglePlayedPositionInput.value = '';
    view.displaySongs();
  },
  toggleAll: function () {
    songList.toggleAll();
    view.displaySongs();
  }
}

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

      songLi.id = i;
      songLi.textContent = songTextWithStatus;
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
};

var songsUl = document.querySelector('ul');

songsUl.addEventListener('click', function (event) {
  // console.log(event.target.parentNode.id);
  var elementClicked = event.target;

  if (elementClicked.className === 'deleteButton') {
    handlers.deleteSong(parseInt(elementClicked.parentNode.id));
  }
});


