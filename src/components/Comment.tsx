import "../styles/Comment.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { User, UserProps } from "../model/User";
import { FC } from "react";
import StarIcon from "@mui/icons-material/Star";

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
        <Rating
          className="rating"
          name="read-only"
          value={3}
          max={5}
          readOnly
          icon={<StarIcon fontSize="inherit" />}
          sx={{
            fontSize: "90%",
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <p className="comment">
          Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum... Lorem
        </p>
      </div>
    </div>
  );
};
