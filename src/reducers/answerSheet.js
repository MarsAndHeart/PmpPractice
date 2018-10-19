/**
 * Created by jianghai on 2018/10/19.
 */

const initialState = {
  totalNum:0,
  correctNum:0,
  wrongNum:0,
  sheets:[],
};

const answerSheet = (state = initialState, action = '') => {
  switch (action.type){
  case 'answerSheet/resetTotalNum':{
    return {
      ...state,
      totalNum: 0,
    };
  }
  case 'answerSheet/setTotalNum':{
    return {
      ...state,
      totalNum: action.payload,
    };
  }
  case 'answerSheet/resetCorrectNum':{
    return {
      ...state,
      correctNum: 0,
    };
  }
  case 'answerSheet/addCorrectNum':{
    return {
      ...state,
      correctNum: state.correctNum + 1,
    };
  }
  case 'answerSheet/resetWrongNum':{
    return {
      ...state,
      wrongNum: 0,
    };
  }
  case 'answerSheet/addWrongNum':{
    return {
      ...state,
      wrongNum: state.wrongNum + 1,
    };
  }
  case 'answerSheet/resetSheets':{
    return {
      ...state,
      sheets: [],
    };
  }
  case 'answerSheet/setSheets':{
    return {
      ...state,
      sheets: action.payload,
    };
  }
  default:{
    return state;
  }
  }
};

export default answerSheet;