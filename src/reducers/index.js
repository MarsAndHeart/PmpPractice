/**
 * Created by jianghai on 2018/10/16.
 */
import { combineReducers } from 'redux';

import loading from './loading';

const rootReducer = combineReducers({
  loading,
});

export default rootReducer;
