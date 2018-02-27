import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as style from './style.scss';

class TakePhoto extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {


  }

  render() {
    // const { imgData } = this.props;
    return (
      <div>
        <div className={style.takeBox}>
          <div className={style.takeBorder}>
            <img src='https://tac-cdn.zhongan.com/project/product/risktip/takePhoto.png' />
            <div>拍照翻译</div>
            <div className={style.takefontSize}>您手边的翻译官</div>
          </div>
          <div className={style.takePhoto}>
            <img src='https://tac-cdn.zhongan.com/project/product/risktip/safeMap.png' />
            <div>安全地图</div>
            <div className={style.takefontSize}>努力建设中...</div>
          </div>

        </div>
        <div className={style.takeBottom} />
      </div>

    );
  }
}
TakePhoto.defaultProps = {
  // imgData: []
};
TakePhoto.propTypes = {
  // imgData: PropTypes.array
};
export default TakePhoto;
