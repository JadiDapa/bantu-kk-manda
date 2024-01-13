import { IoCheckboxOutline } from "react-icons/io5";

interface SummaryProps {
  estimated: string;
}

const Summary = ({ estimated }: SummaryProps) => {
  return (
    <div className="w-full fixed bottom-0 left-0">
      <div className=" py-[18px] bg-white px-[25%] text-lg flex gap-2 border-b-2 border-grey">
        <span className="text-magenta">
          <IoCheckboxOutline />
        </span>
        <span className="text-sm text-darkgrey">
          Dengan melanjutkan, Kamu setuju untuk membagikan profil Kamu dengan
          rekan kami Sejasa.com.{" "}
          <a href="#" className="text-magenta">
            Lihat Detil
          </a>
        </span>
      </div>
      <div className="w-full py-[18px] bg-white px-[25%] text-lg flex justify-between items-center">
        <div className="flex-1">
          <div className="te">Estimasi Harga</div>
          <div className="text-[#34B5D1] text-3xl font-semibold">
            Rp{estimated}
          </div>
        </div>
        <div className="flex-1">
          <button className="w-full py-2 bg-magenta text-white text-2xl rounded-lg">
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
