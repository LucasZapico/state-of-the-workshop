import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const convertTime = (t) => {

  return (moment.unix(t).format("dd/MM/YYYY"))
  
} 

const SideNav = props => {
  const { items } = props;
  console.log("SideNav")
  console.log(items);


  return (
    items && items.map(item => {
      return (
        <Link key={item.id + item.dateAdded.seconds} to="/">
      <div  ><h6 className="kill-margin">
      {item.title}</h6>
      {convertTime(item.dateAdded.seconds)}
       </div>
      </Link>)
    })
 );
}

export default SideNav;
