import React from 'react';
import styled from 'styled-components';
import {ExpenseItems} from './components/ExpenseItems';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  font-family: 'Open Sans', sans-serif;
`;

function App() {

  const expense: {id: string, title: string, amount: number, date: Date}[] = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
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

  return (
    <Wrapper>
      <ExpenseItems 
        id = {expense[0].id}
        title = {expense[0].title}
        date = {expense[0].date}
        amount = {expense[0].amount}
      />
      <ExpenseItems 
        id = {expense[1].id}
        title = {expense[1].title}
        date = {expense[1].date}
        amount = {expense[1].amount}
      /> 
      <ExpenseItems 
        id = {expense[2].id}
        title = {expense[2].title}
        date = {expense[2].date}
        amount = {expense[2].amount}
      /> 
      <ExpenseItems 
        id = {expense[3].id}
        title = {expense[3].title}
        date = {expense[3].date}
        amount = {expense[3].amount}
      />  
    </Wrapper>
  );
}

export default App;
