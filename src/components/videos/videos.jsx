import React, { Component } from "react";
import Video from "../video/video";

class Videos extends Component {
  render() {
    // video를 <Video />에 props로 전달할때 () => {<Video />}가 아닌 () => (<Video />)임을 유의하자...ㅠ_ㅠ
    return (
      <ul>
        {this.props.videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </ul>
    );
  }
}

export default Videos;