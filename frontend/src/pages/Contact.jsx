import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../src/Components/contactform/InputField";
import TextAreaField from "../../src/Components/contactform/TextAreaField";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", { name, phone, email, note });

    // Simulación de un proceso asíncrono, por ejemplo, una solicitud HTTP
    setTimeout(() => {
      alert("Formulario de contacto enviado con éxito");

      // Redirige a la página de inicio después de la alerta
      navigate("/");
    }, 0);
  };

  return (
    <div className="text-center flex flex-col items-center justify-center min-h-screen bg-gray-300 text-black">
      <form className="max-w-md mx-auto p-8 bg-white rounded-lg" onSubmit={handleSubmit}>
        <h4 className="mb-4">CONTACTA CON CASATE CONMIGO</h4>
        <InputField
          label="Nombre"
          type="text"
          id="name"
          value={name}
          onChange={setName}
        />
        <InputField
          label="Teléfono"
          type="tel"
          id="phone"
          value={phone}
          onChange={setPhone}
        />
        <InputField
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={setEmail}
        />
        <TextAreaField label="Nota" id="note" value={note} onChange={setNote} />
        <button className="border border-green-600 bg-green-600 text-white px-6 py-4 rounded-lg hover:border-green-700 hover:bg-green-700 hover:text-black font-bold transition duration-300" type="submit">Enviar</button>
        <p className="mt-4 text-gray-600 text-sm">Al contactar declaras haber leído nuestra política de privacidad.</p>
      </form>
    </div>
  );
};

export default ContactForm;
