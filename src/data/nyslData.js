// Datos completos de NYSL con toda la información de los HTML originales
const nyslData = {
  // EVENTOS - Home page
  events: [
    { date: "August 4", description: "NYSL Fundraiser" },
    { date: "August 16", description: "Season Kick-off: Meet the Teams" },
    { date: "September 1", description: "First Game of the Season (Check Game Schedule for details)" }
  ],

  // ABOUT - Información completa
  about: {
    mission: "To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer, specifically those skills around team cooperation and good sportsmanship.",
    vision: "The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.",
    generalInfo: "The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is ran by a small full-time staff, and relies on the generous volunteer time of parents and previous league members.",
    founded: 1996,
    ages: "4-12 years"
  },

  // CONTACT - Información completa
  contact: {
    email: "nysl@chisoccer.org",
    phone: "(630) 690-8132",
    coordinator: "Michael Randall",
    coordinatorEmail: "michael.randall@chisoccer.org",
    address: "Chicago, IL"
  },

  // UBICACIONES - Todas las escuelas con sus mapas
  locations: {
    katzenmaier: {
      name: "AJ Katzenmaier Elementary",
      address: "24 W. Walton St., Chicago, IL 60610",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0251959124826!2d-87.64023168455779!3d41.91381707921941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610!5e0!3m2!1sen!2sus!4v1498661900848"
    },
    greenbay: {
      name: "Greenbay Elementary",
      address: "1734 N. Orleans St., Chicago, IL 60614",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0251959124826!2d-87.64023168455779!3d41.91381707921941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614!5e0!3m2!1sen!2sus!4v1498666206411"
    },
    yeager: {
      name: "Howard A Yeager Elementary",
      address: "2245 N. Southport Ave., Chicago, IL 60614",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085616!2d-87.66511458455746!3d41.9232645792187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614!5e0!3m2!1sen!2sus!4v1498666257800"
    },
    hart: {
      name: "Marjorie P Hart Elementary",
      address: "2625 N. Orchard St., Chicago, IL 60614",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5936.571390936897!2d-87.6478374194755!3d41.92971193428922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614!5e0!3m2!1sen!2sus!4v1498666301447"
    },
    north: {
      name: "North Elementary",
      address: "1409 N. Ogden Ave., Chicago, IL 60610",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.336427766927!2d-87.648358384558!3d41.90712597921987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af13a8945%3A0xb6ad1ec2b6f379ba!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610!5e0!3m2!1sen!2sus!4v1498666346558"
    },
    south: {
      name: "South Elementary",
      address: "2101 N. Fremont St., Chicago, IL 60614",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.749141506375!2d-87.65354528455761!3d41.91975117921891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614!5e0!3m2!1sen!2sus!4v1498666373464"
    }
  },

  // JUEGOS - Calendario completo de Septiembre y Octubre
  games: {
    // SEPTIEMBRE
    "2021_09_01_1": { date: "9/01", month: "September", time: "9:30 a.m.", team1: "U1", team2: "U4", locationKey: "katzenmaier" },
    "2021_09_01_2": { date: "9/01", month: "September", time: "1:00 p.m.", team1: "U3", team2: "U2", locationKey: "greenbay" },
    "2021_09_08_1": { date: "9/08", month: "September", time: "9:30 a.m.", team1: "U5", team2: "U6", locationKey: "yeager" },
    "2021_09_08_2": { date: "9/08", month: "September", time: "1:00 p.m.", team1: "U6", team2: "U1", locationKey: "hart" },
    "2021_09_15_1": { date: "9/15", month: "September", time: "9:30 a.m.", team1: "U2", team2: "U4", locationKey: "north" },
    "2021_09_15_2": { date: "9/15", month: "September", time: "1:00 p.m.", team1: "U3", team2: "U5", locationKey: "katzenmaier" },
    "2021_09_22_1": { date: "9/22", month: "September", time: "9:30 a.m.", team1: "U1", team2: "U3", locationKey: "south" },
    "2021_09_22_2": { date: "9/22", month: "September", time: "1:00 p.m.", team1: "U2", team2: "U6", locationKey: "yeager" },
    "2021_09_29_1": { date: "9/29", month: "September", time: "9:30 a.m.", team1: "U4", team2: "U5", locationKey: "greenbay" },
    
    // OCTUBRE
    "2021_10_06_1": { date: "10/06", month: "October", time: "9:30 a.m.", team1: "U2", team2: "U5", locationKey: "hart" },
    "2021_10_06_2": { date: "10/06", month: "October", time: "1:00 p.m.", team1: "U1", team2: "U6", locationKey: "south" },
    "2021_10_13_1": { date: "10/13", month: "October", time: "9:30 a.m.", team1: "U3", team2: "U4", locationKey: "yeager" },
    "2021_10_13_2": { date: "10/13", month: "October", time: "1:00 p.m.", team1: "U5", team2: "U1", locationKey: "greenbay" },
    "2021_10_20_1": { date: "10/20", month: "October", time: "9:30 a.m.", team1: "U6", team2: "U3", locationKey: "north" },
    "2021_10_20_2": { date: "10/20", month: "October", time: "1:00 p.m.", team1: "U2", team2: "U4", locationKey: "hart" },
    "2021_10_27_1": { date: "10/27", month: "October", time: "9:30 a.m.", team1: "U3", team2: "U1", locationKey: "katzenmaier" },
    "2021_10_27_2": { date: "10/27", month: "October", time: "1:00 p.m.", team1: "U5", team2: "U6", locationKey: "yeager" }
  },

  // REGLAS - Texto completo de las reglas
  rules: {
    sportsmanship: "The common interest that members of the Association share is to inspire youth to practice the ideals of sportsmanship and fair play. Any player, coach, team, parent, spectator, administrator or referee whose behavior detracts from this purpose is subject to disciplinary action regardless of technical soccer background, expertise, accomplishments or standing.",
    fifaRegulations: [
      "DIMENSIONS. FIFA Law 1 provides for flexible external field dimensions within a given maximum and minimum width and length. These dimensions should be adhered to for all fields used by teams under 12 and older.",
      "COMPETITION FIELDS. Fields used within the competition program must be a minimum of 100 x 60 yards. Leagues, districts or associations participating in the state competition program that are unable to provide a field that meets these minimum requirements must advise the State Competition Board which will assign its Fields Committee to inspect the field and recommend to the Board whether or not a waiver of the minimum dimensions should be granted.",
      "FIELDS USED BY YOUNG AGE GROUPS. U-6 play on a field approximately 20 X 40 yards with no penalty areas. Fields for older age groups should be progressively larger. U-8 plays on a field 40-50 yards in length and 20-30 yards width. U-10 play on a field 70-80 yards in length and 40-50 yards in width.",
      "TEAM BENCH AREAS. The decision for team/spectator placement on the field will be made by the governing body of that team. A team's bench area shall consist of that area at least one (1) yard away from the touchline and extending to twenty yards (20) both ways from the halfway line."
    ],
    equipment: "We will abide by and accept equipment standards as defined by FIFA, USSF and USYSA.",
    substitutions: "Teams may make an unlimited number of substitutions at the times indicated below. A player who has been replaced may re-enter the game as a substitute at a later time. Substitutions may be made: Prior to a throw-in your favor, Prior to a goalkick by either team, After a goal by either team, After an injury, by either team, when the referee stops play, At half time.",
    allPlay: "All-play means that every recreation player on every team shall play at least fifty percent of each game. Coaches in the competition program are encouraged to play their players 50% of each game. A Coach shall be permitted to not play a player 50% of each game under special circumstances, e.g., unexcused absences from practice and/or games, ungentlemanly conduct at practice and/or games, and injuries."
  },

  // ESCUELAS para el formulario de registro
  schools: [
    "AJ Katzenmaier",
    "Marjorie P Hart",
    "Greenbay",
    "North Elementary",
    "Howard A Yeager",
    "South Elementary"
  ],

  // POSICIONES de fútbol
  positions: ["Forward", "Midfield", "Defense", "Goalkeeper"],

  // TALLAS de uniforme
  uniformSizes: {
    youth: ["Youth Small", "Youth Medium", "Youth Large"],
    adult: ["Small", "Medium", "Large", "Extra-Large"]
  }
};

export default nyslData;