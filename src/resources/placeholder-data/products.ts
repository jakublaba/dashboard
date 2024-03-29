import {Product} from "../../components/widgets/products/ProductCard";

const products: Product[] = [
    {
        imgSrc: "chester",
        name: "Cheetos",
        status: "in",
        price: 8,
        avgRating: 3.6,
        sold: 72
    }, {
        imgSrc: "dingochlebki",
        name: "Chlebek's",
        status: "out",
        price: 21,
        avgRating: 3.9,
        sold: 53
    }, {
        imgSrc: "bucik",
        name: "Bucik (jeden)",
        status: "low",
        price: 37,
        avgRating: 4.1,
        sold: 89
    }, {
        imgSrc: "zaroweczka",
        name: "Żaróweczka",
        status: "in",
        price: 0.8,
        avgRating: 4.2,
        sold: 123
    }
];

export default products;
