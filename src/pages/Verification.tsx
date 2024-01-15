import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { ViewContext } from "../context/ViewContext";
import { FormContext } from "../context/FormContext";
import ModalData from "../components/ModalData";

const Verification = () => {
  const { setView } = useContext(ViewContext) ?? { setView: () => {} };
  const { formData } = useContext(FormContext) ?? {
    formData: { phoneNumber: "" },
  };
  const [countdown, setCountdown] = useState(60);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let interval: number;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      console.log(formData);
      clearInterval(interval);
    };
  }, [countdown, formData]);

  return (
    <div className="pb-[160px]">
      <Navbar title={"NamaWeb.com"} verificating />

      <div className="px-3 md:px-[25%] mt-[60px]">
        <div
          onClick={() => setView("user-data")}
          className="py-4 flex gap-4 items-center font-semibold text-darkgrey text-sm md:text-lg cursor-pointer"
        >
          <span>
            <FaArrowLeft />
          </span>
          Kembali ke halaman sebelumnya
        </div>
        <div className="w-full p-[18px] bg-white flex flex-col gap-3 rounded-lg justify-center text-center">
          <div className="text-4xl mt-12 flex justify-center text-magenta">
            <MdMessage />
          </div>
          <div className="mt-1 md:text-xl font-semibold ">
            Masukkan Kode Verifikasi
          </div>
          <div className="mt-1 max-md:text-sm ">
            Kode verifikasi telah dikirimkan melalui SMS ke{" "}
            <span className="font-semibold text-magenta">
              {formData.phoneNumber}
            </span>
          </div>
          <div className="mt-3 text-lg md:text-xl font-semibold">
            Kode Verifikasi
          </div>
          <div className="mt-6">
            <input className="px-2 w-40 tracking-[1em] text-2xl border-b-4 outline-none focus:border-magenta transition-all duration-300 " />
          </div>
          <div className="">
            <button
              onClick={() => setShowModal(!showModal)}
              className=" mt-4 w-4/5 md:w-1/2 py-2 bg-magenta text-white text-lg md:text-2xl rounded-lg cursor-pointer"
            >
              Verifikasi
            </button>
            {countdown ? (
              <>
                <div className="mt-4 mb-1 max-md:text-sm">
                  Mohon tunggu{" "}
                  <b className="text-magenta font-semibold">
                    {countdown} detik
                  </b>{" "}
                  untuk mengirim ulang
                </div>
              </>
            ) : (
              <>
                <div className="mt-4 mb-1 max-md:text-sm">
                  Tidak dapat kode verifikasi?
                </div>
                <div
                  onClick={() => setCountdown(60)}
                  className="font-semibold text-magenta cursor-pointer"
                >
                  Kirim Ulang
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <ModalData
        setShowModal={setShowModal}
        showModal={showModal}
        data={formData}
      />
    </div>
  );
};

export default Verification;
