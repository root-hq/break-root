import axios from "axios";

export function getRandomFromArray(arr) {
    if(arr.length === 0) {
        return null;
    }
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

export const delay = ms => new Promise(res => setTimeout(res, ms));

const getSwapRequest = async(
    side,
    size
) => {
    return axios.post(`https://break-root-server.vercel.app/api/swap?side=${side}&size=${size}`);
};

export const swapOnRoot = async (trade) => {
    try {
        const response = await getSwapRequest(trade.side, trade.size);
        console.log("Returning: ", response.data);
        return response.data;
    }
    catch(err) {
        console.log("Something went wrong placing trade: ", err, " for trade: ", trade);
        return "";
    }
}