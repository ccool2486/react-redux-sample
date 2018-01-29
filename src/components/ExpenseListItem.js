import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => ( //destructuring讓下面能夠直接用剪單的變數操作
  <div>
    <Link to={`/edit/${id}`}> {/*注意這邊不用冒號*/}
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;
