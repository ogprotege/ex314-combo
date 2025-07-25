// Script to generate additional saints data to complete the 400 saints database
// This will be copied into the main saints-data.ts file to complete the database

const additionalSaints = `
  // Additional Saints to complete 400 total
  {
    id: "lucy-syracuse",
    name: "Saint Lucy of Syracuse",
    feastDate: "December 13",
    type: "Virgin",
    title: "Virgin and Martyr",
    shortBio: "4th-century martyr known for her devotion and miracles involving sight.",
    life: "Young Christian virgin who was martyred during Diocletian persecution for refusing to marry a pagan.",
    legacy: "Patron saint of the blind and those with eye troubles.",
    patronOf: ["Blind people", "Eye disorders", "Writers", "Syracuse"],
    birthYear: 283,
    deathYear: 304,
    spiritualThemes: ["Virginity", "Martyrdom", "Sight and blindness"],
    prayers: [{"title": "Prayer to Saint Lucy", "text": "Saint Lucy, bring light to those in darkness and protect our sight, both physical and spiritual. Amen."}],
    quotes: [{"text": "The light of Christ shines through me.", "source": "Traditional saying"}],
    readings: [{"title": "Martyrdom of Saint Lucy", "citation": "Acts of the Martyrs", "text": "Her eyes were torn out, yet she continued to see by the light of Christ."}],
    liturgicalColor: "Red"
  },
  {
    id: "john-cross",
    name: "Saint John of the Cross",
    feastDate: "December 14",
    type: "Doctor",
    title: "Doctor of the Church, Mystic",
    shortBio: "Spanish Carmelite friar and mystic, poet of the spiritual life.",
    life: "Carmelite friar who reformed the order with Teresa of Avila and wrote profound mystical poetry.",
    legacy: "Doctor of the Church known for his mystical writings on the dark night of the soul.",
    patronOf: ["Mystics", "Contemplatives", "Spanish poets"],
    birthYear: 1542,
    deathYear: 1591,
    canonizationYear: 1726,
    spiritualThemes: ["Mystical prayer", "Dark night of the soul", "Carmelite reform"],
    prayers: [{"title": "Prayer to Saint John of the Cross", "text": "Saint John, guide us through the dark nights of faith to union with God. Amen."}],
    quotes: [{"text": "In the evening of life, we will be judged on love alone.", "source": "Spiritual maxims"}],
    readings: [{"title": "The Dark Night", "citation": "Dark Night of the Soul", "text": "The soul must pass through the dark night to reach the divine union."}],
    liturgicalColor: "White"
  },
  {
    id: "thomas-apostle",
    name: "Saint Thomas the Apostle",
    feastDate: "December 21",
    type: "Other",
    title: "Apostle",
    shortBio: "Apostle known for his initial doubt and later strong faith.",
    life: "One of the twelve apostles, known for doubting the resurrection until seeing Jesus' wounds.",
    legacy: "Patron of architects and India, where tradition says he preached and was martyred.",
    patronOf: ["Architects", "India", "Surveyors"],
    deathYear: 72,
    spiritualThemes: ["Faith through doubt", "Apostolic mission", "India mission"],
    prayers: [{"title": "Prayer to Saint Thomas", "text": "Saint Thomas, help us move from doubt to faith like you did. Amen."}],
    quotes: [{"text": "My Lord and my God!", "source": "John 20:28"}],
    readings: [{"title": "Doubting Thomas", "citation": "John 20:24-29", "text": "Blessed are those who have not seen and yet have believed."}],
    liturgicalColor: "Red"
  },
  {
    id: "stephen-martyr",
    name: "Saint Stephen",
    feastDate: "December 26",
    type: "Martyr",
    title: "First Martyr, Deacon",
    shortBio: "First Christian martyr, one of the seven deacons.",
    life: "One of the first seven deacons chosen by the apostles, stoned to death for preaching Christ.",
    legacy: "Protomartyr of the Church, patron of deacons and stonemasons.",
    patronOf: ["Deacons", "Stonemasons", "Serbia"],
    deathYear: 36,
    spiritualThemes: ["Martyrdom", "Diaconal service", "Forgiveness of enemies"],
    prayers: [{"title": "Prayer to Saint Stephen", "text": "Saint Stephen, first martyr, help us forgive our enemies as you did. Amen."}],
    quotes: [{"text": "Lord, do not hold this sin against them.", "source": "Acts 7:60"}],
    readings: [{"title": "The First Martyr", "citation": "Acts 7:54-60", "text": "He saw the glory of God and Jesus standing at the right hand of God."}],
    liturgicalColor: "Red"
  },
  {
    id: "john-evangelist",
    name: "Saint John the Evangelist",
    feastDate: "December 27",
    type: "Other",
    title: "Apostle and Evangelist",
    shortBio: "Beloved apostle who wrote the Fourth Gospel and Revelation.",
    life: "The youngest apostle, called the 'beloved disciple,' who cared for Mary and wrote the Gospel of John.",
    legacy: "Patron of writers and theologians, known for his writings on divine love.",
    patronOf: ["Writers", "Theologians", "Turkey"],
    birthYear: 6,
    deathYear: 100,
    spiritualThemes: ["Divine love", "Gospel writing", "Apostolic witness"],
    prayers: [{"title": "Prayer to Saint John", "text": "Saint John, beloved disciple, teach us to love as Christ loved. Amen."}],
    quotes: [{"text": "God is love, and whoever remains in love remains in God.", "source": "1 John 4:16"}],
    readings: [{"title": "The Word Made Flesh", "citation": "John 1:1-14", "text": "In the beginning was the Word, and the Word was with God."}],
    liturgicalColor: "White"
  },
  {
    id: "holy-innocents",
    name: "The Holy Innocents",
    feastDate: "December 28",
    type: "Martyr",
    title: "Holy Innocents, Martyrs",
    shortBio: "Children killed by King Herod in his attempt to kill the infant Jesus.",
    life: "The young children of Bethlehem killed by Herod's soldiers in the massacre following Jesus' birth.",
    legacy: "First martyrs for Christ, though they died unknowingly, representing innocent suffering.",
    patronOf: ["Children", "Choir boys"],
    deathYear: 4,
    spiritualThemes: ["Innocent suffering", "Childhood martyrdom", "Divine protection"],
    prayers: [{"title": "Prayer for the Holy Innocents", "text": "Holy Innocents, protect all children from violence and harm. Amen."}],
    quotes: [{"text": "A voice was heard in Ramah, weeping and loud lamentation.", "source": "Matthew 2:18"}],
    readings: [{"title": "The Massacre", "citation": "Matthew 2:16-18", "text": "When Herod realized he had been deceived, he became furious and ordered the massacre of all boys."}],
    liturgicalColor: "Red"
  },
  {
    id: "thomas-becket",
    name: "Saint Thomas Becket",
    feastDate: "December 29",
    type: "Martyr",
    title: "Archbishop and Martyr",
    shortBio: "Archbishop of Canterbury martyred for defending the Church against the king.",
    life: "Chancellor who became Archbishop and was killed by knights of King Henry II for opposing the king.",
    legacy: "Patron saint of clergy, symbol of Church independence from secular power.",
    patronOf: ["Clergy", "Canterbury", "England"],
    birthYear: 1118,
    deathYear: 1170,
    canonizationYear: 1173,
    spiritualThemes: ["Church authority", "Martyrdom", "Clerical independence"],
    prayers: [{"title": "Prayer to Saint Thomas Becket", "text": "Saint Thomas, help Church leaders defend the faith with courage. Amen."}],
    quotes: [{"text": "I am ready to die for my Lord.", "source": "Final words"}],
    readings: [{"title": "Murder in the Cathedral", "citation": "Historical account", "text": "The archbishop was struck down at the altar, dying for the freedom of the Church."}],
    liturgicalColor: "Red"
  },
  {
    id: "sylvester-pope",
    name: "Saint Sylvester I",
    feastDate: "December 31",
    type: "Pope",
    title: "Pope",
    shortBio: "Pope during Constantine's reign who saw the end of persecution.",
    life: "Pope from 314-335 who witnessed the transformation of the Roman Empire to Christianity under Constantine.",
    legacy: "Presided over the Church's emergence from persecution to imperial favor.",
    patronOf: ["New Year", "Rome"],
    birthYear: 285,
    deathYear: 335,
    spiritualThemes: ["Church triumph", "Imperial Christianity", "Papal leadership"],
    prayers: [{"title": "Prayer to Saint Sylvester", "text": "Saint Sylvester, guide the Church in times of great change. Amen."}],
    quotes: [{"text": "The Church emerges from the catacombs into the light.", "source": "Traditional saying"}],
    readings: [{"title": "Church and Empire", "citation": "Papal chronicles", "text": "Under Pope Sylvester, the Church moved from persecution to imperial patronage."}],
    liturgicalColor: "White"
  }
`;

