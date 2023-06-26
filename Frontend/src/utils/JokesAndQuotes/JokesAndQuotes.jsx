import React from "react";

function JokesAndQuotes() {
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
    "Vous me demandez si je suis athée ? ... je suis plus intéressé par notre vin d'ici que par leur au-delà. - Francis Blanche",
    "Il n'y a qu'une seule race : celle qu'on va se mettre ce soir ! 🥃🥂🍷",
    "Mieux vaut être saoul qu'idiot, ça dure moins longtemps. 🤯",
    "Je ne bois jamais à outrance. Je ne sais même pas où c'est ! - Pierre Desproges",
    "Parfois je prends des bains, parce que c'est compliqué de boire du vin sous la douche 🚿",
    "L'alcool ne résoud pas les problèmes. Ceci dit, l'eau et le lait non plus 🍼",
    "Un petit verre de vin d'Alsace, c'est comme une robe légère, une fleur de printemps, c'est le rayon de soleil qui vient égayer la vie. - Christian Dior",
    "Il faut être toujours ivre. Pour ne pas sentir l'horrible fardeau du temps qui brise vos épaules, il faut s'enivrer sans trêve. De vin, de poésie ou de vertu, à votre guise. Mais enivrez-vous ! - Charles Baudelaire",
    "A la première coupe, l'homme boit le vin ; à la deuxième coupe, le vin boit le vin ; à la troisième coupe, le vin boit l'homme. - Proverbe japonais",
    "Il y a plus de philosophie dans une bouteille de vin que dans tous les livres. - Louis Pasteur",
    "Il existe cinq bonnes raisons de boire : L'arrivée d'un hôte, la soif présente et à venir, le bon goût du vin et n'importe quelle autre raison. - Proverbe latin",
    "Boire du vin et étreindre la beauté vaut mieux que l'hypocrisie du dévot. - Omar Khayyam",
    "Trop ou trop peu de vin interdit la vérité. - Blaise Pascal",
    "Bonne cuisine et bon vin, c'est le paradis sur terre. - Henri IV",
    "Le vin est un professeur de goût, il est le libérateur de l'esprit et l'illuminateur de l'intelligence. - Paul Claudel",
    "On a beau noyer sa raison dans le vin, on n'y noie pas le sujet de ses peines. - Proverbe chinois",
    "Une barrique de vin peut réaliser plus de miracles qu'une église pleine de saints. - Proverbe italien",
    "Le vin est le breuvage le plus sain et le plus hygiénique qui soit. - Louis Pasteur",
    "Bois du vin, puisque tu ignores d'où tu es venu ; vis joyeux, puisque tu ignores où tu iras. - Omar Khayyam",
    "Je suis entrée dans le monde du vin sans autre formation professionnelle qu'une gourmandise certaine des bonnes bouteilles. - Colette",
    "Le vin est défendu, car tout dépend de qui le boit, Et aussi de sa qualité et de la compagnie du buveur. - Omar Khayyam",
    "Les bains, le vin et Vénus usent nos corps, Mais les bains, le vin et Vénus font la vie. - Proverbe latin",
    "Celui qui désire une vie de bonheur avec une belle femme ressemble à celui qui veut jouir du goût du vin en ayant la bouche toujours pleine. - George Bernard Shaw",
    "La jeunesse est une ivresse sans vin et la vieillesse un vin sans ivresse. - Proverbe allemand",
    "Le vin est le lait des vieillards. - Platon",
    "Il n'est personne qui sache le secret du futur. Ce qu'il faut, c'est du vin, l'amour et le repos à discrétion. - Omar Khayyam",
    "A quoi reconnaît-on un bon restaurant ? Les verres à vin y sont plus grands que les verres à eau. - Frédéric Beigbeder",
    "Le vin est fort, le roi est plus fort, les femmes le sont plus encore. - Martin Luther",
    "Le vin est semblable à l'homme : on ne saura jamais jusqu'à quel point on peut l'estimer et le mépriser, l'aimer et le haïr, ni de combien d'actions sublimes ou de forfaits monstrueux il est capable. - Charles Baudelaire",
    "Une journée sans vin est une journée sans soleil. - Proverbe provençal",
    "Le vin allemand se distingue du vinaigre grâce à l'étiquette. - Mark Twain",
    "Le vin est de l'eau emplie de soleil. - Galilée",
    "Le vin est innocent, l'ivrogne seul est coupable. - Proverbe russe",
    "Le whisky ! Rien n'est plus rude à avaler... Dans les pays civilisés, on boit du vin ! - Charlie Chaplin",
    "La véritable cuisine sera toujours celle du terroir. En France le beurre, la crème et le vin en constitueront toujours les bases. - Paul Bocuse",
    "Jamais homme noble ne hait le bon vin. - François Rabelais",
    "Le champagne doit être au vin ce que la haute couture est à la mode. - Alfred Gratien",
    "A bon vin ne faut point d'enseigne. - Proverbe français",
    "Le grand-père plante la vigne, son fils fait le vin; son petit-fils saura pourquoi. - Anonyme",
    "Dieu n'avait fait que l'eau, mais l'homme a fait le vin. - Victor Hugo",
    "Le pain et le vin sont le commencement d'un grand festin. - Proverbe savoyard",
    "Les Français ont du vin, les Anglais de l'humour. - Roland Topor",
    "C'est la pénicilline qui guérit les hommes, mais c'est le bon vin qui les rend heureux. - Alexandre Fleming",
    "Le vin est la partie intellectuelle d'un repas. Les viandes et les légumes n'en sont que la partie matérielle. - Alexandre Dumas",
    "Si un jour les Japonais fabriquent du camembert et du vin rouge, il faudra fermer la France. - Coluche",
    "Qui sait déguster ne boit plus jamais de vin mais goûte des secrets. - Salvador Dali",
    "Pour savoir qu'un verre de vin est de trop, encore faut-il l'avoir bu ! - Olivier De Kersauson",
    "L'art et le vin servent au rapprochement des peuples. - Goethe",
  ];

  let min = 0;
  let max = jokes.length;

  return <p>{jokes[Math.floor(Math.random() * (max - min) + min)]}</p>;
}

export default JokesAndQuotes;
