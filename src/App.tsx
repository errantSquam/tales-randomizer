import { useState } from 'react'
import './App.css'
import confetti from '@hiseb/confetti'

function App() {
  const [character, setRandomCharacter] = useState({
    character: "Dymlos Timber",
    game: "DESTINY"
  })
  const [confettiToggle, setConfettiToggle] = useState(true)

  const gameList = ['PHANTASIA', 'DESTINY', 'ETERNIA', 'DESTINY 2', 'SYMPHONIA',
    'REBIRTH', 'LEGENDIA', 'THE ABYSS', 'THE TEMPEST', 'INNOCENCE', 'SYMPHONIA 2',
    'VESPERIA', 'HEARTS', 'GRACES', 'XILLIA', 'XILLIA 2', 'ZESTIRIA', 'BERSERIA',
    'ARISE']


  const [games, setGames] = useState(gameList)

  const getRandomCharacter = () => {

    if (games.length === 0) {
      return character
    }
    const randomGame: string = games[Math.floor(Math.random() * games.length)]

    const randomCharacterList = characterList[randomGame as keyof typeof characterList]
    const randomCharacter = randomCharacterList[Math.floor(Math.random() * randomCharacterList.length)]
    return { character: randomCharacter, game: randomGame }

  }

  return (
    <div className="min-h-100vh min-w-screen text-white" style={{ backgroundColor: "#242424" }}>
      <div className="flex flex-col h-screen py-10 justify-start items-center gap-y-2"
        style={{ backgroundColor: "#242424" }}>

        <div>
          <h2 className="text-3xl">Tales Character Randomizer</h2>
          <div className="text-white/50">May contain untagged spoilers!</div>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-xl py-10 bg-black/50">
            {character.character}
            <p className="text-lg italic text-white/50">from Tales of {toTitleCase(character.game).replace("The", "the")}</p>
          </p>

          <div onClick={(e) => {
            setRandomCharacter(getRandomCharacter())
            if (confettiToggle && games.length !== 0) {
              confetti({ position: { x: e.clientX, y: e.clientY }, fade: true })
            }
          }}
            className={
              games.length === 0 ? `bg-gray border-gray/50 border-1 rounded-xl p-4 
          text-white/70` : `bg-black border-white/50 border-1 rounded-xl p-4 
          text-white/70 hover:text-white hover:bg-slate-800 hover:border-white 
          transition cursor-pointer select-none`
            }>
            Random Character!
          </div>

          <div className="flex flex-col p-4 border border-white/50 rounded">
            <span> Filter</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4">
              {gameList.map((game) => {
                return <div className="flex flex-row space-x-2">

                  <input type="checkbox" name={game}
                    checked={games.includes(game)}
                    onChange={((e) => {
                      console.log(e.target.checked)
                      if (e.target.checked === false) {
                        if (games.includes(game)) {
                          const tempList = games.filter((x) => x != game)
                          setGames(tempList)
                        }
                      } else {
                        const tempList = [...games, game]
                        setGames(tempList)
                      }
                    })} />
                  <span>{toTitleCase(game.replace("THE ", ""))}</span>
                </div>
              })}
            </div>

            <div className="flex flex-row w-full justify-center space-x-2 mt-2">
              <div onClick={() => setGames(gameList)}
                className="bg-black border-white/50 border-1 rounded-xl px-2 
          text-white/70 hover:text-white hover:bg-slate-800 hover:border-white 
          transition cursor-pointer">
                Select All
              </div>
              <div onClick={() => setGames([])}
                className="bg-black border-white/50 border-1 rounded-xl px-2 
          text-white/70 hover:text-white hover:bg-slate-800 hover:border-white 
          transition cursor-pointer">
                Select None
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-2 text-white/50">
          <img src={"dymlosstare.png"} alt="Dymlos Stare" className="w-20" />
          {
            confettiToggle ?
              <div>Hate fun like Dymlos?<br />
                <span className="underline cursor-pointer" onClick={() => setConfettiToggle(false)}>
                  Turn off the confetti.
                </span></div>
              :
              <div>
                <span className="underline cursor-pointer" onClick={() => setConfettiToggle(true)}>
                  Turn on the confetti.
                </span>
              </div>
          }
        </div>

        <div className="text-sm text-white/50 mt-10 italic">Coded by <a href="https://heckingsne.cc" className="underline">ErrantSquam</a>.</div>

      </div>
    </div>
  )
}
function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

