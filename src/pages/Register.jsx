import RegisterForm from "../features/Authentication/Register/RegisterForm";
import styles from "./Register.module.css";

export default function Register() {
  return (
    <main>
      <h1>Hello</h1>
      <h2>I'm a register page</h2>
      <section className={styles.register__info}>
        <ul>
          <li>Password must be at least 8 characters</li>
          <li>Password must contain at least 1 capital letter & 1 number </li>
        </ul>
      </section>
      <RegisterForm></RegisterForm>
    </main>
  );
}
