import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = 3001;

const dummyData = [
    {
        id: "1",
        item: "Buch",
        price: "9.99",
    
    },
    {
        id: "2",
        item: "Laptop",
        price: "3000"
    }
]

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json(dummyData);
})


app.listen(port, function () {
  console.log("Server started on Port 5000...");
});
