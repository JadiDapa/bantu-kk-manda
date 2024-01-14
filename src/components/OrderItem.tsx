import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface OrderItemProps {
  title: string;
  menus: { item: string; price: string; image: string }[];
  image: string;
}

const OrderItem = ({ title, image, menus }: OrderItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-[18px] bg-white rounded-lg flex flex-col">
      <div className="px-[18px] text-xl font-semibold">{title} </div>
      <div className="flex p-[18px] gap-x-[18px] border-b-2 border-grey">
        <img src={image} alt="" className="w-[68px] rounded-md" />
        <div className="flex flex-col justify-between">
          <div className="font-[500] leading-3">{title}</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center px-4 py-2 rounded-lg border gap-4 border-magenta text-magenta hover:bg-magenta hover:text-white duration-300 transition-all"
          >
            <span>{isOpen ? "Sembunyikan" : "Selengkapnya"}</span>
            <span>
              <IoIosArrowDown
                className={`text-xl font-thin duration-500 transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      {menus.map((menu) => (
        <div
          className={`${
            isOpen ? "max-h-[500px] " : "max-h-0"
          } flex px-[18px] overflow-hidden transition-all duration-500 justify-between items-center border-b-2 border-grey`}
        >
          <div className="flex py-[18px]  gap-x-[18px] ">
            <img src={menu.image} alt="" className="w-[68px] rounded-md" />
            <div className="flex flex-col justify-center gap-4">
              <div className="font-[500] leading-3">{menu.item}</div>
              <div className="text-lg text-blue te leading-3">
                Rp{menu.price}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="border border-magenta flex items-center justify-center w-8 h-8 rounded-md">
              +
            </div>
            <div className="translate-y-1">0</div>
            <div className="border border-magenta flex items-center justify-center w-8 h-8 rounded-md">
              -
            </div>
          </div>
        </div>
      ))}
      <div className="pt-5  text-magenta text-center border-grey">
        Lihat daftar harga Massage
      </div>
    </div>
  );
};

export default OrderItem;
