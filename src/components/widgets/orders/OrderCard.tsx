import React from "react";
import {MenuItem, Stack} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import languages from "../../../redux/lang/languages";
import {Product} from "../../../model/Product";

export interface Order {
    id: string;
    status: "Awaiting" | "Paid" | "Sent" | "Received" | "Returned";
    seller: {
        id: string;
        name: string;
        role: "Buyer" | "Seller";
    };
    date: Date;
    buyer: {
        id: string;
        name: string;
        role: "Buyer" | "Seller";
    };
    products: Map<Product, any>;
}


const OrderCard: React.FC<Order> = (orderProps) => {
    const lang = useSelector((state: RootState) => state.lang.current);
    return (
        <MenuItem>
            <Stack spacing={5} direction={"row"}>
                <div key={orderProps.id}>
                    <h3>
                        {languages.get(lang)!.widgets.orders.order} #{orderProps.id}
                    </h3>
                    <p>
                        {languages.get(lang)!.widgets.orders.seller}: {orderProps.seller.name}
                    </p>
                    <p>
                        {languages.get(lang)!.widgets.orders.buyer}: {orderProps.buyer.name}
                    </p>
                    <p>
                        {languages.get(lang)!.widgets.orders.status}:{" "}
                        {languages.get(lang)!.widgets.orders.orderStatus.get(orderProps.status)}
                    </p>
                    <p>
                        {languages.get(lang)!.widgets.orders.date}:{" "}
                        {orderProps.date.toLocaleDateString()}
                    </p>
                    <h4>{languages.get(lang)!.widgets.orders.products}:</h4>
                    <ul>
                        {Array.from(orderProps.products, ([product, amount]) => (
                            <li key={product.id}>
                                {product.name} x {amount}
                            </li>
                        ))}
                    </ul>
                </div>
            </Stack>
        </MenuItem>
    );
};

export default OrderCard;
