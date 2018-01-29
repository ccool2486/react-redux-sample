import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      {/*編輯表單*/}
      <ExpenseForm
        expense={props.expense} {/*抓出來，方便後面使用*/}

        {/*修改開支*/}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/'); {/*使用props.history.push來跳頁*/}
        }}
      />

      {/*移除開支*/}
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => { // 運用state&props來filter資料
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id) // 這裡面的東西會被這個component當作props來使用
  };
};

export default connect(mapStateToProps)(EditExpensePage); // 使用connect來讓這個componet接上redux
