import React, { Component } from "react";
import "./app.css";
import SearchHeader from "./components/searchHeader/searchHeader";
import Videos from "./components/videos/videos";

class App extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    // fetch(
    //   "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAS-uDMaazl0Q-NSvJNwbko_UcGH8BFOBA",
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) =>
    //     this.setState((prevState) => ({
    //       // object to array......
    //       videos: [...prevState.videos, result],
    //     }))
    //   );

    // ****** fetch API로 DATA를 받으면 위와같이 text형태가 아니라 json형태로 전달해야함.
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAS-uDMaazl0Q-NSvJNwbko_UcGH8BFOBA",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => this.setState({ videos: result.items }));
  }

  render() {
    return (
      <>
        <SearchHeader />
        <Videos videos={this.state.videos} />
      </>
    );
  }
}

export default App;
