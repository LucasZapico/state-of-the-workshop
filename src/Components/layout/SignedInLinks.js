import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/additem">Add Item</NavLink>
      </li>
      <li>
        <NavLink to="/">All Items</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/">Logged In as</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
