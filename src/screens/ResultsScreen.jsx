import React, { useState, useEffect } from 'react';
import { WhatsappShareButton } from "react-share"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import _ from "lodash"

import Card from '../components/Card';
import { getPriceByStore } from '../services/superGetService';
import * as S from '../config/styles'

function ResultsScreen({ data, onBack, selected }) {
    const [stores, setStores] = useState(false)

    useEffect(() => {
        calcPrices()
    }, [])

    const calcPrices = async () => {
        let newStores = _.cloneDeep(data)
        try {

            for (const store of newStores) {
                let price = 0
                for (const product of store.products) {
                    if (selected.includes(product.id)) {
                        price += await getPriceByStore(store.id, product.id)
                    }
                }
                store.totalPrice = price.toFixed(2)
            }
            newStores = _.orderBy(newStores, ['totalPrice'], ['asc'])
        } catch (error) {
            alert("Opss... server is unavailable")
        }
        setStores(newStores)
    }

    return (
        <React.Fragment>
            {stores && stores.map((store, index) => {
                return <Grid item xs={12} key={store.id}>
                    <Card index={index + 1} imgUrl={store.imgUrl} imgAlt={store.name} price={store.totalPrice} />
                </Grid>
            })}
            {!stores && <p>Loading...</p>}

            <Grid item xs={12} >
                {stores && <WhatsappShareButton style={S.button} url={window.location.href} >
                    SHARE
                </WhatsappShareButton>}
                <Button variant="contained" fullWidth onClick={onBack} >
                    BACK
                </Button>
            </Grid>
        </React.Fragment>
    );
}

export default ResultsScreen;