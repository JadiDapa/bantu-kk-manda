import { ChangeEvent, useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

const TimePicker: React.FC = () => {
  const { handleChange } = useContext(FormContext) ?? {
    handleChange: () => {},
  };
  const [time, setTime] = useState<string>("12:00");

  function arrangeHour(e: ChangeEvent<HTMLSelectElement>) {
    const hour = e.target.value;
    updateTime(hour, time.split(":")[1] || "00");
  }

  function arrangeMinute(e: ChangeEvent<HTMLSelectElement>) {
    const minute = e.target.value;
    updateTime(time.split(":")[0] || "12", minute);
  }

  function updateTime(hour: string, minute: string) {
    const formattedTime = `${hour}:${minute}`;
    setTime(formattedTime);
    handleChange("selectedTime", formattedTime);
  }

  const hours = [
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];
  const minutes = ["00", "30"];

  return (
    <div className="p-[18px] bg-white rounded-lg flex flex-col gap-4">
      <div className="md:text-lg font-semibold">
        Pukul berapa Anda membutuhkan layanan?{" "}
        <span className="text-red-600">*</span>
      </div>
      <div className="border-[3px] text-lg py-2 md:py-3 rounded-xl border-grey hover:border-magenta w-full flex items-center justify-evenly transition-all duration-300">
        <select
          onChange={arrangeHour}
          id="hours"
          className="flex-1 flex justify-center text-center appearance-none outline-none ring-transparent"
        >
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>

        <span className="flex justify-center text-center">:</span>
        <select
          onChange={arrangeMinute}
          id="minutes"
          className="flex-1 flex justify-center text-center appearance-none outline-none ring-transparent"
        >
          {minutes.map((minute) => (
            <option key={minute} value={minute}>
              {minute}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TimePicker;
