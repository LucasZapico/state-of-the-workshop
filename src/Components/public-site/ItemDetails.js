import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';

const ItemDetails = props => {
  console.log("Item Details", props)
  const { item } = props
  if (!isLoaded(item)) {
    return <div>Loading..</div>
  }
  if (isEmpty(item)){
    return <div>Items is empty</div>
  }
  return (
    <div>
      <h2>{item.title} - {item.id}</h2>
      <p>
        {item.description}
        </p>
      <p>
        In a spell of dry weather, when the Birds could find very little to
        drink, a thirsty Crow found a pitcher with a little water in it. But the
        pitcher was high and had a narrow neck, and no matter how he tried, the
        Crow could not reach the water. The poor thing felt as if he must die of
        thirst. Then an idea came to him. Picking up some small pebbles, he
        dropped them into the pitcher one by one. With each pebble the water
        rose a little higher until at last it was near enough so he could drink.
      </p>
      <em>In a pinch a good use of our wits may help us out.</em>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  const id = ownProps.match.params.id;
  const items = state.firestore.data.items;
  console.log(state.firestore.data.items)
  const item = items ? items[id] : null
  return {
    item: item
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'items' }])
)(ItemDetails);