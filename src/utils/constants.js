const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 100;

export const YOUTUBE_SEARCH_BY_KEY =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const YOUTUBE_VIDEO_COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=100&key=" +
  GOOGLE_API_KEY +
  "&videoId=";
