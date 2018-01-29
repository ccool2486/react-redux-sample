import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    
    {/*新增開支*/}
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense)); {/*這裡是怎麼知道要傳什麼的??*/}
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
