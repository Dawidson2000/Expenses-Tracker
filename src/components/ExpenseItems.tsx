import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

const ExpenseItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 12px;
    background-color: #4b4b4b;
`;

const ExpenseItem_Description = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    flex-flow: row;
    justify-content: flex-start;
    flex: 1;

    & > h2 {
        color: #3a3a3a;
        font-size: 1rem;
        flex: 1;
        margin: 0 1rem;
        color: white;
    }    
`;

const ExpenseItem_Price = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #40005d;
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 12px;   
`;

export interface IExpenseItems{
    id: string, 
    title: string, 
    amount: number, 
    date: Date,
}

export const ExpenseItems: FC<IExpenseItems> = (props) => {
    return (
        <ExpenseItem>
            <div>{props.date.toLocaleDateString()}</div>
            <ExpenseItem_Description>
                <h2>{props.title}</h2>
                <ExpenseItem_Price>${props.amount}</ExpenseItem_Price>
            </ExpenseItem_Description>
        </ExpenseItem>
    )
}