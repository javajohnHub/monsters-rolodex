import { Component } from "react";

export class SearchBox extends Component {
  render() {
    const {onChangeHandler, className, placeHolder} = this.props;

    return (
      <div>
        <input
          className={className}
          placeholder={placeHolder}
          type="search"
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}