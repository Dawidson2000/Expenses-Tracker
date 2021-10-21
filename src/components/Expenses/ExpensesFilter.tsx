import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

const ExpensesFilterWrapper = styled.div`
    color: white;
    padding: 0 1rem;   
`;
const ExpensesFilterControl = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;

    & > label{
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    
    & > select{
        font-style: inherit;
        padding: 0.5rem 3rem;
        font-weight: bold;
        border-radius: 6px;
    }     
`;

export interface IExpenseFilter {
    onSetSelectedYear: (selectedYear: string) => void
    selected: string
}

export const ExpenseFilter: FC<IExpenseFilter> = (props) => {

    const dropdownChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.onSetSelectedYear(event.target.value);
    }

    return(
        <ExpensesFilterWrapper>
            <ExpensesFilterControl>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </ExpensesFilterControl>
        </ExpensesFilterWrapper>
    )
}