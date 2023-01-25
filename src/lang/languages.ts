import {Lang} from "../redux/langSlice";

const PL = {
    currency: "pln",
    orderStatus: new Map([
        ["out", "Brak na stanie"],
        ["low", "Niewiele"],
        ["in", "Na stanie"]
    ]),
    home: "Strona domowa",
    account: "Konto",
    productMenuBar: {
        product: "Produkt",
        status: "Status",
        price: "Cena",
        sortCriteria: new Map([
            ["rating", "Śr ocena"],
            ["sold", "Sprzedanych"]
        ])
    }
};

const EN: typeof PL = {
    currency: "$",
    orderStatus: new Map([
        ["out", "Out of stock"],
        ["low", "Low stock"],
        ["in", "In stock"]
    ]),
    home: "Home",
    account: "Account",
    productMenuBar: {
        product: "Product",
        status: "Status",
        price: "Price",
        sortCriteria: new Map([
            ["rating", "Avg rating"],
            ["sold", "Sold"]
        ])
    }
}

const languages = new Map<Lang, typeof PL>([
    ["PL", PL],
    ["EN", EN]
]);

export default languages;
