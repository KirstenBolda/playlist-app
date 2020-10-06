var songList = {
  songs: [],

  displaySongs: function () {
    if (this.songs.length === 0) {
      console.log('Your song list is empty!')
    } else {
      console.log('My Playlist:');
      for (let i = 0; i < this.songs.length; i++) {
        // console.log(this.songs[i].songName);

        if (this.songs[i].played === true) {
          console.log('(x)', this.songs[i].songName);
        } else {
          console.log('( )', this.songs[i].songName);
        }
      }
    }
  },

  addSong: function (songName) {
    this.songs.push({
      songName: songName,
      played: false
    });
    this.displaySongs();
  },
  changeSong: function (position, newSong) {
    this.songs[position].songName = newSong;
    this.displaySongs();
  },
  deleteSong: function (position) {
    this.songs.splice(position, 1);
    this.displaySongs();
  },
  togglePlayed: function (position) {
    var song = this.songs[position];
    song.played = !song.played;
    this.displaySongs();
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
    this.displaySongs();
  }
};


var handlers = {
  displaySongs: function () {
    songList.displaySongs();
  },
  addSong: function () {
    var addSongTextInput = document.getElementById('addSongTextInput');
    songList.addSong(addSongTextInput.value);
    addSongTextInput.value = '';
  },
  changeSong: function () {
    var changeSongPositionInput = document.getElementById('changeSongPositionInput');
    var changeSongTextInput = document.getElementById('changeSongTextInput');
    songList.changeSong(changeSongPositionInput.valueAsNumber, changeSongTextInput.value);
    changeSongPositionInput.value = '';
    changeSongTextInput.value = '';
  },
  deleteSong: function () {
    var deleteSongPositionInput = document.getElementById('deleteSongPositionInput');
    songList.deleteSong(deleteSongPositionInput.valueAsNumber);
    deleteSongPositionInput.value = '';
  },
  togglePlayed: function () {
    var togglePlayedPositionInput = document.getElementById('togglePlayedPositionInput');
    songList.togglePlayed(togglePlayedPositionInput.valueAsNumber);
    togglePlayedPositionInput.value = '';
  },
  toggleAll: function () {
    songList.toggleAll();
  }
}

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

  displaySongsAndArtists: function () {
    if (this.songsAndArtists.length === 0) {
      console.log('Your playlist is empty!');
    } else {
      console.log('My Playlist:');
      for (let i = 0; i < this.songsAndArtists.length; i++) {

        if (this.songsAndArtists[i].played === true) {
          console.log('[=====]', this.songsAndArtists[i].song + ' by ' + this.songsAndArtists[i].artist + ' at ' + this.songsAndArtists[i].audioLink);
        } else {
          console.log('[     ]', this.songsAndArtists[i].song + ' by ' + this.songsAndArtists[i].artist  + ' at ' + this.songsAndArtists[i].audioLink);
        }
      }
    }
  },

  addSongAndArtist: function (newSong, newArtist, linkToAudio) {
    this.songsAndArtists.push({
      song: newSong,
      artist: newArtist,
      played: false,
      audioLink: linkToAudio
    });
    this.displaySongsAndArtists();
  },
  changeSongAndArtist: function (position,
    newSong,
    newArtist,
    audioLink) {
    this.songsAndArtists[position].song = newSong;
    this.songsAndArtists[position].artist = newArtist;
    this.songsAndArtists[position].audioLink = audioLink;
    this.displaySongsAndArtists();
  },

  deleteSongAndArtist: function (position) {
    this.songsAndArtists.splice(position, 1);
    this.displaySongsAndArtists();
  },

  togglePlayed: function (position) {
    var song = this.songsAndArtists[position];
    song.played = !song.played;
    this.displaySongsAndArtists();
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
    this.displaySongsAndArtists();
  }
};

var playlistHandlers = {
  displaySongsAndArtists: function () {
    playlist.displaySongsAndArtists();
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
    },
    deleteSongAndArtist: function () {
      var deleteSongPosInput = document.getElementById('deleteSongPosInput');
      playlist.deleteSongAndArtist(deleteSongPosInput.valueAsNumber);
      deleteSongPosInput.value = '';
    },
    togglePlayed: function () {
      var togglePlayedPosInput = document.getElementById('togglePlayedPosInput');
      playlist.togglePlayed(togglePlayedPosInput.valueAsNumber);
      togglePlayedPosInput.value = '';
    },
    toggleAll: function () {
      playlist.toggleAll();
    }
};