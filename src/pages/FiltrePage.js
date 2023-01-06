import CardList from "../components/CardList"

const fetchFiltre = async (searchValue, searchTypeValue) => {

  try {
    const req = await fetch(`https://rickandmortyapi.com/api/character/?${searchTypeValue}=${searchValue} `).catch(err => { alert("trezdqsd") });
    console.log(req.status)
    if(req.status === 404) {
        if(searchTypeValue == "status") {
            alert("Aucun personnage trouvé avec ce filtre.\nLes statuts possibles sont : alive, dead or unknown")
        } else if(searchTypeValue == "species") {
            alert("Aucun personnage trouvé avec ce filtre.")
        } else if(searchTypeValue == "gender") {
            alert("Aucun personnage trouvé avec ce filtre.\nLes genres possibles sont : female, male, genderless or unknown")
        }
    }
    const res = await req.json()
    return res
    
  } catch(e) {
    console.log(e)
    console.log(e.message)
    if(e.message === "404") {
        alert("111111111")
    }
    throw new Error(e)
  }
}

const FiltrePage = async (obj) => {
    console.log(obj);       
  const res = await fetchFiltre(obj.searchValue, obj.searchTypeValue)

  return CardList(res.results)
}

export default FiltrePage;