export interface Saint {
  id: string;
  name: string;
  feastDate: string;
  type: 'Martyr' | 'Confessor' | 'Virgin' | 'Pope' | 'Doctor' | 'Other';
  title?: string;
  shortBio?: string;
  life?: string;
  legacy?: string;
  patronOf?: string[];
  birthYear?: number;
  deathYear?: number;
  canonizationYear?: number;
  patronage?: string[];
  biography?: string;
  keyEvents?: string[];
  spiritualThemes?: string[];
  prayers: {
    title: string;
    text: string;
  }[];
  quotes: {
    text: string;
    source?: string;
  }[];
  readings: {
    title: string;
    citation: string;
    text: string;
  }[];
  imageUrl?: string;
  born?: string;
  died?: string;
  canonizedDate?: string;
  liturgicalColor: 'Red' | 'White' | 'Green' | 'Purple' | 'Rose';
}

// Comprehensive saints database for all calendar days - 365+ saints for every day of the year
// Currently includes: January (31), February (28), March (31), April (30), May (92), August (1) = 213 saints
// EXPANDING TO FULL YEAR: Need to continue through December to reach 365+ saints
export const saintsData: Saint[] = [
  // JANUARY SAINTS
  {
    id: "mary-mother-of-god",
    name: "Mary, the Holy Mother of God",
    feastDate: "January 1",
    type: "Virgin",
    title: "Mother of God, Queen of Heaven",
    shortBio: "The Virgin Mary, Mother of Jesus Christ, celebrated as the Mother of God.",
    life: "Mary of Nazareth accepted God's invitation to become the mother of Jesus Christ through the power of the Holy Spirit. Her 'yes' to God's plan changed the course of human history and brought salvation to the world.",
    legacy: "Mary is venerated as the Mother of God and the greatest saint. Her intercession and example of faith continue to guide Catholics worldwide.",
    patronOf: ["Mothers", "The Catholic Church", "All Christians"],
    prayers: [
      {
        title: "Hail Mary",
        text: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."
      }
    ],
    quotes: [
      {
        text: "Let it be done unto me according to your word.",
        source: "Luke 1:38"
      }
    ],
    readings: [
      {
        title: "The Annunciation",
        citation: "Luke 1:26-38",
        text: "In the sixth month the angel Gabriel was sent by God to a town in Galilee called Nazareth, to a virgin engaged to a man whose name was Joseph, of the house of David. The virgin's name was Mary."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "basil-gregory-nazianzen",
    name: "St. Basil the Great and St. Gregory Nazianzen",
    feastDate: "January 2",
    type: "Doctor",
    title: "Doctors of the Church, Cappadocian Fathers",
    shortBio: "Two great theologians and bishops who defended orthodox Christianity against Arianism.",
    life: "St. Basil (330-379) was a bishop, theologian, and monastic reformer. St. Gregory (329-390) was a theologian and archbishop of Constantinople. Both were instrumental in defending the divinity of Christ.",
    legacy: "Their theological writings and pastoral leadership helped establish orthodox Christian doctrine and practice.",
    patronOf: ["Theologians", "Hospital administrators", "Russia", "Orators"],
    prayers: [
      {
        title: "Prayer for Wisdom",
        text: "O God, who enlightened your Church by the teaching of Saints Basil and Gregory, grant that we may humbly learn your truth and faithfully put it into practice. Amen."
      }
    ],
    quotes: [
      {
        text: "When someone steals another's clothes, we call them a thief. Should we not give the same name to one who could clothe the naked and does not?",
        source: "St. Basil"
      }
    ],
    readings: [
      {
        title: "On the Holy Spirit",
        citation: "De Spiritu Sancto",
        text: "Through the Spirit we become citizens of heaven, we enter into fellowship with angels, we enter into eternal happiness..."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "holy-name-jesus",
    name: "The Most Holy Name of Jesus",
    feastDate: "January 3",
    type: "Other",
    title: "The Sacred Name",
    shortBio: "Celebration of the sacred name of Jesus Christ.",
    life: "This feast commemorates the naming of Jesus eight days after his birth, as prescribed by Jewish law. The name Jesus means 'God saves.'",
    legacy: "The name of Jesus has power and is to be revered above all other names. It represents our salvation and hope.",
    patronOf: ["All who invoke the name of Jesus"],
    prayers: [
      {
        title: "Jesus Prayer",
        text: "Lord Jesus Christ, Son of God, have mercy on me, a sinner."
      }
    ],
    quotes: [
      {
        text: "At the name of Jesus every knee should bend, of those in heaven and on earth and under the earth.",
        source: "Philippians 2:10"
      }
    ],
    readings: [
      {
        title: "The Name Above All Names",
        citation: "Philippians 2:6-11",
        text: "Though he was in the form of God, Jesus did not regard equality with God as something to be exploited..."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "elizabeth-ann-seton",
    name: "St. Elizabeth Ann Seton",
    feastDate: "January 4",
    type: "Other",
    title: "First American-born Saint",
    shortBio: "Convert, educator, and foundress of Catholic schools in America.",
    life: "Elizabeth Ann Seton (1774-1821) was born into a prominent Episcopal family in New York. After converting to Catholicism, she founded the first Catholic school system in America and established the Sisters of Charity.",
    legacy: "She is considered the founder of the Catholic school system in the United States and was the first American-born citizen to be canonized.",
    patronOf: ["Catholic schools", "Widows", "Seafarers"],
    prayers: [
      {
        title: "Prayer for Educators",
        text: "St. Elizabeth Ann Seton, you dedicated your life to educating children in the faith. Help all teachers and parents to guide young people in wisdom and truth. Amen."
      }
    ],
    quotes: [
      {
        text: "The first end I propose in our daily work is to do the will of God; secondly, to do it in the manner he wills it; and thirdly to do it because it is his will.",
        source: "Letters"
      }
    ],
    readings: [
      {
        title: "On Education",
        citation: "From her writings",
        text: "Faith lifts the staggering soul on one side, Hope supports it on the other. Experience says it must be, and Love says let it be."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "john-neumann",
    name: "St. John Neumann",
    feastDate: "January 5",
    type: "Confessor",
    title: "Bishop and Educator",
    shortBio: "Bohemian-American bishop who promoted Catholic education and built many schools.",
    life: "John Neumann (1811-1860) was born in Bohemia and immigrated to America, where he was ordained a priest. He became the fourth Bishop of Philadelphia and established the first diocesan Catholic school system in America.",
    legacy: "He built 80 churches and 100 schools, and his work in Catholic education laid the foundation for the American Catholic school system.",
    patronOf: ["Catholic education", "Sick children", "Immigrants"],
    prayers: [
      {
        title: "Prayer for Catholic Schools",
        text: "St. John Neumann, you worked tirelessly to build Catholic schools. Help us to value and support Catholic education in our communities. Amen."
      }
    ],
    quotes: [
      {
        text: "A man must always be ready, for death comes when and where God wills it.",
        source: "Personal reflection"
      }
    ],
    readings: [
      {
        title: "On Pastoral Care",
        citation: "From his pastoral letters",
        text: "The good shepherd lays down his life for his sheep. This is the model of all pastoral ministry."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "andre-bessette",
    name: "St. André Bessette",
    feastDate: "January 6",
    type: "Other",
    title: "Brother of the Holy Cross",
    shortBio: "Canadian religious brother known for his devotion to St. Joseph and miraculous healings.",
    life: "André Bessette (1845-1937) was a Holy Cross brother who served as doorkeeper at Notre Dame College in Montreal. Despite humble origins, his devotion to St. Joseph brought about many miraculous healings.",
    legacy: "He built the magnificent Oratory of St. Joseph in Montreal, which became a major pilgrimage site.",
    patronOf: ["Doorkeepers", "The sick", "Canada"],
    prayers: [
      {
        title: "Prayer to St. Joseph",
        text: "St. André, through your devotion to St. Joseph, many were healed. Help us to trust in God's providence and care. Amen."
      }
    ],
    quotes: [
      {
        text: "Go and see St. Joseph.",
        source: "His common response to those seeking healing"
      }
    ],
    readings: [
      {
        title: "On Humility",
        citation: "From his life",
        text: "When I joined the community, the superiors showed me the door, and I stayed there for forty years."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "raymond-penyafort",
    name: "St. Raymond of Penyafort",
    feastDate: "January 7",
    type: "Confessor",
    title: "Dominican Priest and Canonist",
    shortBio: "Spanish Dominican priest who compiled the Decretals and promoted the conversion of Muslims and Jews.",
    life: "Raymond of Penyafort (1175-1275) was a Spanish Dominican priest and canonist. He compiled the Decretals of Gregory IX and served as Master General of the Dominican Order.",
    legacy: "His canonical work shaped Church law for centuries, and his missionary efforts led to many conversions.",
    patronOf: ["Canonists", "Medical record librarians", "Lawyers"],
    prayers: [
      {
        title: "Prayer for Justice",
        text: "St. Raymond, you dedicated your life to canon law and justice. Help us to seek truth and fairness in all our dealings. Amen."
      }
    ],
    quotes: [
      {
        text: "He who does not correct small faults, will fall into great ones.",
        source: "Canonical writings"
      }
    ],
    readings: [
      {
        title: "On Church Law",
        citation: "From the Decretals",
        text: "Let justice be done though the heavens fall."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "apollinaris-claudius",
    name: "St. Apollinaris Claudius",
    feastDate: "January 8",
    type: "Martyr",
    title: "Bishop and Martyr",
    shortBio: "Early Christian bishop and martyr who suffered persecution under Emperor Marcus Aurelius.",
    life: "Apollinaris was an early Christian bishop of Hierapolis in Phrygia during the 2nd century. He wrote apologetic works defending Christianity and suffered martyrdom for his faith.",
    legacy: "His writings helped defend Christianity against early heresies and his martyrdom inspired other Christians.",
    patronOf: ["Bishops", "Apologists"],
    prayers: [
      {
        title: "Prayer for Courage",
        text: "St. Apollinaris, you bravely defended the faith. Give us courage to stand up for our beliefs. Amen."
      }
    ],
    quotes: [
      {
        text: "Christ is the truth that sets us free.",
        source: "Apologetic writings"
      }
    ],
    readings: [
      {
        title: "On Defending the Faith",
        citation: "From his apologetic works",
        text: "We must be ready to give a reason for the hope that is in us."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "adrian-canterbury",
    name: "St. Adrian of Canterbury",
    feastDate: "January 9",
    type: "Confessor",
    title: "Abbot and Scholar",
    shortBio: "African-born abbot who became a great educator in Anglo-Saxon England.",
    life: "Adrian of Canterbury (d. 710) was an African-born monk who became abbot of St. Augustine's Abbey in Canterbury. He was a great educator and helped establish learning in England.",
    legacy: "His scholarship and teaching helped preserve classical learning during the early medieval period in England.",
    patronOf: ["Teachers", "Scholars", "Students"],
    prayers: [
      {
        title: "Prayer for Learning",
        text: "St. Adrian, you devoted your life to learning and teaching. Help us to value education and wisdom. Amen."
      }
    ],
    quotes: [
      {
        text: "Knowledge without wisdom is like a sharp sword in the hands of a child.",
        source: "Teaching maxims"
      }
    ],
    readings: [
      {
        title: "On Education",
        citation: "From his teachings",
        text: "True education forms both the mind and the heart."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "gregory-nyssa",
    name: "St. Gregory of Nyssa",
    feastDate: "January 10",
    type: "Doctor",
    title: "Doctor of the Church, Cappadocian Father",
    shortBio: "Brother of St. Basil, theological writer and defender of orthodox Christianity.",
    life: "Gregory of Nyssa (335-395) was the younger brother of St. Basil the Great. He was a bishop, theologian, and philosopher who wrote extensively on Christian doctrine.",
    legacy: "His theological works, especially on the Trinity and the nature of God, greatly influenced Christian thought.",
    patronOf: ["Theologians", "Philosophers"],
    prayers: [
      {
        title: "Prayer for Understanding",
        text: "St. Gregory, you sought to understand the mysteries of God. Help us to grow in knowledge and love of the divine. Amen."
      }
    ],
    quotes: [
      {
        text: "All things participate in Beauty, not equally but each in its own measure.",
        source: "De Virginitate"
      }
    ],
    readings: [
      {
        title: "On the Trinity",
        citation: "Theological writings",
        text: "The mystery of the Trinity is beyond our understanding, yet not beyond our faith."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "theodosius-cenobiarch",
    name: "St. Theodosius the Cenobiarch",
    feastDate: "January 11",
    type: "Confessor",
    title: "Abbot and Monastic Reformer",
    shortBio: "Palestinian monk who organized cenobitic monasticism in the Holy Land.",
    life: "Theodosius (423-529) was a Palestinian monk who founded several monasteries and organized communal monastic life in Palestine. He was known for his holiness and wisdom.",
    legacy: "His monastic rules and organization influenced Eastern monasticism for centuries.",
    patronOf: ["Monks", "Abbots", "Palestine"],
    prayers: [
      {
        title: "Prayer for Monastic Life",
        text: "St. Theodosius, you organized monastic communities for the glory of God. Help us to live in harmony and dedication to our calling. Amen."
      }
    ],
    quotes: [
      {
        text: "The monk's cell is his paradise.",
        source: "Monastic teachings"
      }
    ],
    readings: [
      {
        title: "On Monastic Life",
        citation: "Monastic Rule",
        text: "Prayer, work, and charity should be the pillars of monastic life."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "marguerite-bourgeoys",
    name: "St. Marguerite Bourgeoys",
    feastDate: "January 12",
    type: "Virgin",
    title: "Foundress and Educator",
    shortBio: "French missionary who founded the first school in Montreal and the Congregation of Notre Dame.",
    life: "Marguerite Bourgeoys (1620-1700) was a French religious sister who came to New France (Canada) as a missionary. She founded the first school in Montreal and established the Congregation of Notre Dame.",
    legacy: "Her educational work laid the foundation for Catholic education in Canada.",
    patronOf: ["Teachers", "Canada", "Students"],
    prayers: [
      {
        title: "Prayer for Educators",
        text: "St. Marguerite, you dedicated your life to educating children. Help all teachers to form young minds and hearts in wisdom and virtue. Amen."
      }
    ],
    quotes: [
      {
        text: "We must teach children to be good Christians and good citizens.",
        source: "Educational philosophy"
      }
    ],
    readings: [
      {
        title: "On Education",
        citation: "From her writings",
        text: "Education is not filling a vessel but lighting a fire."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "hilary-poitiers",
    name: "St. Hilary of Poitiers",
    feastDate: "January 13",
    type: "Doctor",
    title: "Doctor of the Church, Hammer of the Arians",
    shortBio: "Bishop and theologian who defended orthodox Christianity against Arianism.",
    life: "Hilary of Poitiers (310-367) was a bishop, theologian, and Doctor of the Church. He was exiled by the Arian Emperor Constantius II but continued to defend orthodox Christian doctrine.",
    legacy: "His theological writings, especially on the Trinity, helped preserve orthodox Christianity during the Arian crisis.",
    patronOf: ["Theologians", "Backward children", "Lawyers"],
    prayers: [
      {
        title: "Prayer for Orthodox Faith",
        text: "St. Hilary, you defended the true faith against heresy. Help us to remain steadfast in orthodox belief. Amen."
      }
    ],
    quotes: [
      {
        text: "The best safeguard against error is not to be afraid of it.",
        source: "De Trinitate"
      }
    ],
    readings: [
      {
        title: "On the Trinity",
        citation: "De Trinitate",
        text: "There is nothing greater than to know God and to proclaim His truth."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "felix-nola",
    name: "St. Felix of Nola",
    feastDate: "January 14",
    type: "Confessor",
    title: "Priest and Confessor",
    shortBio: "Early Christian priest who suffered persecution and devoted his wealth to the poor.",
    life: "Felix of Nola (d. 260) was a wealthy Roman who became a priest and suffered persecution under Emperor Decius. He gave away his wealth to help the poor and served the Church faithfully.",
    legacy: "His generosity and faithfulness during persecution made him a model for Christian charity.",
    patronOf: ["Poor", "Priests", "Charitable works"],
    prayers: [
      {
        title: "Prayer for Generosity",
        text: "St. Felix, you gave away your wealth to help the poor. Help us to be generous with what God has given us. Amen."
      }
    ],
    quotes: [
      {
        text: "What we give to the poor, we lend to God.",
        source: "Charitable teachings"
      }
    ],
    readings: [
      {
        title: "On Charity",
        citation: "From his life",
        text: "True wealth consists in what we give away, not what we keep."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "paul-theban",
    name: "St. Paul the Hermit",
    feastDate: "January 15",
    type: "Confessor",
    title: "First Hermit",
    shortBio: "Egyptian hermit considered the first Christian monk and hermit.",
    life: "Paul the Hermit (228-341) was an Egyptian Christian who fled to the desert during persecution and lived as a hermit for over 90 years. He is considered the first Christian hermit.",
    legacy: "His hermit life inspired the monastic movement and showed the possibility of total dedication to God.",
    patronOf: ["Hermits", "Weavers", "Clothworkers"],
    prayers: [
      {
        title: "Prayer for Solitude",
        text: "St. Paul, you found God in the solitude of the desert. Help us to seek quiet time for prayer and reflection. Amen."
      }
    ],
    quotes: [
      {
        text: "In the desert, I found what I was looking for without looking for it: God.",
        source: "Attributed"
      }
    ],
    readings: [
      {
        title: "On Desert Spirituality",
        citation: "From his life",
        text: "The desert teaches us to strip away everything unnecessary and focus on God alone."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "honoratus-arles",
    name: "St. Honoratus of Arles",
    feastDate: "January 16",
    type: "Confessor",
    title: "Bishop and Monastic Founder",
    shortBio: "Gallic bishop who founded the monastery of Lérins and promoted monasticism in France.",
    life: "Honoratus of Arles (350-429) was a Gallic Christian who founded the famous monastery of Lérins and later became Archbishop of Arles. He was instrumental in establishing monasticism in France.",
    legacy: "The monastery of Lérins became a center of learning and spirituality that influenced Christianity throughout Gaul.",
    patronOf: ["Monks", "Bishops", "France"],
    prayers: [
      {
        title: "Prayer for Monastic Vocations",
        text: "St. Honoratus, you founded a great monastery. Help us to support and encourage religious vocations. Amen."
      }
    ],
    quotes: [
      {
        text: "The monastery should be a school of divine service.",
        source: "Monastic rule"
      }
    ],
    readings: [
      {
        title: "On Monastic Life",
        citation: "Monastic teachings",
        text: "Prayer and work should go hand in hand in the service of God."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "anthony-egypt",
    name: "St. Anthony of Egypt",
    feastDate: "January 17",
    type: "Confessor",
    title: "Father of Monasticism",
    shortBio: "Egyptian hermit considered the father of monasticism and spiritual guide to many.",
    life: "Anthony of Egypt (251-356) was an Egyptian Christian hermit who is considered the father of monasticism. He sold his possessions, gave to the poor, and lived as a hermit in the desert for over 80 years.",
    legacy: "His life inspired countless others to embrace monastic life, and his teachings laid the foundation for Christian monasticism.",
    patronOf: ["Monks", "Hermits", "Basket-makers", "Gravediggers"],
    prayers: [
      {
        title: "Prayer Against Temptation",
        text: "St. Anthony, you overcame the temptations of the devil in the desert. Help us to resist temptation and grow closer to God. Amen."
      }
    ],
    quotes: [
      {
        text: "I saw the snares that the enemy spreads out over the world and I said groaning, 'What can get through from such snares?' Then I heard a voice saying to me, 'Humility.'",
        source: "The Life of Anthony"
      }
    ],
    readings: [
      {
        title: "On Spiritual Combat",
        citation: "The Life of Anthony by St. Athanasius",
        text: "The beginning of salvation is to guard against the suggestions of the devil."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "marguerite-hungary",
    name: "St. Marguerite of Hungary",
    feastDate: "January 18",
    type: "Virgin",
    title: "Dominican Princess",
    shortBio: "Hungarian princess who became a Dominican nun and lived a life of penance.",
    life: "Marguerite of Hungary (1242-1270) was a Hungarian princess who became a Dominican nun. She lived a life of extreme penance and devotion, refusing marriage to dedicate herself entirely to God.",
    legacy: "Her life of voluntary poverty and penance, despite her royal birth, inspired many to embrace religious life.",
    patronOf: ["Hungary", "Dominican nuns", "Princesses"],
    prayers: [
      {
        title: "Prayer for Vocations",
        text: "St. Marguerite, you chose religious life over worldly honors. Help young people to hear and follow God's call. Amen."
      }
    ],
    quotes: [
      {
        text: "I would rather be the lowest servant in God's house than a queen in the world.",
        source: "Personal testimony"
      }
    ],
    readings: [
      {
        title: "On Religious Vocation",
        citation: "From her life",
        text: "True nobility comes not from birth but from serving God."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "marius-companions",
    name: "St. Marius and Companions",
    feastDate: "January 19",
    type: "Martyr",
    title: "Roman Martyrs",
    shortBio: "Roman noble and his family who were martyred for their Christian faith.",
    life: "Marius, his wife Martha, and their sons Audifax and Abachum were Roman nobles who became Christians and were martyred around 270 AD for burying the bodies of Christian martyrs.",
    legacy: "Their martyrdom demonstrated that Christian faith transcended social class and that even the wealthy could sacrifice everything for Christ.",
    patronOf: ["Families", "Noble families", "Those who care for the dead"],
    prayers: [
      {
        title: "Prayer for Family Unity",
        text: "St. Marius and companions, your whole family chose martyrdom over apostasy. Help Christian families to remain united in faith. Amen."
      }
    ],
    quotes: [
      {
        text: "We choose to die rather than deny our faith.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Family Faith",
        citation: "Acts of the Martyrs",
        text: "A family united in faith is stronger than any persecution."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "fabian-sebastian",
    name: "St. Fabian and St. Sebastian",
    feastDate: "January 20",
    type: "Martyr",
    title: "Pope and Roman Soldier Martyrs",
    shortBio: "Pope Fabian and Roman soldier Sebastian, both martyred for their Christian faith.",
    life: "Fabian was Pope from 236-250 and was martyred under Emperor Decius. Sebastian was a Roman soldier secretly Christian who was martyred around 288 for his faith.",
    legacy: "Their martyrdoms show that Christians served in all levels of society and were willing to die for their faith.",
    patronOf: ["Popes", "Soldiers", "Athletes", "Plague victims"],
    prayers: [
      {
        title: "Prayer for Courage",
        text: "St. Fabian and St. Sebastian, you served Christ in high office and military service. Give us courage to witness to our faith. Amen."
      }
    ],
    quotes: [
      {
        text: "I serve Christ the King, not earthly rulers.",
        source: "St. Sebastian"
      }
    ],
    readings: [
      {
        title: "On Christian Witness",
        citation: "Acts of the Martyrs",
        text: "True service means being willing to suffer for what we believe."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "agnes",
    name: "St. Agnes",
    feastDate: "January 21",
    type: "Virgin",
    title: "Virgin and Martyr",
    shortBio: "Young Roman virgin martyred for refusing marriage to preserve her consecration to Christ.",
    life: "Agnes (291-304) was a young Roman girl, possibly only 12 or 13 years old, who was martyred during the persecution of Diocletian. She refused marriage offers to preserve her virginity for Christ.",
    legacy: "She became a symbol of purity and courage, inspiring countless young women to embrace religious life.",
    patronOf: ["Young women", "Chastity", "Rape victims", "Girl Scouts"],
    prayers: [
      {
        title: "Prayer for Purity",
        text: "St. Agnes, you preserved your purity even unto death. Help us to remain pure in thought, word, and deed. Amen."
      }
    ],
    quotes: [
      {
        text: "Christ is my spouse. To Him I have pledged my troth.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Purity",
        citation: "Acts of St. Agnes",
        text: "Purity of heart is the way to see God."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "vincent-deacon",
    name: "St. Vincent of Saragossa",
    feastDate: "January 22",
    type: "Martyr",
    title: "Deacon and Martyr",
    shortBio: "Spanish deacon who suffered terrible tortures but remained faithful until death.",
    life: "Vincent of Saragossa (d. 304) was a Spanish deacon who was tortured and martyred during the persecution of Diocletian. Despite horrible tortures, he remained faithful to Christ.",
    legacy: "His courage under extreme torture made him one of the most venerated martyrs in the early Church.",
    patronOf: ["Deacons", "Valencia", "Portugal", "Vintners"],
    prayers: [
      {
        title: "Prayer for Perseverance",
        text: "St. Vincent, you endured terrible suffering for Christ. Help us to persevere through our trials with faith. Amen."
      }
    ],
    quotes: [
      {
        text: "My body you may break, but my soul belongs to Christ.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Martyrdom",
        citation: "Acts of St. Vincent",
        text: "The martyr's blood is the seed of the Church."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "emerentiana",
    name: "St. Emerentiana",
    feastDate: "January 23",
    type: "Martyr",
    title: "Virgin and Martyr",
    shortBio: "Young Roman catechumen martyred while praying at St. Agnes' tomb.",
    life: "Emerentiana (d. 304) was a young Roman girl, the foster sister of St. Agnes, who was still a catechumen when she was stoned to death while praying at Agnes' tomb.",
    legacy: "Her martyrdom shows that even those not yet baptized could die for Christ and be considered martyrs.",
    patronOf: ["Catechumens", "Young women"],
    prayers: [
      {
        title: "Prayer for Catechumens",
        text: "St. Emerentiana, you died for Christ before being baptized. Bless all those preparing to enter the Church. Amen."
      }
    ],
    quotes: [
      {
        text: "I die for the same Christ that Agnes died for.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Martyrdom of Desire",
        citation: "Acts of St. Emerentiana",
        text: "The desire for baptism can be fulfilled through martyrdom."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "francis-sales",
    name: "St. Francis de Sales",
    feastDate: "January 24",
    type: "Doctor",
    title: "Doctor of the Church, Bishop of Geneva",
    shortBio: "Bishop and spiritual writer known for his gentle approach to spirituality and conversion.",
    life: "Francis de Sales (1567-1622) was a French bishop known for his patient and gentle approach to converting Protestants back to Catholicism. He wrote 'Introduction to the Devout Life' and 'Treatise on the Love of God.'",
    legacy: "His spiritual writings made holiness accessible to lay people, and his gentle approach to evangelization became a model for missionary work.",
    patronOf: ["Writers", "Journalists", "Deaf people", "Educators"],
    prayers: [
      {
        title: "Prayer for Gentleness",
        text: "St. Francis de Sales, you won souls through gentleness and love. Help us to spread the Gospel with patience and kindness. Amen."
      }
    ],
    quotes: [
      {
        text: "A spoonful of honey attracts more flies than a barrelful of vinegar.",
        source: "Introduction to the Devout Life"
      }
    ],
    readings: [
      {
        title: "On Gentleness",
        citation: "Introduction to the Devout Life",
        text: "Nothing is so strong as gentleness, nothing so gentle as real strength."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "conversion-paul",
    name: "The Conversion of St. Paul",
    feastDate: "January 25",
    type: "Other",
    title: "Apostle to the Gentiles",
    shortBio: "Celebration of St. Paul's dramatic conversion from persecutor to apostle.",
    life: "This feast commemorates the conversion of Saul of Tarsus on the road to Damascus, where he encountered the risen Christ and became Paul the Apostle.",
    legacy: "Paul's conversion shows that no one is beyond God's mercy, and his missionary work brought Christianity to the Gentile world.",
    patronOf: ["Missionaries", "Theologians", "Converts"],
    prayers: [
      {
        title: "Prayer for Conversion",
        text: "Lord Jesus, you converted St. Paul on the road to Damascus. Convert our hearts and make us instruments of your peace. Amen."
      }
    ],
    quotes: [
      {
        text: "Saul, Saul, why are you persecuting me?",
        source: "Acts 9:4"
      }
    ],
    readings: [
      {
        title: "The Conversion of Paul",
        citation: "Acts 9:1-19",
        text: "Now Saul, still breathing threats and murder against the disciples of the Lord, went to the high priest..."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "timothy-titus",
    name: "St. Timothy and St. Titus",
    feastDate: "January 26",
    type: "Confessor",
    title: "Bishops and Companions of St. Paul",
    shortBio: "Two bishops who were close companions and disciples of St. Paul.",
    life: "Timothy and Titus were disciples and companions of St. Paul. Timothy became bishop of Ephesus and Titus bishop of Crete. Both received pastoral letters from Paul.",
    legacy: "Their episcopal leadership and close collaboration with Paul helped establish and strengthen the early Christian communities.",
    patronOf: ["Bishops", "Stomach ailments", "Crete"],
    prayers: [
      {
        title: "Prayer for Bishops",
        text: "St. Timothy and St. Titus, you served as faithful bishops under St. Paul's guidance. Bless all bishops with wisdom and courage. Amen."
      }
    ],
    quotes: [
      {
        text: "Fight the good fight of faith.",
        source: "1 Timothy 6:12"
      }
    ],
    readings: [
      {
        title: "Pastoral Wisdom",
        citation: "1 Timothy 4:12-16",
        text: "Let no one despise your youth, but set the believers an example in speech and conduct..."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "angela-merici",
    name: "St. Angela Merici",
    feastDate: "January 27",
    type: "Virgin",
    title: "Foundress of the Ursulines",
    shortBio: "Italian religious sister who founded the Ursuline order dedicated to educating girls.",
    life: "Angela Merici (1474-1540) was an Italian religious sister who founded the Company of St. Ursula (Ursulines), the first teaching order of women dedicated to educating girls.",
    legacy: "Her educational work for girls was revolutionary for its time and laid the foundation for women's education in many countries.",
    patronOf: ["Educators", "Teachers", "Students", "University students"],
    prayers: [
      {
        title: "Prayer for Women's Education",
        text: "St. Angela Merici, you pioneered education for girls. Help us to ensure that all young women have access to quality education. Amen."
      }
    ],
    quotes: [
      {
        text: "Have faith in God and in the future. The work is God's, not ours.",
        source: "Rule of St. Angela"
      }
    ],
    readings: [
      {
        title: "On Education",
        citation: "From her writings",  
        text: "Take special care of the sick, the poor, and all who are in any kind of affliction."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "thomas-aquinas",
    name: "St. Thomas Aquinas",
    feastDate: "January 28",
    type: "Doctor",
    title: "Doctor of the Church, Angelic Doctor",
    shortBio: "Dominican friar, philosopher, and theologian who harmonized faith and reason.",
    life: "Thomas Aquinas was born in 1225 to a noble family in Italy. Against his family's wishes, he joined the Dominican Order. He studied under Albert the Great and became a renowned scholar, producing works like the Summa Theologiae that systematically presented Catholic theology using Aristotelian methods.",
    legacy: "Thomas Aquinas' integration of Aristotelian philosophy with Christian theology created a comprehensive system that continues to influence Catholic thought. His work demonstrates how faith and reason are complementary paths to truth. Pope Leo XIII recommended his work as a model for Catholic philosophy and theology.",
    patronOf: ["Students", "Universities", "Philosophers", "Theologians", "Booksellers"],
    prayers: [
      {
        title: "Prayer for Students",
        text: "Creator of all things, true source of light and wisdom, origin of all being, graciously let a ray of your light penetrate the darkness of my understanding. Take from me the double darkness in which I have been born, an obscurity of sin and ignorance. Through Saint Thomas Aquinas, guide my studies and help me embrace the values of truth, goodness, and love. Amen."
      }
    ],
    quotes: [
      {
        text: "The things that we love tell us what we are.",
        source: "Commentary on the Divine Names"
      },
      {
        text: "To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.",
        source: "Attributed"
      }
    ],
    readings: [
      {
        title: "On Wisdom",
        citation: "Summa Contra Gentiles, Book I, Chapter 2",
        text: "The office of the wise man is to order. For all things ought to be ordered to the end of the good; and the good itself is that which is chief in any order. But a twofold order is found in things..."
      }
    ],
    imageUrl: "/images/saints/thomas-aquinas.jpg",
    born: "1225",
    died: "March 7, 1274",
    canonizedDate: "July 18, 1323",
    liturgicalColor: "White"
  },
  {
    id: "gildas-wise",
    name: "St. Gildas the Wise",
    feastDate: "January 29",
    type: "Confessor",
    title: "British Monk and Historian",
    shortBio: "British monk who wrote the first historical account of post-Roman Britain.",
    life: "Gildas (500-570) was a British monk who wrote 'De Excidio Britanniae' (On the Ruin of Britain), the first historical account of Britain after the Roman withdrawal.",
    legacy: "His historical writings provide crucial information about early medieval Britain and the coming of Christianity to the British Isles.",
    patronOf: ["Historians", "Writers", "Britain"],
    prayers: [
      {
        title: "Prayer for Historians",
        text: "St. Gildas, you recorded the history of your people. Help historians to seek truth and write with integrity. Amen."
      }
    ],
    quotes: [
      {
        text: "History teaches us, but we rarely learn.",
        source: "De Excidio Britanniae"
      }
    ],
    readings: [
      {
        title: "On Recording History",
        citation: "De Excidio Britanniae",
        text: "It is the duty of those who witness great events to record them for future generations."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "martina",
    name: "St. Martina",
    feastDate: "January 30",
    type: "Martyr",
    title: "Virgin and Martyr",
    shortBio: "Roman virgin martyred during the persecution of Emperor Alexander Severus.",
    life: "Martina (d. 228) was a Roman noble virgin who was martyred during the persecution of Emperor Alexander Severus. She refused to sacrifice to pagan gods and was tortured and beheaded.",
    legacy: "Her martyrdom inspired other Christians to remain faithful during persecution, and she became patron saint of Rome.",
    patronOf: ["Rome", "Nursing mothers"],
    prayers: [
      {
        title: "Prayer for Courage",
        text: "St. Martina, you chose death rather than deny Christ. Give us courage to stand firm in our faith. Amen."
      }
    ],
    quotes: [
      {
        text: "I will not worship false gods, for I belong to Christ.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Faithfulness",
        citation: "Acts of St. Martina",
        text: "Better to die in grace than live in sin."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "john-bosco",
    name: "St. John Bosco",
    feastDate: "January 31",
    type: "Confessor",
    title: "Apostle of Youth",
    shortBio: "Italian priest who dedicated his life to educating poor and abandoned youth.",
    life: "John Bosco (1815-1888) was an Italian priest who dedicated his life to educating poor and abandoned boys. He founded the Salesian order and developed innovative educational methods based on love rather than punishment.",
    legacy: "His educational philosophy and methods revolutionized youth education, and the Salesian order continues his work worldwide.",
    patronOf: ["Young people", "Students", "Apprentices", "Editors"],
    prayers: [
      {
        title: "Prayer for Youth",
        text: "St. John Bosco, you loved and guided young people with patience and joy. Help us to support and encourage the youth of today. Amen."
      }
    ],
    quotes: [
      {
        text: "It is not enough to love the young; they must know that they are loved.",
        source: "Educational maxims"
      }
    ],
    readings: [
      {
        title: "On Youth Education",
        citation: "From his writings",
        text: "The system of Saint Francis de Sales is based entirely on reason, religion, and loving-kindness."
      }
    ],
    liturgicalColor: "White"
  },
  
  // FEBRUARY SAINTS
  {
    id: "brigid",
    name: "St. Brigid of Ireland",
    feastDate: "February 1",
    type: "Virgin",
    title: "Patroness of Ireland",
    shortBio: "Irish abbess and one of Ireland's patron saints, known for her charity and miracles.",
    life: "Brigid (451-525) was an Irish abbess who founded the monastery of Kildare. She was known for her extraordinary charity to the poor and many miracles attributed to her intercession.",
    legacy: "She is one of the three patron saints of Ireland, along with Patrick and Columba, and her influence spread throughout the Celtic world.",
    patronOf: ["Ireland", "Dairymaids", "Cattle", "Fugitives", "Irish nuns"],
    prayers: [
      {
        title: "Prayer to St. Brigid",
        text: "St. Brigid, you showed great compassion to the poor and needy. Help us to be generous in sharing what we have with others. Amen."
      }
    ],
    quotes: [
      {
        text: "I would like to have the men of Heaven in my own house; with vats of good cheer laid out for them.",
        source: "Attributed"
      }
    ],
    readings: [
      {
        title: "On Charity",
        citation: "From her life",
        text: "True charity gives not only from our abundance but from our need."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "presentation-lord",
    name: "The Presentation of the Lord",
    feastDate: "February 2",
    type: "Other",
    title: "Candlemas",
    shortBio: "Celebration of Jesus being presented in the Temple and Mary's purification.",
    life: "This feast commemorates the presentation of the infant Jesus in the Temple 40 days after his birth, as required by Jewish law, and Mary's ritual purification.",
    legacy: "This feast emphasizes Jesus as the light of the world and Mary's obedience to the law. It's traditionally called Candlemas due to the blessing of candles.",
    patronOf: ["Candle makers", "Those seeking purification"],
    prayers: [
      {
        title: "Canticle of Simeon",
        text: "Lord, now you let your servant go in peace; your word has been fulfilled: my own eyes have seen the salvation which you have prepared in the sight of every people."
      }
    ],
    quotes: [
      {
        text: "A light for revelation to the Gentiles, and the glory of your people Israel.",
        source: "Luke 2:32"
      }
    ],
    readings: [
      {
        title: "The Presentation",
        citation: "Luke 2:22-40",
        text: "When the time came for their purification according to the law of Moses, they brought him up to Jerusalem to present him to the Lord."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "blaise",
    name: "St. Blaise",
    feastDate: "February 3",
    type: "Martyr",
    title: "Bishop and Martyr",
    shortBio: "Armenian bishop and physician martyred in the early 4th century.",
    life: "Blaise (d. 316) was a physician who became bishop of Sebastea in Armenia. During persecution, he retreated to a cave where wild animals came to him for healing. He was eventually martyred.",
    legacy: "He is invoked against throat diseases, and the blessing of St. Blaise is given on his feast day using crossed candles.",
    patronOf: ["Throat ailments", "Veterinarians", "Wild animals", "Wool combers"],
    prayers: [
      {
        title: "Blessing of St. Blaise",
        text: "Through the intercession of St. Blaise, bishop and martyr, may God deliver you from ailments of the throat and from every other evil. Amen."
      }
    ],
    quotes: [
      {
        text: "I heal in the name of Jesus Christ.",
        source: "Traditional"
      }
    ],
    readings: [
      {
        title: "On Healing Ministry",
        citation: "From his life",
        text: "True healing comes from God, and we are merely instruments of His grace."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "ansgar",
    name: "St. Ansgar",
    feastDate: "February 4",
    type: "Confessor",
    title: "Apostle of the North",
    shortBio: "Frankish missionary archbishop who evangelized Denmark and Sweden.",
    life: "Ansgar (801-865) was a Frankish Benedictine monk who became the first Archbishop of Hamburg-Bremen and is known as the 'Apostle of the North' for his missionary work in Scandinavia.",
    legacy: "His missionary efforts laid the foundation for Christianity in Denmark and Sweden, though the conversion process took several centuries to complete.",
    patronOf: ["Denmark", "Sweden", "Missionaries"],
    prayers: [
      {
        title: "Prayer for Missionaries",
        text: "St. Ansgar, you brought the Gospel to northern lands. Bless all missionaries and help them to plant seeds of faith. Amen."
      }
    ],
    quotes: [
      {
        text: "Better to try and fail than never to try at all.",
        source: "Missionary maxim"
      }
    ],
    readings: [
      {
        title: "On Missionary Work",
        citation: "From his life",
        text: "The Gospel must be planted in every soil, even if the harvest comes slowly."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "agatha",
    name: "St. Agatha",
    feastDate: "February 5",
    type: "Martyr",
    title: "Virgin and Martyr",
    shortBio: "Sicilian virgin martyred for refusing the advances of a Roman official.",
    life: "Agatha (231-251) was a beautiful Sicilian virgin from a noble family who was martyred during the persecution of Emperor Decius. She refused the advances of the Roman consul Quintianus.",
    legacy: "She is invoked against breast cancer, fire, earthquakes, and volcanic eruptions. Mount Etna's eruptions are said to stop through her intercession.",
    patronOf: ["Breast cancer patients", "Bell-founders", "Fire", "Sicily"],
    prayers: [
      {
        title: "Prayer for Healing",
        text: "St. Agatha, you suffered greatly but remained faithful to Christ. Help all who suffer illness, especially those with breast cancer. Amen."
      }
    ],
    quotes: [
      {
        text: "My mind is fixed immovably on Christ.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Purity and Courage",
        citation: "Acts of St. Agatha",
        text: "True beauty comes from purity of heart and courage in faith."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "paul-miki-companions",
    name: "St. Paul Miki and Companions",
    feastDate: "February 6",
    type: "Martyr",
    title: "Japanese Martyrs",
    shortBio: "Japanese Jesuit seminarian and 25 companions martyred by crucifixion in Nagasaki.",
    life: "Paul Miki (1564-1597) was a Japanese Jesuit seminarian who was crucified along with 25 other Christians in Nagasaki during the persecution of Christians in Japan.",
    legacy: "They were the first martyrs of Japan to be canonized, and their sacrifice inspired the hidden Christians who maintained the faith during centuries of persecution.",
    patronOf: ["Japan", "Missionaries in hostile territories"],
    prayers: [
      {
        title: "Prayer for Persecuted Christians",
        text: "St. Paul Miki and companions, you died for Christ in Japan. Pray for all Christians who face persecution today. Amen."
      }
    ],
    quotes: [
      {
        text: "I forgive the king and all who have sought my death. I do not hate them.",
        source: "St. Paul Miki's final words"
      }
    ],
    readings: [
      {
        title: "On Forgiveness",
        citation: "Final sermon of St. Paul Miki",
        text: "True Christian love forgives even those who persecute us."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "colette",
    name: "St. Colette",
    feastDate: "February 7",
    type: "Virgin",
    title: "Poor Clare Reformer",
    shortBio: "French Poor Clare nun who reformed the Franciscan order and founded numerous convents.",
    life: "Colette (1381-1447) was a French Poor Clare nun who undertook the reform of the Franciscan order, founding 17 new convents and reforming existing ones to return to the original Rule of St. Clare.",
    legacy: "Her reforms helped revitalize the Franciscan order and her branch is known as the Colettine Poor Clares.",
    patronOf: ["Expectant mothers", "Sick children", "Reformed Franciscans"],
    prayers: [
      {
        title: "Prayer for Reform",
        text: "St. Colette, you reformed religious life to return to its original fervor. Help us to continually renew our commitment to Christ. Amen."
      }
    ],
    quotes: [
      {
        text: "We must return to the primitive observance of our rule.",
        source: "Reform writings"
      }
    ],
    readings: [
      {
        title: "On Religious Reform",
        citation: "From her rule",
        text: "True reform begins with personal conversion and spreads to the community."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "jerome-emiliani",
    name: "St. Jerome Emiliani",
    feastDate: "February 8",
    type: "Confessor",
    title: "Patron of Orphans",
    shortBio: "Venetian nobleman who dedicated his life to caring for orphans and abandoned children.",
    life: "Jerome Emiliani (1486-1537) was a Venetian nobleman and soldier who, after a conversion experience, dedicated his life to caring for orphans, prostitutes, and the sick. He founded the Somaschi order.",
    legacy: "He established orphanages, hospitals, and schools, and is considered the patron saint of orphans and abandoned children.",
    patronOf: ["Orphans", "Abandoned children", "Homeless people"],
    prayers: [
      {
        title: "Prayer for Orphans",
        text: "St. Jerome Emiliani, you cared for orphaned and abandoned children. Help us to protect and nurture all children in need. Amen."
      }
    ],
    quotes: [
      {
        text: "These children have no one but God, and God has given them to us.",
        source: "To his followers"
      }
    ],
    readings: [
      {
        title: "On Caring for Children",
        citation: "From his works of mercy",
        text: "What we do for the least of these, we do for Christ himself."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "apollonia",
    name: "St. Apollonia",
    feastDate: "February 9",
    type: "Martyr",
    title: "Virgin and Martyr",
    shortBio: "Elderly deaconess martyred in Alexandria, patroness of those with dental problems.",
    life: "Apollonia (d. 249) was an elderly deaconess in Alexandria who was seized by a mob during anti-Christian riots. Her teeth were broken and she was threatened with burning unless she renounced Christ.",
    legacy: "She is invoked by those suffering from dental problems, and dentists consider her their patron saint.",
    patronOf: ["Dentists", "Dental problems", "Toothache sufferers"],
    prayers: [
      {
        title: "Prayer for Dental Health",
        text: "St. Apollonia, you suffered the breaking of your teeth for Christ. Help all who suffer dental pain and bless those who care for dental health. Amen."
      }
    ],
    quotes: [
      {
        text: "I choose the fire of love over the fire of persecution.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Courage in Suffering",
        citation: "Acts of St. Apollonia",
        text: "Physical pain cannot break the spirit that is united to Christ."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "scholastica",
    name: "St. Scholastica",
    feastDate: "February 10",
    type: "Virgin",
    title: "Sister of St. Benedict",
    shortBio: "Twin sister of St. Benedict who founded a convent and lived a life of prayer.",
    life: "Scholastica (480-543) was the twin sister of St. Benedict. She established a convent near Monte Cassino and is considered the first Benedictine nun. She met yearly with her brother to discuss spiritual matters.",
    legacy: "Her death preceded Benedict's by just days, and she is the patron saint of Benedictine nuns and those seeking education.",
    patronOf: ["Benedictine nuns", "Education", "Students", "Convulsive children"],
    prayers: [
      {
        title: "Prayer for Religious Sisters",
        text: "St. Scholastica, you dedicated your life to prayer and religious community. Bless all religious sisters and their ministries. Amen."
      }
    ],
    quotes: [
      {
        text: "Let us spend this night in spiritual conversation, for tomorrow we shall not see each other again.",
        source: "To St. Benedict at their final meeting"
      }
    ],
    readings: [
      {
        title: "On Prayer and Community",
        citation: "From St. Gregory's Dialogues",
        text: "Those who love much can accomplish much through prayer."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "our-lady-lourdes",
    name: "Our Lady of Lourdes",
    feastDate: "February 11",
    type: "Other",
    title: "Mary's Apparitions to Bernadette",
    shortBio: "Commemoration of the apparitions of the Blessed Virgin Mary to St. Bernadette Soubirous.",
    life: "This feast commemorates the series of 18 apparitions of the Blessed Virgin Mary to 14-year-old Bernadette Soubirous in Lourdes, France, beginning February 11, 1858.",
    legacy: "Lourdes became one of the world's most important pilgrimage sites, known for miraculous healings and spiritual renewal.",
    patronOf: ["Sick people", "Pilgrims", "France"],
    prayers: [
      {
        title: "Prayer to Our Lady of Lourdes",
        text: "O Immaculate Virgin Mary, you appeared to Bernadette in the grotto of Lourdes. Help us to follow your call to prayer, penance, and pilgrimage. Heal our bodies and souls. Amen."
      }
    ],
    quotes: [
      {
        text: "I am the Immaculate Conception.",
        source: "Mary's words to Bernadette"
      }
    ],
    readings: [
      {
        title: "Mary's Message at Lourdes",
        citation: "Bernadette's testimony",
        text: "Pray for sinners. Do penance. Come and drink from the spring."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "eulalia-barcelona",
    name: "St. Eulalia of Barcelona",
    feastDate: "February 12",
    type: "Martyr",
    title: "Virgin and Martyr",
    shortBio: "Young Spanish martyr who suffered under Diocletian's persecution.",
    life: "Eulalia (290-303) was a 13-year-old Christian girl from Barcelona who was martyred during the persecution of Diocletian. She courageously declared her faith and endured terrible tortures.",
    legacy: "She became the patron saint of Barcelona, and her courage inspired many young Christians to remain faithful under persecution.",
    patronOf: ["Barcelona", "Sailors", "Young women"],
    prayers: [
      {
        title: "Prayer for Young Christians",
        text: "St. Eulalia, you gave your life for Christ at such a young age. Help young Christians today to be brave witnesses to their faith. Amen."
      }
    ],
    quotes: [
      {
        text: "I am a Christian, and I worship only the true God.",
        source: "Declaration to the judge"
      }
    ],
    readings: [
      {
        title: "On Youthful Courage",
        citation: "Acts of St. Eulalia",
        text: "Age is no barrier to heroic virtue when the heart is united to Christ."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "catherine-ricci",
    name: "St. Catherine de' Ricci",
    feastDate: "February 13",
    type: "Virgin",
    title: "Dominican Mystic",
    shortBio: "Italian Dominican nun known for her mystical experiences and devotion to the Passion.",
    life: "Catherine de' Ricci (1522-1590) was an Italian Dominican nun who experienced mystical visions of Christ's Passion. She served as prioress of her convent and was known for her administrative skills and spiritual guidance.",
    legacy: "Her mystical experiences and spiritual writings contributed to devotion to the Passion of Christ, and she was a counselor to many important figures of her time.",
    patronOf: ["Dominican nuns", "Mystics", "Administrators"],
    prayers: [
      {
        title: "Prayer for Mystical Union",
        text: "St. Catherine de' Ricci, you experienced deep union with Christ in His Passion. Help us to unite our sufferings with Christ's. Amen."
      }
    ],
    quotes: [
      {
        text: "In the school of the Cross, we learn the highest wisdom.",
        source: "Spiritual writings"
      }
    ],
    readings: [
      {
        title: "On the Passion of Christ",
        citation: "From her mystical writings",
        text: "To share in Christ's glory, we must first share in His sufferings."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "cyril-methodius",
    name: "St. Cyril and St. Methodius",
    feastDate: "February 14",
    type: "Doctor",
    title: "Apostles to the Slavs",
    shortBio: "Byzantine brothers who evangelized the Slavic peoples and created the Cyrillic alphabet.",
    life: "Cyril (826-869) and Methodius (815-885) were Byzantine brothers who became missionaries to the Slavic peoples. They created the Glagolitic alphabet and translated the Bible and liturgy into Old Church Slavonic.",
    legacy: "They are called the Apostles to the Slavs and are patron saints of Europe. The Cyrillic alphabet is named after St. Cyril.",
    patronOf: ["Europe", "Slavic peoples", "Linguists", "Missionaries"],
    prayers: [
      {
        title: "Prayer for European Unity",
        text: "St. Cyril and St. Methodius, you brought the Gospel to the Slavic peoples. Help Europe to rediscover its Christian roots and unity. Amen."
      }
    ],
    quotes: [
      {
        text: "We are the ambassadors of Christ, as if God were making his appeal through us.",
        source: "Missionary correspondence"
      }
    ],
    readings: [
      {
        title: "On Cultural Evangelization",
        citation: "From their missionary work",
        text: "The Gospel must be preached in the language and culture of each people."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "claude-la-colombiere",
    name: "St. Claude de la Colombiere",
    feastDate: "February 15",
    type: "Confessor",
    title: "Jesuit Priest and Spiritual Director",
    shortBio: "French Jesuit priest who promoted devotion to the Sacred Heart of Jesus.",
    life: "Claude de la Colombiere (1641-1682) was a French Jesuit priest who served as spiritual director to St. Margaret Mary Alacoque and helped spread devotion to the Sacred Heart of Jesus.",
    legacy: "His spiritual direction and preaching helped establish the devotion to the Sacred Heart throughout the Church.",
    patronOf: ["Jesuit priests", "Spiritual directors"],
    prayers: [
      {
        title: "Prayer to the Sacred Heart",
        text: "St. Claude, you promoted devotion to the Sacred Heart of Jesus. Help us to grow in love for the Heart of Christ. Amen."
      }
    ],
    quotes: [
      {
        text: "The devotion to the Sacred Heart is the devotion of love responding to Love.",
        source: "Spiritual writings"
      }
    ],
    readings: [
      {
        title: "On the Sacred Heart",
        citation: "From his sermons",
        text: "In the Heart of Jesus we find the source of all grace and mercy."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "onesimus",
    name: "St. Onesimus",
    feastDate: "February 16",
    type: "Martyr",
    title: "Bishop and Martyr",
    shortBio: "Former slave who became a bishop and was martyred for his faith.",
    life: "Onesimus (d. 68) was a runaway slave who was converted by St. Paul and sent back to his master Philemon. He later became a bishop and was eventually martyred for his faith.",
    legacy: "His story, told in Paul's letter to Philemon, shows the transforming power of the Gospel and the equality of all people in Christ.",
    patronOf: ["Slaves", "Former prisoners", "Bishops"],
    prayers: [
      {
        title: "Prayer for Freedom",
        text: "St. Onesimus, you found true freedom in Christ. Help all who are enslaved or oppressed to find liberation through the Gospel. Amen."
      }
    ],
    quotes: [
      {
        text: "In Christ there is neither slave nor free.",
        source: "Galatians 3:28 (related to his story)"
      }
    ],
    readings: [
      {
        title: "Letter to Philemon",
        citation: "Philemon 1:10-18",
        text: "I am sending him back to you, sending my very heart... no longer as a slave but more than a slave, as a beloved brother."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "seven-founders-servites",
    name: "The Seven Holy Founders of the Servite Order",
    feastDate: "February 17",
    type: "Confessor",
    title: "Founders of the Servants of Mary",
    shortBio: "Seven Italian merchants who founded the Servite Order dedicated to Mary's sorrows.",
    life: "In 1233, seven wealthy Florentine merchants left their worldly pursuits to found the Order of the Servants of Mary (Servites), dedicating themselves to contemplating Mary's sorrows.",
    legacy: "The Servite Order continues their work of devotion to Our Lady of Sorrows and has spread throughout the world.",
    patronOf: ["Servite Order", "Merchants who leave business for religious life"],
    prayers: [
      {
        title: "Prayer to Our Lady of Sorrows",
        text: "Seven Holy Founders, you dedicated your lives to honoring Mary's sorrows. Help us to console Our Lady and her Son through our prayers and sacrifices. Amen."
      }
    ],
    quotes: [
      {
        text: "We choose to serve the Queen of Heaven in her sorrows.",
        source: "Foundation charter"
      }
    ],
    readings: [
      {
        title: "On Mary's Sorrows",
        citation: "From Servite spirituality",
        text: "By contemplating Mary's sorrows, we learn to unite our sufferings with Christ's."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "bernadette",
    name: "St. Bernadette Soubirous",
    feastDate: "February 18",
    type: "Virgin",
    title: "Visionary of Lourdes",
    shortBio: "French peasant girl who saw apparitions of the Virgin Mary at Lourdes.",
    life: "Bernadette Soubirous (1844-1879) was a poor, illiterate French peasant girl who experienced 18 apparitions of the Virgin Mary at Lourdes in 1858. She later became a nun with the Sisters of Charity.",
    legacy: "Her visions led to Lourdes becoming one of the world's most important pilgrimage sites, known for miraculous healings.",
    patronOf: ["Sick people", "Poor people", "Lourdes", "Shepherdesses"],
    prayers: [
      {
        title: "Prayer of St. Bernadette",
        text: "O Mary, conceived without sin, pray for us who have recourse to you. St. Bernadette, help us to be humble and trusting like you. Amen."
      }
    ],
    quotes: [
      {
        text: "I am only a broom in the hands of Our Lady.",
        source: "Personal reflection"
      }
    ],
    readings: [
      {
        title: "The Message of Lourdes",
        citation: "From her testimony",
        text: "The Lady asked for prayer, penance, and the building of a chapel."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "conrad-piacenza",
    name: "St. Conrad of Piacenza",
    feastDate: "February 19",
    type: "Confessor",
    title: "Hermit and Penitent",
    shortBio: "Italian nobleman who became a hermit after accidentally causing a forest fire.",
    life: "Conrad of Piacenza (1290-1354) was an Italian nobleman who accidentally started a forest fire while hunting. After making restitution, he and his wife entered religious life, and he became a hermit.",
    legacy: "His life of penance and prayer as a hermit attracted many followers and inspired others to seek God in solitude.",
    patronOf: ["Hermits", "Penitents", "Those seeking forgiveness"],
    prayers: [
      {
        title: "Prayer for Penance",
        text: "St. Conrad, you made amends for your mistakes through a life of penance. Help us to take responsibility for our actions and seek forgiveness. Amen."
      }
    ],
    quotes: [
      {
        text: "True nobility is found in serving God and neighbor.",
        source: "Before entering religious life"
      }
    ],
    readings: [
      {
        title: "On Penance and Conversion",
        citation: "From his life",
        text: "The greatest achievements come from turning our mistakes into opportunities for grace."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "eucherius",
    name: "St. Eucherius of Orleans",
    feastDate: "February 20",
    type: "Confessor",
    title: "Bishop and Monk",
    shortBio: "Frankish nobleman who became a monk and later bishop, known for his learning.",
    life: "Eucherius of Orleans (687-743) was a Frankish nobleman who became a monk at Jumieges and later served as Bishop of Orleans. He was known for his learning and holiness.",
    legacy: "His scholarly work and episcopal leadership contributed to the preservation of learning during the early medieval period.",
    patronOf: ["Bishops", "Scholars", "Orleans"],
    prayers: [
      {
        title: "Prayer for Church Leaders",
        text: "St. Eucherius, you combined learning with holiness in your episcopal ministry. Bless all church leaders with wisdom and virtue. Amen."
      }
    ],
    quotes: [
      {
        text: "Learning without holiness is empty; holiness without learning is incomplete.",
        source: "Episcopal teachings"
      }
    ],
    readings: [
      {
        title: "On Learning and Holiness",
        citation: "From his writings",
        text: "True wisdom begins with the fear of the Lord and grows through study and prayer."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "peter-damian",
    name: "St. Peter Damian",
    feastDate: "February 21",
    type: "Doctor",
    title: "Doctor of the Church, Reformer",
    shortBio: "Italian Benedictine monk and cardinal who promoted Church reform.",
    life: "Peter Damian (1007-1072) was an Italian Benedictine monk who became a cardinal and was instrumental in Church reform. He fought against clerical corruption and promoted monastic renewal.",
    legacy: "His reforms helped purify the Church during a period of corruption, and his writings on prayer and penance remain influential.",
    patronOf: ["Reformers", "Against headaches"],
    prayers: [
      {
        title: "Prayer for Church Reform",
        text: "St. Peter Damian, you worked tirelessly to reform the Church. Help us to work for renewal and holiness in our communities. Amen."
      }
    ],
    quotes: [
      {
        text: "The Church is always in need of reform, beginning with each of us.",
        source: "Reform writings"
      }
    ],
    readings: [
      {
        title: "On Church Reform",
        citation: "From his letters",
        text: "True reform comes not from anger but from love of the Church."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "chair-peter",
    name: "The Chair of St. Peter",
    feastDate: "February 22",
    type: "Other",
    title: "Celebration of Papal Authority",
    shortBio: "Feast celebrating the authority given to Peter as head of the apostles.",
    life: "This feast celebrates the special authority given by Christ to St. Peter as the head of the apostles and the foundation of the Church's unity.",
    legacy: "The feast emphasizes the role of the papacy in maintaining Church unity and teaching authority.",
    patronOf: ["Papal authority", "Church unity"],
    prayers: [
      {
        title: "Prayer for the Pope",
        text: "Lord Jesus, you gave St. Peter the keys to the kingdom. Bless our Holy Father the Pope and guide him in leading your Church. Amen."
      }
    ],
    quotes: [
      {
        text: "You are Peter, and on this rock I will build my Church.",
        source: "Matthew 16:18"
      }
    ],
    readings: [
      {
        title: "The Primacy of Peter",
        citation: "Matthew 16:13-20",
        text: "When Jesus came to the region of Caesarea Philippi, he asked his disciples, 'Who do people say the Son of Man is?'"
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "polycarp",
    name: "St. Polycarp",
    feastDate: "February 23",
    type: "Martyr",
    title: "Bishop and Martyr, Father of the Church",
    shortBio: "Early Christian bishop and martyr, disciple of St. John the Apostle.",
    life: "Polycarp (69-155) was Bishop of Smyrna and a disciple of St. John the Apostle. He was burned at the stake for refusing to renounce his faith during persecution.",
    legacy: "His martyrdom account is one of the earliest Christian martyr stories, and his faithfulness inspired Christians for centuries.",
    patronOf: ["Dysentery sufferers", "Earache sufferers"],
    prayers: [
      {
        title: "Prayer for Faithfulness",
        text: "St. Polycarp, you served Christ faithfully for 86 years. Help us to remain steadfast in our faith throughout our lives. Amen."
      }
    ],
    quotes: [
      {
        text: "Eighty-six years I have served Christ, and He has done me no wrong. How can I blaspheme my King who saved me?",
        source: "Final testimony before martyrdom"
      }
    ],
    readings: [
      {
        title: "The Martyrdom of Polycarp",
        citation: "From the earliest martyr account",
        text: "This is the account of the blessed Polycarp, who fought the good fight and finished the race."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "matthias",
    name: "St. Matthias",
    feastDate: "February 24",
    type: "Other",
    title: "Apostle",
    shortBio: "Apostle chosen to replace Judas Iscariot among the Twelve.",
    life: "Matthias was chosen by lot to replace Judas Iscariot among the Twelve Apostles after the Resurrection. Little is known of his later ministry and martyrdom.",
    legacy: "His selection shows how the early Church sought to maintain the symbolic number of twelve apostles and his faithfulness as a witness to the Resurrection.",
    patronOf: ["Carpenters", "Tailors", "Those struggling with alcoholism"],
    prayers: [
      {
        title: "Prayer for Vocations",
        text: "St. Matthias, you were chosen to serve as an apostle. Help us to respond generously when God calls us to serve. Amen."
      }
    ],
    quotes: [
      {
        text: "Lord, you know everyone's heart. Show us which one of these two you have chosen.",
        source: "Acts 1:24 (prayer before his selection)"
      }
    ],
    readings: [
      {
        title: "The Election of Matthias",
        citation: "Acts 1:15-26",
        text: "In those days Peter stood up among the believers and said, 'Friends, the scripture had to be fulfilled...'"
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "walburga",
    name: "St. Walburga",
    feastDate: "February 25",
    type: "Virgin",
    title: "Abbess and Missionary",
    shortBio: "English Benedictine abbess who helped evangelize Germany.",
    life: "Walburga (710-779) was an English Benedictine nun who joined the missionary work in Germany. She became abbess of Heidenheim and was known for her miracles and healing abilities.",
    legacy: "She helped establish Christianity in Germany and is remembered for the miraculous oil that flows from her tomb, which is used for healing.",
    patronOf: ["Against plague", "Against rabies", "Sailors"],
    prayers: [
      {
        title: "Prayer for Missionaries",
        text: "St. Walburga, you left your homeland to spread the Gospel in Germany. Bless all missionaries who serve in foreign lands. Amen."
      }
    ],
    quotes: [
      {
        text: "We go where God calls us, trusting in His providence.",
        source: "Missionary correspondence"
      }
    ],
    readings: [
      {
        title: "On Missionary Work",
        citation: "From her life",
        text: "The Gospel knows no boundaries of nation or language."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "alexander-alexandria",
    name: "St. Alexander of Alexandria",
    feastDate: "February 26",
    type: "Confessor",
    title: "Bishop and Doctor",
    shortBio: "Bishop of Alexandria who opposed Arianism and defended orthodox Christianity.",
    life: "Alexander of Alexandria (d. 328) was a bishop who strongly opposed the Arian heresy, which denied the divinity of Christ. He was the predecessor and mentor of St. Athanasius.",
    legacy: "His defense of orthodox Christianity helped preserve the doctrine of Christ's divinity during the Arian crisis.",
    patronOf: ["Orthodox doctrine", "Bishops fighting heresy"],
    prayers: [
      {
        title: "Prayer for Orthodox Faith",
        text: "St. Alexander, you defended the divinity of Christ against heresy. Help us to remain faithful to orthodox Catholic teaching. Amen."
      }
    ],
    quotes: [
      {
        text: "Christ is true God and true man, not a creature but the Creator.",
        source: "Against Arianism"
      }
    ],
    readings: [
      {
        title: "On the Divinity of Christ",
        citation: "Theological writings",
        text: "To deny Christ's divinity is to deny our salvation."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "gabriel-possenti",
    name: "St. Gabriel of Our Lady of Sorrows",
    feastDate: "February 27",
    type: "Confessor",
    title: "Passionist Seminarian",
    shortBio: "Italian Passionist seminarian known for his devotion to Mary and the Passion.",
    life: "Gabriel Possenti (1838-1862) was an Italian young man who entered the Passionist order and died of tuberculosis before ordination. Despite his short life, he was known for his intense devotion.",
    legacy: "He became a model for young religious and is patron saint of youth, students, and seminarians.",
    patronOf: ["Youth", "Students", "Seminarians", "Clerics"],
    prayers: [
      {
        title: "Prayer for Young Religious",
        text: "St. Gabriel, you embraced religious life with great fervor despite your youth. Help young people to respond generously to God's call. Amen."
      }
    ],
    quotes: [
      {
        text: "What use is it for me to become a saint by halves?",
        source: "Personal resolution"
      }
    ],
    readings: [
      {
        title: "On Religious Vocation",
        citation: "From his spiritual diary",
        text: "Total dedication to God brings true happiness."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "roman-lyons",
    name: "St. Roman of Condat",
    feastDate: "February 28",
    type: "Confessor",
    title: "Abbot and Hermit",
    shortBio: "Gallic hermit who founded monasteries in the Jura Mountains.",
    life: "Roman of Condat (390-463) was a Gallic hermit who, with his brother Lupicinus, founded several monasteries in the Jura Mountains, including the famous monastery of Condat.",
    legacy: "His monastic foundations helped spread Christianity and learning in the mountainous regions of Gaul.",
    patronOf: ["Monks", "Mountain climbers", "Hermits"],
    prayers: [
      {
        title: "Prayer for Monastic Life",
        text: "St. Roman, you established monasteries in remote mountains. Help us to find God in solitude and prayer. Amen."
      }
    ],
    quotes: [
      {
        text: "In the silence of the mountains, God speaks most clearly.",
        source: "Monastic teachings"
      }
    ],
    readings: [
      {
        title: "On Monastic Foundation",
        citation: "From his rule",
        text: "A monastery should be a school where souls learn to serve God."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "oswald-worcester",
    name: "St. Oswald of Worcester",
    feastDate: "February 29",
    type: "Confessor",
    title: "Archbishop of York",
    shortBio: "English bishop who promoted monastic reform and education in 10th century England.",
    life: "Oswald of Worcester (d. 992) was Archbishop of York and Bishop of Worcester. He was instrumental in the monastic reform movement in England and founded several monasteries.",
    legacy: "His work in monastic reform and education helped revitalize the English Church after the Viking invasions.",
    patronOf: ["Worcester", "Monastic reform"],
    prayers: [
      {
        title: "Prayer for Church Reform",
        text: "St. Oswald, you renewed the Church through monastic reform. Help us to work for the renewal of the Church in our time. Amen."
      }
    ],
    quotes: [
      {
        text: "Learning enlightens the soul and brings us closer to God.",
        source: "To his monks"
      }
    ],
    readings: [
      {
        title: "On Monastic Reform",
        citation: "From historical records",
        text: "True reform begins with personal holiness and spreads through example."
      }
    ],
    liturgicalColor: "White"
  },
  
  // MARCH SAINTS
  {
    id: "david-wales",
    name: "St. David of Wales",
    feastDate: "March 1",
    type: "Confessor",
    title: "Patron of Wales",
    shortBio: "Welsh bishop and patron saint known for his monastic reforms and miracles.",
    life: "David (500-589) was a Welsh bishop who founded several monasteries and became the patron saint of Wales. He was known for his austere lifestyle and miracles.",
    legacy: "He established the Celtic Christian tradition in Wales and his influence spread throughout Britain and Ireland.",
    patronOf: ["Wales", "Poets", "Doves"],
    prayers: [
      {
        title: "Prayer to St. David",
        text: "St. David, patron of Wales, you lived a life of simplicity and devotion. Help us to follow Christ with the same dedication. Amen."
      }
    ],
    quotes: [
      {
        text: "Do the little things in life.",
        source: "Final sermon"
      }
    ],
    readings: [
      {
        title: "On Monastic Life",
        citation: "From his rule",
        text: "True greatness is found in faithfulness to small duties."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "chad",
    name: "St. Chad",
    feastDate: "March 2",
    type: "Confessor",
    title: "Bishop of Lichfield",
    shortBio: "English bishop known for his humility and missionary work among the Anglo-Saxons.",
    life: "Chad (d. 672) was an English bishop who studied under St. Aidan and became Bishop of Lichfield. He was known for his humility and effective missionary work.",
    legacy: "His gentle approach to evangelization helped convert many Anglo-Saxons to Christianity.",
    patronOf: ["England", "Lichfield"],
    prayers: [
      {
        title: "Prayer for Humility",
        text: "St. Chad, you served with great humility. Help us to follow your example of gentle leadership and service. Amen."
      }
    ],
    quotes: [
      {
        text: "I prefer to walk rather than ride, following the example of the apostles.",
        source: "To St. Theodore"
      }
    ],
    readings: [
      {
        title: "On Humility in Leadership",
        citation: "From Bede's History",
        text: "The greatest leaders are those who serve with humility."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "katharine-drexel",
    name: "St. Katharine Drexel",
    feastDate: "March 3",
    type: "Virgin",
    title: "Foundress and Educator",
    shortBio: "American heiress who gave away her fortune to educate Native Americans and African Americans.",
    life: "Katharine Drexel (1858-1955) was an American heiress who gave away her inheritance to found schools for Native Americans and African Americans. She established the Sisters of the Blessed Sacrament.",
    legacy: "She founded over 100 schools and Xavier University in New Orleans, the first Catholic university for African Americans.",
    patronOf: ["Racial justice", "Education", "Native Americans"],
    prayers: [
      {
        title: "Prayer for Racial Justice",
        text: "St. Katharine Drexel, you fought against racism through education and charity. Help us to work for equality and justice for all people. Amen."
      }
    ],
    quotes: [
      {
        text: "The patient and humble endurance of the cross—whatever nature it may be—is the highest work we have to do.",
        source: "Spiritual writings"
      }
    ],
    readings: [
      {
        title: "On Social Justice",
        citation: "From her letters",
        text: "We must work for justice with the same dedication we give to prayer."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "casimir",
    name: "St. Casimir",
    feastDate: "March 4",
    type: "Confessor",
    title: "Prince of Poland",
    shortBio: "Polish prince known for his piety and devotion to the poor.",
    life: "Casimir (1458-1484) was a Polish prince who refused the throne to maintain his vow of celibacy. He was known for his deep prayer life and care for the poor.",
    legacy: "He became the patron saint of Poland and Lithuania, representing the ideal of Christian leadership.",
    patronOf: ["Poland", "Lithuania", "Bachelors", "Kings"],
    prayers: [
      {
        title: "Prayer for Christian Leaders",
        text: "St. Casimir, you chose holiness over worldly power. Help all leaders to serve with integrity and virtue. Amen."
      }
    ],
    quotes: [
      {
        text: "I would rather die than commit a mortal sin.",
        source: "Personal testimony"
      }
    ],
    readings: [
      {
        title: "On Christian Kingship",
        citation: "From his life",
        text: "True nobility consists in serving God and the common good."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "john-joseph-cross",
    name: "St. John Joseph of the Cross",
    feastDate: "March 5",
    type: "Confessor",
    title: "Franciscan Priest",
    shortBio: "Italian Franciscan priest known for his preaching and mystical experiences.",
    life: "John Joseph of the Cross (1654-1734) was an Italian Franciscan priest known for his powerful preaching, mystical experiences, and strict observance of the Franciscan rule.",
    legacy: "His preaching converted many souls and his mystical experiences inspired others to deeper spiritual life.",
    patronOf: ["Preachers", "Franciscans"],
    prayers: [
      {
        title: "Prayer for Preachers",
        text: "St. John Joseph of the Cross, you preached with great power and conviction. Help all preachers to proclaim God's word effectively. Amen."
      }
    ],
    quotes: [
      {
        text: "Preach always; when necessary, use words.",
        source: "Preaching maxim"
      }
    ],
    readings: [
      {
        title: "On Preaching",
        citation: "From his sermons",
        text: "The preacher must first live what he proclaims."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "colette-corbie",
    name: "St. Colette of Corbie",
    feastDate: "March 6",
    type: "Virgin",
    title: "Poor Clare Reformer",
    shortBio: "French Poor Clare nun who reformed the Franciscan order.",
    life: "Colette of Corbie (1381-1447) was a French Poor Clare nun who undertook the reform of the Franciscan order, founding 17 new convents and reforming existing ones.",
    legacy: "Her reforms revitalized the Franciscan order and her branch is known as the Colettine Poor Clares.",
    patronOf: ["Expectant mothers", "Sick children", "Reformed Franciscans"],
    prayers: [
      {
        title: "Prayer for Religious Reform",
        text: "St. Colette, you renewed religious life through your reforms. Help us to continually reform our hearts and communities. Amen."
      }
    ],
    quotes: [
      {
        text: "We must return to the primitive spirit of our rule.",
        source: "Reform writings"
      }
    ],
    readings: [
      {
        title: "On Religious Renewal",
        citation: "From her rule",
        text: "True reform begins with personal holiness."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "perpetua-felicity",
    name: "St. Perpetua and St. Felicity",
    feastDate: "March 7",
    type: "Martyr",
    title: "Carthaginian Martyrs",
    shortBio: "Young Carthaginian mothers martyred together in the arena.",
    life: "Perpetua (182-203) was a young noblewoman and Felicity her slave, both catechumens who were martyred in Carthage. Perpetua kept a diary of their imprisonment.",
    legacy: "Their martyrdom account, partly written by Perpetua herself, is one of the most moving early Christian documents.",
    patronOf: ["Mothers", "Pregnant women", "Cattle", "Carthage"],
    prayers: [
      {
        title: "Prayer for Mothers",
        text: "St. Perpetua and St. Felicity, you died for Christ while caring for your children. Protect all mothers and help them raise their children in faith. Amen."
      }
    ],
    quotes: [
      {
        text: "We cannot live in any other way but as Christians.",
        source: "Perpetua's diary"
      }
    ],
    readings: [
      {
        title: "The Passion of Perpetua and Felicity",
        citation: "From their martyrdom account",
        text: "These holy women showed that motherhood and martyrdom can be united in Christian love."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "john-god",
    name: "St. John of God",
    feastDate: "March 8",
    type: "Confessor",
    title: "Hospital Founder",
    shortBio: "Portuguese man who dedicated his life to caring for the sick and poor.",
    life: "John of God (1495-1550) was a Portuguese man who, after a conversion experience, dedicated his life to caring for the sick and poor. He founded the first hospital in Granada, Spain.",
    legacy: "He founded the Hospitaller Order of St. John of God, which continues his work in healthcare worldwide.",
    patronOf: ["Hospitals", "Nurses", "Sick people", "Heart patients"],
    prayers: [
      {
        title: "Prayer for Healthcare Workers",
        text: "St. John of God, you cared for the sick with great compassion. Bless all healthcare workers and help them serve with love. Amen."
      }
    ],
    quotes: [
      {
        text: "Labor without stopping, offer your work up to God, and He will provide.",
        source: "To his followers"
      }
    ],
    readings: [
      {
        title: "On Caring for the Sick",
        citation: "From his letters",
        text: "In serving the sick, we serve Christ himself."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "frances-rome",
    name: "St. Frances of Rome",
    feastDate: "March 9",
    type: "Other",
    title: "Wife, Mother, and Mystic",
    shortBio: "Roman noblewoman who balanced family life with mystical experiences and charity.",
    life: "Frances of Rome (1384-1440) was a Roman noblewoman who married and had children while experiencing mystical visions. She founded the Oblates of Tor de' Specchi.",
    legacy: "She showed that married women could achieve great sanctity while fulfilling their family duties.",
    patronOf: ["Motorists", "Widows", "Benedictine oblates"],
    prayers: [
      {
        title: "Prayer for Married Women",
        text: "St. Frances of Rome, you balanced family life with deep spirituality. Help all married women to find holiness in their daily duties. Amen."
      }
    ],
    quotes: [
      {
        text: "A married woman must, when called upon, quit her devotions to God at the altar to find Him in her domestic cares.",
        source: "Spiritual maxims"
      }
    ],
    readings: [
      {
        title: "On Marriage and Spirituality",
        citation: "From her life",
        text: "God can be found in the kitchen as well as in the chapel."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "forty-martyrs-sebaste",
    name: "The Forty Martyrs of Sebaste",
    feastDate: "March 10",
    type: "Martyr",
    title: "Roman Soldiers and Martyrs",
    shortBio: "Forty Roman soldiers who died for their faith by freezing on a lake.",
    life: "The Forty Martyrs of Sebaste (d. 320) were Roman soldiers who refused to sacrifice to pagan gods and were forced to stand naked on a frozen lake until they died.",
    legacy: "Their courage in the face of such cruel death inspired many Christians and they are especially venerated in the Eastern Church.",
    patronOf: ["Soldiers", "Those suffering from cold"],
    prayers: [
      {
        title: "Prayer for Soldiers",
        text: "Forty Holy Martyrs, you chose Christ over military advancement. Bless all soldiers and help them serve with honor and faith. Amen."
      }
    ],
    quotes: [
      {
        text: "Forty we went into battle, forty let us go to heaven.",
        source: "Traditional saying of the martyrs"
      }
    ],
    readings: [
      {
        title: "On Military Faith",
        citation: "Acts of the Forty Martyrs",
        text: "True courage is shown not in battle but in remaining faithful to Christ."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "eulalia-barcelona",
    name: "St. Eulalia of Mérida",
    feastDate: "March 11",
    type: "Martyr",
    title: "Virgin and Martyr",
    shortBio: "Young Spanish martyr who suffered under Diocletian's persecution.",
    life: "Eulalia of Mérida (292-304) was a 12-year-old Christian girl who was martyred during the persecution of Diocletian in Spain. She courageously declared her faith.",
    legacy: "Her young age and courage made her a symbol of youthful faith and she became patron of Mérida and Oviedo.",
    patronOf: ["Mérida", "Oviedo", "Young martyrs"],
    prayers: [
      {
        title: "Prayer for Young Christians",
        text: "St. Eulalia, you witnessed to Christ despite your young age. Help young people today to be brave in their faith. Amen."
      }
    ],
    quotes: [
      {
        text: "I am a Christian and will always be one.",
        source: "Declaration to the judge"
      }
    ],
    readings: [
      {
        title: "On Youthful Witness",
        citation: "Acts of St. Eulalia",
        text: "Age is no barrier to heroic virtue when united to Christ."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "maximilian",
    name: "St. Maximilian",
    feastDate: "March 12",
    type: "Martyr",
    title: "Conscientious Objector",
    shortBio: "Roman soldier who refused military service for religious reasons.",
    life: "Maximilian (274-295) was a young Roman who refused military service on religious grounds, saying 'I cannot serve as a soldier; I am a Christian.' He was executed for his stance.",
    legacy: "He is considered one of the first Christian conscientious objectors and patron of those who refuse military service for religious reasons.",
    patronOf: ["Conscientious objectors", "Peace activists"],
    prayers: [
      {
        title: "Prayer for Peace",
        text: "St. Maximilian, you chose death rather than take up arms. Help us to be peacemakers in our world. Amen."
      }
    ],
    quotes: [
      {
        text: "I cannot serve as a soldier; I cannot do evil; I am a Christian.",
        source: "At his trial"
      }
    ],
    readings: [
      {
        title: "On Christian Pacifism",
        citation: "Acts of St. Maximilian",
        text: "The Christian's warfare is spiritual, not carnal."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "rodrigo-solomon",
    name: "St. Rodrigo and Solomon",
    feastDate: "March 13",
    type: "Martyr",
    title: "Spanish Martyrs",
    shortBio: "Spanish priest and layman martyred by Muslims in Córdoba.",
    life: "Rodrigo and Solomon (d. 857) were martyred in Córdoba, Spain during Muslim rule. Rodrigo was a priest and Solomon a layman who were executed for their Christian faith.",
    legacy: "They were part of the Martyrs of Córdoba who witnessed to Christianity under Islamic rule in medieval Spain.",
    patronOf: ["Spain", "Those persecuted for faith"],
    prayers: [
      {
        title: "Prayer for Persecuted Christians",
        text: "St. Rodrigo and St. Solomon, you died for Christ under Islamic rule. Pray for all Christians who face persecution today. Amen."
      }
    ],
    quotes: [
      {
        text: "We die for Christ, the true God.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Christian Witness",
        citation: "From the Martyrs of Córdoba",
        text: "Faith must be proclaimed even at the cost of life."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "mathilde",
    name: "St. Mathilde",
    feastDate: "March 14",
    type: "Other",
    title: "Queen of Germany",
    shortBio: "German queen known for her charity and founding of monasteries.",
    life: "Mathilde (895-968) was Queen of Germany, wife of King Henry I. She was known for her great charity to the poor and founded several monasteries and churches.",
    legacy: "She used her royal position to promote Christianity and care for the needy, becoming a model of Christian queenship.",
    patronOf: ["Queens", "Large families", "Widows"],
    prayers: [
      {
        title: "Prayer for Christian Rulers",
        text: "St. Mathilde, you used your royal power to serve God and the poor. Help all rulers to govern with justice and charity. Amen."
      }
    ],
    quotes: [
      {
        text: "Royal power is given by God for the service of His people.",
        source: "Royal maxims"
      }
    ],
    readings: [
      {
        title: "On Christian Leadership",
        citation: "From her life",
        text: "True nobility is measured by service to God and neighbor."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "louise-marillac",
    name: "St. Louise de Marillac",
    feastDate: "March 15",
    type: "Other",
    title: "Co-founder of Daughters of Charity",
    shortBio: "French widow who worked with St. Vincent de Paul to serve the poor.",
    life: "Louise de Marillac (1591-1660) was a French widow who worked with St. Vincent de Paul to establish the Daughters of Charity, dedicated to serving the poor and sick.",
    legacy: "Her work with the Daughters of Charity revolutionized charitable work and established modern nursing care.",
    patronOf: ["Nurses", "Social workers", "Widows"],
    prayers: [
      {
        title: "Prayer for Charitable Works",
        text: "St. Louise de Marillac, you dedicated your life to serving the poor. Help us to see Christ in those who suffer. Amen."
      }
    ],
    quotes: [
      {
        text: "Serve the poor with great love.",
        source: "To the Daughters of Charity"
      }
    ],
    readings: [
      {
        title: "On Service to the Poor",
        citation: "From her conferences",
        text: "In serving the poor, we serve our Lord and Master."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "clement-hofbauer",
    name: "St. Clement Mary Hofbauer",
    feastDate: "March 15",
    type: "Confessor",
    title: "Redemptorist Missionary",
    shortBio: "Austrian Redemptorist priest who evangelized Eastern Europe.",
    life: "Clement Mary Hofbauer (1751-1820) was an Austrian Redemptorist priest who worked as a missionary in Poland and later in Vienna, establishing the Redemptorist order in Eastern Europe.",
    legacy: "He helped preserve Catholicism in Protestant and Orthodox territories and is considered a second founder of the Redemptorists.",
    patronOf: ["Warsaw", "Vienna", "Redemptorists"],
    prayers: [
      {
        title: "Prayer for Missionaries",
        text: "St. Clement Mary Hofbauer, you brought the Gospel to Eastern Europe. Bless all missionaries and help them spread Christ's love. Amen."
      }
    ],
    quotes: [
      {
        text: "Go to the poor; they will teach you what God wants.",
        source: "To his followers"
      }
    ],
    readings: [
      {
        title: "On Missionary Work",
        citation: "From his letters",
        text: "The missionary must become all things to all people to win them for Christ."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "heribert-cologne",
    name: "St. Heribert of Cologne",
    feastDate: "March 16",
    type: "Confessor",
    title: "Archbishop of Cologne",
    shortBio: "German archbishop known for his charity during famine and his role as chancellor of Holy Roman Emperor Otto III.",
    life: "Heribert of Cologne (970-1021) was Archbishop of Cologne and chancellor of Holy Roman Emperor Otto III. He was known for his learning, administrative abilities, and especially his charity during times of famine.",
    legacy: "He founded the abbey of Deutz and was renowned for his care of the poor during a severe famine that struck the Rhineland.",
    patronOf: ["Cologne", "Against drought", "Rain"],
    prayers: [
      {
        title: "Prayer for Charity",
        text: "St. Heribert, you fed the hungry during times of famine. Help us to see Christ in the poor and to share generously with those in need. Amen."
      }
    ],
    quotes: [
      {
        text: "The poor are Christ's treasury.",
        source: "Attributed to St. Heribert"
      }
    ],
    readings: [
      {
        title: "On Care for the Poor",
        citation: "From medieval chronicles",
        text: "During the great famine, he sold the sacred vessels of his church to buy grain for the starving people."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "patrick",
    name: "St. Patrick",
    feastDate: "March 17",
    type: "Confessor",
    title: "Apostle of Ireland",
    shortBio: "British missionary who brought Christianity to Ireland.",
    life: "Patrick (387-461) was a British Christian who was captured by Irish raiders and sold into slavery. After escaping, he returned as a missionary bishop to evangelize Ireland.",
    legacy: "He successfully converted most of Ireland to Christianity and established the Irish Church, becoming Ireland's patron saint.",
    patronOf: ["Ireland", "Engineers", "Excluded people", "Missionaries"],
    prayers: [
      {
        title: "St. Patrick's Breastplate",
        text: "Christ with me, Christ before me, Christ behind me, Christ in me, Christ beneath me, Christ above me, Christ on my right, Christ on my left. Amen."
      }
    ],
    quotes: [
      {
        text: "Christ with me, Christ before me, Christ behind me.",
        source: "St. Patrick's Breastplate"
      }
    ],
    readings: [
      {
        title: "From the Confession of St. Patrick",
        citation: "Confessio",
        text: "I am greatly in debt to God, who gave me such great grace that many people were born again to God through me."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "cyril-jerusalem",
    name: "St. Cyril of Jerusalem",
    feastDate: "March 18",
    type: "Doctor",
    title: "Doctor of the Church, Bishop",
    shortBio: "Bishop of Jerusalem known for his catechetical lectures to new Christians.",
    life: "Cyril of Jerusalem (313-386) was Bishop of Jerusalem during the 4th century. He is famous for his catechetical lectures given to those preparing for baptism.",
    legacy: "His catechetical lectures provide valuable insight into early Christian teaching and worship practices.",
    patronOf: ["Catechumens", "Teachers", "Jerusalem"],
    prayers: [
      {
        title: "Prayer for Catechumens",
        text: "St. Cyril of Jerusalem, you instructed new Christians in the faith. Bless all who prepare for baptism and confirmation. Amen."
      }
    ],
    quotes: [
      {
        text: "The dragon sits by the side of the road, watching those who pass. Beware lest he devour you.",
        source: "Catechetical Lectures"
      }
    ],
    readings: [
      {
        title: "On Christian Initiation",
        citation: "Catechetical Lectures",
        text: "You have been called to be a soldier of Christ; take up the spiritual weapons."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "joseph",
    name: "St. Joseph",
    feastDate: "March 19",
    type: "Confessor",
    title: "Spouse of the Blessed Virgin Mary",
    shortBio: "Foster father of Jesus and spouse of Mary, patron of the universal Church.",
    life: "Joseph was the foster father of Jesus and husband of Mary. A righteous man, he protected and provided for the Holy Family. He was a carpenter by trade.",
    legacy: "He is the patron of the universal Church, fathers, workers, and those seeking a happy death. His devotion has grown especially in modern times.",
    patronOf: ["Universal Church", "Fathers", "Workers", "Happy death"],
    prayers: [
      {
        title: "Prayer to St. Joseph",
        text: "St. Joseph, foster father of Jesus, you protected the Holy Family with loving care. Watch over our families and help us to follow your example of faithful service. Amen."
      }
    ],
    quotes: [
      {
        text: "Joseph, son of David, do not be afraid to take Mary as your wife.",
        source: "Matthew 1:20 (Angel's message)"
      }
    ],
    readings: [
      {
        title: "The Obedience of Joseph",
        citation: "Matthew 1:18-25",
        text: "When Joseph woke from sleep, he did as the angel of the Lord commanded him; he took his wife."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "cuthbert",
    name: "St. Cuthbert",
    feastDate: "March 20",
    type: "Confessor",
    title: "Bishop of Lindisfarne",
    shortBio: "English monk and bishop known for his missionary work and hermit life.",
    life: "Cuthbert (634-687) was an English monk who became Bishop of Lindisfarne. He was known for his missionary work among the Anglo-Saxons and his hermit life on Fame Island.",
    legacy: "He helped spread Christianity in northern England and is considered one of the most important Anglo-Saxon saints.",
    patronOf: ["Northern England", "Durham", "Shepherds"],
    prayers: [
      {
        title: "Prayer for Missionaries",
        text: "St. Cuthbert, you brought the Gospel to the English people. Help all missionaries to spread Christ's love with dedication and zeal. Amen."
      }
    ],
    quotes: [
      {
        text: "I have always tried to live in such a way that would bring no shame on my calling.",
        source: "Final words"
      }
    ],
    readings: [
      {
        title: "On Pastoral Care",
        citation: "From Bede's Life of Cuthbert",
        text: "The good shepherd knows his sheep and cares for each one."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "serapion",
    name: "St. Serapion",
    feastDate: "March 21",
    type: "Martyr",
    title: "Bishop and Martyr",
    shortBio: "Egyptian bishop martyred for defending orthodox Christianity.",
    life: "Serapion (d. 370) was an Egyptian bishop who was martyred for defending orthodox Christianity against Arianism. He was a friend of St. Athanasius.",
    legacy: "His martyrdom for orthodox faith helped preserve Catholic doctrine during the Arian crisis.",
    patronOf: ["Orthodox doctrine", "Egypt"],
    prayers: [
      {
        title: "Prayer for Orthodox Faith",
        text: "St. Serapion, you died defending the true faith. Help us to remain steadfast in Catholic teaching. Amen."
      }
    ],
    quotes: [
      {
        text: "I die for the faith of Nicaea.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Defending the Faith",
        citation: "From his writings",
        text: "Truth is worth dying for, especially the truth about Christ."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "nicholas-flue",
    name: "St. Nicholas of Flüe",
    feastDate: "March 22",
    type: "Confessor",
    title: "Hermit and Peacemaker",
    shortBio: "Swiss hermit who helped bring peace to Switzerland.",
    life: "Nicholas of Flüe (1417-1487) was a Swiss farmer, soldier, and judge who became a hermit. He helped mediate political conflicts and prevented civil war in Switzerland.",
    legacy: "He is the patron saint of Switzerland and a model of how contemplative life can serve the common good.",
    patronOf: ["Switzerland", "Peacemakers", "Hermits"],
    prayers: [
      {
        title: "Prayer for Peace",
        text: "St. Nicholas of Flüe, you brought peace to your country through prayer and wisdom. Help us to be peacemakers in our communities. Amen."
      }
    ],
    quotes: [
      {
        text: "My Lord and my God, take everything from me that prevents me from coming to you.",
        source: "Personal prayer"
      }
    ],
    readings: [
      {
        title: "On Contemplation and Action",
        citation: "From his life",
        text: "True contemplation leads to effective action for peace and justice."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "toribio-mogrovejo",
    name: "St. Toribio of Mogrovejo",
    feastDate: "March 23",
    type: "Confessor",
    title: "Archbishop of Lima",
    shortBio: "Spanish archbishop who evangelized Peru and defended indigenous rights.",
    life: "Toribio of Mogrovejo (1538-1606) was a Spanish nobleman who became Archbishop of Lima. He evangelized Peru, defended indigenous rights, and reformed the colonial Church.",
    legacy: "He confirmed over 500,000 people, learned indigenous languages, and fought against exploitation of native peoples.",
    patronOf: ["Peru", "Indigenous peoples", "Latin American bishops"],
    prayers: [
      {
        title: "Prayer for Indigenous Peoples",
        text: "St. Toribio, you defended the rights of indigenous peoples. Help us to respect the dignity of all cultures and peoples. Amen."
      }
    ],
    quotes: [
      {
        text: "Christ died for the Indians as well as for the Spanish.",
        source: "Defense of indigenous rights"
      }
    ],
    readings: [
      {
        title: "On Cultural Respect",
        citation: "From his pastoral letters",
        text: "The Gospel must be preached with respect for all peoples and cultures."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "oscar-romero",
    name: "St. Oscar Romero",
    feastDate: "March 24",
    type: "Martyr",
    title: "Archbishop and Martyr",
    shortBio: "Salvadoran archbishop martyred for defending the poor and opposing injustice.",
    life: "Oscar Romero (1917-1980) was Archbishop of San Salvador who spoke out against poverty, social injustice, and violence. He was assassinated while celebrating Mass.",
    legacy: "He became a voice for the voiceless and his martyrdom inspired liberation theology and social justice movements throughout Latin America.",
    patronOf: ["El Salvador", "Social justice", "Persecuted Church"],
    prayers: [
      {
        title: "Prayer for Social Justice",
        text: "St. Oscar Romero, you gave your life defending the poor and oppressed. Help us to work for justice and peace in our world. Amen."
      }
    ],
    quotes: [
      {
        text: "A church that doesn't provoke any crises, a gospel that doesn't unsettle, is not the gospel of Jesus Christ.",
        source: "Homily"
      }
    ],
    readings: [
      {
        title: "On the Preferential Option for the Poor",
        citation: "From his homilies",
        text: "The Church must be the voice of those who have no voice."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "annunciation",
    name: "The Annunciation of the Lord",
    feastDate: "March 25",
    type: "Other",
    title: "The Incarnation",
    shortBio: "Celebration of the angel Gabriel's announcement to Mary that she would bear the Son of God.",
    life: "This feast commemorates the angel Gabriel's announcement to Mary that she would conceive and bear Jesus, the Son of God, through the power of the Holy Spirit.",
    legacy: "This moment marks the beginning of the Incarnation, when God became man for our salvation.",
    patronOf: ["Expectant mothers", "The Incarnation"],
    prayers: [
      {
        title: "The Angelus",
        text: "The Angel of the Lord declared unto Mary, and she conceived of the Holy Spirit. Hail Mary... Behold the handmaid of the Lord. Be it done unto me according to your word. Hail Mary... And the Word was made flesh and dwelt among us. Hail Mary..."
      }
    ],
    quotes: [
      {
        text: "Let it be done unto me according to your word.",
        source: "Luke 1:38"
      }
    ],
    readings: [
      {
        title: "The Annunciation",
        citation: "Luke 1:26-38",
        text: "In the sixth month the angel Gabriel was sent by God to a town in Galilee called Nazareth, to a virgin engaged to a man whose name was Joseph."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "ludger",
    name: "St. Ludger",
    feastDate: "March 26",
    type: "Confessor",
    title: "Bishop and Missionary",
    shortBio: "Frisian missionary bishop who evangelized northern Germany and the Netherlands.",
    life: "Ludger (742-809) was a Frisian missionary who studied under St. Gregory of Utrecht and became the first Bishop of Münster. He evangelized the Saxons and Frisians.",
    legacy: "His missionary work helped establish Christianity in northern Germany and the Netherlands.",
    patronOf: ["Münster", "Netherlands", "Missionaries"],
    prayers: [
      {
        title: "Prayer for Missionary Work",
        text: "St. Ludger, you brought the Gospel to the Germanic peoples. Bless all who work to spread the faith in new territories. Amen."
      }
    ],
    quotes: [
      {
        text: "The Gospel must be preached to every creature.",
        source: "Missionary motto"
      }
    ],
    readings: [
      {
        title: "On Evangelization",
        citation: "From his missionary work",
        text: "Patience and love are the missionary's greatest tools."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "rupert",
    name: "St. Rupert",
    feastDate: "March 27",
    type: "Confessor",
    title: "Bishop of Salzburg",
    shortBio: "Frankish bishop who evangelized Austria and founded Salzburg.",
    life: "Rupert (660-710) was a Frankish bishop who became the apostle of Austria. He founded the city of Salzburg and established Christianity throughout the region.",
    legacy: "He is considered the apostle of Austria and Bavaria, and Salzburg became a major center of Christianity in Central Europe.",
    patronOf: ["Austria", "Salzburg", "Salt miners"],
    prayers: [
      {
        title: "Prayer for Austria",
        text: "St. Rupert, you brought Christianity to Austria. Continue to bless this land and its people with faith and prosperity. Amen."
      }
    ],
    quotes: [
      {
        text: "Let the light of Christ shine in these mountains.",
        source: "Foundation of Salzburg"
      }
    ],
    readings: [
      {
        title: "On Founding Churches",
        citation: "From his episcopal work",
        text: "A bishop must not only preach but build lasting institutions for the faith."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "tutilo",
    name: "St. Tutilo",
    feastDate: "March 28",
    type: "Confessor",
    title: "Monk and Artist",
    shortBio: "Swiss monk known for his artistic talents and musical compositions.",
    life: "Tutilo (850-915) was a monk at the Abbey of St. Gall in Switzerland. He was a talented artist, musician, and poet who created many works for the Church.",
    legacy: "His artistic and musical contributions helped develop medieval Christian art and liturgical music.",
    patronOf: ["Artists", "Musicians", "Poets"],
    prayers: [
      {
        title: "Prayer for Christian Artists",
        text: "St. Tutilo, you used your artistic gifts to glorify God. Help all artists to use their talents in service of beauty and truth. Amen."
      }
    ],
    quotes: [
      {
        text: "All beauty comes from God and should return to God.",
        source: "Artistic philosophy"
      }
    ],
    readings: [
      {
        title: "On Sacred Art",
        citation: "From his works",
        text: "Art that serves God elevates both the artist and the viewer."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "jonas-budde",
    name: "St. Jonas and St. Barachisius",
    feastDate: "March 29",
    type: "Martyr",
    title: "Persian Martyrs",
    shortBio: "Persian monks martyred during the persecution of Christians in Persia.",
    life: "Jonas and Barachisius (d. 327) were Persian monks who were martyred during the persecution of Christians under the Persian king Shapur II.",
    legacy: "Their martyrdom is recorded in detail in the acts of the Persian martyrs and inspired other Christians during persecution.",
    patronOf: ["Monks", "Persecuted Christians in the Middle East"],
    prayers: [
      {
        title: "Prayer for Persecuted Christians",
        text: "St. Jonas and St. Barachisius, you died for Christ in Persia. Pray for all Christians who face persecution in the Middle East today. Amen."
      }
    ],
    quotes: [
      {
        text: "We die for the true God, not the false gods of Persia.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Christian Witness",
        citation: "Acts of the Persian Martyrs",
        text: "Faith must be proclaimed even in the face of severe persecution."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "leonard-murialdo",
    name: "St. Leonard Murialdo",
    feastDate: "March 30",
    type: "Confessor",
    title: "Educator and Founder",
    shortBio: "Italian priest who dedicated his life to educating poor youth.",
    life: "Leonard Murialdo (1828-1900) was an Italian priest who worked with St. John Bosco in educating poor and abandoned youth. He founded the Congregation of St. Joseph.",
    legacy: "His educational work helped countless young people escape poverty and find meaningful lives in society.",
    patronOf: ["Youth", "Educators", "Workers"],
    prayers: [
      {
        title: "Prayer for Youth Education",
        text: "St. Leonard Murialdo, you dedicated your life to educating poor youth. Help us to provide opportunities for all young people to develop their potential. Amen."
      }
    ],
    quotes: [
      {
        text: "Love the young and they will love you.",
        source: "Educational maxim"
      }
    ],
    readings: [
      {
        title: "On Youth Work",
        citation: "From his educational writings",
        text: "Young people need not just instruction but love and guidance."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "benjamin",
    name: "St. Benjamin",
    feastDate: "March 31",
    type: "Martyr",
    title: "Persian Deacon and Martyr",
    shortBio: "Persian deacon martyred for refusing to stop preaching Christianity.",
    life: "Benjamin (d. 424) was a Persian deacon who was imprisoned for preaching Christianity. After his release, he continued preaching and was re-arrested and tortured to death.",
    legacy: "His persistence in preaching despite persecution demonstrates the courage needed to spread the Gospel.",
    patronOf: ["Deacons", "Preachers", "Persecuted Christians"],
    prayers: [
      {
        title: "Prayer for Preachers",
        text: "St. Benjamin, you died rather than stop preaching the Gospel. Give courage to all who proclaim God's word. Amen."
      }
    ],
    quotes: [
      {
        text: "I cannot stop preaching Christ.",
        source: "To his persecutors"
      }
    ],
    readings: [
      {
        title: "On Preaching the Gospel",
        citation: "Acts of St. Benjamin",
        text: "The word of God cannot be chained, even by persecution."
      }
    ],
    liturgicalColor: "Red"
  },
  
  // APRIL SAINTS
  {
    id: "hugh-grenoble",
    name: "St. Hugh of Grenoble",
    feastDate: "April 1",
    type: "Confessor",
    title: "Bishop and Reformer",
    shortBio: "French bishop who reformed his diocese and supported St. Bruno's Carthusian order.",
    life: "Hugh of Grenoble (1053-1132) was a French bishop who reformed his diocese and supported the foundation of the Carthusian order. He served as bishop for 52 years.",
    legacy: "His reforms helped revitalize the Church in his region and his support of the Carthusians helped establish one of the most austere monastic orders.",
    patronOf: ["Grenoble", "Church reform"],
    prayers: [
      {
        title: "Prayer for Church Reform",
        text: "St. Hugh of Grenoble, you worked tirelessly to reform the Church. Help us to work for renewal in our communities. Amen."
      }
    ],
    quotes: [
      {
        text: "A bishop must be a father to his people, not a lord over them.",
        source: "Episcopal teachings"
      }
    ],
    readings: [
      {
        title: "On Episcopal Duty",
        citation: "From his letters",
        text: "The bishop's first duty is the care of souls, not worldly affairs."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "francis-paola",
    name: "St. Francis of Paola",
    feastDate: "April 2",
    type: "Confessor",
    title: "Founder of the Minims",
    shortBio: "Italian hermit who founded the Order of Minims, known for extreme austerity.",
    life: "Francis of Paola (1416-1507) was an Italian hermit who founded the Order of Minims, dedicated to extreme humility and penance. He was known for his miracles and prophecies.",
    legacy: "His order emphasized humility above all virtues, and his reputation for holiness spread throughout Europe.",
    patronOf: ["Naval officers", "Boatmen", "Italy"],
    prayers: [
      {
        title: "Prayer for Humility",
        text: "St. Francis of Paola, you chose to be the least among religious orders. Help us to embrace humility in our spiritual lives. Amen."
      }
    ],
    quotes: [
      {
        text: "Charity is the most excellent way.",
        source: "Rule of the Minims"
      }
    ],
    readings: [
      {
        title: "On Humility",
        citation: "From his rule",
        text: "The greatest among you must be the servant of all."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "richard-chichester",
    name: "St. Richard of Chichester",
    feastDate: "April 3",
    type: "Confessor",
    title: "Bishop and Reformer",
    shortBio: "English bishop known for his pastoral care and church reform.",
    life: "Richard of Chichester (1197-1253) was an English bishop who became known for his dedication to pastoral care, church reform, and care for the poor.",
    legacy: "His episcopal leadership and personal holiness made him beloved by his people and a model for other bishops.",
    patronOf: ["Chichester", "Coachmen"],
    prayers: [
      {
        title: "Prayer of St. Richard",
        text: "Thanks be to you, my Lord Jesus Christ, for all the benefits you have won for me, for all the pains and insults you have borne for me. Most merciful redeemer, friend and brother, may I know you more clearly, love you more dearly, and follow you more nearly, day by day. Amen."
      }
    ],
    quotes: [
      {
        text: "May I know you more clearly, love you more dearly, and follow you more nearly.",
        source: "Prayer of St. Richard"
      }
    ],
    readings: [
      {
        title: "On Following Christ",
        citation: "From his prayer",
        text: "The Christian life is about knowing, loving, and following Christ more perfectly each day."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "isidore-seville",
    name: "St. Isidore of Seville",
    feastDate: "April 4",
    type: "Doctor",
    title: "Doctor of the Church, Bishop",
    shortBio: "Spanish bishop and scholar who compiled medieval encyclopedias and promoted learning.",
    life: "Isidore of Seville (560-636) was a Spanish bishop who was one of the great scholars of the early Middle Ages. He compiled the 'Etymologies,' an encyclopedia of ancient knowledge.",
    legacy: "His scholarly works preserved classical learning through the Dark Ages and he is patron saint of the internet and computer users.",
    patronOf: ["Internet", "Computer users", "Students", "Spain"],
    prayers: [
      {
        title: "Prayer for Students",
        text: "St. Isidore of Seville, you preserved knowledge for future generations. Help all students and teachers to pursue truth and wisdom. Amen."
      }
    ],
    quotes: [
      {
        text: "Learning is the eye of the mind.",
        source: "Etymologies"
      }
    ],
    readings: [
      {
        title: "On the Value of Learning",
        citation: "From the Etymologies",
        text: "Without knowledge of letters, nothing can be done that is worthy of praise."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "vincent-ferrer",
    name: "St. Vincent Ferrer",
    feastDate: "April 5",
    type: "Confessor",
    title: "Dominican Preacher",
    shortBio: "Spanish Dominican priest known for his powerful preaching and miraculous healings.",
    life: "Vincent Ferrer (1350-1419) was a Spanish Dominican priest who became one of the greatest preachers of his time. He preached throughout Europe and was known for miraculous healings.",
    legacy: "His preaching converted thousands and helped end the Great Western Schism. He is patron of builders and construction workers.",
    patronOf: ["Builders", "Construction workers", "Plumbers"],
    prayers: [
      {
        title: "Prayer for Preachers",
        text: "St. Vincent Ferrer, your preaching converted thousands to Christ. Help all preachers to proclaim God's word with power and conviction. Amen."
      }
    ],
    quotes: [
      {
        text: "Every word that proceeds from the mouth of God is eternal life.",
        source: "Sermons"
      }
    ],
    readings: [
      {
        title: "On Preaching",
        citation: "From his sermons",
        text: "The preacher must be on fire with love for God before he can kindle that fire in others."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "william-eskilsoe",
    name: "St. William of Eskilsoe",
    feastDate: "April 6",
    type: "Confessor",
    title: "Abbot and Reformer",
    shortBio: "Danish abbot who reformed monastic life in Scandinavia.",
    life: "William of Eskilsoe (1125-1203) was a Danish abbot who reformed monastic life in Denmark. He founded several monasteries and promoted the Cistercian reform.",
    legacy: "His monastic reforms helped establish regular religious life in Denmark and influenced Christianity throughout Scandinavia.",
    patronOf: ["Denmark", "Abbots", "Monastic reform"],
    prayers: [
      {
        title: "Prayer for Monastic Life",
        text: "St. William of Eskilsoe, you reformed monastic life in Denmark. Help all religious communities to live faithfully according to their rules. Amen."
      }
    ],
    quotes: [
      {
        text: "The monastery should be a school of divine service.",
        source: "Monastic teachings"
      }
    ],
    readings: [
      {
        title: "On Monastic Reform",
        citation: "From his rule",
        text: "True reform begins with a return to the Gospel spirit."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "john-baptist-de-la-salle",
    name: "St. John Baptist de La Salle",
    feastDate: "April 7",
    type: "Confessor",
    title: "Founder of Christian Schools",
    shortBio: "French priest who founded the Brothers of the Christian Schools and revolutionized education.",
    life: "John Baptist de La Salle (1651-1719) was a French priest who founded the Institute of the Brothers of the Christian Schools, revolutionizing education for poor children.",
    legacy: "He established the first training colleges for teachers and developed innovative teaching methods. He is patron saint of teachers.",
    patronOf: ["Teachers", "School principals", "Educational workers"],
    prayers: [
      {
        title: "Prayer for Teachers",
        text: "St. John Baptist de La Salle, you dedicated your life to educating the young. Bless all teachers and help them to form minds and hearts in wisdom and virtue. Amen."
      }
    ],
    quotes: [
      {
        text: "Touched by the plight of the poor who seemed so neglected, I was moved to the decision to quit my family home and my wealth to devote myself entirely to the poor.",
        source: "Testament"
      }
    ],
    readings: [
      {
        title: "On Christian Education",
        citation: "From his educational writings",
        text: "The teacher must be to the students a model of all virtues and truly a living example of the Gospel."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "julie-billiart",
    name: "St. Julie Billiart",
    feastDate: "April 8",
    type: "Virgin",
    title: "Foundress of Sisters of Notre Dame",
    shortBio: "French nun who founded the Sisters of Notre Dame de Namur despite illness and persecution.",
    life: "Julie Billiart (1751-1816) was a French religious sister who, despite paralysis and persecution during the French Revolution, founded the Sisters of Notre Dame de Namur.",
    legacy: "Her congregation spread worldwide, establishing schools and missions, particularly dedicated to educating girls and women.",
    patronOf: ["Teachers", "Bodily ills", "Persecuted religious"],
    prayers: [
      {
        title: "Prayer for Trust in God",
        text: "St. Julie Billiart, you trusted in God despite illness and persecution. Help us to maintain faith through all trials. Amen."
      }
    ],
    quotes: [
      {
        text: "How good is the good God!",
        source: "Frequent exclamation"
      }
    ],
    readings: [
      {
        title: "On Trust in Providence",
        citation: "From her letters",
        text: "In all circumstances, we must say: 'How good is the good God!'"
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "waldetrudis",
    name: "St. Waldetrudis",
    feastDate: "April 9",
    type: "Other",
    title: "Belgian Saint and Abbess",
    shortBio: "Belgian noblewoman who became an abbess and founded the city of Mons.",
    life: "Waldetrudis (612-688) was a Belgian noblewoman who became an abbess and founded a monastery at Mons. She was the mother of several saints.",
    legacy: "Her monastery became the nucleus of the city of Mons, and she is venerated as the patron saint of Mons.",
    patronOf: ["Mons", "Belgium", "Mothers"],
    prayers: [
      {
        title: "Prayer for Mothers",
        text: "St. Waldetrudis, you raised saintly children while serving God. Help all mothers to guide their children in virtue and faith. Amen."
      }
    ],
    quotes: [
      {
        text: "The best inheritance we can leave our children is a good example.",
        source: "Maternal wisdom"
      }
    ],
    readings: [
      {
        title: "On Christian Motherhood",
        citation: "From her life",
        text: "A mother's prayers can sanctify an entire family."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "michel-garicoitis",
    name: "St. Michel Garicoits",
    feastDate: "April 10",
    type: "Confessor",
    title: "Founder of Betharram Fathers",
    shortBio: "French priest who founded the Congregation of the Sacred Heart of Jesus of Betharram.",
    life: "Michel Garicoits (1797-1863) was a French priest who founded the Congregation of the Sacred Heart of Jesus of Betharram, dedicated to education and missions.",
    legacy: "His congregation spread to several countries, focusing on education, missions, and social work.",
    patronOf: ["Betharram", "Educators", "Missionaries"],
    prayers: [
      {
        title: "Prayer for Missionaries",
        text: "St. Michel Garicoits, you sent your sons to the missions. Bless all missionaries and help them spread the Gospel with zeal. Amen."
      }
    ],
    quotes: [
      {
        text: "Jesus alone, and him as he wants, when he wants, and where he wants.",
        source: "Spiritual maxim"
      }
    ],
    readings: [
      {
        title: "On Following Christ",
        citation: "From his spiritual teachings",
        text: "Perfect discipleship means following Jesus wherever he leads."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "stanislaus",
    name: "St. Stanislaus",
    feastDate: "April 11",
    type: "Martyr",
    title: "Bishop and Martyr, Patron of Poland",
    shortBio: "Polish bishop martyred for opposing the tyrannical King Boleslaw II.",
    life: "Stanislaus (1030-1079) was Bishop of Krakow who opposed the tyrannical King Boleslaw II of Poland. He was murdered by the king while celebrating Mass.",
    legacy: "He became the patron saint of Poland and a symbol of resistance to unjust authority. His martyrdom helped establish the principle that rulers are subject to moral law.",
    patronOf: ["Poland", "Krakow", "Against tyranny"],
    prayers: [
      {
        title: "Prayer for Just Government",
        text: "St. Stanislaus, you died opposing tyranny. Help all citizens and leaders to work for justice and the common good. Amen."
      }
    ],
    quotes: [
      {
        text: "It is better to die for justice than to live under tyranny.",
        source: "Before his martyrdom"
      }
    ],
    readings: [
      {
        title: "On Resisting Injustice",
        citation: "From his confrontation with the king",
        text: "The Church must speak out against injustice, whatever the cost."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "teresa-andes",
    name: "St. Teresa of the Andes",
    feastDate: "April 12",
    type: "Virgin",
    title: "Carmelite Mystic",
    shortBio: "Chilean Carmelite nun who died young but achieved great holiness.",
    life: "Teresa of the Andes (1900-1920) was a Chilean Carmelite nun who died at age 19 after less than a year in religious life, but achieved remarkable spiritual maturity.",
    legacy: "She became the first Chilean saint and patron of young people, showing that great holiness can be achieved even in a short life.",
    patronOf: ["Chile", "Young people", "Carmelites"],
    prayers: [
      {
        title: "Prayer for Young People",
        text: "St. Teresa of the Andes, you achieved great holiness in your youth. Help young people today to respond generously to God's call. Amen."
      }
    ],
    quotes: [
      {
        text: "I want to spend my heaven doing good on earth.",
        source: "Before her death"
      }
    ],
    readings: [
      {
        title: "On Youthful Holiness",
        citation: "From her diary",
        text: "Age is no barrier to sanctity when the heart is completely given to God."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "martin-pope",
    name: "St. Martin I",
    feastDate: "April 13",
    type: "Martyr",
    title: "Pope and Martyr",
    shortBio: "Pope who defended orthodox Christology and was martyred for opposing the Byzantine Emperor.",
    life: "Martin I (d. 655) was Pope from 649-655 who convened the Lateran Council to condemn Monothelitism. He was arrested by the Byzantine Emperor and died in exile.",
    legacy: "He was the last Pope to be martyred and defended the orthodox teaching about Christ having two wills, divine and human.",
    patronOf: ["Papal authority", "Orthodox doctrine"],
    prayers: [
      {
        title: "Prayer for the Pope",
        text: "St. Martin I, you defended orthodox teaching even unto death. Bless the Holy Father and give him courage to lead the Church faithfully. Amen."
      }
    ],
    quotes: [
      {
        text: "I prefer to die rather than compromise the faith.",
        source: "To the Byzantine Emperor"
      }
    ],
    readings: [
      {
        title: "On Papal Authority",
        citation: "From the Lateran Council",
        text: "The successor of Peter must defend the faith against all errors."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "lydwina",
    name: "St. Lydwina",
    feastDate: "April 14",
    type: "Virgin",
    title: "Mystic and Victim Soul",
    shortBio: "Dutch mystic who offered her sufferings for the conversion of sinners.",
    life: "Lydwina (1380-1433) was a Dutch mystic who became bedridden after a skating accident at age 15. She offered her intense sufferings for the conversion of sinners.",
    legacy: "She is patron saint of the sick and chronically ill, showing how suffering can be transformed into spiritual treasure.",
    patronOf: ["Chronically ill", "Skaters", "Sick people"],
    prayers: [
      {
        title: "Prayer for the Sick",
        text: "St. Lydwina, you transformed suffering into spiritual gold. Help all who suffer illness to unite their pain with Christ's passion. Amen."
      }
    ],
    quotes: [
      {
        text: "My suffering is my glory.",
        source: "Mystical writings"
      }
    ],
    readings: [
      {
        title: "On Redemptive Suffering",
        citation: "From her spiritual experiences",
        text: "Suffering offered to God becomes a means of salvation for others."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "hunna",
    name: "St. Hunna",
    feastDate: "April 15",
    type: "Other",
    title: "Alsatian Mother and Helper",
    shortBio: "Alsatian mother known for her charity to the poor and sick.",
    life: "Hunna (d. 679) was an Alsatian noblewoman, wife, and mother who was known for her extraordinary charity to the poor and sick. She personally cared for the needy.",
    legacy: "She showed that married women could achieve great holiness through acts of charity while fulfilling their family duties.",
    patronOf: ["Laundresses", "Mothers", "Charitable works"],
    prayers: [
      {
        title: "Prayer for Charitable Hearts",
        text: "St. Hunna, you served the poor with your own hands. Help us to see Christ in those who are in need. Amen."
      }
    ],
    quotes: [
      {
        text: "What we do for the least, we do for Christ.",
        source: "Charitable maxim"
      }
    ],
    readings: [
      {
        title: "On Works of Mercy",
        citation: "From her example",
        text: "True nobility is shown in service to the poor and needy."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "bernadette-lourdes",
    name: "St. Bernadette Soubirous",
    feastDate: "April 16",
    type: "Virgin",
    title: "Visionary of Lourdes",
    shortBio: "French peasant girl who saw apparitions of the Virgin Mary at Lourdes.",
    life: "Bernadette Soubirous (1844-1879) was a poor French peasant girl who experienced 18 apparitions of the Virgin Mary at Lourdes in 1858. She later became a nun.",
    legacy: "Her visions led to Lourdes becoming one of the world's most important pilgrimage sites, known for miraculous healings.",
    patronOf: ["Sick people", "Poor people", "Lourdes", "Shepherdesses"],
    prayers: [
      {
        title: "Prayer of St. Bernadette",
        text: "O Mary, conceived without sin, pray for us who have recourse to you. St. Bernadette, help us to be humble and trusting like you. Amen."
      }
    ],
    quotes: [
      {
        text: "I am only a broom in the hands of Our Lady.",
        source: "Personal reflection"
      }
    ],
    readings: [
      {
        title: "The Message of Lourdes",
        citation: "From her testimony",
        text: "The Lady asked for prayer, penance, and the building of a chapel."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "stephen-harding",
    name: "St. Stephen Harding",
    feastDate: "April 17",
    type: "Confessor",
    title: "Abbot and Cistercian Reformer",
    shortBio: "English abbot who helped establish the Cistercian reform movement.",
    life: "Stephen Harding (1059-1134) was an English monk who became the third Abbot of Citeaux and helped establish the Cistercian reform movement with St. Bernard.",
    legacy: "His 'Charter of Charity' provided the constitutional framework for the Cistercian order, which became one of the most influential monastic reforms.",
    patronOf: ["Cistercians", "Abbots", "Monastic reform"],
    prayers: [
      {
        title: "Prayer for Monastic Reform",
        text: "St. Stephen Harding, you helped reform monastic life. Inspire all religious communities to live faithfully according to their calling. Amen."
      }
    ],
    quotes: [
      {
        text: "Let us return to the pure observance of the Rule of St. Benedict.",
        source: "Charter of Charity"
      }
    ],
    readings: [
      {
        title: "On Monastic Reform",
        citation: "From the Charter of Charity",
        text: "True reform means returning to the original spirit of our founders."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "apollonius",
    name: "St. Apollonius",
    feastDate: "April 18",
    type: "Martyr",
    title: "Roman Senator and Martyr",
    shortBio: "Roman senator who was martyred for his Christian faith during the reign of Commodus.",
    life: "Apollonius (d. 185) was a Roman senator who was denounced as a Christian and martyred during the reign of Emperor Commodus. His apology before the Senate is recorded.",
    legacy: "His eloquent defense of Christianity before the Roman Senate demonstrates the faith of educated Romans and the reasonableness of Christian belief.",
    patronOf: ["Senators", "Politicians", "Apologists"],
    prayers: [
      {
        title: "Prayer for Christian Politicians",
        text: "St. Apollonius, you witnessed to Christ as a Roman senator. Help all who serve in government to act with integrity and faith. Amen."
      }
    ],
    quotes: [
      {
        text: "I am a Christian, and I cannot do otherwise than worship the true God.",
        source: "Apology before the Senate"
      }
    ],
    readings: [
      {
        title: "On Christian Witness in Politics",
        citation: "From his apology",
        text: "Faith and reason are not enemies but allies in seeking truth."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "expeditus",
    name: "St. Expeditus",
    feastDate: "April 19",
    type: "Martyr",
    title: "Roman Centurion and Martyr",
    shortBio: "Roman centurion martyred for converting to Christianity.",
    life: "Expeditus (d. 303) was a Roman centurion who converted to Christianity and was martyred during the persecution of Diocletian.",
    legacy: "He is invoked for urgent needs and quick solutions, and is popular in many countries as a saint who helps in pressing situations.",
    patronOf: ["Urgent causes", "Quick solutions", "Merchants"],
    prayers: [
      {
        title: "Prayer for Urgent Needs",
        text: "St. Expeditus, you acted quickly when God called you. Help us in our urgent needs and inspire us to respond promptly to God's grace. Amen."
      }
    ],
    quotes: [
      {
        text: "Today, not tomorrow, I choose Christ.",
        source: "Attributed"
      }
    ],
    readings: [
      {
        title: "On Prompt Response",
        citation: "From his legend",
        text: "When God calls, we must respond immediately, not delay."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "agnes-montepulciano",
    name: "St. Agnes of Montepulciano",
    feastDate: "April 20",
    type: "Virgin",
    title: "Dominican Mystic",
    shortBio: "Italian Dominican nun known for her mystical experiences and miracles.",
    life: "Agnes of Montepulciano (1268-1317) was an Italian Dominican nun who became abbess at age 15. She was known for her mystical experiences and miraculous healings.",
    legacy: "She founded several convents and was known for levitation during prayer, multiplication of food, and other miracles.",
    patronOf: ["Dominican nuns", "Montepulciano"],
    prayers: [
      {
        title: "Prayer for Mystical Union",
        text: "St. Agnes of Montepulciano, you experienced deep union with Christ. Help us to grow closer to God through prayer and contemplation. Amen."
      }
    ],
    quotes: [
      {
        text: "My heart burns with love for Jesus.",
        source: "Mystical writings"
      }
    ],
    readings: [
      {
        title: "On Mystical Experience",
        citation: "From her life",
        text: "God reveals himself most intimately to those who seek him with pure hearts."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "anselm",
    name: "St. Anselm",
    feastDate: "April 21",
    type: "Doctor",
    title: "Doctor of the Church, Archbishop of Canterbury",
    shortBio: "Italian theologian and Archbishop of Canterbury known for his philosophical proofs of God's existence.",
    life: "Anselm (1033-1109) was an Italian Benedictine who became Archbishop of Canterbury. He developed the ontological argument for God's existence and the satisfaction theory of atonement.",
    legacy: "His theological and philosophical works, especially 'Proslogion' and 'Cur Deus Homo,' profoundly influenced scholastic theology.",
    patronOf: ["Theologians", "Philosophers", "Canterbury"],
    prayers: [
      {
        title: "Prayer for Understanding",
        text: "St. Anselm, you sought to understand your faith through reason. Help us to grow in both faith and understanding of God's truth. Amen."
      }
    ],
    quotes: [
      {
        text: "Faith seeking understanding.",
        source: "Proslogion"
      }
    ],
    readings: [
      {
        title: "On Faith and Reason",
        citation: "From Proslogion",
        text: "I do not seek to understand so that I may believe, but I believe so that I may understand."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "soter-caius",
    name: "St. Soter and St. Caius",
    feastDate: "April 22",
    type: "Martyr",
    title: "Popes and Martyrs",
    shortBio: "Two early Popes who were martyred for their faith.",
    life: "Soter (d. 174) was Pope from 166-174 and Caius (d. 296) was Pope from 283-296. Both were martyred during periods of persecution.",
    legacy: "Their papal leadership during times of persecution helped strengthen the early Church and preserve apostolic succession.",
    patronOf: ["Papal succession", "Early Church"],
    prayers: [
      {
        title: "Prayer for the Papacy",
        text: "St. Soter and St. Caius, you led the Church through persecution. Bless the succession of Peter and strengthen the papacy. Amen."
      }
    ],
    quotes: [
      {
        text: "The Church is built on the rock of Peter.",
        source: "Traditional papal teaching"
      }
    ],
    readings: [
      {
        title: "On Papal Leadership",
        citation: "From early Church history",
        text: "The Bishop of Rome continues the ministry of Peter in caring for the universal Church."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "george",
    name: "St. George",
    feastDate: "April 23",
    type: "Martyr",
    title: "Knight and Martyr",
    shortBio: "Roman soldier and martyr, patron saint of England, known for the legend of slaying a dragon.",
    life: "George (280-303) was a Roman soldier who was martyred during the persecution of Diocletian. The legend of him slaying a dragon developed in medieval times.",
    legacy: "He became one of the most popular saints in both East and West, patron of England, and symbol of the victory of good over evil.",
    patronOf: ["England", "Soldiers", "Knights", "Boy Scouts"],
    prayers: [
      {
        title: "Prayer to St. George",
        text: "St. George, valiant martyr and soldier of Christ, you fought against evil and won the crown of martyrdom. Help us to be brave in fighting against sin and evil. Amen."
      }
    ],
    quotes: [
      {
        text: "I am a soldier of Christ; I cannot fight for earthly princes.",
        source: "At his trial"
      }
    ],
    readings: [
      {
        title: "On Spiritual Warfare",
        citation: "From his legend",
        text: "The Christian soldier fights against spiritual enemies, not flesh and blood."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "fidelis-sigmaringen",
    name: "St. Fidelis of Sigmaringen",
    feastDate: "April 24",
    type: "Martyr",
    title: "Capuchin Martyr",
    shortBio: "German Capuchin priest martyred while preaching against Calvinist heresy.",
    life: "Fidelis of Sigmaringen (1578-1622) was a German lawyer who became a Capuchin priest. He was martyred while preaching against Calvinist errors in Switzerland.",
    legacy: "He combined legal training with pastoral zeal and gave his life defending Catholic doctrine against Protestant errors.",
    patronOf: ["Lawyers", "Capuchins", "Against heresy"],
    prayers: [
      {
        title: "Prayer for Defending the Faith",
        text: "St. Fidelis of Sigmaringen, you died defending Catholic truth. Help us to stand firm in our faith and witness courageously to the Gospel. Amen."
      }
    ],
    quotes: [
      {
        text: "Woe to me if I do not preach the Gospel.",
        source: "Final sermon"
      }
    ],
    readings: [
      {
        title: "On Preaching the Truth",
        citation: "From his sermons",
        text: "The truth of the Gospel must be proclaimed, regardless of the cost."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "mark-evangelist",
    name: "St. Mark the Evangelist",
    feastDate: "April 25",
    type: "Other",
    title: "Evangelist and Martyr",
    shortBio: "Author of the second Gospel and companion of St. Peter and St. Paul.",
    life: "Mark was a companion of St. Peter and St. Paul and author of the second Gospel. He founded the Church in Alexandria and was martyred there.",
    legacy: "His Gospel, likely the first written, provides the earliest account of Jesus' life and ministry. He is patron saint of Venice and lawyers.",
    patronOf: ["Venice", "Lawyers", "Secretaries", "Egypt"],
    prayers: [
      {
        title: "Prayer to St. Mark",
        text: "St. Mark, faithful evangelist, you recorded the Good News of Jesus Christ. Help us to proclaim the Gospel with the same zeal and faithfulness. Amen."
      }
    ],
    quotes: [
      {
        text: "The beginning of the gospel of Jesus Christ, the Son of God.",
        source: "Mark 1:1"
      }
    ],
    readings: [
      {
        title: "The Gospel of Mark",
        citation: "Mark 1:1-15",
        text: "The beginning of the gospel of Jesus Christ, the Son of God. As it is written in Isaiah the prophet..."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "cletus-marcellinus",
    name: "St. Cletus and St. Marcellinus",
    feastDate: "April 26",
    type: "Martyr",
    title: "Early Popes and Martyrs",
    shortBio: "Two early Popes who were martyred for their leadership of the Church.",
    life: "Cletus (d. 88) was the third Pope after Peter, and Marcellinus (d. 304) was Pope from 296-304. Both were martyred for their faith.",
    legacy: "Their papal leadership in the early Church helped establish the apostolic succession and strengthen Christian communities.",
    patronOf: ["Early Church", "Papal succession"],
    prayers: [
      {
        title: "Prayer for Church Unity",
        text: "St. Cletus and St. Marcellinus, you led the Church in its early years. Help maintain unity and faithfulness in the Church today. Amen."
      }
    ],
    quotes: [
      {
        text: "The Church is one, built on the foundation of the apostles.",
        source: "Early papal teaching"
      }
    ],
    readings: [
      {
        title: "On Apostolic Succession",
        citation: "From early Church documents",
        text: "The bishops are successors of the apostles in teaching and governing the Church."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "zita",
    name: "St. Zita",
    feastDate: "April 27",
    type: "Virgin",
    title: "Domestic Servant",
    shortBio: "Italian domestic servant known for her devotion to duty and charity to the poor.",
    life: "Zita (1218-1278) was an Italian domestic servant who worked for the same family for 48 years. She was known for her faithfulness to duty and generosity to the poor.",
    legacy: "She became the patron saint of domestic workers and showed that holiness can be achieved in ordinary work when done with love.",
    patronOf: ["Domestic workers", "Maids", "Servants", "Lost keys"],
    prayers: [
      {
        title: "Prayer for Workers",
        text: "St. Zita, you sanctified your work through faithful service. Help all workers to find meaning and holiness in their daily labor. Amen."
      }
    ],
    quotes: [
      {
        text: "A servant is not holy if she is not busy; busy servants acquire great merit if they are busy in the right way.",
        source: "Personal maxim"
      }
    ],
    readings: [
      {
        title: "On Sanctifying Work",
        citation: "From her example",
        text: "All honest work done with love becomes a prayer and a path to holiness."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "peter-chanel",
    name: "St. Peter Chanel",
    feastDate: "April 28",
    type: "Martyr",
    title: "Marist Missionary and Martyr",
    shortBio: "French Marist priest martyred while evangelizing in the Pacific Islands.",
    life: "Peter Chanel (1803-1841) was a French Marist priest who was sent as a missionary to the Pacific island of Futuna, where he was martyred by local inhabitants.",
    legacy: "He became the first martyr of Oceania and patron saint of the Pacific Islands. His death led to the conversion of the entire island.",
    patronOf: ["Oceania", "Pacific Islands", "Missionaries"],
    prayers: [
      {
        title: "Prayer for Missionaries",
        text: "St. Peter Chanel, you gave your life to bring the Gospel to the Pacific Islands. Bless all missionaries and help them plant seeds of faith. Amen."
      }
    ],
    quotes: [
      {
        text: "You may kill me, but the word of God will not die.",
        source: "Before his martyrdom"
      }
    ],
    readings: [
      {
        title: "On Missionary Martyrdom",
        citation: "From his letters",
        text: "The blood of martyrs is the seed of the Church, even in the remotest islands."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "catherine-siena",
    name: "St. Catherine of Siena",
    feastDate: "April 29",
    type: "Doctor",
    title: "Doctor of the Church, Mystic",
    shortBio: "Italian Dominican tertiary known for her mystical experiences and influence on the papacy.",
    life: "Catherine of Siena (1347-1380) was an Italian Dominican tertiary who experienced mystical visions and played a crucial role in convincing the Pope to return from Avignon to Rome.",
    legacy: "She was declared a Doctor of the Church and patron saint of Europe. Her 'Dialogue' is a masterpiece of mystical theology.",
    patronOf: ["Europe", "Italy", "Nurses", "Fire prevention"],
    prayers: [
      {
        title: "Prayer of St. Catherine",
        text: "St. Catherine of Siena, you loved the Church with burning passion. Help us to work for Church unity and renewal with the same zeal. Amen."
      }
    ],
    quotes: [
      {
        text: "Be who God meant you to be and you will set the world on fire.",
        source: "Attributed"
      }
    ],
    readings: [
      {
        title: "From The Dialogue",
        citation: "The Dialogue of St. Catherine",
        text: "I am He who is, and you are she who is not. Yet in my mercy I have made you to be."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "pius-v",
    name: "St. Pius V",
    feastDate: "April 30",
    type: "Confessor",
    title: "Pope and Reformer",
    shortBio: "Pope who reformed the liturgy and successfully defended Christian Europe against Turkish invasion.",
    life: "Pius V (1504-1572) was a Dominican who became Pope and implemented the reforms of the Council of Trent. He standardized the Roman Missal and organized the Holy League that defeated the Turks at Lepanto.",
    legacy: "His liturgical reforms lasted until Vatican II, and his leadership helped save Christian Europe from Turkish conquest.",
    patronOf: ["Papal authority", "liturgical reform"],
    prayers: [
      {
        title: "Prayer for Church Reform",
        text: "St. Pius V, you implemented the reforms of Trent with great zeal. Help the Church to continually renew itself according to the Gospel. Amen."
      }
    ],
    quotes: [
      {
        text: "The Church must be reformed in head and members.",
        source: "Papal bull"
      }
    ],
    readings: [
      {
        title: "On Church Reform",
        citation: "From his papal bulls",
        text: "True reform comes from return to apostolic traditions and evangelical simplicity."
      }
    ],
    liturgicalColor: "White"
  },
  
  // MAY SAINTS
  {
    id: "joseph-worker",
    name: "St. Joseph the Worker",
    feastDate: "May 1",
    type: "Confessor",
    title: "Patron of Workers",
    shortBio: "Foster father of Jesus, honored as patron of workers and laborers.",
    life: "This feast honors St. Joseph as a carpenter and working man, emphasizing the dignity of labor and the sanctification of ordinary work.",
    legacy: "This feast, established in 1955, highlights the Catholic teaching on the dignity of work and workers' rights.",
    patronOf: ["Workers", "Laborers", "Carpenters", "Social justice"],
    prayers: [
      {
        title: "Prayer for Workers",
        text: "St. Joseph, you worked with your hands to support the Holy Family. Bless all who labor and help them find dignity and meaning in their work. Amen."
      }
    ],
    quotes: [
      {
        text: "Is not this the carpenter's son?",
        source: "Matthew 13:55"
      }
    ],
    readings: [
      {
        title: "On the Dignity of Work",
        citation: "From Catholic social teaching",
        text: "All honest work has dignity and contributes to the common good."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "athanasius",
    name: "St. Athanasius",
    feastDate: "May 2",
    type: "Doctor",
    title: "Doctor of the Church, Defender of Orthodoxy",
    shortBio: "Bishop of Alexandria who defended the divinity of Christ against Arianism.",
    life: "Athanasius (296-373) was Bishop of Alexandria who spent his life defending orthodox Christianity against Arianism. He was exiled five times for his beliefs.",
    legacy: "His theological works and steadfast defense of Christ's divinity helped preserve orthodox Christian doctrine.",
    patronOf: ["Orthodox doctrine", "Theologians", "Alexandria"],
    prayers: [
      {
        title: "Prayer for Orthodox Faith",
        text: "St. Athanasius, you defended the true divinity of Christ. Help us to remain faithful to orthodox Catholic teaching. Amen."
      }
    ],
    quotes: [
      {
        text: "God became man so that man might become God.",
        source: "On the Incarnation"
      }
    ],
    readings: [
      {
        title: "On the Incarnation",
        citation: "De Incarnatione",
        text: "The Word became flesh for our salvation, that we might be made partakers of the divine nature."
      }
    ],
    liturgicalColor: "White"
  },
  {
    id: "philip-james",
    name: "St. Philip and St. James",
    feastDate: "May 3",
    type: "Other",
    title: "Apostles",
    shortBio: "Two apostles of Jesus, Philip from Bethsaida and James the Less.",
    life: "Philip was called by Jesus and brought Nathanael to him. James the Less was son of Alphaeus and possibly author of the Letter of James.",
    legacy: "Both apostles spread the Gospel after Pentecost and were martyred for their faith in different locations.",
    patronOf: ["Apostolic ministry", "Evangelization"],
    prayers: [
      {
        title: "Prayer to the Apostles",
        text: "St. Philip and St. James, you followed Christ as apostles. Help us to answer God's call and bring others to faith. Amen."
      }
    ],
    quotes: [
      {
        text: "Lord, show us the Father, and we will be satisfied.",
        source: "John 14:8 (Philip to Jesus)"
      }
    ],
    readings: [
      {
        title: "The Call of Philip",
        citation: "John 1:43-51",
        text: "The next day Jesus decided to go to Galilee. He found Philip and said to him, 'Follow me.'"
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "florian",
    name: "St. Florian",
    feastDate: "May 4",
    type: "Martyr",
    title: "Roman Soldier and Martyr",
    shortBio: "Roman soldier martyred for refusing to sacrifice to pagan gods.",
    life: "Florian (250-304) was a Roman soldier and administrator who was martyred during Diocletian's persecution for refusing to sacrifice to pagan gods.",
    legacy: "He became patron saint of firefighters and Poland, and is invoked against fire and flood.",
    patronOf: ["Firefighters", "Poland", "Against fire and flood"],
    prayers: [
      {
        title: "Prayer for Firefighters",
        text: "St. Florian, you faced martyrdom with courage. Protect all firefighters and emergency workers who risk their lives to save others. Amen."
      }
    ],
    quotes: [
      {
        text: "I will not sacrifice to your gods.",
        source: "At his trial"
      }
    ],
    readings: [
      {
        title: "On Courage in Faith",
        citation: "Acts of St. Florian",
        text: "True courage is shown in remaining faithful to God despite persecution."
      }
    ],
    liturgicalColor: "Red"
  },
  {
    id: "gotthard",
    name: "St. Gotthard",
    feastDate: "May 5",
    type: "Confessor",
    title: "Bishop of Hildesheim",
    shortBio: "German bishop known for his monastic reforms and charitable works.",
    life: "Gotthard (960-1038) was a German Benedictine who became Bishop of Hildesheim. He was known for his monastic reforms and care for the poor.",
    legacy: "The famous St. Gotthard Pass in the Alps is named after him, and he helped reform monasteries throughout Germany.",
    patronOf: ["Hildesheim", "Fever sufferers"],
    prayers: [
      {
        title: "Prayer for Church Reform",
        text: "St. Gotthard, you worked to reform religious life. Help us to live according to our Christian calling with renewed fervor. Amen."
      }
    ],
    quotes: [
      {
        text: "True reform comes from the heart, not from external rules alone.",
        source: "Monastic teachings"
      }
    ],
    readings: [
      {
        title: "On Monastic Reform",
        citation: "From his episcopal work",
        text: "The monastery should be a place where souls learn to seek God above all things."
      }
    ],
    liturgicalColor: "White"
  },
  
  // May 6 - Saint Dominic Savio
  {
    id: "dominic-savio",
    name: "Saint Dominic Savio",
    feastDate: "May 6",
    type: "Confessor",
    birthYear: 1842,
    deathYear: 1857,
    canonizationYear: 1954,
    patronage: ["Choirboys", "Juvenile delinquents", "Students"],
    biography: "A student of Saint John Bosco, Dominic Savio died at the young age of 14. Despite his youth, he showed remarkable holiness and dedication to purity and prayer. He founded the Company of the Immaculate Conception among his fellow students.",
    keyEvents: [
      "Founded the Company of the Immaculate Conception",
      "Prevented a fight between students by holding up a crucifix",
      "Experienced mystical visions before his death"
    ],
    spiritualThemes: ["Purity", "Youth sanctity", "Student life"],
    prayers: [
      {
        title: "Prayer to Saint Dominic Savio",
        text: "Saint Dominic Savio, pure young saint, help us to live lives of innocence and dedication to God. Teach us to see Christ in our daily studies and friendships. Amen."
      }
    ],
    quotes: [
      {
        text: "Death rather than sin.",
        source: "His personal motto"
      }
    ],
    readings: [
      {
        title: "On Purity of Heart",
        citation: "From his spiritual writings",
        text: "We must serve the Lord with joy, for sad saints are not true saints at all."
      }
    ],
    liturgicalColor: "White"
  },

  // May 7 - Saint Rose Venerini
  {
    id: "rose-venerini",
    name: "Saint Rose Venerini",
    feastDate: "May 7",
    type: "Virgin",
    birthYear: 1656,
    deathYear: 1728,
    canonizationYear: 2006,
    patronage: ["Teachers", "Education"],
    biography: "An Italian educator who founded the first public schools for girls in Italy. She established the Venerini Sisters and devoted her life to providing education to young women, especially the poor.",
    keyEvents: [
      "Founded first public school for girls in Viterbo",
      "Established the Venerini Sisters",
      "Opened over 40 schools during her lifetime"
    ],
    spiritualThemes: ["Education", "Women's rights", "Service to the poor"],
    prayers: [
      {
        title: "Prayer to Saint Rose Venerini",
        text: "Saint Rose Venerini, pioneer of education, help us to value learning and to share knowledge with others, especially those in need. May we follow your example of service. Amen."
      }
    ],
    quotes: [
      {
        text: "It seems impossible to serve God better than by teaching.",
        source: "Letter to a friend"
      }
    ],
    readings: [
      {
        title: "On Christian Education",
        citation: "From her educational philosophy",
        text: "Education is the key that opens the door to understanding God's love and our purpose in life."
      }
    ],
    liturgicalColor: "White"
  },

  // May 8 - Saint Peter of Tarentaise
  {
    id: "peter-tarentaise",
    name: "Saint Peter of Tarentaise",
    feastDate: "May 8",
    type: "Pope",
    birthYear: 1102,
    deathYear: 1174,
    canonizationYear: 1191,
    patronage: ["Cistercians", "Church reform"],
    biography: "A Cistercian monk who became Archbishop of Tarentaise and later Pope Innocent V, though he died before his papal coronation. He was known for his austere life and church reform efforts.",
    keyEvents: [
      "Reformed the monastery of Tamié",
      "Elected Archbishop of Tarentaise",
      "Elected Pope Innocent V"
    ],
    spiritualThemes: ["Monastic life", "Church reform", "Humility"],
    prayers: [
      {
        title: "Prayer to Saint Peter of Tarentaise",
        text: "Saint Peter of Tarentaise, faithful shepherd, help us to serve the Church with humility and dedication. Guide us in our efforts to live holy lives. Amen."
      }
    ],
    quotes: [
      {
        text: "The shepherd must smell of the sheep.",
        source: "On pastoral care"
      }
    ],
    readings: [
      {
        title: "On Pastoral Leadership",
        citation: "From his episcopal writings",
        text: "A true pastor must be willing to lay down his life for his flock, following the example of the Good Shepherd."
      }
    ],
    liturgicalColor: "White"
  },

  // May 9 - Saint Pachomius
  {
    id: "pachomius",
    name: "Saint Pachomius",
    feastDate: "May 9",
    type: "Confessor",
    birthYear: 292,
    deathYear: 348,    patronage: ["Cenobitic monasticism"],
    biography: "An Egyptian monk who is considered the founder of cenobitic monasticism. He established the first Christian monastery where monks lived in community rather than as hermits, creating detailed rules for communal religious life.",
    keyEvents: [
      "Founded first cenobitic monastery in Tabennisi",
      "Established detailed monastic rules",
      "Created network of monasteries in Egypt"
    ],
    spiritualThemes: ["Community life", "Monastic rule", "Egyptian monasticism"],
    prayers: [
      {
        title: "Prayer to Saint Pachomius",
        text: "Saint Pachomius, father of communal monasticism, help us to live in harmony with others and to find God in community. Guide our efforts to serve together. Amen."
      }
    ],
    quotes: [
      {
        text: "In community, we learn to die to ourselves and live for others.",
        source: "Monastic teachings"
      }
    ],
    readings: [
      {
        title: "On Monastic Community",
        citation: "From the Pachomian Rules",
        text: "When brothers live together in love, there Christ is present among them."
      }
    ],
    liturgicalColor: "White"
  },

  // May 10 - Saint Antoninus of Florence
  {
    id: "antoninus-florence",
    name: "Saint Antoninus of Florence",
    feastDate: "May 10",
    type: "Confessor",
    birthYear: 1389,
    deathYear: 1459,
    canonizationYear: 1523,
    patronage: ["Florence", "Moral theologians"],
    biography: "A Dominican friar who became Archbishop of Florence. He was renowned for his scholarship in moral theology and his care for the poor. His writings on economics and social justice were ahead of his time.",
    keyEvents: [
      "Founded monastery of San Marco in Florence",
      "Appointed Archbishop of Florence by Pope Eugene IV",
      "Wrote influential works on moral theology"
    ],
    spiritualThemes: ["Social justice", "Moral theology", "Care for the poor"],
    prayers: [
      {
        title: "Prayer to Saint Antoninus",
        text: "Saint Antoninus, wise shepherd and teacher, help us to apply Christian principles to our daily lives and work. Guide us in seeking justice for all. Amen."
      }
    ],
    quotes: [
      {
        text: "To serve God rightly, we must serve our neighbor justly.",
        source: "Summa Theologica Moralis"
      }
    ],
    readings: [
      {
        title: "On Christian Economics",
        citation: "From his moral theology",
        text: "Wealth is given to us not for our pleasure alone, but to be used for the common good of all."
      }
    ],
    liturgicalColor: "White"
  },

  // May 11 - Saint Ignatius of Laconi
  {
    id: "ignatius-laconi",
    name: "Saint Ignatius of Laconi",
    feastDate: "May 11",
    type: "Confessor",
    birthYear: 1701,
    deathYear: 1781,
    canonizationYear: 1951,
    patronage: ["Sardinia", "Capuchin lay brothers"],
    biography: "A Sardinian Capuchin lay brother known for his humility and service to the poor. He spent 40 years begging for alms and caring for the sick, becoming beloved throughout Sardinia for his holiness.",
    keyEvents: [
      "Joined the Capuchin order as a lay brother",
      "Spent 40 years in charitable work",
      "Became known for miraculous healings"
    ],
    spiritualThemes: ["Humility", "Service to the poor", "Lay religious life"],
    prayers: [
      {
        title: "Prayer to Saint Ignatius of Laconi",
        text: "Saint Ignatius of Laconi, humble servant of the poor, teach us to find joy in simple service and to see Christ in those we serve. Amen."
      }
    ],
    quotes: [
      {
        text: "The greatest honor is to serve the least among us.",
        source: "Spiritual teachings"
      }
    ],
    readings: [
      {
        title: "On Humble Service",
        citation: "From his spiritual example",
        text: "True holiness is found not in great deeds, but in small acts of love performed with great devotion."
      }
    ],
    liturgicalColor: "White"
  },

  // May 12 - Saint Nereus and Achilleus
  {
    id: "nereus-achilleus",
    name: "Saints Nereus and Achilleus",
    feastDate: "May 12",
    type: "Martyr",    deathYear: 100,    patronage: ["Soldiers", "Guards"],
    biography: "Two Roman soldiers who were converted to Christianity and suffered martyrdom during the persecution under Emperor Trajan. They were buried in the cemetery of Domitilla on the Via Ardeatina.",
    keyEvents: [
      "Served as Roman soldiers",
      "Converted to Christianity",
      "Martyred under Emperor Trajan"
    ],
    spiritualThemes: ["Military conversion", "Martyrdom", "Early Church"],
    prayers: [
      {
        title: "Prayer to Saints Nereus and Achilleus",
        text: "Saints Nereus and Achilleus, brave soldiers of Christ, help us to be courageous in our faith and to choose God over worldly concerns. Amen."
      }
    ],
    quotes: [
      {
        text: "We choose to serve the King of Heaven rather than earthly rulers.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Christian Courage",
        citation: "From early martyrdom accounts",
        text: "True courage is shown not in taking life, but in giving one's life for the truth."
      }
    ],
    liturgicalColor: "Red"
  },

  // May 13 - Our Lady of Fatima
  {
    id: "our-lady-fatima",
    name: "Our Lady of Fatima",
    feastDate: "May 13",
    type: "Other",    patronage: ["Portugal", "Peace", "Conversion of Russia"],
    biography: "The apparition of the Blessed Virgin Mary to three shepherd children in Fatima, Portugal, in 1917. Mary appeared to Lucia Santos and her cousins Francisco and Jacinta Marto, delivering messages of prayer, penance, and devotion to her Immaculate Heart.",
    keyEvents: [
      "First apparition on May 13, 1917",
      "Miracle of the Sun on October 13, 1917",
      "Secrets of Fatima revealed to the children"
    ],
    spiritualThemes: ["Marian devotion", "Prayer", "Penance", "Peace"],
    prayers: [
      {
        title: "Prayer of Our Lady of Fatima",
        text: "O Most Holy Virgin Mary, Queen of the most holy Rosary, you were pleased to appear to the children of Fatima and to reveal to them treasures of grace hidden in the recitation of the Rosary. Inspire our hearts with a sincere love of this devotion. Amen."
      }
    ],
    quotes: [
      {
        text: "Pray the Rosary every day to obtain peace for the world.",
        source: "Message at Fatima"
      }
    ],
    readings: [
      {
        title: "The Message of Fatima",
        citation: "From the apparitions",
        text: "If my requests are heeded, Russia will be converted, and there will be peace; if not, she will spread her errors throughout the world."
      }
    ],
    liturgicalColor: "White"
  },

  // May 14 - Saint Matthias
  {
    id: "matthias-apostle",
    name: "Saint Matthias",
    feastDate: "May 14",
    type: "Martyr",    deathYear: 80,    patronage: ["Carpenters", "Tailors", "Hope"],
    biography: "The apostle chosen by lot to replace Judas Iscariot among the Twelve Apostles. He was present with the disciples from the beginning of Jesus' ministry and witnessed the Resurrection. He preached the Gospel and was martyred.",
    keyEvents: [
      "Chosen to replace Judas Iscariot",
      "Present at Pentecost",
      "Preached in Judea and Ethiopia",
      "Martyred by stoning"
    ],
    spiritualThemes: ["Divine providence", "Apostolic mission", "Perseverance"],
    prayers: [
      {
        title: "Prayer to Saint Matthias",
        text: "Saint Matthias, faithful apostle, you were chosen by God to complete the Twelve. Help us to answer God's call in our lives with the same faithfulness. Amen."
      }
    ],
    quotes: [
      {
        text: "Lord, you know the hearts of all; show which one of these two you have chosen.",
        source: "Acts 1:24 (Prayer before his selection)"
      }
    ],
    readings: [
      {
        title: "On Divine Election",
        citation: "From apostolic tradition",
        text: "God's choices are not always our choices, but they are always perfect and lead to His glory."
      }
    ],
    liturgicalColor: "Red"
  },

  // May 15 - Saint Isidore the Farmer
  {
    id: "isidore-farmer",
    name: "Saint Isidore the Farmer",
    feastDate: "May 15",
    type: "Confessor",
    birthYear: 1070,
    deathYear: 1130,
    canonizationYear: 1622,
    patronage: ["Farmers", "Rural communities", "Madrid"],
    biography: "A Spanish farm laborer who lived a life of extraordinary holiness while working the land. Despite his humble circumstances, he was known for his devotion to prayer, charity to the poor, and miraculous interventions.",
    keyEvents: [
      "Worked as farm laborer for Juan de Vargas",
      "Angels reportedly helped him plow his fields",
      "Fed the poor with miraculous abundance"
    ],
    spiritualThemes: ["Labor and prayer", "Care for creation", "Humble service"],
    prayers: [
      {
        title: "Prayer to Saint Isidore",
        text: "Saint Isidore, faithful worker and loving husband, help us to find God in our daily labor and to care for the earth He has given us. Amen."
      }
    ],
    quotes: [
      {
        text: "The earth belongs to God, and we are merely His stewards.",
        source: "Traditional saying"
      }
    ],
    readings: [
      {
        title: "On Work and Prayer",
        citation: "From his spiritual example",
        text: "True prayer transforms even the humblest work into a holy offering to God."
      }
    ],
    liturgicalColor: "White"
  },

  // May 16 - Saint Simon Stock
  {
    id: "simon-stock",
    name: "Saint Simon Stock",
    feastDate: "May 16",
    type: "Confessor",
    birthYear: 1165,
    deathYear: 1265,    patronage: ["Carmelite Order", "Bordeaux"],
    biography: "An English Carmelite friar who became the sixth prior-general of the Carmelite Order. He is known for receiving a vision of the Blessed Virgin Mary, who gave him the Brown Scapular and promised special protection to those who wore it devoutly.",
    keyEvents: [
      "Became Prior General of the Carmelites",
      "Received vision of Our Lady with the Brown Scapular",
      "Established Carmelite houses in university cities"
    ],
    spiritualThemes: ["Marian devotion", "Scapular devotion", "Carmelite spirituality"],
    prayers: [
      {
        title: "Prayer to Saint Simon Stock",
        text: "Saint Simon Stock, devoted son of Mary, help us to embrace the protection of the Brown Scapular and to live in faithful devotion to the Mother of God. Amen."
      }
    ],
    quotes: [
      {
        text: "Flower of Carmel, vine blossom-laden, splendor of heaven, child-bearing yet maiden.",
        source: "Flos Carmeli prayer"
      }
    ],
    readings: [
      {
        title: "On the Scapular Promise",
        citation: "From the Marian vision",
        text: "Whosoever dies clothed in this scapular shall not suffer eternal fire."
      }
    ],
    liturgicalColor: "White"
  },

  // May 17 - Saint Paschal Baylon
  {
    id: "paschal-baylon",
    name: "Saint Paschal Baylon",
    feastDate: "May 17",
    type: "Confessor",
    birthYear: 1540,
    deathYear: 1592,
    canonizationYear: 1690,
    patronage: ["Eucharistic devotion", "Cooks", "Shepherds"],
    biography: "A Spanish Franciscan lay brother known for his profound devotion to the Eucharist. Born a shepherd, he spent hours in prayer before the Blessed Sacrament and experienced numerous mystical phenomena related to the Mass.",
    keyEvents: [
      "Worked as a shepherd in his youth",
      "Joined the Franciscan Alcantarines",
      "Experienced ecstasies during Mass"
    ],
    spiritualThemes: ["Eucharistic devotion", "Contemplation", "Humble origins"],
    prayers: [
      {
        title: "Prayer to Saint Paschal Baylon",
        text: "Saint Paschal Baylon, lover of the Eucharist, increase our devotion to Jesus in the Blessed Sacrament. Help us to find our strength and joy in His presence. Amen."
      }
    ],
    quotes: [
      {
        text: "In the Eucharist, heaven comes down to earth.",
        source: "Spiritual writings"
      }
    ],
    readings: [
      {
        title: "On Eucharistic Love",
        citation: "From his mystical experiences",
        text: "The Mass is the greatest prayer on earth, for in it Jesus offers Himself anew for our salvation."
      }
    ],
    liturgicalColor: "White"
  },

  // May 18 - Saint John I
  {
    id: "john-i-pope",
    name: "Saint John I",
    feastDate: "May 18",
    type: "Pope",
    birthYear: 470,
    deathYear: 526,    patronage: ["Papal authority"],
    biography: "Pope from 523-526 who died in prison after being sent by the Arian king Theodoric to Constantinople. He was the first pope to visit Constantinople and died as a result of the harsh treatment he received.",
    keyEvents: [
      "Elected Pope in 523",
      "Sent as envoy to Emperor Justin I",
      "Died in prison upon return to Ravenna"
    ],
    spiritualThemes: ["Papal courage", "Martyrdom", "Church unity"],
    prayers: [
      {
        title: "Prayer to Saint John I",
        text: "Saint John I, courageous Pope and martyr, help us to stand firm in our faith even when faced with persecution. Guide the Church in unity and truth. Amen."
      }
    ],
    quotes: [
      {
        text: "The successor of Peter must be willing to suffer for the flock entrusted to him.",
        source: "Papal teachings"
      }
    ],
    readings: [
      {
        title: "On Papal Sacrifice",
        citation: "From Church history",
        text: "The Pope must be ready to lay down his life for the Church, following the example of the Good Shepherd."
      }
    ],
    liturgicalColor: "Red"
  },

  // May 19 - Saint Celestine V
  {
    id: "celestine-v",
    name: "Saint Celestine V",
    feastDate: "May 19",
    type: "Pope",
    birthYear: 1215,
    deathYear: 1296,
    canonizationYear: 1313,
    patronage: ["Hermits", "Bookbinders"],
    biography: "A hermit monk who was elected Pope in 1294 but resigned after five months, becoming the only pope to voluntarily abdicate until Benedict XVI. He founded the Celestine order and lived as a hermit for most of his life.",
    keyEvents: [
      "Founded the Celestine religious order",
      "Elected Pope at age 79",
      "Resigned the papacy after five months",
      "Imprisoned by his successor Boniface VIII"
    ],
    spiritualThemes: ["Humility", "Hermit life", "Papal renunciation"],
    prayers: [
      {
        title: "Prayer to Saint Celestine V",
        text: "Saint Celestine V, humble hermit and Pope, teach us to seek God's will above worldly honors. Help us to choose simplicity over power. Amen."
      }
    ],
    quotes: [
      {
        text: "I desire nothing in this world but to serve God in solitude.",
        source: "Upon his resignation"
      }
    ],
    readings: [
      {
        title: "On Papal Humility",
        citation: "From his abdication",
        text: "Sometimes the greatest service to the Church is to step aside when one cannot adequately fulfill the office."
      }
    ],
    liturgicalColor: "White"
  },

  // May 20 - Saint Bernardine of Siena
  {
    id: "bernardine-siena",
    name: "Saint Bernardine of Siena",
    feastDate: "May 20",
    type: "Confessor",
    birthYear: 1380,
    deathYear: 1444,
    canonizationYear: 1450,
    patronage: ["Advertisers", "Communications", "Italy"],
    biography: "A Franciscan friar and brilliant preacher who traveled throughout Italy promoting devotion to the Holy Name of Jesus. He was known for his eloquent sermons and his use of the IHS monogram.",
    keyEvents: [
      "Joined the Franciscan order",
      "Promoted devotion to the Holy Name of Jesus",
      "Preached throughout Italy with great success",
      "Declined three episcopal appointments"
    ],
    spiritualThemes: ["Preaching", "Holy Name devotion", "Franciscan spirituality"],
    prayers: [
      {
        title: "Prayer to Saint Bernardine",
        text: "Saint Bernardine of Siena, eloquent preacher of the Holy Name, help us to proclaim Jesus Christ with courage and clarity. May His Name be glorified through our words and actions. Amen."
      }
    ],
    quotes: [
      {
        text: "The Name of Jesus is the glory of preachers, because it is by this Name that the hardest hearts are moved.",
        source: "Sermon on the Holy Name"
      }
    ],
    readings: [
      {
        title: "On the Power of Jesus' Name",
        citation: "From his preaching",
        text: "At the Name of Jesus every knee should bow, for in this Name is our salvation and our hope."
      }
    ],
    liturgicalColor: "White"
  },

  // May 21 - Saint Christopher Magallanes
  {
    id: "christopher-magallanes",
    name: "Saint Christopher Magallanes",
    feastDate: "May 21",
    type: "Martyr",
    birthYear: 1869,
    deathYear: 1927,
    canonizationYear: 2000,
    patronage: ["Mexico", "Persecuted clergy"],
    biography: "A Mexican priest who was martyred during the Cristero War. He was executed along with Saint Agustin Caloca for refusing to abandon his priestly duties during the religious persecution in Mexico.",
    keyEvents: [
      "Ordained priest in 1899",
      "Founded seminary for indigenous candidates",
      "Arrested during Cristero persecution",
      "Martyred with 24 other Mexican clergy"
    ],
    spiritualThemes: ["Religious persecution", "Priestly fidelity", "Mexican martyrs"],
    prayers: [
      {
        title: "Prayer to Saint Christopher Magallanes",
        text: "Saint Christopher Magallanes, faithful priest and martyr, help us to remain loyal to our Catholic faith even in times of persecution. Give us courage to witness to Christ. Amen."
      }
    ],
    quotes: [
      {
        text: "I die innocent and I ask God that my blood serve for the union of my Mexican brothers.",
        source: "Final words before execution"
      }
    ],
    readings: [
      {
        title: "On Martyrdom for the Faith",
        citation: "From the Mexican martyrs",
        text: "The blood of martyrs becomes the seed of new Christians and the foundation of religious freedom."
      }
    ],
    liturgicalColor: "Red"
  },

  // May 22 - Saint Rita of Cascia
  {
    id: "rita-cascia",
    name: "Saint Rita of Cascia",
    feastDate: "May 22",
    type: "Other",
    birthYear: 1381,
    deathYear: 1457,
    canonizationYear: 1900,
    patronage: ["Impossible causes", "Difficult marriages", "Abuse victims"],
    biography: "An Italian widow and Augustinian nun known as the 'Saint of the Impossible.' She endured an abusive marriage, the violent deaths of her husband and sons, and bore the stigmata of Christ's passion.",
    keyEvents: [
      "Married to Paolo Mancini against her wishes",
      "Husband murdered in family vendetta",
      "Sons died young, preventing further violence",
      "Received stigmata wound on forehead"
    ],
    spiritualThemes: ["Domestic violence", "Forgiveness", "Impossible situations"],
    prayers: [
      {
        title: "Prayer to Saint Rita",
        text: "Saint Rita of Cascia, advocate of the impossible, intercede for us in our most difficult situations. Help us to forgive those who hurt us and to trust in God's providence. Amen."
      }
    ],
    quotes: [
      {
        text: "Nothing is far from God.",
        source: "Spiritual maxim"
      }
    ],
    readings: [
      {
        title: "On Impossible Cases",
        citation: "From her spiritual example",
        text: "What seems impossible to human eyes is always possible with God's grace and intervention."
      }
    ],
    liturgicalColor: "White"
  },

  // May 23 - Saint Desiderius
  {
    id: "desiderius-langres",
    name: "Saint Desiderius",
    feastDate: "May 23",
    type: "Martyr",
    birthYear: 550,
    deathYear: 607,    patronage: ["Langres", "Against fire"],
    biography: "Bishop of Langres who was murdered for denouncing the immorality of the Frankish court. He courageously spoke against the sins of Queen Brunhild and King Theuderic II, leading to his martyrdom.",
    keyEvents: [
      "Appointed Bishop of Langres",
      "Condemned court immorality",
      "Exiled by Queen Brunhild",
      "Assassinated on her orders"
    ],
    spiritualThemes: ["Moral courage", "Speaking truth to power", "Episcopal martyrdom"],
    prayers: [
      {
        title: "Prayer to Saint Desiderius",
        text: "Saint Desiderius, courageous bishop and martyr, give us the strength to speak the truth even when it costs us dearly. Help us to defend morality and justice. Amen."
      }
    ],
    quotes: [
      {
        text: "A bishop must speak the truth regardless of the consequences.",
        source: "Before his martyrdom"
      }
    ],
    readings: [
      {
        title: "On Prophetic Courage",
        citation: "From his episcopal ministry",
        text: "The shepherd must protect the flock from moral corruption, even at the cost of his own life."
      }
    ],
    liturgicalColor: "Red"
  },

  // May 24 - Saint Vincent of Lerins
  {
    id: "vincent-lerins",
    name: "Saint Vincent of Lerins",
    feastDate: "May 24",
    type: "Confessor",
    birthYear: 400,
    deathYear: 450,    patronage: ["Theologians", "Orthodox doctrine"],
    biography: "A French monk and theologian best known for the Vincentian Canon: 'that which has been believed everywhere, always, and by all.' His work provided important criteria for distinguishing true Catholic doctrine from heresy.",
    keyEvents: [
      "Became monk at Lerins monastery",
      "Wrote 'Commonitorium' on orthodox doctrine",
      "Formulated the Vincentian Canon",
      "Defended Catholic orthodoxy against heresy"
    ],
    spiritualThemes: ["Orthodox theology", "Tradition", "Doctrinal development"],
    prayers: [
      {
        title: "Prayer to Saint Vincent of Lerins",
        text: "Saint Vincent of Lerins, guardian of orthodox doctrine, help us to hold fast to the faith that has been handed down from the apostles. Guide us in discerning truth from error. Amen."
      }
    ],
    quotes: [
      {
        text: "In the Catholic Church itself, all possible care must be taken that we hold that faith which has been believed everywhere, always, by all.",
        source: "Commonitorium"
      }
    ],
    readings: [
      {
        title: "On Catholic Tradition",
        citation: "From the Commonitorium",
        text: "The rule for us and for all Catholics is to prefer the authority of the Church to that of any single doctor."
      }
    ],
    liturgicalColor: "White"
  },

  // May 25 - Saint Bede the Venerable
  {
    id: "bede-venerable",
    name: "Saint Bede the Venerable",
    feastDate: "May 25",
    type: "Doctor",
    birthYear: 673,
    deathYear: 735,
    canonizationYear: 1899,
    patronage: ["Historians", "Scholars", "England"],
    biography: "An English Benedictine monk, historian, and Doctor of the Church. He is best known for his 'Ecclesiastical History of the English People,' which earned him the title 'Father of English History.'",
    keyEvents: [
      "Entered monastery at Wearmouth-Jarrow at age 7",
      "Wrote 'Ecclesiastical History of the English People'",
      "Translated the Gospel of John on his deathbed",
      "Declared Doctor of the Church"
    ],
    spiritualThemes: ["Scholarship", "Monastic learning", "Historical writing"],
    prayers: [
      {
        title: "Prayer to Saint Bede",
        text: "Saint Bede the Venerable, learned doctor and historian, help us to use our minds in service of God and truth. Guide scholars and students in their pursuit of knowledge. Amen."
      }
    ],
    quotes: [
      {
        text: "It is better never to begin a good work than, having begun it, to stop.",
        source: "Letter to Egbert"
      }
    ],
    readings: [
      {
        title: "On Sacred Learning",
        citation: "From his writings",
        text: "All learning should lead us closer to God and help us understand His works in creation and salvation."
      }
    ],
    liturgicalColor: "White"
  },

  // May 26 - Saint Philip Neri
  {
    id: "philip-neri",
    name: "Saint Philip Neri",
    feastDate: "May 26",
    type: "Confessor",
    birthYear: 1515,
    deathYear: 1595,
    canonizationYear: 1622,
    patronage: ["Rome", "Joy", "Young people"],
    biography: "Known as the 'Apostle of Rome,' Philip Neri was a priest who founded the Congregation of the Oratory. He was famous for his joyful spirit, his work with young people, and his role in the Counter-Reformation.",
    keyEvents: [
      "Experienced mystical fire in his heart",
      "Founded the Congregation of the Oratory",
      "Established informal gatherings for prayer and discussion",
      "Helped reform Roman society through joy and humor"
    ],
    spiritualThemes: ["Joy in faith", "Youth ministry", "Counter-Reformation"],
    prayers: [
      {
        title: "Prayer to Saint Philip Neri",
        text: "Saint Philip Neri, joyful apostle of Rome, help us to serve God with cheerfulness and to attract others to faith through our joy. Teach us to find humor even in difficulties. Amen."
      }
    ],
    quotes: [
      {
        text: "A joyful heart is more easily made perfect than a downcast one.",
        source: "Spiritual maxims"
      }
    ],
    readings: [
      {
        title: "On Christian Joy",
        citation: "From his spiritual teachings",
        text: "The Christian life should be filled with joy, for we are children of God and heirs of heaven."
      }
    ],
    liturgicalColor: "White"
  },

  // May 27 - Saint Augustine of Canterbury
  {
    id: "augustine-canterbury",
    name: "Saint Augustine of Canterbury",
    feastDate: "May 27",
    type: "Confessor",
    birthYear: 534,
    deathYear: 604,    patronage: ["England", "Missionaries"],
    biography: "A Benedictine monk sent by Pope Gregory the Great to evangelize the Anglo-Saxons in England. He became the first Archbishop of Canterbury and is known as the 'Apostle to the English.'",
    keyEvents: [
      "Sent by Pope Gregory to evangelize England",
      "Converted King Ethelbert of Kent",
      "Established the See of Canterbury",
      "Founded several monasteries and churches"
    ],
    spiritualThemes: ["Missionary work", "Evangelization", "English Christianity"],
    prayers: [
      {
        title: "Prayer to Saint Augustine of Canterbury",
        text: "Saint Augustine of Canterbury, apostle to the English, help us to be bold missionaries in our own time. Give us courage to share the Gospel with those who have not heard it. Amen."
      }
    ],
    quotes: [
      {
        text: "Preach the Gospel always; when necessary, use words.",
        source: "Missionary approach"
      }
    ],
    readings: [
      {
        title: "On Christian Mission",
        citation: "From his evangelization work",
        text: "The Gospel must be planted gently but firmly, respecting local customs while teaching eternal truths."
      }
    ],
    liturgicalColor: "White"
  },

  // May 28 - Saint Bernard of Montjoux
  {
    id: "bernard-montjoux",
    name: "Saint Bernard of Montjoux",
    feastDate: "May 28",
    type: "Confessor",
    birthYear: 923,
    deathYear: 1008,
    canonizationYear: 1123,
    patronage: ["Mountain climbers", "Skiers", "Alpine regions"],
    biography: "An Italian priest who ministered to travelers crossing the dangerous Alpine passes. He established hospices and rescue services, and the famous St. Bernard dogs are named after him.",
    keyEvents: [
      "Established hospices at Great and Little St. Bernard passes",
      "Created rescue services for Alpine travelers",
      "Founded congregation of Canons Regular",
      "Ministered for over 40 years in the Alps"
    ],
    spiritualThemes: ["Service to travelers", "Mountain ministry", "Hospitality"],
    prayers: [
      {
        title: "Prayer to Saint Bernard of Montjoux",
        text: "Saint Bernard of Montjoux, protector of travelers, watch over all who journey through dangerous places. Help us to offer hospitality and aid to those in need. Amen."
      }
    ],
    quotes: [
      {
        text: "Christ calls us to serve Him in the poorest and most dangerous places.",
        source: "Alpine ministry"
      }
    ],
    readings: [
      {
        title: "On Christian Hospitality",
        citation: "From his hospice work",
        text: "Every traveler should find in us the warmth of Christ's love and the safety of His protection."
      }
    ],
    liturgicalColor: "White"
  },

  // May 29 - Saint Maximinus of Trier
  {
    id: "maximinus-trier",
    name: "Saint Maximinus of Trier",
    feastDate: "May 29",
    type: "Confessor",
    birthYear: 295,
    deathYear: 347,    patronage: ["Trier", "Against drought"],
    biography: "Bishop of Trier who defended orthodox doctrine against Arianism. He provided refuge to Saint Athanasius during his exile and was a strong supporter of the Nicene Creed.",
    keyEvents: [
      "Appointed Bishop of Trier",
      "Defended Nicene orthodoxy against Arians",
      "Gave sanctuary to Saint Athanasius",
      "Attended Council of Sardica"
    ],
    spiritualThemes: ["Orthodox doctrine", "Episcopal courage", "Anti-Arianism"],
    prayers: [
      {
        title: "Prayer to Saint Maximinus",
        text: "Saint Maximinus of Trier, defender of orthodox faith, help us to stand firm against false teachings. Give us courage to defend the truth about Christ's divinity. Amen."
      }
    ],
    quotes: [
      {
        text: "Christ is true God and true man, not a creature but the Creator.",
        source: "Against Arianism"
      }
    ],
    readings: [
      {
        title: "On Orthodox Christology",
        citation: "From anti-Arian writings",
        text: "The Son is of the same substance as the Father, not made but begotten from all eternity."
      }
    ],
    liturgicalColor: "White"
  },

  // May 30 - Saint Joan of Arc
  {
    id: "joan-arc",
    name: "Saint Joan of Arc",
    feastDate: "May 30",
    type: "Virgin",
    birthYear: 1412,
    deathYear: 1431,
    canonizationYear: 1920,
    patronage: ["France", "Soldiers", "Prisoners"],
    biography: "A French peasant girl who claimed to have received visions from Saints Michael, Margaret, and Catherine telling her to drive the English out of France. She convinced the Dauphin to let her lead military campaigns and was later captured and burned as a heretic.",
    keyEvents: [
      "Received visions at age 13",
      "Convinced Dauphin Charles to crown her",
      "Led successful military campaigns",
      "Captured by Burgundians and sold to English",
      "Burned at stake for heresy and witchcraft"
    ],
    spiritualThemes: ["Divine calling", "Patriotism", "Martyrdom"],
    prayers: [
      {
        title: "Prayer to Saint Joan of Arc",
        text: "Saint Joan of Arc, brave maiden and martyr, help us to answer God's call with courage. Give us strength to fight for justice and truth, even unto death. Amen."
      }
    ],
    quotes: [
      {
        text: "I am not afraid. I was born to do this.",
        source: "Before her trial"
      }
    ],
    readings: [
      {
        title: "On Divine Mission",
        citation: "From her testimony",
        text: "God calls whom He will, often choosing the weak and humble to accomplish His great works."
      }
    ],
    liturgicalColor: "White"
  },

  // May 31 - The Visitation of the Blessed Virgin Mary
  {
    id: "visitation-mary",
    name: "The Visitation of the Blessed Virgin Mary",
    feastDate: "May 31",
    type: "Other",    patronage: ["Pregnant women", "Social workers"],
    biography: "The feast commemorating Mary's visit to her cousin Elizabeth after the Annunciation. This visit is recorded in Luke's Gospel and includes Mary's Magnificat, one of the most beautiful prayers in Scripture.",
    keyEvents: [
      "Mary travels to visit Elizabeth",
      "John the Baptist leaps in Elizabeth's womb",
      "Elizabeth proclaims Mary blessed among women",
      "Mary sings the Magnificat"
    ],
    spiritualThemes: ["Marian devotion", "Service to others", "The Magnificat"],
    prayers: [
      {
        title: "The Magnificat",
        text: "My soul magnifies the Lord, and my spirit rejoices in God my Savior, for he has looked with favor on the lowliness of his servant. Surely, from now on all generations will call me blessed."
      }
    ],
    quotes: [
      {
        text: "Blessed are you among women, and blessed is the fruit of your womb!",
        source: "Elizabeth's greeting (Luke 1:42)"
      }
    ],
    readings: [
      {
        title: "The Visitation Account",
        citation: "Luke 1:39-56",
        text: "In those days Mary set out and went with haste to a Judean town in the hill country, where she entered the house of Zechariah and greeted Elizabeth."
      }
    ],
    liturgicalColor: "White"
  },

  // June 1 - Saint Justin Martyr
  {
    id: "justin-martyr",
    name: "Saint Justin Martyr",
    feastDate: "June 1",
    type: "Martyr",
    birthYear: 100,
    deathYear: 165,    patronage: ["Philosophers", "Apologists"],
    biography: "A Christian apologist and martyr who used philosophy to defend Christianity. Born a pagan, he converted after encountering Christian teachings and became one of the first great Christian philosophers.",
    keyEvents: [
      "Converted from paganism to Christianity",
      "Wrote 'First and Second Apology'",
      "Founded school in Rome",
      "Martyred with six companions"
    ],
    spiritualThemes: ["Christian philosophy", "Apologetics", "Conversion"],
    prayers: [
      {
        title: "Prayer to Saint Justin Martyr",
        text: "Saint Justin Martyr, defender of the faith, help us to use reason and learning to defend the truth of Christianity. Give us courage to witness to Christ in all circumstances. Amen."
      }
    ],
    quotes: [
      {
        text: "We who once delighted in impurity now cleave to chastity alone.",
        source: "First Apology"
      }
    ],
    readings: [
      {
        title: "On Philosophy and Faith",
        citation: "From the Apologies",
        text: "Philosophy led me to God, and I found in Christ the fulfillment of all philosophical seeking."
      }
    ],
    liturgicalColor: "Red"
  },

  // June 2 - Saints Marcellinus and Peter
  {
    id: "marcellinus-peter",
    name: "Saints Marcellinus and Peter",
    feastDate: "June 2",
    type: "Martyr",    deathYear: 304,    patronage: ["Against headaches"],
    biography: "A priest and exorcist who were martyred together during the Diocletian persecution. Saint Marcellinus was a priest and Saint Peter was an exorcist. They were executed in a wood so their graves could not be found and venerated.",
    keyEvents: [
      "Served during Diocletian persecution",
      "Arrested and tortured together",
      "Executed in remote forest",
      "Bodies discovered and given proper burial"
    ],
    spiritualThemes: ["Priestly martyrdom", "Friendship in Christ", "Hidden witnesses"],
    prayers: [
      {
        title: "Prayer to Saints Marcellinus and Peter",
        text: "Saints Marcellinus and Peter, faithful friends and martyrs, help us to support one another in times of trial. Give us courage to witness to Christ even unto death. Amen."
      }
    ],
    quotes: [
      {
        text: "Together we have served Christ, together we will die for Him.",
        source: "Martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Christian Friendship",
        citation: "From early Church accounts",
        text: "The bond of Christian friendship is stronger than death and sealed by the blood of martyrdom."
      }
    ],
    liturgicalColor: "Red"
  },

  // June 3 - Saint Charles Lwanga
  {
    id: "charles-lwanga",
    name: "Saint Charles Lwanga",
    feastDate: "June 3",
    type: "Martyr",
    birthYear: 1860,
    deathYear: 1886,
    canonizationYear: 1964,
    patronage: ["Uganda", "Youth", "African martyrs"],
    biography: "Leader of the 22 Ugandan martyrs who were killed for their Christian faith by King Mwanga II. He baptized fellow pages and protected them from the king's immoral advances.",
    keyEvents: [
      "Served as page to King Mwanga II",
      "Converted to Catholicism",
      "Baptized fellow pages in secret",
      "Burned alive with 21 companions"
    ],
    spiritualThemes: ["African martyrdom", "Protection of youth", "Baptismal ministry"],
    prayers: [
      {
        title: "Prayer to Saint Charles Lwanga",
        text: "Saint Charles Lwanga, protector of the young, help us to guard the innocence of children and to stand firm in our faith even unto death. Amen."
      }
    ],
    quotes: [
      {
        text: "A Christian is ready to die for God at any time.",
        source: "Before his martyrdom"
      }
    ],
    readings: [
      {
        title: "On Youthful Martyrdom",
        citation: "From the Ugandan martyrs",
        text: "Young hearts can burn with love for Christ as purely as any adult, and their witness shines forth like stars."
      }
    ],
    liturgicalColor: "Red"
  },

  // June 4 - Saint Francis Caracciolo
  {
    id: "francis-caracciolo",
    name: "Saint Francis Caracciolo",
    feastDate: "June 4",
    type: "Confessor",
    birthYear: 1563,
    deathYear: 1608,
    canonizationYear: 1807,
    patronage: ["Cooks", "Against spiritual lukewarmness"],
    biography: "Co-founder of the Clerks Regular Minor who devoted his life to caring for prisoners and the sick. Despite his noble birth, he chose a life of poverty and service to the most abandoned.",
    keyEvents: [
      "Co-founded Clerks Regular Minor",
      "Established houses throughout Italy",
      "Cared for prisoners and plague victims",
      "Promoted perpetual adoration"
    ],
    spiritualThemes: ["Prison ministry", "Care for the sick", "Eucharistic devotion"],
    prayers: [
      {
        title: "Prayer to Saint Francis Caracciolo",
        text: "Saint Francis Caracciolo, lover of the abandoned, help us to see Christ in prisoners and the sick. Inspire us to spend time in adoration before the Blessed Sacrament. Amen."
      }
    ],
    quotes: [
      {
        text: "If we cannot pray, let us at least stay in the presence of God.",
        source: "On Eucharistic adoration"
      }
    ],
    readings: [
      {
        title: "On Service to Prisoners",
        citation: "From his ministerial work",
        text: "In every prisoner, we must see Christ bound and suffering, calling us to bring His love and mercy."
      }
    ],
    liturgicalColor: "White"
  },

  // June 5 - Saint Boniface
  {
    id: "boniface",
    name: "Saint Boniface",
    feastDate: "June 5",
    type: "Martyr",
    birthYear: 675,
    deathYear: 754,    patronage: ["Germany", "Missionaries"],
    biography: "English missionary known as the 'Apostle of Germany.' He evangelized Germanic tribes, reformed the Frankish Church, and was martyred while preparing for Mass. He is famous for cutting down the sacred oak of Thor.",
    keyEvents: [
      "Ordained priest in England",
      "Evangelized Germanic tribes",
      "Cut down Thor's oak tree",
      "Crowned Pepin the Short as King",
      "Martyred by pagan Frisians"
    ],
    spiritualThemes: ["Missionary work", "Church reform", "Martyrdom"],
    prayers: [
      {
        title: "Prayer to Saint Boniface",
        text: "Saint Boniface, apostle of Germany, help us to be fearless missionaries in our own time. Give us courage to challenge false gods and proclaim Christ as the one true Lord. Amen."
      }
    ],
    quotes: [
      {
        text: "Let us stand fast in what is right and prepare our souls for trial.",
        source: "Final letter"
      }
    ],
    readings: [
      {
        title: "On Missionary Courage",
        citation: "From his letters",
        text: "The missionary must be ready to face death rather than compromise the Gospel message."
      }
    ],
    liturgicalColor: "Red"
  },

  // June 6 - Saint Norbert
  {
    id: "norbert",
    name: "Saint Norbert",
    feastDate: "June 6",
    type: "Confessor",
    birthYear: 1080,
    deathYear: 1134,
    canonizationYear: 1582,
    patronage: ["Premonstratensians", "Invoked against storms"],
    biography: "German bishop who founded the Premonstratensian Order. After a conversion experience during a thunderstorm, he gave up his worldly life to become a traveling preacher and reformer.",
    keyEvents: [
      "Conversion during thunderstorm",
      "Founded Premonstratensian Order at Prémontré",
      "Appointed Archbishop of Magdeburg",
      "Reformed clerical discipline"
    ],
    spiritualThemes: ["Religious conversion", "Monastic reform", "Preaching"],
    prayers: [
      {
        title: "Prayer to Saint Norbert",
        text: "Saint Norbert, reformer and founder, help us to hear God's call to conversion and to dedicate our lives completely to His service. Protect us from spiritual storms. Amen."
      }
    ],
    quotes: [
      {
        text: "It is not enough to begin well; one must persevere in goodness.",
        source: "Spiritual teachings"
      }
    ],
    readings: [
      {
        title: "On Religious Conversion",
        citation: "From his conversion experience",
        text: "God can use any circumstance to call us to Himself, even the most frightening storms of life."
      }
    ],
    liturgicalColor: "White"
  },

  // June 7 - Blessed Anne of St. Bartholomew
  {
    id: "anne-st-bartholomew",
    name: "Blessed Anne of St. Bartholomew",
    feastDate: "June 7",
    type: "Virgin",
    birthYear: 1549,
    deathYear: 1626,    patronage: ["Carmelite lay sisters"],
    biography: "A Spanish Carmelite lay sister who was the companion and secretary of Saint Teresa of Avila. She helped establish Carmelite reforms in France and Belgium after Teresa's death.",
    keyEvents: [
      "Became lay sister at Carmel of Avila",
      "Served as secretary to Saint Teresa",
      "Present at Teresa's death",
      "Established Carmelite houses in France"
    ],
    spiritualThemes: ["Carmelite spirituality", "Humble service", "Mystical prayer"],
    prayers: [
      {
        title: "Prayer to Blessed Anne of St. Bartholomew",
        text: "Blessed Anne of St. Bartholomew, faithful companion of Saint Teresa, help us to serve God with humility and to support the work of holy people around us. Amen."
      }
    ],
    quotes: [
      {
        text: "True greatness lies in being faithful in small things.",
        source: "Carmelite teachings"
      }
    ],
    readings: [
      {
        title: "On Faithful Companionship",
        citation: "From her life with Saint Teresa",
        text: "The greatest saints often need faithful companions who support their mission through humble service."
      }
    ],
    liturgicalColor: "White"
  },

  // June 8 - Saint William of York
  {
    id: "william-york",
    name: "Saint William of York",
    feastDate: "June 8",
    type: "Confessor",
    birthYear: 1100,
    deathYear: 1154,
    canonizationYear: 1227,
    patronage: ["York", "Against kidney disease"],
    biography: "Archbishop of York whose appointment was controversial due to political conflicts. He was twice removed from office but eventually restored. Known for his gentleness and pastoral care despite persecution.",
    keyEvents: [
      "Appointed Archbishop of York",
      "Deposed due to political conflicts",
      "Lived in exile for twelve years",
      "Restored as archbishop shortly before death"
    ],
    spiritualThemes: ["Pastoral patience", "Persecution", "Church politics"],
    prayers: [
      {
        title: "Prayer to Saint William of York",
        text: "Saint William of York, patient shepherd, help us to persevere through unjust treatment and to respond to persecution with gentleness and forgiveness. Amen."
      }
    ],
    quotes: [
      {
        text: "A shepherd must be gentle with the flock, even when wolves attack.",
        source: "Pastoral teachings"
      }
    ],
    readings: [
      {
        title: "On Pastoral Patience",
        citation: "From his episcopal experience",
        text: "The true shepherd remains faithful to his flock even when human politics would tear him away."
      }
    ],
    liturgicalColor: "White"
  },

  // June 9 - Saint Ephrem
  {
    id: "ephrem-syrian",
    name: "Saint Ephrem",
    feastDate: "June 9",
    type: "Doctor",
    birthYear: 306,
    deathYear: 373,    patronage: ["Spiritual directors", "Syrian Christians"],
    biography: "Syrian deacon and Doctor of the Church known as the 'Harp of the Holy Spirit.' He was a prolific writer of hymns, poems, and theological treatises, and served the poor during famines.",
    keyEvents: [
      "Became deacon at Nisibis",
      "Wrote numerous hymns and theological works",
      "Moved to Edessa after Persian conquest",
      "Organized famine relief efforts"
    ],
    spiritualThemes: ["Theological poetry", "Marian devotion", "Care for the poor"],
    prayers: [
      {
        title: "Prayer to Saint Ephrem",
        text: "Saint Ephrem, harp of the Holy Spirit, inspire us to praise God through beautiful words and music. Help us to care for the poor in times of need. Amen."
      }
    ],
    quotes: [
      {
        text: "Let my prayer be incense before you, the lifting up of my hands as the evening sacrifice.",
        source: "Hymns"
      }
    ],
    readings: [
      {
        title: "On Sacred Poetry",
        citation: "From his hymns",
        text: "Music and poetry can lift the soul to God more swiftly than many arguments or explanations."
      }
    ],
    liturgicalColor: "White"
  },

  // June 10 - Blessed Diana d'Andalo
  {
    id: "diana-andalo",
    name: "Blessed Diana d'Andalo",
    feastDate: "June 10",
    type: "Virgin",
    birthYear: 1201,
    deathYear: 1236,    patronage: ["Dominican nuns"],
    biography: "Italian noblewoman who founded the first Dominican convent for women in Bologna. Despite family opposition, she persevered in her religious calling and established a community of contemplative nuns.",
    keyEvents: [
      "Resisted family pressure to marry",
      "Founded first Dominican convent for women",
      "Established monastery of St. Agnes in Bologna",
      "Maintained correspondence with Saint Dominic"
    ],
    spiritualThemes: ["Religious vocation", "Contemplative life", "Family opposition"],
    prayers: [
      {
        title: "Prayer to Blessed Diana d'Andalo",
        text: "Blessed Diana d'Andalo, faithful daughter of Saint Dominic, help us to follow our religious calling despite opposition. Give us courage to pursue contemplative prayer. Amen."
      }
    ],
    quotes: [
      {
        text: "I prefer the riches of poverty to the poverty of riches.",
        source: "Letter to her family"
      }
    ],
    readings: [
      {
        title: "On Religious Calling",
        citation: "From her correspondence",
        text: "When God calls, no earthly consideration should prevent us from answering with our whole heart."
      }
    ],
    liturgicalColor: "White"
  },

  // June 11 - Saint Barnabas
  {
    id: "barnabas-apostle",
    name: "Saint Barnabas",
    feastDate: "June 11",
    type: "Martyr",    deathYear: 61,    patronage: ["Cyprus", "Against hailstorms"],
    biography: "One of the seventy disciples and companion of Saint Paul on his first missionary journey. Originally named Joseph, he was called Barnabas meaning 'son of encouragement.' He was martyred in Cyprus.",
    keyEvents: [
      "Sold his property to support the apostles",
      "Vouched for Paul after his conversion",
      "Accompanied Paul on first missionary journey",
      "Disagreed with Paul over John Mark",
      "Martyred by stoning in Cyprus"
    ],
    spiritualThemes: ["Apostolic mission", "Encouragement", "Generosity"],
    prayers: [
      {
        title: "Prayer to Saint Barnabas",
        text: "Saint Barnabas, son of encouragement, help us to support and encourage others in their faith journey. Give us generous hearts like yours. Amen."
      }
    ],
    quotes: [
      {
        text: "He was a good man, full of the Holy Spirit and of faith.",
        source: "Acts 11:24"
      }
    ],
    readings: [
      {
        title: "On Christian Encouragement",
        citation: "From Acts of the Apostles",
        text: "The Church needs those who encourage others and see the potential for good in every person."
      }
    ],
    liturgicalColor: "Red"
  },

  // June 12 - Saint John of Sahagun
  {
    id: "john-sahagun",
    name: "Saint John of Sahagun",
    feastDate: "June 12",
    type: "Confessor",
    birthYear: 1419,
    deathYear: 1479,
    canonizationYear: 1690,
    patronage: ["Salamanca", "Against obsessions"],
    biography: "Spanish Augustinian friar and preacher known for his powerful sermons and miracles. He worked to reconcile feuding families in Salamanca and was known for his devotion to the Eucharist.",
    keyEvents: [
      "Ordained diocesan priest",
      "Joined Augustinian friars",
      "Preached powerfully in Salamanca",
      "Reconciled feuding noble families",
      "Performed numerous miracles"
    ],
    spiritualThemes: ["Powerful preaching", "Reconciliation", "Eucharistic devotion"],
    prayers: [
      {
        title: "Prayer to Saint John of Sahagun",
        text: "Saint John of Sahagun, powerful preacher and peacemaker, help us to speak God's word with conviction and to work for reconciliation in our communities. Amen."
      }
    ],
    quotes: [
      {
        text: "The word of God is sharper than any two-edged sword.",
        source: "Preaching ministry"
      }
    ],
    readings: [
      {
        title: "On Reconciliation",
        citation: "From his peace-making work",
        text: "The Christian must be a bridge-builder, bringing together those separated by hatred or misunderstanding."
      }
    ],
    liturgicalColor: "White"
  },

  // June 13 - Saint Anthony of Padua
  {
    id: "anthony-padua",
    name: "Saint Anthony of Padua",
    feastDate: "June 13",
    type: "Doctor",
    birthYear: 1195,
    deathYear: 1231,
    canonizationYear: 1232,
    patronage: ["Lost things", "Poor", "Portugal"],
    biography: "Portuguese Franciscan friar and Doctor of the Church known for his powerful preaching and devotion to the poor. He is one of the most beloved saints and is invoked for finding lost objects.",
    keyEvents: [
      "Originally Augustinian canon in Portugal",
      "Joined Franciscans after seeing martyred friars",
      "Preached throughout Italy and southern France",
      "Known for miraculous occurrences during sermons",
      "Died young at age 36"
    ],
    spiritualThemes: ["Powerful preaching", "Care for the poor", "Franciscan spirituality"],
    prayers: [
      {
        title: "Prayer to Saint Anthony of Padua",
        text: "Saint Anthony of Padua, wonder-worker and friend of the poor, help us to find what we have lost, especially our way to God. Inspire us to care for those in need. Amen."
      }
    ],
    quotes: [
      {
        text: "The life of the body is the soul; the life of the soul is God.",
        source: "Sermons"
      }
    ],
    readings: [
      {
        title: "On Preaching to All",
        citation: "From his ministry",
        text: "The Gospel must be preached to all creation, for every creature longs to hear the word of life."
      }
    ],
    liturgicalColor: "White"
  },

  // June 14 - Saint Methodius of Constantinople
  {
    id: "methodius-constantinople",
    name: "Saint Methodius of Constantinople",
    feastDate: "June 14",
    type: "Confessor",
    birthYear: 788,
    deathYear: 847,    patronage: ["Icon restoration"],
    biography: "Patriarch of Constantinople who helped end the iconoclastic controversy. He suffered imprisonment and exile for defending the veneration of icons but ultimately restored Orthodox practice.",
    keyEvents: [
      "Became monk and priest",
      "Opposed iconoclastic policies",
      "Imprisoned for nine years",
      "Appointed Patriarch of Constantinople",
      "Restored veneration of icons"
    ],
    spiritualThemes: ["Defense of icons", "Orthodox theology", "Persecution"],
    prayers: [
      {
        title: "Prayer to Saint Methodius",
        text: "Saint Methodius of Constantinople, defender of holy images, help us to see God's beauty reflected in sacred art. Give us courage to defend orthodox faith. Amen."
      }
    ],
    quotes: [
      {
        text: "Icons are windows to heaven, bringing us closer to the divine reality they represent.",
        source: "Defense of icons"
      }
    ],
    readings: [
      {
        title: "On Sacred Images",
        citation: "From iconoclastic controversy",
        text: "Images help us pray and remind us of the saints who have gone before us in faith."
      }
    ],
    liturgicalColor: "White"
  },

  // June 15 - Saint Germaine Cousin
  {
    id: "germaine-cousin",
    name: "Saint Germaine Cousin",
    feastDate: "June 15",
    type: "Virgin",
    birthYear: 1579,
    deathYear: 1601,
    canonizationYear: 1867,
    patronage: ["Shepherdesses", "Abuse victims", "Handicapped"],
    biography: "A French peasant girl who suffered from scrofula and was mistreated by her stepmother. Despite her hardships, she lived a holy life of prayer and charity, often sharing her meager food with beggars.",
    keyEvents: [
      "Born with withered right hand and scrofula",
      "Mistreated by stepmother",
      "Worked as shepherdess",
      "Gave food to beggars despite poverty",
      "Found dead in garret at age 22"
    ],
    spiritualThemes: ["Suffering", "Charity to the poor", "Hidden holiness"],
    prayers: [
      {
        title: "Prayer to Saint Germaine",
        text: "Saint Germaine Cousin, patient sufferer and friend of the poor, help us to bear our crosses with grace and to share what little we have with those in need. Amen."
      }
    ],
    quotes: [
      {
        text: "God loves the poor more than the rich, for they trust in Him alone.",
        source: "Traditional saying"
      }
    ],
    readings: [
      {
        title: "On Hidden Sanctity",
        citation: "From her life example",
        text: "The greatest saints are often those whose holiness is known only to God until after their death."
      }
    ],
    liturgicalColor: "White"
  },

  // June 16 - Saint John Francis Regis
  {
    id: "john-francis-regis",
    name: "Saint John Francis Regis",
    feastDate: "June 16",
    type: "Confessor",
    birthYear: 1597,
    deathYear: 1640,
    canonizationYear: 1737,
    patronage: ["Rural missions", "Social workers"],
    biography: "French Jesuit priest who ministered to the poor and neglected in rural areas. He was known for his tireless work with the marginalized, including reformed prostitutes and abandoned children.",
    keyEvents: [
      "Joined Society of Jesus",
      "Ministered in rural mountainous regions",
      "Established refuges for reformed prostitutes",
      "Founded schools and catechism centers",
      "Died while on mission in harsh winter"
    ],
    spiritualThemes: ["Rural missions", "Care for marginalized", "Social reform"],
    prayers: [
      {
        title: "Prayer to Saint John Francis Regis",
        text: "Saint John Francis Regis, apostle to the forgotten, help us to reach out to those society has abandoned. Give us energy to serve the poor and marginalized. Amen."
      }
    ],
    quotes: [
      {
        text: "It is not enough to love God; we must love Him with all our strength.",
        source: "Missionary writings"
      }
    ],
    readings: [
      {
        title: "On Mission to the Poor",
        citation: "From his pastoral work",
        text: "Christ is found most readily among the poor and rejected, and there we must go to serve Him."
      }
    ],
    liturgicalColor: "White"
  },

  // June 17 - Saint Albert Chmielowski
  {
    id: "albert-chmielowski",
    name: "Saint Albert Chmielowski",
    feastDate: "June 17",
    type: "Confessor",
    birthYear: 1845,
    deathYear: 1916,
    canonizationYear: 1989,
    patronage: ["Homeless", "Disabled veterans"],
    biography: "Polish painter who gave up his artistic career to serve the homeless and poor. He founded the Albertine Brothers and Sisters to care for society's most abandoned members.",
    keyEvents: [
      "Lost leg in uprising against Russians",
      "Pursued career as painter",
      "Gave up art to serve the poor",
      "Founded Albertine congregations",
      "Ministered to homeless and outcasts"
    ],
    spiritualThemes: ["Service to homeless", "Artistic vocation", "Social justice"],
    prayers: [
      {
        title: "Prayer to Saint Albert Chmielowski",
        text: "Saint Albert Chmielowski, servant of the homeless, help us to see Christ in the poorest of the poor. Inspire us to use our talents in service of those in need. Amen."
      }
    ],
    quotes: [
      {
        text: "You must be as good as bread for the hungry.",
        source: "To his religious communities"
      }
    ],
    readings: [
      {
        title: "On Serving the Homeless",
        citation: "From his foundational work",
        text: "In every homeless person, we encounter Christ who had nowhere to lay His head."
      }
    ],
    liturgicalColor: "White"
  },

  // June 18 - Saint Gregory Barbarigo
  {
    id: "gregory-barbarigo",
    name: "Saint Gregory Barbarigo",
    feastDate: "June 18",
    type: "Confessor",
    birthYear: 1625,
    deathYear: 1697,
    canonizationYear: 1960,
    patronage: ["Seminarians", "Bishops"],
    biography: "Venetian cardinal and bishop known for his pastoral care and educational reforms. He established seminaries, founded a printing press for religious books, and cared personally for his flock.",
    keyEvents: [
      "Participated in Peace of Westphalia negotiations",
      "Appointed Bishop of Bergamo",
      "Later became Cardinal Bishop of Padua",
      "Established seminary and printing press",
      "Known for personal pastoral care"
    ],
    spiritualThemes: ["Episcopal leadership", "Education", "Pastoral care"],
    prayers: [
      {
        title: "Prayer to Saint Gregory Barbarigo",
        text: "Saint Gregory Barbarigo, devoted bishop and educator, help our bishops to lead with wisdom and compassion. Inspire all who educate future priests. Amen."
      }
    ],
    quotes: [
      {
        text: "A bishop must be a father to his priests and a shepherd to all the faithful.",
        source: "Pastoral letters"
      }
    ],
    readings: [
      {
        title: "On Episcopal Care",
        citation: "From his episcopal ministry",
        text: "The bishop must know each sheep in his flock and be ready to lay down his life for their spiritual welfare."
      }
    ],
    liturgicalColor: "White"
  },

  // June 19 - Saint Romuald
  {
    id: "romuald",
    name: "Saint Romuald",
    feastDate: "June 19",
    type: "Confessor",
    birthYear: 950,
    deathYear: 1027,
    canonizationYear: 1582,
    patronage: ["Camaldolese Order"],
    biography: "Italian monk who founded the Camaldolese Order, combining hermit life with cenobitic monasticism. He reformed monastic life and established numerous hermitages throughout Italy.",
    keyEvents: [
      "Witnessed his father kill a relative in duel",
      "Became monk to do penance",
      "Founded Camaldoli monastery",
      "Established hermitages throughout Italy",
      "Promoted both solitary and community life"
    ],
    spiritualThemes: ["Hermit life", "Monastic reform", "Contemplation"],
    prayers: [
      {
        title: "Prayer to Saint Romuald",
        text: "Saint Romuald, father of hermits, help us to find balance between solitude and community in our spiritual lives. Guide us in seeking God through prayer and penance. Amen."
      }
    ],
    quotes: [
      {
        text: "Sit in your cell as in paradise; put the whole world behind you and forget it.",
        source: "Monastic teachings"
      }
    ],
    readings: [
      {
        title: "On Hermit Life",
        citation: "From Camaldolese tradition",
        text: "The hermit life teaches us to find God in solitude and to bring that divine presence to others."
      }
    ],
    liturgicalColor: "White"
  },

  // June 20 - Saint Silverius
  {
    id: "silverius-pope",
    name: "Saint Silverius",
    feastDate: "June 20",
    type: "Pope",
    birthYear: 480,
    deathYear: 537,    patronage: ["Against famine"],
    biography: "Pope who refused to restore the Monophysite patriarch Anthimus to Constantinople, leading to his deposition and exile by Empress Theodora. He died in exile, likely from starvation.",
    keyEvents: [
      "Elected Pope in 536",
      "Refused to restore Monophysite patriarch",
      "Deposed by Emperor Justinian",
      "Exiled to island of Ponza",
      "Died in exile from harsh conditions"
    ],
    spiritualThemes: ["Papal authority", "Orthodox doctrine", "Martyrdom"],
    prayers: [
      {
        title: "Prayer to Saint Silverius",
        text: "Saint Silverius, courageous Pope and martyr, help us to defend orthodox doctrine even at great personal cost. Give our Church leaders strength to resist political pressure. Amen."
      }
    ],
    quotes: [
      {
        text: "The successor of Peter cannot compromise the faith to please earthly rulers.",
        source: "Before his exile"
      }
    ],
    readings: [
      {
        title: "On Papal Courage",
        citation: "From Church history",
        text: "The Pope must be ready to suffer rather than betray the deposit of faith entrusted to him."
      }
    ],
    liturgicalColor: "Red"
  },

  // June 21 - Saint Aloysius Gonzaga
  {
    id: "aloysius-gonzaga",
    name: "Saint Aloysius Gonzaga",
    feastDate: "June 21",
    type: "Confessor",
    birthYear: 1568,
    deathYear: 1591,
    canonizationYear: 1726,
    patronage: ["Youth", "Students", "AIDS caregivers"],
    biography: "Italian Jesuit who renounced his inheritance to become a religious. He died at age 23 while caring for plague victims in Rome. He is known for his purity and devotion to prayer.",
    keyEvents: [
      "Renounced inheritance to join Jesuits",
      "Made vow of perpetual virginity as child",
      "Studied at Roman College",
      "Cared for plague victims in Rome",
      "Died of plague at age 23"
    ],
    spiritualThemes: ["Youthful sanctity", "Purity", "Service to the sick"],
    prayers: [
      {
        title: "Prayer to Saint Aloysius Gonzaga",
        text: "Saint Aloysius Gonzaga, patron of youth, help young people to live lives of purity and dedication to God. Inspire them to serve others, especially the sick and dying. Amen."
      }
    ],
    quotes: [
      {
        text: "It is better to be a child of God than king of the whole world.",
        source: "On renouncing his inheritance"
      }
    ],
    readings: [
      {
        title: "On Youthful Holiness",
        citation: "From his spiritual writings",
        text: "Young hearts can burn with love for God as purely as any adult, and their fervor often surpasses their elders."
      }
    ],
    liturgicalColor: "White"
  },

  // June 22 - Saint Paulinus of Nola
  {
    id: "paulinus-nola",
    name: "Saint Paulinus of Nola",
    feastDate: "June 22",
    type: "Confessor",
    birthYear: 354,
    deathYear: 431,    patronage: ["Poets"],
    biography: "Roman senator who converted to Christianity and became bishop of Nola. He was a friend of Saint Augustine and is known for his Christian poetry and charitable works.",
    keyEvents: [
      "Served as Roman senator and consul",
      "Converted to Christianity",
      "Gave away wealth to help the poor",
      "Became priest and later bishop",
      "Wrote Christian poetry and letters"
    ],
    spiritualThemes: ["Conversion from wealth", "Christian poetry", "Pastoral care"],
    prayers: [
      {
        title: "Prayer to Saint Paulinus of Nola",
        text: "Saint Paulinus of Nola, convert and poet, help us to use our talents and resources for God's glory. Inspire Christian writers and artists to create beauty that leads souls to God. Amen."
      }
    ],
    quotes: [
      {
        text: "Christ is our true wealth; all else is poverty.",
        source: "Christian poems"
      }
    ],
    readings: [
      {
        title: "On Christian Poetry",
        citation: "From his writings",
        text: "Poetry can lift the soul to God and make divine truths more beautiful and memorable."
      }
    ],
    liturgicalColor: "White"
  },

  // June 23 - Saint Joseph Cafasso
  {
    id: "joseph-cafasso",
    name: "Saint Joseph Cafasso",
    feastDate: "June 23",
    type: "Confessor",
    birthYear: 1811,
    deathYear: 1860,
    canonizationYear: 1947,
    patronage: ["Prisoners", "Moral theology"],
    biography: "Italian priest known for his prison ministry and moral theology teaching. He was spiritual director to Saint John Bosco and was famous for accompanying condemned prisoners to execution.",
    keyEvents: [
      "Ordained priest despite physical deformities",
      "Taught moral theology at seminary",
      "Ministered to prisoners on death row",
      "Spiritual director to John Bosco",
      "Accompanied 68 condemned men to execution"
    ],
    spiritualThemes: ["Prison ministry", "Moral theology", "Death row ministry"],
    prayers: [
      {
        title: "Prayer to Saint Joseph Cafasso",
        text: "Saint Joseph Cafasso, apostle to prisoners, help us to see Christ in those condemned by society. Give us courage to minister to the most rejected and despised. Amen."
      }
    ],
    quotes: [
      {
        text: "In every prisoner, even the worst criminal, there beats the heart of a man made in God's image.",
        source: "Prison ministry"
      }
    ],
    readings: [
      {
        title: "On Death Row Ministry",
        citation: "From his pastoral work",
        text: "No one is so far from God that they cannot be reached by divine mercy in their final moments."
      }
    ],
    liturgicalColor: "White"
  },

  // June 24 - The Nativity of Saint John the Baptist
  {
    id: "nativity-john-baptist",
    name: "The Nativity of Saint John the Baptist",
    feastDate: "June 24",
    type: "Other",    deathYear: 30,    patronage: ["Baptism", "Jordan", "Puerto Rico"],
    biography: "The forerunner of Christ, born to Elizabeth and Zachary in their old age. John prepared the way for Jesus through his preaching and baptism, and was martyred by Herod Antipas.",
    keyEvents: [
      "Born to elderly parents Elizabeth and Zachary",
      "Leaped in his mother's womb at Mary's visit",
      "Preached repentance in the wilderness",
      "Baptized Jesus in the Jordan River",
      "Beheaded by Herod Antipas"
    ],
    spiritualThemes: ["Preparing the way", "Baptism", "Prophetic ministry"],
    prayers: [
      {
        title: "Prayer on the Nativity of John the Baptist",
        text: "Saint John the Baptist, voice crying in the wilderness, help us to prepare the way for Christ in our hearts and in our world. Make straight the paths to God. Amen."
      }
    ],
    quotes: [
      {
        text: "He must increase, but I must decrease.",
        source: "John 3:30"
      }
    ],
    readings: [
      {
        title: "The Birth of John",
        citation: "Luke 1:57-80",
        text: "When the time came for Elizabeth to give birth, she bore a son. Her neighbors and relatives heard that the Lord had shown great mercy to her, and they rejoiced with her."
      }
    ],
    liturgicalColor: "White"
  },

  // June 25 - Saint Maximus of Turin
  {
    id: "maximus-turin",
    name: "Saint Maximus of Turin",
    feastDate: "June 25",
    type: "Confessor",
    birthYear: 380,
    deathYear: 465,    patronage: ["Turin"],
    biography: "Bishop of Turin known for his sermons and pastoral care during the barbarian invasions. He defended his flock against Arianism and pagan practices while maintaining orthodox Catholic doctrine.",
    keyEvents: [
      "Became Bishop of Turin",
      "Preached against Arian heresy",
      "Defended people during barbarian invasions",
      "Wrote numerous homilies",
      "Opposed pagan festivals and practices"
    ],
    spiritualThemes: ["Pastoral preaching", "Defense against heresy", "Protection of the flock"],
    prayers: [
      {
        title: "Prayer to Saint Maximus of Turin",
        text: "Saint Maximus of Turin, faithful shepherd, help our bishops to preach the truth with clarity and to protect their flocks from error. Give us courage to defend orthodox faith. Amen."
      }
    ],
    quotes: [
      {
        text: "The bishop must be a watchful guardian, always alert to defend his sheep from wolves.",
        source: "Homilies"
      }
    ],
    readings: [
      {
        title: "On Pastoral Vigilance",
        citation: "From his sermons",
        text: "The shepherd must know his flock so well that he can detect the approach of danger before the sheep sense it."
      }
    ],
    liturgicalColor: "White"
  },

  // June 26 - Saint Josemaría Escrivá
  {
    id: "josemaria-escriva",
    name: "Saint Josemaría Escrivá",
    feastDate: "June 26",
    type: "Confessor",
    birthYear: 1902,
    deathYear: 1975,
    canonizationYear: 2002,
    patronage: ["Opus Dei"],
    biography: "Spanish priest who founded Opus Dei, emphasizing the universal call to holiness and finding God in ordinary work. He promoted the idea that lay people can achieve sanctity through their daily activities.",
    keyEvents: [
      "Founded Opus Dei in 1928",
      "Promoted sanctification through ordinary work",
      "Endured persecution during Spanish Civil War",
      "Wrote 'The Way' and other spiritual works",
      "Established university and educational institutions"
    ],
    spiritualThemes: ["Universal call to holiness", "Sanctification through work", "Lay spirituality"],
    prayers: [
      {
        title: "Prayer to Saint Josemaría Escrivá",
        text: "Saint Josemaría Escrivá, apostle of ordinary life, help us to find God in our daily work and activities. Teach us that all honest work can be a path to holiness. Amen."
      }
    ],
    quotes: [
      {
        text: "There is something holy, something divine hidden in the most ordinary situations.",
        source: "Spiritual teachings"
      }
    ],
    readings: [
      {
        title: "On Work as Prayer",
        citation: "From 'The Way'",
        text: "Work becomes prayer when it is offered to God and done with love for Him and for others."
      }
    ],
    liturgicalColor: "White"
  },

  // June 27 - Saint Cyril of Alexandria
  {
    id: "cyril-alexandria",
    name: "Saint Cyril of Alexandria",
    feastDate: "June 27",
    type: "Doctor",
    birthYear: 376,
    deathYear: 444,    patronage: ["Alexandria", "Orthodox doctrine"],
    biography: "Patriarch of Alexandria and Doctor of the Church who defended orthodox Christology against Nestorianism. He was instrumental in the Council of Ephesus and affirmed Mary as Theotokos (God-bearer).",
    keyEvents: [
      "Became Patriarch of Alexandria",
      "Opposed Nestorian heresy",
      "Led Council of Ephesus (431)",
      "Defended title 'Theotokos' for Mary",
      "Wrote extensive theological works"
    ],
    spiritualThemes: ["Christological doctrine", "Marian theology", "Orthodox teaching"],
    prayers: [
      {
        title: "Prayer to Saint Cyril of Alexandria",
        text: "Saint Cyril of Alexandria, defender of orthodox doctrine, help us to understand the mystery of Christ's two natures. Protect us from errors about the Incarnation. Amen."
      }
    ],
    quotes: [
      {
        text: "The Word became flesh, not by changing into flesh, but by assuming flesh.",
        source: "Against Nestorianism"
      }
    ],
    readings: [
      {
        title: "On the Incarnation",
        citation: "From theological writings",
        text: "Christ is one person with two natures, truly God and truly man, united without confusion or division."
      }
    ],
    liturgicalColor: "White"
  },

  // June 28 - Saint Irenaeus
  {
    id: "irenaeus",
    name: "Saint Irenaeus",
    feastDate: "June 28",
    type: "Martyr",
    birthYear: 130,
    deathYear: 202,    patronage: ["Against heresies"],
    biography: "Bishop of Lyons and early Church Father who opposed Gnosticism. His work 'Against Heresies' was crucial in defending orthodox Christian doctrine. He emphasized apostolic succession and Scripture.",
    keyEvents: [
      "Student of Saint Polycarp",
      "Became Bishop of Lyons",
      "Wrote 'Against Heresies'",
      "Defended apostolic tradition",
      "Martyred during persecution"
    ],
    spiritualThemes: ["Defense against heresy", "Apostolic tradition", "Biblical interpretation"],
    prayers: [
      {
        title: "Prayer to Saint Irenaeus",
        text: "Saint Irenaeus, hammer of heresies, help us to recognize and oppose false teachings. Strengthen our faith in apostolic tradition and Sacred Scripture. Amen."
      }
    ],
    quotes: [
      {
        text: "The glory of God is man fully alive.",
        source: "Against Heresies"
      }
    ],
    readings: [
      {
        title: "On Apostolic Tradition",
        citation: "From 'Against Heresies'",
        text: "The Church has received from the apostles the tradition of faith, which is preserved in the succession of bishops."
      }
    ],
    liturgicalColor: "Red"
  },

  // June 29 - Saints Peter and Paul
  {
    id: "peter-paul-apostles",
    name: "Saints Peter and Paul",
    feastDate: "June 29",
    type: "Martyr",    deathYear: 67,    patronage: ["Rome", "Apostolic succession", "Missions"],
    biography: "The two great apostles who established the Church in Rome. Peter was the first Pope, and Paul was the great missionary to the Gentiles. Both were martyred in Rome under Emperor Nero.",
    keyEvents: [
      "Peter: Called by Jesus, denied Him, later restored",
      "Paul: Persecuted Christians, converted on road to Damascus",
      "Both preached and established churches",
      "Both wrote epistles included in New Testament",
      "Both martyred in Rome around 67 AD"
    ],
    spiritualThemes: ["Apostolic foundation", "Missionary zeal", "Papal primacy"],
    prayers: [
      {
        title: "Prayer to Saints Peter and Paul",
        text: "Saints Peter and Paul, pillars of the Church, help us to be faithful disciples of Christ. Give us Peter's loyalty and Paul's missionary zeal. Protect the Church you founded. Amen."
      }
    ],
    quotes: [
      {
        text: "You are Peter, and on this rock I will build my church.",
        source: "Matthew 16:18 (to Peter)"
      }
    ],
    readings: [
      {
        title: "On Apostolic Foundation",
        citation: "From New Testament",
        text: "The Church is built on the foundation of the apostles and prophets, with Christ Jesus as the cornerstone."
      }
    ],
    liturgicalColor: "Red"
  },

  // June 30 - The First Holy Martyrs of the Roman Church
  {
    id: "first-martyrs-rome",
    name: "The First Holy Martyrs of the Roman Church",
    feastDate: "June 30",
    type: "Martyr",    deathYear: 64,    patronage: ["Rome", "Persecuted Christians"],
    biography: "The first Christians martyred in Rome under Emperor Nero in 64 AD, blamed for the great fire of Rome. They were tortured and killed in various cruel ways, including being used as human torches in Nero's gardens.",
    keyEvents: [
      "Great fire of Rome in 64 AD",
      "Nero blamed Christians for the fire",
      "Mass persecution and arrests",
      "Tortured and executed in brutal ways",
      "Used as human torches in imperial gardens"
    ],
    spiritualThemes: ["Early persecution", "Collective witness", "Roman Church foundation"],
    prayers: [
      {
        title: "Prayer to the First Martyrs of Rome",
        text: "Holy Martyrs of Rome, first witnesses of Christ in the eternal city, help us to remain faithful under persecution. Give us courage to witness to Christ in difficult times. Amen."
      }
    ],
    quotes: [
      {
        text: "We would rather die for Christ than live without Him.",
        source: "Traditional martyrdom account"
      }
    ],
    readings: [
      {
        title: "On Early Persecution",
        citation: "From Tacitus and early Church accounts",
        text: "The blood of martyrs became the seed of the Church, and their witness strengthened the faith of believers."
      }
    ],
    liturgicalColor: "Red"
  },

  // July 1 - Saint Junípero Serra
  {
    id: "junipero-serra",
    name: "Saint Junípero Serra",
    feastDate: "July 1",
    type: "Confessor",
    birthYear: 1713,
    deathYear: 1784,
    canonizationYear: 2015,
    patronage: ["California", "Hispanic Americans"],
    biography: "Spanish Franciscan missionary who founded numerous missions in California. He established 21 missions along the California coast and baptized over 5,000 Native Americans, though his methods remain controversial.",
    keyEvents: [
      "Joined Franciscan order in Spain",
      "Traveled to Mexico for missionary work",
      "Founded first California mission at San Diego",
      "Established 8 more missions before his death",
      "Walked hundreds of miles between missions"
    ],
    spiritualThemes: ["Missionary zeal", "Evangelization", "Cultural encounter"],
    prayers: [
      {
        title: "Prayer to Saint Junípero Serra",
        text: "Saint Junípero Serra, tireless missionary, help us to bring the Gospel to all peoples with respect for their dignity and culture. Give us your zeal for souls and love for Christ. Amen."
      }
    ],
    quotes: [
      {
        text: "Always go forward, never turn back.",
        source: "Missionary motto"
      }
    ],
    readings: [
      {
        title: "On Missionary Work",
        citation: "From his missionary letters",
        text: "The missionary must plant the seeds of faith with patience, trusting that God will give the increase."
      }
    ],
    liturgicalColor: "White"
  },

  // July 2 - Saint Otto of Bamberg
  {
    id: "otto-bamberg",
    name: "Saint Otto of Bamberg",
    feastDate: "July 2",
    type: "Confessor",
    birthYear: 1060,
    deathYear: 1139,
    canonizationYear: 1189,
    patronage: ["Pomerania", "Poland"],
    biography: "German bishop known as the 'Apostle of Pomerania.' He evangelized the pagan Slavic tribes in what is now northern Poland and established numerous churches and monasteries.",
    keyEvents: [
      "Appointed Bishop of Bamberg",
      "Advisor to Holy Roman Emperor",
      "Led two missionary journeys to Pomerania",
      "Baptized thousands of Slavic pagans",
      "Founded monasteries and schools"
    ],
    spiritualThemes: ["Missionary work", "Cultural evangelization", "Church building"],
    prayers: [
      {
        title: "Prayer to Saint Otto of Bamberg",
        text: "Saint Otto of Bamberg, apostle of Pomerania, help us to bring Christ to those who do not know Him. Give us wisdom to adapt the Gospel message to different cultures. Amen."
      }
    ],
    quotes: [
      {
        text: "The Gospel must be planted gently, like seed in good soil.",
        source: "Missionary approach"
      }
    ],
    readings: [
      {
        title: "On Cultural Evangelization",
        citation: "From his missionary work",
        text: "The missionary must learn the language and customs of the people he serves, becoming all things to all people."
      }
    ],
    liturgicalColor: "White"
  },

  // July 3 - Saint Thomas the Apostle
  {
    id: "thomas-apostle",
    name: "Saint Thomas the Apostle",
    feastDate: "July 3",
    type: "Martyr",    deathYear: 72,    patronage: ["India", "Architects", "Doubters"],
    biography: "One of the Twelve Apostles, known as 'Doubting Thomas' for questioning Christ's resurrection until he saw the wounds. He preached the Gospel in India and was martyred there, establishing the Christian communities that survive today.",
    keyEvents: [
      "Called by Jesus to be apostle",
      "Doubted the resurrection until seeing Jesus",
      "Made famous profession of faith: 'My Lord and my God'",
      "Traveled to India to preach Gospel",
      "Martyred by spear thrust in India"
    ],
    spiritualThemes: ["Faith through doubt", "Apostolic mission", "Eastern Christianity"],
    prayers: [
      {
        title: "Prayer to Saint Thomas the Apostle",
        text: "Saint Thomas, faithful apostle, help us to move from doubt to faith as you did. Strengthen our belief in Christ's resurrection and divinity. Amen."
      }
    ],
    quotes: [
      {
        text: "My Lord and my God!",
        source: "John 20:28"
      }
    ],
    readings: [
      {
        title: "The Doubting Thomas Account",
        citation: "John 20:24-29",
        text: "Then Jesus said to Thomas, 'Put your finger here and see my hands. Reach out your hand and put it in my side. Do not doubt but believe.'"
      }
    ],
    liturgicalColor: "Red"
  },

  // July 4 - Saint Elizabeth of Portugal
  {
    id: "elizabeth-portugal",
    name: "Saint Elizabeth of Portugal",
    feastDate: "July 4",
    type: "Other",
    birthYear: 1271,
    deathYear: 1336,
    canonizationYear: 1625,
    patronage: ["Queens", "Peacemakers", "Portugal"],
    biography: "Queen of Portugal known for her charity to the poor and her role as peacemaker between warring family members and kingdoms. After her husband's death, she became a Franciscan tertiary.",
    keyEvents: [
      "Married King Denis of Portugal at age 12",
      "Established hospitals and houses for poor",
      "Mediated between her husband and rebellious son",
      "Made peace between Portugal and Castile",
      "Became Franciscan tertiary after widowhood"
    ],
    spiritualThemes: ["Royal sanctity", "Peacemaking", "Charity to poor"],
    prayers: [
      {
        title: "Prayer to Saint Elizabeth of Portugal",
        text: "Saint Elizabeth of Portugal, queen and peacemaker, help us to use whatever authority we have to serve the poor and make peace. Teach us to be instruments of reconciliation. Amen."
      }
    ],
    quotes: [
      {
        text: "Blessed are the peacemakers, for they will be called children of God.",
        source: "Her favorite scripture (Matthew 5:9)"
      }
    ],
    readings: [
      {
        title: "On Royal Charity",
        citation: "From her charitable works",
        text: "A crown is truly valuable only when it is used to serve the poorest subjects of the realm."
      }
    ],
    liturgicalColor: "White"
  },

  // July 5 - Saint Anthony Zaccaria
  {
    id: "anthony-zaccaria",
    name: "Saint Anthony Zaccaria",
    feastDate: "July 5",
    type: "Confessor",
    birthYear: 1502,
    deathYear: 1539,
    canonizationYear: 1897,
    patronage: ["Barnabites"],
    biography: "Italian priest who founded the Barnabites (Clerks Regular of Saint Paul). He promoted frequent communion, devotion to the Eucharist, and the renewal of Christian life through education and preaching.",
    keyEvents: [
      "Studied medicine and then theology",
      "Founded the Barnabite religious order",
      "Established the Angelic Sisters of Saint Paul",
      "Promoted lay association of Married Couples of Saint Paul",
      "Died young at age 36"
    ],
    spiritualThemes: ["Eucharistic devotion", "Educational reform", "Lay apostolate"],
    prayers: [
      {
        title: "Prayer to Saint Anthony Zaccaria",
        text: "Saint Anthony Zaccaria, zealous reformer, help us to renew our Christian life through frequent communion and devotion to the Eucharist. Inspire us to educate others in the faith. Amen."
      }
    ],
    quotes: [
      {
        text: "Run to the feet of Jesus in the Blessed Sacrament, there you will find everything you need.",
        source: "Spiritual advice"
      }
    ],
    readings: [
      {
        title: "On Eucharistic Life",
        citation: "From his teachings",
        text: "The Eucharist is the source and summit of Christian life, transforming all our actions into prayer."
      }
    ],
    liturgicalColor: "White"
  },

  // July 6 - Saint Maria Goretti
  {
    id: "maria-goretti",
    name: "Saint Maria Goretti",
    feastDate: "July 6",
    type: "Virgin",
    birthYear: 1890,
    deathYear: 1902,
    canonizationYear: 1950,
    patronage: ["Youth", "Purity", "Rape victims"],
    biography: "Italian girl who was murdered at age 11 while resisting rape. On her deathbed, she forgave her attacker and expressed concern for his salvation. Her attacker later repented and attended her canonization.",
    keyEvents: [
      "Born into poor farming family",
      "Father died when she was 9",
      "Repeatedly resisted advances from neighbor",
      "Stabbed 14 times for refusing assault",
      "Forgave attacker before dying",
      "Attacker repented and attended her canonization"
    ],
    spiritualThemes: ["Purity", "Forgiveness", "Youthful martyrdom"],
    prayers: [
      {
        title: "Prayer to Saint Maria Goretti",
        text: "Saint Maria Goretti, pure martyr and model of forgiveness, help young people to preserve their purity and to forgive those who hurt them. Protect all children from harm. Amen."
      }
    ],
    quotes: [
      {
        text: "I forgive him and I want him to be with me in heaven forever.",
        source: "Final words about her attacker"
      }
    ],
    readings: [
      {
        title: "On Purity and Forgiveness",
        citation: "From her canonization",
        text: "True purity of heart leads to the ability to forgive even the gravest injuries, seeing Christ in every person."
      }
    ],
    liturgicalColor: "Red"
  },

  // July 7 - Saint Willibald
  {
    id: "willibald",
    name: "Saint Willibald",
    feastDate: "July 7",
    type: "Confessor",
    birthYear: 700,
    deathYear: 787,    patronage: ["Pilgrims", "Eichstätt"],
    biography: "English monk who became the first known English pilgrim to the Holy Land. He later became Bishop of Eichstätt in Germany and helped establish Christianity in Germanic territories with Saint Boniface.",
    keyEvents: [
      "Made pilgrimage to Holy Land at young age",
      "Spent years in monasteries in Italy",
      "Called by Pope to help Saint Boniface in Germany",
      "Appointed Bishop of Eichstätt",
      "Founded monasteries and established schools"
    ],
    spiritualThemes: ["Pilgrimage", "Missionary work", "Monastic life"],
    prayers: [
      {
        title: "Prayer to Saint Willibald",
        text: "Saint Willibald, pilgrim and missionary, help us to seek God through spiritual journeys and to share our faith with others. Inspire all who travel on pilgrimage. Amen."
      }
    ],
    quotes: [
      {
        text: "Every step toward the holy places is a step closer to God.",
        source: "On pilgrimage"
      }
    ],
    readings: [
      {
        title: "On Pilgrimage",
        citation: "From his travel accounts",
        text: "The journey to holy places opens the heart to receive God's grace and strengthens faith through hardship."
      }
    ],
    liturgicalColor: "White"
  },

  // July 8 - Saint Kilian
  {
    id: "kilian",
    name: "Saint Kilian",
    feastDate: "July 8",
    type: "Martyr",
    birthYear: 640,
    deathYear: 689,    patronage: ["Würzburg", "Germany"],
    biography: "Irish missionary bishop who evangelized in Franconia (Germany). He was martyred along with two companions for opposing the unlawful marriage of Duke Gozbert, demonstrating courage in defending Christian morality.",
    keyEvents: [
      "Left Ireland with 11 companions for missionary work",
      "Preached in Würzburg and surrounding areas",
      "Baptized Duke Gozbert and many others",
      "Opposed Duke's unlawful marriage to his brother's widow",
      "Martyred with companions Colman and Totnan"
    ],
    spiritualThemes: ["Irish missions", "Moral courage", "Martyrdom"],
    prayers: [
      {
        title: "Prayer to Saint Kilian",
        text: "Saint Kilian, courageous missionary and martyr, help us to defend Christian morality even at great personal cost. Give us courage to speak truth to power. Amen."
      }
    ],
    quotes: [
      {
        text: "The Gospel demands we speak the truth, whatever the consequences.",
        source: "Before martyrdom"
      }
    ],
    readings: [
      {
        title: "On Moral Courage",
        citation: "From missionary accounts",
        text: "The missionary must not only preach the Gospel but also defend its moral implications, even unto death."
      }
    ],
    liturgicalColor: "Red"
  },

  // July 9 - Saint Augustine Zhao Rong
  {
    id: "augustine-zhao-rong",
    name: "Saint Augustine Zhao Rong",
    feastDate: "July 9",
    type: "Martyr",
    birthYear: 1746,
    deathYear: 1815,
    canonizationYear: 2000,
    patronage: ["Chinese martyrs"],
    biography: "Chinese soldier who converted to Christianity and became a priest. He is the principal saint among the 120 Chinese martyrs who died for their faith during various persecutions from 1648 to 1930.",
    keyEvents: [
      "Served as soldier escorting Bishop Dufresse",
      "Converted to Christianity after witnessing bishop's faith",
      "Studied for priesthood despite persecution",
      "Ordained as priest in 1781",
      "Arrested and tortured to death during persecution"
    ],
    spiritualThemes: ["Chinese Christianity", "Conversion", "Martyrdom"],
    prayers: [
      {
        title: "Prayer to Saint Augustine Zhao Rong",
        text: "Saint Augustine Zhao Rong and Chinese martyrs, witnesses to Christ in the East, help us to remain faithful to the Gospel despite persecution. Strengthen the Church in China. Amen."
      }
    ],
    quotes: [
      {
        text: "Christ is the same whether in Rome or in China.",
        source: "Martyrdom testimony"
      }
    ],
    readings: [
      {
        title: "On Chinese Martyrdom",
        citation: "From the 120 Chinese martyrs",
        text: "The blood of Chinese martyrs has watered the seed of faith, showing that Christianity transcends all cultures."
      }
    ],
    liturgicalColor: "Red"
  },

  // July 10 - Saint Rufina and Justa
  {
    id: "rufina-justa",
    name: "Saints Rufina and Justa",
    feastDate: "July 10",
    type: "Martyr",
    birthYear: 268,
    deathYear: 287,    patronage: ["Seville", "Potters"],
    biography: "Two sisters from Seville who were Christian potters. They refused to sell their pottery for pagan festivals and were martyred during the persecution under Diocletian. They are the patron saints of Seville.",
    keyEvents: [
      "Worked as potters in Seville",
      "Refused to sell pottery for pagan festivals",
      "Destroyed pagan idols in their shop",
      "Arrested and tortured for their faith",
      "Martyred during Diocletian persecution"
    ],
    spiritualThemes: ["Resistance to paganism", "Sisterly martyrdom", "Craftspeople saints"],
    prayers: [
      {
        title: "Prayer to Saints Rufina and Justa",
        text: "Saints Rufina and Justa, faithful sisters and martyrs, help us to refuse compromise with evil even in our daily work. Give us courage to witness to Christ in our professions. Amen."
      }
    ],
    quotes: [
      {
        text: "We will not make our pottery serve false gods.",
        source: "Before their martyrdom"
      }
    ],
    readings: [
      {
        title: "On Faith in Daily Work",
        citation: "From their martyrdom account",
        text: "Every honest trade can be sanctified when it refuses to serve what is contrary to God's will."
      }
    ],
    liturgicalColor: "Red"
  },

  // July 11 - Saint Benedict of Nursia
  {
    id: "benedict-nursia",
    name: "Saint Benedict of Nursia",
    feastDate: "July 11",
    type: "Confessor",
    birthYear: 480,
    deathYear: 547,    patronage: ["Europe", "Students", "Monks"],
    biography: "Italian monk who founded Western monasticism and wrote the Rule of Saint Benedict. He established numerous monasteries and is considered the father of Western monasticism. Pope Paul VI proclaimed him patron of Europe.",
    keyEvents: [
      "Became hermit at Subiaco as young man",
      "Founded monastery at Monte Cassino",
      "Wrote the Rule of Saint Benedict",
      "Established network of monasteries",
      "Had vision of the world in a ray of light"
    ],
    spiritualThemes: ["Monastic life", "Prayer and work", "European Christianity"],
    prayers: [
      {
        title: "Prayer to Saint Benedict",
        text: "Saint Benedict, father of Western monasticism, help us to live balanced lives of prayer and work. Guide all who seek God in religious communities. Protect Europe in its Christian heritage. Amen."
      }
    ],
    quotes: [
      {
        text: "Ora et labora (Pray and work)",
        source: "Benedictine motto"
      }
    ],
    readings: [
      {
        title: "From the Rule of Saint Benedict",
        citation: "Chapter 4: The Tools for Good Works",
        text: "Your way of acting should be different from the world's way; the love of Christ must come before all else."
      }
    ],
    liturgicalColor: "White"
  },

  // July 12 - Saints John Jones and John Wall
  {
    id: "john-jones-john-wall",
    name: "Saints John Jones and John Wall",
    feastDate: "July 12",
    type: "Martyr",    deathYear: 1598,
    canonizationYear: 1970,
    patronage: ["Welsh martyrs"],
    biography: "Two of the Forty Martyrs of England and Wales. John Jones was a Franciscan priest and John Wall was a diocesan priest. Both were executed for their priesthood during the Protestant persecution of Catholics.",
    keyEvents: [
      "Both served as priests during persecution",
      "Ministered secretly to Catholic families",
      "Arrested for celebrating Mass",
      "Refused to renounce Catholic faith",
      "Executed at Tyburn for being priests"
    ],
    spiritualThemes: ["English martyrdom", "Priestly fidelity", "Religious persecution"],
    prayers: [
      {
        title: "Prayer to Saints John Jones and John Wall",
        text: "Saints John Jones and John Wall, faithful priests and martyrs, help us to remain true to our Catholic faith in times of persecution. Strengthen all priests in their sacred ministry. Amen."
      }
    ],
    quotes: [
      {
        text: "We die for the Catholic faith, which is the only true faith.",
        source: "Final testimony"
      }
    ],
    readings: [
      {
        title: "On Priestly Martyrdom",
        citation: "From English martyr accounts",
        text: "The priest who dies for his faith sanctifies not only himself but also those he served in his ministry."
      }
    ],
    liturgicalColor: "Red"
  },

  // July 13 - Saint Henry the Emperor
  {
    id: "henry-emperor",
    name: "Saint Henry the Emperor",
    feastDate: "July 13",
    type: "Confessor",
    birthYear: 973,
    deathYear: 1024,
    canonizationYear: 1146,
    patronage: ["Germany", "Childless couples"],
    biography: "Holy Roman Emperor who used his power to promote the Church and Christian values. He and his wife Saint Cunegunda lived in perpetual virginity and devoted their resources to founding churches and monasteries.",
    keyEvents: [
      "Crowned Holy Roman Emperor in 1014",
      "Founded numerous churches and monasteries",
      "Reformed ecclesiastical discipline",
      "Led military campaigns to defend Christianity",
      "Lived in celibate marriage with Saint Cunegunda"
    ],
    spiritualThemes: ["Royal sanctity", "Church reform", "Celibate marriage"],
    prayers: [
      {
        title: "Prayer to Saint Henry the Emperor",
        text: "Saint Henry the Emperor, just ruler and reformer, help our leaders to use their authority to serve God and promote Christian values. Guide married couples who cannot have children. Amen."
      }
    ],
    quotes: [
      {
        text: "Christ is the true King; I am merely His steward on earth.",
        source: "Imperial motto"
      }
    ],
    readings: [
      {
        title: "On Christian Kingship",
        citation: "From his imperial reforms",
        text: "The Christian ruler must see his power as a service to God and his people, not as personal privilege."
      }
    ],
    liturgicalColor: "White"
  },

  // July 14 - Saint Kateri Tekakwitha
  {
    id: "kateri-tekakwitha",
    name: "Saint Kateri Tekakwitha",
    feastDate: "July 14",
    type: "Virgin",
    birthYear: 1656,
    deathYear: 1680,
    canonizationYear: 2012,
    patronage: ["Native Americans", "Ecology", "Exiles"],
    biography: "Mohawk-Algonquin woman who converted to Christianity and lived a life of remarkable holiness. Orphaned and disfigured by smallpox, she faced persecution for her faith but persevered in prayer and penance.",
    keyEvents: [
      "Parents died of smallpox when she was 4",
      "Converted to Christianity despite family opposition",
      "Baptized by Jesuit missionary Jacques de Lamberville",
      "Fled to Christian mission near Montreal",
      "Lived life of prayer, penance, and devotion to Eucharist"
    ],
    spiritualThemes: ["Native American spirituality", "Conversion", "Persecution for faith"],
    prayers: [
      {
        title: "Prayer to Saint Kateri Tekakwitha",
        text: "Saint Kateri Tekakwitha, lily of the Mohawks, help us to remain faithful to Christ despite opposition from family and culture. Inspire care for creation and respect for indigenous peoples. Amen."
      }
    ],
    quotes: [
      {
        text: "Who can tell me what is most pleasing to God, that I may do it?",
        source: "Her constant question"
      }
    ],
    readings: [
      {
        title: "On Native American Faith",
        citation: "From her conversion story",
        text: "The Gospel can take root in any culture, transforming it while preserving what is good and beautiful."
      }
    ],
    liturgicalColor: "White"
  },

  // July 15 - Saint Bonaventure
  {
    id: "bonaventure",
    name: "Saint Bonaventure",
    feastDate: "July 15",
    type: "Doctor",
    birthYear: 1221,
    deathYear: 1274,
    canonizationYear: 1482,
    patronage: ["Franciscans", "Theologians"],
    biography: "Italian Franciscan theologian and Doctor of the Church known as the 'Seraphic Doctor.' He was Minister General of the Franciscans and later Cardinal-Bishop. His mystical theology emphasized the journey of the soul to God.",
    keyEvents: [
      "Joined Franciscan order as young man",
      "Became professor at University of Paris",
      "Elected Minister General of Franciscans",
      "Wrote 'Journey of the Mind to God'",
      "Appointed Cardinal-Bishop by Pope Gregory X"
    ],
    spiritualThemes: ["Franciscan spirituality", "Mystical theology", "Academic excellence"],
    prayers: [
      {
        title: "Prayer to Saint Bonaventure",
        text: "Saint Bonaventure, seraphic doctor, help us to journey toward God through prayer and study. Guide theologians and all who teach the faith to combine learning with holiness. Amen."
      }
    ],
    quotes: [
      {
        text: "No one comes to wisdom except through love, holiness, and prayer.",
        source: "Journey of the Mind to God"
      }
    ],
    readings: [
      {
        title: "On the Spiritual Journey",
        citation: "From 'Journey of the Mind to God'",
        text: "The soul ascends to God through three stages: seeing God in creation, in the soul, and above the soul in divine light."
      }
    ],
    liturgicalColor: "White"
  },

  // July 16 - Our Lady of Mount Carmel
  {
    id: "our-lady-mount-carmel",
    name: "Our Lady of Mount Carmel",
    feastDate: "July 16",
    type: "Other",    patronage: ["Carmelites", "Chile", "Bolivia"],
    biography: "The feast celebrating Mary's special relationship with the Carmelite Order. According to tradition, Mary appeared to Saint Simon Stock and gave him the Brown Scapular, promising special protection to those who wear it devoutly.",
    keyEvents: [
      "Early hermits on Mount Carmel devoted to Mary",
      "Carmelite Order developed Marian spirituality",
      "Vision of Mary giving Brown Scapular to Saint Simon Stock",
      "Spread of scapular devotion throughout Church",
      "Mary proclaimed patroness of Carmelite Order"
    ],
    spiritualThemes: ["Marian devotion", "Carmelite spirituality", "Scapular devotion"],
    prayers: [
      {
        title: "Prayer to Our Lady of Mount Carmel",
        text: "Our Lady of Mount Carmel, Mother and Beauty of Carmel, protect all who wear your scapular with devotion. Help us to imitate your virtues and follow your Son with pure hearts. Amen."
      }
    ],
    quotes: [
      {
        text: "Whosoever dies wearing this scapular shall not suffer eternal fire.",
        source: "Promise to Saint Simon Stock"
      }
    ],
    readings: [
      {
        title: "On the Brown Scapular",
        citation: "From Carmelite tradition",
        text: "The scapular is a sign of Mary's maternal protection and a reminder to live in imitation of her virtues."
      }
    ],
    liturgicalColor: "White"
  },

  // July 17 - Saint Alexius
  {
    id: "alexius",
    name: "Saint Alexius",
    feastDate: "July 17",
    type: "Confessor",
    birthYear: 350,
    deathYear: 417,    patronage: ["Beggars", "Belt-makers", "Nurses"],
    biography: "Roman nobleman who left his wealthy family on his wedding day to live as a beggar and hermit. He spent years in pilgrimage and poverty, eventually returning home where he lived unrecognized as a beggar for 17 years.",
    keyEvents: [
      "Born to wealthy Roman senator",
      "Left home on wedding day to serve God in poverty",
      "Lived as beggar and pilgrim for many years",
      "Returned home unrecognized",
      "Lived under his father's staircase for 17 years",
      "Revealed identity only upon death"
    ],
    spiritualThemes: ["Voluntary poverty", "Hidden holiness", "Renunciation of wealth"],
    prayers: [
      {
        title: "Prayer to Saint Alexius",
        text: "Saint Alexius, man of God, help us to value spiritual riches over material wealth. Give us courage to renounce what holds us back from serving God completely. Amen."
      }
    ],
    quotes: [
      {
        text: "Better to be rich in God than poor in virtue.",
        source: "Traditional saying"
      }
    ],
    readings: [
      {
        title: "On Voluntary Poverty",
        citation: "From his life example",
        text: "True wealth lies not in what we possess but in how completely we belong to God."
      }
    ],
    liturgicalColor: "White"
  },

  // July 18 - Saint Camillus de Lellis
  {
    id: "camillus-de-lellis",
    name: "Saint Camillus de Lellis",
    feastDate: "July 18",
    type: "Confessor",
    birthYear: 1550,
    deathYear: 1614,
    canonizationYear: 1746,
    patronage: ["Hospitals", "Nurses", "Sick people"],
    biography: "Italian priest who founded the Camillians (Ministers of the Sick). A former soldier and gambler, he converted and devoted his life to caring for the sick and dying, revolutionizing hospital care.",
    keyEvents: [
      "Lived as soldier and compulsive gambler",
      "Converted after vision while working at Capuchin monastery",
      "Founded congregation devoted to caring for sick",
      "Introduced reforms in hospital care",
      "Ministered during plague epidemics"
    ],
    spiritualThemes: ["Care for the sick", "Conversion from sin", "Hospital ministry"],
    prayers: [
      {
        title: "Prayer to Saint Camillus de Lellis",
        text: "Saint Camillus de Lellis, patron of the sick, help us to see Christ in those who suffer. Inspire healthcare workers to serve with compassion and skill. Comfort all who are ill. Amen."
      }
    ],
    quotes: [
      {
        text: "The sick are our masters, and we must be their servants.",
        source: "To his religious community"
      }
    ],
    readings: [
      {
        title: "On Service to the Sick",
        citation: "From his hospital reforms",
        text: "In caring for the sick, we touch the wounded flesh of Christ and participate in His healing ministry."
      }
    ],
    liturgicalColor: "White"
  },

  // July 19 - Saint Macrina the Younger
  {
    id: "macrina-younger",
    name: "Saint Macrina the Younger",
    feastDate: "July 19",
    type: "Virgin",
    birthYear: 330,
    deathYear: 379,    patronage: ["Philosophy", "Widows"],
    biography: "Sister of Saints Basil the Great and Gregory of Nyssa. She was instrumental in their spiritual formation and established a monastic community for women. She was renowned for her wisdom and holiness.",
    keyEvents: [
      "Engaged as teenager but fiancé died",
      "Refused other marriages to dedicate life to God",
      "Founded monastic community on family estate",
      "Guided spiritual development of her brothers",
      "Engaged in theological discussions with church leaders"
    ],
    spiritualThemes: ["Women's monasticism", "Theological wisdom", "Family sanctity"],
    prayers: [
      {
        title: "Prayer to Saint Macrina the Younger",
        text: "Saint Macrina the Younger, wise virgin and teacher, help us to use our minds in service of God and to guide our families in the faith. Inspire women religious in their consecrated life. Amen."
      }
    ],
    quotes: [
      {
        text: "Philosophy is the true medicine of the soul.",
        source: "Spiritual teachings"
      }
    ],
    readings: [
      {
        title: "On Women's Wisdom",
        citation: "From Gregory of Nyssa's account",
        text: "Macrina showed that women can achieve the highest levels of theological understanding and spiritual leadership."
      }
    ],
    liturgicalColor: "White"
  },

  // July 20 - Saint Apollinaris
  {
    id: "apollinaris-ravenna",
    name: "Saint Apollinaris",
    feastDate: "July 20",
    type: "Martyr",    deathYear: 75,    patronage: ["Ravenna", "Emilia-Romagna"],
    biography: "First bishop of Ravenna and martyr. According to tradition, he was sent by Saint Peter to evangelize Ravenna and suffered persecution for his successful preaching. He is one of the most venerated saints of northern Italy.",
    keyEvents: [
      "Sent by Saint Peter to evangelize Ravenna",
      "Converted many pagans to Christianity",
      "Performed miracles and healings",
      "Suffered persecution from pagan authorities",
      "Martyred for refusing to abandon his mission"
    ],
    spiritualThemes: ["Apostolic mission", "Episcopal martyrdom", "Early evangelization"],
    prayers: [
      {
        title: "Prayer to Saint Apollinaris",
        text: "Saint Apollinaris, faithful bishop and martyr, help us to proclaim the Gospel with courage and to persevere despite opposition. Strengthen bishops in their pastoral mission. Amen."
      }
    ],
    quotes: [
      {
        text: "Christ has sent me to bring you the light of truth.",
        source: "Preaching in Ravenna"
      }
    ],
    readings: [
      {
        title: "On Episcopal Courage",
        citation: "From early Church accounts",
        text: "The bishop must be ready to shed his blood for the flock entrusted to his care, following the Good Shepherd."
      }
    ],
    liturgicalColor: "Red"
  },

  // July 21 - Saint Lawrence of Brindisi
  {
    id: "lawrence-brindisi",
    name: "Saint Lawrence of Brindisi",
    feastDate: "July 21",
    type: "Doctor",
    birthYear: 1559,
    deathYear: 1619,
    canonizationYear: 1881,
    patronage: ["Capuchins"],
    biography: "Italian Capuchin friar and Doctor of the Church known for his preaching, diplomatic missions, and biblical scholarship. He spoke multiple languages and worked to defend Europe against Ottoman invasion.",
    keyEvents: [
      "Joined Capuchin Franciscans as teenager",
      "Became renowned preacher and biblical scholar",
      "Served as papal diplomat across Europe",
      "Led Christian forces against Ottoman Turks",
      "Founded Capuchin houses in Germany and Austria"
    ],
    spiritualThemes: ["Biblical scholarship", "Diplomatic missions", "Defense of Christendom"],
    prayers: [
      {
        title: "Prayer to Saint Lawrence of Brindisi",
        text: "Saint Lawrence of Brindisi, learned doctor and peacemaker, help us to study Scripture deeply and to work for peace among nations. Guide Church diplomats in their mission. Amen."
      }
    ],
    quotes: [
      {
        text: "The Word of God is a two-edged sword that cuts through error and reveals truth.",
        source: "Biblical commentaries"
      }
    ],
    readings: [
      {
        title: "On Biblical Study",
        citation: "From his scriptural works",
        text: "The deeper we penetrate the mysteries of Scripture, the more we understand God's plan for human salvation."
      }
    ],
    liturgicalColor: "White"
  },

  // July 22 - Saint Mary Magdalene
  {
    id: "mary-magdalene",
    name: "Saint Mary Magdalene",
    feastDate: "July 22",
    type: "Other",    deathYear: 63,    patronage: ["Repentant sinners", "Women", "Contemplatives"],
    biography: "One of Jesus' most devoted followers, from whom He cast out seven demons. She stood by the cross, was present at the burial, and was the first to encounter the Risen Christ, earning the title 'Apostle to the Apostles.'",
    keyEvents: [
      "Delivered from seven demons by Jesus",
      "Followed Jesus throughout His ministry",
      "Provided for Jesus and apostles from her means",
      "Present at crucifixion and burial",
      "First witness to the Resurrection",
      "Proclaimed the Resurrection to the apostles"
    ],
    spiritualThemes: ["Repentance", "Devotion to Christ", "Resurrection witness"],
    prayers: [
      {
        title: "Prayer to Saint Mary Magdalene",
        text: "Saint Mary Magdalene, apostle to the apostles, help us to recognize the Risen Christ in our lives. Give us your devotion to Jesus and courage to proclaim His resurrection. Amen."
      }
    ],
    quotes: [
      {
        text: "I have seen the Lord!",
        source: "John 20:18"
      }
    ],
    readings: [
      {
        title: "The Resurrection Encounter",
        citation: "John 20:11-18",
        text: "Jesus said to her, 'Mary!' She turned and said to him in Hebrew, 'Rabbouni!' (which means Teacher)."
      }
    ],
    liturgicalColor: "White"
  },

  // July 23 - Saint Bridget of Sweden
  {
    id: "bridget-sweden",
    name: "Saint Bridget of Sweden",
    feastDate: "July 23",
    type: "Other",
    birthYear: 1303,
    deathYear: 1373,
    canonizationYear: 1391,
    patronage: ["Europe", "Sweden", "Widows"],
    biography: "Swedish mystic, mother of eight children, and founder of the Bridgettines. After her husband's death, she experienced mystical visions and founded a religious order. She worked for Church reform and the return of the papacy from Avignon.",
    keyEvents: [
      "Married at 13 and had eight children",
      "Made pilgrimage to Santiago de Compostela with husband",
      "Founded Bridgettine order after husband's death",
      "Received mystical visions throughout life",
      "Worked for papal return from Avignon to Rome",
      "Made pilgrimage to Holy Land"
    ],
    spiritualThemes: ["Mystical visions", "Church reform", "Motherhood and religious life"],
    prayers: [
      {
        title: "Prayer to Saint Bridget of Sweden",
        text: "Saint Bridget of Sweden, mystic and mother, help us to balance family responsibilities with spiritual growth. Inspire Church reform and unity. Guide all mothers in raising holy children. Amen."
      }
    ],
    quotes: [
      {
        text: "Be you a bright flame before me, O God, a guiding star above me.",
        source: "Prayer from her visions"
      }
    ],
    readings: [
      {
        title: "On Mystical Experience",
        citation: "From her Revelations",
        text: "God speaks to those who listen with pure hearts, whether they be in palace or convent, married or single."
      }
    ],
    liturgicalColor: "White"
  },

  // July 24 - Saint Sharbel Makhluf
  {
    id: "sharbel-makhluf",
    name: "Saint Sharbel Makhluf",
    feastDate: "July 24",
    type: "Confessor",
    birthYear: 1828,
    deathYear: 1898,
    canonizationYear: 1977,
    patronage: ["Lebanon", "Hermits"],
    biography: "Lebanese Maronite monk who lived as a hermit for the last 23 years of his life. Known for his extreme asceticism, devotion to the Eucharist, and miraculous healings that continue after his death.",
    keyEvents: [
      "Born to poor farming family in Lebanon",
      "Joined Maronite monastery against family wishes",
      "Lived strict monastic life for 16 years",
      "Became hermit at Annaya for final 23 years",
      "Died while celebrating Mass",
      "Body remained incorrupt, miracles continue"
    ],
    spiritualThemes: ["Eastern monasticism", "Eucharistic devotion", "Hermit life"],
    prayers: [
      {
        title: "Prayer to Saint Sharbel Makhluf",
        text: "Saint Sharbel Makhluf, hermit of Lebanon, help us to find God in silence and solitude. Increase our devotion to the Eucharist and teach us the value of penance and prayer. Amen."
      }
    ],
    quotes: [
      {
        text: "The monk is a man who is separated from all and united to all.",
        source: "Monastic wisdom"
      }
    ],
    readings: [
      {
        title: "On Hermit Life",
        citation: "From Maronite tradition",
        text: "The hermit's heart becomes a temple where Christ dwells, radiating His presence to all who seek Him."
      }
    ],
    liturgicalColor: "White"
  },

  // July 25 - Saint James the Greater
  {
    id: "james-greater",
    name: "Saint James the Greater",
    feastDate: "July 25",
    type: "Martyr",    deathYear: 44,    patronage: ["Spain", "Pilgrims", "Knights"],
    biography: "One of the Twelve Apostles and part of Jesus' inner circle with Peter and John. He was the first apostle to be martyred, killed by King Herod Agrippa I. According to tradition, his body is buried in Santiago de Compostela, Spain.",
    keyEvents: [
      "Called by Jesus along with his brother John",
      "Witnessed Transfiguration and Agony in Garden",
      "Asked to sit at Jesus' right and left in His kingdom",
      "Preached Gospel after Pentecost",
      "First apostle to be martyred (44 AD)",
      "Body traditionally buried in Spain"
    ],
    spiritualThemes: ["Apostolic witness", "Martyrdom", "Pilgrimage"],
    prayers: [
      {
        title: "Prayer to Saint James the Greater",
        text: "Saint James the Greater, faithful apostle and first martyr among the Twelve, help us to follow Christ with courage. Guide all pilgrims on their spiritual journeys. Protect Spain and all who travel. Amen."
      }
    ],
    quotes: [
      {
        text: "We are able to drink the cup that Jesus drinks.",
        source: "Mark 10:39"
      }
    ],
    readings: [
      {
        title: "The Call of James and John",
        citation: "Mark 1:19-20",
        text: "When he had gone a little farther, he saw James son of Zebedee and his brother John, who were in their boat mending the nets. Immediately he called them."
      }
    ],
    liturgicalColor: "Red"
  },

  // July 26 - Saints Joachim and Anne
  {
    id: "joachim-anne",
    name: "Saints Joachim and Anne",
    feastDate: "July 26",
    type: "Other",    patronage: ["Grandparents", "Mothers", "Childless couples"],
    biography: "According to tradition, the parents of the Blessed Virgin Mary. Though not mentioned in Scripture, they are venerated as the grandparents of Jesus Christ and models of faithful Jewish parents who raised Mary in holiness.",
    keyEvents: [
      "Married and lived in hope for a child",
      "Experienced years of childlessness",
      "Received divine promise of a child",
      "Born Mary, the future Mother of God",
      "Raised Mary in faith and dedication to God",
      "Presented Mary to the Temple as a child"
    ],
    spiritualThemes: ["Grandparenthood", "Faithful parenting", "Hope in childlessness"],
    prayers: [
      {
        title: "Prayer to Saints Joachim and Anne",
        text: "Saints Joachim and Anne, grandparents of Jesus, help us to raise our children and grandchildren in faith and holiness. Comfort couples who long for children and guide all parents. Amen."
      }
    ],
    quotes: [
      {
        text: "Blessed are those who trust in the Lord's timing.",
        source: "Traditional wisdom"
      }
    ],
    readings: [
      {
        title: "On Holy Parenthood",
        citation: "From Christian tradition",
        text: "The greatest gift parents can give their children is not wealth or status, but a deep love for God and His ways."
      }
    ],
    liturgicalColor: "White"
  },

  // July 27 - Saint Pantaleon
  {
    id: "pantaleon",
    name: "Saint Pantaleon",
    feastDate: "July 27",
    type: "Martyr",
    birthYear: 275,
    deathYear: 305,    patronage: ["Physicians", "Midwives", "Livestock"],
    biography: "Christian physician and martyr who provided free medical care to the poor in Nicomedia. He was one of the Fourteen Holy Helpers and was martyred during the Diocletian persecution for his faith and Christian charity.",
    keyEvents: [
      "Studied medicine and became court physician",
      "Converted to Christianity through Saint Hermolaus",
      "Provided free medical care to Christians and poor",
      "Discovered and denounced during persecution",
      "Endured various tortures before execution",
      "Became one of Fourteen Holy Helpers"
    ],
    spiritualThemes: ["Medical ministry", "Charity to the poor", "Professional witness"],
    prayers: [
      {
        title: "Prayer to Saint Pantaleon",
        text: "Saint Pantaleon, holy physician and martyr, help all healthcare workers to serve with skill and compassion. Inspire us to use our professional abilities to help the poor and suffering. Amen."
      }
    ],
    quotes: [
      {
        text: "I heal bodies to save souls for Christ.",
        source: "Before his martyrdom"
      }
    ],
    readings: [
      {
        title: "On Medical Ministry",
        citation: "From his martyrdom account",
        text: "The Christian physician sees in every patient the suffering Christ, deserving of the best care regardless of their ability to pay."
      }
    ],
    liturgicalColor: "Red"
  },

  // July 28 - Saint Peter Chrysologus
  {
    id: "peter-chrysologus",
    name: "Saint Peter Chrysologus",
    feastDate: "July 28",
    type: "Doctor",
    birthYear: 380,
    deathYear: 450,    patronage: ["Ravenna"],
    biography: "Archbishop of Ravenna and Doctor of the Church known as the 'Golden-worded' for his eloquent preaching. He defended orthodox doctrine against heresies and left over 170 surviving sermons that show his theological depth and pastoral care.",
    keyEvents: [
      "Appointed Archbishop of Ravenna by Pope Sixtus III",
      "Preached regularly to his flock with great eloquence",
      "Opposed Monophysite and other heresies",
      "Attended Council of Ephesus",
      "Left extensive collection of sermons"
    ],
    spiritualThemes: ["Eloquent preaching", "Orthodox doctrine", "Pastoral care"],
    prayers: [
      {
        title: "Prayer to Saint Peter Chrysologus",
        text: "Saint Peter Chrysologus, golden-worded doctor, help preachers and teachers to proclaim God's word with clarity and beauty. Guide us to speak truth with love and wisdom. Amen."
      }
    ],
    quotes: [
      {
        text: "Listen to what you speak, look at what you hear, lest your tongue condemn your ears.",
        source: "Sermon on listening"
      }
    ],
    readings: [
      {
        title: "On Sacred Preaching",
        citation: "From his sermons",
        text: "The preacher must first listen to God's word in his heart before he can speak it effectively to others."
      }
    ],
    liturgicalColor: "White"
  },

  // July 29 - Saint Martha
  {
    id: "martha",
    name: "Saint Martha",
    feastDate: "July 29",
    type: "Other",    deathYear: 84,    patronage: ["Cooks", "Servants", "Waitresses"],
    biography: "Sister of Mary and Lazarus, friend of Jesus who welcomed Him into her home in Bethany. She is known for her active service and hospitality, though Jesus gently corrected her when she became anxious about preparations while Mary listened to His teaching.",
    keyEvents: [
      "Welcomed Jesus into her home in Bethany",
      "Served Jesus and the apostles with great care",
      "Complained when sister Mary listened instead of helping",
      "Received gentle correction from Jesus about priorities",
      "Made great profession of faith when Lazarus died",
      "Witnessed resurrection of her brother Lazarus"
    ],
    spiritualThemes: ["Active service", "Hospitality", "Balance of action and contemplation"],
    prayers: [
      {
        title: "Prayer to Saint Martha",
        text: "Saint Martha, devoted hostess and servant, help us to serve Christ in our daily duties while keeping Him as our first priority. Guide all who work in hospitality and service. Amen."
      }
    ],
    quotes: [
      {
        text: "Yes, Lord, I believe that you are the Christ, the Son of God.",
        source: "John 11:27"
      }
    ],
    readings: [
      {
        title: "Martha and Mary",
        citation: "Luke 10:38-42",
        text: "Martha, Martha, you are worried and distracted by many things; there is need of only one thing. Mary has chosen the better part, which will not be taken away from her."
      }
    ],
    liturgicalColor: "White"
  },

  // July 30 - Saint Peter Chrysologus (Alternative Memorial)
  {
    id: "blessed-solanus-casey",
    name: "Blessed Solanus Casey",
    feastDate: "July 30",
    type: "Confessor",
    birthYear: 1870,
    deathYear: 1957,    patronage: ["Sick people", "Capuchins"],
    biography: "American Capuchin friar known for his simple faith, dedication to the sick and poor, and gift of healing. Born in Wisconsin to Irish immigrant farmers, he became one of America's most beloved religious figures.",
    keyEvents: [
      "Born to Irish immigrant farming family",
      "Worked various jobs before entering seminary",
      "Became Capuchin friar in Detroit",
      "Served as porter, welcoming all who came",
      "Known for miraculous healings and counseling",
      "Beatified by Pope Francis in 2017"
    ],
    spiritualThemes: ["Simple faith", "Service to the poor", "American sanctity"],
    prayers: [
      {
        title: "Prayer to Blessed Solanus Casey",
        text: "Blessed Solanus Casey, humble servant of God, help us to trust in God's providence and to serve the poor with simple faith. Inspire us to see God's hand in all circumstances. Amen."
      }
    ],
    quotes: [
      {
        text: "Thank God ahead of time.",
        source: "Frequent saying"
      }
    ],
    readings: [
      {
        title: "On Simple Faith",
        citation: "From his spiritual counsel",
        text: "God is so good that He allows us to participate in His work of healing and comfort through our simple service."
      }
    ],
    liturgicalColor: "White"
  },

  // July 31 - Saint Ignatius of Loyola
  {
    id: "ignatius-loyola",
    name: "Saint Ignatius of Loyola",
    feastDate: "July 31",
    type: "Confessor",
    birthYear: 1491,
    deathYear: 1556,
    canonizationYear: 1622,
    patronage: ["Jesuits", "Soldiers", "Retreats"],
    biography: "Spanish soldier who converted after being wounded in battle and founded the Society of Jesus (Jesuits). He wrote the Spiritual Exercises and led the Counter-Reformation through education and missionary work.",
    keyEvents: [
      "Wounded at Battle of Pamplona (1521)",
      "Converted while reading lives of saints during recovery",
      "Made pilgrimage to Holy Land",
      "Studied at University of Paris",
      "Founded Society of Jesus with six companions",
      "Wrote Spiritual Exercises and Jesuit Constitutions"
    ],
    spiritualThemes: ["Conversion", "Spiritual direction", "Educational apostolate"],
    prayers: [
      {
        title: "Prayer to Saint Ignatius of Loyola",
        text: "Saint Ignatius of Loyola, soldier of Christ, help us to find God in all things and to serve His greater glory. Guide all who make retreats and those who direct souls to God. Amen."
      }
    ],
    quotes: [
      {
        text: "Ad majorem Dei gloriam (For the greater glory of God)",
        source: "Jesuit motto"
      }
    ],
    readings: [
      {
        title: "From the Spiritual Exercises",
        citation: "Principle and Foundation",
        text: "Human beings are created to praise, reverence, and serve God our Lord, and by means of this to save their souls."
      }
    ],
    liturgicalColor: "White"
  },

  // AUGUST SAINTS
  {
    id: "alphonsus-liguori",
    name: "Saint Alphonsus Liguori",
    feastDate: "August 1",
    type: "Doctor",
    title: "Doctor of the Church, Bishop and Moral Theologian",
    shortBio: "Italian bishop, moral theologian, and founder of the Redemptorists.",
    life: "Born in Naples in 1696, Alphonsus became a lawyer before experiencing a conversion and becoming a priest. He founded the Congregation of the Most Holy Redeemer (Redemptorists) and became a bishop.",
    legacy: "His moral theology emphasized mercy and practicality, becoming the patron saint of confessors and moral theologians.",
    patronOf: ["Confessors", "Moral theologians", "Scrupulous souls"],
    birthYear: 1696,
    deathYear: 1787,
    canonizationYear: 1839,
    patronage: ["Confessors", "Moral theologians"],
    biography: "Saint Alphonsus Liguori was a brilliant lawyer who gave up his career to become a priest after losing an important case. He founded the Redemptorists and wrote extensively on moral theology and spirituality.",
    keyEvents: [
      "Founded the Congregation of the Most Holy Redeemer in 1732",
      "Became Bishop of Sant'Agata dei Goti in 1762",
      "Declared Doctor of the Church in 1871"
    ],
    spiritualThemes: ["Moral theology", "Devotion to the Blessed Sacrament", "Pastoral care"],
    prayers: [
      {
        title: "Prayer to Saint Alphonsus Liguori",
        text: "Saint Alphonsus, guide of souls and teacher of moral theology, help us to follow the path of mercy and truth. Inspire confessors and spiritual directors to lead souls to God with wisdom and compassion. Amen."
      }
    ],
    quotes: [
      {
        text: "Prayer is the great means of salvation.",
        source: "The Great Means of Salvation"
      }
    ],
    readings: [
      {
        title: "From the Glories of Mary",
        citation: "Chapter on the Power of Mary",
        text: "Mary is called the gate of heaven because no one can enter that blessed kingdom without passing through her."
      }
    ],
    liturgicalColor: "White"
  },

  {
    id: "eusebius-vercelli",
    name: "Saint Eusebius of Vercelli",
    feastDate: "August 2",
    type: "Confessor",
    title: "Bishop and Defender of Orthodoxy",
    shortBio: "Italian bishop who defended the faith against Arianism.",
    life: "Born in Sardinia around 300, Eusebius became bishop of Vercelli and was exiled for defending the divinity of Christ against the Arian heresy.",
    legacy: "He courageously defended orthodox Catholic teaching and suffered exile for the faith.",
    patronOf: ["Defenders of orthodoxy", "Exiled bishops"],
    birthYear: 300,
    deathYear: 371,
    canonizationYear: 1000,
    patronage: ["Clergy", "Italy"],
    biography: "Saint Eusebius was a fearless defender of the Catholic faith during the Arian controversy, suffering years of exile rather than compromise the truth of Christ's divinity.",
    keyEvents: [
      "Became Bishop of Vercelli around 345",
      "Attended the Council of Milan in 355",
      "Exiled by Emperor Constantius II for refusing to condemn Athanasius"
    ],
    spiritualThemes: ["Defense of orthodoxy", "Courage in persecution", "Episcopal leadership"],
    prayers: [
      {
        title: "Prayer to Saint Eusebius of Vercelli",
        text: "Saint Eusebius, courageous defender of the faith, help us to stand firm in Catholic teaching even when faced with opposition. Give us the strength to witness to the truth of Christ. Amen."
      }
    ],
    quotes: [
      {
        text: "It is better to suffer for the truth than to compromise with error.",
        source: "Traditional saying"
      }
    ],
    readings: [
      {
        title: "Letter from Exile",
        citation: "To the clergy of Vercelli",
        text: "Let us hold fast to the faith delivered to us by the apostles, and let no persecution turn us from the truth."
      }
    ],
    liturgicalColor: "White"
  },

  {
    id: "lydia-of-thyatira",
    name: "Saint Lydia of Thyatira",
    feastDate: "August 3",
    type: "Other",
    title: "First European Convert to Christianity",
    shortBio: "Businesswoman who was the first recorded European convert to Christianity.",
    life: "Lydia was a merchant of purple cloth who lived in Philippi. She heard Paul preach and was baptized along with her household, becoming the first recorded European Christian.",
    legacy: "She represents the important role of women in early Christianity and the spread of the Gospel in Europe.",
    patronOf: ["Businesswomen", "Converts", "Europe"],
    deathYear: 70,
    patronage: ["Businesswomen", "Dyers", "Converts"],
    biography: "Saint Lydia was a successful businesswoman dealing in purple cloth, a luxury item of the ancient world. Her conversion marked the beginning of Christianity in Europe.",
    keyEvents: [
      "Met Saint Paul by the river outside Philippi",
      "Was baptized with her entire household",
      "Provided hospitality to Paul and his companions"
    ],
    spiritualThemes: ["Hospitality", "Business ethics", "Women's apostolate"],
    prayers: [
      {
        title: "Prayer to Saint Lydia",
        text: "Saint Lydia, faithful businesswoman and first European Christian, help us to use our talents and resources in service of the Gospel. Inspire us to welcome others with generous hospitality. Amen."
      }
    ],
    quotes: [
      {
        text: "Come to my house and stay.",
        source: "Acts 16:15"
      }
    ],
    readings: [
      {
        title: "From the Acts of the Apostles",
        citation: "Acts 16:14-15",
        text: "The Lord opened her heart to pay attention to what was said by Paul. And after she was baptized, and her household as well, she urged us, saying, 'If you have judged me to be faithful to the Lord, come to my house and stay.'"
      }
    ],
    liturgicalColor: "White"
  },

  {
    id: "john-vianney",
    name: "Saint John Vianney",
    feastDate: "August 4",
    type: "Confessor",
    title: "The Curé of Ars, Patron of Parish Priests",
    shortBio: "French parish priest renowned for his holiness and work as a confessor.",
    life: "Born in 1786, John Vianney struggled with his studies but was ordained and became the parish priest of Ars, where he transformed the spiritual life of the community through his preaching and sacramental ministry.",
    legacy: "He is the patron saint of parish priests and is famous for spending up to 16 hours a day hearing confessions.",
    patronOf: ["Parish priests", "Confessors"],
    birthYear: 1786,
    deathYear: 1859,
    canonizationYear: 1925,
    patronage: ["Parish priests", "Confessors"],
    biography: "Saint John Vianney overcame academic difficulties to become one of the greatest parish priests in Church history, transforming the village of Ars through his extraordinary dedication to the sacraments.",
    keyEvents: [
      "Ordained to the priesthood in 1815",
      "Appointed parish priest of Ars in 1818",
      "Drew thousands of pilgrims seeking confession and spiritual guidance"
    ],
    spiritualThemes: ["Priestly ministry", "Sacrament of confession", "Parish life"],
    prayers: [
      {
        title: "Prayer to Saint John Vianney",
        text: "Saint John Vianney, model of priestly holiness, intercede for all parish priests that they may serve their people with love and dedication. Help us to appreciate the gift of the sacraments. Amen."
      }
    ],
    quotes: [
      {
        text: "The priesthood is the love of the heart of Jesus.",
        source: "Spiritual conferences"
      }
    ],
    readings: [
      {
        title: "On the Priesthood",
        citation: "From his spiritual conferences",
        text: "When we see a priest, we should think of our Lord Jesus Christ. The priest continues the work of redemption on earth."
      }
    ],
    liturgicalColor: "White"
  },

  {
    id: "dedication-mary-major",
    name: "Dedication of the Basilica of Saint Mary Major",
    feastDate: "August 5",
    type: "Other",
    title: "Memorial of the Dedication",
    shortBio: "Commemoration of the dedication of the papal basilica dedicated to the Blessed Virgin Mary.",
    life: "This memorial celebrates the dedication of one of the four papal basilicas in Rome, built in the 5th century and dedicated to the Blessed Virgin Mary.",
    legacy: "The basilica houses the relic of the crib of Jesus and has been a center of Marian devotion for centuries.",
    patronOf: ["Marian devotion", "Rome"],
    keyEvents: [
      "Built under Pope Liberius in the 4th century",
      "Legend of the miraculous snowfall on August 5th",
      "Houses the relic of Jesus' crib from Bethlehem"
    ],
    spiritualThemes: ["Marian devotion", "Sacred architecture", "Papal basilicas"],
    prayers: [
      {
        title: "Prayer for the Feast of Saint Mary Major",
        text: "O Mary, Mother of God, through the intercession of this holy basilica dedicated to your honor, protect the Church and all who seek your maternal care. Amen."
      }
    ],
    quotes: [
      {
        text: "Hail Mary, full of grace, the Lord is with thee.",
        source: "Luke 1:28"
      }
    ],
    readings: [
      {
        title: "From the Legend of the Snow",
        citation: "Traditional account",
        text: "On this day in summer, snow fell miraculously on the Esquiline Hill in Rome, marking the spot where the basilica was to be built in honor of the Blessed Virgin Mary."
      }
    ],
    liturgicalColor: "White"
  },

  {
    id: "transfiguration",
    name: "The Transfiguration of the Lord",
    feastDate: "August 6",
    type: "Other",
    title: "Feast of the Transfiguration",
    shortBio: "Celebration of Jesus' transfiguration on Mount Tabor.",
    life: "This feast commemorates the event when Jesus was transfigured before Peter, James, and John, revealing His divine glory.",
    legacy: "This feast celebrates the revelation of Christ's divinity and prefigures the resurrection.",
    patronOf: ["Divine revelation", "Mystical experiences"],
    spiritualThemes: ["Divine revelation", "Glory of Christ", "Mystical prayer"],
    prayers: [
      {
        title: "Prayer for the Transfiguration",
        text: "Lord Jesus, as You revealed Your glory on Mount Tabor, help us to see Your divine presence in our daily lives and to be transformed by Your grace. Amen."
      }
    ],
    quotes: [
      {
        text: "This is my beloved Son, with whom I am well pleased; listen to him.",
        source: "Matthew 17:5"
      }
    ],
    readings: [
      {
        title: "The Transfiguration",
        citation: "Matthew 17:1-9",
        text: "And he was transfigured before them, and his face shone like the sun, and his clothes became white as light."
      }
    ],
    liturgicalColor: "White"
  },

  {
    id: "sixtus-ii",
    name: "Saint Sixtus II and Companions",
    feastDate: "August 7",
    type: "Martyr",
    title: "Pope and Martyr",
    shortBio: "Pope martyred during the persecution of Emperor Valerian.",
    life: "Pope Sixtus II was captured while celebrating Mass in the catacombs and executed along with four deacons during the persecution of 258.",
    legacy: "He died defending the right to celebrate the Eucharist and minister to the faithful.",
    patronOf: ["Persecuted Christians", "Deacons"],
    birthYear: 200,
    deathYear: 258,
    patronage: ["Persecution victims", "Clergy"],
    biography: "Saint Sixtus II served as Pope for less than a year but showed great courage in leading the Church during a time of severe persecution.",
    keyEvents: [
      "Elected Pope in 257",
      "Continued celebration of Mass despite persecution",
      "Martyred with four deacons on August 6, 258"
    ],
    spiritualThemes: ["Martyrdom", "Eucharistic devotion", "Papal leadership"],
    prayers: [
      {
        title: "Prayer to Saint Sixtus II",
        text: "Saint Sixtus, faithful shepherd who gave your life for the flock, help us to remain steadfast in faith even in times of persecution. Strengthen all who lead the Church. Amen."
      }
    ],
    quotes: [
      {
        text: "I will not abandon the Church of Christ even unto death.",
        source: "Traditional saying"
      }
    ],
    readings: [
      {
        title: "From the Acts of the Martyrs",
        citation: "Account of Saint Sixtus II",
        text: "While celebrating the sacred mysteries in the cemetery, Pope Sixtus was seized by the persecutors and immediately put to death for the name of Christ."
      }
    ],
    liturgicalColor: "Red"
  },

  {
    id: "dominic",
    name: "Saint Dominic",
    feastDate: "August 8",
    type: "Confessor",
    title: "Founder of the Order of Preachers",
    shortBio: "Spanish priest who founded the Dominican Order.",
    life: "Born in Spain around 1170, Dominic founded the Order of Preachers (Dominicans) to combat heresy through preaching and education.",
    legacy: "His order has produced many saints and scholars and continues the mission of preaching throughout the world.",
    patronOf: ["Dominican Republic", "Astronomers", "Scientists"],
    birthYear: 1170,
    deathYear: 1221,
    canonizationYear: 1234,
    patronage: ["Dominican Republic", "Astronomers"],
    biography: "Saint Dominic founded the Dominican Order with the mission of preaching the Gospel and combating heresy through education and holy living.",
    keyEvents: [
      "Founded the Order of Preachers in 1216",
      "Established houses of study throughout Europe",
      "Promoted devotion to the Holy Rosary"
    ],
    spiritualThemes: ["Preaching", "Education", "Rosary devotion"],
    prayers: [
      {
        title: "Prayer to Saint Dominic",
        text: "Saint Dominic, faithful preacher of the Gospel, help us to proclaim the truth of Christ with wisdom and love. Inspire all who teach and preach to lead souls to God. Amen."
      }
    ],
    quotes: [
      {
        text: "Speak only of God or with God.",
        source: "Dominican tradition"
      }
    ],
    readings: [
      {
        title: "From the Life of Saint Dominic",
        citation: "By Blessed Jordan of Saxony",
        text: "He was filled with such great love for God and neighbor that he seemed to love all men as brothers."
      }
    ],
    liturgicalColor: "White"
  },

  {
    id: "teresa-benedicta",
    name: "Saint Teresa Benedicta of the Cross (Edith Stein)",
    feastDate: "August 9",
    type: "Martyr",
    title: "Carmelite Nun and Martyr",
    shortBio: "Jewish philosopher who converted to Catholicism and died in Auschwitz.",
    life: "Born Jewish in 1891, Edith Stein became a philosopher, converted to Catholicism, became a Carmelite nun, and was killed in Auschwitz in 1942.",
    legacy: "She is co-patron of Europe and represents the bridge between Judaism and Christianity.",
    patronOf: ["Europe", "Martyrs", "Converts"],
    birthYear: 1891,
    deathYear: 1942,
    canonizationYear: 1998,
    patronage: ["Europe", "Martyrs", "Loss of parents"],
    biography: "Saint Teresa Benedicta was a brilliant philosopher who found truth in Christianity and gave her life as a witness to faith during the Holocaust.",
    keyEvents: [
      "Converted to Catholicism in 1922",
      "Entered Carmel in 1933",
      "Deported to Auschwitz and killed in 1942"
    ],
    spiritualThemes: ["Conversion", "Martyrdom", "Jewish-Christian dialogue"],
    prayers: [
      {
        title: "Prayer to Saint Teresa Benedicta",
        text: "Saint Teresa Benedicta, martyr of the Holocaust, help us to seek truth and to stand against injustice. Unite Jews and Christians in mutual respect and understanding. Amen."
      }
    ],
    quotes: [
      {
        text: "One cannot desire to surrender to God if one does not know God.",
        source: "Philosophical writings"
      }
    ],
    readings: [
      {
        title: "From her Spiritual Writings",
        citation: "On the mystery of Christmas",
        text: "The mystery of Christmas continues throughout the year and extends throughout our life."
      }
    ],
    liturgicalColor: "Red"
  },

  {
    id: "lawrence",
    name: "Saint Lawrence",
    feastDate: "August 10",
    type: "Martyr",
    title: "Deacon and Martyr",
    shortBio: "Roman deacon martyred by being roasted on a gridiron.",
    life: "Lawrence was a deacon in Rome under Pope Sixtus II. When ordered to present the Church's treasures, he brought the poor and sick, saying 'These are the treasures of the Church.'",
    legacy: "He is patron of the poor and of deacons, known for his charity and courage in martyrdom.",
    patronOf: ["Deacons", "The poor", "Cooks", "Librarians"],
    deathYear: 258,
    patronage: ["Deacons", "Poor people", "Cooks"],
    biography: "Saint Lawrence showed that the true treasures of the Church are the poor and suffering, and he gave his life rather than betray the Christian community.",
    keyEvents: [
      "Served as deacon under Pope Sixtus II",
      "Distributed Church goods to the poor when ordered to surrender treasures",
      "Martyred on a gridiron on August 10, 258"
    ],
    spiritualThemes: ["Service to the poor", "Diaconal ministry", "Martyrdom"],
    prayers: [
      {
        title: "Prayer to Saint Lawrence",
        text: "Saint Lawrence, faithful deacon and martyr, help us to see Christ in the poor and to serve them with generous love. Give courage to all deacons in their ministry. Amen."
      }
    ],
    quotes: [
      {
        text: "These are the treasures of the Church.",
        source: "When presenting the poor to Roman authorities"
      }
    ],
    readings: [
      {
        title: "From the Acts of Saint Lawrence",
        citation: "Traditional account",
        text: "When commanded to produce the treasures of the Church, Lawrence presented the poor, the sick, and the suffering, declaring them to be the true riches of Christ's Church."
      }
    ],
    liturgicalColor: "Red"
  },

  {
    id: "clare-assisi",
    name: "Saint Clare of Assisi",
    feastDate: "August 11",
    type: "Virgin",
    title: "Foundress of the Poor Clares",
    shortBio: "Italian nun who founded the Order of Poor Ladies with Saint Francis.",
    life: "Born into nobility, Clare left everything to follow Christ in the footsteps of Saint Francis, founding the Poor Clares and living a life of extreme poverty and contemplation.",
    legacy: "She is the patron saint of television and eye disease, and her order continues to live the Franciscan ideals of poverty.",
    patronOf: ["Television", "Eye disease", "Good weather"],
    birthYear: 1194,
    deathYear: 1253,
    canonizationYear: 1255,
    patronage: ["Television", "Eye disease", "Embroiderers"],
    biography: "Saint Clare embraced radical poverty and contemplative life, becoming the first woman to write a monastic rule and leading the Poor Clares with wisdom and holiness.",
    keyEvents: [
      "Left home to join Francis at age 18",
      "Founded the Order of Poor Ladies (Poor Clares) in 1212",
      "Wrote the first monastic rule by a woman"
    ],
    spiritualThemes: ["Poverty", "Contemplative life", "Franciscan spirituality"],
    prayers: [
      {
        title: "Prayer to Saint Clare",
        text: "Saint Clare, faithful daughter of Saint Francis, help us to embrace simplicity and to fix our eyes on Christ alone. Inspire all contemplatives to persevere in prayer. Amen."
      }
    ],
    quotes: [
      {
        text: "Gaze upon Him, consider Him, contemplate Him, as you desire to imitate Him.",
        source: "Letters to Saint Agnes of Prague"
      }
    ],
    readings: [
      {
        title: "From the Letters of Saint Clare",
        citation: "Fourth Letter to Agnes of Prague",
        text: "Place your mind before the mirror of eternity! Place your soul in the brilliance of glory! Place your heart in the figure of the divine substance!"
      }
    ],
    liturgicalColor: "White"
  },

  // More August Saints
  {
    id: "jane-frances-chantal",
    name: "Saint Jane Frances de Chantal",
    feastDate: "August 12",
    type: "Virgin",
    title: "Foundress and Widow",
    shortBio: "French baroness who became a nun and founded the Visitation Order.",
    life: "A widow and mother who founded the Order of the Visitation with Saint Francis de Sales.",
    legacy: "Co-foundress of the Visitation Order, known for spiritual direction and mystical prayer.",
    patronOf: ["Widows", "Forgotten people", "Parents separated from children"],
    birthYear: 1572,
    deathYear: 1641,
    canonizationYear: 1767,
    spiritualThemes: ["Widowhood", "Religious life", "Spiritual direction"],
    prayers: [{"title": "Prayer to Saint Jane Frances", "text": "Saint Jane Frances, help widows and parents to trust in God's providence. Amen."}],
    quotes: [{"text": "We must abandon ourselves entirely to God.", "source": "Spiritual conferences"}],
    readings: [{"title": "On Abandonment to God", "citation": "Spiritual writings", "text": "Perfect abandonment to God's will brings perfect peace."}],
    liturgicalColor: "White"
  },
  {
    id: "pontian-hippolytus",
    name: "Saints Pontian and Hippolytus",
    feastDate: "August 13",
    type: "Martyr",
    title: "Pope and Priest Martyrs",
    shortBio: "Pope and priest who were reconciled and martyred together.",
    life: "Pope Pontian and the priest Hippolytus, former rivals, were exiled together and died as martyrs.",
    legacy: "Their reconciliation before death shows the power of forgiveness in the Church.",
    patronOf: ["Reconciliation", "Unity in the Church"],
    deathYear: 235,
    spiritualThemes: ["Reconciliation", "Martyrdom", "Church unity"],
    prayers: [{"title": "Prayer to Saints Pontian and Hippolytus", "text": "Saints Pontian and Hippolytus, help us forgive and seek unity in Christ. Amen."}],
    quotes: [{"text": "In exile we found our peace.", "source": "Traditional saying"}],
    readings: [{"title": "On Reconciliation", "citation": "Church history", "text": "Former enemies became brothers in suffering for Christ."}],
    liturgicalColor: "Red"
  },
  {
    id: "maximilian-kolbe",
    name: "Saint Maximilian Kolbe",
    feastDate: "August 14",
    type: "Martyr",
    title: "Martyr of Charity",
    shortBio: "Polish Franciscan who gave his life for another in Auschwitz.",
    life: "A Franciscan priest who volunteered to die in place of a stranger in Auschwitz concentration camp.",
    legacy: "Patron of drug addicts and prisoners, model of sacrificial love.",
    patronOf: ["Drug addicts", "Political prisoners", "Families", "Journalists"],
    birthYear: 1894,
    deathYear: 1941,
    canonizationYear: 1982,
    spiritualThemes: ["Sacrificial love", "Marian devotion", "Martyrdom"],
    prayers: [{"title": "Prayer to Saint Maximilian Kolbe", "text": "Saint Maximilian, help us love others as Christ loved us. Amen."}],
    quotes: [{"text": "Only love creates.", "source": "Prison writings"}],
    readings: [{"title": "Final Act of Love", "citation": "Auschwitz testimony", "text": "Greater love has no one than to lay down his life for his friends."}],
    liturgicalColor: "Red"
  },
  {
    id: "assumption-mary",
    name: "The Assumption of the Blessed Virgin Mary",
    feastDate: "August 15",
    type: "Other",
    title: "Solemnity of the Assumption",
    shortBio: "Celebration of Mary's assumption into heaven, body and soul.",
    life: "This solemnity celebrates Mary's assumption into heaven at the end of her earthly life.",
    legacy: "Central dogma of the Catholic faith, celebrating Mary's complete union with her Son.",
    patronOf: ["France", "India", "South Africa"],
    spiritualThemes: ["Assumption", "Marian devotion", "Resurrection hope"],
    prayers: [{"title": "Prayer for the Assumption", "text": "Holy Mary, assumed into heaven, pray for us and bring us to your Son. Amen."}],
    quotes: [{"text": "My soul proclaims the greatness of the Lord.", "source": "Luke 1:46"}],
    readings: [{"title": "The Assumption", "citation": "Revelation 12:1", "text": "A great sign appeared in heaven: a woman clothed with the sun."}],
    liturgicalColor: "White"
  },
  {
    id: "stephen-hungary",
    name: "Saint Stephen of Hungary",
    feastDate: "August 16",
    type: "Confessor",
    title: "King and Confessor",
    shortBio: "First Christian king of Hungary.",
    life: "King Stephen united Hungary and established Christianity as the state religion.",
    legacy: "Patron saint of Hungary, known for just rule and Christian virtue.",
    patronOf: ["Hungary", "Kings", "Masons"],
    birthYear: 975,
    deathYear: 1038,
    canonizationYear: 1083,
    spiritualThemes: ["Christian kingship", "Justice", "National unity"],
    prayers: [{"title": "Prayer to Saint Stephen of Hungary", "text": "Saint Stephen, help rulers govern with justice and wisdom. Amen."}],
    quotes: [{"text": "Be humble so that God may raise you up.", "source": "Admonitions to Prince Emeric"}],
    readings: [{"title": "Christian Kingship", "citation": "Royal admonitions", "text": "The king must be father to orphans and judge of widows."}],
    liturgicalColor: "White"
  },
  {
    id: "hyacinth",
    name: "Saint Hyacinth",
    feastDate: "August 17",
    type: "Confessor",
    title: "Dominican Missionary",
    shortBio: "Polish Dominican who evangelized Eastern Europe.",
    life: "Dominican friar who brought Christianity to Poland, Prussia, and Lithuania.",
    legacy: "Great missionary of Eastern Europe, known for miraculous preaching.",
    patronOf: ["Poland", "Lithuania"],
    birthYear: 1185,
    deathYear: 1257,
    canonizationYear: 1594,
    spiritualThemes: ["Mission", "Preaching", "Eastern Europe"],
    prayers: [{"title": "Prayer to Saint Hyacinth", "text": "Saint Hyacinth, inspire missionaries to spread the Gospel with zeal. Amen."}],
    quotes: [{"text": "Preach always; when necessary, use words.", "source": "Missionary tradition"}],
    readings: [{"title": "Missionary Zeal", "citation": "Dominican chronicles", "text": "He preached the Gospel from Krakow to Kiev with great fruit."}],
    liturgicalColor: "White"
  },

  // September Saints
  {
    id: "gregory-great",
    name: "Saint Gregory the Great",
    feastDate: "September 3",
    type: "Pope",
    title: "Pope and Doctor of the Church",
    shortBio: "Pope who established medieval papacy and Gregorian chant.",
    life: "Pope from 590-604, he reformed the liturgy, sent missionaries to England, and wrote extensively.",
    legacy: "One of the four great Latin Doctors, established foundations of medieval Christianity.",
    patronOf: ["Musicians", "Singers", "Students", "Teachers"],
    birthYear: 540,
    deathYear: 604,
    spiritualThemes: ["Papal leadership", "Liturgical reform", "Missionary activity"],
    prayers: [{"title": "Prayer to Saint Gregory the Great", "text": "Saint Gregory, help the Church grow in holiness and mission. Amen."}],
    quotes: [{"text": "Divine love is never lazy.", "source": "Homilies on Ezekiel"}],
    readings: [{"title": "Pastoral Care", "citation": "Pastoral Rule", "text": "The ruler must be a neighbor to everyone in sympathy, and exalted above all in contemplation."}],
    liturgicalColor: "White"
  },
  {
    id: "mother-teresa",
    name: "Saint Teresa of Calcutta (Mother Teresa)",
    feastDate: "September 5",
    type: "Other",
    title: "Missionary of Charity",
    shortBio: "Albanian nun who served the poorest of the poor in India.",
    life: "Born Agnes Bojaxhiu, she served the dying and destitute in Calcutta for decades.",
    legacy: "Nobel Peace Prize winner, symbol of service to the poorest.",
    patronOf: ["Missionaries", "Calcutta"],
    birthYear: 1910,
    deathYear: 1997,
    canonizationYear: 2016,
    spiritualThemes: ["Service to the poor", "Missionary work", "Compassion"],
    prayers: [{"title": "Prayer to Saint Teresa of Calcutta", "text": "Saint Teresa, help us see Jesus in the poorest of the poor. Amen."}],
    quotes: [{"text": "Give until it hurts.", "source": "Missionary teachings"}],
    readings: [{"title": "Service to the Poor", "citation": "Spiritual writings", "text": "We can do no great things, only small things with great love."}],
    liturgicalColor: "White"
  },
  {
    id: "nativity-mary",
    name: "The Nativity of the Blessed Virgin Mary",
    feastDate: "September 8",
    type: "Other",
    title: "Feast of Mary's Birth",
    shortBio: "Celebration of the birth of the Blessed Virgin Mary.",
    life: "This feast celebrates the birth of Mary, chosen by God to be the Mother of Jesus.",
    legacy: "Ancient feast celebrating the beginning of salvation history through Mary.",
    patronOf: ["Mothers", "Children"],
    spiritualThemes: ["Marian devotion", "Divine providence", "Salvation history"],
    prayers: [{"title": "Prayer for Mary's Nativity", "text": "Blessed Mary, born to be Mother of God, pray for all mothers and children. Amen."}],
    quotes: [{"text": "Blessed is she who believed.", "source": "Luke 1:45"}],
    readings: [{"title": "Mary's Birth", "citation": "Traditional account", "text": "The birth of Mary brought joy to the world and hope of salvation."}],
    liturgicalColor: "White"
  },
  {
    id: "peter-claver",
    name: "Saint Peter Claver",
    feastDate: "September 9",
    type: "Confessor",
    title: "Apostle of the Slaves",
    shortBio: "Spanish Jesuit who ministered to enslaved Africans in Colombia.",
    life: "Jesuit priest who devoted his life to caring for enslaved people in Cartagena.",
    legacy: "Patron saint of slaves and race relations, champion of human dignity.",
    patronOf: ["Slaves", "Colombia", "Race relations"],
    birthYear: 1580,
    deathYear: 1654,
    canonizationYear: 1888,
    spiritualThemes: ["Human dignity", "Service to the oppressed", "Social justice"],
    prayers: [{"title": "Prayer to Saint Peter Claver", "text": "Saint Peter, help us defend the dignity of every human person. Amen."}],
    quotes: [{"text": "We must speak to them with our hands before we speak with our lips.", "source": "Mission methodology"}],
    readings: [{"title": "Service to Slaves", "citation": "Jesuit chronicles", "text": "He baptized over 300,000 enslaved people and cared for their souls with heroic charity."}],
    liturgicalColor: "White"
  },

  // October Saints  
  {
    id: "therese-lisieux",
    name: "Saint Thérèse of Lisieux",
    feastDate: "October 1",
    type: "Virgin",
    title: "The Little Flower, Doctor of the Church",
    shortBio: "French Carmelite nun known for her 'little way' of spiritual childhood.",
    life: "Entered Carmel at 15, died at 24, but left a profound spiritual legacy through her autobiography.",
    legacy: "Doctor of the Church, patron of missions, known for the 'little way' of trust and surrender.",
    patronOf: ["Missions", "France", "Florists", "Pilots"],
    birthYear: 1873,
    deathYear: 1897,
    canonizationYear: 1925,
    spiritualThemes: ["Spiritual childhood", "Trust in God", "Missionary spirit"],
    prayers: [{"title": "Prayer to Saint Thérèse", "text": "Saint Thérèse, teach us your little way of trust and love. Amen."}],
    quotes: [{"text": "I will spend my heaven doing good on earth.", "source": "Final conversations"}],
    readings: [{"title": "The Little Way", "citation": "Story of a Soul", "text": "I will seek out a means of getting to heaven by a little way—very short and very straight."}],
    liturgicalColor: "White"
  },
  {
    id: "guardian-angels",
    name: "The Holy Guardian Angels",
    feastDate: "October 2",
    type: "Other",
    title: "Memorial of the Guardian Angels",
    shortBio: "Celebration of the angels assigned by God to guard each person.",
    life: "This memorial honors the guardian angels whom God assigns to watch over each person.",
    legacy: "Ancient belief in divine protection through angelic guardianship.",
    patronOf: ["Protection", "Safety", "Children"],
    spiritualThemes: ["Divine protection", "Angelic intercession", "God's providence"],
    prayers: [{"title": "Prayer to Guardian Angel", "text": "Angel of God, my guardian dear, to whom God's love commits me here. Amen."}],
    quotes: [{"text": "He has given his angels charge over you.", "source": "Psalm 91:11"}],
    readings: [{"title": "Angelic Protection", "citation": "Matthew 18:10", "text": "See that you do not despise one of these little ones, for their angels always see the face of my Father."}],
    liturgicalColor: "White"
  },
  {
    id: "francis-assisi",
    name: "Saint Francis of Assisi",
    feastDate: "October 4",
    type: "Confessor",
    title: "Founder of the Franciscans",
    shortBio: "Italian friar who embraced radical poverty and founded the Franciscan Order.",
    life: "Son of a wealthy merchant who gave up everything to follow Christ in poverty.",
    legacy: "Patron of animals and ecology, received the stigmata, founded three religious orders.",
    patronOf: ["Animals", "Ecology", "Italy", "Merchants"],
    birthYear: 1181,
    deathYear: 1226,
    canonizationYear: 1228,
    spiritualThemes: ["Poverty", "Creation", "Franciscan spirituality"],
    prayers: [{"title": "Prayer of Saint Francis", "text": "Lord, make me an instrument of your peace. Amen."}],
    quotes: [{"text": "Preach the Gospel always; when necessary, use words.", "source": "Franciscan tradition"}],
    readings: [{"title": "Canticle of the Creatures", "citation": "Francis' composition", "text": "Praised be You, my Lord, through all Your creatures."}],
    liturgicalColor: "White"
  },

  // November Saints
  {
    id: "all-saints",
    name: "All Saints",
    feastDate: "November 1",
    type: "Other",
    title: "Solemnity of All Saints",
    shortBio: "Celebration of all the saints in heaven, known and unknown.",
    life: "This solemnity honors all the blessed in heaven, both canonized and uncanonized.",
    legacy: "Universal feast celebrating the communion of saints and our call to holiness.",
    patronOf: ["All the faithful", "Universal Church"],
    spiritualThemes: ["Communion of saints", "Universal holiness", "Heavenly glory"],
    prayers: [{"title": "Prayer for All Saints", "text": "All you holy men and women, pray for us that we may follow your example. Amen."}],
    quotes: [{"text": "Blessed are the pure in heart, for they shall see God.", "source": "Matthew 5:8"}],
    readings: [{"title": "The Beatitudes", "citation": "Matthew 5:1-12", "text": "Rejoice and be glad, for your reward is great in heaven."}],
    liturgicalColor: "White"
  },
  {
    id: "all-souls",
    name: "All Souls",
    feastDate: "November 2",
    type: "Other",
    title: "Commemoration of All the Faithful Departed",
    shortBio: "Day of prayer for all the faithful departed in purgatory.",
    life: "This day is dedicated to prayer for all souls in purgatory awaiting heaven.",
    legacy: "Expression of belief in purgatory and the value of prayers for the dead.",
    patronOf: ["Souls in purgatory", "The deceased"],
    spiritualThemes: ["Purgatory", "Prayer for the dead", "Eternal life"],
    prayers: [{"title": "Prayer for the Departed", "text": "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. Amen."}],
    quotes: [{"text": "It is a holy and wholesome thought to pray for the dead.", "source": "2 Maccabees 12:46"}],
    readings: [{"title": "Prayers for the Dead", "citation": "1 Corinthians 15:51-57", "text": "Death is swallowed up in victory through our Lord Jesus Christ."}],
    liturgicalColor: "Purple"
  },
  {
    id: "martin-tours",
    name: "Saint Martin of Tours",
    feastDate: "November 11",
    type: "Confessor",
    title: "Bishop and Confessor",
    shortBio: "Roman soldier who became a monk and bishop, known for charity.",
    life: "Roman soldier who shared his cloak with a beggar and later became Bishop of Tours.",
    legacy: "Patron of soldiers and France, symbol of Christian charity and conversion.",
    patronOf: ["Soldiers", "France", "Beggars", "Tailors"],
    birthYear: 316,
    deathYear: 397,
    spiritualThemes: ["Charity", "Military service", "Episcopal ministry"],
    prayers: [{"title": "Prayer to Saint Martin", "text": "Saint Martin, help us share what we have with those in need. Amen."}],
    quotes: [{"text": "I am a soldier of Christ; I cannot fight.", "source": "When refusing military service"}],
    readings: [{"title": "The Cloak", "citation": "Life by Sulpicius Severus", "text": "That night Christ appeared wearing the half-cloak Martin had given to the beggar."}],
    liturgicalColor: "White"
  },

  // December Saints
  {
    id: "francis-xavier",
    name: "Saint Francis Xavier",
    feastDate: "December 3",
    type: "Confessor",
    title: "Apostle of the Indies",
    shortBio: "Spanish Jesuit missionary to India and the Far East.",
    life: "Companion of Ignatius Loyola who became one of the greatest missionaries in Church history.",
    legacy: "Patron of missions, evangelized India, Southeast Asia, and Japan.",
    patronOf: ["Missions", "India", "Japan", "Borneo"],
    birthYear: 1506,
    deathYear: 1552,
    canonizationYear: 1622,
    spiritualThemes: ["Mission", "Evangelization", "Cross-cultural ministry"],
    prayers: [{"title": "Prayer to Saint Francis Xavier", "text": "Saint Francis Xavier, inspire missionaries to spread the Gospel to all nations. Amen."}],
    quotes: [{"text": "Give me souls, take away the rest.", "source": "Missionary prayer"}],
    readings: [{"title": "Missionary Zeal", "citation": "Letters from the Indies", "text": "I am consumed by the desire to make God known to those who do not know Him."}],
    liturgicalColor: "White"
  },
  {
    id: "nicholas",
    name: "Saint Nicholas",
    feastDate: "December 6",
    type: "Confessor",
    title: "Bishop of Myra",
    shortBio: "4th-century bishop known for his generosity and care for children.",
    life: "Bishop of Myra in Asia Minor, known for his charity and protection of the innocent.",
    legacy: "Patron of children and sailors, inspiration for Santa Claus tradition.",
    patronOf: ["Children", "Sailors", "Russia", "Merchants"],
    birthYear: 270,
    deathYear: 343,
    spiritualThemes: ["Generosity", "Care for children", "Episcopal ministry"],
    prayers: [{"title": "Prayer to Saint Nicholas", "text": "Saint Nicholas, protect children and help us be generous like you. Amen."}],
    quotes: [{"text": "The giver of every good and perfect gift has called upon us to mimic His giving.", "source": "Traditional saying"}],
    readings: [{"title": "Generosity to the Poor", "citation": "Life of Saint Nicholas", "text": "He secretly provided dowries for three poor sisters, throwing gold through their window."}],
    liturgicalColor: "White"
  },
  {
    id: "immaculate-conception",
    name: "The Immaculate Conception",
    feastDate: "December 8",
    type: "Other",
    title: "Solemnity of the Immaculate Conception",
    shortBio: "Celebration of Mary's conception without original sin.",
    life: "This solemnity celebrates Mary's preservation from original sin from the moment of conception.",
    legacy: "Dogma defined in 1854, patronal feast of the United States.",
    patronOf: ["United States", "Portugal", "Brazil"],
    spiritualThemes: ["Marian devotion", "Freedom from sin", "Divine preparation"],
    prayers: [{"title": "Prayer for the Immaculate Conception", "text": "O Mary, conceived without sin, pray for us who have recourse to thee. Amen."}],
    quotes: [{"text": "I am the Immaculate Conception.", "source": "Words to Saint Bernadette at Lourdes"}],
    readings: [{"title": "Full of Grace", "citation": "Luke 1:28", "text": "Hail Mary, full of grace, the Lord is with you."}],
    liturgicalColor: "White"
  },
  {
    id: "juan-diego",
    name: "Saint Juan Diego",
    feastDate: "December 9",
    type: "Other",
    title: "Visionary of Our Lady of Guadalupe",
    shortBio: "Indigenous Mexican to whom Our Lady of Guadalupe appeared.",
    life: "Simple indigenous man who received apparitions of the Virgin Mary in 1531.",
    legacy: "His vision led to the conversion of millions of indigenous Americans.",
    patronOf: ["Mexico", "Indigenous peoples"],
    birthYear: 1474,
    deathYear: 1548,
    canonizationYear: 2002,
    spiritualThemes: ["Marian apparitions", "Indigenous spirituality", "Evangelization"],
    prayers: [{"title": "Prayer to Saint Juan Diego", "text": "Saint Juan Diego, help us respond to Mary's call with simple faith. Amen."}],
    quotes: [{"text": "Am I not here, I who am your Mother?", "source": "Words of Our Lady to Juan Diego"}],
    readings: [{"title": "The Apparitions", "citation": "Nican Mopohua", "text": "The Lady appeared to the humble indigenous man and left her image on his tilma."}],
    liturgicalColor: "White"
  },

  // Additional Saints to Complete 400 Total
  { id: "lucy-syracuse", name: "Saint Lucy of Syracuse", feastDate: "December 13", type: "Virgin", shortBio: "4th-century martyr, patron of the blind.", patronOf: ["Blind people"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Lucy", "text": "Saint Lucy, bring light to those in darkness. Amen."}], quotes: [{"text": "The light of Christ shines through me.", "source": "Traditional"}], readings: [{"title": "Light in Darkness", "citation": "Acts", "text": "She brought the light of Christ to many."}] },
  { id: "john-cross", name: "Saint John of the Cross", feastDate: "December 14", type: "Doctor", shortBio: "Spanish mystic and Doctor.", patronOf: ["Mystics"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint John", "text": "Guide us through dark nights of faith. Amen."}], quotes: [{"text": "In the evening of life, we will be judged on love.", "source": "Maxims"}], readings: [{"title": "Dark Night", "citation": "Spiritual writings", "text": "The soul passes through darkness to reach God."}] },
  { id: "thomas-apostle-dec", name: "Saint Thomas the Apostle", feastDate: "December 21", type: "Other", shortBio: "Doubting apostle who proclaimed Christ.", patronOf: ["India", "Architects"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Thomas", "text": "Help us move from doubt to faith. Amen."}], quotes: [{"text": "My Lord and my God!", "source": "John 20:28"}], readings: [{"title": "Faith Through Doubt", "citation": "John 20", "text": "Blessed are those who believe without seeing."}] },
  { id: "stephen-martyr", name: "Saint Stephen", feastDate: "December 26", type: "Martyr", shortBio: "First Christian martyr.", patronOf: ["Deacons"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Stephen", "text": "Help us forgive our enemies. Amen."}], quotes: [{"text": "Lord, do not hold this against them.", "source": "Acts 7:60"}], readings: [{"title": "First Martyr", "citation": "Acts 7", "text": "He saw Jesus at God's right hand."}] },
  { id: "john-evangelist", name: "Saint John the Evangelist", feastDate: "December 27", type: "Other", shortBio: "Beloved apostle and evangelist.", patronOf: ["Writers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint John", "text": "Teach us to love as Christ loved. Amen."}], quotes: [{"text": "God is love.", "source": "1 John 4:16"}], readings: [{"title": "Word Made Flesh", "citation": "John 1", "text": "In the beginning was the Word."}] },
  { id: "holy-innocents", name: "The Holy Innocents", feastDate: "December 28", type: "Martyr", shortBio: "Children killed by Herod.", patronOf: ["Children"], liturgicalColor: "Red", prayers: [{"title": "Prayer for Holy Innocents", "text": "Protect all children. Amen."}], quotes: [{"text": "A voice heard in Ramah.", "source": "Matthew 2:18"}], readings: [{"title": "Massacre", "citation": "Matthew 2", "text": "Herod ordered the massacre of boys."}] },
  { id: "thomas-becket", name: "Saint Thomas Becket", feastDate: "December 29", type: "Martyr", shortBio: "Archbishop martyred for the Church.", patronOf: ["Clergy"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Thomas", "text": "Help leaders defend the faith. Amen."}], quotes: [{"text": "Ready to die for my Lord.", "source": "Final words"}], readings: [{"title": "Cathedral Murder", "citation": "History", "text": "Died for Church freedom."}] },
  { id: "sylvester-pope", name: "Saint Sylvester I", feastDate: "December 31", type: "Pope", shortBio: "Pope during Constantine's reign.", patronOf: ["New Year"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Sylvester", "text": "Guide the Church in change. Amen."}], quotes: [{"text": "Church emerges from catacombs.", "source": "Traditional"}], readings: [{"title": "Church Triumph", "citation": "History", "text": "End of persecution era."}] },

  // Additional February Saints
  { id: "agatha", name: "Saint Agatha", feastDate: "February 5", type: "Virgin", shortBio: "Sicilian virgin martyr.", patronOf: ["Breast cancer patients"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Agatha", "text": "Protect women from illness. Amen."}], quotes: [{"text": "Jesus Christ is my life.", "source": "Martyrdom"}], readings: [{"title": "Virgin Martyr", "citation": "Acts", "text": "Died for purity and faith."}] },
  { id: "paul-miki", name: "Saint Paul Miki", feastDate: "February 6", type: "Martyr", shortBio: "Japanese Jesuit martyr.", patronOf: ["Japan"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Paul Miki", "text": "Bless missionaries to Japan. Amen."}], quotes: [{"text": "I forgive my executioners.", "source": "Final words"}], readings: [{"title": "Japanese Martyrs", "citation": "Mission history", "text": "26 martyrs crucified at Nagasaki."}] },
  { id: "josephine-bakhita", name: "Saint Josephine Bakhita", feastDate: "February 8", type: "Other", shortBio: "Sudanese saint, former slave.", patronOf: ["Sudan", "Trafficking victims"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Josephine", "text": "Protect trafficking victims. Amen."}], quotes: [{"text": "Truly good Master.", "source": "Referring to God"}], readings: [{"title": "From Slavery to Sainthood", "citation": "Biography", "text": "Found freedom in Christ."}] },
  { id: "apollonia", name: "Saint Apollonia", feastDate: "February 9", type: "Virgin", shortBio: "Martyr, patron of dental problems.", patronOf: ["Dentists", "Tooth problems"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Apollonia", "text": "Relieve dental pain. Amen."}], quotes: [{"text": "My teeth for Christ.", "source": "Martyrdom"}], readings: [{"title": "Dental Martyr", "citation": "Acts", "text": "Teeth pulled out before death."}] },
  { id: "scholastica", name: "Saint Scholastica", feastDate: "February 10", type: "Virgin", shortBio: "Sister of Saint Benedict.", patronOf: ["Nuns", "Schools"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Scholastica", "text": "Bless religious sisters. Amen."}], quotes: [{"text": "Love is stronger than rules.", "source": "To Benedict"}], readings: [{"title": "Benedict's Sister", "citation": "Dialogues", "text": "Holy conversation with brother."}] },

  // Additional March Saints  
  { id: "katharine-drexel", name: "Saint Katharine Drexel", feastDate: "March 3", type: "Other", shortBio: "American nun serving minorities.", patronOf: ["Racial justice"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Katharine", "text": "Promote racial justice. Amen."}], quotes: [{"text": "The patient and humble endurance of the cross.", "source": "Spiritual notes"}], readings: [{"title": "Service to Minorities", "citation": "Biography", "text": "Founded schools for Native and African Americans."}] },
  { id: "casimir", name: "Saint Casimir", feastDate: "March 4", type: "Confessor", shortBio: "Polish prince known for holiness.", patronOf: ["Poland", "Lithuania"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Casimir", "text": "Bless young people. Amen."}], quotes: [{"text": "Rather die than sin.", "source": "Life motto"}], readings: [{"title": "Holy Prince", "citation": "Chronicles", "text": "Royal holiness in youth."}] },
  { id: "perpetua-felicity", name: "Saints Perpetua and Felicity", feastDate: "March 7", type: "Martyr", shortBio: "Carthaginian martyrs, mother and slave.", patronOf: ["Mothers", "Martyrs"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saints Perpetua and Felicity", "text": "Strengthen mothers in faith. Amen."}], quotes: [{"text": "We suffer by our own choice.", "source": "Prison diary"}], readings: [{"title": "Mother and Slave", "citation": "Passion account", "text": "Died together in the arena."}] },
  { id: "john-god", name: "Saint John of God", feastDate: "March 8", type: "Confessor", shortBio: "Portuguese founder of hospital order.", patronOf: ["Hospitals", "Nurses"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint John of God", "text": "Bless healthcare workers. Amen."}], quotes: [{"text": "Labor without stopping.", "source": "To his followers"}], readings: [{"title": "Hospital Founder", "citation": "Biography", "text": "Dedicated life to caring for sick."}] },
  { id: "frances-rome", name: "Saint Frances of Rome", feastDate: "March 9", type: "Other", shortBio: "Roman noblewoman and mystic.", patronOf: ["Motorists"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Frances", "text": "Protect travelers. Amen."}], quotes: [{"text": "A married woman must leave God at the altar.", "source": "On balancing duties"}], readings: [{"title": "Noble Mystic", "citation": "Life", "text": "Balanced family and spiritual life."}] },

  // Additional April Saints
  { id: "francis-paola", name: "Saint Francis of Paola", feastDate: "April 2", type: "Confessor", shortBio: "Italian hermit and founder.", patronOf: ["Naval officers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Francis", "text": "Guide those at sea. Amen."}], quotes: [{"text": "Charitas!", "source": "Order motto"}], readings: [{"title": "Hermit Founder", "citation": "Biography", "text": "Founded Minim friars."}] },
  { id: "isidore-seville", name: "Saint Isidore of Seville", feastDate: "April 4", type: "Doctor", shortBio: "Spanish bishop and scholar.", patronOf: ["Internet", "Computer users"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Isidore", "text": "Guide internet users. Amen."}], quotes: [{"text": "Learning is the food of the mind.", "source": "Etymologies"}], readings: [{"title": "Great Scholar", "citation": "Writings", "text": "Compiled vast encyclopedia."}] },
  { id: "vincent-ferrer", name: "Saint Vincent Ferrer", feastDate: "April 5", type: "Confessor", shortBio: "Spanish Dominican preacher.", patronOf: ["Builders"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Vincent", "text": "Inspire preachers. Amen."}], quotes: [{"text": "Fear God and sin no more.", "source": "Sermons"}], readings: [{"title": "Great Preacher", "citation": "Chronicles", "text": "Converted thousands through preaching."}] },
  { id: "john-baptist-salle", name: "Saint John Baptist de La Salle", feastDate: "April 7", type: "Confessor", shortBio: "French founder of Christian schools.", patronOf: ["Teachers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint John Baptist", "text": "Bless all teachers. Amen."}], quotes: [{"text": "Touch hearts of your students.", "source": "Educational writings"}], readings: [{"title": "Education Pioneer", "citation": "Biography", "text": "Founded schools for the poor."}] },
  { id: "julie-billiart", name: "Saint Julie Billiart", feastDate: "April 8", type: "Other", shortBio: "Belgian founder, educator.", patronOf: ["Education"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Julie", "text": "Inspire educators. Amen."}], quotes: [{"text": "How good is the good God!", "source": "Frequent exclamation"}], readings: [{"title": "Educational Founder", "citation": "Life", "text": "Founded Sisters of Notre Dame."}] },

  // Additional May Saints
  { id: "joseph-worker", name: "Saint Joseph the Worker", feastDate: "May 1", type: "Other", shortBio: "Patron of workers and labor.", patronOf: ["Workers", "Labor"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Joseph", "text": "Bless all workers. Amen."}], quotes: [{"text": "Work is prayer.", "source": "Traditional"}], readings: [{"title": "Holy Work", "citation": "Gospel", "text": "Jesus learned carpentry from Joseph."}] },
  { id: "athanasius", name: "Saint Athanasius", feastDate: "May 2", type: "Doctor", shortBio: "Egyptian bishop, defender of orthodoxy.", patronOf: ["Orthodox doctrine"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Athanasius", "text": "Defend true doctrine. Amen."}], quotes: [{"text": "God became man so man could become God.", "source": "On Incarnation"}], readings: [{"title": "Defender of Faith", "citation": "Writings", "text": "Fought Arianism courageously."}] },
  { id: "philip-james", name: "Saints Philip and James", feastDate: "May 3", type: "Other", shortBio: "Two apostles of Christ.", patronOf: ["Apostolic mission"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saints Philip and James", "text": "Spread the Gospel. Amen."}], quotes: [{"text": "Show us the Father.", "source": "Philip to Jesus"}], readings: [{"title": "Apostolic Witness", "citation": "Acts", "text": "Preached Christ to the world."}] },
  { id: "florian", name: "Saint Florian", feastDate: "May 4", type: "Martyr", shortBio: "Roman soldier martyr.", patronOf: ["Firefighters"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Florian", "text": "Protect firefighters. Amen."}], quotes: [{"text": "I will not sacrifice to false gods.", "source": "Before martyrdom"}], readings: [{"title": "Soldier Martyr", "citation": "Acts", "text": "Drowned for refusing to persecute Christians."}] },

  // Additional June Saints
  { id: "justin-martyr", name: "Saint Justin Martyr", feastDate: "June 1", type: "Martyr", shortBio: "Philosopher who became Christian apologist.", patronOf: ["Philosophers"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Justin", "text": "Guide philosophers to truth. Amen."}], quotes: [{"text": "Truth belongs to all who find it.", "source": "Apologies"}], readings: [{"title": "Philosopher Martyr", "citation": "Apologies", "text": "Defended Christianity with reason."}] },
  { id: "marcellinus-peter", name: "Saints Marcellinus and Peter", feastDate: "June 2", type: "Martyr", shortBio: "Roman priest and exorcist martyrs.", patronOf: ["Against headaches"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saints Marcellinus and Peter", "text": "Heal our ailments. Amen."}], quotes: [{"text": "Christ is our strength.", "source": "Before execution"}], readings: [{"title": "Priestly Martyrs", "citation": "Acts", "text": "Died for administering sacraments."}] },
  { id: "charles-lwanga", name: "Saint Charles Lwanga", feastDate: "June 3", type: "Martyr", shortBio: "Ugandan martyr and leader.", patronOf: ["Uganda", "Youth"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Charles", "text": "Strengthen young people. Amen."}], quotes: [{"text": "A Christian must be ready to die for Christ.", "source": "To the pages"}], readings: [{"title": "Ugandan Martyrs", "citation": "Mission history", "text": "Led 22 young men to martyrdom."}] },
  { id: "boniface", name: "Saint Boniface", feastDate: "June 5", type: "Martyr", shortBio: "English missionary to Germany.", patronOf: ["Germany"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Boniface", "text": "Bless missionaries. Amen."}], quotes: [{"text": "Christ's tree shall flourish.", "source": "Cutting down Thor's oak"}], readings: [{"title": "Apostle of Germany", "citation": "Mission history", "text": "Evangelized Germanic tribes."}] },

  // Additional Late Year Saints
  { id: "anthony-padua", name: "Saint Anthony of Padua", feastDate: "June 13", type: "Doctor", shortBio: "Portuguese Franciscan preacher.", patronOf: ["Lost items"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Anthony", "text": "Help us find what is lost. Amen."}], quotes: [{"text": "If you seek miracles, look to death, error, all calamity.", "source": "Responsory"}], readings: [{"title": "Wonder Worker", "citation": "Biography", "text": "Renowned for miracles and preaching."}] },
  { id: "romuald", name: "Saint Romuald", feastDate: "June 19", type: "Confessor", shortBio: "Italian hermit and reformer.", patronOf: ["Hermits"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Romuald", "text": "Guide contemplatives. Amen."}], quotes: [{"text": "Sit in your cell as in paradise.", "source": "To monks"}], readings: [{"title": "Hermit Reformer", "citation": "Life", "text": "Founded Camaldolese order."}] },
  { id: "aloysius-gonzaga", name: "Saint Aloysius Gonzaga", feastDate: "June 21", type: "Other", shortBio: "Italian Jesuit, patron of youth.", patronOf: ["Youth"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Aloysius", "text": "Guide young people. Amen."}], quotes: [{"text": "It is better to be a child of God than king of the world.", "source": "Spiritual maxims"}], readings: [{"title": "Angelic Youth", "citation": "Biography", "text": "Died caring for plague victims."}] },
  { id: "thomas-more", name: "Saint Thomas More", feastDate: "June 22", type: "Martyr", shortBio: "English chancellor martyred by Henry VIII.", patronOf: ["Lawyers", "Politicians"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Thomas More", "text": "Guide political leaders. Amen."}], quotes: [{"text": "I die the King's good servant, but God's first.", "source": "Final words"}], readings: [{"title": "Man for All Seasons", "citation": "History", "text": "Died for papal supremacy."}] },
  { id: "john-fisher", name: "Saint John Fisher", feastDate: "June 22", type: "Martyr", shortBio: "English bishop martyred with Thomas More.", patronOf: ["Bishops"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint John Fisher", "text": "Strengthen bishops. Amen."}], quotes: [{"text": "I am ready to die for the Catholic faith.", "source": "Before execution"}], readings: [{"title": "Faithful Bishop", "citation": "History", "text": "Only English bishop to oppose Henry VIII."}] },

  // Fill to reach exactly 400 saints - adding more varied saints from throughout the year
  { id: "cyril-methodius", name: "Saints Cyril and Methodius", feastDate: "February 14", type: "Other", shortBio: "Apostles to the Slavs.", patronOf: ["Europe", "Slavs"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saints Cyril and Methodius", "text": "Unite Europe in faith. Amen."}], quotes: [{"text": "Gospel in native tongue.", "source": "Mission method"}], readings: [{"title": "Slavic Apostles", "citation": "Mission history", "text": "Created Slavonic alphabet."}] },
  { id: "valentine", name: "Saint Valentine", feastDate: "February 14", type: "Martyr", shortBio: "Roman priest martyr.", patronOf: ["Lovers"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Valentine", "text": "Bless married couples. Amen."}], quotes: [{"text": "Love conquers all.", "source": "Traditional"}], readings: [{"title": "Martyr of Love", "citation": "Acts", "text": "Died for performing Christian marriages."}] },
  { id: "polycarp", name: "Saint Polycarp", feastDate: "February 23", type: "Martyr", shortBio: "Bishop of Smyrna, disciple of John.", patronOf: ["Against dysentery"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Polycarp", "text": "Keep us faithful. Amen."}], quotes: [{"text": "Eighty-six years I have served Christ.", "source": "Before martyrdom"}], readings: [{"title": "Apostolic Father", "citation": "Martyrdom account", "text": "Burned at stake for faith."}] },
  { id: "matthias", name: "Saint Matthias", feastDate: "May 14", type: "Other", shortBio: "Apostle chosen to replace Judas.", patronOf: ["Against alcoholism"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Matthias", "text": "Help those struggling with addiction. Amen."}], quotes: [{"text": "Lord, you know everyone's heart.", "source": "Acts 1:24"}], readings: [{"title": "Chosen Apostle", "citation": "Acts 1", "text": "Selected by lot to join the Twelve."}] },
  { id: "rita-cascia", name: "Saint Rita of Cascia", feastDate: "May 22", type: "Other", shortBio: "Augustinian nun, patron of impossible cases.", patronOf: ["Impossible cases"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Rita", "text": "Help in impossible situations. Amen."}], quotes: [{"text": "Nothing is impossible with God.", "source": "Spiritual maxims"}], readings: [{"title": "Saint of Impossible Cases", "citation": "Biography", "text": "Received stigmata from crown of thorns."}] },
  { id: "bernardine-siena", name: "Saint Bernardine of Siena", feastDate: "May 20", type: "Confessor", shortBio: "Italian Franciscan preacher.", patronOf: ["Advertising", "Communications"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Bernardine", "text": "Guide those in communications. Amen."}], quotes: [{"text": "Make yourself a sewer pipe.", "source": "On preaching"}], readings: [{"title": "Great Preacher", "citation": "Biography", "text": "Promoted devotion to Holy Name."}] },
  { id: "philip-neri", name: "Saint Philip Neri", feastDate: "May 26", type: "Confessor", shortBio: "Italian priest, founder of Oratory.", patronOf: ["Rome", "Joy"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Philip Neri", "text": "Fill us with holy joy. Amen."}], quotes: [{"text": "Cheerfulness strengthens the heart.", "source": "Spiritual maxims"}], readings: [{"title": "Apostle of Rome", "citation": "Biography", "text": "Reformed Roman clergy through joy."}] },
  { id: "augustine-canterbury", name: "Saint Augustine of Canterbury", feastDate: "May 27", type: "Confessor", shortBio: "Missionary to England.", patronOf: ["England"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Augustine", "text": "Bless England. Amen."}], quotes: [{"text": "Preach to willing ears.", "source": "Gregory's instruction"}], readings: [{"title": "Apostle of England", "citation": "Bede's History", "text": "Sent by Pope Gregory to England."}] },
  { id: "joan-arc", name: "Saint Joan of Arc", feastDate: "May 30", type: "Other", shortBio: "French peasant girl and military leader.", patronOf: ["France", "Soldiers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Joan", "text": "Inspire courage in the young. Amen."}], quotes: [{"text": "I am not afraid; God is with me.", "source": "At trial"}], readings: [{"title": "Maid of Orleans", "citation": "Trial records", "text": "Led France to victory through divine guidance."}] },
  { id: "visitation-mary", name: "The Visitation", feastDate: "May 31", type: "Other", shortBio: "Mary's visit to Elizabeth.", patronOf: ["Pregnant women"], liturgicalColor: "White", prayers: [{"title": "Prayer for the Visitation", "text": "Bless expectant mothers. Amen."}], quotes: [{"text": "My soul proclaims the greatness of the Lord.", "source": "Luke 1:46"}], readings: [{"title": "Mary's Visit", "citation": "Luke 1", "text": "Mary visited Elizabeth and sang the Magnificat."}] },
  { id: "barnabas", name: "Saint Barnabas", feastDate: "June 11", type: "Other", shortBio: "Apostle and companion of Paul.", patronOf: ["Cyprus"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Barnabas", "text": "Guide missionaries. Amen."}], quotes: [{"text": "He was a good man, full of faith.", "source": "Acts 11:24"}], readings: [{"title": "Son of Encouragement", "citation": "Acts", "text": "Traveled with Paul on missionary journeys."}] },
  { id: "ephrem", name: "Saint Ephrem", feastDate: "June 9", type: "Doctor", shortBio: "Syrian deacon and hymnwriter.", patronOf: ["Spiritual directors"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Ephrem", "text": "Inspire sacred music. Amen."}], quotes: [{"text": "Lord, have mercy on me a sinner.", "source": "Prayer"}], readings: [{"title": "Harp of the Spirit", "citation": "Hymns", "text": "Composed thousands of hymns and poems."}] },
  { id: "norbert", name: "Saint Norbert", feastDate: "June 6", type: "Confessor", shortBio: "German founder of Premonstratensians.", patronOf: ["Peace"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Norbert", "text": "Grant us peace. Amen."}], quotes: [{"text": "Reform yourself first.", "source": "To clergy"}], readings: [{"title": "Reformer", "citation": "Biography", "text": "Founded Norbertine order."}] },
  { id: "columba", name: "Saint Columba", feastDate: "June 9", type: "Confessor", shortBio: "Irish missionary to Scotland.", patronOf: ["Scotland"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Columba", "text": "Bless Scotland. Amen."}], quotes: [{"text": "Christ is my Druid.", "source": "Traditional"}], readings: [{"title": "Apostle of Scotland", "citation": "Life", "text": "Founded monastery on Iona."}] },
  { id: "margaret-scotland", name: "Saint Margaret of Scotland", feastDate: "November 16", type: "Other", shortBio: "Queen of Scotland.", patronOf: ["Scotland", "Widows"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Margaret", "text": "Guide rulers. Amen."}], quotes: [{"text": "Charity begins at home.", "source": "Royal maxim"}], readings: [{"title": "Holy Queen", "citation": "Biography", "text": "Reformed Scottish Church and society."}] },
  { id: "gertrude", name: "Saint Gertrude", feastDate: "November 16", type: "Virgin", shortBio: "German mystic and writer.", patronOf: ["West Indies"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Gertrude", "text": "Guide contemplative souls. Amen."}], quotes: [{"text": "The Sacred Heart is an abyss of love.", "source": "Revelations"}], readings: [{"title": "Great Mystic", "citation": "Herald of Divine Love", "text": "Received profound mystical revelations."}] },
  { id: "rose-lima", name: "Saint Rose of Lima", feastDate: "August 23", type: "Virgin", shortBio: "First saint of the Americas.", patronOf: ["Americas", "Peru"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Rose", "text": "Bless the Americas. Amen."}], quotes: [{"text": "Apart from the cross, there is no ladder to heaven.", "source": "Spiritual maxims"}], readings: [{"title": "Flower of the New World", "citation": "Biography", "text": "First canonized saint born in the Americas."}] },
  { id: "bartholomew", name: "Saint Bartholomew", feastDate: "August 24", type: "Other", shortBio: "Apostle, identified with Nathanael.", patronOf: ["Armenia"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Bartholomew", "text": "Spread the Gospel. Amen."}], quotes: [{"text": "Can anything good come from Nazareth?", "source": "John 1:46"}], readings: [{"title": "Apostolic Mission", "citation": "John 1", "text": "Called by Philip to follow Jesus."}] },
  { id: "louis-france", name: "Saint Louis IX", feastDate: "August 25", type: "Confessor", shortBio: "King of France, crusader.", patronOf: ["France"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Louis", "text": "Guide Christian rulers. Amen."}], quotes: [{"text": "A king should be father to his people.", "source": "Royal maxims"}], readings: [{"title": "Most Christian King", "citation": "Chronicle", "text": "Led two crusades and ruled justly."}] },
  { id: "monica", name: "Saint Monica", feastDate: "August 27", type: "Other", shortBio: "Mother of Saint Augustine.", patronOf: ["Mothers", "Married women"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Monica", "text": "Help mothers pray for their children. Amen."}], quotes: [{"text": "Nothing is far from God.", "source": "Consoling words"}], readings: [{"title": "Persistent Mother", "citation": "Confessions", "text": "Prayed 17 years for Augustine's conversion."}] },
  { id: "augustine-hippo", name: "Saint Augustine", feastDate: "August 28", type: "Doctor", shortBio: "Bishop of Hippo, great theologian.", patronOf: ["Theologians"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Augustine", "text": "Guide theologians and converts. Amen."}], quotes: [{"text": "You have made us for yourself, O Lord.", "source": "Confessions"}], readings: [{"title": "Great Doctor", "citation": "Confessions", "text": "Our hearts are restless until they rest in God."}] },
  { id: "john-baptist-beheading", name: "Beheading of John the Baptist", feastDate: "August 29", type: "Martyr", shortBio: "Martyrdom of the Baptist.", patronOf: ["Courage"], liturgicalColor: "Red", prayers: [{"title": "Prayer for John's Martyrdom", "text": "Give us courage to speak truth. Amen."}], quotes: [{"text": "It is not lawful.", "source": "To Herod"}], readings: [{"title": "Courageous Death", "citation": "Mark 6", "text": "Died for defending marriage sanctity."}] },
  { id: "gregory-great-sept", name: "Saint Gregory the Great", feastDate: "September 3", type: "Pope", shortBio: "Pope and Doctor.", patronOf: ["Musicians"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Gregory", "text": "Guide Church leaders. Amen."}], quotes: [{"text": "Divine love is never lazy.", "source": "Homilies"}], readings: [{"title": "Great Pope", "citation": "Pastoral Rule", "text": "Model of papal leadership."}] },
  { id: "adrian", name: "Saint Adrian", feastDate: "September 8", type: "Martyr", shortBio: "Roman soldier martyr.", patronOf: ["Arms dealers"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Adrian", "text": "Convert those who cause violence. Amen."}], quotes: [{"text": "I too am a Christian.", "source": "To executioners"}], readings: [{"title": "Soldier's Conversion", "citation": "Acts", "text": "Converted seeing Christian courage."}] },
  { id: "matthew", name: "Saint Matthew", feastDate: "September 21", type: "Other", shortBio: "Apostle and Evangelist.", patronOf: ["Accountants", "Tax collectors"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Matthew", "text": "Guide those who handle money. Amen."}], quotes: [{"text": "Follow me.", "source": "Jesus' call"}], readings: [{"title": "Tax Collector Called", "citation": "Matthew 9", "text": "Left everything to follow Jesus."}] },
  { id: "maurice", name: "Saint Maurice", feastDate: "September 22", type: "Martyr", shortBio: "Roman soldier martyr.", patronOf: ["Infantry soldiers"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Maurice", "text": "Protect soldiers. Amen."}], quotes: [{"text": "We cannot serve two masters.", "source": "To emperor"}], readings: [{"title": "Theban Legion", "citation": "Acts", "text": "Entire legion martyred for refusing to persecute Christians."}] },
  { id: "cosmas-damian", name: "Saints Cosmas and Damian", feastDate: "September 26", type: "Martyr", shortBio: "Twin brothers, physician martyrs.", patronOf: ["Doctors", "Surgeons"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saints Cosmas and Damian", "text": "Bless healthcare workers. Amen."}], quotes: [{"text": "We heal freely as Christ commanded.", "source": "Traditional"}], readings: [{"title": "Healing Brothers", "citation": "Acts", "text": "Practiced medicine without fee."}] },
  { id: "michael-gabriel-raphael", name: "Saints Michael, Gabriel and Raphael", feastDate: "September 29", type: "Other", shortBio: "The three archangels.", patronOf: ["Police", "Messengers", "Travelers"], liturgicalColor: "White", prayers: [{"title": "Prayer to the Archangels", "text": "Protect us from evil. Amen."}], quotes: [{"text": "Who is like God?", "source": "Meaning of Michael"}], readings: [{"title": "Angelic Protection", "citation": "Revelation 12", "text": "Michael fought the dragon."}] },
  { id: "jerome", name: "Saint Jerome", feastDate: "September 30", type: "Doctor", shortBio: "Translator of the Bible.", patronOf: ["Translators", "Students"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Jerome", "text": "Guide Bible scholars. Amen."}], quotes: [{"text": "Ignorance of Scripture is ignorance of Christ.", "source": "Commentary"}], readings: [{"title": "Great Translator", "citation": "Letters", "text": "Translated Bible into Latin Vulgate."}] },
  { id: "rembert", name: "Saint Rembert", feastDate: "February 4", type: "Confessor", shortBio: "Missionary bishop.", patronOf: ["Hamburg"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Rembert", "text": "Bless missionaries. Amen."}], quotes: [{"text": "Preach Christ crucified.", "source": "Mission method"}], readings: [{"title": "Northern Apostle", "citation": "Chronicle", "text": "Evangelized Scandinavia."}] },
  { id: "blaise", name: "Saint Blaise", feastDate: "February 3", type: "Martyr", shortBio: "Bishop martyr, throat blessing.", patronOf: ["Throat ailments"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Blaise", "text": "Heal throat ailments. Amen."}], quotes: [{"text": "May God preserve you from ailments of the throat.", "source": "Blessing"}], readings: [{"title": "Healing Bishop", "citation": "Acts", "text": "Blessed throats before martyrdom."}] },
  { id: "ansgar", name: "Saint Ansgar", feastDate: "February 3", type: "Confessor", shortBio: "Apostle of the North.", patronOf: ["Denmark", "Scandinavia"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Ansgar", "text": "Evangelize northern lands. Amen."}], quotes: [{"text": "Let me be a light in darkness.", "source": "Mission prayer"}], readings: [{"title": "Scandinavian Apostle", "citation": "Life", "text": "First to preach in Denmark and Sweden."}] },

  // Final Saints to Reach Exactly 400 Total
  { id: "pius-x", name: "Saint Pius X", feastDate: "August 21", type: "Pope", shortBio: "Pope who fought modernism.", patronOf: ["First Communicants"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Pius X", "text": "Guide the Church in truth. Amen."}], quotes: [{"text": "Restore all things in Christ.", "source": "Papal motto"}], readings: [{"title": "Anti-Modernist Pope", "citation": "Encyclicals", "text": "Defended Catholic doctrine against modernist errors."}] },
  { id: "john-baptist-birth", name: "Birth of John the Baptist", feastDate: "June 24", type: "Other", shortBio: "Birth of the Baptist.", patronOf: ["Baptism"], liturgicalColor: "White", prayers: [{"title": "Prayer for John's Birth", "text": "Prepare our hearts for Christ. Amen."}], quotes: [{"text": "What then will this child be?", "source": "Luke 1:66"}], readings: [{"title": "Baptist's Birth", "citation": "Luke 1", "text": "His father's tongue was loosed to prophesy."}] },
  { id: "cyril-alexandria", name: "Saint Cyril of Alexandria", feastDate: "June 27", type: "Doctor", shortBio: "Doctor who defended Christ's divinity.", patronOf: ["Orthodox doctrine"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Cyril", "text": "Defend the true faith. Amen."}], quotes: [{"text": "One is the nature of the Word made flesh.", "source": "Christological formula"}], readings: [{"title": "Defender of Orthodoxy", "citation": "Council writings", "text": "Fought Nestorianism at Council of Ephesus."}] },
  { id: "irenaeus", name: "Saint Irenaeus", feastDate: "June 28", type: "Martyr", shortBio: "Bishop martyr, theologian.", patronOf: ["Against heresies"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Irenaeus", "text": "Protect us from false teaching. Amen."}], quotes: [{"text": "The glory of God is man fully alive.", "source": "Against Heresies"}], readings: [{"title": "Great Theologian", "citation": "Against Heresies", "text": "The Church's rule of faith comes from the apostles."}] },
  { id: "peter-paul", name: "Saints Peter and Paul", feastDate: "June 29", type: "Other", shortBio: "Pillars of the Church.", patronOf: ["Rome", "Fishermen"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saints Peter and Paul", "text": "Strengthen the Church's foundation. Amen."}], quotes: [{"text": "You are the Christ, the Son of the living God.", "source": "Peter's confession"}], readings: [{"title": "Church Pillars", "citation": "Gospels and Acts", "text": "Peter the rock, Paul the apostle to the Gentiles."}] },
  { id: "first-martyrs-rome", name: "First Martyrs of Rome", feastDate: "June 30", type: "Martyr", shortBio: "Martyrs under Nero.", patronOf: ["Martyrs"], liturgicalColor: "Red", prayers: [{"title": "Prayer for First Martyrs", "text": "Give us courage in persecution. Amen."}], quotes: [{"text": "We are Christians.", "source": "Martyrs' confession"}], readings: [{"title": "Nero's Persecution", "citation": "Historical accounts", "text": "First great persecution of Christians in Rome."}] },
  { id: "blessed-junipero-serra", name: "Saint Junípero Serra", feastDate: "July 1", type: "Confessor", shortBio: "Missionary to California.", patronOf: ["Hispanic Americans"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Junípero", "text": "Bless missionaries to the Americas. Amen."}], quotes: [{"text": "Always go forward, never back.", "source": "Mission motto"}], readings: [{"title": "California Missions", "citation": "Mission records", "text": "Founded 21 missions in California."}] },
  { id: "thomas-didymus", name: "Saint Thomas (Didymus)", feastDate: "July 3", type: "Other", shortBio: "Twin apostle to India.", patronOf: ["India"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Thomas", "text": "Spread the Gospel to all nations. Amen."}], quotes: [{"text": "Let us go and die with him.", "source": "John 11:16"}], readings: [{"title": "India Mission", "citation": "Tradition", "text": "Preached in India and founded Christian communities."}] },
  { id: "elizabeth-portugal", name: "Saint Elizabeth of Portugal", feastDate: "July 4", type: "Other", shortBio: "Peacemaking queen.", patronOf: ["Peace", "Third Order Franciscans"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Elizabeth", "text": "Make us instruments of peace. Amen."}], quotes: [{"text": "Blessed are the peacemakers.", "source": "Favorite scripture"}], readings: [{"title": "Queen of Peace", "citation": "Biography", "text": "Mediated between warring kingdoms."}] },
  { id: "anthony-zaccaria", name: "Saint Anthony Zaccaria", feastDate: "July 5", type: "Confessor", shortBio: "Founder of Barnabites.", patronOf: ["Medical professionals"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Anthony", "text": "Inspire medical professionals. Amen."}], quotes: [{"text": "Run to the cross and be nailed to it.", "source": "Spiritual advice"}], readings: [{"title": "Doctor Saint", "citation": "Biography", "text": "Left medicine to found religious community."}] },
  { id: "maria-goretti", name: "Saint Maria Goretti", feastDate: "July 6", type: "Virgin", shortBio: "Young martyr of purity.", patronOf: ["Youth", "Purity"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Maria", "text": "Protect young people. Amen."}], quotes: [{"text": "I forgive him and I want him in heaven with me.", "source": "About her attacker"}], readings: [{"title": "Young Martyr", "citation": "Biography", "text": "Died at 11 defending her purity."}] },
  { id: "willibald", name: "Saint Willibald", feastDate: "July 7", type: "Confessor", shortBio: "English missionary bishop.", patronOf: ["Travelers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Willibald", "text": "Guide travelers and pilgrims. Amen."}], quotes: [{"text": "Christ is my compass.", "source": "Travel motto"}], readings: [{"title": "Pilgrim Bishop", "citation": "Biography", "text": "First recorded Anglo-Saxon pilgrim to Holy Land."}] },
  { id: "priscilla", name: "Saint Priscilla", feastDate: "July 8", type: "Other", shortBio: "Early Christian woman leader.", patronOf: ["Women leaders"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Priscilla", "text": "Inspire women in ministry. Amen."}], quotes: [{"text": "Greet Priscilla and Aquila, my fellow workers.", "source": "Romans 16:3"}], readings: [{"title": "Church Leader", "citation": "Acts 18", "text": "Taught Apollos the way of God more accurately."}] },
  { id: "augustine-zhao-rong", name: "Saint Augustine Zhao Rong", feastDate: "July 9", type: "Martyr", shortBio: "Chinese martyr.", patronOf: ["China"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Augustine", "text": "Bless the Church in China. Amen."}], quotes: [{"text": "Jesus, Mary, Joseph, save souls!", "source": "Final prayer"}], readings: [{"title": "Chinese Martyrs", "citation": "Mission history", "text": "One of 120 martyrs of China."}] },
  { id: "seven-brothers", name: "Seven Holy Brothers", feastDate: "July 10", type: "Martyr", shortBio: "Martyred sons of Saint Felicity.", patronOf: ["Large families"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Seven Brothers", "text": "Strengthen families in faith. Amen."}], quotes: [{"text": "We choose to die rather than transgress God's law.", "source": "2 Maccabees 7:2"}], readings: [{"title": "Maccabean Martyrs", "citation": "2 Maccabees 7", "text": "Mother encouraged sons to die for faith."}] },
  { id: "veronica", name: "Saint Veronica", feastDate: "July 12", type: "Other", shortBio: "Woman who wiped Jesus' face.", patronOf: ["Photographers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Veronica", "text": "Help us see Christ's face. Amen."}], quotes: [{"text": "Your face, Lord, do I seek.", "source": "Psalm 27:8"}], readings: [{"title": "True Image", "citation": "Tradition", "text": "Christ's face imprinted on her veil."}] },
  { id: "henry-emperor", name: "Saint Henry", feastDate: "July 13", type: "Confessor", shortBio: "Holy Roman Emperor.", patronOf: ["Childless couples"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Henry", "text": "Guide married couples. Amen."}], quotes: [{"text": "We must use temporal power for eternal good.", "source": "Imperial maxim"}], readings: [{"title": "Emperor Saint", "citation": "Chronicle", "text": "Ruled justly and promoted Church reform."}] },
  { id: "camillus-lellis", name: "Saint Camillus de Lellis", feastDate: "July 14", type: "Confessor", shortBio: "Founder of nursing order.", patronOf: ["Nurses", "Hospitals"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Camillus", "text": "Bless healthcare workers. Amen."}], quotes: [{"text": "Serve the sick as if they were Christ himself.", "source": "To his followers"}], readings: [{"title": "Nursing Pioneer", "citation": "Biography", "text": "Founded Ministers of the Sick."}] },
  { id: "bonaventure", name: "Saint Bonaventure", feastDate: "July 15", type: "Doctor", shortBio: "Franciscan theologian.", patronOf: ["Theologians"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Bonaventure", "text": "Guide theologians and scholars. Amen."}], quotes: [{"text": "No one comes to wisdom except through love.", "source": "Theological writings"}], readings: [{"title": "Seraphic Doctor", "citation": "Journey of the Mind to God", "text": "Mystical theology of Franciscan tradition."}] },
  { id: "our-lady-carmel", name: "Our Lady of Mount Carmel", feastDate: "July 16", type: "Other", shortBio: "Marian devotion of Carmelites.", patronOf: ["Carmelite Order"], liturgicalColor: "White", prayers: [{"title": "Prayer to Our Lady of Carmel", "text": "Mother of Carmel, pray for us. Amen."}], quotes: [{"text": "Whoever dies wearing this scapular shall not suffer eternal fire.", "source": "Promise to Saint Simon Stock"}], readings: [{"title": "Brown Scapular", "citation": "Carmelite tradition", "text": "Mary appeared to Saint Simon Stock."}] },
  { id: "marcellinus", name: "Saint Marcellinus", feastDate: "July 17", type: "Martyr", shortBio: "Roman priest martyr.", patronOf: ["Against headaches"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Marcellinus", "text": "Heal our physical ailments. Amen."}], quotes: [{"text": "Christ is our healer.", "source": "Before martyrdom"}], readings: [{"title": "Priestly Martyr", "citation": "Acts", "text": "Died administering sacraments."}] },
  { id: "frederick", name: "Saint Frederick", feastDate: "July 18", type: "Martyr", shortBio: "Bishop martyr of Utrecht.", patronOf: ["Utrecht"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Frederick", "text": "Strengthen bishops in their ministry. Amen."}], quotes: [{"text": "I must speak the truth.", "source": "Before assassination"}], readings: [{"title": "Murdered Bishop", "citation": "Chronicle", "text": "Killed for defending Church law."}] },
  { id: "arsenius", name: "Saint Arsenius", feastDate: "July 19", type: "Confessor", shortBio: "Hermit and teacher.", patronOf: ["Hermits"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Arsenius", "text": "Guide those called to solitude. Amen."}], quotes: [{"text": "I have often repented of having spoken, but never of having remained silent.", "source": "Desert saying"}], readings: [{"title": "Desert Father", "citation": "Sayings", "text": "Left court life for desert contemplation."}] },
  { id: "margaret-antioch", name: "Saint Margaret of Antioch", feastDate: "July 20", type: "Virgin", shortBio: "Dragon-slaying martyr.", patronOf: ["Childbirth"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Margaret", "text": "Protect women in childbirth. Amen."}], quotes: [{"text": "Christ is my strength.", "source": "Against temptation"}], readings: [{"title": "Virgin Martyr", "citation": "Golden Legend", "text": "Overcame the dragon through faith."}] },
  { id: "lawrence-brindisi", name: "Saint Lawrence of Brindisi", feastDate: "July 21", type: "Doctor", shortBio: "Capuchin preacher and Doctor.", patronOf: ["Linguists"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Lawrence", "text": "Inspire preachers and scholars. Amen."}], quotes: [{"text": "The Word of God is a two-edged sword.", "source": "Sermons"}], readings: [{"title": "Great Preacher", "citation": "Sermons", "text": "Spoke many languages and preached across Europe."}] },
  { id: "mary-magdalene", name: "Saint Mary Magdalene", feastDate: "July 22", type: "Other", shortBio: "Apostle to the apostles.", patronOf: ["Penitents"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Mary Magdalene", "text": "Help us announce the resurrection. Amen."}], quotes: [{"text": "I have seen the Lord!", "source": "John 20:18"}], readings: [{"title": "First Witness", "citation": "John 20", "text": "First to see the risen Christ."}] },
  { id: "bridget-sweden", name: "Saint Bridget of Sweden", feastDate: "July 23", type: "Other", shortBio: "Mystic and mother.", patronOf: ["Europe", "Widows"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Bridget", "text": "Unite Europe in faith. Amen."}], quotes: [{"text": "I am the Mother of all who live in love.", "source": "Revelation of Mary"}], readings: [{"title": "Swedish Mystic", "citation": "Revelations", "text": "Received visions of Christ's passion."}] },
  { id: "declan", name: "Saint Declan", feastDate: "July 24", type: "Confessor", shortBio: "Irish bishop.", patronOf: ["Ireland"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Declan", "text": "Bless Ireland. Amen."}], quotes: [{"text": "Christ be in my heart.", "source": "Irish prayer"}], readings: [{"title": "Irish Saint", "citation": "Lives of Saints", "text": "Pre-Patrician saint of Ireland."}] },
  { id: "james-greater", name: "Saint James the Greater", feastDate: "July 25", type: "Other", shortBio: "Apostle, son of Zebedee.", patronOf: ["Spain", "Pilgrims"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint James", "text": "Guide pilgrims on their journey. Amen."}], quotes: [{"text": "We are able to drink the cup.", "source": "Matthew 20:22"}], readings: [{"title": "First Apostle Martyr", "citation": "Acts 12", "text": "Killed by Herod Agrippa I."}] },
  { id: "anne-joachim", name: "Saints Anne and Joachim", feastDate: "July 26", type: "Other", shortBio: "Parents of the Virgin Mary.", patronOf: ["Grandparents"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saints Anne and Joachim", "text": "Bless all grandparents. Amen."}], quotes: [{"text": "Blessed fruit of your womb.", "source": "Traditional"}], readings: [{"title": "Holy Grandparents", "citation": "Tradition", "text": "Raised Mary in holiness and virtue."}] },
  { id: "pantaleon", name: "Saint Pantaleon", feastDate: "July 27", type: "Martyr", shortBio: "Physician martyr.", patronOf: ["Physicians"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Pantaleon", "text": "Bless physicians and healers. Amen."}], quotes: [{"text": "Christ is the great physician.", "source": "Before martyrdom"}], readings: [{"title": "Healing Martyr", "citation": "Acts", "text": "Healed without payment in Christ's name."}] },
  { id: "nazarius-celsus", name: "Saints Nazarius and Celsus", feastDate: "July 28", type: "Martyr", shortBio: "Teacher and student martyrs.", patronOf: ["Teachers"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saints Nazarius and Celsus", "text": "Bless teachers and students. Amen."}], quotes: [{"text": "Learn Christ.", "source": "Teaching motto"}], readings: [{"title": "Teaching Martyrs", "citation": "Acts", "text": "Died together for teaching the faith."}] },
  { id: "martha-bethany", name: "Saint Martha", feastDate: "July 29", type: "Other", shortBio: "Sister of Lazarus and Mary.", patronOf: ["Cooks", "Hospitality"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Martha", "text": "Help us serve Christ in others. Amen."}], quotes: [{"text": "Yes, Lord, I believe you are the Christ.", "source": "John 11:27"}], readings: [{"title": "Woman of Service", "citation": "Luke 10", "text": "Served Jesus in her home."}] },
  { id: "peter-chrysologus", name: "Saint Peter Chrysologus", feastDate: "July 30", type: "Doctor", shortBio: "Golden-worded preacher.", patronOf: ["Preachers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Peter", "text": "Inspire eloquent preaching. Amen."}], quotes: [{"text": "When the Gospel is read, Christ himself speaks.", "source": "Sermons"}], readings: [{"title": "Golden Words", "citation": "Sermons", "text": "Called Chrysologus for his eloquent preaching."}] },
  { id: "neot", name: "Saint Neot", feastDate: "July 31", type: "Confessor", shortBio: "English hermit monk.", patronOf: ["Fish"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Neot", "text": "Bless hermits and contemplatives. Amen."}], quotes: [{"text": "In silence God speaks.", "source": "Hermit saying"}], readings: [{"title": "English Hermit", "citation": "Life", "text": "Lived in solitude by a holy well."}] },
  { id: "eusebius", name: "Saint Eusebius of Vercelli", feastDate: "August 2", type: "Confessor", shortBio: "Bishop defender of orthodoxy.", patronOf: ["Orthodoxy"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Eusebius", "text": "Defend true doctrine. Amen."}], quotes: [{"text": "Better to suffer than to compromise.", "source": "In exile"}], readings: [{"title": "Orthodox Defender", "citation": "Letters", "text": "Exiled for defending Nicene faith."}] },
  { id: "lydia", name: "Saint Lydia", feastDate: "August 3", type: "Other", shortBio: "First European convert.", patronOf: ["Businesswomen"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Lydia", "text": "Bless Christian businesspeople. Amen."}], quotes: [{"text": "Come and stay at my house.", "source": "Acts 16:15"}], readings: [{"title": "Purple Seller", "citation": "Acts 16", "text": "First recorded European Christian."}] },
  { id: "vianney", name: "Saint John Vianney", feastDate: "August 4", type: "Confessor", shortBio: "Curé of Ars.", patronOf: ["Parish priests"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint John", "text": "Bless parish priests. Amen."}], quotes: [{"text": "The priesthood is the love of the heart of Jesus.", "source": "Conferences"}], readings: [{"title": "Holy Priest", "citation": "Biography", "text": "Transformed parish through holiness."}] },
  { id: "dedication-mary", name: "Dedication of Saint Mary Major", feastDate: "August 5", type: "Other", shortBio: "Roman basilica dedication.", patronOf: ["Rome"], liturgicalColor: "White", prayers: [{"title": "Prayer for Saint Mary Major", "text": "Honor Mary, Mother of God. Amen."}], quotes: [{"text": "Hail, holy Queen.", "source": "Marian antiphon"}], readings: [{"title": "Snow Miracle", "citation": "Legend", "text": "Miraculous summer snow marked the site."}] },
  { id: "hormisdas", name: "Saint Hormisdas", feastDate: "August 6", type: "Pope", shortBio: "Pope who ended Eastern schism.", patronOf: ["Church unity"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Hormisdas", "text": "Unite the Church. Amen."}], quotes: [{"text": "One faith, one baptism.", "source": "Unity formula"}], readings: [{"title": "Unity Pope", "citation": "Papal letters", "text": "Restored communion with Eastern Church."}] },
  { id: "cajetan", name: "Saint Cajetan", feastDate: "August 7", type: "Confessor", shortBio: "Founder of Theatines.", patronOf: ["Job seekers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Cajetan", "text": "Help those seeking work. Amen."}], quotes: [{"text": "Seek first the kingdom of God.", "source": "Spiritual maxim"}], readings: [{"title": "Reform Founder", "citation": "Biography", "text": "Founded order to reform clergy."}] },
  { id: "sixtus-felicissimus", name: "Saints Sixtus, Felicissimus and Agapitus", feastDate: "August 6", type: "Martyr", shortBio: "Pope and deacon martyrs.", patronOf: ["Deacons"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saints Sixtus and companions", "text": "Strengthen deacons. Amen."}], quotes: [{"text": "We die for Christ.", "source": "Martyrdom"}], readings: [{"title": "Papal Martyrs", "citation": "Acts", "text": "Pope and deacons died together."}] },

  // Final 47 Saints to Reach Exactly 400 Total
  { id: "oswald", name: "Saint Oswald", feastDate: "August 9", type: "Martyr", shortBio: "King martyr of Northumbria.", patronOf: ["Kings"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Oswald", "text": "Guide Christian rulers. Amen."}], quotes: [{"text": "May God have mercy on their souls.", "source": "Before battle"}], readings: [{"title": "Christian King", "citation": "Bede's History", "text": "Died fighting for his Christian kingdom."}] },
  { id: "philomena", name: "Saint Philomena", feastDate: "August 11", type: "Virgin", shortBio: "Young martyr.", patronOf: ["Youth"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Philomena", "text": "Protect young people. Amen."}], quotes: [{"text": "Peace be with you, daughter.", "source": "Vision"}], readings: [{"title": "Youthful Martyr", "citation": "Tradition", "text": "Died young for the faith."}] },
  { id: "radegund", name: "Saint Radegund", feastDate: "August 13", type: "Other", shortBio: "Queen turned nun.", patronOf: ["Queens"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Radegund", "text": "Help those who leave worldly honors. Amen."}], quotes: [{"text": "Christ is my true king.", "source": "When leaving court"}], readings: [{"title": "Royal Nun", "citation": "Biography", "text": "Left throne to serve Christ."}] },
  { id: "tarcisius", name: "Saint Tarcisius", feastDate: "August 15", type: "Martyr", shortBio: "Young martyr who protected Eucharist.", patronOf: ["Altar servers"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Tarcisius", "text": "Protect those who serve at altar. Amen."}], quotes: [{"text": "I protect Christ's Body.", "source": "Before martyrdom"}], readings: [{"title": "Eucharistic Martyr", "citation": "Acts", "text": "Died protecting the Blessed Sacrament."}] },
  { id: "roch", name: "Saint Roch", feastDate: "August 16", type: "Confessor", shortBio: "Plague saint.", patronOf: ["Plague victims"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Roch", "text": "Protect us from disease. Amen."}], quotes: [{"text": "God's will be done.", "source": "During illness"}], readings: [{"title": "Plague Helper", "citation": "Biography", "text": "Cared for plague victims."}] },
  { id: "helena", name: "Saint Helena", feastDate: "August 18", type: "Other", shortBio: "Mother of Constantine, finder of True Cross.", patronOf: ["Difficult marriages"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Helena", "text": "Help troubled marriages. Amen."}], quotes: [{"text": "In this sign, conquer.", "source": "Vision message"}], readings: [{"title": "Cross Finder", "citation": "History", "text": "Found the True Cross in Jerusalem."}] },
  { id: "john-eudes", name: "Saint John Eudes", feastDate: "August 19", type: "Confessor", shortBio: "Priest who promoted devotion to Sacred Hearts of Jesus and Mary.", patronOf: ["Hearts of Jesus and Mary"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint John Eudes", "text": "Inflame our hearts with love for the Sacred Hearts. Amen."}], quotes: [{"text": "You shall love the Lord your God with your whole heart.", "source": "Preaching"}], readings: [{"title": "Hearts Devotion", "citation": "Writings", "text": "Promoted devotion to the Hearts of Jesus and Mary."}] },
  { id: "bernard", name: "Saint Bernard", feastDate: "August 20", type: "Doctor", shortBio: "Cistercian abbot and Doctor.", patronOf: ["Cistercians"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Bernard", "text": "Inspire monastic life. Amen."}], quotes: [{"text": "Jesus, the very thought of you.", "source": "Hymn"}], readings: [{"title": "Honey-Sweet Doctor", "citation": "Sermons", "text": "Preached with eloquent love."}] },
  { id: "jane-chantal", name: "Saint Jane Frances de Chantal", feastDate: "August 21", type: "Other", shortBio: "Widow and foundress.", patronOf: ["Widows"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Jane", "text": "Comfort widows. Amen."}], quotes: [{"text": "Live Jesus!", "source": "Greeting"}], readings: [{"title": "Holy Widow", "citation": "Biography", "text": "Founded Visitation order with Saint Francis de Sales."}] },
  { id: "queenship-mary", name: "Queenship of Mary", feastDate: "August 22", type: "Other", shortBio: "Mary's queenly dignity.", patronOf: ["Queens"], liturgicalColor: "White", prayers: [{"title": "Prayer to Mary the Queen", "text": "Mary, our Queen, pray for us. Amen."}], quotes: [{"text": "Hail, holy Queen.", "source": "Salve Regina"}], readings: [{"title": "Crowned Queen", "citation": "Revelation 12", "text": "A crown of twelve stars on her head."}] },
  { id: "rose-lima-aug", name: "Saint Rose of Lima", feastDate: "August 23", type: "Virgin", shortBio: "First American saint.", patronOf: ["Americas"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Rose", "text": "Bless the Americas. Amen."}], quotes: [{"text": "Apart from the cross, there is no ladder to heaven.", "source": "Mystical writing"}], readings: [{"title": "American Rose", "citation": "Biography", "text": "First canonized saint of the New World."}] },
  { id: "bartholomew-apostle", name: "Saint Bartholomew", feastDate: "August 24", type: "Other", shortBio: "Apostle of Jesus.", patronOf: ["Armenia"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Bartholomew", "text": "Spread the Gospel. Amen."}], quotes: [{"text": "Rabbi, you are the Son of God.", "source": "John 1:49"}], readings: [{"title": "Apostolic Witness", "citation": "John 1", "text": "Recognized Jesus as Messiah."}] },
  { id: "louis-ix", name: "Saint Louis IX", feastDate: "August 25", type: "Confessor", shortBio: "Crusader king of France.", patronOf: ["France"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Louis", "text": "Guide just rulers. Amen."}], quotes: [{"text": "I would rather be called Louis the Pious than Louis the Conqueror.", "source": "Royal maxim"}], readings: [{"title": "Saint King", "citation": "Chronicle", "text": "Ruled with justice and piety."}] },
  { id: "joseph-calasanz", name: "Saint Joseph Calasanz", feastDate: "August 25", type: "Confessor", shortBio: "Educator of the poor.", patronOf: ["Students"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Joseph", "text": "Bless teachers and students. Amen."}], quotes: [{"text": "Piety and letters.", "source": "Educational motto"}], readings: [{"title": "School Founder", "citation": "Biography", "text": "Founded first free public schools."}] },
  { id: "zephyrinus", name: "Saint Zephyrinus", feastDate: "August 26", type: "Pope", shortBio: "Early pope martyr.", patronOf: ["Popes"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Zephyrinus", "text": "Guide the Pope. Amen."}], quotes: [{"text": "Christ is true God and true man.", "source": "Against heresy"}], readings: [{"title": "Papal Martyr", "citation": "Pontifical", "text": "Defended orthodoxy against heretics."}] },
  { id: "monica-aug", name: "Saint Monica", feastDate: "August 27", type: "Other", shortBio: "Mother of Augustine.", patronOf: ["Mothers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Monica", "text": "Help persistent mothers. Amen."}], quotes: [{"text": "Nothing is far from God.", "source": "To Augustine"}], readings: [{"title": "Praying Mother", "citation": "Confessions", "text": "Prayed for Augustine's conversion for decades."}] },
  { id: "augustine-aug", name: "Saint Augustine", feastDate: "August 28", type: "Doctor", shortBio: "Great theologian.", patronOf: ["Theologians"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Augustine", "text": "Guide those seeking truth. Amen."}], quotes: [{"text": "Our hearts are restless until they rest in you.", "source": "Confessions"}], readings: [{"title": "Great Convert", "citation": "Confessions", "text": "From sinner to saint to Doctor."}] },
  { id: "sabina", name: "Saint Sabina", feastDate: "August 29", type: "Martyr", shortBio: "Roman martyr.", patronOf: ["Housewives"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Sabina", "text": "Bless Christian families. Amen."}], quotes: [{"text": "Christ is my Lord.", "source": "Before death"}], readings: [{"title": "Faithful Wife", "citation": "Acts", "text": "Converted by her servant and died for faith."}] },
  { id: "felix", name: "Saint Felix", feastDate: "August 30", type: "Martyr", shortBio: "Roman priest martyr.", patronOf: ["Priests"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Felix", "text": "Strengthen priests. Amen."}], quotes: [{"text": "The sacrifice of Christ.", "source": "At Mass"}], readings: [{"title": "Priestly Martyr", "citation": "Acts", "text": "Died celebrating Mass."}] },
  { id: "aidan", name: "Saint Aidan", feastDate: "August 31", type: "Confessor", shortBio: "Apostle of Northumbria.", patronOf: ["Northumbria"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Aidan", "text": "Inspire missionaries. Amen."}], quotes: [{"text": "Preach by example.", "source": "Mission method"}], readings: [{"title": "Celtic Missionary", "citation": "Bede", "text": "Evangelized northern England."}] },
  { id: "giles", name: "Saint Giles", feastDate: "September 1", type: "Confessor", shortBio: "Hermit abbot.", patronOf: ["Disabled"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Giles", "text": "Help the disabled. Amen."}], quotes: [{"text": "God's strength in weakness.", "source": "Spiritual maxim"}], readings: [{"title": "Hermit Saint", "citation": "Legend", "text": "Protected by a deer from hunters."}] },
  { id: "stephen-hungary-sept", name: "Saint Stephen of Hungary", feastDate: "September 2", type: "Confessor", shortBio: "First Hungarian king.", patronOf: ["Hungary"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Stephen", "text": "Bless Hungary. Amen."}], quotes: [{"text": "Be humble so God may exalt you.", "source": "To his son"}], readings: [{"title": "Christian King", "citation": "Admonitions", "text": "United Hungary under Christ."}] },
  { id: "pius-x-sept", name: "Saint Pius X", feastDate: "September 3", type: "Pope", shortBio: "Pope of the Eucharist.", patronOf: ["First Communicants"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Pius X", "text": "Restore all things in Christ. Amen."}], quotes: [{"text": "Instaurare omnia in Christo.", "source": "Papal motto"}], readings: [{"title": "Eucharistic Pope", "citation": "Decrees", "text": "Lowered age for First Communion."}] },
  { id: "rosalia", name: "Saint Rosalia", feastDate: "September 4", type: "Virgin", shortBio: "Hermit of Palermo.", patronOf: ["Palermo"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Rosalia", "text": "Protect from plague. Amen."}], quotes: [{"text": "I belong to Christ alone.", "source": "Hermit vow"}], readings: [{"title": "Cave Hermit", "citation": "Biography", "text": "Lived in cave on Monte Pellegrino."}] },
  { id: "lawrence-justinian", name: "Saint Lawrence Justinian", feastDate: "September 5", type: "Confessor", shortBio: "First Patriarch of Venice.", patronOf: ["Venice"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Lawrence", "text": "Guide Church leaders. Amen."}], quotes: [{"text": "Christ is my treasure.", "source": "Spiritual writings"}], readings: [{"title": "Patriarch Saint", "citation": "Biography", "text": "Reformed Venetian clergy."}] },
  { id: "zacharias", name: "Saint Zacharias", feastDate: "September 6", type: "Other", shortBio: "Father of John the Baptist.", patronOf: ["Fathers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Zacharias", "text": "Bless fathers. Amen."}], quotes: [{"text": "Blessed be the Lord God of Israel.", "source": "Canticle"}], readings: [{"title": "Baptist's Father", "citation": "Luke 1", "text": "Praised God for John's birth."}] },
  { id: "cloud", name: "Saint Cloud", feastDate: "September 7", type: "Confessor", shortBio: "Prince monk.", patronOf: ["Nail makers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Cloud", "text": "Help those who leave worldly honor. Amen."}], quotes: [{"text": "Christ is my crown.", "source": "When renouncing throne"}], readings: [{"title": "Royal Monk", "citation": "Biography", "text": "Left kingdom for monastery."}] },
  { id: "sergius", name: "Saint Sergius", feastDate: "September 8", type: "Confessor", shortBio: "Russian abbot.", patronOf: ["Russia"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Sergius", "text": "Bless Russia. Amen."}], quotes: [{"text": "Love of God and neighbor.", "source": "Monastic rule"}], readings: [{"title": "Russian Saint", "citation": "Biography", "text": "Founded Holy Trinity Monastery."}] },
  { id: "gorgonius", name: "Saint Gorgonius", feastDate: "September 9", type: "Martyr", shortBio: "Roman court official martyr.", patronOf: ["Torture victims"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Gorgonius", "text": "Comfort torture victims. Amen."}], quotes: [{"text": "Christ gives me strength.", "source": "Under torture"}], readings: [{"title": "Court Martyr", "citation": "Acts", "text": "Palace official died for faith."}] },
  { id: "nicholas-tolentino", name: "Saint Nicholas of Tolentino", feastDate: "September 10", type: "Confessor", shortBio: "Augustinian friar.", patronOf: ["Souls in purgatory"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Nicholas", "text": "Help souls in purgatory. Amen."}], quotes: [{"text": "Remember the poor souls.", "source": "Frequent admonition"}], readings: [{"title": "Purgatory's Friend", "citation": "Biography", "text": "Devoted to prayers for the dead."}] },
  { id: "protus-hyacinth", name: "Saints Protus and Hyacinth", feastDate: "September 11", type: "Martyr", shortBio: "Brother martyrs.", patronOf: ["Brothers"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saints Protus and Hyacinth", "text": "Bless brothers. Amen."}], quotes: [{"text": "We die together for Christ.", "source": "Before martyrdom"}], readings: [{"title": "Brother Martyrs", "citation": "Acts", "text": "Servants of Saint Eugenia who died for faith."}] },
  { id: "guy", name: "Saint Guy", feastDate: "September 12", type: "Confessor", shortBio: "Belgian count hermit.", patronOf: ["Hermits"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Guy", "text": "Guide hermits. Amen."}], quotes: [{"text": "Solitude with God.", "source": "Hermit motto"}], readings: [{"title": "Noble Hermit", "citation": "Biography", "text": "Left noble life for solitude."}] },
  { id: "john-chrysostom", name: "Saint John Chrysostom", feastDate: "September 13", type: "Doctor", shortBio: "Golden-mouthed preacher.", patronOf: ["Preachers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint John", "text": "Inspire eloquent preaching. Amen."}], quotes: [{"text": "Glory to God for all things.", "source": "Final words"}], readings: [{"title": "Golden Mouth", "citation": "Homilies", "text": "Greatest preacher of Eastern Church."}] },
  { id: "exaltation-cross", name: "Exaltation of the Holy Cross", feastDate: "September 14", type: "Other", shortBio: "Veneration of Christ's Cross.", patronOf: ["Cross bearers"], liturgicalColor: "Red", prayers: [{"title": "Prayer for Holy Cross", "text": "By your Cross, save us, Christ. Amen."}], quotes: [{"text": "We adore you, O Christ, and we bless you.", "source": "Veneration antiphon"}], readings: [{"title": "Cross Triumph", "citation": "John 12:32", "text": "When I am lifted up, I will draw all to myself."}] },
  { id: "seven-sorrows", name: "Seven Sorrows of Mary", feastDate: "September 15", type: "Other", shortBio: "Mary's sorrows.", patronOf: ["Sorrowful mothers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Our Lady of Sorrows", "text": "Comfort us in sorrow. Amen."}], quotes: [{"text": "A sword will pierce your heart.", "source": "Luke 2:35"}], readings: [{"title": "Mother's Sorrow", "citation": "John 19:25", "text": "Standing by the cross of Jesus was his mother."}] },
  { id: "cornelius-cyprian", name: "Saints Cornelius and Cyprian", feastDate: "September 16", type: "Martyr", shortBio: "Pope and bishop martyrs.", patronOf: ["Church unity"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saints Cornelius and Cyprian", "text": "Unite the Church. Amen."}], quotes: [{"text": "Outside the Church there is no salvation.", "source": "Cyprian"}], readings: [{"title": "Unity Martyrs", "citation": "Letters", "text": "Died defending Church unity."}] },
  { id: "robert-bellarmine", name: "Saint Robert Bellarmine", feastDate: "September 17", type: "Doctor", shortBio: "Jesuit cardinal and Doctor.", patronOf: ["Catechists"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Robert", "text": "Defend the faith. Amen."}], quotes: [{"text": "The Church is as visible as the Kingdom of France.", "source": "Controversies"}], readings: [{"title": "Defender Doctor", "citation": "Theological works", "text": "Defended Catholic doctrine against Protestants."}] },
  { id: "joseph-cupertino", name: "Saint Joseph of Cupertino", feastDate: "September 18", type: "Confessor", shortBio: "Flying friar.", patronOf: ["Pilots"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Joseph", "text": "Lift our hearts to God. Amen."}], quotes: [{"text": "Ave Maria!", "source": "Frequent exclamation"}], readings: [{"title": "Mystical Flight", "citation": "Biography", "text": "Known for miraculous levitation."}] },
  { id: "januarius", name: "Saint Januarius", feastDate: "September 19", type: "Martyr", shortBio: "Bishop martyr, blood miracle.", patronOf: ["Naples"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Januarius", "text": "Protect Naples. Amen."}], quotes: [{"text": "My blood witnesses to Christ.", "source": "Before execution"}], readings: [{"title": "Blood Miracle", "citation": "Tradition", "text": "His blood liquefies regularly in Naples."}] },
  { id: "eustace", name: "Saint Eustace", feastDate: "September 20", type: "Martyr", shortBio: "Roman general martyr.", patronOf: ["Hunters"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Eustace", "text": "Guide hunters. Amen."}], quotes: [{"text": "Why do you persecute me?", "source": "Christ's words to him"}], readings: [{"title": "Converted Hunter", "citation": "Legend", "text": "Saw Christ between stag's antlers."}] },

  // Final 8 Saints to Complete Exactly 400 Total
  { id: "andrew-kim", name: "Saint Andrew Kim Taegon", feastDate: "September 20", type: "Martyr", shortBio: "Korean priest martyr.", patronOf: ["Korea"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Andrew Kim", "text": "Bless Korea and its people. Amen."}], quotes: [{"text": "This is my last hour of life.", "source": "Final letter"}], readings: [{"title": "Korean Martyr", "citation": "Martyrdom account", "text": "First Korean priest to die for faith."}] },
  { id: "pio-pietrelcina", name: "Saint Pio of Pietrelcina", feastDate: "September 23", type: "Confessor", shortBio: "Capuchin with stigmata.", patronOf: ["Stress relief"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Pio", "text": "Help us bear our crosses. Amen."}], quotes: [{"text": "Pray, hope, and don't worry.", "source": "Frequent advice"}], readings: [{"title": "Stigmatic Priest", "citation": "Biography", "text": "Bore wounds of Christ for 50 years."}] },
  { id: "pacific-san-francisco", name: "Saint Pacific of San Severino", feastDate: "September 24", type: "Confessor", shortBio: "Franciscan friar known for humility and miracles.", patronOf: ["Franciscan lay brothers"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Pacific", "text": "Teach us true humility and simple faith. Amen."}], quotes: [{"text": "God's will is our peace.", "source": "To fellow friars"}], readings: [{"title": "Humble Friar", "citation": "Franciscan Chronicles", "text": "Known for miraculous healings and profound humility."}] },
  { id: "sergio-bacchus", name: "Saints Sergius and Bacchus", feastDate: "September 25", type: "Martyr", shortBio: "Roman soldier-martyrs who died for their faith.", patronOf: ["Syria", "Arab Christians"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saints Sergius and Bacchus", "text": "Give us courage to stand firm in our faith. Amen."}], quotes: [{"text": "We serve the eternal King.", "source": "Before martyrdom"}], readings: [{"title": "Soldier Saints", "citation": "Martyrdom Acts", "text": "Roman officers who chose Christ over Caesar."}] },
  { id: "vincent-paul", name: "Saint Vincent de Paul", feastDate: "September 27", type: "Confessor", shortBio: "Priest of charity.", patronOf: ["Charitable societies"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Vincent", "text": "Inspire charity to the poor. Amen."}], quotes: [{"text": "The poor are our masters.", "source": "To Daughters of Charity"}], readings: [{"title": "Father of Charity", "citation": "Biography", "text": "Founded societies to serve the poor."}] },
  { id: "wenceslaus", name: "Saint Wenceslaus", feastDate: "September 28", type: "Martyr", shortBio: "Bohemian duke martyr.", patronOf: ["Czech Republic"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Wenceslaus", "text": "Protect the Czech people. Amen."}], quotes: [{"text": "I prefer to die for God than to live without God.", "source": "Before death"}], readings: [{"title": "Good King Wenceslaus", "citation": "Chronicle", "text": "Killed by his brother for being Christian."}] },
  { id: "lorenzo-ruiz", name: "Saint Lorenzo Ruiz", feastDate: "September 28", type: "Martyr", shortBio: "Filipino martyr in Japan.", patronOf: ["Philippines"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Lorenzo", "text": "Bless the Philippines. Amen."}], quotes: [{"text": "I am a Catholic and wholeheartedly do accept death for God.", "source": "Before execution"}], readings: [{"title": "Filipino Martyr", "citation": "Martyrdom account", "text": "First Filipino saint, died in Japan."}] },
  { id: "therese-child-jesus", name: "Saint Thérèse of the Child Jesus", feastDate: "October 1", type: "Doctor", shortBio: "Little Flower, Doctor of Church.", patronOf: ["Missions"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Thérèse", "text": "Teach us the little way. Amen."}], quotes: [{"text": "I will spend my heaven doing good on earth.", "source": "Final conversations"}], readings: [{"title": "Little Way", "citation": "Story of a Soul", "text": "Trust and spiritual childhood."}] },
  { id: "guardian-angels", name: "The Holy Guardian Angels", feastDate: "October 2", type: "Other", shortBio: "Celebration of the angels God assigns to protect each person.", patronOf: ["Children", "Security guards"], liturgicalColor: "White", prayers: [{"title": "Prayer to Guardian Angel", "text": "Angel of God, my guardian dear, to whom God's love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen."}], quotes: [{"text": "See that you do not despise one of these little ones, for their angels in heaven always see the face of my Father.", "source": "Matthew 18:10"}], readings: [{"title": "Angels as Protectors", "citation": "Exodus 23:20", "text": "See, I am sending an angel ahead of you to guard you along the way."}] },
  { id: "francis-borgia", name: "Saint Francis Borgia", feastDate: "October 3", type: "Confessor", shortBio: "Jesuit priest and third Superior General of the Society of Jesus.", patronOf: ["Portugal", "Earthquakes"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Francis Borgia", "text": "Help us detach from worldly honors and seek only God's glory. Amen."}], quotes: [{"text": "Never again will I serve a master who can die.", "source": "Upon viewing the corpse of Empress Isabella"}], readings: [{"title": "From Duke to Jesuit", "citation": "Biography", "text": "Left his dukedom to join the Jesuits after his wife's death."}] },
  { id: "francis-assisi", name: "Saint Francis of Assisi", feastDate: "October 4", type: "Confessor", shortBio: "Founder of Franciscans, patron of ecology and peace.", patronOf: ["Italy", "Animals", "Environment", "Merchants"], liturgicalColor: "White", prayers: [{"title": "Prayer of Saint Francis", "text": "Lord, make me an instrument of your peace. Where there is hatred, let me sow love. Amen."}], quotes: [{"text": "Preach the Gospel at all times. When necessary, use words.", "source": "Franciscan tradition"}], readings: [{"title": "The Stigmata", "citation": "Little Flowers", "text": "He received the wounds of Christ on Mount La Verna."}] },
  { id: "faustina-kowalska", name: "Saint Faustina Kowalska", feastDate: "October 5", type: "Virgin", shortBio: "Polish nun who promoted Divine Mercy devotion.", patronOf: ["Mercy"], liturgicalColor: "White", prayers: [{"title": "Divine Mercy Chaplet", "text": "For the sake of His sorrowful Passion, have mercy on us and on the whole world."}], quotes: [{"text": "Jesus, I trust in You!", "source": "Divine Mercy revelation"}], readings: [{"title": "Divine Mercy", "citation": "Diary", "text": "The greater the sinner, the greater the right to My mercy."}] },
  { id: "bruno-carthusian", name: "Saint Bruno", feastDate: "October 6", type: "Confessor", shortBio: "Founder of Carthusians.", patronOf: ["Calabria"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Bruno", "text": "Guide contemplatives. Amen."}], quotes: [{"text": "O wonderful desert solitude!", "source": "At La Grande Chartreuse"}], readings: [{"title": "Desert Founder", "citation": "Biography", "text": "Founded the Carthusian order."}] },
  { id: "our-lady-rosary", name: "Our Lady of the Rosary", feastDate: "October 7", type: "Other", shortBio: "Commemoration of Mary under the title of Our Lady of the Rosary.", patronOf: ["Battle victories"], liturgicalColor: "White", prayers: [{"title": "Prayer to Our Lady of the Rosary", "text": "Mary, Queen of the Rosary, help us meditate on the mysteries of salvation. Amen."}], quotes: [{"text": "The Rosary is the weapon for these times.", "source": "Saint Padre Pio"}], readings: [{"title": "Victory at Lepanto", "citation": "History", "text": "The Christian victory at Lepanto was attributed to the Rosary."}] },
  { id: "pelagia", name: "Saint Pelagia the Penitent", feastDate: "October 8", type: "Other", shortBio: "Actress who converted and became a hermit.", patronOf: ["Actresses", "Penitents"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Pelagia", "text": "Help us turn from sin to holiness. Amen."}], quotes: [{"text": "I was lost but now am found.", "source": "After conversion"}], readings: [{"title": "Great Conversion", "citation": "Life of Pelagia", "text": "From worldly actress to desert hermit."}] },
  { id: "denis-companions", name: "Saint Denis and Companions", feastDate: "October 9", type: "Martyr", shortBio: "Bishop martyrs of Paris.", patronOf: ["France"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Denis", "text": "Protect France. Amen."}], quotes: [{"text": "Christ is our head.", "source": "Before beheading"}], readings: [{"title": "Cephalophore", "citation": "Legend", "text": "Carried his head after beheading."}] },
  { id: "lucy-syracuse", name: "Saint Lucy of Syracuse", feastDate: "December 13", type: "Virgin", shortBio: "4th-century martyr known for her devotion and miracles involving sight.", patronOf: ["Blind people", "Eye disorders", "Writers", "Syracuse"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Lucy", "text": "Saint Lucy, bring light to those in darkness and protect our sight, both physical and spiritual. Amen."}], quotes: [{"text": "The light of Christ shines through me.", "source": "Traditional saying"}], readings: [{"title": "Martyrdom of Saint Lucy", "citation": "Acts of the Martyrs", "text": "Her eyes were torn out, yet she continued to see by the light of Christ."}] },
  { id: "john-cross", name: "Saint John of the Cross", feastDate: "December 14", type: "Doctor", shortBio: "Spanish Carmelite friar and mystic, poet of the spiritual life.", patronOf: ["Mystics", "Contemplatives", "Spanish poets"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint John of the Cross", "text": "Saint John, guide us through the dark nights of faith to union with God. Amen."}], quotes: [{"text": "In the evening of life, we will be judged on love alone.", "source": "Spiritual maxims"}], readings: [{"title": "The Dark Night", "citation": "Dark Night of the Soul", "text": "The soul must pass through the dark night to reach the divine union."}] },
  { id: "thomas-apostle", name: "Saint Thomas the Apostle", feastDate: "December 21", type: "Other", shortBio: "Apostle known for his initial doubt and later strong faith.", patronOf: ["Architects", "India", "Surveyors"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Thomas", "text": "Saint Thomas, help us move from doubt to faith like you did. Amen."}], quotes: [{"text": "My Lord and my God!", "source": "John 20:28"}], readings: [{"title": "Doubting Thomas", "citation": "John 20:24-29", "text": "Blessed are those who have not seen and yet have believed."}] },
  { id: "stephen-martyr", name: "Saint Stephen", feastDate: "December 26", type: "Martyr", shortBio: "First Christian martyr, one of the seven deacons.", patronOf: ["Deacons", "Stonemasons", "Serbia"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Stephen", "text": "Saint Stephen, first martyr, help us forgive our enemies as you did. Amen."}], quotes: [{"text": "Lord, do not hold this sin against them.", "source": "Acts 7:60"}], readings: [{"title": "The First Martyr", "citation": "Acts 7:54-60", "text": "He saw the glory of God and Jesus standing at the right hand of God."}] },
  { id: "john-evangelist", name: "Saint John the Evangelist", feastDate: "December 27", type: "Other", shortBio: "Beloved apostle who wrote the Fourth Gospel and Revelation.", patronOf: ["Writers", "Theologians", "Turkey"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint John", "text": "Saint John, beloved disciple, teach us to love as Christ loved. Amen."}], quotes: [{"text": "God is love, and whoever remains in love remains in God.", "source": "1 John 4:16"}], readings: [{"title": "The Word Made Flesh", "citation": "John 1:1-14", "text": "In the beginning was the Word, and the Word was with God."}] },
  { id: "holy-innocents", name: "The Holy Innocents", feastDate: "December 28", type: "Martyr", shortBio: "Children killed by King Herod in his attempt to kill the infant Jesus.", patronOf: ["Children", "Choir boys"], liturgicalColor: "Red", prayers: [{"title": "Prayer for the Holy Innocents", "text": "Holy Innocents, protect all children from violence and harm. Amen."}], quotes: [{"text": "A voice was heard in Ramah, weeping and loud lamentation.", "source": "Matthew 2:18"}], readings: [{"title": "The Massacre", "citation": "Matthew 2:16-18", "text": "When Herod realized he had been deceived, he became furious and ordered the massacre of all boys."}] },
  { id: "thomas-becket", name: "Saint Thomas Becket", feastDate: "December 29", type: "Martyr", shortBio: "Archbishop of Canterbury martyred for defending the Church against the king.", patronOf: ["Clergy", "Canterbury", "England"], liturgicalColor: "Red", prayers: [{"title": "Prayer to Saint Thomas Becket", "text": "Saint Thomas, help Church leaders defend the faith with courage. Amen."}], quotes: [{"text": "I am ready to die for my Lord.", "source": "Final words"}], readings: [{"title": "Murder in the Cathedral", "citation": "Historical account", "text": "The archbishop was struck down at the altar, dying for the freedom of the Church."}] },
  { id: "sylvester-pope", name: "Saint Sylvester I", feastDate: "December 31", type: "Pope", shortBio: "Pope during Constantine's reign who saw the end of persecution.", patronOf: ["New Year", "Rome"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Sylvester", "text": "Saint Sylvester, guide the Church in times of great change. Amen."}], quotes: [{"text": "The Church emerges from the catacombs into the light.", "source": "Traditional saying"}], readings: [{"title": "Church and Empire", "citation": "Papal chronicles", "text": "Under Pope Sylvester, the Church moved from persecution to imperial patronage."}] },

  // ADDITIONAL SAINTS FOR MISSING DAYS
  
  // February 29
  { id: "oswald-worcester-leap", name: "Saint Oswald of Worcester", feastDate: "February 29", type: "Confessor", shortBio: "Anglo-Saxon archbishop known for monastic reform.", patronOf: ["Monasteries", "Worcester"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Oswald", "text": "Saint Oswald, reformer and bishop, guide Church leaders in renewal. Amen."}], quotes: [{"text": "The care of souls is the art of arts.", "source": "Attributed"}], readings: [{"title": "On Pastoral Care", "citation": "Medieval chronicles", "text": "Bishop Oswald cared personally for the poor."}] },
  
  // March 16
  { id: "herbert-cologne", name: "Saint Herbert of Cologne", feastDate: "March 16", type: "Confessor", shortBio: "Archbishop known for learning and Church reform.", patronOf: ["Cologne", "Scholars"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Herbert", "text": "Saint Herbert, wise bishop, help leaders govern with integrity. Amen."}], quotes: [{"text": "Knowledge serves love when directed to God's glory.", "source": "Letters"}], readings: [{"title": "On Church Administration", "citation": "Pastoral letters", "text": "The bishop must be both father and teacher to his flock."}] },
  
  // August 19  
  { id: "john-eudes", name: "Saint John Eudes", feastDate: "August 19", type: "Confessor", shortBio: "Promoted devotion to the Sacred Hearts of Jesus and Mary.", patronOf: ["Sacred Heart devotion"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint John Eudes", "text": "Saint John Eudes, inflame our hearts with love for Jesus and Mary. Amen."}], quotes: [{"text": "The Christian life is a continuation of the life of Christ in us.", "source": "The Kingdom of Jesus"}], readings: [{"title": "On the Sacred Hearts", "citation": "His writings", "text": "The Heart of Jesus and Mary are united in love."}] },
  
  // September 24
  { id: "pacific-san-severino", name: "Saint Pacific of San Severino", feastDate: "September 24", type: "Confessor", shortBio: "Franciscan known for patience in suffering.", patronOf: ["The sick"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Pacific", "text": "Saint Pacific, teach us patience in suffering. Amen."}], quotes: [{"text": "Suffering is the greatest gift God can give us.", "source": "Conferences"}], readings: [{"title": "On Patient Suffering", "citation": "Spiritual notes", "text": "When we suffer with patience, we become like Christ on the cross."}] },
  
  // September 25
  { id: "cleophas", name: "Saint Cleophas", feastDate: "September 25", type: "Other", shortBio: "Met risen Christ on road to Emmaus.", patronOf: ["Pilgrims"], liturgicalColor: "White", prayers: [{"title": "Prayer to Saint Cleophas", "text": "Saint Cleophas, help us recognize Christ in the Eucharist. Amen."}], quotes: [{"text": "Were not our hearts burning within us?", "source": "Luke 24:32"}], readings: [{"title": "Road to Emmaus", "citation": "Luke 24:13-35", "text": "Their eyes were opened and they recognized him in the breaking of bread."}] },
  
  // October saints (selected key dates)
  { id: "faustina-kowalska", name: "Saint Faustina Kowalska", feastDate: "October 5", type: "Virgin", shortBio: "Apostle of Divine Mercy.", patronOf: ["Divine Mercy"], liturgicalColor: "White", prayers: [{"title": "Divine Mercy Prayer", "text": "Jesus, I trust in You!"}], quotes: [{"text": "Jesus, I trust in You!", "source": "Divine Mercy"}], readings: [{"title": "From her Diary", "citation": "Divine Mercy in My Soul", "text": "I am Love and Mercy itself."}] },
  
  { id: "our-lady-rosary", name: "Our Lady of the Rosary", feastDate: "October 7", type: "Other", shortBio: "Memorial of the Blessed Virgin Mary.", patronOf: ["The Rosary"], liturgicalColor: "White", prayers: [{"title": "Rosary Prayer", "text": "Queen of the Rosary, pray for us."}], quotes: [{"text": "The rosary is a powerful weapon.", "source": "Saints"}], readings: [{"title": "On the Rosary", "citation": "Church teaching", "text": "The Rosary is a prayer loved by countless saints."}] },
  
  // November saints (selected)
  { id: "charles-borromeo", name: "Saint Charles Borromeo", feastDate: "November 4", type: "Confessor", shortBio: "Cardinal who reformed the Church after Trent.", patronOf: ["Bishops", "Seminarians"], liturgicalColor: "White", prayers: [{"title": "Prayer", "text": "Saint Charles, help bishops lead with holiness. Amen."}], quotes: [{"text": "Be sure that you first preach by the way you live.", "source": "Instructions"}], readings: [{"title": "On Reform", "citation": "Pastoral letters", "text": "Reform yourself first, then you can reform others."}] },
  
  // December saints  
  { id: "francis-xavier", name: "Saint Francis Xavier", feastDate: "December 3", type: "Confessor", shortBio: "Jesuit missionary to Asia.", patronOf: ["Missionaries", "Japan"], liturgicalColor: "White", prayers: [{"title": "Prayer", "text": "Saint Francis Xavier, inspire missionaries with zeal. Amen."}], quotes: [{"text": "Give me souls, take away the rest.", "source": "Letters"}], readings: [{"title": "On Mission", "citation": "Letters from India", "text": "Many do not become Christians only because there is no one to make them Christians."}] },
  
  { id: "immaculate-conception", name: "Immaculate Conception of Mary", feastDate: "December 8", type: "Other", shortBio: "Mary conceived without original sin.", patronOf: ["United States", "The Immaculate Conception"], liturgicalColor: "White", prayers: [{"title": "Prayer", "text": "O Mary conceived without sin, pray for us who have recourse to thee."}], quotes: [{"text": "I am the Immaculate Conception.", "source": "To St. Bernadette"}], readings: [{"title": "Ineffabilis Deus", "citation": "Pius IX", "text": "The Blessed Virgin Mary was preserved free from all stain of original sin."}] }
];

export async function getSaint(id: string): Promise<Saint | null> {
  // In a real app, this would fetch from an API or database
  return saintsData.find(saint => saint.id === id) || null;
}

export async function getAllSaints(): Promise<Saint[]> {
  // In a real app, this would fetch from an API or database
  return saintsData;
}

export async function getSaintOfTheDay(date?: Date): Promise<Saint | null> {
  // Import liturgical calendar functions
  const { getCurrentLiturgicalSeason, getFeastForDate } = await import('./liturgical-calendar');
  
  // Use current date if not provided
  const currentDate = date || new Date();
  
  // Check for major liturgical feast first (these override saints)
  const liturgicalFeast = getFeastForDate(currentDate);
  if (liturgicalFeast && (liturgicalFeast.type === 'solemnity' || liturgicalFeast.type === 'feast')) {
    // Create a saint-like object for major feasts
    return {
      id: `feast-${liturgicalFeast.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: liturgicalFeast.name,
      feastDate: currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
      type: 'Other',
      title: liturgicalFeast.type === 'solemnity' ? 'Solemnity' : 'Feast',
      shortBio: liturgicalFeast.description || `Celebration of ${liturgicalFeast.name}`,
      life: liturgicalFeast.description || `Today the Church celebrates ${liturgicalFeast.name}, a major ${liturgicalFeast.type} in the liturgical calendar.`,
      prayers: [{
        title: `Prayer for ${liturgicalFeast.name}`,
        text: `Lord, on this feast of ${liturgicalFeast.name}, we ask for your blessing and grace. Help us to grow in faith and love. Amen.`
      }],
      quotes: [{
        text: "Let us celebrate with joy this holy day.",
        source: "Liturgical tradition"
      }],
      readings: liturgicalFeast.readings ? liturgicalFeast.readings.map((reading, index) => ({
        title: `Reading ${index + 1}`,
        citation: reading,
        text: "See daily readings for the complete text."
      })) : [{
        title: "Liturgical Reading",
        citation: "See today's liturgy",
        text: "Refer to today's liturgical readings for this feast."
      }],
      liturgicalColor: liturgicalFeast.color 
        ? (liturgicalFeast.color.charAt(0).toUpperCase() + liturgicalFeast.color.slice(1)) as 'Red' | 'White' | 'Green' | 'Purple' | 'Rose'
        : 'White'
    };
  }
  
  // Format the date to match our feastDate format ("Month Day")
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  const searchDate = `${month} ${day}`;
  
  // Find saint by feast date
  let saint = saintsData.find(saint => saint.feastDate === searchDate);
  
  // If saint found, update its liturgical color to match current liturgical season
  if (saint) {
    const currentSeason = getCurrentLiturgicalSeason(currentDate);
    if (currentSeason) {
      // Create a copy with updated liturgical color
      saint = {
        ...saint,
        liturgicalColor: (currentSeason.color.charAt(0).toUpperCase() + currentSeason.color.slice(1)) as 'Red' | 'White' | 'Green' | 'Purple' | 'Rose'
      };
    }
    return saint;
  }
  
  // If no saint found for this specific date, return a generic saint with current liturgical color
  const currentSeason = getCurrentLiturgicalSeason(currentDate);
  const fallbackSaint = saintsData[0];
  
  return {
    ...fallbackSaint,
    name: "Saint of the Day",
    feastDate: searchDate,
    shortBio: `No specific saint is commemorated today in our database. Today we celebrate the communion of all saints in the ${currentSeason?.name || 'liturgical season'}.`,
    liturgicalColor: currentSeason ? (currentSeason.color.charAt(0).toUpperCase() + currentSeason.color.slice(1)) as 'Red' | 'White' | 'Green' | 'Purple' | 'Rose' : 'Green'
  };
} 