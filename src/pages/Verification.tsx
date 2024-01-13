import Navbar from "../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

interface VerificationProps {
  phoneNumber: string;
}

const Verification = ({ phoneNumber = "0823948592783" }) => {
  return (
    <div className="pb-[160px]">
      <Navbar title={"NamaWeb.com"} verificating />

      <div className="px-[25%] mt-[60px]">
        <div className="py-4 flex gap-4 items-center font-semibold text-darkgrey text-lg">
          <span>
            <FaArrowLeft />
          </span>
          Kembali ke halaman sebelumnya
        </div>
        <div className="w-full p-[18px] bg-white flex flex-col gap-3 rounded-lg justify-center text-center">
          <div className="text-4xl mt-12 flex justify-center text-magenta">
            <MdMessage />
          </div>
          <div className="mt-1 text-xl font-semibold ">
            Masukkan Kode Verifikasi
          </div>
          <div className="mt-1 text ">
            Kode verifikasi telah dikirimkan melalui SMS ke{" "}
            <span className="font-semibold text-magenta">{phoneNumber}</span>
          </div>
          <div className="mt-3 text-xl font-semibold">Kode Verifikasi</div>
          <div className="mt-6">
            <input className="px-2 w-36 tracking-[1em] text-2xl border-b-4 outline-none focus:border-magenta transition-all duration-300 " />
          </div>
          <div className="">
            <button className=" mt-4 w-1/2 py-2 bg-magenta text-white text-2xl rounded-lg">
              Verifikasi
            </button>
            <div className="mt-4 mb-1">Tidak dapat kode verifikasi?</div>
            <div className="font-semibold text-magenta">Kirim Ulang</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
