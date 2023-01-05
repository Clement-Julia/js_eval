import CardList from "../components/CardList"

const fetchPage = async (page = 1) =>  {
  try {
    const req = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const res = await req.json()
    console.log(res);
  
    return res
  } catch(e) {
    throw new Error(e)
  }
}

const UserPage = async (obj) => {
  const res = await fetchPage(obj.page)

  let select = document.getElementById('select-page');

  for(var i = 1; i <= res.info.pages; i++){
    const option = document.createElement('option');
    option.value = i;
    option.text = i;

    select.appendChild(option);
  }


  let previous = document.getElementById('previous');
  let next = document.getElementById('next');

  let urlPrevious = res.info.prev;
  let urlNext = res.info.next;

  if(urlPrevious){
    urlPrevious = urlPrevious.slice(47);
    previous.setAttribute('data-page', urlPrevious);
    previous.classList.remove('d-none');
  }else{
    previous.classList.add('d-none');
  }
  
  if(urlNext){
    urlNext = urlNext.slice(47);
    next.setAttribute('data-page', urlNext);
    next.classList.remove('d-none');
  }else{
    next.classList.add('d-none');
  }


  return CardList(res.results)
}

export default UserPage