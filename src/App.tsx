import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.scss';

function App() {
  useEffect(() => {
    console.log('use Effect');
  }, []);

  return <div>start</div>;
}

export default App;
