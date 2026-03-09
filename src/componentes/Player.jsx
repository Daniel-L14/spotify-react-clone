import { useState, useRef, useEffect } from 'react';
import './Player.css';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(70);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(p => (p >= 100 ? 0 : p + 0.2));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (pct) => {
    const total = 214;
    const current = Math.floor((pct / 100) * total);
    return `${Math.floor(current / 60)}:${String(current % 60).padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const bar = progressRef.current;
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setProgress((x / rect.width) * 100);
  };

  return (
    <div className="sp-player">

      {/* LEFT */}
      <div className="sp-track">
        <div className="sp-cover">🎵</div>
        <div className="sp-track-meta">
          <div className="sp-track-name">Canción Actual</div>
          <div className="sp-track-artist">Artista</div>
        </div>
        <button
          className={`sp-like-btn ${isLiked ? 'liked' : ''}`}
          onClick={() => setIsLiked(!isLiked)}
          title={isLiked ? 'Quitar de favoritos' : 'Guardar en favoritos'}
        >
          <svg viewBox="0 0 24 24" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* CENTER */}
      <div className="sp-controls">
        <div className="sp-btns">
          <button className={`sp-ctrl-btn ${isShuffle ? 'active' : ''}`} onClick={() => setIsShuffle(!isShuffle)} title="Aleatorio">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/>
              <polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>
            </svg>
          </button>
          <button className="sp-ctrl-btn" title="Anterior">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>
          <button className="sp-play-btn" onClick={() => setIsPlaying(!isPlaying)} title={isPlaying ? 'Pausar' : 'Reproducir'}>
            {isPlaying
              ? <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              : <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            }
          </button>
          <button className="sp-ctrl-btn" title="Siguiente">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"/>
            </svg>
          </button>
          <button className={`sp-ctrl-btn ${isRepeat ? 'active' : ''}`} onClick={() => setIsRepeat(!isRepeat)} title="Repetir">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
              <polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
          </button>
        </div>

        <div className="sp-progress-wrap">
          <span className="sp-time">{formatTime(progress)}</span>
          <div className="sp-bar" ref={progressRef} onClick={handleProgressClick}>
            <div className="sp-fill" style={{ width: `${progress}%` }}>
              <div className="sp-handle"/>
            </div>
          </div>
          <span className="sp-time">3:34</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="sp-right">
        <button className="sp-ctrl-btn" title="Cola">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/>
            <line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
        </button>
        <div className="sp-vol-wrap">
          <button className="sp-ctrl-btn" title="Volumen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          </button>
          <div
            className="sp-vol-bar"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setVolume(Math.round(((e.clientX - rect.left) / rect.width) * 100));
            }}
          >
            <div className="sp-vol-fill" style={{ width: `${volume}%` }}/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Player;