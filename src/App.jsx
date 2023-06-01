import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [state, setState] = useState({
    cancion: "",
    album: "",
    video: false,
    errores: "",
    formOk: false,
  });

  const handleChange = (e) => {
    if (e.target.name == "nombre") {
      setState({ ...state, cancion: e.target.value });
    } else if (e.target.name == "album") {
      setState({ ...state, album: e.target.value });
    } else if (e.target.name == "video") {
      setState({ ...state, video: e.target.checked });
    }
  };

  const validarNombreCancion = (nombre) => {
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
    return valido;
  };

  const validarAlbum = (album) => {
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
    return valido;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombreValidado = validarNombreCancion(state.cancion);
    const albumValidado = validarAlbum(state.album);
    if (nombreValidado && albumValidado) {
      console.log(albumValidado + "validado");
      console.log(nombreValidado);
      console.log("validado");
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
          <h1>Carga de Cancion</h1>
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="inputForm">
              <label htmlFor="cancion">Nombre de la canción</label>
              <input
                id="cancion"
                type="text"
                name="nombre"
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
              <label htmlFor="video">¿Tiene video?</label>
              <input
                id="video"
                type="checkbox"
                name="video"
                checked={state.video}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Agregar</button>
          </form>
        </div>
      )}
    </>
  );
}
export default App;
