import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
    }

    checkBoxHandle = e => {
        const { dispatch } = this.props;
        const checkbox = e.target;
        checkbox.checked ? 
        dispatch({
            type: 'checked',
            payload: {
                id: e.target.id,
            }
        })
        :
        dispatch({
            type: 'unchecked',
            payload: {
                id: e.target.id,
            }
        })
    }

    render() {
        let { items, deleteItems } = this.props;
        return (
            <div>
                <p>正在进行</p>
                <ul>
                    {
                        items.map((ipt, index) => {
                            return (
                                <li style={{
                                    listStyle: "none"
                                }}
                                    key={index}>
                                    <input id={ipt.id} type='checkbox' onChange={this.checkBoxHandle} checked={ipt.completed}/>
                                    {ipt.text}
                                    <button onClick={() => deleteItems(ipt.id)}>delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default List;