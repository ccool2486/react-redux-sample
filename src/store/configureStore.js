import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses'; 
import filtersReducer from '../reducers/filters';

/** 把兩個reducer合成一個大的reducer */
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer, 
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
