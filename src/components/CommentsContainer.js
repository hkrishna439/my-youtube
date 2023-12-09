import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_COMMENTS_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
const commentsData = [
  {
    name: "krishna",
    text: "Lorem ioiodsuf kjhfb sudhfk waiey qawoiue akl sdf",
  },
  {
    name: "krishna",
    text: "Lorem ioiodsuf kjhfb sudhfk waiey qawoiue akl sdf",
    replies: [],
  },
  {
    name: "krishna",
    text: "Lorem ioiodsuf kjhfb sudhfk waiey qawoiue akl sdf",
    replies: [],
  },
  {
    name: "krishna",
    text: "Lorem ioiodsuf kjhfb sudhfk waiey qawoiue akl sdf",
    replies: [],
  },
  {
    name: "krishna",
    text: "Lorem ioiodsuf kjhfb sudhfk waiey qawoiue akl sdf",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { authorDisplayName, textDisplay, authorProfileImageUrl } =
    data?.snippet?.topLevelComment?.snippet;
  return (
    <div className="flex p-2 rounded-lg">
      <img
        className="w-12 h-12 rounded-full"
        src={authorProfileImageUrl}
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{authorDisplayName}</p>
        <p>{textDisplay}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Dont use index as key
  return (
    comments &&
    comments.map((comment, index) => (
      <div key={index} className="">
        <Comment data={comment} />
        <div className="pl-5 ">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ))
  );
};

const CommentsContainer = () => {
  const [commentsData, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const commentsData = await fetch(
      YOUTUBE_VIDEO_COMMENTS_API + searchParams.get("v")
    );

    const json = await commentsData.json();
    setComments(json?.items);
  };

  return (
    <div className="flex flex-col flex-wrap m-5 p-2 w-1/2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
