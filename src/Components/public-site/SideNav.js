import React from 'react';
import { Link } from 'react-router';

const SideNav = props => {
  const { items } = props;
  console.log(items);
  return (
    items &&
    items.map((item, i) => {
      return (
        <linK to={'/item/' + item.id}>
          <div key={i} className="sideNav-item">
            {item}
          </div>
        </linK>
      );
    })
  );
};

export default SideNav;
