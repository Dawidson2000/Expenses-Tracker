import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';
import type { Expense } from '../../models/ExpenseTypes/ExpenseType';

import { ExpenseItem } from './ExpenseItem';

const CustomExpenseList = styled.ul`
    list-style: none;
    padding: 0;
`;

const CustomExpenseH2 = styled.h2`
    color: white;
    text-align: center;
`;

export interface IExpenseList {
    items: Expense[],
    onDeleteExpense: (expenseID: string) => void
}

export const ExpenseList: FC<IExpenseList> = (props) => {

    const deleteExpenseHandler = (expenseId: string) => {
        props.onDeleteExpense(expenseId);
    }

    if (props.items.length === 0)
        return <CustomExpenseH2>No expenses found.</CustomExpenseH2>

    return (
        <CustomExpenseList>
            {props.items.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    onDelete={props.onDeleteExpense}
                />
            )}
        </CustomExpenseList>
    )
}