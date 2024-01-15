import { BsX } from "react-icons/bs";

interface ModalDataProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: object;
}

const Modal = ({ showModal, setShowModal, data }: ModalDataProps) => {
  return (
    <div
      className={`${
        showModal ? "block" : "hidden"
      } transition-all duration-300 fixed top-0 left-0 w-screen h-screen px-2 flex justify-center items-center bg-slate-700/50 z-[999]`}
    >
      <div
        className={`
        md:w-1/2  bg-white rounded-lg relative transition-all duration-300`}
      >
        <div
          onClick={() => setShowModal(!showModal)}
          className="-top-4 -right-4 flex justify-center items-center h-10 w-10 shadow-xl absolute z-[9999] bg-white rounded-full"
        >
          <BsX className="text-3xl" />
        </div>
        <div className="pt-4 rounded-t-lg">
          <div className="text-lg md:text-xl text-center">Data Input</div>
        </div>
        <div className="text-[17px]">
          {Object.entries(data).map(([key, value]) => (
            <div key={key}>
              {key} : {String(value)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
