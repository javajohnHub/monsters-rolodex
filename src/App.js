import { Component } from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users, filteredMonsters: users, searchString: "" };
        })
      );
  }

  onChangeHandler = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    const { monsters, searchString } = this.state;
    const { onChangeHandler } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchString)
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onChangeHandler} className="search-box" placeHolder="Search Monsters"/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
