import axios from "axios";

const KEY = "AIzaSyAn9mo8rEkfE02-FCAScKVin80KByFVJHE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: "5",
    key: KEY
  }
});
