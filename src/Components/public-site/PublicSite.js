import React, { Component } from 'react';
import SiteItems from './SiteItemsList';
import SideNav from './SideNav';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';

class PublicSite extends Component {
  render() {
    console.log('props', this.props);
    const { items } = this.props;
    if (!isLoaded(items)) {
      return <div>Loading..</div>
    }
    if (isEmpty(items)){
      return <div>Items is empty</div>
    }
    return (
      <main className="items">
        <div className="sidenav">
          <SideNav items={items} />
        </div>
        <div className="items-container">
         <SiteItems items={items}/>
        </div>
      </main> 
    );
  }
}

const mapStateToProps = state => {
  console.log('firestore', state.firestore);
  return {
    items: state.firestore.ordered.items
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'items' }])
)(PublicSite);
