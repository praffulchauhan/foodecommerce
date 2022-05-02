#foodecommerce
# Food Fox

A foodecommerce Website an online restaurant search and delivery platform

## Folder Structure
     -foodecommerce
        -backend
            -models
            -routes
            -Userservice
            -Userservices
     -react-app
        -public
        -src
            -Images
            -Components
                -Admin
                -Cart
                -Homepage
                -Login
                -Menu
                -Orderplaced
                -Services
                -Signup
## Run Locally

Clone the project

```bash
  git clone https://github.com/praffulchauhan/foodecommerce.git
```

Go to the project directory

```bash
  cd foodecommerce
```
Go to the backend folder

```bash
  cd backend
  npm install
  nodemon index.js
```
Go to the react-app folder

```bash
  cd react-app
  npm install
  npm start
```



## Routes
    -HomePage -> http://localhost:3000/
    -MenuPage -> http://localhost:3000/menu
    -UserLogin -> http://localhost:3000/login
    -UserSignup -> http://localhost:3000/signup
    -Cart -> http://localhost:3000/cart
## Commands To Dockerize
    -Server Side->
        -sudo docker-compose up  --> will create images and containers for serverside and also will run the mongodb service
    -Client Side->
        -sudo docker build myreact:1.0 .
        -sudo docker run --name reactapp -p 3000:3000 myreactapp:1.0
## 🔗 Links
    -Github -> https://github.com/praffulchauhan/foodecommerce
    -DockerHub ->
    -AWS EC2 ->
    -Linkedin ->

