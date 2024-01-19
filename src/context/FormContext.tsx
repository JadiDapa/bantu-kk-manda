import { ReactNode, createContext, useState } from "react";

interface FormData {
  regular1: number;
  regular2: number;
  regular3: number;
  premium1: number;
  premium2: number;
  premium3: number;
  tambahan1: number;
  tambahan2: number;
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

const defaultFormData: FormData = {
  regular1: 0,
  regular2: 0,
  regular3: 0,
  premium1: 0,
  premium2: 0,
  premium3: 0,
  tambahan1: 0,
  tambahan2: 0,
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
};

interface ValidatedData {
  userGender: boolean;
  massagerGender: boolean;
  selectedDate: boolean;
  selectedTime: boolean;
  note: boolean;
  name: boolean;
  email: boolean;
  phoneNumber: boolean;
  location: boolean;
  detailedAddress: boolean;
}

const defaultValidatedData = {
  userGender: false,
  massagerGender: false,
  selectedDate: false,
  selectedTime: false,
  note: false,
  name: false,
  email: false,
  phoneNumber: false,
  location: false,
  detailedAddress: false,
};

interface FormContextProps {
  formData: FormData;
  validatedData: ValidatedData;
  handleChange: (field: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  addItem: (field: string, value: string) => void;
  removeItem: (field: string, value: string) => void;
  dataValidating: (field: string, value: string) => void;
}

export const FormContext = createContext<FormContextProps>({
  formData: defaultFormData,
  validatedData: defaultValidatedData,
  handleChange: () => {},
  handleSubmit: () => {},
  addItem: () => {},
  removeItem: () => {},
  dataValidating: () => {},
});

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [validatedData, setValidatedData] =
    useState<ValidatedData>(defaultValidatedData);

  const addItem = (field: string, value: string) => {
    const numericValue = parseFloat(value);
    setFormData({
      ...formData,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [field]: formData[field] + 1,
      total: (parseFloat(formData.total) + numericValue).toString(),
    });
  };

  const removeItem = (field: string, value: string) => {
    const numericValue = parseFloat(value);
    setFormData({
      ...formData,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [field]: formData[field] - 1,
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

  const dataValidating = (field: string, value: string) => {
    setValidatedData({
      ...validatedData,
      [field]: value,
    });
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        handleChange,
        handleSubmit,
        addItem,
        removeItem,
        validatedData,
        dataValidating,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
