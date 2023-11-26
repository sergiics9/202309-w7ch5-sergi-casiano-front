import { useState, ChangeEvent, FormEvent } from 'react';
import Swal from 'sweetalert2';
import './register.scss';

interface UserRegister {
  email: string;
  passwd: string;
  name: string;
  surname: string;
  age: number;
}

export function Register() {
  const [userRegister, setUserRegister] = useState<UserRegister>({
    email: '',
    passwd: '',
    name: '',
    surname: '',
    age: 1,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserRegister({
      ...userRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isFormValid =
      userRegister.email &&
      userRegister.passwd &&
      userRegister.name &&
      userRegister.surname &&
      userRegister.age;

    if (isFormValid) {
      console.log(userRegister);

      setUserRegister({
        email: '',
        passwd: '',
        name: '',
        surname: '',
        age: 0,
      });

      Swal.fire({
        title: 'Registro Completado',
        text: '¡Tu registro ha sido completado exitosamente!',
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
        <h3>REGISTER</h3>
      </div>

      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={userRegister.email}
            onChange={handleChange}
          />
          <label htmlFor="passwd">Password: </label>
          <input
            type="password"
            name="passwd"
            value={userRegister.passwd}
            onChange={handleChange}
          />
          <label htmlFor="name">Name: </label>
          <input
            type="name"
            name="name"
            value={userRegister.name}
            onChange={handleChange}
          />
          <label htmlFor="surname">Surname: </label>
          <input
            type="surname"
            name="surname"
            value={userRegister.surname}
            onChange={handleChange}
          />
          <label htmlFor="age">Age: </label>
          <input
            type="age"
            name="age"
            value={userRegister.age}
            onChange={handleChange}
          />
          <button className="button-register" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
