import EpList from "../components/EpList";

let seasons = [];

const fetchEp = async (season = 1) => {
    try {
        const reqPage1 = await fetch(`https://rickandmortyapi.com/api/episode?page=1`);
        const reqPage2 = await fetch(`https://rickandmortyapi.com/api/episode?page=2`);
        const reqPage3 = await fetch(`https://rickandmortyapi.com/api/episode?page=3`);

        const resPage1 = await reqPage1.json();
        const resPage2 = await reqPage2.json();
        const resPage3 = await reqPage3.json();

        let res = [...resPage1.results, ...resPage2.results, ...resPage3.results];

        res = res.reduce((acc, curr) => {
            if (curr.episode.charAt(2) == season) {
                acc.push(curr);
            }
            if (!seasons.includes(curr.episode.charAt(2))) {
                seasons.push(curr.episode.charAt(2));
            }

            return acc;
        }, [])

        return res;
    } catch (e) {
        throw new Error(e)
    }
}

const EpPage = async (obj) => {
    const res = await fetchEp(obj.season);

    let divPage = document.querySelector('.divPage');
    let divSeason = document.querySelector('.divSeason');
    let select = document.getElementById('select-season');

    divPage.classList.add('d-none');
    divSeason.classList.remove('d-none');

    console.log({divPage})

    if (select.length != seasons.length) {
        seasons.forEach(element => {
            const option = document.createElement('option');
            option.value = element;
            option.text = `Saison ${element}`;

            select.appendChild(option);
        });
    }

    return EpList(res)
}

export default EpPage