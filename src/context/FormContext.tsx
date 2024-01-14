import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    note: "",
    name: "",
    email: "",
    phoneNumber: "",
    acceptPromotion: false,
    location: "",
    detailedAddress: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContext.Provider value={{ formData, handleChange, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
};
