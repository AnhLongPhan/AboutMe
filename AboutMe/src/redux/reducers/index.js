
import { CLEAR_DATA , SAVE_MODE, UPDATE_LOGIN_INFO} from '../actionTypes';
import { LoginModes } from '../../common/Constants';

const initialState = {
  history: "/",
  mode: LoginModes.MODE_SIGN_IN,
  aboutDetails: [],
  sortNo: 1,
  loginInfo: {
    fullName: '',
    email: '',
    password: ''
  }
};

export default function(state = initialState, action) {
  switch (action.type) {

    case CLEAR_DATA: {
      return {
        ...state,
        aboutDetails: []
      };
    }

    case SAVE_MODE: {
      const { mode } = action.payload;
      return {
        ...state,
        mode
      };
    }

    case UPDATE_LOGIN_INFO: {
      const { loginInfo } = action.payload;

      return {
        ...state,
        loginInfo
      };
    }

    case SAVE_MODE: {
      const { mode } = action.payload;
      return {
        ...state,
        mode
      };
    }

    default:
      return state;
  }
}