import {Lang} from "./langSlice";

const PL = {
    navbar: {
        profContextMenu: {
            account: "Konto",
            home: "Strona domowa"
        }
    },
    widgets: {
        products: {
            currency: "pln",
            orderStatus: new Map([
                ["out", "Brak na stanie"],
                ["low", "Niewiele"],
                ["in", "Na stanie"]
            ]),
            productMenuBar: {
                product: "Produkt",
                status: "Status",
                price: "Cena",
                sortCriteria: new Map([
                    ["rating", "Śr ocena"],
                    ["sold", "Sprzedanych"]
                ])
            },
        },
        account: {
            username: "Użytkownik",
            email: "user@example.com"
        }
    }
};

const EN: typeof PL = {
    navbar: {
        profContextMenu: {
            account: "Account",
            home: "Home"
        }
    },
    widgets: {
        products: {
            currency: "$",
            orderStatus: new Map([
                ["out", "Out of stock"],
                ["low", "Low stock"],
                ["in", "In stock"]
            ]),
            productMenuBar: {
                product: "Product",
                status: "Stock",
                price: "Price",
                sortCriteria: new Map([
                    ["rating", "Avg rating"],
                    ["sold", "Sold"]
                ])
            },
        },
        account: {
            username: "User",
            email: "user@example.com"
        }
    }
}

const languages = new Map<Lang, typeof PL>([
    ["PL", PL],
    ["EN", EN]
]);

export default languages;
