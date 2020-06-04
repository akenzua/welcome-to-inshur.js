const { Router } = require("express");

const home = Router();

home.get("/", (request, response) => {
  response.send([
    {
      name: "Akintade Ajibade",
      jobTitle: "Senior Frontend Developer",
      favouriteFood: "Bolognese Pasta",
      pictureUrl: "/profile.jpg",
    },
  ]);
});

module.exports = home;
