import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/contactform/InputField"
import TextAreaField from "../components/contactform/TextAreaField"

import './Contact.css';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};

    if (name.length < 6 || name.length > 16) {
      errors.name = "El nombre debe tener entre 6 y 16 caracteres.";
    }

    if (!/^\d{10,11}$/.test(phone)) {
      errors.phone = "El teléfono debe tener entre 10 y 11 dígitos numéricos.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "El correo electrónico ingresado no es válido.";
    }

    if (note.length < 50 || note.length > 250) {
      errors.note = "La nota debe tener entre 50 y 250 caracteres.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Formulario enviado:", { name, phone, email, note });

      // Simulación de un proceso asíncrono, por ejemplo, una solicitud HTTP
      setTimeout(() => {
        alert("Formulario de contacto enviado con éxito");

        // Redirige a la página de inicio después de la alerta
        navigate("/");
      }, 0);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h4>CONTACTA<br></br>con nuestros expertos en clorofila</h4>
        <InputField
          label="Nombre"
          type="text"
          id="name"
          value={name}
          onChange={setName}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
        <InputField
          label="Teléfono"
          type="tel"
          id="phone"
          value={phone}
          onChange={setPhone}
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
        <InputField
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={setEmail}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <TextAreaField label="Nota" id="note" value={note} onChange={setNote} />
        {errors.note && <p className="error-message">{errors.note}</p>}
        <button className="button-contact" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;