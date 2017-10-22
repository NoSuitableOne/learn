import React from 'react';
import ReactDOM from 'react-dom';

function BiolingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>boiled</p>
    } else {
        return <p>not boiled yet</p>
    }
}

class TemperatureInput extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render () {
        const temperature = this.props.temperature,
              scale = this.props.scale;
        return (
            <fieldset>
                <legend>
                    Temperature scale: {scale}
                </legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

class Calculate extends React.Component {
    constructor (props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: ''
        }
    }

    handleCelsiusChange (temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render () {
        const scale = this.state.scale,
              temperature = this.state.temperature,
              celsius = scale === 'f' ? doConvert(temperature, toCelsius) : temperature,
              fahrenheit = scale === 'c' ? doConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BiolingVerdict celsius={parseInt(celsius)}/>
            </div>
        )
    }
}

function toCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32;
}

function doConvert(temperature, convert) {
    const input = parseInt(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.floor(output);
    return rounded.toString();
}

export default Calculate;
