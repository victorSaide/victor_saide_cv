fetch('./assets/js/data.json')
    .then(response => response.json())
    .then(data => {
        for (let i of data) {
            console.log(i)
        }
        showCards(data, cards)
    })
    .catch(function(err){
        console.log(err);
    })

    function showCards(array, container) {
        const fragment = document.createDocumentFragment();
        for (let element of array) {
            container.innerHTML = '';
            let div = document.createElement('div');
            div.className = "jobs";
            div.innerHTML = `
                <h3>${element.puesto}</h3>
                <p>${element.empresa}</p>
                <div class="p-flex">
                    <p>${element.inicio}</p>
                    <p>${element.fin}</p>
                </div>
                <p>${element.tareas}</p>
                `
                fragment.appendChild(div);
        }
        container.appendChild(fragment);
    }