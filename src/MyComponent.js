import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name,children}) => {
  return(
  <> 
    <div>나의 새롭고 멋진 컴포넌트의 이름은 {name}이야</div> <br />
    Children 값은 {children}입니다.
  </>
  )

};

MyComponent.defaultProps = {
  name: 'React'
};
MyComponent.propTypes = {
  name: PropTypes.string
}

export default MyComponent;