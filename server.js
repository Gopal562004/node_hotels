// console.log('Helo');
// (function(){
//     console.log(`Starting up`);
// })();

// // function callback (){
// //     console.log('This is a callback function');
// // }
// // const add = function(a,b,callback){
// //     var result = a+b;
// //     console.log(result);
// //     callback();
// // }
// // add(2,3,callback);

// // add(2,3,function(){
// //     console.log("Finished");
// // });

// ////////////////////////
// // var fs = require("fs");
// // var os = require("os");

// // var user = os.userInfo();
// // console.log(user);

// // fs.appendFile("greeting.txt", "hi" + user.username + "!\n", () => {
// //   console.log("file is created");
// // });

// // console.log(os);
// ////////////////////////
// const notes = require("./notes.js");
// var _ = require("lodash");

// var age = notes.age;
// console.log(age);

// var result = notes.addNumber(5, 5);
// console.log(result);

// var data = ["person", "person", 1, 2, 1, 2, 5];
// var filter = _.uniq(data);
// console.log(filter);

/////express js
// const express = require('express');
// const app = express()

// app.get('/',function(req,res){
//     res.send('Hello World')
// })
// app.get('/chicken',(req,res)=>{
//     var customize_chicken = {
//         name : 'Chicken Tikka Masala',
//         description: 'Our special Chicken Tikka Masala recipe with spices and creamy tomato sauce served with rice',

//     }
//     // res.send("Hi")
//     res.send(customize_chicken)
// })
// app.post('/items', (req, res) => {
//     res.send('data is saved')
// })
// app.listen(3000,()=>{
//     console.log('Listning on port 3000')
// })
/////mongodb
// const express = require("express");
// const app = express();
// const db = require("./db");
// // const person = require("./models/person");

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

// app.post('/person',(req,res)=>{
//     // const data = req.body;

//     // //old
//     // // const newPerson = new person();
//     // // newPerson.name = data.name;
//     // // newPerson.age= data.age;
//     // // newPerson.salary = data.salary ;
//     // // newPerson.mobile = data.mobile;
//     // //new
//     // const newPerson = new person(data);
//     // newPerson.save((error,saveperson)=>{
//     //     if(error) {
//     //         console.log("Error in saving the user",error);
//     //         res.status(500).json({error:'Internal server error'});
//     //     }else{
//     //         console.log("Data saved successfully");
//     //         res.status(200).json(saveperson);
//     //     }

//     // });

//     ///async await

// });

// app.post("/persons", async (req, res) => {
//   try {
//     const data = req.body;

//     const newperson = new person(data); // Creating a new person object
//     const savedperson = await newperson.save(); // Saving the person object to the database

//     console.log("Data saved:", savedperson);
//     res.status(200).json(savedperson);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ err: "Server Error" });
//   }
// });
// app.get("/person", async (req, res) => {

//     try{
//         const data = await person.find();
//         console.log("data fetch")
//         res.status(200).json(data);
//     }catch(e){
//         console.log(err);
//         res.status(500).json({ err: "Server Error" });
//     }

// });
// app.get('/person/:workType', async (req, res) => {
//   try {
//       const workType = req.params.workType;
//       console.log('Requested work type:', workType); // Log the received work type

//       if (workType === 'chef' || workType === 'manager' || workType === 'waiter') {
//           const response = await person.find({ work: workType });
//           console.log('Response fetched:', response); // Log the fetched response
//           res.status(200).json(response);
//       } else {
//           res.status(404).json({ error: 'Invalid work type' });
//       }
//   } catch (err) {
//       console.log('Error:', err);
//       res.status(500).json({ error: 'Server Error' });
//   }
// });

// const personRoutes = require('./routes/personRoutes');
// app.use('/person',personRoutes);

// const menuItemsRoutes = require('./routes/menuItemsRoutes');
// app.use('/menu',menuItemsRoutes);

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.listen(3000, () => {
//   console.log("Listning on port 3000");
// });
///////////////////////////
//restart

// var fs = require('fs');
// var os =require('os');
// var _ = require('lodash');
// console.log(os.userInfo());
// fs.appendFile("greeting.txt",'hi'+os.userInfo.username+ '\n',()=> {
//   console.log("file is created");
// });

// var data=["person",55,55,667,1,1];
// var filter=_.uniq(data);
// console.log(filter);

// const jsonString ='{"name":"john","age":60}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// const object={
//   name:"john",
//   age:60
// };
// const jsonStringified =JSON.stringify(object);
// console.log(jsonStringified);

//////////////creating server

const express = require("express");
const app = express();
const db = require("./db");

const menuItems = require("./models/MenuItems");
const bodyParser = require("body-parser");
const MenuItems = require("./models/MenuItems");
app.use(bodyParser.json());

///get
// app.get('/',function(req,res){
//   res.send("Welcome to my hotel");
// });
// app.get('/chicken',(req,res)=>{
//   var coustom={
//     name:"butterchicken",
//     is_gravy:true
//   }
//   res.send("sure sir,i wound love to serve chicken");
// });
// app.get('/daal',(req,res)=>{
//   res.send("sure sir,i wound love to serve daal");
// });
// ///post

//get

///mongo
// app.get('/',(req,res)=>{
//     res.send("Welcome to my hotel");
// });
///menuitems

//get

///routing



const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuItemsRoutes')
app.use('/person',personRoutes);
app.use('/menuItems',menuRoutes);
//comment added
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
