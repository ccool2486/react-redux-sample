import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    {/*標題*/}
    <h1>Expense List</h1>

    {/*使用map輸出多個 <ExpenseListItem/>
      透過spread，可以把state中的值拆開，直接當作props傳下去*/}
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })}
  </div>
)

// 把Redux中的State接上props
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters) // 這裡面的東西會被這個component當作props來使用
  };
};

export default connect(mapStateToProps)(ExpenseList); // 使用connect來讓這個componet接上redux
