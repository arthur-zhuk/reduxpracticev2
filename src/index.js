import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDCsV2BaWPNYe7gKHRrsTTP4V3zKmZ6MBE';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component's generated HTML and put it on the page (in the DOM)
// JsSX gets transpiled into vanilla JS.
ReactDOM.render(<App />, document.querySelector('.container'));
