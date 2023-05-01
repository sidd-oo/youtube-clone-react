import HomeIcon from "../assets/images/home.svg"
import ShortsIcon from "../assets/images/shorts.svg"
import FeedbackIcon from "../assets/images/feedback.svg"
import SettingsIcon from "../assets/images/settings.svg"
import HelpIcon from "../assets/images/help.svg"
import ShowMoreIcon from "../assets/images/show-more.svg"
import LikedIcon from "../assets/images/liked.svg"
import VideosIcon from "../assets/images/videos.svg"
import HistoryIcon from "../assets/images/history.svg"
import LibraryIcon from "../assets/images/library.svg"
import SubscribeIcon from "../assets/images/subscribe.svg"


export const VIDEO_LIST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=${process.env.REACT_APP_API_KEY}`
export const COMMENTS_THREAD_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${process.env.REACT_APP_API_KEY}&maxResults=100`;
export const VIDEO_INFO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_API_KEY}`
export const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${process.env.REACT_APP_API_KEY}`;
export const AUTOSUGGESTION_SEARCH_URL = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`
export const SIDEBAR_OPTIONS = [
    {
        icon: HomeIcon,
        name: "Home"
    },
    {
        icon: ShortsIcon,
        name: "Shorts"
    },
    {
        icon: SubscribeIcon,
        name: "Subscriptions"
    },
    {
        icon: LibraryIcon,
        name: "Library"
    },
    {
        icon: HistoryIcon,
        name: "History"
    },
    {
        icon: VideosIcon,
        name: "Your Videos"
    },
    {
        icon: HomeIcon,
        name: "Watch Later"
    },
    {
        icon: LikedIcon,
        name: "Liked Videos"
    },
    {
        icon: ShowMoreIcon,
        name: "Show More"
    },
    {
        icon: SettingsIcon,
        name: "Settings"
    },
    {
        icon: HelpIcon,
        name: "Help"
    },
    {
        icon: FeedbackIcon,
        name: "Send Feeback"
    },
]