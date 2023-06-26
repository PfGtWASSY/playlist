import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import DetailPlaylist from './DetailPlaylist';
import { Playlist } from './Playlist';
import PlaylistCreateDialog from './PlaylistCreateDialog';
import PlaylistRow from './PlaylistRow';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    transform: 'translate(-50%, -50%)'
  }
};

const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [playlists, setPlaylists] = useState([] as Playlist[]);

  const handleAddClick = () => {
    setModalIsOpen(true);
  }

  const handleModalClose = () => {
    setModalIsOpen(false);
  }

  const handlePlaylistCreate = (newPlaylist: Playlist) => {
    const newPlaylists = [...playlists, newPlaylist];
    setPlaylists(newPlaylists);
    setModalIsOpen(false);
  }

  const handlePlaylistTitleChange = (id: number, title: string) => {
    const newPlaylists = playlists.map((pl) => {
      return pl.id === id
        ? { ...pl, title: title }
        : pl;
    });
    setPlaylists(newPlaylists);
  }

  const handlePlaylistMemoChange = (id: number, memo: string) => {
    const newPlaylists = playlists.map((pl) => {
      return pl.id === id
        ? { ...pl, memo: memo }
        : pl;
    });
    setPlaylists(newPlaylists);
  }

  const handlePlaylistDelete = (id: number) => {
    const newPlaylists = playlists.filter((pl) => pl.id !== id);
    setPlaylists(newPlaylists);
  }

  const playlistRows = playlists.map((pl) => {
    return (
      <PlaylistRow
        playlist={pl}
        key={pl.id}
        onTitleChange={(id, title) => handlePlaylistTitleChange(id, title)}
        onMemoChange={(id, memo) => handlePlaylistMemoChange(id, memo)}
        onDelete={(id) => handlePlaylistDelete(id)}
      />
    );
  });

  return (
    <div className='App'>
      <section className='nav'>
        <h1>プレイリスト</h1>
        <div className='button-like' onClick={handleAddClick}>プレイリスト追加</div>
      </section>
      <section className='items'>
        <p>タイトル</p>
        <p>メモ</p>
        <p>削除</p>
      </section>
      <section className='main'>
        {playlistRows}
      </section>
      <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} style={customStyles} >
        <PlaylistCreateDialog onPlsylistCreate={(pl) => handlePlaylistCreate(pl)} />
      </Modal>
    </div>
  );
}

export default App;