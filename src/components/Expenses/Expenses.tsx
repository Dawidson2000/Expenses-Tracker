import React, { useState } from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import { BasicWrapper } from '../styledHelpers/BasicWrapper';
import { ExpenseFilter } from '../Expenses/ExpensesFilter';
import { ExpenseList } from '../Expenses/ExpensesList';
import { ExpenseChart } from './ExpensesChart';

import type { Expense } from '../../models/ExpenseTypes/ExpenseType';

const ExpenseWrapper = styled(BasicWrapper)`
    padding: 1rem;
    background-color: rgb(31, 31, 31);
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
`;

export interface IExpenses {
    items: Expense[],
    onDeleteExpense: (expenseID: string) => void
}

export const Expenses: FC<IExpenses> = (props) => {

    const [filteredYear, setFilteredYear] = useState<string>('2021');

    const setSelectedYearHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear() === +filteredYear);

    return (
        <ExpenseWrapper className=''>
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseFilter selected={filteredYear} onSetSelectedYear={setSelectedYearHandler} />
            <ExpenseList items={filteredExpenses} onDeleteExpense={props.onDeleteExpense}/>      
        </ExpenseWrapper>
    )
}