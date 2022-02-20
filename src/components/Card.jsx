import React from 'react';
import { Container, Typography } from '@mui/material';
import * as S from '../config/styles'
import Img from './Img';

function Card({ index, imgUrl, price, imgAlt }) {
    return (
        <Container sx={S.card}>
            <Typography>{index}.</Typography>
            <Img imgUrl={imgUrl} alt={imgAlt} />
            <Typography>{price}</Typography>

        </Container>
    );
}
export default Card;