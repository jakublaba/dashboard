import { Chart } from "react-google-charts";
import { Comment } from "./Comment";
import "../styles/CustomerFeedback.css";
import { User, UserSchema } from "../model/User";

export const data = [
  ["Stars given", "Number of Ratings"],
  ["★★★★★", 11],
  ["★★★★", 2],
  ["★★★", 2],
  ["★★", 2],
  ["★", 7],
];

const user1 = {
  id: BigInt(1),
  name: "user1",
  role: "Buyer",
} as User;

const user2 = {
  id: BigInt(2),
  name: "user2",
  role: "Buyer",
} as User;

const rating = 3.47;

export const options = {
  title: `Your average rating: ${rating}`,
};

export const CustomerFeedback = (): JSX.Element => {
  return (
    <div>
      <div style={{ float: "left" }}>
        <Chart
          chartType="PieChart"
          data={data}
          width={"100%"}
          height={"200px"}
          style={{ color: "green" }}
        />
      </div>
      <div>
        <h4
          style={{
            clear: "both",
            float: "left",
            padding: "0px 0px 100px 100px",
            margin: "0px",
          }}
        >
          Your average rating: {rating}
        </h4>
      </div>
      <div className="coment-section">
        <Comment user={user1} />
        <Comment user={user2} />
      </div>
    </div>
  );
};
