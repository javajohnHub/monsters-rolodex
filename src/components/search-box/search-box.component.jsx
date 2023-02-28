import { Component } from "react";

export class SearchBox extends Component {
  render() {
    const {onSearchChange} = this.props;
    
    return (
      <div>
        <input
          className="search-box"
          placeholder="Search Monsters"
          onChange={onSearchChange}
        />
      </div>
    );
  }
}