document.getElementById('addSongButton').addEventListener('click', function() {
    const songInput = document.getElementById('songInput');
    const songURL = songInput.value.trim();

    if (songURL) {
        const listItem = document.createElement('li');
        listItem.style.marginBottom = '10px'; // Añade margen automáticamente
        
        const songLink = document.createElement('a');
        songLink.href = songURL;
        songLink.target = '_blank'; // Abre en una nueva pestaña
        songLink.rel = 'noopener noreferrer';
        songLink.textContent = songURL;
        songLink.style.marginRight = '10px'; // Espacio entre el enlace y el botón
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        listItem.appendChild(songLink);
        listItem.appendChild(deleteButton);
        document.getElementById('musicList').appendChild(listItem);
        songInput.value = ''; // Limpia el campo de entrada
    } else {
        alert('Por favor, introduce una URL válida.');
    }
});


