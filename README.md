## Description

There is a server side Pizza-shop application. </br>
It can create, read, update and sorting the pizzas. </br>
</br>

Technologies: Node, Express, MongoDB </br>
Libraries: body-parser, config, cors, lodash </br>

[Link to pizza shop](https://pizzas-shop.herokuapp.com/) | [Link to client code](https://github.com/quinsberry/pizza-shop-client) </br>
</br>

## API Documentation

For starting server in development mode: </br>
`npm run dev`
</br>

**Error response type:** `{ success: boolean, message: string }` </br>
**Error response example:** </br>
![Error example](https://user-images.githubusercontent.com/57848626/88582410-58df9000-d057-11ea-8ce4-a6d54e979738.JPG)

### Requests

**1. Get all pizzas:**
</br>

- type: **get**
- url: `/api/pizzas`
- Response: `{ success: boolean, data: Array<PizzasObjects> }`

**Example:** </br>

- url: `/api/pizzas` </br>
- response: </br>
  ![Get all pizzas server response](https://user-images.githubusercontent.com/57848626/88577224-59742880-d04f-11ea-8fd5-c82a3b6a6f07.JPG)

**Possible Errors:**

- code: 500
- messages: _MongoDB error messages_

 </br>

**2. Get pizzas with filters:**
</br>

- type: **get**
- url: `/api/pizzas`
- uri params:
  **- category**("Meat", "Vegetarian", etc.)
  **- sortBy** ("Price", "Popularity", etc.)
- Response: `{ success: boolean, data: Array<PizzasObjects> }`

**Valid examples url paths:** </br>

- `/api/pizzas?category=Meat`
- `/api/pizzas?sortBy=Price`
- `/api/pizzas?category=Meat&sortBy=Price`

**Example:**

- url: `/api/pizzas?category=Vegetarian&sortBy=Popularity`
- response: </br>
  ![Get pizzas with filters server response](https://user-images.githubusercontent.com/57848626/88579199-575f9900-d052-11ea-8851-20abc9009d88.JPG)

**Possible Errors:**

- code: 500, 404
- messages:
  _MongoDB error messages_, </br>
  'CATEGORY_NOT_FOUND', </br>
  'Type not found'
  </br>

**3. Create new pizza:**
</br>

- type: **post**
- url: `/api/pizzas`
- body params **(_all required_)**:
  **- imageUrl:** string
  **- name:** string
  **- types:** [number] (0 = thin, 1 = tradition)
  **- sizes:** [number] (pizzas diameters)
  **- price:** number
  **- category:** string
  **- rating:** number
- Response: `{ success: boolean }`

**IMPORTANT: Be careful, there is no validation**

**Example:**

- url: `/api/pizzas`
- request: </br>
  ![3](https://user-images.githubusercontent.com/57848626/88581483-e7531200-d055-11ea-9f07-9e1391946137.JPG)
- response: </br>
  ![Success response from server](https://user-images.githubusercontent.com/57848626/88582285-233aa700-d057-11ea-8eea-79551c000cc9.JPG)

**Possible Errors:**

- code: 500
- messages: _MongoDB error messages_
  </br>

**4. Update new pizza:**
</br>

- type: **patch**
- url: `/api/pizzas/:id`
- route params:
  **- id:** string (Pizza's id)
- body params **(_all required_)**:
  **- imageUrl:** string
  **- name:** string
  **- types:** [number] (0 = thin, 1 = tradition)
  **- sizes:** [number] (pizzas diameters)
  **- price:** number
  **- category:** string
  **- rating:** number
- Response: `{ success: boolean }`

**IMPORTANT: Be careful, there is no validation**

**Example:**

- url: `/api/pizzas`
- response: </br>
  ![Success response from server](https://user-images.githubusercontent.com/57848626/88582285-233aa700-d057-11ea-8eea-79551c000cc9.JPG)

**Possible Errors:**

- code: 500, 404
- messages:
  _MongoDB error messages_, </br>
  'PIZZA_NOT_FOUND'
  </br>
