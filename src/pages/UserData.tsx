import Navbar from "../components/Navbar";
import { LuUser2 } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import Summary from "../components/Summary";
import { useState } from "react";

const UserData = () => {
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptPromotion, setAcceptPromotion] = useState(false);
  const [location, setLocation] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (acceptPromotion) formData.append("note", note);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    if (acceptPromotion) {
      formData.append("acceptPromotion", "agree");
    }
    formData.append("location", location);
    formData.append("detailedAddress", detailedAddress);

    // console.log(Object.fromEntries(formData)); post data
  };

  return (
    <div className="pb-[160px]">
      <form onSubmit={handleSubmit}>
        <Navbar title={"Detail Kontak & Lokasi"} isNext />

        <div className="px-[25%] mt-[60px]">
          <div className="w-full p-[18px] bg-white flex flex-col gap-3 rounded-lg">
            <div className="text-xl font-semibold">Catatan</div>
            <input
              onChange={(e) => setNote(e.target.value)}
              value={note}
              type="text"
              placeholder="Catatan tambahan pada jasa"
              className="p-3 bg-grey rounded-lg placeholder:text-slate-500  outline-1 outline-blue"
            />
          </div>

          <div className="w-full p-[18px] bg-white flex flex-col gap-3 rounded-lg mt-3.5">
            <div className="text-xl font-semibold">Detail Kontak</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <label className="pl-1 text-2xl text-magenta" htmlFor="name">
                  <LuUser2 />
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="name"
                  placeholder="Nama"
                  className="p-3 bg-grey rounded-lg placeholder:text-slate-500  w-full outline-1 outline-blue"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="pl-1 text-2xl text-magenta" htmlFor="email">
                  <LuMail />
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="p-3 bg-grey rounded-lg placeholder:text-slate-500 outline-1 outline-blue w-full"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="pl-1 text-2xl text-magenta" htmlFor="phone">
                  <LuPhone />
                </label>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  className="p-3 bg-grey rounded-lg placeholder:text-slate-500 outline-1 outline-blue w-full"
                />
              </div>

              <div className="flex items-center gap-4 pl-2">
                <input
                  onChange={(e) => setAcceptPromotion(e.target.checked)}
                  value={"agree"}
                  type="checkbox"
                  className="scale-125"
                  id="agree"
                />
                <label htmlFor="agree" className="hover:text-magenta text-lg">
                  Saya ingin mendapatkan email promosi dan informasi baru dari
                  Sejasa
                </label>
              </div>
            </div>
          </div>

          <div className="w-full p-[18px] bg-white flex flex-col gap-3 rounded-lg mt-3.5">
            <div className="text-xl font-semibold">Lokasi Servis</div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lokasi">Lokasi</label>
              <input
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                type="text"
                id="location"
                placeholder="Masukkan kecamatan/kota"
                className="p-3 bg-grey rounded-lg placeholder:text-slate-500 outline-1 outline-blue"
              />
            </div>

            <div className="flex flex-col gap-2 pb-8">
              <label htmlFor="address">Alamat Lengkap</label>
              <textarea
                onChange={(e) => setDetailedAddress(e.target.value)}
                value={detailedAddress}
                id="address"
                placeholder="Masukkan nomor rumah, rt/rw, name komplek, lantai apartemen"
                cols={1}
                rows={5}
                className="p-3 bg-grey rounded-lg placeholder:text-slate-500 outline-1 outline-blue resize-none"
              ></textarea>
            </div>
          </div>
          <div className="my-4 font-[500] text-lg text-center text-darkgrey">
            Powered By <b>WebApe.com</b>
          </div>
        </div>
        <Summary estimated={"200.000"} />
      </form>
    </div>
  );
};

export default UserData;
