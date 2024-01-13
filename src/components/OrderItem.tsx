import message from "/msg.jpg";
import { IoIosArrowDown } from "react-icons/io";

interface OrderItemProps {
  title: string;
}

const OrderItem = ({ title }: OrderItemProps) => {
  return (
    <div className="p-[18px] bg-white rounded-lg flex flex-col gap-4">
      <div className="text-xl font-semibold">{title} </div>
      <div className="flex gap-x-[18px]">
        <img src={message} alt="" className="w-16 rounded-md" />
        <div className="flex flex-col justify-between">
          <div className="font-[500] leading-3">{title}</div>
          <MoreButton />
        </div>
      </div>
      <div className="pt-5 text-magenta text-center border-t-2 border-grey">
        Lihat daftar harga Massage
      </div>
    </div>
  );
};

const MoreButton = () => {
  return (
    <button className="flex justify-between items-center px-4 py-2 rounded-lg border gap-4 border-magenta text-magenta hover:bg-magenta hover:text-white duration-300 transition-all">
      Selengkapnya
      <span>
        <IoIosArrowDown className="text-xl font-thin" />
      </span>
    </button>
  );
};

export default OrderItem;
