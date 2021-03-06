/**
 * Created by jianghai on 2018/10/20.
 */
import _ from 'lodash';

const resetWrongRecord = () => ({
  type: 'wrongRecord/reset',
});

const addQuestion = (payload) => ({
  type: 'wrongRecord/addQuestion',
  payload,
});

const addAnswer = (payload) => ({
  type: 'wrongRecord/addAnswer',
  payload,
});

const setQuestions = (payload) => ({
  type: 'wrongRecord/setQuestions',
  payload,
});

const setAnswers = (payload) => ({
  type: 'wrongRecord/setAnswers',
  payload,
});

const addWrongRecord = () => (store) => {
  const currentWrongQuestions = _.get(store, 'wrongRecord.questions') || [];
  const currentQuestion = _.get(store, 'practice.currentQuestion');

  const chapterId = _.get(store, 'practice.chapter.id') || '';
  if(chapterId === 'wrongRecord'){
    return null;
  }
  const questionId = _.get(currentQuestion, 'id') || '';

  const question = {
    id:`${chapterId}-${questionId}`,
    chapterId,
    questionId,
  };
  const answer = {
    id:`${chapterId}-${questionId}`,
    chapterId,
    questionId,
  };

  const existsThisQuestion = currentWrongQuestions.find(q=>(
    q.chapterId === chapterId && q.questionId === questionId
  ));

  if (existsThisQuestion) {
    return null;
  }

  return [
    addQuestion(question),
    addAnswer(answer),
  ];
};

const deleteWrongRecord = () => (store) => {
  const currentWrongQuestions = _.get(store, 'wrongRecord.questions') || [];
  const currentQuestion = _.get(store, 'practice.currentQuestion');

  let chapterId = _.get(store, 'practice.chapter.id') || '';
  if(chapterId === 'wrongRecord'){
    chapterId = _.get(currentQuestion,'chapterId');
  }
  const questionId = _.get(currentQuestion, 'id') || '';

  const existsThisQuestion = currentWrongQuestions.find(q=>(
    q.chapterId === chapterId && q.questionId === questionId
  ));

  if (existsThisQuestion) {
    const nextQuestions = currentWrongQuestions.filter(q=>(
      q.chapterId !== chapterId || q.questionId !== questionId
    ));
    const nextAnswers = currentWrongQuestions.filter(a=>(
      a.chapterId !== chapterId || a.questionId !== questionId
    ));
    return [
      setQuestions(nextQuestions),
      setAnswers(nextAnswers),
    ];
  }

  return null;
};

export default {
  resetWrongRecord,
  addWrongRecord,
  deleteWrongRecord,
};