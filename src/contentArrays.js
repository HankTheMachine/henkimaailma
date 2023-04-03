// HERRA MUN VERENI

// Tämä tiedosto on yksi frontin tärkeimmistä tietokasoista. Tähän viitataan melkein kaikkialla --> tätä päivittämällä suuri osa sivusta päivittyy ehjästi
import { sortByDate } from "./components/functions.js";
import {TYTWabuKaba2021} from "./contentpages/Projektit/Projektialasivut/TYT-Wappukabaree2021.jsx";
import {EnsimmainenPsykoosiEP} from './contentpages/Projektit/Projektialasivut/Ensimmainen Psykoosi EP.jsx';
import {Ympyrat} from './contentpages/Projektit/Projektialasivut/Ympyrat.jsx';
import {YouTubePeliarviot} from './contentpages/Projektit/Projektialasivut/YouTubePeliarviot.jsx'
import {MusiikkiYouTube} from "./contentpages/Projektit/Projektialasivut/MusiikkiYouTube.jsx";
import {DJKEFMTP} from './contentpages/Projektit/Projektialasivut/MiscMusiikki/DJ-Kalustoelukka&FMashina-Tyydyttava-Pikanen.jsx';
import {HTMItalwaysForgets} from './contentpages/Projektit/Projektialasivut/MiscMusiikki/HTM-It-Always-Forgets';
import {HTMTheSpaceRace} from "./contentpages/Projektit/Projektialasivut/MiscMusiikki/HTM-The-Space-Race.jsx";
import { MitaHemmettia } from "./contentpages/Blog/BlogPosts/MitaHemmettia.jsx";
import { IdeoitaNayttamolla } from "./contentpages/Blog/BlogPosts/IdeoitaNayttamolla.jsx";
import  DDLKCNTBI  from "./contentpages/Arviot/ArvioPages/DDLKCNTBI.jsx";
import  NDFETO  from "./contentpages/Arviot/ArvioPages/NDFETO.jsx";
import { AnnanHeviOpinnot } from "./contentpages/Projektit/Projektialasivut/AnnanHeviOpinnot.jsx";
import { DiscordLevyRaati } from "./contentpages/Projektit/Projektialasivut/Discordlevyraati/Discordlevyraati.jsx";
import { IPodAikakapseli } from "./contentpages/Projektit/Projektialasivut/iPodAikakapseli.jsx";
import { HyvatJaHuonotTeatterit } from "./contentpages/Blog/BlogPosts/HyvatJaHuonotTeatterit.jsx";
import { SnSSamplepack } from "./contentpages/Projektit/Projektialasivut/SnS-Samplepack.jsx";

