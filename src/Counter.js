import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초기값 설정하기
    this.state = {
      number : 0,
    };
  }

  

  render() {
    const {number} = this.state;
    const handleOnPlus = () => {
      this.setState({number: number + 1 }
        )
    }
    const handleOnMinus = () => {
      this.setState({number: number - 1})
    }
    const handleOnReset = () => {
      this.setState({number: 0}, ()=> {
        alert('숫자가 리셋 되었습니다.')
      })
    }

    return(
      <>
        <h1>{number}</h1>
        <button onClick={handleOnPlus}>
          +1
        </button>
        <button onClick={handleOnMinus}>
          -1
        </button>
        <button onClick={handleOnReset}>
          reset
        </button>
      </>

    );

  }
}

export default Counter