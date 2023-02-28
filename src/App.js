import { Component } from "react";
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

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchString)
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <input
          className="search-box"
          placeholder="Search Monsters"
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchString };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
