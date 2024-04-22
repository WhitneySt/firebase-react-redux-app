import React, { useState } from "react";
import imagePhoto from "../../assets/photo-camera_711191.png";
import imageUser from "../../assets/user_709618.png";
import imageEmail from "../../assets/email_1159936.png";
import imagePassword from "../../assets/lock_8472244.png";
import './register.scss';

const initialImage =
  "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg";

const Register = () => {
  const [image, setImage] = useState(initialImage);
  return (
    <main className="register">
      <figure className="register__image">
        <img src={image} alt="avatar" />
      </figure>
      <form action="">
        <label htmlFor="photo">
          <img src={imagePhoto} alt="photo" />
          <input type="file" name="" id="photo" />
        </label>
        <label htmlFor="name">
          <img src={imageUser} alt="name" />
          <input type="text" placeholder="Nombre completo" id="name" />
        </label>
        <label htmlFor="email">
          <img src={imageEmail} alt="email" />
          <input type="email" placeholder="ejemplo@email.com" id="email" />
        </label>
        <label htmlFor="password">
          <img src={imagePassword} alt="password" />
          <input type="password" placeholder="Contraseña" id="password" />
        </label>
        <label htmlFor="repeatPassword">
          <img src={imagePassword} alt="password" />
          <input type="password" placeholder="Confirmar Contraseña" id="repeatPassword" />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </main>
  );
};

export default Register;
