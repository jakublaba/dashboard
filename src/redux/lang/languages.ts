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
                ["out", "Brak na stanie"],
                ["low", "Niewiele"],
                ["in", "Na stanie"],
            ]),
            menuBar: {
                product: "Produkt",
                status: "Status",
                price: "Cena",
                sortCriteria: new Map([
                    ["rating", "Śr ocena"],
                    ["sold", "Sprzedanych"],
                ]),
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
                ["out", "Out of stock"],
                ["low", "Low stock"],
                ["in", "In stock"],
            ]),
            menuBar: {
                product: "Product",
                status: "Status",
                price: "Price",
                sortCriteria: new Map([
                    ["rating", "Avg rating"],
                    ["sold", "Sold"],
                ]),
            },
        }
    },
};


const languages = new Map<Lang, typeof PL>([
    ["PL", PL],
    ["EN", EN]
]);

export default languages;
