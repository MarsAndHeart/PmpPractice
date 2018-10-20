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
      const targetChapterQuestions = _.get(chapters,`${chapterId}.questions`)||[];
      const targetQuestion = targetChapterQuestions.find(ele=>ele.id===questionId);
      return targetQuestion;
    }),
    answers:(_.get(wrongRecord,'answers') || []).map(q=>{
      const chapterId = _.get(q,'chapterId');
      const questionId = _.get(q,'questionId');
      const targetChapterAnswers = _.get(chapters,`${chapterId}.answers`)||[];
      const targetAnswer = targetChapterAnswers.find(ele=>ele.id===questionId);
      return targetAnswer;
    }),
  };
  return practiceStart(wrongRecordAsChapter);
};

export default {
  practiceStart,
  practiceWrongRecordStart,
};