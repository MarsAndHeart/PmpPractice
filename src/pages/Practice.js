/**
 * Created by jianghai on 2018/10/16.
 */
import _ from 'lodash';
import * as React from 'react';
import Hammer from 'react-hammerjs';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';
import styles from '../css/practice.scss';
import practiceAction from '../actions/practice';

const Practice = (props) => {
  const {
    chapter,
    questionId,
    selectedOption,
    currentQuestion,
    currentAnswer,
    totalNum,
    correctNum,
    wrongNum,

    answerThisQuestion,
    goNextQuestion,
    goPreQuestion,
  } = props;

  const chapterTitle = _.get(chapter, 'title') || '';
  const options = _.get(currentQuestion, 'options') || {};
  const optionKeys = _.keys(options) || [];
  const correct = _.get(currentAnswer, 'correct') || '';
  const explanation = _.get(currentAnswer, 'explanation') || '';

  const handleSwipeLeft = () => {
    goNextQuestion();
  };

  const handleSwipeRight = () => {
    goPreQuestion();
  };

  const hasAnsweredThisQuestion = !_.isEmpty(selectedOption);
  const getOptionClassName = (option) => {
    if(!hasAnsweredThisQuestion){
      return styles['option'];
    }

    if(selectedOption === option && selectedOption !== correct ){
      return styles['optionWrong'];
    }

    if(option === correct){
      return styles['optionCorrect'];
    }

    return styles['option'];
  };

  const handleTapOption = (option) => {
    if(!hasAnsweredThisQuestion){
      answerThisQuestion(option);
    }
  };

  return (
    <Hammer onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight} className={styles['pageContainer']}>
      <div>
        <div className={styles['main']}>
          <div>{chapterTitle}</div>
          <div className={styles['title']}>
            {'题目'}
          </div>
          <div className={styles['titleContent']}>
            {questionId+'、'+_.get(currentQuestion, 'title')}
          </div>
          <div className={styles['optionBox']}>
            {optionKeys.map((key)=>(
              <Ripples key={key} color='rgba(71,128,232, 0.3)' onClick={()=>{handleTapOption(key);}} >
                <div className={getOptionClassName(key)}>
                  <span className={styles['optionKey']}>{key}.</span>
                  <span>{options[key]}</span>
                </div>
              </Ripples>
            ))}
          </div>
          {hasAnsweredThisQuestion && (
            <div className={styles['title']}>
              {'解答'}
            </div>
          )}
          {hasAnsweredThisQuestion && (
            <div className={styles['titleContent']}>
              {`答案:${correct}, ${explanation}`}
            </div>
          )}
        </div>
        <div className={styles['footer']} >
          <span className={styles['footerTextCorrect']} >正确:{correctNum}</span>
          <span className={styles['footerTextWrong']} >错误:{wrongNum}</span>
          <span className={styles['footerText']} >进度:{correctNum+wrongNum}/{totalNum}</span>
        </div>
      </div>
    </Hammer>
  );
};
Practice.propTypes = {
  chapter: PropTypes.object,
  questionId: PropTypes.string,
  selectedOption: PropTypes.string,
  currentQuestion: PropTypes.object,
  currentAnswer: PropTypes.object,
  totalNum: PropTypes.number,
  correctNum: PropTypes.number,
  wrongNum: PropTypes.number,

  answerThisQuestion: PropTypes.func,
  goNextQuestion: PropTypes.func,
  goPreQuestion: PropTypes.func,
};

const propMapping = (store) => ({
  chapter: _.get(store, 'practice.chapter'),
  questionId: _.get(store, 'practice.questionId'),
  selectedOption: _.get(store, 'practice.selectedOption'),
  currentQuestion: _.get(store, 'practice.currentQuestion'),
  currentAnswer: _.get(store, 'practice.currentAnswer'),

  totalNum: _.get(store,'answerSheet.totalNum'),
  correctNum: _.get(store,'answerSheet.correctNum'),
  wrongNum: _.get(store,'answerSheet.wrongNum'),
});

const actionMapping = (dispatch) => ({
  answerThisQuestion: compose(dispatch, practiceAction.answerThisQuestion),
  goNextQuestion: compose(dispatch, practiceAction.goNextQuestion),
  goPreQuestion: compose(dispatch, practiceAction.goPreQuestion),
});

export default connect(propMapping, actionMapping)(Practice);