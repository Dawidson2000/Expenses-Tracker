import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import { BasicWrapper } from '../styledHelpers/BasicWrapper';

export interface IExpenseDate {
    date: Date,
}

const ExpenseDateWrapper = styled(BasicWrapper)`
    display: flex;
    flex-direction: column;
    width: 5.5rem;
    height: 5.5rem; 
    background-color: #9B2335;
    color: white;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25); 
`;

const ExpenseDateMonth = styled.div`
    font-size: 0.75rem;
    font-weight: bold;
    padding: 2px 0;
`;

const ExpenseDateYear = styled.div`
    font-size: 0.75rem;
    padding: 2px 0;
`;

const ExpenseDateDay = styled.div`
   font-size: 1.5rem;
   font-weight: bold;
   padding: 2px 0;
`;

export const ExpenseDate: FC<IExpenseDate> = (props) => {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <ExpenseDateWrapper className>
            <ExpenseDateMonth>{month}</ExpenseDateMonth>
            <ExpenseDateDay>{day}</ExpenseDateDay>
            <ExpenseDateYear>{year}</ExpenseDateYear>
        </ExpenseDateWrapper>

    )
}