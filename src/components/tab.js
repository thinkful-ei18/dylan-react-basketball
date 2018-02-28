import React from 'react';
import './tab.css';

export default function Tab(props) {
  let computedTabs = props.tabsArray.map((tab, index) => {
    return <li onClick={() => props.setCategory(tab)} className={props.category === tab ? 'selected' : ''} key={index}>
        {tab[0].toUpperCase() + tab.slice(1)}
      </li>;
  });
  return <ul className="tabrow">
      {computedTabs}
    </ul>;
}