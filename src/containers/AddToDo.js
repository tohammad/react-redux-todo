import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
const AddToDo = ({ dispatch }) => {
    let input
    return (
        <div>
            <form onSubmit={ e => {
                e.preventDefault();
                dispatch((addTodo(input.value)))
            }}>
                <input ref={node => input = node}></input>
                <button type="submit"> Add Todo</button>
            </form>
        </div>
    )
}
const mapStateToProps = function(state){
    return state 
};

export default connect(mapStateToProps)(AddToDo)