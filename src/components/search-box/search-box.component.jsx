import { Component } from "react";
import "./search-box.styles.css";

export class SearchBox extends Component {
  render() {
    const {onChangeHandler, className, placeHolder} = this.props;

    return (
      <div>
        <input
          className={`search-box ${className}`}
          placeholder={placeHolder}
          type="search"
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}