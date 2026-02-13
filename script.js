fetch("https://api.sampleapis.com/switch/games")
    .then(res => {
        return res.json()
    })
    .then(data => {
        data.forEach(game => {
            const nameList = `<li>${game.name}</li>`;
            document.querySelector('ul').insertAdjacentHTML('beforeend', nameList); 
        });
    })
    .catch(error => console.log(error))