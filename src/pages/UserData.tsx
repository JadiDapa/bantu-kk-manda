import Navbar from "../components/Navbar";
import { LuUser2 } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import Summary from "../components/Summary";

const UserData = () => {
  return (
    <div className="pb-[160px]">
      <Navbar title={"Detail Kontak & Lokasi"} isNext />

      <div className="px-[25%] mt-[60px]">
        <div className="w-full p-[18px] bg-white flex flex-col gap-3 rounded-lg">
          <div className="text-xl font-semibold">Catatan</div>
          <input
            placeholder="Catatan tambahan pada jasa"
            className="p-3 bg-grey rounded-lg placeholder:text-slate-500"
          />
        </div>

        <div className="w-full p-[18px] bg-white flex flex-col gap-3 rounded-lg mt-3.5">
          <div className="text-xl font-semibold">Detail Kontak</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <label className="pl-1 text-2xl text-magenta" htmlFor="username">
                <LuUser2 />
              </label>
              <input
                id="username"
                placeholder="Nama"
                className="p-3 bg-grey rounded-lg placeholder:text-slate-500 w-full"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="pl-1 text-2xl text-magenta" htmlFor="email">
                <LuMail />
              </label>
              <input
                id="email"
                placeholder="Email"
                className="p-3 bg-grey rounded-lg placeholder:text-slate-500 w-full"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="pl-1 text-2xl text-magenta" htmlFor="phone">
                <LuPhone />
              </label>
              <input
                id="phone"
                placeholder="Phone"
                className="p-3 bg-grey rounded-lg placeholder:text-slate-500 w-full"
              />
            </div>
            <div className="flex items-center gap-4 pl-2">
              <input type="checkbox" className="scale-125" id="agree" />
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
              id="alamat"
              placeholder="Masukkan kecamatan/kota"
              className="p-3 bg-grey rounded-lg placeholder:text-slate-500"
            />
          </div>

          <div className="flex flex-col gap-2 pb-8">
            <label htmlFor="lokasi">Alamat Lengkap</label>
            <textarea
              placeholder="Masukkan nomor rumah, rt/rw, name komplek, lantai apartemen"
              cols={1}
              rows={5}
              className="p-3 bg-grey rounded-lg placeholder:text-slate-500 resize-none"
            ></textarea>
          </div>
        </div>
        <div className="my-4 font-[500] text-lg text-center text-darkgrey">
          Powered By <b>WebApe.com</b>
        </div>
      </div>
      <Summary estimated={"200.000"} />
    </div>
  );
};

export default UserData;
