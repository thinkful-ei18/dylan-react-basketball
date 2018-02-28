import React from 'react';
import './card.css';
import Tab from './tab';
import Chart from './chart';

export default class Card extends React.Component {
  setCategory(category) {
    this.setState({category: category});
  }

  render() {
    const border = {
      borderTop: `6px solid ${this.props.color}`
    };
    return <div className="card" style={border}>
        <h2>{this.props.team}</h2>
        <p>
          Record: {this.props.record}, #{this.props.place} in {this.props.conference} Conference
        </p>
        <img src={this.props.logoUrl} alt={this.props.team} />
        <p>Leaders</p>
        <Chart displayArray={this.props.leaders[this.props.category]} color={this.props.color} />
        <Tab setCategory={value => this.props.setCardCategory(this.props.place, value)} category={this.props.category} tabsArray={['points', 'assists', 'rebounds', 'minutes']}/>
      </div>;
  }
}