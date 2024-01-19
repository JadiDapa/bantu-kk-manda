import Navbar from "../components/Navbar";
import { LuUser2, LuMail, LuPhone } from "react-icons/lu";
import Summary from "../components/Summary";
import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import validator from "validator";

const UserData = () => {
  const { formData, handleChange, handleSubmit } = useContext(FormContext);
  const [nameVd, setNameVd] = useState<string>("");
  const [emailVd, setEmailVd] = useState<string>("");
  const [phoneNumberVd, setPhoneNumberVd] = useState<string>("");
  const [locationVd, setLocationVd] = useState<string>("");
  const [detailedAddressVd, setDetailedAddressVd] = useState<string>("");

  return (
    <div className="pb-[136px]">
      <form onSubmit={handleSubmit}>
        <Navbar title={"Detail Kontak & Lokasi"} isNext />

        <div className="md:px-[25%] px-3 mt-[60px]">
          {/* Catatan */}
          <div className="w-full p-3.5 md:p-[18px] bg-white flex flex-col gap-3 rounded-lg">
            <div className="md:text-lg font-semibold">Catatan</div>
            <input
              onChange={(e) => handleChange("note", e.target.value)}
              value={formData.note}
              type="text"
              placeholder="Catatan tambahan pada jasa"
              className={`p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm  outline-1 outline-blue`}
            />
          </div>

          {/* Detail Kontak */}
          <div className="w-full p-3.5 md:p-[18px] bg-white flex flex-col gap-2 md:gap-3 rounded-lg mt-3.5">
            <div className="md:text-lg font-semibold">Detail Kontak</div>

            <div className="flex items-center gap-4">
              <label
                className="pl-1 text-lg md:text-2xl text-magenta"
                htmlFor="name"
              >
                <LuUser2 />
              </label>
              <input
                onChange={(e) => {
                  handleChange("name", e.target.value);
                  formData.name.length < 1
                    ? setNameVd("Nama harus di isi")
                    : setNameVd("");
                }}
                value={formData.name}
                type="text"
                id="name"
                placeholder="Nama"
                className={`${
                  nameVd
                    ? "outline-1 outline-red-500 bg-red-50"
                    : "outline-none"
                }  p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm w-full outline`}
              />
            </div>
            {nameVd && <small className="text-red-500">{nameVd}</small>}

            <div className="flex items-center gap-4">
              <label
                className="pl-1 text-lg md:text-2xl text-magenta"
                htmlFor="email"
              >
                <LuMail />
              </label>
              <input
                onChange={(e) => {
                  handleChange("email", e.target.value);
                  if (formData.email.length < 1) {
                    setEmailVd("Email Harus di isi");
                  } else if (validator.isEmail(!formData.email)) {
                    setEmailVd("Format Email tidak valid");
                  } else {
                    setEmailVd("");
                  }
                }}
                value={formData.email}
                type="text"
                id="email"
                placeholder="Email"
                className={`${
                  emailVd
                    ? "outline-1 outline-red-500 bg-red-50"
                    : "outline-none"
                }  p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm w-full outline`}
              />
            </div>
            {emailVd && <small className="text-red-500">{emailVd}</small>}

            <div className="flex items-center gap-4">
              <label
                className="pl-1 text-lg md:text-2xl text-magenta"
                htmlFor="phone"
              >
                <LuPhone />
              </label>
              <input
                onChange={(e) => {
                  handleChange("phoneNumber", e.target.value);
                  if (formData.phoneNumber.length < 1) {
                    setPhoneNumberVd("Nomor Telepon Harus di isi");
                  } else if (
                    validator.isMobilePhone(!formData.phoneNumber["id-ID"])
                  ) {
                    setPhoneNumberVd("Nomor Telepon tidak valid");
                  } else {
                    setPhoneNumberVd("");
                  }
                }}
                value={formData.phoneNumber}
                type="text"
                id="phone"
                placeholder="Phone"
                className={`${
                  phoneNumberVd
                    ? "outline-1 outline-red-500 bg-red-50"
                    : "outline-none"
                }  p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm w-full outline`}
              />
            </div>
            {phoneNumberVd && (
              <small className="text-red-500">{phoneNumberVd}</small>
            )}

            <div className="flex items-center gap-4 pl-2">
              <input
                onChange={(e) =>
                  handleChange("acceptPromotion", e.target.value)
                }
                value={"agree"}
                type="checkbox"
                className="md:scale-125"
                id="agree"
              />
              <label
                htmlFor="agree"
                className="hover:text-magenta text-sm/4 md:text-lg"
              >
                Saya ingin mendapatkan email promosi dan informasi baru dari
                Sejasa
              </label>
            </div>
          </div>

          {/* Lokasi Servis */}
          <div className="w-full p-3.5 md:p-[18px] bg-white flex flex-col gap-3 rounded-lg mt-3.5">
            <div className="md:text-lg font-semibold">Lokasi Servis</div>
            <div className="flex flex-col gap-2">
              <label htmlFor="location">Lokasi</label>
              <input
                onChange={(e) => {
                  handleChange("location", e.target.value);
                  formData.location.length < 1
                    ? setLocationVd("Lokasi pelayanan harus diisi")
                    : setLocationVd("");
                }}
                value={formData.location}
                type="text"
                id="location"
                placeholder="Masukkan kecamatan/kota"
                className={`${
                  locationVd.length > 0
                    ? "outline-1 outline-red-500 bg-red-50"
                    : "outline-none"
                }  p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm w-full outline`}
              />
            </div>
            {locationVd && <small className="text-red-500">{locationVd}</small>}

            <div className="flex flex-col gap-2 pb-8">
              <label htmlFor="address">Alamat Lengkap</label>
              <textarea
                onChange={(e) => {
                  handleChange("detailedAddress", e.target.value);
                  formData.detailedAddress.length < 1
                    ? setDetailedAddressVd(
                        "Alamat lengkap pelanggan harus di isi"
                      )
                    : setDetailedAddressVd("");
                }}
                value={formData.detailedAddress}
                id="address"
                placeholder="Masukkan nomor rumah, rt/rw, name komplek, lantai apartemen"
                cols={1}
                rows={5}
                className={`${
                  locationVd
                    ? "outline-1 outline-red-500 bg-red-50"
                    : "outline-none"
                } p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm outline  resize-none`}
              />
              {detailedAddressVd && (
                <small className="text-red-500">{detailedAddressVd}</small>
              )}
            </div>
          </div>

          <div className="my-4 font-[500] text-sm md:text-lg text-center text-darkgrey">
            Powered By <b>WebApe.com</b>
          </div>
        </div>
        <Summary
          setNameVd={setNameVd}
          setEmailVd={setEmailVd}
          setPhoneNumberVd={setPhoneNumberVd}
          setLocationVd={setLocationVd}
          setDetailedAddressVd={setDetailedAddressVd}
        />
      </form>
    </div>
  );
};

export default UserData;
