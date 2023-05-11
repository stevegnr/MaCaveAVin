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

Wine.collection.drop();

const data = [
  {
    name: "Chateauneuf-du-Pape",
    domain: "Château de Saint Cosme",
    region: "Rhône",
    year: 1991,
    color: "red",
    price: 22,
    grapeVariety: {
      Grenache: 50,
      Mourvèdre: 30,
      Syrah: 15,
      Cinsault: 5,
    },
    biologic: false,
    bestAfter: 2020,
    bestBefore: 2025,
    country: "france",
    tag: "chateauneuf_du_pape.jpg",
    quantity: 1,
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
    bestAfter: 2025,
    bestBefore: 2030,
    country: "france",
    tag: "hautes_cotes_de_nuit.jpg",
    quantity: 6,
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
    bestAfter: 2022,
    bestBefore: 2025,
    country: "france",
    tag: "pi-vell.jpg",
    quantity: 11,
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
    bestAfter: 2021,
    bestBefore: 2023,
    country: "france",
    tag: "riesling.jpg",
    quantity: 3,
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
    bestAfter: 2020,
    bestBefore: 2022,
    country: "france",
    tag: "haut_rian.jpg",
    quantity: 8,
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
    bestAfter: 2021,
    bestBefore: 2022,
    country: "france",
    tag: "les_jamelles.jpg",
    quantity: 4,
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
    bestAfter: 2022,
    bestBefore: 2027,
    country: "italy",
    tag: "chianti.jpg",
    quantity: 2,
  },
];

Wine.insertMany(data)
  .then(() => {
    console.log("Data seeded successfully");
  })
  .catch((err) => console.error(err));

// Récupère toutes les références
app.get("/api/wines", (req, res, next) => {
  Wine.find()
    .then((wines) => res.status(200).json(wines))
    .catch((err) => res.status(400).json({ err }));
});

// Crée une nouvelle référence
app.post("/api/wines", (req, res, next) => {
  const wine = new Wine({
    name: req.body.name,
    domain: req.body.domain,
    region: req.body.region,
    year: req.body.year,
    color: req.body.color,
    price: req.body.price,
    grapeVariety: req.body.grapeVariety,
    biologic: req.body.biologic,
    bestAfter: req.body.bestAfter,
    bestBefore: req.body.bestBefore,
    country: req.body.country,
    tag: req.body.tag,
    quantity: req.body.quantity,
  });

  wine
    .save()
    .then(() => console.log("Référence enregistrée !"))
    .catch((err) => res.status(400).json({ err }));
});

// Modifie la quantité de la référence mise en évidence
app.put("/api/wines/:id", (req, res) => {
  const id = req.params.id;
  const update = { quantity: req.body.quantity };

  Wine.findByIdAndUpdate(id, update, { new: true })
    .then((updatedWine) => {
      res.json(updatedWine);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error updating document" });
    });
});

// Supprime une référence
app.delete("/api/wines/:id", (req, res) => {
  const id = req.params.id;
  Wine.findByIdAndDelete(id)
    .then((deleteWine) => {
      res.json(deleteWine);
    })
    .then(() => console.log("Référence supprimée !"))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error deleting document" });
    });
});

module.exports = app;
