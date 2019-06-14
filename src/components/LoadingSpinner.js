import React from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
export default class LoadingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='loading-spinner'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={25}
          color={'#98b880'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}