import React from "react";

const Form = (props) => {
  const { change, submit, errors } = props;
  const { username, email, password, tos } = props.values;

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newVal = type === "checkbox" ? checked : value;
    change(name, newVal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div>
      <h1>User Onboarding Form</h1>
      <p>
        {errors.username}
        {errors.email}
        {errors.password}
        {errors.tos}
      </p>

      <form onSubmit={onSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <label>
          Terms of Service:
          <input type="checkbox" name="tos" checked={tos} onChange={onChange} />
        </label>
        <input type="submit" value="create new user" />
      </form>
    </div>
  );
};
export default Form;
