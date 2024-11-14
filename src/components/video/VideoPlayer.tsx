import eieCommercial from '../../assets/video/EIE-anuncio.mp4';
import videoCover from '../../assets/video/video-cover.webp';
import './videoPlayer.scss';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video controls poster={videoCover}>
        <source src={eieCommercial} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