const characterList = {
  "PHANTASIA": [
    "Cress Albane / Cless Alvein",
    "Mint Adenade",
    "Chester Burklight",
    "Klarth F. Lester",
    "Arche Klein",
    "Suzu Fujibayashi",
    "Rondoline E. Effenberg",
    "Dhaos",
    "Ami Burklight",
    "Edward D. Morrison"
  ],
  "DESTINY": [
    "Stahn Aileron",
    "Rutee Katrea",
    "Leon Magnus",
    "Philia Felice",
    "Woodrow Kelvin",
    "Mary Argent",
    "Chelsea Tone",
    "Johnny Shiden",
    "Mighty Kongman",
    "Lilith Aileron",
    "Greybum Bernhardt",
    "Miktran",
    "Hugo Gilchrist",
    "Baruk Songram",
    "Ilene Rembrandt",
    "Shane Rembrandt",
    "Batista Diego",
    "Tiberius Terazzi",
    "Dalis Vincent",
    "Reynolds",
    "Dymlos Timber",
    "Atwight Ecks",
    "Pierre de Chaltier",
    "Laville Clemente",
    "Igtenos Minarde",
    "Karell Berselius",
    "Mercurius Littler",
    "Marian Fustel"
  ],
  "ETERNIA": [
    "Reid Hershel",
    "Farah Oersted",
    "Meredy",
    "Quickie",
    "Keele Zeibel",
    "Rassius Luine",
    "Chat",
    "Max",
    "Shizel",
    "Nereid",
    "Hyades",
    "Birial",
    "Undine",
    "Sylph",
    "Efreet",
    "Rem",
    "Gnome",
    "Volt",
    "Celsius",
    "Shadow",
    "Maxwell",
    "Sekundes",
    "Regulus",
    "Roen Lamoa",
    "Arende",
    "Claudio Zosimos",
    "Galenos",
    "Ayla",
    "Transon Balir",
    "Aifread",
    "Seyfert"
  ],
  "DESTINY 2": [
    "Kyle Dunamis",
    "Reala",
    "Loni Dunamis",
    "Judas",
    "Nanaly Fletch",
    "Harold Berselius",
    "Barbatos Goetia",
    "Elrane",
    "Fortuna",
    "Lymle Aileron"
  ],
  "SYMPHONIA": [
    "Lloyd Irving",
    "Colette Brunel",
    "Genis Sage",
    "Raine Sage",
    "Kratos Aurion",
    "Sheena Fujibayashi",
    "Zelos Wilder",
    "Presea Combatir",
    "Regal Bryant",
    "Yggdrasill",
    "Magnius",
    "Kvar",
    "Rodyle",
    "Forcystus",
    "Pronyma",
    "Remiel",
    "Yuan Ka-Fai",
    "Botta",
    "Martel Yggdrasill",
    "Dirk",
    "Noishe",
    "Tabatha",
    "Alicia Combatir",
    "Seles Wilder"
  ],
  "REBIRTH": [
    "Veigue Lungberg",
    "Mao",
    "Eugene Gallardo",
    "Annie Barrs",
    "Tytree Crowe",
    "Hilda Rhambling",
    "Claire Bennett",
    "Zapie",
    "Agarte Lindblum",
    "Geyorkias",
    "Zilva Madigan",
    "Yuris",
    "Saleh",
    "Tohma",
    "Walto",
    "Militsa",
    "Donnell",
    "Milhaust Selkirk",
    "Geyorkias",
    "Eephon",
    "Fenia",
    "Wontiga",
    "Shaorune",
    "Gilione",
    "Randgriz",
    "Popura"
  ],
  "LEGENDIA": [
    "Senel Coolidge",
    "Shirley Fennes",
    "Will Raynard",
    "Chloe Valens",
    "Norma Beatty",
    "Moses Sandor",
    "Jay",
    "Grune",
    "Vaclav Bolud",
    "Walter Delques",
    "Maurits Welnes",
    "Nerifes",
    "Solon",
    "Schwartz",
    "Melanie",
    "Cashel",
    "Stingle",
    "Ed Curtis",
    "Isabella Robbins",
    "Madame Musette",
    "Harriet Campbell",
    "Csaba Rajk",
    "Giet",
    "Quppo",
    "Pippo",
    "Poppo",
    "Fenimore Xelhes",
    "Stella Telmes",
    "Arnold Alcott",
    "Elsa Alcott",
    "Amelia Campbell",
    "Thyra Welzes",
    "Mimi Baker"
  ],
  "THE ABYSS": [
    "Luke fon Fabre",
    "Tear Grants",
    "Jade Curtiss",
    "Anise Tatlin",
    "Guy Cecil",
    "Natalia L.K. Lanvaldear",
    "Asch",
    "Mieu",
    "Ion",
    "Van Grants",
    "Arietta",
    "Largo",
    "Dist",
    "Legretta",
    "Sync",
    "Mohs",
    "Gelda Nebilim (replica)",
    "Lorelei",
    "Noir",
    "York",
    "Urushi",
    "Florian",
    "Crimson Herzog fon Fabre (Duke Fabre)",
    "Susanne fon Fabre",
    "Noelle",
    "Ginji",
    "Peony Upala Malkuth IX",
    "Aslan Frings",
    "Nephry Osborne"
  ],
  "THE TEMPEST": [
    "Caius Qualls",
    "Rubia Natwick",
    "Tilkis Barone",
    "Forest Ledoyen",
    "Arria Ekberg",
    "Albert Mueller",
    "Lukius Bridges",
    "Rommy",
    "Vincent Bridges",
    "Areulla VIII"
  ],
  "INNOCENCE": [
    "Ruca Milda",
    "Illia Animi",
    "Coda",
    "Spada Belforma",
    "Ange Serena",
    "Ricardo Soldato",
    "Hermana Larmo",
    "QQ Selezneva",
    "Kongwai Tao",
    "Mathias",
    "Thitose Cxarma",
    "Sian Tenebro",
    "Gardle",
    "Hasta Ekstermi",
    "Albert Grandeioza",
    "Oswald fan Kuruela",
    "Asura",
    "Inanna",
    "Durandal",
    "Orifiel",
    "Hypnos",
    "Vritra",
    "Sakuya",
    "Thanatos",
    "Gae Bolg",
    "Cerberus",
    "Himmel"
  ],
  "SYMPHONIA 2": [
    "Emil Castagnier",
    "Marta Lualdi",
    "Tenebrae",
    "Richter Abend",
    "Aqua",
    "Alice",
    "Decus"
  ],
  "VESPERIA": [
    "Yuri Lowell",
    "Estelle",
    "Flynn Scifo",
    "Repede",
    "Karol Capel",
    "Rita Mordio",
    "Raven",
    "Judith",
    "Patty Fleur",
    "Duke Pantarei",
    "Barbos",
    "Yeager",
    "Alexei Dinoia",
    "Schwann Oltorain",
    "Zagi",
    "Clint",
    "Tison",
    "Nan",
    "Gauche",
    "Droite",
    "Leblanc",
    "Adecor",
    "Boccos",
    "Alexander von Cumore",
    "Ragou",
    "Mary Kaufman",
    "Ioder Argyros Heurassein",
    "Sodia",
    "Witcher"
  ],
  "HEARTS": [
    "Shing Meteoryte",
    "Kohaku Hearts",
    "Hisui Hearts",
    "Ines Lorenz",
    "Beryl Benito",
    "Kunzite",
    "Chalcedony Arkham",
    "Lithia Spodume",
    "Gall Gruner",
    "Incarose",
    "Creed Graphyte",
    "Lisia Cattleya",
    "Kornerupine",
    "Grossular",
    "Geo Striegov",
    "Isaac Silver",
    "Peridot Hamilton",
    "Byrox Burroughs",
    "Corundum",
    "Chlorseraph",
    "Clinoseraph",
    "Zektz Meteoryte",
    "Donna Meteoryte",
    "Iola Hearts",
    "Tekta de Rais",
    "Wyndham",
    "Papa Chen",
    "Sango Corallo",
    "Ecaille",
    "Ameth Won",
    "Paraiba Marine de Rais",
    "Zirconia Marine de Rais",
    "Lapis",
    "Prehna",
    "Labrodor Arkham",
    "Fluora Spodune"
  ],
  "GRACES": [
    "Asbel Lhant",
    "Sophie",
    "Hubert Oswell",
    "Cheria Barnes",
    "Richard",
    "Malik Caesar",
    "Pascal",
    "Emeraude",
    "Lambda",
    "Little Queen",
    "Fodra Queen",
    "Bryce",
    "Malik Caesar",
    "Victoria",
    "Cedric",
    "Kurt Bessel",
    "Mecha-Asbel",
    "Cornell",
    "Aston Lhant",
    "Kerri Lhant",
    "Raymond Oswell",
    "Poisson",
    "Fourier"
  ],
  "XILLIA": [
    "Jude Mathis",
    "Milla Maxwell",
    "Alvin",
    "Leia Rolando",
    "Elize Lutus",
    "Teepo",
    "Rowen J. Ilbert",
    "Nachtigal I. Fenn",
    "Muzét",
    "Gaius",
    "Gilandor Yul Svent",
    "Agria",
    "Jiao",
    "Presa",
    "Wingul",
    "Ivar",
    "Maxwell",
    "Cline K. Sharil",
    "Driselle K. Sharil",
    "Yurgen Kitarl",
    "Isla",
    "Karla Outway",
    "Balan"
  ],
  "XILLIA 2": [
    "Ludger Will Kresnik",
    "Elle Mel Marta",
    "Julius Will Kresnik",
    "Nova",
    "Vera",
    "Chronos",
    "Victor",
    "Bisley Karcsi Bakur",
    "Rideaux Zek Rugievit"
  ],
  "ZESTIRIA": [
    "Sorey",
    "Mikleo",
    "Alisha Diphda",
    "Rose",
    "Lailah",
    "Edna",
    "Dezel",
    "Zaveid",
    "Heldalf",
    "Symonne",
    "Lunarre"
  ],
  "BERSERIA": [
    "Velvet Crowe",
    "Laphicet",
    "Rokurou Rangetsu",
    "Magilou",
    "Eizen",
    "Eleanor Hume",
    "Bienfu",
    "Artorius Collbrande",
    "Innominat",
    "Oscar Dragonia",
    "Teresa Linares",
    "Silva",
    "Shigure Rangetsu",
    "Morgrim",
    "Melchior Mayvin",
    "Van Aifread",
    "Zaveid",
    "Laphicet Crowe",
    "Celica Crowe",
    "Niko",
    "Seres",
    "Benwick",
    "Dyle",
    "Kurogane",
    "Grimoirh",
    "Kamoana"
  ],
  "ARISE": [
    "Alphen",
    "Shionne Vymer Imeris Daymore",
    "Rinwell",
    "Law",
    "Kisara",
    "Dohalim il Qaras",
    "Balseph",
    "Ganabelt Valkyris",
    "Almeidrea Kaineris",
    "Vholran Igniseri",
    "Zephyr"
  ]
}


export default App
