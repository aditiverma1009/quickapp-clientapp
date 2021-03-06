import React from 'react';
import './PageScroll.css';
import back from '../../assets/baseline-navigate_before-24px.svg';
import next from '../../assets/baseline-navigate_next-24px.svg';

const PageScroll = ({ backPage, nextPage, pageNumber }) => (
  <div className="scroll">
    <img src={back} width="48px" height="48px" alt="previous page" onClick={backPage} />
    <div className="scroll-pageNumber-display">{pageNumber + 1}</div>
    <img src={next} width="48px" height="48px" alt="next page" onClick={nextPage} />
  </div>
);

export default PageScroll;
