import React, { useState } from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import type { EnteredExpense } from '../../models/ExpenseTypes/EnteredExpenseType';
import { FormButton } from '../../components/styledHelpers/FormButton'

const NewExpenseControls = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
`;

const NewExpenseControl = styled.div`
    & > label{
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
        color: white;
   }
   & > input{
        font-style: inherit;
        padding: 0.45rem;
        border-radius: 6px;
        border: 1px solid #ccc;
        width: 20rem;
        max-width: 100%;
        outline: none;
        font-size: 1rem;
   }
`;

const NewExpenseActions = styled.div`
    text-align: right;   
`;

export interface IExpenseForm {
    onSaveExpenseData: (enteredExpenseData: EnteredExpense) => void,
    onformVisibilityHandler: () => void     
}

export const ExpenseForm: FC<IExpenseForm> = (props) => {

    const [enteredTitle, setEnteredTitle] = useState<string>('');
    const [enteredAmount, setEnteredAmount] = useState<string>('');
    const [enteredDate, setEnteredDate] = useState<string>('');

    // const [userInput, setUserInput] = useState<IUsersInputs>({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value)

        // setUserInput((prevState)=>{
        //     return{
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
    }
    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');

        props.onSaveExpenseData(expenseData);
    }
    
    return (
        <form onSubmit={submitHandler}>
            <NewExpenseControls>
                <NewExpenseControl>
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </NewExpenseControl>
                <NewExpenseControl>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    />
                </NewExpenseControl>
                <NewExpenseControl>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </NewExpenseControl>
            </NewExpenseControls>
            <NewExpenseActions>
                <FormButton type='button' onClick={props.onformVisibilityHandler}>Close</FormButton>
                <FormButton type='submit'>Add Expense</FormButton>
            </NewExpenseActions>
        </form>
    )
}