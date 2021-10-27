import React, { useState } from 'react';
import styled from 'styled-components';
import { FC } from 'react';

const ChartBarWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10px;
`;

const ChartBarInner = styled.div`
    height: 100%;
    width: 17px;
    border-radius: 12px;
    background-color: grey;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const ChartBarFill = styled.div`
    background-color: #9B2335;
    width: 100%;
    transition: all 0.3s ease-out;  
`;

const ChartBarLabel = styled.div`
    font-weight: bold;
    font-size: 0.75rem;
    text-align: center;
    color: white;
    padding: 5px 0;
`;

export interface IChartBar {
    value: number,
    maxValue: number,
    label: string,
    isValueVisible: boolean
}

export const ChartBar: FC<IChartBar> = (props) => {

    let barFillHeight = '0%';

    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return(
        <ChartBarWrapper>
            {props.isValueVisible && <ChartBarLabel>{'$' + props.value}</ChartBarLabel>}
            <ChartBarInner>
                <ChartBarFill style={{height: barFillHeight}}></ChartBarFill>
            </ChartBarInner>
            <ChartBarLabel>{props.label}</ChartBarLabel>
        </ChartBarWrapper>
    )
}