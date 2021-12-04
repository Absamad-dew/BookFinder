const defaultState = {
    books: [],
    maxResults: 20, 
  }

  const ADD_BOOKS = "ADD_BOOKS"
  const SELECT_BOOK = "SELECT_BOOK"
  const ADD_RESULTS = "ADD_RESULTS"
  
  
export const bookReducer = (state = defaultState, action) => {
    switch(action.type) {

      case "ADD_BOOKS":
        return {...state, books: [...state.books, action.payload]}
        
        case "ADD_RESULTS":
            return {...state, maxResults: state.maxResults + action.payload}

      case "SELECT_BOOK":
        return {...state, books: state.books.filter( books => books.id !== action.payload)}
      
      default:
        return state
    }
}

export const addBooksAction = (payload) => ({type: ADD_BOOKS, payload})
export const selectBooksAction = (payload) => ({type: SELECT_BOOK, payload})
export const addResultsAction = (payload) => ({type: ADD_RESULTS, payload})

