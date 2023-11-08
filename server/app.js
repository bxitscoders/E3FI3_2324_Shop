import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = 3000;

const dummyData = [
  {
    id: "0",
    itemName: "Buch",
    price: "12.99",
  },
  {
    id: "1",
    itemName: "Tasche",
    price: "120.00",
  },
  {
    id: "2",
    itemName: "Laptop",
    price: "3000.00",
  },
];

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json(dummyData);
});

app.listen(port, () => {
  console.log("Server running on port 3000");
});
