import React, { Component } from 'react';

class State extends Component {
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
        let { completeditems,deleteItems } = this.props;
        return (
            <div>
                <p>已经完成</p>
                <ul>
                    {
                        completeditems.map((completeditem) => {
                            return (
                                <li style={{
                                    listStyle: "none"
                                }}
                                    key={completeditem.id}>
                                    <input id={completeditem.id} type='checkbox' checked={completeditem.completed} onChange={this.checkBoxHandle} />
                                    {completeditem.text}
                                    <button onClick={() => deleteItems(completeditem.id)}>delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}
export default State;