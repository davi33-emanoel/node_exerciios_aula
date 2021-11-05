import fetch from 'node-fetch';

function geraUsuario (numeroUsuario){
    fetch('https://randomuser.me/api/?results=5'+ numeroUsuario)
    .then ((response) => {
        if (response.ok){
            return response.json()
        }
    })
    .then ((data) =>{
        console.log(data)
    })
    
}
geraUsuario(2)