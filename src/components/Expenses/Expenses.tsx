import React, { useState } from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import { ExpenseItems } from './ExpenseItems';
import { BasicWrapper } from '../styledHelpers/BasicWrapper';
import { ExpenseFilter } from '../Expenses/ExpensesFilter';

import type { Expense } from '../../models/ExpenseTypes/ExpenseType';

const ExpenseWrapper = styled(BasicWrapper)`
    padding: 1rem;
    background-color: rgb(31, 31, 31);
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
`;

export interface IExpenses {
    items: Expense[]
}

export const Expenses: FC<IExpenses> = (props) => {

    const [filteredYear, setFilteredYear] = useState<string>('2021');

    const setSelectedYearHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    return (
        <ExpenseWrapper className=''>
            <ExpenseFilter selected={filteredYear} onSetSelectedYear={setSelectedYearHandler} />
            
            {props.items.filter(expense => expense.date.getFullYear() === +filteredYear).map(expense =>
                <ExpenseItems
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}
        </ExpenseWrapper>
    )
}