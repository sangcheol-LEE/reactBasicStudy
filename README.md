# 리액트를 다루는 기술 리액트 기초 공부

- 2022-01-15 시작

## 왜 리액트 인가 ?

- 기존 뷰를 날려버리고, 처음부터 새로 렌더링하는 방식으로 리액트는 탄생했다.
- 우리는 다음 문제를 해결하려고 리액트를 만들었습니다. - 지속적으로 데이터가 변화하는 대규모 어플리케이션 구축하기

## 리액트의 이해

- 리액트는 MVC 패턴 중 오직 View에만 신경 쓰는 라이브러리 입니다.
- 리액트 프로젝트에서 특정 부분이 어떻게 생길지 정하는 선언체가 있는데 이를 컴포넌트라고 합니다.
- 컴포넌트는 재사용이 가능한 API로 수많은 기능들을 내장하고 있으며, 컴포넌트 하나에서 해당 컴포넌트의 생김새와 작동 방식을 정의합니다.
- 사용자 화면에 뷰를 보여주는 것을 렌더링이라고 합니다.

### 초기 렌더링

- 맨 처음 어떻게 보일지를 정하는 render함수가 리액트에 존재하고, 이 함수는 컴포넌트가 어떻게 생겼는지 정의하는 역할

## 리액트의 특징

- 리액트의 주요 특징 중 하나는 Virtual DOM(가상 돔) 입니다.
- 가상돔을 사용하면 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용합니다. 마치 실제 DOM의 가벼운 사본과 비슷합니다.
- 리액트에서 데이터가 변하여 웹 브라우저에 실제 DOM을 업데이트할 때는 다음 세 가지 절차를 밟는다.

1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링 합니다.
2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교합니다.
3. 바뀐 부분만 실제 DOM에 적용합니다.

- 리액트와 Virtual DOM이 언제나 제공할 수 있는 것은 바로 업데이트 처리 간결성입니다. UI를 업데이트하는 과정에서 생기는 복잡함을 모두 해소하고, 더욱 쉽게 업데이트에 접근 가능 !

## 작업 환경 설정

1. Node.js / npm ,yarn 설치
2. 코드 에디터 설정 (VS code)
3. Git 설치
4. create-react-app으로 프로젝트 만들기

### Node.js 와 npm

- Node.js는 크롬 v8 자바스크립트 엔진으로 빌드한 자바스크립트 런타임이고, 이것으로 웹 브라우저 환경이 아닌 곳에서도 자바스크립트를 사용하여 연산가능
- 개발 도구로는 ES6를 호환시켜주는 바벨(babel), 모듈화된 코드를 한 파일로 합치고(번들링) 코드를 수정할 때마다 웹 브라우저를 리로딩하는 등의 여러 기능을 가진 웹팩(webpack) 등이 있습니다.

### create-react-app으로 프로젝트 생성하기.

- create-react-app은 리액트 프로젝트를 생성할 때 필요한 웹팩, 바벨의 설치 및 설정 과정을 생략하고 발 간편하게 프로젝트 작업 환경을 구축해 주는 도구.

# JSX란?

- JSX는 자바스크립트의 확장 문법이며, XML과 매우 비슷하게 생겼습니다. 이런 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환됩니다.

## JSX의 장점

1. 보기 쉽고 익숙하다.
2. 더욱 높은 활용도

## JSX 문법

1. 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 합니다.

- 여기서 의문인게 리액트 컴포넌트에서 요소 여러 개를 왜 하나의 요소로 꼭 감싸 주어야 할까요 ? 바로 Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM트리 구조로 이루어져야 한다는 규칙때문.

2. 자바스크립트 표현식을 쓸 수 있는데, 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 "{}" 로 감싸주면 됩니다.

function App() {
const name = "react";

return (

<tag>{name}</tag>
)
}

3. JSX 내부에서 if문 사용할 수 없기에 조건부 연산자 (삼항 연산자)를 사용해서 표현 해줍니다.

4. 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안됩니다.

5. 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는것이 아니라 객체 형태로 넣어 주어야 하고 "-" 문자가 포함되는 속성들은 카멜 표기법으로 작성해야함

6. class가 아니라 className

7. JSX에서는 태그를 꼭 닫아주어야 한다.

8. 주석은 {/_ ... _/} 이런식으로 작성


