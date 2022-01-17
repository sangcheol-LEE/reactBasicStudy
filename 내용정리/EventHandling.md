# 이벤트핸들링

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
