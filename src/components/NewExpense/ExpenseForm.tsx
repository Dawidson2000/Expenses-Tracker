import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

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
   }
   & > input{
        font-style: inherit;
        padding: 0.5rem;
        border-radius: 6px;
        border: 1px solid #ccc;
        width: 20rem;
        max-width: 100%;
   }
`;

const NewExpenseActions = styled.div`
    text-align: right;

    & > button{
        font-style: inherit;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 1px solid #40005d;
        background-color: #40005d;
        color: white;
        border-radius: 12px;
        margin-right: 1rem;

        &:hover{
            background-color: #510674;
            border-color: #510674;
        }

        &:active{
            background-color: #510674;
            border-color: #510674;
        }
    }
`;

export const ExpenseForm: FC = (props) => {
    return (
        <form>
            <NewExpenseControls>
                <NewExpenseControl>
                    <label>Title</label>
                    <input type='text' />
                </NewExpenseControl>
                <NewExpenseControl>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' />
                </NewExpenseControl>
                <NewExpenseControl>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' />
                </NewExpenseControl>
            </NewExpenseControls>
            <NewExpenseActions>
                <button type='submit'>Add Expense</button>
            </NewExpenseActions>
        </form>
    )
}