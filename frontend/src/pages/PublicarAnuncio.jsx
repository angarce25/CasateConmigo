import React, { useState } from 'react';

const PublicarAnuncioForm = () => {
  const [foto, setFoto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log("Formulario enviado:", { foto, descripcion, precio });
    // Aquí puedes realizar la lógica para enviar los datos a través de una API o realizar otras acciones
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={boxStyle}>
          <div style={inputGroupStyle}>
            <label htmlFor="foto" style={labelStyle}>Foto:</label>
            <input 
              type="text" 
              id="foto" 
              name="foto" 
              value={foto} 
              onChange={(e) => setFoto(e.target.value)} 
              placeholder="URL de la foto" 
              style={inputStyle} 
              required 
            />
          </div>
          <div style={inputGroupStyle}>
            <label htmlFor="descripcion" style={labelStyle}>Descripción:</label>
            <textarea 
              id="descripcion" 
              name="descripcion" 
              value={descripcion} 
              onChange={(e) => setDescripcion(e.target.value)} 
              rows="4" 
              cols="50" 
              placeholder="Descripción del producto" 
              style={textareaStyle} 
              required 
            />
          </div>
          <div style={inputGroupStyle}>
            <label htmlFor="precio" style={labelStyle}>Precio:</label>
            <input 
              type="number" 
              id="precio" 
              name="precio" 
              value={precio} 
              onChange={(e) => setPrecio(e.target.value)} 
              placeholder="Precio del producto" 
              style={inputStyle} 
              required 
            />
          </div>
        </div>
        <div style={buttonContainerStyle}>
          <button type="submit" style={buttonStyle}>Publicar Anuncio</button>
        </div>
      </form>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Ajusta la altura según tu preferencia
};

const formStyle = {
  width: '400px', // Ajusta el ancho del formulario según tu preferencia
};

const boxStyle = {
  border: '1px solid #ccc', // Borde fino
  borderRadius: '5px', // Bordes redondeados
  padding: '20px', // Espacio interior
};

const inputGroupStyle = {
  marginBottom: '20px', // Ajusta el margen inferior entre los grupos de entrada
};

const labelStyle = {
  marginRight: '10px', // Ajusta el margen derecho entre la etiqueta y el campo de entrada
};

const inputStyle = {
  width: '100%', // Ajusta el ancho del campo de entrada según tu preferencia
  padding: '8px', // Ajusta el relleno del campo de entrada según tu preferencia
  borderRadius: '5px',
  border: '1px solid #ccc', // Ajusta el borde del campo de entrada según tu preferencia
};

const textareaStyle = {
  width: '100%', // Ajusta el ancho del campo de texto según tu preferencia
  padding: '8px', // Ajusta el relleno del campo de texto según tu preferencia
  borderRadius: '5px',
  border: '1px solid #ccc', // Ajusta el borde del campo de texto según tu preferencia
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end', // Alinea el botón hacia la derecha
};

const buttonStyle = {
  backgroundColor: '#64DE95',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  borderRadius: '5px',
};

export default PublicarAnuncioForm;
