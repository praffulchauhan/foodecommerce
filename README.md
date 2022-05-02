# foodecommerce
  -FoodFox --> A foodecommerce Website an online restaurant search and delivery platform.
  
##Links
Github Url --> 
DockerHub Url -->

##Folder Structure
├── README.md
├── foodecommerce
├── backend
│   ├── models
│   ├── routes
│   └── Userservice
    └── Userservices
└── react-app
    ├── public
    ├── src
         └── Images
         └── Components
                └── Admin
                └── Cart
                └── Homepage
                └── Login
                └── Menu
                └── Orderplaced
                └── Services
                └── Signup
                
##Running instructions
Start mongodb service
  -Server Side -> http://localhost:5000/
      Command-->foodecommerce/backend$ nodemon index.js
  -Client Side -> http://localhost:3000/
      Command-->foodecommerce/react-app$ npm start
      
##Routes
  HomePage -> http://localhost:3000/
  MenuPage -> http://localhost:3000/menu
  UserLogin -> http://localhost:3000/login
  UserSignup -> http://localhost:3000/signup
  AdminLoign -> http://localhost:3000/admin
        └── AdminAddProduct ->  http://localhost:3000/admin/add
        └── AdminListProduct ->  http://localhost:3000/admin/list
  Cart -> http://localhost:3000/cart
 
##Commands to Dockerize
-Server Side->
  -sudo docker-compose up  --> will create images and containers for serverside and also will run the mongodb service
-Client Side->
  -sudo docker build myreact:1.0 .
  -sudo docker run --name reactapp -p 3000:3000 myreactapp:1.0
  
##TODO


##More resources
react-app --> README.md
