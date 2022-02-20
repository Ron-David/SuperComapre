const axios = require('axios')
const express = require('express')
const config = require('./config.json')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`listening on port ${port}...`))

app.use(express.json());
app.use(cors())


const GetPriceByProductID = (storeId, productId) => new URLSearchParams({
    "api_key": config.apikey,
    'action': 'GetPriceByProductID',
    "store_id": storeId,
    "product_id": productId,
})


app.post('/api/getprice', async (req, res) => {
    if (!req.body.store || !req.body.product) res.status(400).send('Invalid input is provided')
    const { store, product } = req.body
    try {
        const { data } = await axios.post(config.endPoint, GetPriceByProductID(store, product))
        res.status(200).send(data[0].store_product_price)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

