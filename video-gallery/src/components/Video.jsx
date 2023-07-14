import React from "react";
import Thumbnail from "./Thumbnail";
import LikeButton from "./LikeButton";

const Video = ({ video, updateLike }) => {
  return (
    <div className="video-item">
      <Thumbnail video={video} />
      <a href={video.url} className="video-info">
        <h2>{video.title}</h2>
        <p className="author">Author: {video.author}</p>
      </a>
      <LikeButton video={video} videoId={video.id} updateLike={updateLike} />
    </div>
  );
};

export default Video;
