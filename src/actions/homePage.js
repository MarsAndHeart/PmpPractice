/**
 * Created by jianghai on 2018/10/19.
 */
import _ from 'lodash';

import answerSheetAction from './answerSheet';
import practiceAction from './practice';

const practiceStart = (chapter) => [
  answerSheetAction.reset(),
  answerSheetAction.setTotalNum((_.get(chapter,'questions')||[]).length),
  practiceAction.setChapter(chapter),
  practiceAction.setQuestionById('1'),
];

export default {
  practiceStart,
};