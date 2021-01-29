import React, { Component } from "react";
import styles from "./video.module.css";

class Video extends Component {
  render() {
    return (
      <li className={styles.video}>
        <img
          className={styles.thumbnail}
          src={this.props.video.snippet.thumbnails.default.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{this.props.video.snippet.title}</p>
          <p className={styles.channel}>
            {this.props.video.snippet.channelTitle}
          </p>
        </div>
      </li>
    );
  }
}

export default Video;
