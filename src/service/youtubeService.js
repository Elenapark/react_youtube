// Dependeny Injection!

class Youtube {
  /* 
   class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
  });
  }

  *** 이렇게 사용할 수도 있지만 아래의 코드처럼 
  index.js에 기존 youtube class를 dependency injection 해주었던것처럼
  fetch나 axios 코드를 보관하여 youtube class로 injection 해주어
  유투브에서 axios 라이브러리를 사용하는것을 모르도록 할 수 있다.
  => 이렇게 하는 이유는 추후 axios 코드 수정시 한곳에서 용이하게 할 수 있으므로 

  */
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  // promise 리턴
  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  // promise 리턴
  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
