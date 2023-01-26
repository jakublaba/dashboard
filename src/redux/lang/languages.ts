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
                sortingCriteria: new Map([
                    ["rating", "Średnia ocena"],
                    ["sold", "Liczba sprzedanych sztuk"]
                ])
            },
        },
        chart: {
            dropdowns: new Map([
                ["type", ["Liniowy", "Słupkowy"]],
                ["time", ["Rok", "Miesiąc", "Dzień"]],
                ["values", ["Dochód", "Sprzedaż"]]
            ]),
            months: [
                "Sty", "Lut", "Mar", "Kwi",
                "Maj", "Cze", "Lip", "Sie",
                "Wrz", "Paź", "Lis", "Gru"
            ]
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
                sortingCriteria: new Map([
                    ["rating", "Average rating"],
                    ["sold", "Amount sold"]
                ])
            },
        },
        chart: {
            dropdowns: new Map([
                ["type", ["Line", "Bar"]],
                ["time", ["Year", "Month", "Day"]],
                ["values", ["Profit", "Sales"]]
            ]),
            months: [
                "Jan", "Feb", "Mar", "Apr",
                "May", "Jun", "Jul", "Aug",
                "Sep", "Oct", "Nov", "Dec"
            ]
        }
    },
};


const languages = new Map<Lang, typeof PL>([
    ["PL", PL],
    ["EN", EN]
]);

export default languages;
