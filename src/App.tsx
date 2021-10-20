import React from 'react';
import styled from 'styled-components';

import { Expenses } from './components/Expenses/Expenses'
import { NewExpense } from './components/NewExpense/NewExpense'

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  font-family: 'Open Sans', sans-serif;
`;

function App() {

  return (
    <Wrapper>
      <NewExpense/>
      <Expenses />
    </Wrapper>
  );
}

export default App;
