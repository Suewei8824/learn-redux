import React, { Component } from 'react';


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    onChangeInputValue = (e) => {
        this.setState({
            inputValue: e.target.value,
        })
        //console.log(this.state.inputValue);
    }

    render() {
        let { addItem } = this.props;
        return (
            <div>
                <input onInput={this.onChangeInputValue} type="text" />
                <button onClick={() => addItem(this.state.inputValue)}>add</button>
            </div>
        )
    }
}
export default Input;