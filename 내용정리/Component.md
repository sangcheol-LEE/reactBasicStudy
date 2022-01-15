# About Component

- 컴포넌트를 선언하는 방식은 두 가지입니다. 하나는 함수형 컴포넌트이고, 또 다른 하나는 클래스형 컴포넌트입니다.

## 클래스형 컴포넌트

- 클래스형 컴포넌트의 경우 state 기능 및 라이프사이클 기능을 사용할 수 있다는 것과 임의 메소드를 정의할 수 있다는 것

## 함수형 컴포넌트

- 클래스형 컴포넌트보다 선언하기가 편하다.
- 메모리 자원도 클래스형 컴포넌트보다 덜 사용한다.
- 프로젝트를 완성하여 빌드한 후 배포할 때도 함수형 컴포넌트를 사용하는 것이 결과물의 파일 크기가 더 작습니다.

## 첫 컴포넌트 생성

1. 파일 만들기
2. 코드 작성하기
3. 모듈 내보내기 및 불러오기

## Props

- propssms properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소
- 부모 컴포넌트에서 설정 가능

### props 기본 값 설정 : defaultProps

- MyComponent.defaultProps = {
  name: 'React'
  };
- 위와 같이 컴포넌트 아래에 객체형식으로 넣어준다.

### 태그 사이의 내용을 보여 주는 children

- 컴포넌트 태그 사이에 작성한 문자열을 컴포넌트 내부에서 보여주려면, props.children 값을 보여줘야한다.

### propTypes를 통한 props 검증

- 컴포넌트의 필수 props를 지정하거나 props의 타입(type)을 지정할 때는 propType을 사용합니다
- MyComponent.propTypes = {
  name: PropTypes.string
  }
- 위와같이 값을 넣어주면, name값은 무조건 문자열 형태로 전달해야 된다는 것을 의미합니다.

* PropTypes 종류

1. array : 배열
2. arrayOf : 특정 PropType으로 이루어진 배열
3. bool : true,false
4. func : 함수
5. number : 숫자형
6. object : 객체
7. string : 문자열
8. symbol : 심볼
9. any : 아무거나

# State

- 리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미합니다. props는 컴포넌트가 사용 되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다.

## this.setState가 끝난 후 특정 작업 실행하려면,

<버튼 onClick={()=> {
this.setState(
{
state : state + 1
},
() => {
console.log("setState가 호출 되었습니다.")
}
)
}}></버튼>

## state를 사용할 때 주의 사항

- state 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야함
- 배열이나 객체를 업데이트해야 할 때는 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트 한 후, 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트 합니다.
- 객체 다루기
  const object = {a: 1, b: 2, c: 3};
  const nextObject = {...object, b: 2}
