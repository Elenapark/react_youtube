import React, { Component } from "react";
import Video from "../video/video";
import styles from "./videos.module.css";

class Videos extends Component {
  render() {
    // video를 <Video />에 props로 전달할때 () => {<Video />}가 아닌 () => (<Video />)임을 유의하자...ㅠ_ㅠ

    return (
      <ul className={styles.videos}>
        {this.props.videos.map((video) => (
          <Video
            key={video.id}
            video={video}
            // *** onclick하면 상위 videos에서 handleVideoClick에 여기의 video인자를 전달해줌
            onClick={() => this.props.handleVideoClick(video)}
            display={this.props.display}
          />
        ))}
      </ul>
    );
  }
}

export default Videos;
