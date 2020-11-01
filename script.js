// ************PLAYLIST************** //

var playlist = {
  songsAndArtists: [{
      song: "Lucid Dream",
      artist: "Owl City",
      played: false,
      audioLink: "https://www.youtube.com/watch?v=RMaLi0xsEWY"
    },
    {
      song: "Maybe It's Time",
      artist: "Bradley Cooper",
      played: false,
      audioLink: "https://www.youtube.com/watch?v=RdljoTFMhO4"
    }
  ],
  addSongAndArtist: function (newSong, newArtist, linkToAudio) {
    this.songsAndArtists.push({
      song: newSong,
      artist: newArtist,
      played: false,
      audioLink: linkToAudio
    });
  },
  changeSongAndArtist: function (position,
    newSong,
    newArtist,
    audioLink) {
    this.songsAndArtists[position].song = newSong;
    this.songsAndArtists[position].artist = newArtist;
    this.songsAndArtists[position].audioLink = audioLink 
  },

  deleteSongAndArtist: function (position) {
    this.songsAndArtists.splice(position, 1);    
  },

  togglePlayed: function (position) {
    var song = this.songsAndArtists[position];
    song.played = !song.played;
  },
  toggleAll: function () {
    let totalSongs = this.songsAndArtists.length;
    let playedSongs = 0;

    // determine the number of playedSongs:
    for (let i = 0; i < totalSongs; i++) {
      if (this.songsAndArtists[i].played === true) {
        playedSongs++;
      }
    }

    // compare playedSongs to totalSongs:
    if (playedSongs === totalSongs) {
      for (let i = 0; i < totalSongs; i++) {
        this.songsAndArtists[i].played = false;
      }
    } else {
      for (let i = 0; i < totalSongs; i++) {
        this.songsAndArtists[i].played = true;
      }
    }
  }
};

var playlistHandlers = {
  displaySongsAndArtists: function () {
     // playlist.displaySongsAndArtists();
    viewPlaylist.displaySongsAndArtists();
  },
  addSongAndArtist: function () {
   // variables
    var addSongName = document.getElementById('addSongName');
    var addArtistName = document.getElementById('addArtistName');
    var addLinkUrl = document.getElementById('addLinkUrl');
   // call the method from the playlist object
    playlist.addSongAndArtist(addSongName.value, addArtistName.value, addLinkUrl.value);
   // clear the inputs after entering the new data
    addSongName.value = '';
    addArtistName.value = '';
    addLinkUrl.value = '';
    viewPlaylist.displaySongsAndArtists();
  },
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
      viewPlaylist.displaySongsAndArtists();
    },
    deleteSongAndArtist: function () {
      var deleteSongPosInput = document.getElementById('deleteSongPosInput');
      playlist.deleteSongAndArtist(deleteSongPosInput.valueAsNumber);
      deleteSongPosInput.value = '';
      viewPlaylist.displaySongsAndArtists();
    },
    togglePlayed: function () {
      var togglePlayedPosInput = document.getElementById('togglePlayedPosInput');
      playlist.togglePlayed(togglePlayedPosInput.valueAsNumber);
      togglePlayedPosInput.value = '';
      viewPlaylist.displaySongsAndArtists();
    },
    toggleAll: function () {
      playlist.toggleAll();
      viewPlaylist.displaySongsAndArtists();
    }
};

// List of songs and artists without links displayed:

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

      playlistLi.id = i;
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

var songAndArtistUl = document.querySelector('ol');

songAndArtistUl.addEventListener('click', function (event) {
  console.log(event.target.parentNode.id);
});

// List of songs and artists with links displayed:

// var viewPlaylist = {
//   displaySongsAndArtists: function () {
//     var songsAndArtistsOl = document.querySelector('.viewPlaylist');
//     songsAndArtistsOl.innerHTML = '';
//     for (var i = 0; i < playlist.songsAndArtists.length; i++) {
//       var playlistLi = document.createElement('li');
//       var songsAndArtistsDisplay = playlist.songsAndArtists[i];
//       var playlistItemStatus = '';

//       if (songsAndArtistsDisplay.played === true) {
//         playlistItemStatus = '[====] ' + playlist.songsAndArtists[i].song + ' by ' + playlist.songsAndArtists[i].artist + ' at ' + ' "' + playlist.songsAndArtists[i].audioLink + '" ';
//       } else {
//         playlistItemStatus = '[......] ' + playlist.songsAndArtists[i].song + ' by ' + playlist.songsAndArtists[i].artist + ' at ' + ' "' + playlist.songsAndArtists[i].audioLink + '" ';
//       }

//       playlistLi.textContent = playlistItemStatus;
//       songsAndArtistsOl.appendChild(playlistLi);
//     }
//   }
// };
