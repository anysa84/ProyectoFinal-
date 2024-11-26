


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const miURL ="mongodb+srv://magnus87:root1234@intro.tuyod.mongodb.net/canciones?retryWrites=true&w=majority&appName=intro";
//mongodb+srv://Anahi:<db_password>@intro.tuyod.mongodb.net/?retryWrites=true&w=majority&appName=intro
//mongodb+srv://<username>:<password>@cluster0.mongodb.net/canciones?retryWrites=true&w=majority




const app = express();
const PORT = 3001;


const path = require("path");
app.use(express.static(path.join(__dirname,"./Public")))


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB

mongoose.connect(miURL, {

  //useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch((error) => console.error("Error al conectar con MongoDB Atlas:", error));

// Esquema de Canciones
const songSchema = new mongoose.Schema({

  album: String,
  year: Number,
  coverUrl: String,
  youtubeUrl: String,
});

const Song = mongoose.model("Song", songSchema);

// Rutas
app.get("/songs", async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

app.post("/songs", async (req, res) => {
  const newSong = new Song(req.body);
  await newSong.save();
  res.json(newSong);
});

app.delete("/songs/:id", async (req, res) => {
  await Song.findByIdAndDelete(req.params.id);
  res.json({ message: "Canción eliminada" });
});

// Modelo de usuario
const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    apodo: String,
    email: String,
    password: String,
});

const user = mongoose.model('user', userSchema);

// Ruta para registrar usuarios
app.post('/register', async (req, res) => {
    try {
        const { nombre, apellido, apodo, email, password } = req.body;
        const user = new user({ nombre, apellido, apodo, email, password });
        await user.save();
        res.status(201).send('Usuario registrado con éxito');
    } catch (error) {
        res.status(500).send('Error al registrar el usuario');
    }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
