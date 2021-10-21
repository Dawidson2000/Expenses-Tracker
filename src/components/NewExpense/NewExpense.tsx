import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import { ExpenseForm } from './ExpenseForm';

import type { EnteredExpense } from '../../models/ExpenseTypes/EnteredExpenseType';
import type { Expense } from '../../models/ExpenseTypes/ExpenseType';

const NewExpenseWrapper = styled.div`
    background-color: #a892ee;
    padding: 1rem;
    margin: 0 auto;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

export interface INewExpense {
    onAddExpense: (expense: Expense) => void
}

export const NewExpense: FC<INewExpense> = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData: EnteredExpense) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return(
        <NewExpenseWrapper>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </NewExpenseWrapper>
    )
}