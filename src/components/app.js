import React from 'react';
import Card from './card';
import Tab from './tab';
import teams from '../teams.json';
import './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'place',
      '1': { category: 'points' },
      '2': { category: 'points' },
      '3': { category: 'points' },
      '4': { category: 'points' }
    };
  }

  sortCards() {
    let sortedTeams;
    if (this.state.sort === 'name') {
      sortedTeams = teams.sort((a, b) => {
        let nameA = a.team.toUpperCase();
        let nameB = b.team.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else {
      sortedTeams = teams.sort((a, b) => {
        return a.place - b.place;
      });
    }
    return sortedTeams.map((item, index) => {
      return <Card {...item} key={item.place} setCardCategory={(id, value) => {this.setCardCategory(id, value)}} category={this.state[item.place].category} />;
    });
  }

  setSort(value) {
    this.setState({ sort: value });
  }

  setCardCategory(id, value) {
    this.setState({ [id]: {category: value} });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Basketball</h1>
          <Tab setCategory={val => this.setSort(val)} tabsArray={['name', 'place']} category={this.state.sort}/>
        </header>
        <div className="cards">{this.sortCards()}</div>
      </div>
    );
  }
}
