import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import { ExpenseForm } from './ExpenseForm';

const NewExpenseWrapper = styled.div`
    background-color: #a892ee;
    padding: 1rem;
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

export const NewExpense: FC = (props) => {
    return(
        <NewExpenseWrapper>
            <ExpenseForm/>
        </NewExpenseWrapper>
    )
}