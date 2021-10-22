import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';
import type { Expense } from '../../models/ExpenseTypes/ExpenseType';

import { ExpenseItems } from './ExpenseItems';

const CustomExpenseList = styled.ul`
    list-style: none;
    padding: 0;
`;

const CustomExpenseH2 = styled.h2`
    color: white;
    text-align: center;
`;

export interface IExpenseList {
    items: Expense[]
}

export const ExpenseList: FC<IExpenseList> = (props) => {

    if(props.items.length===0)
        return <CustomExpenseH2>No expenses found.</CustomExpenseH2>

    return (
        <CustomExpenseList>
            {props.items.map(expense =>
                <ExpenseItems
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}
        </CustomExpenseList>
    )    
}