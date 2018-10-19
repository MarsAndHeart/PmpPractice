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
  return(
    <div className={styles['pageContainer']} >
      <div className={styles['pageMain']} >
        {chapters.map(chapter=>(
          <div
            key={_.get(chapter,'title')}
            className={styles['card']}
            onClick={()=>{toPracticePage(chapter);}}
          >
            <div className={styles['title']} >{_.get(chapter,'title')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
Home.propTypes = {
  practiceStart: PropTypes.func,
  history: PropTypes.object,
};


function actionMapping(dispatch) {
  return {
    practiceStart: compose(dispatch,homePageAction.practiceStart),
  };
}

export default connect(null,actionMapping)(Home);