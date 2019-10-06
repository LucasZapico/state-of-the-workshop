import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/itemActions';

class AddItem extends Component {
  state = {
    title: '',
    description: '',
    parent: '',
    inWorkflowSince: '',
    inCurrentWorkflow: true, 
    link: '',
    tags: []
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmmit = event => {
    event.preventDefault();
    this.props.addItem(this.state);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmmit} className="">
          <h4 className="color-grey-m">Add Item</h4>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="title"
              id="title"
              placeholder="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="description"
              type="description"
              id="description"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="parent">Parent</label>
            <input
              placeholder="parent"
              type="parent"
              id="parent"
              onChange={this.handleChange}
            /></div>
              <div className="input-field">
              
            <label htmlFor="parent">Currently In Workflow</label>
            <input
              placeholder="in current workflow"
              type="radio"
              id="inCurrentWorkflow"
              value="true"
              onChange={this.handleChange}
              checked
            />
          </div>
          <div className="input-field">
            <label htmlFor="link">Link</label>
            <input
              placeholder="link"
              type="link"
              id="link"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="tags">Tags</label>
            <input
              placeholder="tags"
              type="tags"
              id="tags"
              onChange={this.handleChange}
            />
          </div>
          <div id="submit" className="input-field">
            <button className="btn">Add Item</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddItem);
