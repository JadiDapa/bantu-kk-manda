import Navbar from "../components/Navbar";
import { LuUser2, LuMail, LuPhone } from "react-icons/lu";
import Summary from "../components/Summary";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const UserData = () => {
  const { formData, handleChange, handleSubmit } = useContext(FormContext);

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
              className="p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm  outline-1 outline-blue"
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
                onChange={(e) => handleChange("name", e.target.value)}
                value={formData.name}
                type="text"
                id="name"
                placeholder="Nama"
                className="p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm w-full outline-1 outline-blue"
              />
            </div>

            <div className="flex items-center gap-4">
              <label
                className="pl-1 text-lg md:text-2xl text-magenta"
                htmlFor="email"
              >
                <LuMail />
              </label>
              <input
                onChange={(e) => handleChange("email", e.target.value)}
                value={formData.email}
                type="text"
                id="email"
                placeholder="Email"
                className="p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm outline-1 outline-blue w-full"
              />
            </div>

            <div className="flex items-center gap-4">
              <label
                className="pl-1 text-lg md:text-2xl text-magenta"
                htmlFor="phone"
              >
                <LuPhone />
              </label>
              <input
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                value={formData.phoneNumber}
                type="text"
                id="phone"
                placeholder="Phone"
                className="p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm outline-1 outline-blue w-full"
              />
            </div>

            <div className="flex items-center gap-4 pl-2">
              <input
                onChange={(e) =>
                  handleChange("acceptPromotion", e.target.checked)
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
                onChange={(e) => handleChange("location", e.target.value)}
                value={formData.location}
                type="text"
                id="location"
                placeholder="Masukkan kecamatan/kota"
                className="p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm outline-1 outline-blue"
              />
            </div>

            <div className="flex flex-col gap-2 pb-8">
              <label htmlFor="address">Alamat Lengkap</label>
              <textarea
                onChange={(e) =>
                  handleChange("detailedAddress", e.target.value)
                }
                value={formData.detailedAddress}
                id="address"
                placeholder="Masukkan nomor rumah, rt/rw, name komplek, lantai apartemen"
                cols={1}
                rows={5}
                className="p-3 bg-grey rounded-lg placeholder:text-slate-500 max-md:text-sm outline-1 outline-blue resize-none"
              ></textarea>
            </div>
          </div>

          <div className="my-4 font-[500] text-sm md:text-lg text-center text-darkgrey">
            Powered By <b>WebApe.com</b>
          </div>
        </div>
        <Summary estimated={"200.000"} />
      </form>
    </div>
  );
};

export default UserData;
