## A Very Simple To Do App

***Description***

Have you wanted a simple todo app? Of course you have. And here it is! You can request items off the list, and post new ones, all through the power of HTTP requests.

***Usage***

Before doing anything, open a command prompt, cd into this folder, and type `node ./server/index.js`. After that, you can send the following HTTP requests to http://localhost:8484

1. GET to `/api/TodoItems` to request the entire list

2. GET to `/api/TodoItems/{number}`, for a specific to do item

3. POST to `/api/TodoItems` to add a new item to the list

4. DELETE to `/api/TodoItems/{number}` to remove a specific item from the list.

All items are in JSON format with the following properties:

    {
    todoItemId: integer,
    name: string,
    priority: integer,
    completed: boolean
    }
