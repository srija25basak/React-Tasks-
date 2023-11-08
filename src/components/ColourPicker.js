import React, { Component } from 'react';
import "./styles.css"
class ColourPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showColors: false,
      selectedColor: null,
    };
  }

  handleButtonClick = () => {
    this.setState({ showColors: !this.state.showColors });
  };

  handleColorClick = (color) => {
    this.setState({ selectedColor: color, showColors: false });
  };

  render() {
    const { colors } = this.props;
    const { showColors, selectedColor } = this.state;

    return (
      <>
      <h2>Color Picker</h2>

      <div className="color-picker">
       
       
        {showColors && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => this.handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
         <button onClick={this.handleButtonClick}>Pick a color</button>
        {selectedColor && <p>You selected: {selectedColor}</p>}
      </div>
      </>
    );
  }
}

export default ColourPicker;