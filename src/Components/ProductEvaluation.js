import React, { Component } from 'react';

export default class ProductEvaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueText: '',
      valueInput: 5,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valueInput, valueText } = this.state;
    return (
      <div>
        <form>
          <div>
            <p>Avaliação do produto</p>
            <label htmlFor="score">
              <input
                name="valueInput"
                id="score"
                type="range"
                min="1"
                max="5"
                step="1"
                value={ valueInput }
                onChange={ this.handleChange }
              />
            </label>
          </div>

          <label htmlFor="coment">
            <textarea
              name="valueText"
              id="coment"
              cols="30"
              rows="10"
              data-testid="product-detail-evaluation"
              value={ valueText }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            onClick={ null }
          >
            Enviar
          </button>

        </form>
      </div>
    );
  }
}
