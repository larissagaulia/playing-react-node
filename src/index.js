import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

var MyComponent = React.createClass({
    render: function(){
        return (
            <h1>Hello, world2!</h1>
        );
    }
});

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('my-div')
);
/*
 ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('my-div')
    );*/