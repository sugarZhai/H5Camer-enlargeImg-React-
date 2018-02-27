import React from 'react';
import { Link } from 'react-router-dom';
import { func, array, bool, string } from 'prop-types';
import * as style from './style.scss';


const SearchKeyCountry = (props) => {
  const {
    completeList,
    inputInitValue,
    searchComponentBack,
    showSearchComponent,
    emptyInputContent,
    handleChange,
    showNodata
  } = props;
  return (
    <div className={showSearchComponent ? style.keyContainer : style.closeContainer}>
      <div className={style.searchInput}>
        <img className={style.searchImg} src='https://tac-cdn.zhongan.com/wxapp/wxapp_traval_ins_in_one/safeguide/images/search.png' />
        <input type='text' value={inputInitValue} onChange={handleChange} onFocus={emptyInputContent} />
        <img className={style.clearImg} src='https://tac-cdn.zhongan.com/project/product/risktip/clear.png' onClick={emptyInputContent} />
        <span onClick={searchComponentBack}>取消</span>
      </div>
      <div className={completeList.length > 0 ? style.keyList : style.noKeyList}>{
               Array.isArray(completeList) && completeList.map(item => (
                 <Link className={style.linkDiv}to={`/product/desDetail/${item.nationNameCn}`} key={item.nationNameCn}>
                   <div key={item.id}>{item.nationNameCn}</div>
                 </Link>
               ))
             }
      </div>
      <div className={showNodata ? style.noData : style.closeData}>
        <img src='https://tac-cdn.zhongan.com/project/product/risktip/noCountry.png' />
        <div>没有搜到相关国家或地区</div>
      </div>
    </div>
  );
};

SearchKeyCountry.defaultProps = {
  completeList: [],
  showNodata: false,
  inputInitValue: '请输入国家或地区名称',
  showSearchComponent: false,
  searchComponentBack: () => {},
  emptyInputContent: () => {},
  handleChange: () => {}
};

SearchKeyCountry.propTypes = {
  completeList: array,
  inputInitValue: string,
  searchComponentBack: func,
  showSearchComponent: bool,
  showNodata: bool,
  emptyInputContent: func,
  handleChange: func
};

export default SearchKeyCountry;

