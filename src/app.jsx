import React, { Component } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/searchHeader/searchHeader";
import VideoDetail from "./components/videoDetail/videoDetail";
import Videos from "./components/videos/videos";

class App extends Component {
  state = {
    videos: [],
    isClicked: false,
    selectedVideo: null,
  };

  // 페이지 접속 시 화면
  componentDidMount() {
    // Dependency Injection
    this.props.youtube
      .mostPopular() //
      .then((result) => this.setState({ videos: result }));

    // *************************************************************아래는 기존 코드이나 아래와 같은 문제점이 있음
    // 1.API KEY와 같은 Credential info의 노출
    // 2.View의 역할에 어긋나는 네트워크 통신작업
    // 따라서 Youtube service 클래스를 이용하여 dependency injection을 이용한 위의 코드를 사용해야함

    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };
    // 아래는 postman에서 가져온 api code - javascript fetch
    // ****** fetch API로 DATA를 받으면 text형태가 아니라 json형태로 전달해야함.
    // fetch(
    //   "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAS-uDMaazl0Q-NSvJNwbko_UcGH8BFOBA",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => this.setState({ videos: result.items }));
    // *******************************************************************************************************
  }

  // 검색 시 화면
  search = (query) => {
    // Dependency Injection
    this.props.youtube
      .search(query) //
      .then((result) => this.setState({ videos: result, isClicked: false }));

    // *************************************************************아래는 기존 코드이나 아래와 같은 문제점이 있음
    // 1.API KEY와 같은 Credential info의 노출
    // 2.View의 역할에 어긋나는 네트워크 통신작업

    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAS-uDMaazl0Q-NSvJNwbko_UcGH8BFOBA`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) =>
    //     // 기존의 item은 유지하면서, id가 obj형태이므로 그 안에서 videoId만 뽑아내서 id로 setState에 저장해줌
    //     result.items.map((item) => ({ ...item, id: item.id.videoId }))
    //   )
    //   .then((items) => this.setState({ videos: items }))
    //   .catch((error) => console.log("error", error));
    // *******************************************************************************************************
  };

  //아래 selectVideo로 받아오는 인자 video는 video -> viedos 를 거쳐서 전달받은 인자
  selectVideo = (video) => {
    this.setState({
      isClicked: true,
      selectedVideo: video,
    });
  };

  render() {
    // 엘리는 다르게 작성함
    const isClicked = this.state.isClicked;
    let detail;
    // react docs - conditional rendering 참고
    if (isClicked) {
      detail = (
        <>
          <div className={styles.detail}>
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className={styles.list}>
            <Videos
              videos={this.state.videos}
              handleVideoClick={this.selectVideo}
              display="list"
            />
          </div>
        </>
      );
    } else {
      detail = (
        <div className={styles.list}>
          <Videos
            videos={this.state.videos}
            handleVideoClick={this.selectVideo}
            display="grid"
          />
        </div>
      );
    }
    return (
      <div className={styles.app}>
        <SearchHeader onSearch={this.search} />
        <section className={styles.content}>
          {/* <Videos
          videos={this.state.videos}
          handleVideoClick={this.handleVideoClick}/> 
          */}
          {detail}
        </section>
      </div>
    );
  }
}

export default App;
