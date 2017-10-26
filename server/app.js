const express = require('express');
const morgan = require('morgan'); 

const app = express();

app.use(morgan("dev"));

//WTF
app.use(express.json());
app.use(express.urlencoded());

var todoItems = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];


app.get("/", function (req, res) {
    res.status(200).send({ status: "ok" }).end();
});

app.get("/api/TodoItems", function (req, res) {
    res.status(200).send(todoItems).end();
});

app.get("/api/TodoItems/:number", function (req, res) {
    var idx = findItem(req.params.number);
        if (idx > -1) {
        res.status(200).send(todoItems[idx]).end();
    }
    else {
        res.status(404).send("No Todo item with that ID exists").end();
    }
});



app.post("/api/TodoItems", function (req, res) {


    var newItem = {};
    newItem.todoItemId = req.body.todoItemId;
    newItem.name = req.body.name;
    newItem.priority = req.body.priority;
    newItem.completed = req.body.completed;

    var idx = findItem(newItem.todoItemId);
    if (idx > -1) {
        todoItems[idx] = newItem;
    }
    else{
        todoItems.push(newItem);
    }
    res.status(201).send(newItem).end();

});

app.delete("/api/TodoItems/:number", function (req, res) {

    var idx = findItem(req.params.number);
    if (idx > -1) {
        res.status(200).send(todoItems.splice(idx,1)[0]);
    }
    else{
    res.status(404).send("Could not find Item");
    }
});

function findItem(id) {
    for( var i = 0; i < todoItems.length; i++) {
        if (todoItems[i].todoItemId == id) {
            return i;
        }
    }
    return -1;
}


module.exports = app;
