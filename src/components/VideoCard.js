import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg cursor-pointer break-words">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />

      <div className="">
        <ul>
          <li className="font-bold py-2 truncate">{title}</li>
          <li className="">{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export const AddVideoCard = ({ info }) => {
  return (
    <div className="border border-red-500">
      <VideoCard info={info} />
      <div className="font-bold">Add</div>
    </div>
  );
};

export default VideoCard;
