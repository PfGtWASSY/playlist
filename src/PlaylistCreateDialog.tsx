import React, { useRef, useState } from 'react';
import { Playlist } from './Playlist';

type PlaylistCreateDialogProps = {
  onPlsylistCreate: (playlist: Playlist) => void;
};

const PlaylistCreateDialog = (props: PlaylistCreateDialogProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const memoRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');

  const handleCreatePlaylistClick = () => {
    if (!titleRef.current!.value) {
      alert('タイトルを入力してください');
      return;
    }
    setTitle(titleRef.current!.value);
    setMemo(memoRef.current!.value);
    props.onPlsylistCreate({
      id: Date.now(),
      title: title,
      memo: memo,
    });
  };

  return (
    <div className='dialog'>
      <div className='conditions'>
        <input type='text' ref={titleRef} placeholder='タイトル' />
        <input type='text' ref={memoRef} placeholder='メモ' />
      </div>
      <div className='button-like' onClick={handleCreatePlaylistClick}>
        作成
      </div>
    </div>
  );
}

export default PlaylistCreateDialog;