import React, { Component } from "react";
import styles from "./videoDetail.module.css";

class VideoDetail extends Component {
  render() {
    return (
      <main className={styles.detail}>
        <iframe
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${this.props.video.id}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h1>{this.props.video.snippet.title}</h1>
        <h3>{this.props.video.snippet.channelTitle}</h3>
        <pre className={styles.description}>
          {this.props.video.snippet.description}
        </pre>
      </main>
    );
  }
}

export default VideoDetail;
