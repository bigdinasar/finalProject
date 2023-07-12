const express = require("express");
const model = require("./model");

const app = express();
const port = 8080;

app.use(express.json());

// Functions not yet tested

// Get All Crimes
app.get("/crimes", function(req, res) {
    model.Crime.find().then(crimes => {
        res.send(crimes);
    });
});

// Get All Crimes By Id
app.get("/crimes/:crimeID", function(req, res) {
    model.Crime.findOne( {"_id":req.params.crimeID }).then(crime => {
        if (crime) {
            res.send(crime);
        }
        else {
            res.status(404).send("Crime not found.");
        }
    });
});

// Post A Crime
app.post("/crimes", function(req, res) {
    const newCrime = new model.Crime({
        crime_name: req.body.crime_name,
        category: req.body.category,
        max_penalty: req.body.max_penalty,
        jail_time: req.body.jail_time
    });

    newCrime.save().then(() => {
        res.status(201).send("Crime created.");
    }).catch(errors => {
        let error_list = [];
        console.log(errors.errors);
        for (key in errors.errors) {
            error_list.push(errors.errors[key].properties.message)
        }
        res.status(422).send(error_list)
    });
});

// Update A Crime
app.put("/crimes/:crimeID", function(req, res) {
    model.Crime.findOne( { "_id":req.params.crimeID }).then(crime => {
        if (crime) {
            crime.crime_name = req.body.crime_name,
            crime.category = req.body.category,
            crime.max_penalty = req.body.max_penalty,
            crime.jail_time = req.body.jail_time

            crime.save().then(() => {
                res.status(200).send("Crime updated.");
            }).catch(errors => {
                console.log(errors);
                res.status(400).send("Error updating crime.");
            });
        }
        else {
            res.status(404).send("Crime not found.");
        }
    });
});

// Delete A Crime
app.delete("/crimes/:crimeID", function(req, res) {
    model.Crime.findOne({ "_id":req.params.crimeID }).then(crime => {
        if (crime) {
            model.Crime.deleteOne({ "_id":req.params.crimeID }).then(function() {
                res.status(204).send();
            })
        }
        else {
            res.status(404).send("Crime not found.");
        }
    });
});

app.listen(port, function() {
    
    console.log(`Running server on port ${port}...`);
});