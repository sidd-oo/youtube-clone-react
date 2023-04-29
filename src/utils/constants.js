import HomeIcon from "../assets/images/home.svg"

export const VIDEO_LIST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=${process.env.REACT_APP_API_KEY}`
export const COMMENTS_THREAD_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${process.env.REACT_APP_API_KEY}&maxResults=100`;
export const VIDEO_INFO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_API_KEY}`
export const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${process.env.REACT_APP_API_KEY}`;
export const SIDEBAR_OPTIONS = [
    {
        icon: HomeIcon,
        name: "Home"
    },
    {
        icon: HomeIcon,
        name: "Shorts"
    },
    {
        icon: HomeIcon,
        name: "Subscriptions"
    },
    {
        icon: HomeIcon,
        name: "Library"
    },
    {
        icon: HomeIcon,
        name: "History"
    },
    {
        icon: HomeIcon,
        name: "Your Videos"
    },
    {
        icon: HomeIcon,
        name: "Watch Later"
    },
]