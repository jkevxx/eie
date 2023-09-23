// import videoExample from '../../assets/images/video-example.png';
import './videoPlayer.scss';

import videoIndex from '../../assets/video/video-index.mp4';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video controls>
        <source src={videoIndex} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img src={videoExample} alt="example-video" /> */}
    </div>
  );
};

export default VideoPlayer;
