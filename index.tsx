import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello: React.SFC<{
  text: string
}> = props => {
  const [count, setCount] = useState(0);
  setTimeout(()=>setCount(count + 1), 1000)
  return <h1>Hello, {props.text} {count}</h1>
};


ReactDOM.render(<Hello text="Javamexico"/>, document.getElementById('app'));
