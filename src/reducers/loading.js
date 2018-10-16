/**
 * Created by jianghai on 2018/5/15.
 */

const initialState = {
  loadingQueue: 0,
  enableLoading: true,
};

const loading = (state = initialState, action = '') => {
  if (action.type === 'app/startLoading') {
    return Object.assign({
      ...state,
      loadingQueue: state.loadingQueue + 1,
    });
  }
  if (action.type === 'app/finishLoading') {
    return Object.assign({
      ...state,
      loadingQueue: Math.max(0, state.loadingQueue - 1),
    });
  }
  if (action.type === 'app/disableLoading') {
    return Object.assign({
      ...state,
      enableLoading: false,
    });
  }
  if (action.type === 'app/enableLoading') {
    return Object.assign({
      ...state,
      enableLoading: true,
    });
  }
  return state;
};

export default loading;
