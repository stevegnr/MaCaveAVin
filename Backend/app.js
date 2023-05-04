const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://stevegarnerisg:Sgarneri251091@macaveavin.eyjfrol.mongodb.net/MaCaveAVin",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

const Wine = require("./models/wine");

app.use(express.json());

Wine.collection.drop();

const data = [
  {
    name: "Chateauneuf-du-Pape",
    domain: "Château de Saint Cosme",
    region: "Rhône",
    year: 1991,
    color: "red",
    price: 220,
    grapeVariety: {
      Grenache: 50,
      Mourvèdre: 30,
      Syrah: 15,
      Cinsault: 5,
    },
    biologic: false,
    bestAfter: 2,
    bestBefore: 7,
    country: "France",
    tag: "cndp",
  },
  {
    name: "Bourgogne Hautes Côtes de Beaune ",
    domain: "Elodie Roy",
    region: "Bourgogne",
    year: 2020,
    color: "red",
    price: 19,
    grapeVariety: {
      "Pinot noir": 100,
    },
    biologic: false,
    bestAfter: 5,
    bestBefore: 10,
    country: "France",
    tag: "hcdn",
  },
  {
    name: "Pi Vell",
    domain: "Le Roc des Anges",
    region: "Roussillon",
    year: 2021,
    color: "white",
    price: 46,
    grapeVariety: {
      Macabeu: 100,
    },
    biologic: true,
    bestAfter: 2,
    bestBefore: 5,
    country: "France",
    tag: "pivell",
  },
  {
    name: "Riesling Collection Privée",
    domain: "Domaine Kuehn",
    region: "Alsace",
    year: 2021,
    color: "white",
    price: 7.25,
    grapeVariety: {
      Riesling: 100,
    },
    biologic: false,
    bestAfter: 1,
    bestBefore: 3,
    country: "France",
    tag: "riesling",
  },
  {
    name: "Haut Rian",
    domain: "Château Haut Rian",
    region: "Bordeaux",
    year: 2022,
    color: "pink",
    price: 5.8,
    grapeVariety: {
      Merlot: 100,
    },
    biologic: false,
    bestAfter: 0,
    bestBefore: 2,
    country: "France",
    tag: "haut_rian",
  },
  {
    name: "Les Jamelles Chardonnay",
    domain: "Les Jamelles",
    region: "Languedoc-Roussillon",
    year: 2021,
    color: "white",
    price: 7.4,
    grapeVariety: {
      Chardonnay: 100,
    },
    biologic: false,
    bestAfter: 0,
    bestBefore: 2,
    country: "France",
    tag: "jamelles",
  },
  {
    name: "Chianti Riserva",
    domain: "Uggiano",
    region: "Italy",
    year: 2019,
    color: "red",
    price: 9.35,
    grapeVariety: {
      Sangiovese: 50,
      Canailo: 50,
    },
    biologic: true,
    bestAfter: 2,
    bestBefore: 7,
    country: "Italy",
    tag: "chianti",
  },
];

Wine.insertMany(data)
  .then(() => {
    console.log("Data seeded successfully");
  })
  .catch((err) => console.error(err));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/api/wines", (req, res, next) => {
  Wine.find()
    .then((wines) => res.status(200).json(wines))
    .catch((err) => res.status(400).json({ err }));
});

module.exports = app;
