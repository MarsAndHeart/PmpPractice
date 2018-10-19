/**
 * Created by jianghai on 2018/10/19.
 */

const initialState = {
  questionId: '',
  selectedOption: '',
  chapter: {},
  currentQuestion: {},
  currentAnswer: {},
};

const practice = (state = initialState, action = '') => {
  switch (action.type) {
  case 'practice/setQuestionId': {
    return {
      ...state,
      questionId: action.payload,
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
