import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = props => {
  const { items } = props;
  console.log("SideNav")
  console.log(items);
  
  return (
    items && items.map(item => {
      return (
        <Link to="/">
      <div key={item.id}>{item.title}</div>
      </Link>)
    })
 );
}

export default SideNav;
