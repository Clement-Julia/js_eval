import Perso from "../components/Perso";

const fetchPerso = async () =>{
    try {
        const req = await fetch(`https://rickandmortyapi.com/api/character/1`)
        const res = await req.json()

        return res
    }catch(e){
        throw new Error(e)
    }
}

const PagePersonnage = async () =>{
    const res = await fetchPerso()
    
    return Perso(res)
}

export default PagePersonnage;



/////////

// import Perso from "../components/Perso";

// const fetchPerso = async (id) =>{
//     try {
//         const req = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
//         const res = await req.json()

//         return res
//     }catch(e){
//         throw new Error(e)
//     }
// }

// const PagePersonnage = async (id) =>{
//     const res = await fetchPerso(id)

//     return Perso(res.data)
// }

// export default PagePersonnage;