import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as style from './style.scss';

class EnlargeImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEnlarge: false,
      argUrl: ''
    };
    this.closeEnlarge = this.closeEnlarge.bind(this);
    this.openEnlarge = this.openEnlarge.bind(this);
  }
  componentDidMount() {

  }
  openEnlarge(argUrl) {
    this.setState({
      showEnlarge: true,
      argUrl
    });
  }
  closeEnlarge() {
    this.setState({
      showEnlarge: false
    });
  }
  render() {
    const { imgData } = this.props;
    return (
      <div>
        <div className={style.enlargeBox}>
          {
          Array.isArray(imgData) && imgData.map((item, index) => (
            <div className={style.enlargeItem} key={index}><img src={item.imgUrl} onClick={() => { this.openEnlarge(item.imgUrl); }} /></div>
            ))
        }
        </div>
        <div className={this.state.showEnlarge ? style.showEnlarge : style.closeEnlarge}>
          <img src={this.state.argUrl} onClick={() => { this.closeEnlarge(); }} />
        </div>
      </div>

    );
  }
}
EnlargeImg.defaultProps = {
  imgData: []
};
EnlargeImg.propTypes = {
  imgData: PropTypes.array
};
export default EnlargeImg;
