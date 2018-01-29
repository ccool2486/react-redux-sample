import uuid from 'uuid'; // UUID模組 https://github.com/kelektiv/node-uuid

// 這邊放跟Expense相關的action generators
// 這些action以後會丟到reducer操作資料
 
// 增加一筆開支
export const addExpense = (
  { // 設定預設值
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: { // payload here
    id: uuid(), // 使用uuid生成一個唯一值
    description,
    note,
    amount,
    createdAt
  }
});

// 移除一筆開支
export const removeExpense = ({ id } = {}) => ({ // 使用destructuring，讓函式裡面直接使用id這個變數
  type: 'REMOVE_EXPENSE',
  id
});

// 編輯一筆開支
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
