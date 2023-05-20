import { createContext, useReducer } from "react";


export const BookContext = createContext();

export function Context (props){ 

    function reducer(books, action) {
        if (action.type === 'added') {
          return [
            ...books,
            action.payload,
          ];
        } else if (action.type === 'changed') {
          return books.map((t) => {
            if (t.title === action.payload) {
              return action.task;
            } else {
              return t;
            }
          });
        } else if (action.type === 'deleted') {
          return books.filter((t) => t.title !== action.payload);
        } else {
          throw Error('Unknown action: ' + action.type);
        }
      }

    const [state,dispatch] = useReducer(reducer,[]);

    const info = {state,dispatch};



    return(
        <BookContext.Provider value={info}>{props.children}</BookContext.Provider>
    );

}