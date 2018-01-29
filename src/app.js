import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// grab Redux Store，好讓我後面可以直接打store就好
const store = configureStore();

// 塞一些資料幫助我們測試
console.log("store:", store)
store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 1517212927997 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1517212927997 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1517212927997 }));

// grab Redux State，好讓我之後直接打state就好
const state = store.getState();
console.log("State:", state)
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); // 透過selector來過濾資料，這邊只是引用，邏輯看那個selector
console.log("Visible state:", visibleExpenses);

// 使用Redux Provider包住APP，讓Store裡的資料用props傳入，讓整個APP都可以使用
// 用Provider包住，並且把"store"當作一個props傳下去
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
