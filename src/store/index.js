import {createStore} from 'redux';

const initialState = {
    inputTextAuthor: "",
    inputTextTitle: "",
    book: {
        author: "",
        title: "",
    },
    bookList: []

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_VALUE_AUTHOR':
            return Object.assign({}, state, {inputTextAuthor: action.text});
        case 'INPUT_VALUE_TITLE':
            return Object.assign({}, state, {inputTextTitle: action.text});
        case 'ADD_BOOK':
            return Object.assign({}, state, {
                book: {author: state.inputTextAuthor, title: state.inputTextTitle},
                bookList: state.bookList.concat(state.book),
                inputTextAuthor: "",
                inputTextTitle: ""

            });


        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;