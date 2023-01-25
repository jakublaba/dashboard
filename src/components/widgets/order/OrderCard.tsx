import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { MenuItem, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import languages from "../../../lang/languages";
import { Product } from "../../../model/Product";
import { OrderStatus } from "../../../model/Status";


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
    products: Map<Product,any>;
}



const OrderCard: React.FC<Order> = (orderProps) => {
  const lang = useSelector((state: RootState) => state.lang.current);
  return (
    <MenuItem>
      <Stack spacing={5} direction={"row"}>
        <div key={orderProps.id}>
          <h3>
            {languages.get(lang)!.orderList.order} #{orderProps.id}
          </h3>
          <p>
            {languages.get(lang)!.orderList.seller}: {orderProps.seller.name}
          </p>
          <p>
            {languages.get(lang)!.orderList.buyer}: {orderProps.buyer.name}
          </p>
          <p>
            {languages.get(lang)!.orderList.status}:{" "}
            {languages.get(lang)!.orderList.orderStatus.get(orderProps.status)}
          </p>
          <p>
            {languages.get(lang)!.orderList.date}:{" "}
            {orderProps.date.toLocaleDateString()}
          </p>
          <h4>{languages.get(lang)!.orderList.products}:</h4>
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
