import Accordion from "../components/Accordion";
import Carousel from "../components/Carousell.js";
import DatePicker from "../components/DatePicker";
import Navbar from "../components/Navbar";
import Option from "../components/Option";
import OrderItem from "../components/OrderItem";
import Summary from "../components/Summary";
import TimePicker from "../components/TimePicker";
import { regular, prem, jasaTambahan } from "../utils/static.js";
import message from "/msg.jpg";
import premium from "/premsg.jpg";
import tambahan from "/jasatambahan.jpg";

const Menu = () => {
  return (
    <div className="pb-[136px]">
      <Navbar title={"Massage"} />
      <div className="md:px-[25%] px-3 mt-[60px]">
        <Carousel />
        <div className=" mt-3.5 rounded-xl overflow-hidden ">
          <Accordion title="Tentang Layanan Massage Sejasa">
            <p>
              Rilekskan tubuh dan kendurkan otot-otot yang tegang dengan terapi
              kesehatan tradisional. Pemijatan ditangani oleh terapis
              berpengalaman dan profesional.
            </p>
            <p>
              <b>Beberapa informasi penting seputar Layanan Massage:</b>
              <br />
              1. Sejasa menolak segala bentuk pelecehan seksual. <br />
              2. Sejasa akan menindak tegas oknum pelecehan sesuai hukum dan UU
              yang berlaku.
              <br /> 3. Kami menjamin kenyamanan Anda saat proses pemijatan.
              <br /> Anda dapat melihat rating dan review terapis yang bertugas.
              <br />
              4. Terapis akan menyediakan handuk/ kain bersih, alas kain, dan
              minyak pijat yang dibutuhkan saat proses memijat. <br />
              5. Customer menyediakan matras untuk pijat.
            </p>
          </Accordion>
          <Accordion title="Perlengkapan Massage Sejasa">
            <p>
              Rilekskan tubuh dan kendurkan otot-otot yang tegang dengan terapi
              kesehatan tradisional. Pemijatan ditangani oleh terapis
              berpengalaman dan profesional.
            </p>
            <p>
              <b>Beberapa informasi penting seputar Layanan Massage:</b>
              <br />
              1. Sejasa menolak segala bentuk pelecehan seksual. <br />
              2. Sejasa akan menindak tegas oknum pelecehan sesuai hukum dan UU
              yang berlaku.
              <br /> 3. Kami menjamin kenyamanan Anda saat proses pemijatan.
              <br /> Anda dapat melihat rating dan review terapis yang bertugas.
              <br />
              4. Terapis akan menyediakan handuk/ kain bersih, alas kain, dan
              minyak pijat yang dibutuhkan saat proses memijat. <br />
              5. Customer menyediakan matras untuk pijat.
            </p>
          </Accordion>
        </div>
        <div className="max-md:text-sm/4 italic mt-3.5 p-[18px] bg-[#FFFF99] rounded-lg leading-5 font-[400] ">
          Pastikan kwitansi/invoice yang diterbitkan dari Sejasa
          <strong> sesuai</strong> dengan pengerjaan sesungguhnya di tempat
          Anda. Jika tidak sesuai, garansi kebersihan Anda akan
          <strong> hangus</strong>. Selengkapnya ada di bagian “syarat dan
          ketentuan”.
        </div>
        <div className="mt-3.5 flex flex-col gap-3.5">
          <OrderItem
            title={"Regular Massage"}
            menus={regular}
            image={message}
          />
          <OrderItem title={"Premium Massage"} menus={prem} image={premium} />
          <OrderItem
            title={"Jasa tambahan lain (opsional)"}
            menus={jasaTambahan}
            image={tambahan}
          />
        </div>
        <div className="mt-3.5 flex flex-col gap-3.5">
          <Option
            question="Apa jenis kelamin Anda?"
            input={"userGender"}
            opt1="Pria"
            opt2="Wanita"
          />
          <Option
            question="Preferensi jenis kelamin Mitra Sejasa"
            input={"massagerGender"}
            opt1="Pria"
            opt2="Wanita"
          />
        </div>
        <div className="mt-3.5">
          <DatePicker />
        </div>
        <div className="mt-3.5">
          <TimePicker />
        </div>
        <div className="my-4 font-[500] text-sm md:text-lg text-center text-darkgrey">
          Powered By <b>WebApe.com</b>
        </div>
      </div>
      <Summary />
    </div>
  );
};

export default Menu;
