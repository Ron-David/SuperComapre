import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Img from '../components/Img';

function ProductsScreen({ products, onCompare, handleSelect, selected }) {
    return (
        <React.Fragment>
            {products.map(product =>
                <Grid item xs={6} key={product.id} onClick={() => handleSelect(product.id)}>
                    <Img imgUrl={product.img} alt={product.name} selected={selected.includes(product.id)} />
                </Grid>
            )}

            <Grid item xs={12} >
                <Button variant="contained" fullWidth onClick={onCompare} disabled={selected.length === 0}>Compare</Button>
            </Grid>
        </React.Fragment>

    );
}

export default ProductsScreen;