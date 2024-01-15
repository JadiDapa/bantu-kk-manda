import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { ViewContext } from "../context/ViewContext";

interface NavbarProps {
  title: string;
  isNext?: boolean;
  verificating?: boolean;
}

const Navbar = ({ title, isNext, verificating }: NavbarProps) => {
  const [scrolling, setScrolling] = useState(false);
  const { setView } = useContext(ViewContext) ?? { setView: () => {} };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);
  return (
    <div>
      <div
        className={`${scrolling ? "bg-white shadow-md" : "bg-[#eff3f7]"} ${
          verificating && "justify-center bg-white "
        }  h-[60px] w-full md:px-[25%] px-4 flex items-center fixed top-0 transition-all duration-500 z-50`}
      >
        <div
          onClick={() => setView("menu")}
          className="cursor-pointer font-semibold text-lg flex gap-1 items-center"
        >
          {isNext && (
            <span className="text-4xl ">
              <IoIosArrowBack />
            </span>
          )}
          {title}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
