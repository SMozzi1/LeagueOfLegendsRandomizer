let toplaneChampions = ["Aatrox", "Akali", "Camille", "Cassiopeia", "Cho'Gath", "Darius", "DR.Mundo", "Fiora", 
"Gangplank", "Garen", "Gnar", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", 
"Jax", "Jayce", "K'Sante", "Karma", "Kayle", "Kennen", "Kled", "Lillia", "Lucian", 
"Malphite", "Maokai", "Mordekaiser", "Nasus", "Nocturne", "Olaf", "Ornn", "Pantheon", 
"Poppy", "Quinn", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sett", "Shen", "Singed", 
"Sion", "Swain", "Sylas", "Tahm Kench", "Teemo", "Tryndamere", "Urgot", "Vayne", "Vladimir", 
"Volibear", "Wukong", "Yasuo", "Yone", "Yorick", "Zac"]

let jungleChampions = ['Amumu', 'Bel\'Veth', 'Diana', 'Dr. Mundo', 'Ekko', 'Elise', 'Evelynn', 
'Fiddlesticks', 'Gragas', 'Graves', 'Hecarim', 'Ivern', 'Jarvan IV', 'Jax', 'Karthus', 'Kayn', 
'Kha\'Zix', 'Kindred', 'Kled', 'Lee Sin', 'Lillia', 'Master Yi', 'Nidalee', 'Nocturne', 'Nunu', 
'Olaf', 'Poppy', 'Rammus', 'Rek\'Sai', 'Rengar', 'Sejuani', 'Sett', 'Shaco', 'Shyvana','Skarner',
'Taliyah','Trundle','Udyr','Vi','Viego','Volibear','Warwick','Wukong','Xin Zhao','Zac'];

let midlaneChampions = ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Anivia', 'Annie', 'Aurelion Sol', 
'Azir', 'Camille', 'Cassiopeia', 'Cho\'Gath', 'Corki', 'Diana', 'Ekko', 'Fizz', 'Galio', 'Garen', 
'Gwen', 'Heimerdinger', 'Irelia', 'Ivern', 'Jayce', 'Kassadin','Katarina','LeBlanc','Lillia',
'Lissandra','Lucian','Lux','Malphite','Malzahar','Neeko','Nocturne','Nunu','Orianna','Pantheon',
'Pyke','Qiyana','Renekton','Rumble','Ryze','Swain','Sylas','Syndra','Taliyah','Talon','Twisted Fate',
'Veigar','Vel\'Koz','Vex','Viktor','Vladimir','Xerath','Yasuo','Yone','Zed','Ziggs','Zilean ','Zoe'];

let adcChampions = ['Aphelios', 'Ashe', 'Caitlyn', 'Corki', 'Draven', 'Ezreal', 'Graves', 'Jhin', 
'Jinx', 'Kai\'Sa', 'Kalista', 'Kindred', 'Kog\'Maw', 'Lucian', 'Miss Fortune', 'Samira', 'Senna', 
'Quinn', 'Sivir', 'Tristana', 'Twitch', 'Varus','Vayne','Xayah'];

let supportChampions = ['Alistar', 'Amumu', 'Anivia', 'Annie', 'Ashe', 'Bard', 'Blitzcrank', 
'Brand', 'Braum', 'Fiddlesticks', 'Galio', 'Heimerdinger', 'Ivern', 'Janna', 'Karma', 'Leona', 
'Lulu', 'Lux', 'Malphite','Maokai','Milio','Morgana','Nami','Nautilus','Pantheon','Poppy','Pyke',
'Rakan','Rell','Renata Glasc','Senna','Seraphine','Sett','Shaco','Shen','Sona','Soraka','Swain',
'Syndra','Tahm Kench','Taric','Thresh','Vel\'Koz','Xerath','Yuumi','Zac','Zilean ','Zoe ','Zyra'];


function detectorDeOpcion() {
    const element = document.querySelector(".roles");
    let value = element.value;
    return value;
}

function randomizarPersonaje(){
    let linea = detectorDeOpcion()
    let randomChamp = [];
    let result = [];
    switch (linea){
    case "top":  randomChamp = Math.floor(Math.random() * toplaneChampions.length);
         result =  toplaneChampions[randomChamp];
    break;
    case "jg":  randomChamp = Math.floor(Math.random() * jungleChampions.length);
     result =  jungleChampions[randomChamp];
    break;
    case "mid":  randomChamp = Math.floor(Math.random() * midlaneChampions.length);
     result =  midlaneChampions[randomChamp];
     break;
     case "adc": randomChamp = Math.floor(Math.random() * adcChampions.length);
     result =  adcChampions[randomChamp];
     break;
     case "supp": randomChamp = Math.floor(Math.random() * supportChampions.length);
     result =  supportChampions[randomChamp];
     break;
    }
    return result;
}
document.querySelector("#randomicer").addEventListener("click", function() {
    document.querySelector("#result").textContent = randomizarPersonaje();
});
