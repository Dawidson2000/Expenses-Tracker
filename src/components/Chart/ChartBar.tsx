import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

const ChartBarWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;  
`;

const ChartBarInner = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid #313131;
    border-radius: 12px;
    background-color: #c3b4f3;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const ChartBarFill = styled.div`
    background-color: #4826b9;
    width: 100%;
    transition: all 0.3s ease-out;  
`;

const ChartBarLabel = styled.div`
    font-weight: bold;
    font-size: 0.5rem;
    text-align: center;    
`;

export interface IChartBar {
    value: number,
    maxValue: number,
    label: string
}

export const ChartBar: FC<IChartBar> = (props) => {
    let barFillHeight = '0%';

    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return(
        <ChartBarWrapper>
            <ChartBarInner>
                <ChartBarFill style={{height: barFillHeight}}></ChartBarFill>
            </ChartBarInner>
            <ChartBarLabel>{props.label}</ChartBarLabel>
        </ChartBarWrapper>
    )
}