import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import {ExpenseDate} from './ExpenseDate';
import { BasicWrapper } from '../styledHelpers/BasicWrapper';

const ExpenseItem = styled(BasicWrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin: 1rem 0;
    background-color: #4b4b4b;
`;

const ExpenseItemDescription = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    flex-flow: row;
    justify-content: flex-start;
    flex: 1;

    & > h2 {
        color: #3a3a3a;
        font-size: 1.25rem;
        flex: 1;
        margin: 0 1rem;
        color: white;
    }    
`;

const ExpenseItemPrice = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
    background-color: #9B2335;
    padding: 0.5rem;
    border-radius: 12px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);    
`;

export interface IExpenseItems {
    id: string,
    title: string,
    amount: number,
    date: Date,
}

export const ExpenseItems: FC<IExpenseItems> = (props) => {

    return (
        <ExpenseItem className>
            <ExpenseDate date = {props.date}/>
            <ExpenseItemDescription>
                <h2>{props.title}</h2>
                <ExpenseItemPrice>${props.amount}</ExpenseItemPrice>
            </ExpenseItemDescription>
        </ExpenseItem>
    )
}