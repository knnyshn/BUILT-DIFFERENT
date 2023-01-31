async function champAPI(champ) {
    const url = `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${champ}.json`
    
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        return json;
    
      } catch (error) {
        console.log(error);
      }
    }
    
    champAPI("Fizz");