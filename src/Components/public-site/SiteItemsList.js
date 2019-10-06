import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded,  isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';
import ItemCard from './itemCard';
import { Link } from 'react-router-dom';

const siteItems = props => {
  const { items } = props;
  if (!isLoaded(items)) {
    return <div>Loading..</div>
  }
  if (isEmpty(items)){
    return <div>Items is empty</div>
  }
  return items.map(item => {
    return (
      <Link to={'/item/'+item.id}>
      <ItemCard item={item} key={item.id}/>
      </Link>
    );
  });
};


export default siteItems;


