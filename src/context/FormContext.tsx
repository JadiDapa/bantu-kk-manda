import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    regular1: "",
    regular2: "",
    regular3: "",
    premium1: "",
    premium2: "",
    premium3: "",
    tambahan1: "",
    tambahan2: "",
    userGender: "",
    massagerGender: "",
    selectedDate: "",
    selectedTime: "",
    total: "0",
    note: "",
    name: "",
    email: "",
    phoneNumber: "",
    acceptPromotion: false,
    location: "",
    detailedAddress: "",
  });

  const addItem = (field: string, value: string) => {
    const numericValue = parseFloat(value);
    setFormData({
      ...formData,
      [field]: true,
      total: (parseFloat(formData.total) + numericValue).toString(),
    });
  };

  const removeItem = (field: string, value: string) => {
    const numericValue = parseFloat(value);
    setFormData({
      ...formData,
      [field]: false,
      total: (parseFloat(formData.total) - numericValue).toString(),
    });
  };

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
    <FormContext.Provider
      value={{ formData, handleChange, handleSubmit, addItem, removeItem }}
    >
      {children}
    </FormContext.Provider>
  );
};
