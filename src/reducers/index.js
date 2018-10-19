/**
 * Created by jianghai on 2018/10/16.
 */
import { combineReducers } from 'redux';

import loading from './loading';
import practice from './practice';
import answerSheet from './answerSheet';

const rootReducer = combineReducers({
  loading,
  practice,
  answerSheet,
});

export default rootReducer;
