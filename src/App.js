import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users, filteredMonsters: users };
        })
      );
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <input
          className="search-box"
          placeholder="Search Monsters"
          onChange={(event) => {
            this.setState({
              filteredMonsters: this.state.monsters.filter((monster) =>
                monster.name
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase())
              ),
            });
          }}
        />
        {this.state.filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
