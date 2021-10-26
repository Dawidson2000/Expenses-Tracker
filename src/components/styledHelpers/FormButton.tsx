import React from 'react';
import styled from 'styled-components';
import { FC } from 'react';

export const FormButton = styled.button`
    font-style: inherit;
    cursor: pointer;
    padding: 1rem 1.5rem;
    border: none;
    background-color: #181818;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
    transition: 0.1s ease-in-out;
    font-size: 1rem;

    &:hover{
        background-color: black;
    }

    &:active{
        background-color: black;
    }
`;
