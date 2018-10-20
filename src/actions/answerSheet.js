/**
 * Created by jianghai on 2018/10/19.
 */
import _ from 'lodash';

const resetTotalNum = () => ({
  type:'answerSheet/resetTotalNum',
});

const setTotalNum = (payload) => ({
  type:'answerSheet/setTotalNum',
  payload,
});

const resetCorrectNum = () => ({
  type:'answerSheet/resetCorrectNum',
});

const addCorrectNum = (payload) => ({
  type:'answerSheet/addCorrectNum',
  payload,
});

const resetWrongNum = () => ({
  type:'answerSheet/resetWrongNum',
});

const addWrongNum = (payload) => ({
  type:'answerSheet/addWrongNum',
  payload,
});

const resetSheets = () => ({
  type:'answerSheet/resetSheets',
});

const setSheets = (payload) => ({
  type:'answerSheet/setSheets',
  payload,
});

const reset = () => [
  resetTotalNum(),
  resetCorrectNum(),
  resetWrongNum(),
  resetSheets(),
];

// const mokeSheet = {
//   id:'1',
//   correct:'C',
//   selected:'C',
// }
const submitThisSheet = (sheet) => (store) => {
  const sheets = _.get(store,'answerSheet.sheets')||[];
  const newSheets = JSON.parse(JSON.stringify(sheets));

  const id = _.get(store,'practice.questionId')||'unknown';
  const index = newSheets.findIndex(s=>s.id===id);

  if(index!==-1){
    newSheets[index] = sheet;
  }else{
    newSheets.push(sheet);
  }
  return setSheets(newSheets);
};

export default {
  resetTotalNum,
  setTotalNum,
  resetCorrectNum,
  addCorrectNum,
  resetWrongNum,
  addWrongNum,
  resetSheets,
  setSheets,
  reset,
  submitThisSheet,
};