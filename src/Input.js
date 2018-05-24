import React from 'react';
import {connect} from 'react-redux';

function Input(props) {
    return (
        <div>
            <input placeholder='author' value={props.inputTextAuthor} onChange={props.inputAuthorChanged}/>
            <input placeholder='title' value={props.inputTextTitle} onChange={props.inputTitleChanged}/>
            <button onClick={props.addBook}>+</button>
            <div>
               <Book bookList={props.bookList}/>
            </div>
        </div>
    )
}

function Book (props) {
    return(
        <div>
            {props.bookList.map((book, index) => {
                return <li key={index}>{book.author},{book.title} </li>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputTextAuthor: state.inputTextAuthor,
        inputTextTitle: state.inputTextTitle,
        bookList: state.bookList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        inputAuthorChanged: (e) => {
            const action = {type: 'INPUT_VALUE_AUTHOR', text: e.target.value};
            dispatch(action);


        },
        inputTitleChanged: (e) => {
            const action = {type: 'INPUT_VALUE_TITLE', text:e.target.value };
            dispatch(action);
        },
        addBook: () => {
            const action = {type: 'ADD_BOOK'};
            dispatch(action);
        }


    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Input);
