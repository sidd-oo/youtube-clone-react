import HomeIcon from "./assets/images/home.svg"

export const videoListURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${process.env.REACT_APP_API_KEY}`
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