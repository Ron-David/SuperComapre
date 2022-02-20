import axios from 'axios'
import config from '../config/config.json'

export const productsList = [
    { id: 965, img: '7290000064758_27d3b3bd47', name: 'קוסקוס בינוני אסם - 350 גרם' },
    { id: 955, img: '7290000062242_b87d92af51', name: 'דובונים חטיף תפוחי אדמה בטעם שמנת ובצל אסם - 40 גרם' },
    { id: 975, img: '7290000066141_4abbe70d7a', name: 'ביסלי חטיף בטעם גריל אסם - 70 גרם' },
    { id: 985, img: '7290000066318_2433ccc628', name: 'במבה אסם - 80 גרם' },
    { id: 998, img: '7290000068237_5e3c6d8a2d', name: "ג'לי בטעם פטל 85 גרם" },
    { id: 999, img: '7290000068282_7ae1628e04', name: "מנה חמה פירה כשל\"פ 47גר" },
]

export const storesList = [
    { id: 1, img: 'super_sal_sheli.jpg', name: 'שופרסל שלי', products: productsList },
    { id: 255, img: 'super_sal_express.jpg', name: 'שופרסל אקספרס', products: productsList },
    { id: 57, img: 'super_sal_deal.jpg', name: 'שופרסל דיל', products: productsList },
]

export async function getPriceByStore(storeId, productId) {
    try {
        const { data } = await axios.post(config.endPoint + "getprice", { store: storeId, product: productId })
        return data
    } catch (error) {
        return new Error(error)
    }
}
