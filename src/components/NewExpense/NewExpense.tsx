import React, { useState } from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import { ExpenseForm } from './ExpenseForm';
import { FormButton } from '../../components/styledHelpers/FormButton'

import type { EnteredExpense } from '../../models/ExpenseTypes/EnteredExpenseType';
import type { Expense } from '../../models/ExpenseTypes/ExpenseType';

const NewExpenseWrapper = styled.div`
    background-color: #681824;
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

    const [formVisibility, setFormVisibility] = useState<boolean>(false);
    
    const formVisibilityHandler = () => {
        setFormVisibility(prevFormVisibilty => {
            return !prevFormVisibilty;
        })
    }

    const saveExpenseDataHandler = (enteredExpenseData: EnteredExpense) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return(
        <NewExpenseWrapper>
            {formVisibility ?
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onformVisibilityHandler={formVisibilityHandler}/> : 
            <FormButton type="button" onClick={formVisibilityHandler}>Add expense</FormButton>}
        </NewExpenseWrapper>
    )
}