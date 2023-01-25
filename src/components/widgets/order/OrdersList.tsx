import React from "react";
import { Order, OrderSchema } from "../../../model/Order";
import { RootState } from "../../../redux/store";
import languages from "../../../lang/languages";

import { useSelector } from "react-redux";
import { MenuList } from "@mui/material";
import OrderCard from "./OrderCard";

const orders: Order[] = [
  {
    id: "1",
    seller: {
      id: "1",
      name: "Seller 1",
      role: "Seller",
    },
    buyer: {
      id: "2",
      name: "Buyer 2",
      role: "Seller",
    },
    status: "Sent",
    date: new Date(),
    products: new Map([
      [{ id: "1", name: "Product 1", price: 1 }, 1],
      [{ id: "2", name: "Product 2", price: 1 }, 1],
    ]),
  },
  {
    id: "2",
    seller: {
      id: "1",
      name: "Seller 1",
      role: "Seller",
    },
    buyer: {
      id: "2",
      name: "Buyer 2",
      role: "Seller",
    },
    status: "Sent",
    date: new Date(),
    products: new Map([
      [{ id: "1", name: "Product 1", price: 1 }, 1],
      [{ id: "2", name: "Product 2", price: 1 }, 1],
    ]),
  },
];

const OrderList: React.FC = () => {
  const lang = useSelector((state: RootState) => state.lang.current);

  return (
    <MenuList>
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
    </MenuList>
  );
};

export default OrderList;
