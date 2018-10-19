/**
 * Created by jianghai on 2018/10/19.
 */
import _ from 'lodash';
import answerSheetAction from './answerSheet';

const setQuestionId = (payload) => ({
  type:'practice/setQuestionId',
  payload,
});

const selectOption = (payload) => ({
  type:'practice/selectOption',
  payload,
});

const setChapter = (payload) => ({
  type:'practice/setChapter',
  payload,
});

const setCurrentQuestion = (payload) => ({
  type:'practice/setCurrentQuestion',
  payload,
});

const setCurrentAnswer = (payload) => ({
  type:'practice/setCurrentAnswer',
  payload,
});

const setQuestionById = (id='') => (store) => {
  const questions = _.get(store,'practice.chapter.questions')||[];
  const answers = _.get(store,'practice.chapter.answers')||[];
  const currentQuestion = questions.find(q=>q.id===id)||{};
  const currentAnswer = answers.find(a=>a.id===id)||{};

  const sheets = _.get(store,'answerSheet.sheets')||[];
  const index = sheets.findIndex(s=>s.id===id);
  if(index!==-1){
    //表示已经回答过这个问题,要将刚才回答过的答案填进去
    const thisSheet = sheets[index];
    return [
      setQuestionId(id),
      selectOption(''),
      setCurrentQuestion(currentQuestion),
      setCurrentAnswer(currentAnswer),
      selectOption(thisSheet.selected),
      answerSheetAction.submitThisSheet(thisSheet),
    ];
  }

  return [
    setQuestionId(id),
    selectOption(''),
    setCurrentQuestion(currentQuestion),
    setCurrentAnswer(currentAnswer),
  ];
};

const goNextQuestion = () => (store) => {
  const id = _.get(store,'practice.questionId')||'';
  const nextId = `${Number(id)+1}`;
  const questions = _.get(store,'practice.chapter.questions')||[];
  if(questions.find((q)=>q.id===nextId)){
    return setQuestionById(nextId);
  }
  return null;
};

const goPreQuestion = () => (store) => {
  const id = _.get(store,'practice.questionId')||'';
  const nextId = `${Number(id)-1}`;
  const questions = _.get(store,'practice.chapter.questions')||[];
  if(questions.find((q)=>q.id===nextId)){
    return setQuestionById(nextId);
  }
  return null;
};

const answerThisQuestion = (option) => (store) => {
  let answerIsCorrect = false;

  const id = _.get(store,'practice.questionId')||'';
  const correct = _.get(store,'practice.currentAnswer.correct')||'';
  if(correct === ''){
    return null;
  }

  if(correct === option){
    answerIsCorrect = true;
  }

  const thisSheet = {
    id,
    correct,
    selected:option,
  };

  if(answerIsCorrect){
    return [
      selectOption(option),
      answerSheetAction.addCorrectNum(),
      answerSheetAction.submitThisSheet(thisSheet),
    ];
  }

  return [
    selectOption(option),
    answerSheetAction.addWrongNum(),
    answerSheetAction.submitThisSheet(thisSheet),
  ];
};

export default {
  setQuestionId,
  selectOption,
  setChapter,
  setQuestionById,
  goNextQuestion,
  goPreQuestion,
  answerThisQuestion,
};