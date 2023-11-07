import http from "../interceptor/"
import axios from "axios"

export const headerSearch = async (input) => {
    console.log("fetching search result started...");
    const result = await axios.get("https://64fdf6da596493f7af7ece1d.mwockapi.io/cards", input);
    console.log(result);
    return result.data;
}