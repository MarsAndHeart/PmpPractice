import _ from 'lodash';
import * as React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';
import styles from '../css/chapter.scss';
import mocks from '../data/mocks';
import homePageAction from '../actions/homePage';

const MockTestList = (props) => {
  const toPracticePage = (chapter)=> {
    props.practiceStart(chapter);
    setTimeout(()=>{
      props.history.push('/practice');
    },200);
  };
  return (
    <div className={styles['pageContainer']}>
      <div className={styles['pageMain']}>
        {mocks.map(chapter=>(
          <Ripples key={_.get(chapter,'title')} color='rgba(71,128,232, 0.3)' >
            <div className={styles['card']} onClick={()=>{toPracticePage(chapter);}}>
              <div className={styles['title']}>{_.get(chapter, 'title')}</div>
            </div>
          </Ripples>
        ))}
      </div>
    </div>
  );
};
MockTestList.propTypes = {
  practiceStart: PropTypes.func,
  history: PropTypes.object,
};

const actionMapping = (dispatch) => {
  return {
    practiceStart: compose(dispatch, homePageAction.practiceStart),
  };
};

export default connect(null, actionMapping)(MockTestList);