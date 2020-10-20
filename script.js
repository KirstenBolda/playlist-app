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
// code for displaying songs in the console (not needed if displaying songs in the DOM)
  // displaySongsAndArtists: function () {
  //   if (this.songsAndArtists.length === 0) {
  //     console.log('Your playlist is empty!');
  //   } else {
  //     console.log('My Playlist:');
  //     for (let i = 0; i < this.songsAndArtists.length; i++) {

  //       if (this.songsAndArtists[i].played === true) {
  //         console.log('[=====]', this.songsAndArtists[i].song + ' by ' + this.songsAndArtists[i].artist + ' at ' + this.songsAndArtists[i].audioLink);
  //       } else {
  //         console.log('[     ]', this.songsAndArtists[i].song + ' by ' + this.songsAndArtists[i].artist  + ' at ' + this.songsAndArtists[i].audioLink);
  //       }
  //     }
  //   }
  // },

  addSongAndArtist: function (newSong, newArtist, linkToAudio) {
    this.songsAndArtists.push({
      song: newSong,
      artist: newArtist,
      played: false,
      audioLink: linkToAudio
    });
    // this.displaySongsAndArtists();
  },
  changeSongAndArtist: function (position,
    newSong,
    newArtist,
    audioLink) {
    this.songsAndArtists[position].song = newSong;
    this.songsAndArtists[position].artist = newArtist;
    this.songsAndArtists[position].audioLink = audioLink;
    // this.displaySongsAndArtists();
  },

  deleteSongAndArtist: function (position) {
    this.songsAndArtists.splice(position, 1);
    //this.displaySongsAndArtists();
  },

  togglePlayed: function (position) {
    var song = this.songsAndArtists[position];
    song.played = !song.played;
    // this.displaySongsAndArtists();
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
    // this.displaySongsAndArtists();
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

      playlistLi.textContent = playlistItemStatus;
      songsAndArtistsOl.appendChild(playlistLi);
    }
  }
};

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


// some work on adding buttons to link up the url

// var viewPlaylist = {
//   displaySongsAndArtists: function () {
//     var songsAndArtistsOl = document.querySelector('.viewPlaylist');
//     songsAndArtistsOl.innerHTML = '';
//     for (var i = 0; i < playlist.songsAndArtists.length; i++) {
//       var playlistLi = document.createElement('li');
//       var playlistButton = document.createElement('button');
//       var playlistLink = document.createElement('a')
//       playlistLi.textContent = playlist.songsAndArtists[i].song;
//       playlistButton.textContent = playlist.songsAndArtists[i].song;
//       playlistLink.textContent = playlist.songsAndArtists[i].audioLink;
//       songsAndArtistsOl.appendChild(playlistLi);
//       songsAndArtistsOl.appendChild(playlistButton);
//       songsAndArtistsOl.appendChild(playlistLink);
//     }
//   }
// };