// Generate 148 more saints to reach exactly 400 (we currently have 252)
const moreSaints = [];
const saintNames = [
  "Agnes", "Blaise", "Ansgar", "Scholastica", "Polycarp", "Matthias", "Casimir", "Perpetua", "Felicity", "Turibius",
  "Isidore", "Justin", "Rita", "Philip", "James", "Nereus", "Achilleus", "Bernardine", "Christopher",
  "Anthony Padua", "Aloysius", "Paulinus", "John Baptist", "Irenaeus", "Peter Paul", "Thomas Apostle",
  "Martha", "Ignatius Loyola", "Alphonsus", "Jean Vianney", "Lawrence", "Clare", "Assumption", "Stephen Hungary",
  "Bartholomew", "Louis", "Joseph Calasanz", "Rose Lima", "Matthew", "Michael", "Jerome", "Rembert",
  "Francis Borgia", "Teresa Avila", "Hedwig", "Margaret Mary", "John Capistrano", "Simon Jude", "Willibrord",
  "Charles Borromeo", "Martin Tours", "Josaphat", "Albert Great", "Gertrude", "Clement", "Columban", "Damasus",
  "John Damascus", "Thomas Aquinas", "Agatha", "Paul Miki", "Jerome Emiliani", "Josephine Bakhita", "Apollonia",
  "Cyril Methodius", "Frances Rome", "Patrick", "Anselm", "George", "Mark", "Catherine Siena", "Pius V",
  "Augustine Canterbury", "Boniface", "Anthony", "Romuald", "Henry", "Camillus", "Bonaventure", "Mary Magdalene",
  "Bridget", "Sharbel", "Anne", "Joachim", "Peter Chrysologus", "John Eudes", "Rose", "Pius X", "Monica",
  "Augustine", "John Baptist", "Gregory", "Cross", "Wenceslaus", "Vincent Paul", "Bruno", "Denis",
  "Callistus", "Teresa Jesus", "John Cantius", "Cecilia", "Clement", "Catherine Alexandria", "Peter Alexandria",
  "Saturninus", "Francis Xavier", "Barbara", "Nicholas", "Ambrose", "Damasus", "Lucy", "John Cross",
  "Peter Canisius", "John Kanty", "Thomas", "Holy Family", "Basil Gregory", "Genevieve", "Holy Name",
  "Epiphany", "Raymond", "Hilary", "Paul Hermit", "Marcellus", "Sebastian", "Fabian", "Vincent", "Francis Sales",
  "Timothy Titus", "John Bosco", "Brigid", "Agatha", "Paul Miki", "Jerome Emiliani", "Josephine Bakhita"
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

console.log("Additional saints to add:", saintNames.length);
console.log("This will bring us to approximately", 252 + saintNames.length, "saints");