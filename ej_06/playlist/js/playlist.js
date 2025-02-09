

/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }

//-----------------------------------------------------------------------------------------------------------------------------------------------+
/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }
//-----------------------------------------------------------------------------------------------------------------------------------------------+

const musicCatalog = () => {

  //-----------------------------------------------------------------------------------------------------------------------------------------------+

  /**
  * Array of playlists in the catalog.
  * @type {Playlist[]}
  */

  let playlists = [];

  //-----------------------------------------------------------------------------------------------------------------------------------------------+

  const createPlaylist = (playlistName) => {

    /**
    * Adds a new playlist to the catalog.
    * @param {string} playlistName - The name of the new playlist.
    */

    playlists = [...playlists, { name: playlistName, songs: [] }];
  };

  //-----------------------------------------------------------------------------------------------------------------------------------------------+

  const getAllPlaylists = () => {

    /**
    * Gets all playlists in the catalog.
    * @returns {Playlist[]} The list of all playlists.
    */

    return playlists
  };

  //-----------------------------------------------------------------------------------------------------------------------------------------------+

  const removePlaylist = (playlistName) => {

    /**
    * Removes a playlist from the catalog.
    * @param {string} playlistName - The name of the playlist to remove.
    */

    playlists = playlists.filter(({ name }) => name !== playlistName);
  };

  //-----------------------------------------------------------------------------------------------------------------------------------------------+

  const addSongToPlaylist = (playlistName, song) => {

    /**
    * Adds a song to a specific playlist.
    * @param {string} playlistName - The name of the playlist to add the song to.
    * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
    * @throws {Error} If the playlist is not found.
    */

    const playlist = playlists.find(({ name }) => name === playlistName);

    if (!playlist) {
      throw new Error('Playlist not found');
    }

    const newSong = {
      ...song,
      favorite: false
    };

    playlist.songs = [...playlist.songs, newSong];

    playlists = playlists.map(pl => pl.name === playlistName ? playlist : pl);
  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------+

  const removeSongFromPlaylist = (playlistName, title) => {

    /**
    * Removes a song from a specific playlist.
    * @param {string} playlistName - The name of the playlist to remove the song from.
    * @param {string} title - The title of the song to remove.
    * @throws {Error} If the playlist or song is not found.
    */

    let playlist = playlists.find(({ name }) => name === playlistName);

    if (!playlist) {
      throw new Error('Playlist not found');
    }

    let song = playlist.songs.find(({ title: tituloCancion }) => tituloCancion === title);

    if (!song) {
      throw new Error('Song not found');
    }

    const updatedSongs = playlist.songs.filter(({ title: tituloCancion }) => tituloCancion !== title);

    playlists = playlists.map(playlist => playlist.name === playlistName ? { ...playlist, songs: updatedSongs } : playlist);
  };

  //-----------------------------------------------------------------------------------------------------------------------------------------------+

  const favoriteSong = (playlistName, title) => {

    /**
    * Marks a song as a favorite or removes the favorite status.
    * @param {string} playlistName - The name of the playlist containing the song.
    * @param {string} title - The title of the song to mark as a favorite.
    */

    playlists = playlists.map(playlist => {
      if (playlist.name === playlistName) {
        return {
          ...playlist, songs: playlist.songs.map(song => song.title === title ? { ...song, favorite: !song.favorite } : song)
        };
      }
      return playlist;
    });
  };

  //-----------------------------------------------------------------------------------------------------------------------------------------------+

  const sortSongs = (playlistName, criterion) => {

    /**
    * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
    * @param {string} playlistName - The name of the playlist to sort songs in.
    * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
    * @returns {Song[]} The list of sorted songs.
    * @throws {Error} If the playlist is not found or the criterion is invalid.
    */

  };
  //-----------------------------------------------------------------------------------------------------------------------------------------------+
  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
}

const miPlaylist = musicCatalog()

miPlaylist.createPlaylist('Playlist Title 1')

const miCancion1 =
{
  title: 'Song Title1',
  artist: 'Song Artist1',
  genre: 'Song Genre1',
  duration: 180,
  favorite: false
}

const miCancion2 =
{
  title: 'Song Title2',
  artist: 'Song Artist2',
  genre: 'Song Genre2',
  duration: 180,
  favorite: false
}

miPlaylist.createPlaylist('Playlist Title 2')

const miCancion3 =
{
  title: 'Song Title3',
  artist: 'Song Artist3',
  genre: 'Song Genre3',
  duration: 180,
  favorite: true
}

const miCancion4 =
{
  title: 'Song Title4',
  artist: 'Song Artist4',
  genre: 'Song Genre4',
  duration: 180,
  favorite: true
}


miPlaylist.addSongToPlaylist('Playlist Title 1', miCancion1)
miPlaylist.addSongToPlaylist('Playlist Title 1', miCancion2)

miPlaylist.addSongToPlaylist('Playlist Title 2', miCancion3)
miPlaylist.addSongToPlaylist('Playlist Title 2', miCancion4)

miPlaylist.removeSongFromPlaylist('Playlist Title 2', 'Song Title4')

miPlaylist.favoriteSong('Playlist Title 1', 'Song Title1')


//console.log(miPlaylist.createPlaylist('GG'))
//console.log(miPlaylist.getAllPlaylists())

export default musicCatalog;
