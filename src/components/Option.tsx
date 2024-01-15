import { useContext, useId } from "react";
import { FormContext } from "../context/FormContext";

interface OptionProps {
  question: string;
  opt1: string;
  opt2: string;
  input: string;
}

const Option = ({ question, opt1, opt2, input }: OptionProps) => {
  const option1ID = useId();
  const option2ID = useId();
  const groupName = useId();

  const { handleChange } = useContext(FormContext);

  return (
    <div className="bg-white rounded-lg">
      <div className="md:text-lg font-semibold px-[18px] pt-3">
        {question} <span className="text-red-600">*</span>
      </div>
      <div className="text-sm md:text-[17px]">
        <form action="">
          <div className="border-b-2 border-grey px-[18px] py-3 flex items-center gap-2">
            <input
              onChange={(e) => handleChange(input, e.target.value)}
              id={option1ID}
              type="radio"
              className=""
              name={groupName}
              value={opt1}
            />
            <label htmlFor={option1ID}>{opt1}</label>
          </div>
          <div className="border-b-2 border-grey px-[18px] py-3 flex items-center gap-2">
            <input
              onChange={(e) => handleChange(input, e.target.value)}
              id={option2ID}
              type="radio"
              className=""
              name={groupName}
              value={opt2}
            />
            <label htmlFor={option2ID}>{opt2}</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Option;
