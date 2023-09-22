import videoExample from '../../assets/images/video-example.png';
import './videoPlayer.scss';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      {/* <video controls width="640" height="360">
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img src={videoExample} alt="example-video" />
    </div>
  );
};

export default VideoPlayer;
