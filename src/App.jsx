import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [state, setState] = useState({
    cancion: "",
    album: "",
    artista: "",
    urlImagen:
      "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    video: false,
    errores: "",
    formOk: false,
  });
 

  const handleChange = (e) => {

    if(e.target.name == "video"){
      setState({ ...state, [e.target.name]: e.target.checked });
    }else{
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };
  
  const validarNombreCancion = (nombre) => {
    console.log("VAlidadndo nombre" + state.cancion);
    let valido = false;
    const nombreSinEspacios = nombre.trim();
    if (nombreSinEspacios == "" || nombreSinEspacios.length < 3) {
      setState((prevState) => ({
        ...prevState,
        errores: "Por favor chequea que la información sea correcta.",
      }));
    } else {
      valido = true;
    }
    console.log(valido ? "Nombre valido" : "Nombre no valido");
    return valido;
  };

  const validarAlbum = (album) => {
    console.log("VAlidadndo album");
    let valido = false;
    const albumSinEspacios = album.trim();
    if (albumSinEspacios === "" || albumSinEspacios.length < 6) {
      setState((prevState) => ({
        ...prevState,
        errores: "Por favor chequea que la información sea correcta.",
      }));
    } else {
      valido = true;
    }
    console.log(valido ? "Album valido" : "Album no valido");
    return valido;
  };

  const validarArtista = (artista) => {
    console.log("VAlidadndo artista");
    let valido = false;
    const artistaSinEspacios = artista.trim();
    if (artistaSinEspacios === "") {
      setState((prevState) => ({
        ...prevState,
        errores: "Por favor chequea que la información sea correcta.",
      }));
    } else {
      valido = true;
    }
    console.log(valido ? "Artista valido" : "Artista no valido");
    return valido;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombreValidado = validarNombreCancion(state.cancion);
    const albumValidado = validarAlbum(state.album);
    const artistaValidado = validarArtista(state.artista);
    if (nombreValidado && albumValidado && artistaValidado) {
      setState({ ...state, formOk: true });
    }
  };

  return (
    <>
      {state.formOk ? (
        <Card props={state} />
      ) : (
        <div>
         
          {state.errores !== "" && (
            <div className="error">
              <h3>{state.errores}</h3>
            </div>
          )}

          <form className="formulario" onSubmit={handleSubmit}>
            <h1 className="titulo">Carga de Cancion</h1>
            <div className="inputForm">
              <label htmlFor="cancion">Nombre de la canción</label>
              <input
                id="cancion"
                type="text"
                name="cancion"
                onChange={handleChange}
              />
            </div>
            <div className="inputForm">
              <label htmlFor="album">Álbum</label>
              <input
                id="album"
                type="text"
                name="album"
                onChange={handleChange}
              />
            </div>
            <div className="inputForm">
              <label htmlFor="artista">Artista</label>
              <input
                id="artista"
                type="text"
                name="artista"
                onChange={handleChange}
              />
            </div>
            <div className="inputForm">
              <label htmlFor="imagen">Url de imagen</label>
              <input
                id="imagen"
                type="text"
                name="urlImagen"
                onChange={handleChange}
              />
            </div>
            <div className="inputVideo">
              <label htmlFor="video">¿Tiene video?</label>
              <input
                id="video"
                type="checkbox"
                name="video"
                checked={state.video}
                onChange={handleChange}
              />
            </div>
            <button className="botonAgregar" type="submit">
              Agregar
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default App;
