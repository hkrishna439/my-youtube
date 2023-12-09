import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS, YOUTUBE_VIDEOS_API } from "./../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeInfo } from "../utils/videosSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  const videosFromStore = useSelector((store) => store.videosInfo.info);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(storeInfo(json.items));
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {/* {videos[0] && <AddVideoCard info={videos[0]} />} */}
      {videos &&
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  );
};

export default VideoContainer;
