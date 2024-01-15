import { useContext } from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import { ViewContext } from "../context/ViewContext";
import { FormContext } from "../context/FormContext";

const Summary = () => {
  const { view, setView } = useContext(ViewContext);
  const { formData } = useContext(FormContext);

  const handleViewChange = () => {
    if (setView) {
      setView(view === "user-data" ? "verification" : "user-data");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="w-full fixed bottom-0 left-0">
      <div className=" py-3 bg-white md:px-[25%] px-4 text-lg flex gap-2 border-b-2 border-grey">
        <span className="text-magenta">
          <IoCheckboxOutline />
        </span>
        <span className="md:text-sm text-xs text-darkgrey">
          Dengan melanjutkan, Kamu setuju untuk membagikan profil Kamu dengan
          rekan kami Sejasa.com.{" "}
          <a href="#" className="text-magenta">
            Lihat Detil
          </a>
        </span>
      </div>
      <div className="w-full py-3 bg-white md:px-[25%] px-4 md:text-lg flex justify-between items-center">
        <div className="flex-1">
          <div className="text-sm md:text-base">Estimasi Harga</div>
          <div className="text-blue md:text-3xl text-lg font-medium">
            Rp{Number(formData.total).toLocaleString("en-US")}
          </div>
        </div>
        <div className="flex-1">
          <button
            onClick={handleViewChange}
            type="submit"
            className="w-full py-2 bg-magenta text-white md:text-2xl text-sm rounded-lg cursor-pointer"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
