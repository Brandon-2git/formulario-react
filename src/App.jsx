import "./App.css";

function App() {
  const enviarFormulario = (e) => {
    e.preventDefault();

    alert("Formulario enviado");
  };

  return (
    <div className="contenedor">
      <form className="formulario" onSubmit={enviarFormulario}>
        <h1>Mi Formulario</h1>

        <input type="text" placeholder="Nombre" />

        <input type="email" placeholder="Correo" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;