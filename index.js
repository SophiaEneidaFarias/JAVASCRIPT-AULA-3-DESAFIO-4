document.getElementById('mostrarImagemBtn').addEventListener('click', mostrarImagem);

function mostrarImagem() {
   
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) { 
                throw new Error('Erro ao buscar imagem');
            }
            return response.json(); 
        })
        .then(data => {
        
            const imagemDiv = document.getElementById('imagem');
            const img = document.createElement('img');
            img.src = data.message; 
            img.alt = 'Imagem aleatória de cachorro'; 
            img.style.maxWidth = '500px';  


            imagemDiv.innerHTML = '';
            imagemDiv.appendChild(img);
        })
        .catch(error => {
           
            console.error('Erro ao carregar a imagem:', error);
            const imagemDiv = document.getElementById('imagem');
            imagemDiv.innerHTML = '<p>Erro ao carregar a imagem.</p>';
        });
}