import axios from "axios"

export const fetchChannelLogo = async(channelID) => {
    console.log(channelID)
    const res = axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelID}&key=${process.env.REACT_APP_API_KEY}`);

    console.log(res);

}