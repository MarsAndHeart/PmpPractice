/**
 * Created by jianghai on 2018/10/19.
 */
import _ from 'lodash';

import answerSheetAction from './answerSheet';
import practiceAction from './practice';

import chapters from '../data/chapters';

const practiceStart = (chapter) => [
  answerSheetAction.reset(),
  answerSheetAction.setTotalNum((_.get(chapter,'questions')||[]).length),
  practiceAction.setChapter(chapter),
  practiceAction.setQuestionByIndex(0),
];

const practiceWrongRecordStart = () => (store) => {
  const {wrongRecord} = store;
  const wrongRecordAsChapter = {
    id:_.get(wrongRecord,'id'),
    title:_.get(wrongRecord,'title'),
    questions:(_.get(wrongRecord,'questions') || []).map(q=>{
      const chapterId = _.get(q,'chapterId');
      const questionId = _.get(q,'questionId');
      const targetChapter = chapters.find(ele=>ele.id===chapterId);
      const targetChapterQuestions = _.get(targetChapter,'questions')||[];
      const targetQuestion = targetChapterQuestions.find(item=>item.id===questionId);
      return {
        ...targetQuestion,
        chapterId,
      };
    }),
    answers:(_.get(wrongRecord,'answers') || []).map(a=>{
      const chapterId = _.get(a,'chapterId');
      const questionId = _.get(a,'questionId');
      const targetChapter = chapters.find(ele=>ele.id===chapterId);
      const targetChapterAnswers = _.get(targetChapter,'answers')||[];
      const targetAnswer = targetChapterAnswers.find(item=>item.id===questionId);
      return {
        ...targetAnswer,
        chapterId
      };
    }),
  };
  return practiceStart(wrongRecordAsChapter);
};

export default {
  practiceStart,
  practiceWrongRecordStart,
};