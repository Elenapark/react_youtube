import React, { PureComponent } from "react";
import styles from "./searchHeader.module.css";

class SearchHeader extends PureComponent {
  // React.createRef() : input value 추출
  inputRef = React.createRef();

  // 아래 두가지 경우의 검색방법에 동일하게 적용됨
  handleSearch = () => {
    const value = this.inputRef.current.value;
    this.props.onSearch(value);
  };

  // 1.검색 버튼을 누를때
  onClick = () => {
    this.handleSearch();
  };

  // 2.검색 버튼을 직접 누르지 않고 enter를 누를때
  onKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
    // this.props.onKeyPress();
  };

  render() {
    return (
      <>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img className={styles.img} src="/img/logo.png" alt="logo" />
            <h1 className={styles.title}>Youtube</h1>
          </div>
          <input
            ref={this.inputRef}
            className={styles.input}
            type="text"
            name="search"
            placeholder="Search.."
            onKeyPress={this.onKeyPress}
          />
          <button
            className={styles.button}
            type="submit"
            onClick={this.onClick}
          >
            <img
              className={styles.buttonImg}
              src="./img/search.png"
              alt="search-btn"
            />
          </button>
        </nav>
      </>
    );
  }
}

export default SearchHeader;
