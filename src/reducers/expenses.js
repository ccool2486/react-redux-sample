// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => { // 1. state的初始狀態 2.action object
  switch (action.type) {
    case 'ADD_EXPENSE': // 新增開支
      return [
        ...state, // spread for what ???
        action.expense
      ];
    
      case 'REMOVE_EXPENSE': // 移除開支
      return state.filter(({ id }) => id !== action.id); // 找出不同的，然後除了那個不同的，通通塞回去
    
      case 'EDIT_EXPENSE':  // 編輯開支
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense, // spread for what ???
            ...action.updates // spread for what ???
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};
