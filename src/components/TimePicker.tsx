const TimePicker = () => {
  return (
    <div className="p-[18px] bg-white rounded-lg flex flex-col gap-4">
      <div className="text-xl font-semibold">
        Pukul berapa Anda membutuhkan layanan?{" "}
        <span className="text-red-600">*</span>
      </div>
      <div className="border-[3px] text-lg py-3 rounded-xl border-grey hover:border-magenta w-full flex items-center justify-evenly transition-all duration-300">
        <span className="">12</span>
        <span className="">:</span>
        <span className="">30</span>
      </div>
    </div>
  );
};

export default TimePicker;
