const apis = [
  {
    "id": "github-status",
    "name": "GitHub Status",
    "category": "Utility",
    "desc": "Check the real-time status of GitHub services.",
    "url": "https://isitdownstatus.com/api/v1/status/github",
    "params": [],
    "originalUrl": "https://isitdownstatus.com/api/v1/status/github"
  },
  {
    "id": "bitcoin",
    "name": "Binance Bitcoin",
    "category": "Finance",
    "desc": "Get the current Bitcoin Price (BTC-USDT).",
    "url": "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",
    "params": [],
    "originalUrl": "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
  },
  {
    "id": "agify",
    "name": "Agify.io",
    "category": "Utility",
    "desc": "Predict the age of a person based on their name.",
    "url": "https://api.agify.io",
    "params": [
      {
        "name": "name",
        "label": "First Name",
        "default": "meelad"
      }
    ],
    "originalUrl": "https://api.agify.io"
  },
  {
    "id": "genderize",
    "name": "Genderize",
    "category": "Utility",
    "desc": "Predict the gender of a person based on their name.",
    "url": "https://api.genderize.io",
    "params": [
      {
        "name": "name",
        "label": "First Name",
        "default": "luc"
      }
    ],
    "originalUrl": "https://api.genderize.io"
  },
  {
    "id": "nationalize",
    "name": "Nationalize",
    "category": "Utility",
    "desc": "Predict the nationality of a person based on their name.",
    "url": "https://api.nationalize.io",
    "params": [
      {
        "name": "name",
        "label": "First Name",
        "default": "nathaniel"
      }
    ],
    "originalUrl": "https://api.nationalize.io"
  },
  {
    "id": "art-institute",
    "name": "Art Institute Chicago",
    "category": "Data",
    "desc": "Get public data about famous artworks.",
    "url": "https://api.artic.edu/api/v1/artworks/{id}",
    "params": [
      {
        "name": "id",
        "label": "Artwork ID",
        "default": "27992",
        "inPath": true
      }
    ],
    "originalUrl": "https://api.artic.edu/api/v1/artworks/{id}"
  },
  {
    "id": "dogs",
    "name": "Random Dog",
    "category": "Animals",
    "desc": "Fetch a random picture of a dog.",
    "url": "https://dog.ceo/api/breeds/image/random",
    "params": [],
    "originalUrl": "https://dog.ceo/api/breeds/image/random"
  },
  {
    "id": "ipify",
    "name": "IPify",
    "category": "Network",
    "desc": "Get your current public IP address.",
    "url": "https://api.ipify.org?format=json",
    "params": [],
    "originalUrl": "https://api.ipify.org?format=json"
  },
  {
    "id": "ipinfo",
    "name": "IPinfo",
    "category": "Network",
    "desc": "Get geolocation info about a specified IP address.",
    "url": "https://ipinfo.io/{ip}/geo",
    "params": [
      {
        "name": "ip",
        "label": "IP Address",
        "default": "161.185.160.93",
        "inPath": true
      }
    ],
    "originalUrl": "https://ipinfo.io/{ip}/geo"
  },
  {
    "id": "jokes",
    "name": "Official Joke API",
    "category": "Entertainment",
    "desc": "Get random programming or general jokes.",
    "url": "https://official-joke-api.appspot.com/random_joke",
    "params": [],
    "originalUrl": "https://official-joke-api.appspot.com/random_joke"
  },
  {
    "id": "random-user",
    "name": "Random User Generator",
    "category": "Data",
    "desc": "Generate information about a random fake user.",
    "url": "https://randomuser.me/api/",
    "params": [],
    "originalUrl": "https://randomuser.me/api/"
  },
  {
    "id": "universities",
    "name": "Universities List",
    "category": "Education",
    "desc": "Search for universities in a specified country.",
    "url": "http://universities.hipolabs.com/search",
    "params": [
      {
        "name": "country",
        "label": "Country Name",
        "default": "United States"
      }
    ],
    "originalUrl": "http://universities.hipolabs.com/search"
  },
  {
    "id": "zippopotam",
    "name": "Zippopotam (US)",
    "category": "Location",
    "desc": "Get location information based on a US ZIP code.",
    "url": "https://api.zippopotam.us/us/{zip}",
    "params": [
      {
        "name": "zip",
        "label": "US ZIP Code",
        "default": "33162",
        "inPath": true
      }
    ],
    "originalUrl": "https://api.zippopotam.us/us/{zip}"
  },
  {
    "id": "cat-facts",
    "name": "Cat Facts",
    "category": "Animals",
    "desc": "Daily facts about cats.",
    "url": "https://catfact.ninja/fact",
    "params": [],
    "originalUrl": "https://catfact.ninja/fact"
  },
  {
    "id": "random-fox",
    "name": "Random Fox",
    "category": "Animals",
    "desc": "Random pictures of foxes.",
    "url": "https://randomfox.ca/floof/",
    "params": [],
    "originalUrl": "https://randomfox.ca/floof/"
  },
  {
    "id": "pokeapi",
    "name": "PokeAPI",
    "category": "Games",
    "desc": "Get data about a specific Pokemon.",
    "url": "https://pokeapi.co/api/v2/pokemon/{pokemon}",
    "params": [
      {
        "name": "pokemon",
        "label": "Pokemon Name",
        "default": "pikachu",
        "inPath": true
      }
    ],
    "originalUrl": "https://pokeapi.co/api/v2/pokemon/{pokemon}"
  },
  {
    "id": "rick-and-morty",
    "name": "Rick and Morty",
    "category": "Entertainment",
    "desc": "Get info on Rick and Morty characters.",
    "url": "https://rickandmortyapi.com/api/character/{id}",
    "params": [
      {
        "name": "id",
        "label": "Character ID (1-826)",
        "default": "1",
        "inPath": true
      }
    ],
    "originalUrl": "https://rickandmortyapi.com/api/character/{id}"
  },
  {
    "id": "opentdb",
    "name": "Open Trivia DB",
    "category": "Games",
    "desc": "Fetch random trivia questions.",
    "url": "https://opentdb.com/api.php?amount={amount}",
    "params": [
      {
        "name": "amount",
        "label": "Number of Questions",
        "default": "1"
      }
    ],
    "originalUrl": "https://opentdb.com/api.php?amount={amount}"
  },
  {
    "id": "advice-slip",
    "name": "Advice Slip",
    "category": "Utility",
    "desc": "Generate random pieces of advice.",
    "url": "https://api.adviceslip.com/advice",
    "params": [],
    "originalUrl": "https://api.adviceslip.com/advice"
  },
  {
    "id": "worldbank",
    "name": "World Bank",
    "category": "Data",
    "desc": "Get economic and global development data.",
    "url": "https://api.worldbank.org/v2/country/all?format=json",
    "params": [],
    "originalUrl": "https://api.worldbank.org/v2/country/all?format=json"
  },
  {
    "id": "rest-countries",
    "name": "Rest Countries",
    "category": "Data",
    "desc": "Get information about countries via RESTful API.",
    "url": "https://restcountries.com/v3.1/name/{country}",
    "params": [
      {
        "name": "country",
        "label": "Country Name",
        "default": "india",
        "inPath": true
      }
    ],
    "originalUrl": "https://restcountries.com/v3.1/name/{country}"
  },
  {
    "id": "fake-store",
    "name": "Fake Store API",
    "category": "Commerce",
    "desc": "Fake data for e-commerce shopping apps.",
    "url": "https://fakestoreapi.com/products/{id}",
    "params": [
      {
        "name": "id",
        "label": "Product ID (1-20)",
        "default": "1",
        "inPath": true
      }
    ],
    "originalUrl": "https://fakestoreapi.com/products/{id}"
  },
  {
    "id": "jsonplaceholder",
    "name": "JSONPlaceholder",
    "category": "Data",
    "desc": "Fake REST API for testing and prototyping.",
    "url": "https://jsonplaceholder.typicode.com/posts/{id}",
    "params": [
      {
        "name": "id",
        "label": "Post ID (1-100)",
        "default": "1",
        "inPath": true
      }
    ],
    "originalUrl": "https://jsonplaceholder.typicode.com/posts/{id}"
  },
  {
    "id": "themealdb",
    "name": "TheMealDB",
    "category": "Food",
    "desc": "A database of recipes from around the world.",
    "url": "https://www.themealdb.com/api/json/v1/1/random.php",
    "params": [],
    "originalUrl": "https://www.themealdb.com/api/json/v1/1/random.php"
  },
  {
    "id": "spaceflight-news",
    "name": "Spaceflight News",
    "category": "Science",
    "desc": "Get the latest spaceflight news.",
    "url": "https://api.spaceflightnewsapi.net/v4/articles/",
    "params": [
      {
        "name": "limit",
        "label": "Number of articles",
        "default": "1"
      }
    ],
    "originalUrl": "https://api.spaceflightnewsapi.net/v4/articles/"
  },
  {
    "id": "dictionary",
    "name": "Dictionary API",
    "category": "Education",
    "desc": "Free dictionary API for definitions.",
    "url": "https://api.dictionaryapi.dev/api/v2/entries/en/{word}",
    "params": [
      {
        "name": "word",
        "label": "Word to search",
        "default": "hello",
        "inPath": true
      }
    ],
    "originalUrl": "https://api.dictionaryapi.dev/api/v2/entries/en/{word}"
  },
  {
    "id": "evil-insult",
    "name": "Evil Insult",
    "category": "Entertainment",
    "desc": "Generate an evil insult.",
    "url": "https://evilinsult.com/generate_insult.php?lang=en&type=json",
    "params": [],
    "originalUrl": "https://evilinsult.com/generate_insult.php?lang=en&type=json"
  },
  {
    "id": "yesno",
    "name": "Yes/No",
    "category": "Utility",
    "desc": "Returns a random yes or no with a gif.",
    "url": "https://yesno.wtf/api",
    "params": [],
    "originalUrl": "https://yesno.wtf/api"
  },
  {
    "id": "kanye",
    "name": "Kanye Rest",
    "category": "Entertainment",
    "desc": "Random Kanye West quotes.",
    "url": "https://api.kanye.rest/",
    "params": [],
    "originalUrl": "https://api.kanye.rest/"
  },
  {
    "id": "dummyjson",
    "name": "DummyJSON",
    "category": "Data",
    "desc": "Dummy data for your frontend apps.",
    "url": "https://dummyjson.com/products/{id}",
    "params": [
      {
        "name": "id",
        "label": "Product ID (1-100)",
        "default": "1",
        "inPath": true
      }
    ],
    "originalUrl": "https://dummyjson.com/products/{id}"
  },
  {
    "id": "geek-jokes",
    "name": "Geek Jokes",
    "category": "Entertainment",
    "desc": "Fetch a random geeky/programming joke.",
    "url": "https://geek-jokes.sameerkumar.website/api?format=json",
    "params": [],
    "originalUrl": "https://geek-jokes.sameerkumar.website/api?format=json"
  },
  {
    "id": "tvmaze",
    "name": "TVMaze",
    "category": "Entertainment",
    "desc": "Search for TV shows.",
    "url": "https://api.tvmaze.com/search/shows",
    "params": [
      {
        "name": "q",
        "label": "Show Name",
        "default": "batman"
      }
    ],
    "originalUrl": "https://api.tvmaze.com/search/shows"
  },
  {
    "id": "studio-ghibli",
    "name": "Studio Ghibli",
    "category": "Entertainment",
    "desc": "Access the catalog of Studio Ghibli films.",
    "url": "https://ghibliapi.vercel.app/films",
    "params": [],
    "originalUrl": "https://ghibliapi.vercel.app/films"
  },
  {
    "id": "cocktaildb",
    "name": "TheCocktailDB",
    "category": "Food",
    "desc": "An open, crowd-sourced database of drinks and cocktails.",
    "url": "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    "params": [],
    "originalUrl": "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  },
  {
    "id": "exchangerate",
    "name": "ExchangeRate-API",
    "category": "Finance",
    "desc": "Free, basic currency exchange rates.",
    "url": "https://open.er-api.com/v6/latest/USD",
    "params": [],
    "originalUrl": "https://open.er-api.com/v6/latest/USD"
  },
  {
    "id": "harry-potter",
    "name": "Harry Potter API",
    "category": "Entertainment",
    "desc": "Data about characters, spells, and potions.",
    "url": "https://hp-api.onrender.com/api/characters",
    "params": [],
    "originalUrl": "https://hp-api.onrender.com/api/characters"
  },
  {
    "id": "meowfacts",
    "name": "MeowFacts",
    "category": "Animals",
    "desc": "Get random cat facts.",
    "url": "https://meowfacts.herokuapp.com/",
    "params": [],
    "originalUrl": "https://meowfacts.herokuapp.com/"
  },
  {
    "id": "covid19",
    "name": "COVID-19 API",
    "category": "Data",
    "desc": "Worldwide COVID-19 stats.",
    "url": "https://disease.sh/v3/covid-19/all",
    "params": [],
    "originalUrl": "https://disease.sh/v3/covid-19/all"
  },
  {
    "id": "chuck-norris",
    "name": "Chuck Norris",
    "category": "Entertainment",
    "desc": "Hand curated Chuck Norris facts.",
    "url": "https://api.chucknorris.io/jokes/random",
    "params": [],
    "originalUrl": "https://api.chucknorris.io/jokes/random"
  },
  {
    "id": "dev-uuid",
    "name": "UUID Generator",
    "category": "Developer Tools",
    "desc": "Generate a secure v4 UUID.",
    "url": "/api/custom/uuid",
    "params": [],
    "originalUrl": "/api/custom/uuid"
  },
  {
    "id": "dev-hash",
    "name": "Hash Generator",
    "category": "Developer Tools",
    "desc": "Generate MD5 and SHA256 hashes.",
    "url": "/api/custom/hash",
    "params": [
      {
        "name": "text",
        "label": "Text to hash",
        "default": "skilledu"
      }
    ],
    "originalUrl": "/api/custom/hash"
  },
  {
    "id": "dev-b64enc",
    "name": "Base64 Encoder",
    "category": "Developer Tools",
    "desc": "Encode text to Base64 format.",
    "url": "/api/custom/base64-encode",
    "params": [
      {
        "name": "text",
        "label": "Text to encode",
        "default": "Hello World"
      }
    ],
    "originalUrl": "/api/custom/base64-encode"
  },
  {
    "id": "dev-b64dec",
    "name": "Base64 Decoder",
    "category": "Developer Tools",
    "desc": "Decode Base64 to text.",
    "url": "/api/custom/base64-decode",
    "params": [
      {
        "name": "text",
        "label": "Base64 to decode",
        "default": "SGVsbG8gV29ybGQ="
      }
    ],
    "originalUrl": "/api/custom/base64-decode"
  },
  {
    "id": "dev-randnum",
    "name": "Random Number",
    "category": "Utilities",
    "desc": "Generate a random number in a range.",
    "url": "/api/custom/random-number",
    "params": [
      {
        "name": "min",
        "label": "Min",
        "default": "1"
      },
      {
        "name": "max",
        "label": "Max",
        "default": "100"
      }
    ],
    "originalUrl": "/api/custom/random-number"
  },
  {
    "id": "dev-time",
    "name": "Timestamp Converter",
    "category": "Utilities",
    "desc": "Get current unix timestamp and ISO string.",
    "url": "/api/custom/timestamp",
    "params": [],
    "originalUrl": "/api/custom/timestamp"
  },
  {
    "id": "dev-textstat",
    "name": "Text Stats",
    "category": "Utilities",
    "desc": "Count characters, words, and vowels.",
    "url": "/api/custom/text-stats",
    "params": [
      {
        "name": "text",
        "label": "Text to analyze",
        "default": "Skilled.u empowers developers."
      }
    ],
    "originalUrl": "/api/custom/text-stats"
  },
  {
    "id": "dev-dice",
    "name": "Dice Roll",
    "category": "Entertainment",
    "desc": "Simulate rolling a dice.",
    "url": "/api/custom/dice-roll",
    "params": [
      {
        "name": "sides",
        "label": "Number of sides",
        "default": "6"
      }
    ],
    "originalUrl": "/api/custom/dice-roll"
  },
  {
    "id": "dev-coin",
    "name": "Coin Flip",
    "category": "Entertainment",
    "desc": "Simulate flipping a coin.",
    "url": "/api/custom/coin-flip",
    "params": [],
    "originalUrl": "/api/custom/coin-flip"
  },
  {
    "id": "dev-pass",
    "name": "Password Generator",
    "category": "Developer Tools",
    "desc": "Generate a secure random password.",
    "url": "/api/custom/password-gen",
    "params": [
      {
        "name": "length",
        "label": "Length",
        "default": "12"
      }
    ],
    "originalUrl": "/api/custom/password-gen"
  },
  {
    "id": "dev-rev",
    "name": "Reverse String",
    "category": "Utilities",
    "desc": "Reverse any given text.",
    "url": "/api/custom/reverse-string",
    "params": [
      {
        "name": "text",
        "label": "Text to reverse",
        "default": "Skilled.u"
      }
    ],
    "originalUrl": "/api/custom/reverse-string"
  },
  {
    "id": "dev-qrcode",
    "name": "QR Code Generator",
    "category": "Utilities",
    "desc": "Generate a Base64 QR code image from text.",
    "url": "/api/custom/qr-code",
    "params": [
      {
        "name": "text",
        "label": "Data to encode",
        "default": "https://skilledu.in"
      }
    ],
    "originalUrl": "/api/custom/qr-code"
  },
  {
    "id": "gen-add",
    "name": "Addition",
    "category": "Math",
    "desc": "Adds two numbers.",
    "url": "/api/generated/add",
    "originalUrl": "/api/generated/add",
    "params": [
      {
        "name": "a",
        "label": "A",
        "default": "5"
      },
      {
        "name": "b",
        "label": "B",
        "default": "10"
      }
    ]
  },
  {
    "id": "gen-sub",
    "name": "Subtraction",
    "category": "Math",
    "desc": "Subtracts two numbers.",
    "url": "/api/generated/sub",
    "originalUrl": "/api/generated/sub",
    "params": [
      {
        "name": "a",
        "label": "A",
        "default": "10"
      },
      {
        "name": "b",
        "label": "B",
        "default": "5"
      }
    ]
  },
  {
    "id": "gen-mul",
    "name": "Multiplication",
    "category": "Math",
    "desc": "Multiplies two numbers.",
    "url": "/api/generated/mul",
    "originalUrl": "/api/generated/mul",
    "params": [
      {
        "name": "a",
        "label": "A",
        "default": "5"
      },
      {
        "name": "b",
        "label": "B",
        "default": "10"
      }
    ]
  },
  {
    "id": "gen-div",
    "name": "Division",
    "category": "Math",
    "desc": "Divides two numbers.",
    "url": "/api/generated/div",
    "originalUrl": "/api/generated/div",
    "params": [
      {
        "name": "a",
        "label": "A",
        "default": "10"
      },
      {
        "name": "b",
        "label": "B",
        "default": "2"
      }
    ]
  },
  {
    "id": "gen-pow",
    "name": "Power",
    "category": "Math",
    "desc": "Base to the exponent power.",
    "url": "/api/generated/pow",
    "originalUrl": "/api/generated/pow",
    "params": [
      {
        "name": "base",
        "label": "Base",
        "default": "2"
      },
      {
        "name": "exp",
        "label": "Exponent",
        "default": "3"
      }
    ]
  },
  {
    "id": "gen-sqrt",
    "name": "Square Root",
    "category": "Math",
    "desc": "Square root of a number.",
    "url": "/api/generated/sqrt",
    "originalUrl": "/api/generated/sqrt",
    "params": [
      {
        "name": "n",
        "label": "Number",
        "default": "16"
      }
    ]
  },
  {
    "id": "gen-abs",
    "name": "Absolute Value",
    "category": "Math",
    "desc": "Absolute value.",
    "url": "/api/generated/abs",
    "originalUrl": "/api/generated/abs",
    "params": [
      {
        "name": "n",
        "label": "Number",
        "default": "-5"
      }
    ]
  },
  {
    "id": "gen-ceil",
    "name": "Ceiling",
    "category": "Math",
    "desc": "Round up.",
    "url": "/api/generated/ceil",
    "originalUrl": "/api/generated/ceil",
    "params": [
      {
        "name": "n",
        "label": "Number",
        "default": "4.2"
      }
    ]
  },
  {
    "id": "gen-floor",
    "name": "Floor",
    "category": "Math",
    "desc": "Round down.",
    "url": "/api/generated/floor",
    "originalUrl": "/api/generated/floor",
    "params": [
      {
        "name": "n",
        "label": "Number",
        "default": "4.8"
      }
    ]
  },
  {
    "id": "gen-round",
    "name": "Round",
    "category": "Math",
    "desc": "Round to nearest integer.",
    "url": "/api/generated/round",
    "originalUrl": "/api/generated/round",
    "params": [
      {
        "name": "n",
        "label": "Number",
        "default": "4.5"
      }
    ]
  },
  {
    "id": "gen-uppercase",
    "name": "Uppercase",
    "category": "String",
    "desc": "Convert to uppercase.",
    "url": "/api/generated/uppercase",
    "originalUrl": "/api/generated/uppercase",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "hello"
      }
    ]
  },
  {
    "id": "gen-lowercase",
    "name": "Lowercase",
    "category": "String",
    "desc": "Convert to lowercase.",
    "url": "/api/generated/lowercase",
    "originalUrl": "/api/generated/lowercase",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "HELLO"
      }
    ]
  },
  {
    "id": "gen-length",
    "name": "String Length",
    "category": "String",
    "desc": "Get length.",
    "url": "/api/generated/length",
    "originalUrl": "/api/generated/length",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "hello"
      }
    ]
  },
  {
    "id": "gen-trim",
    "name": "Trim Whitespace",
    "category": "String",
    "desc": "Remove whitespace.",
    "url": "/api/generated/trim",
    "originalUrl": "/api/generated/trim",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "  hello  "
      }
    ]
  },
  {
    "id": "gen-repeat",
    "name": "Repeat String",
    "category": "String",
    "desc": "Repeat string.",
    "url": "/api/generated/repeat",
    "originalUrl": "/api/generated/repeat",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "ha"
      },
      {
        "name": "n",
        "label": "Times",
        "default": "3"
      }
    ]
  },
  {
    "id": "gen-slugify",
    "name": "URL Slugify",
    "category": "String",
    "desc": "Convert to URL slug.",
    "url": "/api/generated/slugify",
    "originalUrl": "/api/generated/slugify",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "Hello World API"
      }
    ]
  },
  {
    "id": "gen-char-at",
    "name": "Character At",
    "category": "String",
    "desc": "Get char at index.",
    "url": "/api/generated/char-at",
    "originalUrl": "/api/generated/char-at",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "hello"
      },
      {
        "name": "index",
        "label": "Index",
        "default": "1"
      }
    ]
  },
  {
    "id": "gen-starts-with",
    "name": "Starts With",
    "category": "String",
    "desc": "Check prefix.",
    "url": "/api/generated/starts-with",
    "originalUrl": "/api/generated/starts-with",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "hello world"
      },
      {
        "name": "prefix",
        "label": "Prefix",
        "default": "hello"
      }
    ]
  },
  {
    "id": "gen-ends-with",
    "name": "Ends With",
    "category": "String",
    "desc": "Check suffix.",
    "url": "/api/generated/ends-with",
    "originalUrl": "/api/generated/ends-with",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "hello world"
      },
      {
        "name": "suffix",
        "label": "Suffix",
        "default": "world"
      }
    ]
  },
  {
    "id": "gen-count-spaces",
    "name": "Count Spaces",
    "category": "String",
    "desc": "Count spaces in string.",
    "url": "/api/generated/count-spaces",
    "originalUrl": "/api/generated/count-spaces",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "hello world out there"
      }
    ]
  },
  {
    "id": "gen-url-encode",
    "name": "URL Encode",
    "category": "Formatting",
    "desc": "Encode URL components.",
    "url": "/api/generated/url-encode",
    "originalUrl": "/api/generated/url-encode",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "hello world!"
      }
    ]
  },
  {
    "id": "gen-url-decode",
    "name": "URL Decode",
    "category": "Formatting",
    "desc": "Decode URL components.",
    "url": "/api/generated/url-decode",
    "originalUrl": "/api/generated/url-decode",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "hello%20world%21"
      }
    ]
  },
  {
    "id": "gen-bin-encode",
    "name": "Binary Encode",
    "category": "Formatting",
    "desc": "Text to Binary.",
    "url": "/api/generated/bin-encode",
    "originalUrl": "/api/generated/bin-encode",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "hello"
      }
    ]
  },
  {
    "id": "gen-bin-decode",
    "name": "Binary Decode",
    "category": "Formatting",
    "desc": "Binary to Text.",
    "url": "/api/generated/bin-decode",
    "originalUrl": "/api/generated/bin-decode",
    "params": [
      {
        "name": "text",
        "label": "Binary",
        "default": "01101000 01100101"
      }
    ]
  },
  {
    "id": "gen-hex-encode",
    "name": "Hex Encode",
    "category": "Formatting",
    "desc": "Text to Hex.",
    "url": "/api/generated/hex-encode",
    "originalUrl": "/api/generated/hex-encode",
    "params": [
      {
        "name": "text",
        "label": "Text",
        "default": "hello"
      }
    ]
  },
  {
    "id": "gen-hex-decode",
    "name": "Hex Decode",
    "category": "Formatting",
    "desc": "Hex to Text.",
    "url": "/api/generated/hex-decode",
    "originalUrl": "/api/generated/hex-decode",
    "params": [
      {
        "name": "text",
        "label": "Hex",
        "default": "68656c6c6f"
      }
    ]
  },
  {
    "id": "gen-boolean-toggle",
    "name": "Toggle Boolean",
    "category": "Formatting",
    "desc": "Toggle true/false.",
    "url": "/api/generated/boolean-toggle",
    "originalUrl": "/api/generated/boolean-toggle",
    "params": [
      {
        "name": "val",
        "label": "Value",
        "default": "true"
      }
    ]
  },
  {
    "id": "gen-is-numeric",
    "name": "Is Numeric",
    "category": "Formatting",
    "desc": "Check if numeric.",
    "url": "/api/generated/is-numeric",
    "originalUrl": "/api/generated/is-numeric",
    "params": [
      {
        "name": "val",
        "label": "Value",
        "default": "123.45"
      }
    ]
  },
  {
    "id": "gen-is-email",
    "name": "Is Email",
    "category": "Formatting",
    "desc": "Regex email check.",
    "url": "/api/generated/is-email",
    "originalUrl": "/api/generated/is-email",
    "params": [
      {
        "name": "val",
        "label": "Email",
        "default": "test@skilledu.in"
      }
    ]
  },
  {
    "id": "gen-is-url",
    "name": "Is URL",
    "category": "Formatting",
    "desc": "Regex URL check.",
    "url": "/api/generated/is-url",
    "originalUrl": "/api/generated/is-url",
    "params": [
      {
        "name": "val",
        "label": "URL",
        "default": "https://skilledu.in"
      }
    ]
  },
  {
    "id": "gen-random-color",
    "name": "Random Color",
    "category": "Generators",
    "desc": "Generate HEX color.",
    "url": "/api/generated/random-color",
    "originalUrl": "/api/generated/random-color",
    "params": []
  },
  {
    "id": "gen-random-bool",
    "name": "Random Boolean",
    "category": "Generators",
    "desc": "True or False.",
    "url": "/api/generated/random-bool",
    "originalUrl": "/api/generated/random-bool",
    "params": []
  },
  {
    "id": "gen-random-letter",
    "name": "Random Letter",
    "category": "Generators",
    "desc": "A-Z character.",
    "url": "/api/generated/random-letter",
    "originalUrl": "/api/generated/random-letter",
    "params": []
  },
  {
    "id": "gen-lorem",
    "name": "Lorem Ipsum",
    "category": "Generators",
    "desc": "Mock text generator.",
    "url": "/api/generated/lorem",
    "originalUrl": "/api/generated/lorem",
    "params": [
      {
        "name": "words",
        "label": "Word Count",
        "default": "10"
      }
    ]
  },
  {
    "id": "gen-range",
    "name": "Number Range",
    "category": "Generators",
    "desc": "Array of numbers.",
    "url": "/api/generated/range",
    "originalUrl": "/api/generated/range",
    "params": [
      {
        "name": "start",
        "label": "Start",
        "default": "1"
      },
      {
        "name": "end",
        "label": "End",
        "default": "10"
      }
    ]
  },
  {
    "id": "gen-fibonacci",
    "name": "Fibonacci Sequence",
    "category": "Generators",
    "desc": "Generate fibonacci.",
    "url": "/api/generated/fibonacci",
    "originalUrl": "/api/generated/fibonacci",
    "params": [
      {
        "name": "n",
        "label": "Length",
        "default": "10"
      }
    ]
  },
  {
    "id": "gen-random-date",
    "name": "Random Date",
    "category": "Generators",
    "desc": "Date in past year.",
    "url": "/api/generated/random-date",
    "originalUrl": "/api/generated/random-date",
    "params": []
  },
  {
    "id": "gen-random-time",
    "name": "Random Time",
    "category": "Generators",
    "desc": "HH:MM:SS format.",
    "url": "/api/generated/random-time",
    "originalUrl": "/api/generated/random-time",
    "params": []
  },
  {
    "id": "gen-random-ip",
    "name": "Random IP",
    "category": "Generators",
    "desc": "IPv4 Address.",
    "url": "/api/generated/random-ip",
    "originalUrl": "/api/generated/random-ip",
    "params": []
  },
  {
    "id": "gen-random-mac",
    "name": "Random MAC Address",
    "category": "Generators",
    "desc": "MAC format.",
    "url": "/api/generated/random-mac",
    "originalUrl": "/api/generated/random-mac",
    "params": []
  },
  {
    "id": "gen-mock-user",
    "name": "Mock User",
    "category": "Mock Data",
    "desc": "Fake user profile.",
    "url": "/api/generated/mock-user",
    "originalUrl": "/api/generated/mock-user",
    "params": []
  },
  {
    "id": "gen-mock-product",
    "name": "Mock Product",
    "category": "Mock Data",
    "desc": "Fake ecommerce product.",
    "url": "/api/generated/mock-product",
    "originalUrl": "/api/generated/mock-product",
    "params": []
  },
  {
    "id": "gen-mock-post",
    "name": "Mock Blog Post",
    "category": "Mock Data",
    "desc": "Fake blog article.",
    "url": "/api/generated/mock-post",
    "originalUrl": "/api/generated/mock-post",
    "params": []
  },
  {
    "id": "gen-mock-comment",
    "name": "Mock Comment",
    "category": "Mock Data",
    "desc": "Fake comment.",
    "url": "/api/generated/mock-comment",
    "originalUrl": "/api/generated/mock-comment",
    "params": []
  },
  {
    "id": "gen-mock-address",
    "name": "Mock Address",
    "category": "Mock Data",
    "desc": "Fake physical address.",
    "url": "/api/generated/mock-address",
    "originalUrl": "/api/generated/mock-address",
    "params": []
  },
  {
    "id": "gen-mock-card",
    "name": "Mock Credit Card",
    "category": "Mock Data",
    "desc": "Fake card (masked).",
    "url": "/api/generated/mock-card",
    "originalUrl": "/api/generated/mock-card",
    "params": []
  },
  {
    "id": "gen-mock-company",
    "name": "Mock Company",
    "category": "Mock Data",
    "desc": "Fake business.",
    "url": "/api/generated/mock-company",
    "originalUrl": "/api/generated/mock-company",
    "params": []
  },
  {
    "id": "gen-mock-vehicle",
    "name": "Mock Vehicle",
    "category": "Mock Data",
    "desc": "Fake car data.",
    "url": "/api/generated/mock-vehicle",
    "originalUrl": "/api/generated/mock-vehicle",
    "params": []
  },
  {
    "id": "gen-mock-book",
    "name": "Mock Book",
    "category": "Mock Data",
    "desc": "Fake book data.",
    "url": "/api/generated/mock-book",
    "originalUrl": "/api/generated/mock-book",
    "params": []
  },
  {
    "id": "gen-mock-movie",
    "name": "Mock Movie",
    "category": "Mock Data",
    "desc": "Fake movie data.",
    "url": "/api/generated/mock-movie",
    "originalUrl": "/api/generated/mock-movie",
    "params": []
  }
];

module.exports = apis;