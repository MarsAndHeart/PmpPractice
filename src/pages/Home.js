/**
 * Created by jianghai on 2018/10/16.
 */
import _ from 'lodash';
import * as React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../css/home.scss';
import homePageAction from '../actions/homePage';
import wrongRecordAction from '../actions/wrongRecord';

const Home = (props) => {
  const goLastPractice = () => {
    props.history.push('/practice');
  };
  const clearWrongRecords = () => {
    props.clearWrongRecords();
    alert('已清空错题');
  };
  const practiceWrongRecordStart=()=>{
    if(props.hadWrongRecord){
      props.practiceWrongRecordStart();
      props.history.push('/practice');
    }else{
      alert('暂无错题');
    }
  };
  const goChapterlist = () => {
    props.history.push('/chapterList');
  };
  const goUnitTestlist = () => {
    props.history.push('/unitTestList');
  };
  const goMockTestList = () => {
    props.history.push('/mockTestList');
  };
  return(
    <div className={styles['pageContainer']} >
      <div className={styles['pageMain']} >
        {props.hasLastPractice && (
          <div className={styles['cardLastPractice']} onClick={goLastPractice} >
            <div className={styles['title']} >继续上一次答题</div>
          </div>
        )}
        {props.hadWrongRecord && (
          <div className={styles['cardLastPractice']} onClick={clearWrongRecords} >
            <div className={styles['title']} >清空错题集</div>
          </div>
        )}
        <div className={styles['cardWrongRecord']} onClick={practiceWrongRecordStart}>
          <div className={styles['title']} >错题集</div>
        </div>
        <div className={styles['cardChapterPractice']} onClick={goChapterlist} >
          <div className={styles['title']} >分章练习</div>
        </div>
        {/*<div className={styles['cardHandPractice']} onClick={goChapterlist} >
          <div className={styles['title']} >随手练</div>
        </div>*/}
        <div className={styles['cardUnitTest']} onClick={goUnitTestlist} >
          <div className={styles['title']} >单元测试</div>
        </div>
        <div className={styles['mockTest']} onClick={goMockTestList} >
          <div className={styles['title']} >模拟题</div>
        </div>
      </div>
    </div>
  );
};
Home.propTypes = {
  hadWrongRecord: PropTypes.bool,
  hasLastPractice: PropTypes.bool,
  practiceWrongRecordStart: PropTypes.func,
  clearWrongRecords: PropTypes.func,
  history: PropTypes.object,
};

const propMapping = (store) => {
  const wrongQuestionNumber = (_.get(store, 'wrongRecord.questions')||[]).length;
  const lastPracticeQuestionNum = _.get(store,'answerSheet.totalNum')||0;
  return {
    hadWrongRecord:wrongQuestionNumber>0,
    hasLastPractice:lastPracticeQuestionNum>0,
  };
};

const actionMapping = (dispatch) => {
  return {
    practiceWrongRecordStart: compose(dispatch,homePageAction.practiceWrongRecordStart),
    clearWrongRecords: compose(dispatch,wrongRecordAction.resetWrongRecord),
  };
};

export default connect(propMapping,actionMapping)(Home);