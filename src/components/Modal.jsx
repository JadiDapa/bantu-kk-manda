import { BsX } from "react-icons/bs";

const Modal = ({ showModal, setShowModal, menus }) => {
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
          <div className="text-lg md:text-xl text-center">
            Daftar harga Massage
          </div>
        </div>
        <div className="text-[17px]">
          <div className="flex border-b  border-grey ">
            <div className="flex-[5_5_0%]   text-magenta font-[500] px-4 py-4">
              Jasa
            </div>
            <div className="flex-[3_3_0%]  text-magenta font-[500] px-4 py-4">
              Harga
            </div>
          </div>
          <div className="flex leading-4">
            <div className="flex-[5_5_0%]  py-2 ">
              <div className="px-4 flex flex-col gap-4 max-md:text-sm">
                {menus.map((menu) => (
                  <div className="">{menu.item}</div>
                ))}
              </div>
            </div>
            <div className="flex-[3_3_0%]   bg-grey py-2 font-[500]">
              <div className="px-4  flex flex-col gap-4 max-md:text-sm">
                {menus.map((menu) => (
                  <div className="">Rp{menu.price}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#DCDFE6] px-8 md:px-10 max-md:text-sm py-6 rounded-b-lg">
          <p className="mb-2">
            * Jika harga jasa service kurang dari Rp105.000,- maka akan
            dikenakan biaya minimum transaksi sebesar Rp105.000,-
          </p>
          <p className="">
            ** Tidak dikenakan biaya apabila menggunakan jasa lainnya. Biaya ini
            dikenakan apabila tidak jadi menggunakan jasa Massage lain yang
            tertera di atas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
