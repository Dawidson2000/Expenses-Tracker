import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import { ExpenseItems } from './ExpenseItems';
import { BasicWrapper } from '../styledHelpers/BasicWrapper';

import type { Expense } from '../../models/ExpenseTypes/ExpenseType';

const ExpenseWrapper = styled(BasicWrapper)`
    padding: 1rem;
    background-color: rgb(31, 31, 31);
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
`;

export interface IExpenses {
    expense: Expense[]
}

export const Expenses: FC<IExpenses> = (props) => {

    return (
        <ExpenseWrapper className=''>
            <ExpenseItems
                id={props.expense[0].id}
                title={props.expense[0].title}
                date={props.expense[0].date}
                amount={props.expense[0].amount}
            />
            <ExpenseItems
                id={props.expense[1].id}
                title={props.expense[1].title}
                date={props.expense[1].date}
                amount={props.expense[1].amount}
            />
            <ExpenseItems
                id={props.expense[2].id}
                title={props.expense[2].title}
                date={props.expense[2].date}
                amount={props.expense[2].amount}
            />
            <ExpenseItems
                id={props.expense[3].id}
                title={props.expense[3].title}
                date={props.expense[3].date}
                amount={props.expense[3].amount}
            />
        </ExpenseWrapper>
    )
}