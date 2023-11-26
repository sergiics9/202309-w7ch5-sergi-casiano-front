import { useState, ChangeEvent, FormEvent } from 'react';
import Swal from 'sweetalert2';
import './login.scss';

interface UserLogin {
  email: string;
  passwd: string;
}

export function Login() {
  const [userLogin, setUserLogin] = useState<UserLogin>({
    email: '',
    passwd: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isFormValid = userLogin.email && userLogin.passwd;

    if (isFormValid) {
      console.log(userLogin);

      setUserLogin({
        email: '',
        passwd: '',
      });

      Swal.fire({
        title: 'Inicio de sesión exitoso',
        text: '¡Bienvenido de vuelta!',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          container: 'custom-swal-font',
        },
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          container: 'custom-swal-font',
        },
      });
    }
  };

  return (
    <>
      <div className="h3-container">
        <h3>LOG IN</h3>
      </div>
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={userLogin.email}
            onChange={handleChange}
          />
          <label htmlFor="passwd">Password: </label>
          <input
            type="password"
            name="passwd"
            value={userLogin.passwd}
            onChange={handleChange}
          />
          <button className="button-register" type="submit">
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
