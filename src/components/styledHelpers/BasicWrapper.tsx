import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

const Wrapper = styled.div`
    border-radius: 12px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25); 
`;

export interface IWrapper {
    className: any
}

export const BasicWrapper: FC<IWrapper> = (props) => {

    return(
       <Wrapper className={props.className}>{props.children}</Wrapper>
    )
}