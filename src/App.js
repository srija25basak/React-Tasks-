import React from 'react';
import ColorPicker from './compoenets/ColourPicker';

function App() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple','cyan','Orange','pink','white','black','brown'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;