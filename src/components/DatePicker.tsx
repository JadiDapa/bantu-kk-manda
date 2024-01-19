import { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FormContext } from "../context/FormContext";

const DatePicker: React.FC = () => {
  const { handleChange } = useContext(FormContext);
  const [value, onChange] = useState<Date>(new Date());

  return (
    <div className="w-full p-[18px] bg-white flex flex-col gap-5 rounded-lg">
      <div className="md:text-lg font-semibold">
        Kapan Anda Membutuhkan Jasa? <span className="text-red-600">*</span>
      </div>
      <div className="w-full">
        <Calendar
          className={"w-full border-none"}
          onChange={() => {
            onChange;
            handleChange("selectedDate", value.toDateString());
          }}
          value={value}
        />
      </div>
    </div>
  );
};

export default DatePicker;
