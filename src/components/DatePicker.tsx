import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const DatePicker = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="w-full p-[18px] bg-white flex flex-col gap-5 rounded-lg">
      <div className="md:text-lg font-semibold">
        Kapan Anda Membutuhkan Jasa? <span className="text-red-600">*</span>
      </div>
      <div className="w-full">
        <Calendar
          className={"w-full border-none"}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default DatePicker;
