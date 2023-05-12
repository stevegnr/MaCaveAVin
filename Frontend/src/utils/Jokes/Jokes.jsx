import React from "react";

function Jokes() {
  const jokes = [
    "Ne pas confondre ivre de bonheur et ivre de bonne heure 🤪",
    "Un verre de vin c'est bon pour la santé, le reste de la bouteille c'est bon pour le moral ! 🍷",
    "Quand mes amis me manquent, je fais comme pour les échalotes : je les fais revenir au vin blanc 🧅",
    "Je crois que mon verre est cassé : il est encore vide ! 🥃",
    "Mieux que les réseaux sociaux : le rosé social 🥂",
    "Le vin n'est pas la solution, mais en buvant vous oubliez la question 😵",
    "Savez-vous pourquoi les vins de Belgique ont un goût de bouchon ? Parce qu'ils sont de Liège 🍾",
    "Ne buvez pas au volant, vous pourriez en renverser ! - Coluche 🤡",
    "L'alcool ne rime à rien. Ça tombe bien, je ne vais nulle part ! 🥾",
    "Je n'ai jamais abusé de l'alcool, il a toujours été consentant ! 🍹",
    "On m'a conseillé de surveiller ma consommation d'alcool. Depuis, je ne quitte plus mon verre des yeux 👀",
    "Le vin d'ici vaut mieux que l'eau de là 👼",
    "Il n'y a qu'une seule race : celle qu'on va se mettre ce soir ! 🥃🥂🍷",
    "Mieux vaut être saoul qu'idiot, ça dure moins longtemps. 🤯",
    "Je ne bois jamais à outrance. Je ne sais même pas où c'est ! - Pierre Desproges",
    "Parfois je prends des bains, parce que c'est compliqué de boire du vin sous la douche 🚿",
    "L'alcool ne résoud pas les problèmes. Ceci dit, l'eau et le lait non plus 🍼"
  ];

  let min = 0;
  let max = jokes.length;

  return <p>{jokes[Math.floor(Math.random() * (max - min) + min)]}</p>;
}

export default Jokes;
