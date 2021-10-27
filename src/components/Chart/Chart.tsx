import React, { useState } from 'react';
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
    const [isValueVisible, setIsValueVisivble] = useState<boolean>(false);

    const valueVisibleHandler = () => {
        setIsValueVisivble(prevIsVisible => {
            return !prevIsVisible;
        })
    }

    const valueOfMonthExpenses = props.dataPoints.map(month => month.value);
    const maxFillValue = Math.max(...valueOfMonthExpenses);

    return (
        <ChartWrapper onDoubleClick={valueVisibleHandler}>
            {props.dataPoints.map((dataPoints) => (
                <ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    maxValue={maxFillValue}
                    label={dataPoints.label}
                    isValueVisible={isValueVisible}
                />
            ))}
        </ChartWrapper>
    )
}