// const express = require('express');
// const router = express.Router();
// const person = require("./../models/person");

// router.post("/", async (req, res) => {
//     try {
//       const data = req.body;

//       const newperson = new person(data); // Creating a new person object
//       const savedperson = await newperson.save(); // Saving the person object to the database

//       console.log("Data saved:", savedperson);
//       res.status(200).json(savedperson);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ err: "Server Error" });
//     }
//   });
//   router.get("/", async (req, res) => {

//       try{
//           const data = await person.find();
//           console.log("data fetch")
//           res.status(200).json(data);
//       }catch(e){
//           console.log(err);
//           res.status(500).json({ err: "Server Error" });
//       }

//   });
//   router.get('/:workType', async (req, res) => {
//     try {
//         const workType = req.params.workType;
//         console.log('Requested work type:', workType); // Log the received work type

//         if (workType === 'chef' || workType === 'manager' || workType === 'waiter') {
//             const response = await person.find({ work: workType });
//             console.log('Response fetched:', response); // Log the fetched response
//             res.status(200).json(response);
//         } else {
//             res.status(404).json({ error: 'Invalid work type' });
//         }
//     } catch (err) {
//         console.log('Error:', err);
//         res.status(500).json({ error: 'Server Error' });
//     }
//   });

//   router.put('/:id',async(req,res)=>{
//     try{
//         const personId = req.params.id;
//         const personData = req.body;
//         const response =await person.findByIdAndUpdate(personId,personData,{
//             new:true,
//             runValidators:true

//         });
//         if(!response){
//             return res.status(404).json({error:'person not found'});

//         }
//         console.log('data updated');
//         res.status(200).json(response);

//     }catch{
//         console.log(err);
//         res.status(500).json({error:'internal server eroor'})
//     }
//   });
//   router.delete('/:id', async (req, res) => {
//     try {
//         const personId = req.params.id;

//         // Check if the person with the provided ID exists
//         const existingPerson = await person.findByIdAndDelete(personId);
//         if (!existingPerson) {
//             return res.status(404).json({ error: 'Person not found' });
//         }

//         console.log('Person deleted');
//         res.status(200).json({ message: 'Person deleted successfully' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

//   module.exports= router;

const express = require("express");
const router = express.Router();
const person = require("./../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newperson = new person(data);
    const response = await newperson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server E rror" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await person.find({ work: workType });
      console.log("response fetch");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }
    console.log("response fetch");
    res.status(200).json(response);
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const deletedPerson = await person.findByIdAndDelete(personId);
    if (!deletedPerson) {
      return res.status(404).json({ error: "person not found" });
    }
    console.log("Person deleted");
    res.status(200).json({ message: "person deleted" });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});
module.exports = router;
