/**
 * Created by jianghai on 2018/10/16.
 */
import * as React from 'react';
import styles from '../css/home.scss';
import chapter1 from '../data/chapter1';

const Home = () => (
  <div className={styles['homepage']} >
    <div className={styles['card']} >
      <div className={styles['title']} >{chapter1.title}</div>
    </div>
  </div>
);

export default Home;