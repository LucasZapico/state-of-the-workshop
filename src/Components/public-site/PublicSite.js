import React, { Component } from 'react';
import SiteItems from './SiteItems';
import SideNav from './SideNav';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class PublicSite extends Component {
  render() {
    console.log('props', this.props);
    const { items } = this.props;
    return (
      <main className="items">
        <div className="sidenav">
          <SideNav items={items} />
        </div>
        <div className="items-container">
          <SiteItems items={items} />
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
