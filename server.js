const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());
const lifePaths = {
  1: {
    number: " 1",
    info: "People born with a Life Path number 1 are on a lifelong mission to exert their independence and step into their personal power. They carry a natural air of authority as a leader who likes to be the first to try something new. A strong desire for manifestation keeps them moving and improving.",
  },
  2: {
    number: "2",
    info: "People that were born with a 2 Life Path are blessed with beautiful hearts that they use to bring beautiful relationships into their lives.",
  },
  unknown: {
    number: "unkown",
    info: "unknown.",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// /api:lifeNum we are creating our own link to the api that is user side that is used when making a request. This can be whatever we want to call query
//params is used in express for req the parameter in the link
app.get("/api/:lifeNum", (req, res) => {
  // const lifeNums =
  const paths = req.params.lifeNum; //assigning a varible for req
  res.json(lifePaths[paths]); //responding with the data as with json- this is pulling from the object that was created
  //if we were checking for a name that had spaces dot notation would not work would have to use brackets

  //this is checking for whatever is passed in is a property of lifePaths, if it is inside of object respond with result
  //   console.log(lifePaths[paths].info);

  if (lifePaths[paths]) {
    res.json(lifePaths[paths].info);
  } else {
    console.log("error");
    // res.json(lifePaths[unknown]);
  }
});
//process.env.PORT allows heroku the option to use their own selected port
app.listen(process.env.PORT || PORT, function () {
  console.log(`The Server Is Running On Port ${PORT}!`);
});
console.log("is this working");
//for heroku
// app.listen(proccess.env.PORT || PORT, function () {
//   console.log(`The Server Is Running On Port ${PORT}!`);
// });
