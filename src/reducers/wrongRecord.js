/**
 * Created by jianghai on 2018/10/20.
 */

const initialState = {
  id: 'wrongRecord',
  title: '错题集',
  questions: [],
  answers: [],
};

const wrongRecord = (state = initialState, action = '') => {
  switch (action.type) {
  case 'wrongRecord/reset': {
    return {
      ...initialState,
    };
  }
  case 'wrongRecord/setQuestions': {
    return {
      ...state,
      questions: action.payload,
    };
  }
  case 'wrongRecord/setAnswers': {
    return {
      ...state,
      answers: action.payload,
    };
  }
  case 'wrongRecord/addQuestion': {
    return {
      ...state,
      questions: [
        ...state.questions,
        action.payload,
      ],
    };
  }
  case 'wrongRecord/addAnswer': {
    return {
      ...state,
      answers: [
        ...state.answers,
        action.payload,
      ],
    };
  }
  default: {
    return state;
  }
  }
};

export default wrongRecord;