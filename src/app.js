import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

/**
 * Application root component
 * @returns {JSX.Element} React component
 */
const App = () => {
    return <h1>Welcome to the <strong>Financer</strong>!</h1>;
};

ReactDOM.render(<App />, document.getElementById('app'));