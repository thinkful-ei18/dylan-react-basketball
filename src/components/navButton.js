import React from 'react';

export default function NavButton(props) {
  return <div>
      <button onClick={() => props.setSort('name')}>Name</button>
      <button onClick={() => props.setSort('rank')}>Rank</button>
    </div>;
}