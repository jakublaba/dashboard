import "../styles/Comment.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { User, UserProps } from "../model/User";
import { FC } from "react";

export const Comment: FC<UserProps> = ({ user }): JSX.Element => {
  return (
    <div className="comment-container">
      <div className="picture-container">
        <img
          src={"https://www.w3schools.com/howto/img_avatar.png"}
          alt="user"
          className="picture"
        />
      </div>
      <div className="text-container">
        <h4 className="username">{user.name}</h4>
        <Rating className="rating" name="read-only" value={3} readOnly />
        <p className="comment">
          Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum... Lorem
          ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum...
          Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem
          ipsum... Lorem ipsum... Lorem ipsum...
        </p>
      </div>
    </div>
  );
};
