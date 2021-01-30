import React, { Component } from "react";
import styles from "./videoDetail.module.css";

class VideoDetail extends Component {
  render() {
    return (
      <main className={styles.detail}>
        <iframe
          width="100%"
          height="500px"
          title="youtube video player"
          src={`https://www.youtube.com/embed/${this.props.video.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
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
