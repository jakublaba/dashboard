import React from "react";
import {Order} from "../../../model/Order";
import {MenuList, Stack} from "@mui/material";
import OrderCard from "./OrderCard";

const orders: Order[] = [
    {
        id: "1",
        seller: {
            id: "1",
            name: "Krabelard",
            role: "Seller",
        },
        buyer: {
            id: "2",
            name: "Randall",
            role: "Seller",
        },
        status: "Sent",
        date: new Date(),
        products: new Map([
            [{id: "1", name: "chester", price: 1}, 1],
            [{id: "2", name: "bucik", price: 1}, 1],
        ]),
    },
    {
        id: "2",
        seller: {
            id: "1",
            name: "Craig",
            role: "Seller",
        },
        buyer: {
            id: "2",
            name: "Gordon",
            role: "Seller",
        },
        status: "Sent",
        date: new Date(),
        products: new Map([
            [{id: "1", name: "zaroweczka", price: 1}, 1],
            [{id: "2", name: "chester", price: 1}, 1],
        ]),
    },
];

const OrderList: React.FC = () => {
    return (
        <MenuList>
            <Stack
                spacing={1}
            >
                {orders.map((order) => (
                    <OrderCard
                        key={order.id}
                        id={order.id}
                        seller={order.seller}
                        buyer={order.buyer}
                        status={order.status}
                        date={order.date}
                        products={order.products}
                    />
                ))}
            </Stack>
        </MenuList>
    );
};

export default OrderList;
