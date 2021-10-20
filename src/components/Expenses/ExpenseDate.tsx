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
    border: 1px solid #ececec;
    background-color: #2a2a2a;
    color: white;
    align-items: center;
    justify-content: center;
`;

const ExpenseDate_Month = styled.div`
    font-size: 0.75rem;
    font-weight: bold;
    padding: 2px 0;
`;

const ExpenseDate_Year = styled.div`
    font-size: 0.75rem;
    padding: 2px 0;
`;

const ExpenseDate_Day = styled.div`
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
            <ExpenseDate_Month>{month}</ExpenseDate_Month>
            <ExpenseDate_Day>{day}</ExpenseDate_Day>
            <ExpenseDate_Year>{year}</ExpenseDate_Year>
        </ExpenseDateWrapper>

    )
}