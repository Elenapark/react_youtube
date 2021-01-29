// Dependeny Injection!

class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  // promise 리턴
  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  // promise 리턴
  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return;
    // 기존의 item은 유지하면서, id가 obj형태이므로 그 안에서 videoId만 뽑아내서 id로 setState에 저장해줌
    result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
