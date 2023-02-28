import { Component } from "react";
import "./search-box.styles.css";

export class SearchBox extends Component {
  render() {
    const {onChangeHandler, className, placeHolder} = this.props;

    return (
      <div>
        <h1 className="app-title">Monsters Rolodex</h1>
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