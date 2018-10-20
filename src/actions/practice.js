/**
 * Created by jianghai on 2018/10/19.
 */
import _ from 'lodash';
import answerSheetAction from './answerSheet';
import wrongRecordAction from './wrongRecord';

const setQuestionIndex = (payload) => ({
  type: 'practice/setQuestionIndex',
  payload,
});

const resetOption = () => ({
  type: 'practice/resetOption',
});

const selectOption = (payload) => ({
  type: 'practice/selectOption',
  payload,
});

const setChapter = (payload) => ({
  type: 'practice/setChapter',
  payload,
});

const setCurrentQuestion = (payload) => ({
  type: 'practice/setCurrentQuestion',
  payload,
});

const setCurrentAnswer = (payload) => ({
  type: 'practice/setCurrentAnswer',
  payload,
});

const setQuestionByIndex = (index = 0) => (store) => {
  const questions = _.get(store, 'practice.chapter.questions') || [];
  const answers = _.get(store, 'practice.chapter.answers') || [];
  const currentQuestion = questions[index] || {id: 'unknown'};
  const currentAnswer = answers.find(a=>a.id===currentQuestion.id) || {};

  const sheets = _.get(store, 'answerSheet.sheets') || [];
  const answerSheetIndex = sheets.findIndex(s=>s.id === currentQuestion.id);
  if (answerSheetIndex !== -1) {
    const thisSheet = sheets[index]; //表示已经回答过这个问题,要将刚才回答过的答案填进去
    return [
      setQuestionIndex(index),
      resetOption(),
      setCurrentQuestion(currentQuestion),
      setCurrentAnswer(currentAnswer),

      selectOption(thisSheet.selected),
      answerSheetAction.submitThisSheet(thisSheet),
    ];
  }

  return [
    setQuestionIndex(index),
    resetOption(),
    setCurrentQuestion(currentQuestion),
    setCurrentAnswer(currentAnswer),
  ];
};

const goNextQuestion = () => (store) => {
  const index = _.get(store, 'practice.questionIndex');
  const questionTotalNum = _.get(store,'answerSheet.totalNum')||0;
  const nextId = index + 1;
  if(nextId>=questionTotalNum){
    return null;
  }
  return setQuestionByIndex(nextId);
};

const goPreQuestion = () => (store) => {
  const index = _.get(store, 'practice.questionIndex');
  const nextId = index - 1;
  if(nextId<0){
    return null;
  }
  return setQuestionByIndex(nextId);
};

const answerThisQuestion = (option) => (store) => {
  let answerIsCorrect = false;

  const id = _.get(store, 'practice.questionId') || '';
  const correct = _.get(store, 'practice.currentAnswer.correct') || '';
  if (correct === '') {
    return null;
  }

  if (correct === option) {
    answerIsCorrect = true;
  }

  const thisSheet = {
    id,
    correct,
    selected: option,
  };

  if (answerIsCorrect) {
    return [
      selectOption(option),
      answerSheetAction.addCorrectNum(),
      answerSheetAction.submitThisSheet(thisSheet),
      wrongRecordAction.deleteWrongRecord(),
    ];
  }

  return [
    selectOption(option),
    answerSheetAction.addWrongNum(),
    answerSheetAction.submitThisSheet(thisSheet),
    wrongRecordAction.addWrongRecord(),
  ];
};

export default {
  setQuestionIndex,
  selectOption,
  setChapter,
  setQuestionByIndex,
  goNextQuestion,
  goPreQuestion,
  answerThisQuestion,
};