import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import DatePicker from "../components/DatePicker";
import Navbar from "../components/Navbar";
import Option from "../components/Option";
import OrderItem from "../components/OrderItem";
import Summary from "../components/Summary";
import TimePicker from "../components/TimePicker";

const Menu = () => {
  return (
    <div className="pb-[160px]">
      <Navbar title={"Massage"} />
      <div className="px-[25%] mt-[60px]">
        <Carousel />
        <div className=" mt-3.5 rounded-xl overflow-hidden ">
          <Accordion>
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
          <Accordion>
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
        <div className="italic mt-3.5 p-[18px] bg-[#FFFF99] rounded-lg text-lg leading-5 font-[400] ">
          Pastikan kwitansi/invoice yang diterbitkan dari Sejasa
          <strong> sesuai</strong> dengan pengerjaan sesungguhnya di tempat
          Anda. Jika tidak sesuai, garansi kebersihan Anda akan
          <strong> hangus</strong>. Selengkapnya ada di bagian “syarat dan
          ketentuan”.
        </div>
        <div className="mt-3.5 flex flex-col gap-3.5">
          <OrderItem title={"Regular Massage"} />
          <OrderItem title={"Premium Massage"} />
          <OrderItem title={"Jasa Lain (Opsional)"} />
        </div>
        <div className="mt-3.5 flex flex-col gap-3.5">
          <Option
            question="Apa jenis kelamin Anda?"
            opt1="Pria"
            opt2="Wanita"
          />
          <Option
            question="Preferensi jenis kelamin Mitra Sejasa"
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
        <div className="my-4 font-[500] text-lg text-center text-darkgrey">
          Powered By <b>WebApe.com</b>
        </div>
      </div>
      <Summary estimated={"200.000"} />
    </div>
  );
};

export default Menu;
