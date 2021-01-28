import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <>
        <li>{this.props.video.snippet.title}</li>
      </>
    );
  }
}

export default Video;
