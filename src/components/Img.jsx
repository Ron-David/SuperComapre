import { Container } from '@mui/material';
import React from 'react';
import * as S from '../config/styles'

function Img({ imgUrl, selected, alt }) {
    return (
        <Container sx={S.imgContainer(selected)}>
            <img src={imgUrl} alt={alt} height='80' width='80' />
        </Container>
    );
}

export default Img;