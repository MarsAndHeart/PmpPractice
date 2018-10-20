/**
 * Created by jianghai on 2018/10/16.
 */
import { combineReducers } from 'redux';

import loading from './loading';
import practice from './practice';
import answerSheet from './answerSheet';
import wrongRecord from './wrongRecord';

const rootReducer = combineReducers({
  loading,
  practice,
  answerSheet,
  wrongRecord,
});

export default rootReducer;
