import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = props => {
  const email = useRef();
  const password = useRef();
  const customerName = useRef();
  const address = useRef();

  const existingUserCheck = () => {
    return fetch(`http://localhost:5000/customers?email=${email.current.value}`)
      .then(_ => _.json())
      .then(user => {
        if (user.length) {
          return user[0];
        }
        return false;
      });
  };

  const handleLogin = e => {
    e.preventDefault();

    existingUserCheck().then(exists => {
      if (exists && exists.password === password.current.value) {
        localStorage.setItem("kennel_customer", exists.id);
        props.history.push("/");
      } else if (exists && exists.password !== password.current.value) {
        alert("Password does not match");
      } else if (!exists) {
        fetch("http://localhost:5000/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            name: customerName.current.value,
            address: address.current.value
          })
        })
          .then(_ => _.json())
          .then(response => {
            localStorage.setItem("kennel_customer", response.id);
            props.history.push("/");
          });
      }
    });
  };

  return (
    <main className="container--login">
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Nashville Kennels</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input ref={email} type="email" id="email" className="form-control" placeholder="Email address" required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
          </fieldset>
          <fieldset>
            <button type="submit">Sign in</button>
          </fieldset>
        </form>
      </section>
      <section className="link--register">
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  );
};
export default Login;
