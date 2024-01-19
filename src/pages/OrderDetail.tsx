import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { ViewContext } from "../context/ViewContext";

const OrderDetail = () => {
  const { formData } = useContext(FormContext);
  const { setView } = useContext(ViewContext);

  const orderedProductName = (key: string) => {
    switch (key) {
      case "regular1":
        return "Regular Massage 1 Jam";
      case "regular2":
        return "Regular Massage 1.5 Jam";
      case "regular3":
        return "Regular Massage 2 Jam";
      case "premium1":
        return "Premium Massage 1 Jam";
      case "premium2":
        return "Premium Massage 1.5 Jam";
      case "premium3":
        return "Premium Massage 2 Jam";
      case "tambahan1":
        return "Reflexology 0.5 Jam";
      case "tambahan2":
        return "Reflexology 1 Jam";
    }
  };

  const orderedProductPrice = (key: string) => {
    switch (key) {
      case "regular1":
        return 100000;
      case "regular2":
        return 160000;
      case "regular3":
        return 160000;
      case "premium1":
        return 160000;
      case "premium2":
        return 200000;
      case "premium3":
        return 225000;
      case "tambahan1":
        return 40000;
      case "tambahan2":
        return 80000;
    }
  };

  const orderedProduct = Object.entries(formData)
    .filter(([key, value]) => value > 0 && typeof value === "number")
    .map(([key, value]) => [key, value] as [string, number]);

  return (
    <div className="">
      <div className="md:px-[30%] px-3">
        <div className="w-full py-6 px-6 bg-white  flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">Order Summary</h1>
          <div className="">
            <div className="text-darkgrey capitalize font-semibold border-b-2 pb-1 border-darkgrey text-xl">
              ORDER DETAIL <span> - #18361201241800</span>
            </div>
            <div className="flex flex-col text-[17px] text-slate-600 px-6">
              <div className="border-y border-grey py-3 flex flex-col gap-y-1">
                <div className="flex justify-between">
                  <span className="flex-1">Customer</span>
                  <span className="font-semibold text-end flex-1">
                    {formData.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="flex-1">Jenis Kelamin Customer</span>
                  <span className="text-end flex-1">{formData.userGender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex-1">Email</span>
                  <span className="text-end flex-1"> {formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex-1">PhoneNumber</span>
                  <span className="text-end flex-1">
                    {formData.phoneNumber}
                  </span>
                </div>
              </div>
              <div className="border-y border-grey py-3 flex flex-col gap-y-1">
                <div className="flex justify-between">
                  <span className="flex-1">Service Location</span>
                  <span className="text-end flex-1">{formData.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex-1">Detailed Address</span>
                  <span className="text-end flex-1">
                    {formData.detailedAddress}
                  </span>
                </div>
              </div>
              <div className="border-y border-grey py-3 flex flex-col gap-y-1">
                <div className="flex justify-between">
                  <span className="flex-1">Jenis Kelamin Mitra</span>
                  <span className="text-end flex-1">
                    {formData.massagerGender}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="flex-1">Tanggal Pelayanan</span>
                  <span className="text-end flex-1">
                    {formData.selectedDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="flex-1">Waktu Pelayanan</span>
                  <span className="text-end flex-1">
                    {formData.selectedTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-[17px] mt-6">
              <div className="px-6 py-3 gap-2 bg-sky-200 text-slate-600  rounded-tl-3xl">
                {orderedProduct.map(([key, value]) => (
                  <div className="flex justify-between" key={key}>
                    <span className="flex-1">
                      {orderedProductName(key)}{" "}
                      <span className="font-semibold"> ({value})</span>
                    </span>
                    <span className="text-end flex-1">
                      Rp
                      {Number(orderedProductPrice(key)).toLocaleString(
                        "id-ID"
                      )}{" "}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 gap-2 bg-sky-400  rounded-br-3xl">
                <div className="flex justify-between font-semibold">
                  <span className="flex-1">Total :</span>
                  <span className="text-end flex-1">
                    Rp{Number(formData.total).toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="px-6 py-3 bg-magenta text-white text-xl text-center rounded-xl cursor-pointer hover:bg-magenta/90 transition-all duration-300">
                Bayar & Selesaikan Pesanan
              </div>

              <div
                onClick={() => setView("menu")}
                className="text-lg font-semibold underline text-center mt-6 cursor-pointer"
              >
                Ubah Pesanan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
