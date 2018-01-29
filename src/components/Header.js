import React from 'react';
import { NavLink } from 'react-router-dom';

// React裡面用NavLink來跳頁
// activeClassName="is-active" 用來判斷現在頁面是不是active
// exact選項是說要「完全符合」這個path才會符合
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;
