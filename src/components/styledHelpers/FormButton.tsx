import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

export const FormButton = styled.button`
    font-style: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;

    &:hover{
        background-color: #510674;
        border-color: #510674;
    }

    &:active{
        background-color: #510674;
        border-color: #510674;
    }  
`;
