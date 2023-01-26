import {Lang} from "./langSlice";
import {StatusType} from "../../components/widgets/products/ProductStatus";

const PL = {
    navbar: {
        home: "Strona domowa",
        account: "Konto"
    },
    widgets: {
        account: {
            username: "Użytkownik"
        },
        orders: {
            order: "Zamówienie",
            status: "Status",
            date: "Data",
            price: "Cena",
            seller: "Sprzedawca",
            buyer: "Kupujący",
            products: "Produkty",
            orderStatus: new Map([
                ["Awaiting", "Oczekujące"],
                ["Paid", "Opłacone"],
                ["Sent", "Wysłane"],
                ["Received", "Otrzymane"],
                ["Returned", "Zwrócone"],
            ]),
        },
        products: {
            currency: "pln",
            productStatus: new Map<StatusType, string>([
                ["out", "Brak"],
                ["low", "Mało"],
                ["in", "Dużo"],
            ]),
            menuBar: {
                product: "Produkt",
                status: "Magazyn",
                price: "Cena",
            },
        }
    },
};

const EN: typeof PL = {
    navbar: {
        home: "Home",
        account: "Account"
    },
    widgets: {
        account: {
            username: "User"
        },
        orders: {
            order: "Order",
            status: "Status",
            date: "Date",
            price: "Price",
            seller: "Seller",
            buyer: "Buyer",
            products: "Products",
            orderStatus: new Map([
                ["Awaiting", "Awaiting"],
                ["Paid", "Paid"],
                ["Sent", "Sent"],
                ["Received", "Received"],
                ["Returned", "Returned"],
            ]),
        },
        products: {
            currency: "$",
            productStatus: new Map([
                ["out", "Out"],
                ["low", "Low"],
                ["in", "High"],
            ]),
            menuBar: {
                product: "Product",
                status: "Stock",
                price: "Price",
            },
        }
    },
};


const languages = new Map<Lang, typeof PL>([
    ["PL", PL],
    ["EN", EN]
]);

export default languages;
