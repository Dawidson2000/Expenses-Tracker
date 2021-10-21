import React from 'react';
import styled from 'styled-components';

import { Expenses } from './components/Expenses/Expenses'
import { NewExpense } from './components/NewExpense/NewExpense'

import type { Expense } from './models/ExpenseTypes/ExpenseType';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  font-family: 'Open Sans', sans-serif;
`;

function App() {

  const expense: Expense[] = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
]

const addExpenseHandler = (expense: Expense) => {
  console.log(expense);
}

  return (
    <Wrapper>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expense}/>
    </Wrapper>
  );
}

export default App;