export const ContentArrays = [
    
    {list: "peliarviot",
    content :[
        {
            "id": 1,
            "title": "Shovel Knight (Peliarvio)",
            "url": "shovel-knight",
            "fullUrl": "projektit/peliarviot/shovel-knight",
            "date": new Date("2021-11-13T16:00:00Z"),
            "tags": ["Tasoloikka", "Pikseligrafiikka", "Retro"],
            "ftags": ["YouTube"],
            "ytid" : "tdfxHlKB9yQ",
            "sl": false,
        },
        {
            "id": 2,
            "title": "Star Realms (Peliarvio)",
            "url": "star-realms",
            "fullUrl": "projektit/peliarviot/star-realms",
            "date": new Date("2021-11-27T16:00:00Z"),
            "tags": ["Korttipelit","Lautapelit"],
            "ftags": ["YouTube"],
            "ytid" : "iFO8hB0Cg9w",
            "sl": false
        },
        {
            "id": 3,
            "title": "Crusader Kings III (Peliarvio)",
            "url": "crusader-kings-iii",
            "fullUrl": "projektit/peliarviot/crusader-kings-iii",
            "date": new Date("2021-12-15T17:00:00Z"),
            "tags": ["Strategia","Keskiaika"],
            "ftags": ["YouTube"],
            "ytid" : "pWg2fVGwG6k",
            "sl": false
        },
        {
            "id": 4,
            "title": "Loop Hero (Peliarvio)",
            "url": "loop-hero",
            "fullUrl": "projektit/peliarviot/loop-hero",
            "date": new Date("2022-06-16T16:00:00Z"),
            "tags": ["Indie darling", "Idle", "Pikseligrafiikka"],
            "ftags": ["YouTube"],
            "ytid" : "YQ2q5ePILW0",
            "sl": true
        },
        {
            "id": 5,
            "title": "Vampire Survivors (Peliarvio)",
            "url": "vampire-survivors",
            "fullUrl": "projektit/peliarviot/vampire-survivors",
            "date": new Date("2022-07-12T17:00:00Z"),
            "tags": ["Indie darling", "Pikseligrafiikka"],
            "ftags": ["YouTube"],
            "ytid" :"n5oSsyv8T-U",
            "sl": true
        },
        {
            "id": 6,
            "title": "Wolfenstein: The New Order (Peliarvio)",
            "url": "wolfenstein-the-new-order",
            "fullUrl": "projektit/peliarviot/wolfenstein-the-new-order",
            "date": new Date("2023-02-23T17:00:00Z"),
            "tags": ["Räiskintä", "Vaihtoehtohistoria"],
            "ftags": ["YouTube"],
            "ytid" :"hmIVHQpGvhg",
            "sl": true
        }
    ]},

    {list:"musaYT",
    content: [
        {
            "id": "myt1",
            "title": "(Vain) Yksi sample -> yksi biisi",
            "url": "yksi-sample-yksi-biisi",
            "fullUrl": "projektit/musaYouTube/yksi-sample-yksi-biisi",
            "date": new Date("2022-06-09T16:00:00Z"),
            "tags": ["Musiikkituotanto","Haasteet"],
            "ftags": ["YouTube"],
            "ytid" : "7EBasiMtlDc",
            "sl" : false,
        },
        {
            "id": "myt2",
            "title": "Vastine Käärijän Cha Cha Cha -plagiointikeskusteluun",
            "url": "cha-cha-cha-plagiarismi",
            "fullUrl": "projektit/musaYouTube/cha-cha-cha-plagiarismi",
            "date": new Date("2023-03-28T16:00:00Z"),
            "tags": ["Musiikkianalyysi","Kritiikki","Musiikkitiede","Tekijänoikeus"],
            "ftags": ["YouTube"],
            "ytid" : "Vw29QZb4_Ng",
            "sl" : true,
        },
    ]},

    {list:"blog",
    content :[
    {
        "id": "blog1",
        "title": "Mitä hemmettiä nyt taas Henkka",
        "url": "mita-hemmettia-nyt-taas-henkka",
        "date": new Date('2023-02-22T20:00:00Z'),
        "date2": new Date('2023-02-22T20:00:00Z'),
        "imgurl": "https://i.imgur.com/diayd7A.png",
        "tags": ["Meta", "Ohjelmointi"],
        "sl": false,
        "element": <MitaHemmettia/>
    },
    {
        "id": "blog2",
        "title": "Ideoita näyttämöllä - Merkitysten konstruointi näyttämömusiikin tuotantoprosessissa",
        "url": "ideoita-nayttamolla",
        "date": new Date('2023-02-23T16:00:00Z'),
        "date2": new Date('2023-02-22T20:00:00Z'),
        "imgurl": "https://i.imgur.com/Y1IUose.png",
        "tags": ["Musiikkitiede", "Teatteri", "Koulu"],
        "sl": false,
        "element": <IdeoitaNayttamolla/> 
    },
    {
        "id": "blog3",
        "title": "Hyvät ja huonot teatteriesitykset",
        "url": "hyvat-ja-huonot-teatteriesitykset",
        "date": new Date('2023-03-31T16:00:00Z'),
        "date2": new Date('2023-03-31T20:00:00Z'),
        "imgurl": "https://i.imgur.com/JMPpeHt.png",
        "tags": ["Teatteri", "Listat"],
        "sl": false,
        "element": <HyvatJaHuonotTeatterit/> 
    },
    ]},

    {list:"projektit",
    content: [
        {
            "id": 1,
            "title": "Ensimmäinen Psykoosi - Ensimmäinen Psykoosi EP",
            "url": "ensimmainen-psykoosi-ep",
            "imgurl": "https://i.imgur.com/yIwK34x.jpg",
            "date": new Date("2016-07-01T16:00:00Z"),
            "tags": ["Musiikki","Bandcamp"],
            "ftags": ["Musiikki"],
            "sl": false,
            element: <EnsimmainenPsykoosiEP/>
        },
        {
            "id": 2,
            "title": "Ympyrät",
            "url": "ympyrat",
            "imgurl": "https://i.imgur.com/KNi8URi.png",
            "date": new Date("2018-12-01T16:00:00Z"),
            "tags": ["Muut"],
            "ftags": ["Muut"],
            "sl": false,
            "element": <Ympyrat/>,
        },
        {
            "id": 3,
            "title": "Turun Ylioppilasteatteri - Wappukabaree 2021",
            "url": "tyt-wappukabaree2021",
            "imgurl": "https://i.imgur.com/ovxyCTi.jpg",
            "date": new Date("2021-04-30T18:00:00Z"),
            "tags": ["Musiikki","Muut","Teatteri"],
            "sl": false,
            "ftags": ["Muut"],
            "element": <TYTWabuKaba2021/>,
            
        },
        {
            "id": 4,
            "title": "Peliarviot Youtubessa",
            "url": "peliarviot",
            "imgurl": "https://i.imgur.com/TO8XN4w.png",
            "date": new Date("2023-02-22T17:00:00Z"),
            "tags": ["YouTube", "Peliarviot"],
            "ftags": ["YouTube"],
            "sl": false,
            "element": <YouTubePeliarviot/>,
        },
        {
            "id": 5,
            "title": "Hank The Machine - The Space Race",
            "url": "htm-the-space-race",
            "imgurl": "https://i.imgur.com/pepjlCF.png",
            "date": new Date("2021-11-01T16:00:00Z"),
            "tags": ["Musiikki", "Soundcloud"],
            "ftags": ["MusicMisc"],
            "ytid" : "7EBasiMtlDc",
            "sl": false,
            "element": <HTMTheSpaceRace/>
        },
        {
            "id": 6,
            "title": "Hank The Machine - It Always Forgets",
            "url": "htm-it-always-forgets",
            "imgurl": "https://i.imgur.com/IJdHa94.png",
            "date": new Date("2022-06-09T16:00:00Z"),
            "tags": ["Musiikki","Soundcloud","YouTube"],
            "ftags": ["MusicMisc"],
            "sl": false,
            "element": <HTMItalwaysForgets/>
        },
        {
            "id": 7,
            "title": "DJ KALUSTOELUKKA & F-MASHINA - TYYDYTTÄVÄ PIKAINEN",
            "url": "dj-kalustoelukka-f-mashina-tyydyttava-pikainen",
            "imgurl": "https://i.imgur.com/AK6fHpq.png",
            "date": new Date("2020-05-01T16:00:00Z"),
            "tags": ["Musiikki","Soundcloud"],
            "ftags": ["MusicMisc"],
            "sl": false,
            "element": <DJKEFMTP/>
        },
        {
            "id": 8,
            "title": "Annan Hevi Opinnot (Turun Wappuradio 24.4.2022)",
            "url": "annan-hevi-opinnot",
            "imgurl": "https://i.imgur.com/81yV534.jpg",
            "date": new Date("2022-04-24T16:00:00Z"),
            "tags": ["Radio"],
            "ftags": ["Muut"],
            "sl": false,
            "element": <AnnanHeviOpinnot/>
        },
        {
            "id": 9,
            "title": "Discord-levyraati (Jives)",
            "url" : "discordlevyraati",
            "imgurl" : "https://i.imgur.com/VZylab0.png",
            "date" : new Date("2023-02-08T16:00:00Z"),
            "tags": ["Ohjelmointi"],
            "ftags" : ["Muut"],
            "sl" : false,
            "element" : <DiscordLevyRaati/>
        },
        {
            "id": 10,
            "title": "Musiikkiaiheiset YouTube-jutut",
            "url" : "musaYouTube",
            "imgurl" : "https://i.imgur.com/08scNZb.png",
            "date" : new Date("2023-03-27T16:00:00Z"),
            "tags": ["YouTube"],
            "ftags" : ["YouTube"],
            "sl" : false,
            "element" : <MusiikkiYouTube/>
        },
        {
            "id": 11,
            "title": "iPod-aikakapseli (Turun Wappuradio 27.4.2021)",
            "url": "ipod-aikakapseli",
            "imgurl": "https://i.imgur.com/Gbx6cFa.png",
            "date": new Date("2021-04-27T16:00:00Z"),
            "tags": ["Radio"],
            "ftags": ["Muut"],
            "sl": false,
            "element": <IPodAikakapseli/>
        },
        {
            "id": 12,
            "title": "Sounds and Scapes -sample pack",
            "url": "sns-samplepack",
            "fullUrl": "projektit/sns-samplepack",
            "imgurl": "https://i.imgur.com/BAxT5CT.png",
            "date": new Date("2023-04-03T16:00:00Z"),
            "tags": ["Äänisuunnittelu, kenttä-äänitteet"],
            "ftags": ["MusicMisc"],
            "sl": true,
            "element": <SnSSamplepack/>
        },
    ]},

    {list:"arviot",
    content: [
        {
            "id": 1,
            "type": "Album",
            "title": "Napalm Death - From Enslavement To Obliteration",
            "url": "napalm-death-from-enslavement-to-obliteration",
            "date": new Date("2023-02-21T16:00:00Z"),
            "genre": ["Grindcore"],
            "coverArt": "https://i.discogs.com/g-CnSpZefboKTRrLwhqITDyK_o7aOxMWn_ofzRS9s3s/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NzM1/Ny0xNDAwNjY3NjA2/LTM5NDcuanBlZw.jpeg",
            "data": {
                    "artist": ["Napalm Death"],
                    "albumtitle": "From Enslavement To Obliteration",
                    "year": "1988",
                    "label": "Earache Records",
            },
            "ftags": "Musiikki",
            "rating": "8+",
            "sl": false,
            "element": <NDFETO/>
        },
        {
            "id": 2,
            "type": "Album",
            "title": "Dxxxa D & Hzzzt - Low Key Cue New Tan Bloss It",
            "url": "dxxxa-d-hzzzt-low-key-cue-new-tan-bloss-it",
            "date": new Date("2023-02-20T16:00:00Z"),
            "genre": ["Hip hop", "Spoken word"],
            "coverArt": "https://i.discogs.com/lMtOVApOVAEg6zVhSFml1Q9uqHk6jAyz59j9wdPwhkY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2MjA1/ODItMTM5ODE4NzQ1/My02NDQ4LmpwZWc.jpeg",
            "data": {
                    "artist": ["Dxxxa D", "Hzzzt"],
                    "albumtitle": "Low Key Cue New Tan Bloss It",
                    "year": "2014",
                    "label": "Helmi Levyt"

            },
            "ftags": "Musiikki",
            "sl": false,
            "rating": "8+",
            "element": <DDLKCNTBI/>
        }
    ]},

    {list: "changeLog",
    content: [
        {
            "id": 1,
            "major": true,
            "title": "Henkimaailma 1.0 on täällä",
            "date": new Date("2023-02-01T16:00:00Z"),
            "bp": [
                "Tervetuloa maailmaan, Henkimaailma",
            ],
        },
        {
            "id": 2,
            "major": false,
            "title": "Siistintää + Käärijävideo",
            "date": new Date("2023-03-28T16:00:00Z"),
            "bp": [
                "Sivupalkin (navigaatio) järjestystä muutettu",
                "CSS yksinkertaistettu kautta linjan ja luettavuutta mobiililaitteilla parannettu hiukan (lisämuutoksia todnäk vielä edessä)",
                "Lisätty Käärijä-video ja uusi kategoria musa-aiheisille YouTube-jutuille",
                "Discord-levyraatiin lisätty filtteri: jos levyä ei ole vielä arvosteltu ei se näy levyjen listassa (ennen näkyi listan perällä arvosanana 0",
                "Jivesin dokumentaatiota päivitetty ajankohtaisemmaksi",
            ]
        },
        {
            "id": 3,
            "major": false,
            "title": "iPod-aikakapseli ja SnS-samplepack",
            "date": new Date("2023-04-01T16:00:00Z"),
            "bp": [
                "Projekteihin lisätty löytynyt i-Pod-aikakapselin tallenne",
                "Projekteihin lisätty SnS-samplepaketti",
                "Blog: 'Hyvät ja huonot teatterijutut'"
            ]
        },
    ]},
]


const filterSpotLighteds=(fullArray)=> {
    let spotlighteds=[]
    for (let i=0;i < fullArray.length; i++) {
        for (let y=0; y < fullArray[i]["content"].length; y++) {
            if (fullArray[i]["content"][y]["sl"]===true) {
                spotlighteds = spotlighteds.concat(fullArray[i]["content"][y])
            }
        }
    }
    return spotlighteds}

export const KontsaArray = {
        kaikki : sortByDate(ContentArrays),
        peliarviot : sortByDate(ContentArrays[0].content),
        musaYT : sortByDate(ContentArrays[1].content),
        blog : sortByDate(ContentArrays[2].content),
        projektit : sortByDate(ContentArrays[3].content),
        arviot : sortByDate(ContentArrays[4].content),
        changeLog : sortByDate(ContentArrays[5].content),
        spotlightArray : sortByDate(filterSpotLighteds(ContentArrays)),
}