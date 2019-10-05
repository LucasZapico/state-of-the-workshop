import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded,  isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';

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
      <div key={item.id} className="item">
        <div className="item-header color-grey-m">
          <h5>{item.title}</h5>
          <span>{item.lastUpdate}</span>
        </div>
        <div className="item-content">{item.description}</div>
        {item.tags.map((t, i) => {
          return (
            <div key={i} className="tag">
              {t}
            </div>
          );
        })}
      </div>
    );
  });
};


export default siteItems;

// const mapStateToProps = (state, ownProps) => {
//   // const id = ownProps.match.params.id;
//   const items = state.firestore.data.items;
//   return {};
// };

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{ collection: 'items' }])
// )(siteItems);
