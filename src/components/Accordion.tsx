import { IoIosArrowDown } from "react-icons/io";

const Accordion = () => {
  return (
    <div className="w-full h-[54px] bg-white flex items-center px-[18px] justify-between">
      <div className="text-lg">Lorem ipsum dolor sit amet.</div>
      <div className="text-2xl text-slate-500">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Accordion;
