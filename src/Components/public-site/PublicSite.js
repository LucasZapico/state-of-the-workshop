import React, { Component } from 'react';
import SiteItems from './SiteItems';
import SideNav from './SideNav';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class PublicSite extends Component {
  render() {
    console.log(this.props);
    const { items } = this.props;
    console.log(items);
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
  console.log(state);
  return {
    items: state.items.items
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'items' }])
)(PublicSite);
