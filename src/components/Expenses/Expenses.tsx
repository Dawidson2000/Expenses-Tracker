import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import { ExpenseItems } from './ExpenseItems';
import { BasicWrapper } from '../styledHelpers/BasicWrapper';

const ExpenseWrapper = styled(BasicWrapper)`
    padding: 1rem;
    background-color: rgb(31, 31, 31);
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
`;

export const Expenses: FC = (props) => {

    const expense: { id: string, title: string, amount: number, date: Date }[] = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12)
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]

    return (
        <ExpenseWrapper className=''>
            <ExpenseItems
                id={expense[0].id}
                title={expense[0].title}
                date={expense[0].date}
                amount={expense[0].amount}
            />
            <ExpenseItems
                id={expense[1].id}
                title={expense[1].title}
                date={expense[1].date}
                amount={expense[1].amount}
            />
            <ExpenseItems
                id={expense[2].id}
                title={expense[2].title}
                date={expense[2].date}
                amount={expense[2].amount}
            />
            <ExpenseItems
                id={expense[3].id}
                title={expense[3].title}
                date={expense[3].date}
                amount={expense[3].amount}
            />
        </ExpenseWrapper>
    )
}