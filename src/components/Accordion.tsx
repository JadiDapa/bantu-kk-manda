import { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
  children: ReactNode;
  title: string;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between border md:border-2 border-grey p-[18px]"
        style={{ cursor: "pointer" }}
      >
        <div className=" text-sm md:text-lg">{title}</div>
        <div className="md:text-xl text-slate-500">
          <IoIosArrowDown
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "max-h-[500px] " : "max-h-0"
        } overflow-hidden border-grey transition-height duration-500`}
      >
        <div className="leading-4 md:leading-[18px] p-[18px] flex flex-col gap-4 text-sm md:text-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
