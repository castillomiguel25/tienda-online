import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import firebaseApp from './Callfirebase/firebase';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import uno from '@icons/one.webp';
import Image from 'next/image';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

function Logins() {
  const [user, setUser] = useState(null);
  console.log(user);
  const [isRegister, setIsRegister] = useState(false);
  const firestore = getFirestore(firebaseApp);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        if (location.pathname === '/User') {
          location.href = '/';
        }
        setUser(userFirebase);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  async function registerUser(email, password) {
    const infUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log(infUser);
    console.log(infUser.user.uid);
    const docuRef = doc(firestore, `usuarios/${infUser.user.uid}`);
    setDoc(docuRef, { correo: email });
  }

  function submitHandler(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log('submit', email, password);
    if (isRegister) {
      registerUser(email, password);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  function handleAuth() {
    signInWithRedirect(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log('ha iniciado sesión');
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  }

  return (
    <div className="lg:h-[660px] grid lg:grid-cols-2 border">
      <div className="flex items-center justify-center mb-10">
        <div className="p-8 bg-white rounded-lg shadow-xl">
          <form onSubmit={submitHandler}>
            <fieldset>
              <legend>
                <b>
                  <h1>{isRegister ? 'Registrate' : 'Inicia Sesión'}</h1>
                </b>
              </legend>

              <div className="mb-4">
                <input type="text" name="email" id="email" className="border rounded-lg px-4 py-2 w-full" required />
                <label htmlFor="email" className="block mt-2">
                  Email
                </label>
              </div>

              <div className="mb-4">
                <input type="password" name="password" id="password" className="border rounded-lg px-4 py-2 w-full" required />
                <label htmlFor="password" className="block mt-2">
                  Contraseña
                </label>
              </div>

              <div className="flex flex-col items-center">
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value={isRegister ? 'Registrar' : 'Iniciar Sesión'} name="submit" id="submit" />

                <div
                  className="google-btn text-center cursor-pointer mt-5"
                  role="button"
                  tabIndex="0"
                  onClick={handleAuth}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      handleAuth();
                    }
                  }}
                >
                  <div className="google-icon-wrapper text-center"></div>
                  <p className="btn-text">
                    <b>Sign in with Google</b>
                  </p>
                </div>

                <button className="text-blue-500 hover:underline" onClick={() => setIsRegister(!isRegister)}>
                  {isRegister ? 'Ya tengo una cuenta' : 'Quiero Registrarme'}
                </button>
              </div>
            </fieldset>
          </form>
          <div className="text-center max-w-md mx-auto p-6 flex justify-center items-center">
            <Link href="/">
              <Button className="dark:bg-emerald-500 dark:hover:bg-emerald-600 bg-indigo-500 hover:bg-indigo-600 text-center">Inicio</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-10">
        <Image src={uno} alt="img-presentation"></Image>
      </div>
    </div>
  );
}

export default Logins;
