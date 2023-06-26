import React from 'react';
import { Playlist } from './Playlist';

type PlaylistRowProps = {
  playlist: Playlist;
  onTitleChange: (id: number, title: string) => void;
  onMemoChange: (id: number, memo: string) => void;
  onDelete: (id: number) => void;
};

const PlaylistRow = (props: PlaylistRowProps) => {
  const { title, memo } = props.playlist;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onTitleChange(props.playlist.id, e.target.value);
  };

  const handleMemoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onMemoChange(props.playlist.id, e.target.value);
  };

  const handleDeleteClick = () => {
    props.onDelete(props.playlist.id);
  };

  return (
    <div className='playlist-row'>
      <input
        type='text'
        className='title'
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type='text'
        className='memo'
        value={memo}
        onChange={handleMemoChange}
      />
      <div className='delete-row' onClick={handleDeleteClick}>
        削除
      </div>
    </div>
  );
};

export default PlaylistRow;