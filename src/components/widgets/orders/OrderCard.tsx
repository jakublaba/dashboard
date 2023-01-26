import React from "react";
import {MenuItem, Paper, Stack, Typography} from "@mui/material";
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
        <Paper
            elevation={3}
        >
            <MenuItem divider>
                <Stack
                    direction={"row"}
                    spacing={4}
                >
                    <h3>
                        {languages.get(lang)!.widgets.orders.order} #{orderProps.id}
                    </h3>

                    <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
                        <Typography style={{marginTop: "2rem"}}>
                            {languages.get(lang)!.widgets.orders.status}:{" "}
                        </Typography>
                        <b>
                            {languages
                                .get(lang)!
                                .widgets.orders.orderStatus.get(orderProps.status)}
                        </b>
                    </div>

                    <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
                        <Typography style={{marginTop: "2rem"}}>
                            {languages.get(lang)!.widgets.orders.seller}:
                        </Typography>
                        <b>{orderProps.seller.name}</b>
                    </div>

                    <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
                        <Typography style={{marginTop: "2rem"}}>
                            {languages.get(lang)!.widgets.orders.buyer}:
                        </Typography>
                        <b>{orderProps.buyer.name}</b>
                    </div>

                    <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
                        <Typography style={{marginTop: "2rem"}}>
                            {languages.get(lang)!.widgets.orders.date}:{" "}
                        </Typography>
                        <b>{orderProps.date.toLocaleDateString()}</b>
                    </div>

                    <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
                        <h4 style={{marginTop: "2rem"}}>
                            {languages.get(lang)!.widgets.orders.products}:
                        </h4>
                        <ul style={{listStyleType: "none", marginLeft: "-2.5rem"}}>
                            {Array.from(orderProps.products, ([product, amount]) => (
                                <li key={product.id}>
                                    {product.name} x {amount}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ul
                        style={{
                            listStyleType: "none",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "2rem",
                        }}
                    >
                        {Array.from(orderProps.products, ([product]) => (
                            <li style={{marginRight: "0.5rem"}} key={product.id}>
                                <img
                                    src={require(`/src/resources/img/${product.name}.svg`)}
                                    alt={product.name}
                                />
                            </li>
                        ))}
                    </ul>
                </Stack>
            </MenuItem>
        </Paper>
    );
};

export default OrderCard;
