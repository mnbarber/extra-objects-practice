// const ironMan = {
//     regularName: 'Anthony Edward "Tony" Stark',
//     abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
//     marvelMovieAppearances: {
//         ironMan: true,
//         theHulk: true,
//         ironManTwo: true,
//         thor: false,
//         captainAmerica: false,
//         theAvengers: true,
//         ironManThree: true,
//         thorTwo: false,
//         captainAmericaTwo: false,
//         guardiansOfTheGalaxy: false,
//         avengersTwo: true,
//         antMan: false,
//         captainAmericaThree: true,
//         doctorStrange: false,
//         guardiansOfTheGalaxyTwo: false,
//         spiderManHomecoming: false,
//         thorThree: false,
//         blackPanther: false,
//         avengersThree: true
//     },
//     jarvisAreYouThere: () => {
//        console.log('At your service, sir')
//     }
// }

// // 1 - Log Iron Man's third ability
// // console.log(ironMan.abilities[2])

// // 2 - Log all of Iron Man's abilities by looping through the array
// // ironMan.abilities.forEach(element => console.log(element))

// // 3 - Log whether or not Iron Man appeared in spiderManHomecoming
// // console.log(ironMan.marvelMovieAppearances.spiderManHomecoming)

// // 4 - Wait, that's not right -- he did appear in that movie! Change the value to true without editing the object itself and log it again to verify it changed
// ironMan.marvelMovieAppearances.spiderManHomecoming = true 
// // console.log(ironMan.marvelMovieAppearances.spiderManHomecoming)

// // 5 - Check if jarvis is there by calling on the jarvisAreYouThere function
// // ironMan.jarvisAreYouThere()

// // assembling other avengers
// const createCaptain = function() {
//     const captainAmerica = {
//         aliases: {
//             name: 'Steve Rogers',
//             superheroName: 'Captain America',
//         },
//         abilities: ['super strong shield', 'super human speed', 'peak human strength'],
//         sayPhrase: () => {
//             return console.log('I can do this all day!');
//         }
//     }
//     return captainAmerica;
// }

// // console.log(createCaptain().aliases.superheroName)
// // console.log(createCaptain().abilities[2])
// // console.log(createCaptain().sayPhrase())

// const blackWidow = {
//     aliases: {
//         realName: 'Natalia Alianovna Romanova',
//         otherNotableAliases: 'Natalie Rushman',
//         superheroName: 'Black Widow',
//     }
// }


// // console.log(blackWidow.aliases.realName)
// // console.log(blackWidow.aliases.otherNotableAliases)


// // AVENGERS NESTED
// const theAvengers = [
//     { name: 'Tony Stark', superheroName: 'Iron Man'},
//     { name: 'Steve Rogers', superheroName: 'Captain America' },
//     { name: 'Bruce Banner', superheroName: 'The Hulk'},
//     { name: 'Thor' },
//     { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
//     { name: 'Clint Barton', superheroName: 'Hawkeye' }
//   ]

// // for(i = 0; i <theAvengers.length; i++) {
// //     console.log(theAvengers[i].name);
// // }

// // MCU MOVIES
// const mcuMovies = [
//     ['ant-man', 'ant-man and the wasp'],
//     ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
//     ['black panther'],
//     ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
//     ['doctor strange'],
//     ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
//     ['the hulk'],
//     ['iron man', 'iron man 2', 'iron man 3'],
//     ['spiderman: homecoming'],
//     ['thor', 'thor: the dark world', 'thor: ragnarok']
//   ]

// // for(i = 0; i < mcuMovies.length; i++) {
// //     for(m = 0; m < mcuMovies.length; m++) {
// //         console.log(mcuMovies[i][m])
// //     }
// // }

// // Other Objects - Instruments
// const instruments = {
//     banjo: ["1920 gibson", "deering", "washburn"],
//     guitar: {
//       acoustic: ["martin", "taylor", "santa cruz", "gibson"],
//       electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
//       nylon: ["baldwin", "cordoba"]
//     },
//     mandolin: ["eastman", "weber", "collings"]
//   }

// 1
// console.log(instruments.guitar.electric[1])
// console.log(instruments.guitar.acoustic[2])
// console.log(instruments.banjo[2])
// console.log(instruments.mandolin[1])


// 2
// for(i = 0; i < instruments.length; i++) {
//     console.log(instruments.guitar.electric[0]);
// }

// 3
// const vocals = ['logic', 'jid', 'oliver tree']

// instruments.vocals = vocals

// console.log(instruments)

// Other Objects - Garmonbozia
const garmonbozia = {
    meltedFace: true,
    wobblyArms: true,
    mysteryMeats: [
      'Schlimmbinooks',
      'blangs',
      { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
      { type: 'Yuck-tops', deliverables: [
        'Nevermind',
        { zone: 'safety-zone' },
        { zone: false, true: true },
        () => {
          return () => {
            return () => {
              return () => {
                return () => {
                  return { website: 'Gossipcop.com', what: {
                    offering: 'creamed corn', location: 'dark'
                  }
                  }
                }
              }
            }
          }
        }
       ]
      }
    ]
  }

  console.log(garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering)
