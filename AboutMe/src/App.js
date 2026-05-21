import React from 'react' 
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './common/Prototype';
import './common/DustHelper';

import {  clearData } from './redux/actions';

import { connect } from 'react-redux';

import Home from './web/Home';
import Login from './web/login/Login.js';
import RoutesScreen from './RoutesScreen'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ReactDOM.createPortal(
      <React.Fragment>
        <RoutesScreen {...this.props}/>
      </React.Fragment>,
      document.body
    );
  }
}

App.propTypes = {
  clearData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps, 
  {
    clearData
  }
)(App)