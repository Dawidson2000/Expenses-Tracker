import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import { ChartBar } from './ChartBar';

export interface IChart {
    dataPoints:
    {
        label: string,
        value: number;
    }[]
}

const ChartWrapper = styled.div`
    padding: 1rem;
    border-radius: 12px;
    background-color: #4b4b4b;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;  
`;

export const Chart: FC<IChart> = (props) => {
    const valueOfMonthExpenses = props.dataPoints.map( month => month.value);
    const maxFillValue = Math.max(...valueOfMonthExpenses);

    return (
        <ChartWrapper>
            {props.dataPoints.map((dataPoints) => (
                <ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    maxValue={maxFillValue}
                    label={dataPoints.label}
                />
            ))}
        </ChartWrapper>
    )
}