//Source APIs
const champion_base = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json';
const champion_detail_base = 'https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/';
const champion_icon_base = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/';
const items_base = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json';
const items_icon_base = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/';
const summoner_spell_base = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/summoner.json';
const summoner_spell_icon = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/';

// Champion API
// Champion Detail API so /en_US/champion/InsertChampName
// Champion Assets API so /img/champion/InsertChampName.png 
// Items API that has numbers assigned to each item
// Items Assets API so /img/item/ItemNumber.png
// Summoner Spell API
// Summoner Spell Assets API so /img/spell/SpellName.png

async function champAPI() {
  const res = await fetch(champion_base);
  const json = await res.json();
  let adArray = [];
  for(let i in json.data){
    if(json.data[i].tags.includes('Marksman') && !json.data[i].tags.includes('Mage')){
      adArray.push([i, json.data [i]]);
    }
  }
  let randomAd = Math.floor(Math.random() * ((adArray.length) - 0) + 0);
  console.log(adArray);
  console.log(adArray[randomAd][0]);
  return (adArray[randomAd][0]);
}
champAPI();
// Fetch and randomize AD Champs with filter for mages.
// ["ChampionName"]["ChampionDetails"]
// ["Aphelios"]["All Aphelios Details"]

async function itemAPI() {
  try {
    const res = await fetch(items_base);
    console.log(res);
    const json = await res.json();
    let itemArray = [];
    for(let i in json.data){
      if(json.data[i].tags.includes('CriticalStrike') && json.data[i].gold.total > 2000){
        itemArray.push([i, json.data [i]]);
      }
    }
    console.log(itemArray);
    console.log(Object.keys(json.data));
    console.log('json       ', json);
    console.log('json.data  ', json);
    const items = Object.keys(json.data);
  } catch (error) {
    console.log(error);
    // Sanity Checks
  }
}
itemAPI();
// Fetch items that have specific filters for AD champions (generalizing) that are endgame / completed items.

async function summSpellAPI() {
  try {
    const res = await fetch(summoner_spell_base);
    console.log(res);
    const json = await res.json();
    let summSpellArray = [];
    for(let i in json.data){
      if(json.data[i].id.includes('SummonerFlash')) {
        summSpellArray.push([i, json.data [i]]);
      }
      if (json.data[i].id.includes('SummonerHeal')) {
        summSpellArray.push([i, json.data [i]]);
      }
    }
    console.log(summSpellArray[0]);
    return summSpellArray;
  } catch (error) {
    console.log(error);
    // Sanity Checks
  }
 
}
// Summoner Spell API

const button = document.getElementById("reroll");
button.addEventListener("click", async () => {
  const champ = await champAPI()
  document.body.getElementsByClassName("champSplash")[0].innerHTML='';
  document.body.getElementsByClassName("champSplash")[0].innerHTML='';
  const champIcon = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/"+ champ +".png";
  console.log(champIcon);
  const span = document.createElement("span");
  span.innerText = champ; 
  const img = document.createElement("img");
  img.src = champIcon;
  img.alt = champ;
  document.body.getElementsByClassName("champSplash")[0].appendChild(img);
  document.body.getElementsByClassName("champSplash")[0].appendChild(span);
  const sillyTitle = ["GIGACHAD", "FREAK OF NATURE", "TRULY BUILT DIFFERENT", "JOHN WICK'S", "BIG TONKA TRUCK", "IDGAF", "", "6'4 and 280 POUNDS", "MASSIVE PROBLEM", "ABSOLUTE MONSTER", "DEADLIFTS 550 POUNDS"];
  let randTitle = Math.floor(Math.random() * ((sillyTitle.length) - 0) + 0);
  console.log(randTitle);
  console.log((sillyTitle[randTitle]));
  document.getElementById("title").innerHTML = sillyTitle[randTitle];

  const summSpells = await summSpellAPI()
  console.log({summSpells});
  const spellsDivs = document.querySelectorAll('.spells')
  for (let i = 0; i < summSpells.length; i++) {
    const [name, props] = summSpells[i]
    const spellDiv = spellsDivs[i]
    spellDiv.innerHTML = '';
    const summSpellIconOne = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/"+ name +".png";
    console.log(summSpellIconOne);
    // const span2 = document.createElement("span");
    // span2.innerText = name;
    const img2 = document.createElement("img");
    img2.src = summSpellIconOne;
    img2.alt = name;
    spellDiv.append(img2);
  }

});
  // Item linker here???


// Button that is truly built different.


// Link champAPI + itemAPI with their respective assets.
// Generate it all to the page














// OLD VERSIONS OF FUNCTIONS

// champAPI()
//   .then((champ) => {
//     const champIcon = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/"+ champ +".png";
//     console.log(champIcon);
//     const span = document.createElement("span");
//     span.innerText = champ; 
//     const img = document.createElement("img");
//     img.src = champIcon;
//     img.alt = champ;
//     document.body.getElementsByClassName("champSplash")[0].appendChild(img);
//     document.body.getElementsByClassName("champSplash")[0].appendChild(span);
//     const sillyTitle = ["GIGACHAD", "BIG DADDY", "BIG MOMMY", "JOHN WICK'S", "BIG TONKA TRUCK", "IDGAF", "BIG DUMP TRUCK", "6'4 20 POUND", "GONNA BE A PROBLEM"];
//     let randTitle = Math.floor(Math.random() * ((sillyTitle.length) - 0) + 0);
//     console.log(randTitle);
//     console.log((sillyTitle[randTitle]));
//     document.getElementById("title").innerHTML = sillyTitle[randTitle];
//   });
// Champ API v2 independent of button / sanity checks
// Was crashing when running inside the function so I made it independent. Linked champ splash to randomizer. 
 
// async function champAPI() {
//       try {
//         const res = await fetch(champion_base);
//         // Response Fetch Champ base URL
//         console.log(res);
//         // Sanity check response
//         const json = await res.json();
//         // Set variable to json
//         console.log(Object.keys(json.data));
//         console.log('json       ', json);
//         console.log('json.data  ', json.data);
//         // Log object, json, and data of json to check.
//         const champs = Object.keys(json.data);
//         randomizer(champs);
//       } catch (error) {
//         console.log(error);
//       }
//     }
// Champ API v1
  
// async function itemAPI() {
//   try {
//     const res = await fetch(items_base);
//     console.log(res);
//     const json = await res.json();
//   let itemArray = [];
//     for(let i in json.data){
//     if(json.data[i].tags.includes('CriticalStrike') && json.data[i].gold.total > 2000){
//       itemArray.push([i, json.data [i]]);
//     }
//   }
//     console.log(itemArray);
//     console.log(Object.keys(json.data));
//     console.log('json       ', json);
//     console.log('json.data  ', json);
//     const items = Object.keys(json.data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// itemAPI();
            
