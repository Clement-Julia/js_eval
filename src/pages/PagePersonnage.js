import Perso from "../components/Perso";

const fetchPerso = async (id) =>{
    try {
        const req = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const res = await req.json()

        return res
    }catch(e){
        throw new Error(e)
    }
}

const PagePersonnage = async (obj) =>{
    console.log(obj)
    const res = await fetchPerso(obj.perso)
    return Perso(res)
}

export default PagePersonnage;



