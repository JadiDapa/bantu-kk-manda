import { useContext, useState } from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import { ViewContext } from "../context/ViewContext";
import { FormContext } from "../context/FormContext";
import validator from "validator";

interface SummaryProps {
  setNameVd: (message: string) => void;
  setEmailVd: (message: string) => void;
  setPhoneNumberVd: (message: string) => void;
  setLocationVd: (message: string) => void;
  setDetailedAddressVd: (message: string) => void;
}

const Summary = ({
  setNameVd,
  setEmailVd,
  setPhoneNumberVd,
  setLocationVd,
  setDetailedAddressVd,
}: SummaryProps) => {
  const { view, setView } = useContext(ViewContext);
  const { formData } = useContext(FormContext);
  const [isMenuValid, setIsMenuValid] = useState<boolean>(true);

  const productSelected =
    formData.regular1 ||
    formData.regular2 ||
    formData.regular3 ||
    formData.premium1 ||
    formData.premium2 ||
    formData.premium3;

  const formFilled =
    formData.name &&
    formData.email &&
    formData.phoneNumber &&
    formData.location &&
    formData.detailedAddress;

  const handleViewChange = () => {
    if (view === "menu") {
      if (
        productSelected &&
        formData.userGender &&
        formData.massagerGender &&
        formData.selectedDate &&
        formData.selectedTime
      ) {
        setView("user-data");
        window.scrollTo(0, 0);
      } else {
        // setIsMenuValid(false);
        // window.scrollTo(0, 400);
      }
    }

    if (view === "user-data") {
      if (formFilled) {
        setView("verification");
        window.scrollTo(0, 0);
      } else {
        if (!formData.name) {
          setNameVd("Nama harus di isi");
        }
        if (!formData.email) {
          setEmailVd("Email Harus di isi");
        } else if (validator.isEmail(!formData.email)) {
          setEmailVd("Format Email tidak valid");
        }
        if (!formData.phoneNumber) {
          setPhoneNumberVd("Nomor telepon Harus di isi");
        } else if (validator.isMobilePhone(!formData.phoneNumber["id-ID"])) {
          setPhoneNumberVd("Nomor Telepon tidak valid");
        }
        if (!formData.location) {
          setLocationVd("Lokasi harus di isi");
        }
        if (!formData.detailedAddress) {
          setDetailedAddressVd("Alamat Lengkap harus di isi");
        }
      }
    }

    if (view === "verification") {
      setView("order-detail");
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
            Rp{Number(formData.total).toLocaleString("id-ID")}
          </div>
        </div>
        <div className="flex-1">
          {!isMenuValid && (
            <div className="text-red-600 text-sm text-center">
              Pastikan sudah memilih produk & mengisi semua form
            </div>
          )}
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
