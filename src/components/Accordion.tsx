import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between border-2 border-grey p-[18px]"
        style={{ cursor: "pointer" }}
      >
        <div className="text-lg">Lorem ipsum dolor sit amet.</div>
        <div className="text-2xl text-slate-500">
          <IoIosArrowDown
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "max-h-[500px] " : "max-h-0"
        } overflow-hidden border-grey transition-height duration-300`}
      >
        <div className="leading-[18px] p-[18px] flex flex-col gap-4 text-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
