import img1 from '../assets/img/images/1.png'
import img2 from '../assets/img/images/2.png'
import img3 from '../assets/img/images/3.png'
import img4 from '../assets/img/images/4.png'
import img5 from '../assets/img/images/5.png'
import img6 from '../assets/img/images/6.png'
import img7 from '../assets/img/images/7.png'
import img8 from '../assets/img/images/8.png'
import img9 from '../assets/img/images/9.png'
export type ProductType = {
    "type": string,
    "id": number,
    "sku": string,
    "title": string,
    "regular_price": {
        "currency": string,
        "value": number
    },
    "image": string,
    "brand": number

}

export const products: ProductType[] = [
    {
        "type": "simple",
        "id": 1,
        "sku": "s1",
        "title": "Product 1",
        "regular_price": {
            "currency": "USD",
            "value": 27.12
        },
        "image": img1,
        "brand": 9
    },
    {
        "type": "simple",
        "id": 2,
        "sku": "s2",
        "title": "Product 2",
        "regular_price": {
            "currency": "USD",
            "value": 36.87
        },
        "image": img2,
        "brand": 8
    },
    {
        "type": "simple",
        "id": 3,
        "sku": "s3",
        "title": "Product 3",
        "regular_price": {
            "currency": "USD",
            "value": 28.91
        },
        "image": img3,
        "brand": 2
    },
    {
        "type": "simple",
        "id": 4,
        "sku": "s4",
        "title": "Product 4",
        "regular_price": {
            "currency": "USD",
            "value": 41.23
        },
        "image": img4,
        "brand": 7
    },
    {
        "type": "simple",
        "id": 5,
        "sku": "s5",
        "title": "Product 5",
        "regular_price": {
            "currency": "USD",
            "value": 88.00
        },
        "image": img5,
        "brand": 3
    },
    {
        "type": "simple",
        "id": 6,
        "sku": "s6",
        "title": "Product 6",
        "regular_price": {
            "currency": "USD",
            "value": 127.41
        },
        "image": img6,
        "brand": 6
    },
    {
        "type": "simple",
        "id": 7,
        "sku": "s7",
        "title": "Product 7",
        "regular_price": {
            "currency": "USD",
            "value": 123.40
        },
        "image": img7,
        "brand": 5
    },
    {
        "type": "simple",
        "id": 8,
        "sku": "s8",
        "title": "Product 8",
        "regular_price": {
            "currency": "USD",
            "value": 92.32
        },
        "image": img8,
        "brand": 1
    },
    {
        "type": "simple",
        "id": 9,
        "sku": "s9",
        "title": "Product 9",
        "regular_price": {
            "currency": "USD",
            "value": 53.40
        },
        "image": img9,
        "brand": 2
    }
]
