import React from "react";

const FormAction = () => {
  const handleFormAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };
  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" placeholder="Name" name="name" />
        <br />
        <input type="email" placeholder="Email" name="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FormAction;
