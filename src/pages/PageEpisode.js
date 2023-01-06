import Episode from "../components/Episode";


const fetchEpisode = async(id) =>{
    try {
        const req = await fetch("https://rickandmortyapi.com/graphql", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
               query: `query GetEpisodeById($id: ID!) {
          episode(id: $id) {
              name
              air_date
              episode
              characters{
                id
                name
                image
              }
              
              created
              
          }
        }`,
               variables: { id: id }  
            })
        })
        const res = await req.json()

        return res
        
    } catch (e) {
        throw new Error(e)
    }
}


const PageEpisode = async (obj) =>{
    
    const res = await fetchEpisode(obj.perso)
    console.log(res)
    const elements = Episode(res.data.episode)
    return elements
}

export default PageEpisode;
