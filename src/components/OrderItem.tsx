// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Modal from "./Modal";
import { FormContext } from "../context/FormContext";

interface MenusObjectProps {
  item: string;
  price: string;
  image: string;
  code: string;
  is_multiple: boolean;
}

interface OrderItemProps {
  title: string;
  image: string;
  menus: MenusObjectProps[];
}

const OrderItem = ({ title, image, menus }: OrderItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { formData, addItem, removeItem } = useContext(FormContext);

  return (
    <>
      <div className="py-[18px] bg-white rounded-lg flex flex-col">
        <div className="px-[18px] md:text-lg font-semibold">{title} </div>
        <div className="flex p-[18px] gap-x-[18px] ">
          <img src={image} alt="" className="w-[60px] md:w-[70px] rounded-md" />
          <div className="flex flex-col justify-between max-md:w-full">
            <div className="max-md:text-sm leading-3 font-medium">{title}</div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex max-md:w-full justify-center md:justify-between items-center px-4 py-2 rounded-lg border gap-4 border-magenta text-magenta hover:bg-magenta hover:text-white  duration-300 transition-all"
            >
              <span className="max-md:text-sm md:p-0.5">
                {isOpen ? "Sembunyikan" : "Selengkapnya"}
              </span>
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
            key={menu.code}
            className={`${
              isOpen ? "max-h-[500px] " : "max-h-0"
            } flex px-[18px] overflow-hidden transition-all duration-500 justify-between items-center border-t border-grey`}
          >
            <div className="flex py-[18px]  gap-x-[18px] ">
              <img
                src={menu.image}
                alt=""
                className="w-[60px] md:w-[70px] rounded-md"
              />
              <div className="flex flex-col justify-center gap-4">
                <div className="max-sm:text-sm font-medium leading-3">
                  {menu.item}
                </div>
                <div className="md:text-lg font-medium  text-blue te leading-3">
                  Rp{Number(menu.price).toLocaleString("id-ID")}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div
                onClick={() => {
                  if (formData[menu.code] > 0) {
                    if (menu.is_multiple) {
                      addItem(menu.code, menu.price);
                    } else {
                      return;
                    }
                  } else {
                    addItem(menu.code, menu.price);
                  }
                }}
                className={` ${
                  !menu.is_multiple && formData[menu.code] > 0
                    ? "border-darkgrey"
                    : "border-magenta"
                } border cursor-pointer  flex items-center justify-center w-6 md:w-8 aspect-square rounded-md`}
              >
                +
              </div>
              <div className="translate-y-1">{formData[menu.code]}</div>
              <div
                onClick={() => {
                  if (formData[menu.code] > 0) {
                    removeItem(menu.code, menu.price);
                  }
                }}
                className={`border cursor-pointer ${
                  formData[menu.code] > 0 ? "border-magenta" : "border-darkgrey"
                } flex items-center justify-center w-6 md:w-8 aspect-square rounded-md`}
              >
                -
              </div>
            </div>
          </div>
        ))}
        <div
          onClick={() => setShowModal(!showModal)}
          className="pt-5 max-sm:text-sm text-magenta text-center  cursor-pointer"
        >
          Lihat daftar harga Massage
        </div>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal} menus={menus} />
    </>
  );
};

export default OrderItem;
