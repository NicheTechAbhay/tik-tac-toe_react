import React, { useState } from 'react';

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <p>You typed: {inputText}</p>
    </div>
  );
};

export default App;
