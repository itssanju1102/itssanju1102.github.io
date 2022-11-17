const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://benaka:benaka@cluster0.uzdydft.mongodb.net/test");

const subscribe = mongoose.model('subscriptions', { email: String });
 


const traindata = [
    {
        "from": "banglore",
        "to": "manglore",
        "train_name": "banglore express",
        "train_number": "54636",
        "fair_price": "₹230"
    },
    {
        "from": "banglore",
        "to": "manglore",
        "train_name": "coastal express",
        "train_number": "27362",
        "fair_price": "₹780"
    },
    {
        "from": "mysore",
        "to": "beelur",
        "train_name": "raaani express",
        "train_number": "86757",
        "fair_price": "₹534"
    },
    {
        "from": "tiptur",
        "to": "tumkur",
        "train_name": "kalpataru express",
        "train_number": "99747",
        "fair_price": "₹560"
    },
    {
        "from": "hassan",
        "to": "banglore",
        "train_name": "banglore intercity",
        "train_number": "43523",
        "fair_price": "₹450"
    },
    {
        "from": "tumkur",
        "to": "hassan",
        "train_name": "vosco de gaama",
        "train_number": "84746",
        "fair_price": "₹254"
    },
    {
        "from": "hubli",
        "to": "mysore",
        "train_name": "hubli express",
        "train_number": "63424",
        "fair_price": "₹900"
    },
    
    

    

]



app.get("/:from/:to", (req, res) => {
    const from = req.params.from
    const to = req.params.to
    const data = []
    traindata.map((train) => {
        if (train.from == from && train.to == to) {
            data.push(train)
        }
    })
    res.json(data)
})


app.get("/api/subscribe/:email",(req,res)=>{
const email = req.params.email
const sub = new subscribe({ email: email });
sub.save().then(() => console.log('data has been pushed to database'));
res.status(200).send("data push to db succeeded")
})



app.listen(8000, () => {
    console.log("listening on port 8000")
})