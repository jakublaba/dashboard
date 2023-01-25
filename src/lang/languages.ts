import {Lang} from "../redux/langSlice";

const PL = {
  currency: "pln",
  orderStatus: new Map([
    ["out", "Brak na stanie"],
    ["low", "Niewiele"],
    ["in", "Na stanie"],
  ]),
  home: "Strona domowa",
  account: "Konto",
  productMenuBar: {
    product: "Produkt",
    status: "Status",
    price: "Cena",
    sortCriteria: new Map([
      ["rating", "Śr ocena"],
      ["sold", "Sprzedanych"],
    ]),
  },
  orderList: {
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
};

const EN: typeof PL = {
  currency: "$",
  orderStatus: new Map([
    ["out", "Out of stock"],
    ["low", "Low stock"],
    ["in", "In stock"],
  ]),
  home: "Home",
  account: "Account",
  productMenuBar: {
    product: "Product",
    status: "Status",
    price: "Price",
    sortCriteria: new Map([
      ["rating", "Avg rating"],
      ["sold", "Sold"],
    ]),
  },
  orderList: {
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
};


const languages = new Map<Lang, typeof PL>([
    ["PL", PL],
    ["EN", EN]
]);

export default languages;
