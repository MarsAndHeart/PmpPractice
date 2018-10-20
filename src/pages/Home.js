/**
 * Created by jianghai on 2018/10/16.
 */
import _ from 'lodash';
import * as React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../css/home.scss';
import chapters from '../data/chapters';
import homePageAction from '../actions/homePage';

const Home = (props) => {
  const toPracticePage=(chapter)=>{
    props.practiceStart(chapter);
    props.history.push('/practice');
  };
  const practiceWrongRecordStart=()=>{
    if(props.hadWrongRecord){
      props.practiceWrongRecordStart();
      props.history.push('/practice');
    }else{
      alert('暂无错题');
    }
  };
  return(
    <div className={styles['pageContainer']} >
      <div className={styles['pageMain']} >
        <div className={styles['cardWrongRecord']}  onClick={practiceWrongRecordStart}>
          错题集
        </div>
        {chapters.map(chapter=>(
          <div key={_.get(chapter,'title')} className={styles['card']} onClick={()=>{toPracticePage(chapter);}} >
            <div className={styles['title']} >{_.get(chapter,'title')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
Home.propTypes = {
  hadWrongRecord: PropTypes.bool,
  practiceStart: PropTypes.func,
  practiceWrongRecordStart: PropTypes.func,
  history: PropTypes.object,
};

const propMapping = (store) => {
  const wrongQuestionNumber = (_.get(store, 'wrongRecord.questions')||[]).length;
  return {
    hadWrongRecord:wrongQuestionNumber>0,
  };
};

const actionMapping = (dispatch) => {
  return {
    practiceStart: compose(dispatch,homePageAction.practiceStart),
    practiceWrongRecordStart: compose(dispatch,homePageAction.practiceWrongRecordStart),
  };
};

export default connect(propMapping,actionMapping)(Home);