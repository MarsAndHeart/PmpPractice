/**
 * Created by jianghai on 2018/10/19.
 */

const initialState = {
  questionIndex: 0,
  selectedOption: '',
  chapter: {},
  currentQuestion: {},
  currentAnswer: {},
};

const practice = (state = initialState, action = '') => {
  switch (action.type) {
  case 'practice/setQuestionIndex': {
    return {
      ...state,
      questionIndex: action.payload,
    };
  }
  case 'practice/resetOption': {
    return {
      ...state,
      selectedOption: '',
    };
  }
  case 'practice/selectOption': {
    return {
      ...state,
      selectedOption: action.payload,
    };
  }
  case 'practice/setChapter': {
    return {
      ...state,
      chapter: action.payload,
    };
  }
  case 'practice/setCurrentQuestion': {
    return {
      ...state,
      currentQuestion: action.payload,
    };
  }
  case 'practice/setCurrentAnswer': {
    return {
      ...state,
      currentAnswer: action.payload,
    };
  }
  default: {
    return state;
  }
  }
};

export default practice;
