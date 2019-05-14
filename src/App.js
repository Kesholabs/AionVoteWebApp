import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';

function App() {
  return (
    <div className="is-preload">
      <header className="inner">
      </header>

      <body>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      </body>
    </div>
  );
}

export default App;
