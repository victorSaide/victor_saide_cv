fetch('./assets/js/data.json')
    .then(response => response.json())
    .then(data => {
        for (let element of data.jobs) {
            console.log(element)
        }
        showPortfolio(data.proyects, proyectsContainer)
        showJobs(data.jobs, cards)
        console.log(data.proyects)
    })
    .catch(function (err) {
        console.log(err);
    })

function showJobs(array, container) {
    const fragment = document.createDocumentFragment();
    for (let element of array) {
        container.innerHTML = '';
        let div = document.createElement('div');
        div.className = "jobs";
        div.innerHTML = `
                <h3>${element.puesto}</h3>
                <p>${element.empresa}</p>
                <div class="p-flex-card">
                    <p>${element.inicio}</p>
                    <p> hasta </p>
                    <p>${element.fin}</p>    
                </div>
                `
        fragment.appendChild(div);
    }
    container.appendChild(fragment);
}

//crear funcion q recorra las tech usadas y las agregue automaticamente

function showPortfolio(array, container) {
    const fragmentSnd = document.createDocumentFragment();
    for (let element of array) {
        container.innerHTML = '';
        let div = document.createElement('div');
        div.className = "proyects";
        div.innerHTML = `
                <img class="jobs-img" src=${element.image} alt="img">
                <h3>${element.name}</h3>
                <p>${element.date}</p>
                <div class="p-flex">
                    <span class="techs">${element.technologies[0]}</span>
                    <span class="techs">${element.technologies[1]}</span>
                    <span class="techs">${element.technologies[2]}</span>
                    <span class="techs">${element.technologies[3]}</span>
                </div>
                <a class="a-details" href=${element.linkRepo} target="_blank">Details</a>
                <p>${element.description}</p>
                `
        fragmentSnd.appendChild(div);
    }
    container.appendChild(fragmentSnd);
}