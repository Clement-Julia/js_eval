import CardList from "../components/CardList"
import Swal from 'sweetalert2'

const fetchFiltre = async (searchValue, searchTypeValue) => {

  try {
    const req = await fetch(`https://rickandmortyapi.com/api/character/?${searchTypeValue}=${searchValue} `)
    if (req.status === 404) {
      if (searchTypeValue == "name") {
        Swal.fire({
          title: 'Aucun personnage trouvé.',
          text: 'Aucun personnage dont le nom contient \"' + searchValue + '\" trouvé.',
          icon: 'error',
          confirmButtonText: 'Fermer'
        })

      } else if (searchTypeValue == "status") {
        Swal.fire({
          title: 'Aucun personnage trouvé.',
          text: 'Les statuts possibles sont : alive, dead or unknown.',
          icon: 'error',
          confirmButtonText: 'Fermer'
        })
      } else if (searchTypeValue == "species") {
        Swal.fire({
          title: 'Aucun personnage trouvé.',
          text: 'Aucun personnage de l\'espèce \"' + searchValue + '\" trouvé.',
          icon: 'error',
          confirmButtonText: 'Fermer'
        })

      } else if (searchTypeValue == "gender") {
        Swal.fire({
          title: 'Aucun personnage trouvé.',
          text: 'Les genres possibles sont : female, male, genderless or unknown.',
          icon: 'error',
          confirmButtonText: 'Fermer'
        })
      }
      die();
    }
    const res = await req.json()
    return res

  } catch (e) {
    throw new Error(e)
  }
}

const FiltrePage = async (obj) => {
  const res = await fetchFiltre(obj.searchValue, obj.searchTypeValue)

  return CardList(res.results)
}

export default FiltrePage;