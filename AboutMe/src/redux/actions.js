import {
    CLEAR_DATA,
    INSERT_DATA,
    UPDATE_LOGIN_INFO,
    SAVE_MODE
} from './actionTypes';

export const clearData = () => ({
    type: CLEAR_DATA
});

export const insertData = (data) => ({
    type: INSERT_DATA,
    payload: {
        data
    }
});

export const updateLoginInfo = loginInfo => ({
    type: UPDATE_LOGIN_INFO,
    payload: {
      loginInfo
    }
  });

export const saveMode = mode => ({
    type: SAVE_MODE,
    payload: {
      mode
    }
  });
