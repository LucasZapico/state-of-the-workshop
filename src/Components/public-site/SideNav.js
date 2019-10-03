import React from 'react';

const SideNav = props => {
  const { items } = props;
  console.log(items);
  const unique = [...new Set(items.map(item => item.parent))];
  console.log(unique);
  return (
    unique &&
    unique.map((item, i) => {
      return (
        <div key={i} className="sideNav-item">
          {item}
        </div>
      );
    })
  );
};

export default SideNav;
