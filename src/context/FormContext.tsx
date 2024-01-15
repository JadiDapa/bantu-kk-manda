import { ReactNode, createContext, useState } from "react";

interface FormData {
  regular1: boolean;
  regular2: boolean;
  regular3: boolean;
  premium1: boolean;
  premium2: boolean;
  premium3: boolean;
  tambahan1: boolean;
  tambahan2: boolean;
  userGender: string;
  massagerGender: string;
  selectedDate: string;
  selectedTime: string;
  total: string;
  note: string;
  name: string;
  email: string;
  phoneNumber: string;
  acceptPromotion: boolean;
  location: string;
  detailedAddress: string;
}

interface FormContextProps {
  formData: FormData;
  handleChange: (field: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  addItem: (field: string, value: string) => void;
  removeItem: (field: string, value: string) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    regular1: false,
    regular2: false,
    regular3: false,
    premium1: false,
    premium2: false,
    premium3: false,
    tambahan1: false,
    tambahan2: false,
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

  const handleSubmit = (e: React.FormEvent) => {
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
