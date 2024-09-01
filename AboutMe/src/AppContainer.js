/* global  */
import { connect } from 'react-redux';
import App from './App';
import {
  clearData,
  insertData,
} from './redux/actions';

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  {
    clearData,
    insertData,
  }
)(App);
