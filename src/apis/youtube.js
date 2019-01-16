import axios from 'axios';

const KEY = 'AIzaSyDgZvGE_NEk-MD52npP2I2_1pRS3QnFyCo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
