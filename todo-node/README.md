## Nest js

1. Data object structure is like

```json
[
  {
    "id": 1,
    "todoImg": "Image Task",
    "todoName": "Shopping list",
    "todoCreated": "April 20, 2021",
    "todoCategory": "Task",
    "todoContent": "Tomato",
    "todoDates": "",
    "active": true,
    "archive": false
  }
]
```

2. It's a array of object.
3. url for postman http://localhost:3005/notes
4. http://localhost:3005/notes - get all notes
5. http://localhost:3005/notes/number - get some notes. Validate string, if number id is not includes in array of object return status code 500, throw error in console
6. http://localhost:3005/notes/stats - getStats of array objects
7. http://localhost:3005/notes/number - delete this id object. wait for number type if no throw error, if id not found return empty array
8. http://localhost:3005/notes - post, Create new todo. Need to write body json. Format of body is:

```json
{
  "todoImg": "Image Task",
  "todoName": "Shopping list",
  "todoCreated": "April 20, 2021",
  "todoCategory": "Task",
  "todoContent": "Tomato",
  "todoDates": "",
  "active": true,
  "archive": false
}
```

All field is required. If is not exist return status code 400 and message about field is not exist and type

9. http://localhost:3005/notes/number all fields is not required. When you send request without all fields new fields will change and old ones remain

# Additional: There may be some errors in the description
