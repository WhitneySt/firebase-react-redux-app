import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { loginFail, loginRequest, loginSuccess, logout } from "./authSlice";
import { auth } from "../../Firebase/firebaseConfig";

//Acción asícrona para crear un usuario con email y contraseña
export const actionRegisterWithEmailAndPassword = ({
  name,
  email,
  password,
  photo,
}) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
        const userAuth = {
          id: user.uid,
          name: name,
          photo: photo,
          accessToken: user.accessToken,
          email: user.email,
        };
        dispatch(loginSuccess(userAuth));
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error));
    }
  };
};

//Acción asícrona para iniciar sesión con email y contraseña
export const actionLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userAuth = {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
        accessToken: user.accessToken,
        email: user.email,
      };
      dispatch(loginSuccess(userAuth));
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error));
    }
  };
};

//Acción asícrona para cerrar sesión
export const actionLogout = () => {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            await signOut(auth);
           dispatch(logout()) 
        } catch (error) {
            console.error(error);
            dispatch(loginFail(error));
        }
    }
}
