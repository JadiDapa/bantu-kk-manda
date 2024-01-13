interface OptionProps {
  question: string;
  opt1: string;
  opt2: string;
}

const Option = ({ question, opt1, opt2 }: OptionProps) => {
  return (
    <div className="bg-white rounded-lg">
      <div className="text-xl font-semibold px-[18px] py-3">
        {question} <span className="text-red-600">*</span>
      </div>
      <div className="text-lg">
        <div className="border-b-2 border-grey px-[18px] py-2 flex items-center gap-2">
          <input id="opt1" type="radio" className="" />
          <label htmlFor="opt1">{opt1}</label>
        </div>
        <div className="border-b-2 border-grey px-[18px] py-2 flex items-center gap-2">
          <input id="opt2" type="radio" className="" />
          <label htmlFor="opt2">{opt2}</label>
        </div>
      </div>
    </div>
  );
};

export default Option;
