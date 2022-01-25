import React, {Component} from "react";


class ScrollBox extends Component {

    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {

        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto', // 컨텐츠량에 따라 스크롤바를 추가할 지 자동으로 결정하게 하는 속성
            position: 'relative'
        };
        // 틈새 css정리 overflow에 사용할 수 있는 값은 4가지다.
        // 1. visible : 기본 값이고, 넘칠 경우 컨텐츠가 상자밖으로 보여짐.
        // 2. hidden : 넘치는 부분은 잘려서 보여지지 않는다.
        // 3. scroll : 스크롤바가 추가되어 스크롤 할 수 있습니다.(가로, 세로 모두 추가됩니다.)
        // 4. auto : 컨텐츠 량에 따라 스크롤바를 추가할지 자동으로 결정됩니다.(필요에 따라 가로, 세로 별도로 추가될 수 있습니다.) 
        const innerStyle = {
            width: "100%",
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

    return (
        <div
            style={style}
            ref={(ref) => {this.box=ref}}>
                <div style={innerStyle}/>
           </div>
    )
  }
}

export default ScrollBox;