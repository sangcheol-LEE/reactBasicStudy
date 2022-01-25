`# 이벤트핸들링

- 사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 이벤트라고 합니다.

## 이벤트를 사용할 때 주의 사항

1. 이벤트 이름은 카멜 표기법으로 작성합니다.

- onClick

2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달합니다.

3. DOM 요소에만 이벤트를 설정할 수 있습니다.

- div,button, input, form, span 등의 DOM 요소에는 이벤트를 설정할 수 있지만,
  우리가 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없습니다.

## 리액트에서 지원하는 이벤트의 종류

- Clipboard
- Composition
- Keyboard
- Focus
- Form
- Mouse
- Selection
- Touch
- UI
- Wheel
- Media
- Image
- Animation
- Transition

## 예제로 이벤트 핸들링

1. 컴포넌트 생성 및 불러오기
2. onChange 이벤트 핸들링하기.
3. 임의 메서드 만들기
4. input 여러 개 다루기
5. onKeyPress 이벤트 핸들링하기.

## input 여러 개 다루기

- event 객체를 다루고, e.target.name 값을 사용합니다.
- handleChange = e => { this.setState({
  [e.target.name] : e.target.value
  })} 다음 코드가 핵심
- 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됩니다.

# onKeyPress 이벤트 핸들링

## ref는 어떤 상황에서 사용해야 할까 ?

- 바로 DOM을 꼭 직접적으로 건드려야 할 때이다.
  state만으로 해결할 수 없는 기능이 있다.

1. 특정 input에 포커스 주기
2. 스크롤 박스 조작하기
3. Canvas 요소에 그림 그리기등 ...

## 콜백 함수를 통한 ref 설정

- ref를 만드는 가장 기본적인 방법은 콜백 함수를 사용하는 것

1. ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해 주면 됩니다
2. 이 콜백 함수는 ref 값을 파라미터로 전달 받는다.
3. 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정합니다.
   사용 예시 > `<input ref={(ref) => {this.input=ref}}/> `

- ref를 만드는 또 다른 방법은 리액트에 내장되어 있는 createRef라는 함수를 사용하는 것.


## createRef를 통한 ref 설정
1. 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아주어야 함
2. 그리고 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어주면 ref설정 완료


## 컴포넌트에 ref 달기
- 컴포넌트에도 ref를 달 수 있는데 이 방법은 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씁니다.

## 정리
- 컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref를 사용합니다. 먼저 ref를 사용하지 않고도 원하는 기능을 구현 할 수 있는지 반드시 고려한 후 활용
- 나중에 리덕스 혹은 Context API를 사용하여 효율적으로 교류하는 방법을 배움

