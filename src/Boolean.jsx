import { useState } from "react";

function Boolean() {
  const [boolean, setboolean] = useState(true);

  let colorTexto;
  let mensaje;

  if (boolean == true) {
    colorTexto = "blue";
    mensaje = "El booleano es Verdadero";
  } else {
    colorTexto = "red";
    mensaje = "El booleano es Falso";
  }

  return (
    <div>
      <h3 style={{ color: colorTexto }}>{mensaje}</h3>
      <button onClick={() => setboolean(!boolean)}>Cambiar booleano</button>
    </div>
  );
}

export default Boolean;
