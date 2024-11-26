const form = document.getElementById("songForm");
const tableBody = document.getElementById("songsTable").querySelector("tbody");

// Cargar canciones
async function loadSongs() {
  const response = await fetch("http://localhost:3001/songs");
  const songs = await response.json();
  tableBody.innerHTML = "";
  songs.forEach((song) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${song.album}</td>
      <td>${song.year}</td>
      <td><a href="${song.coverUrl}" target="_blank">Ver</a></td>
      <td><a href="${song.youtubeUrl}" target="_blank">Ver</a></td>
      <td><button onclick="deleteSong('${song._id}')">Eliminar</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Guardar canción
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const song = {};
  formData.forEach((value, key) => {
    song[key] = value;
  });

  try {
     await fetch("http://localhost:3001/songs", {
     method: "POST", 
     headers: { "Content-Type": "application/json" }, 
     body: JSON.stringify(song), 
    }); 
    
    form.reset(); 
    loadSongs(); } catch (error) { 
    console.error('Error al guardar la canción:', error); 
  } 
});



// Eliminar canción
async function deleteSong(id) {
  await fetch(`http://localhost:3001/songs/${id}`, { method: "DELETE" });
  loadSongs();
}

// Inicializar
loadSongs();
