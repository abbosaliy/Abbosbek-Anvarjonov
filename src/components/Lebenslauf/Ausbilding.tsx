function Ausbildung() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="flex flex-col items-center xl:items-start text-center gap-8 ">
        <h1 className="font-semibold text-4xl  ">Meine Ausbildung</h1>
        <p className="text-slate-400 font-mono text-xl xl:text-start  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          quidem accusantium et, sit neque vitae sunt tempora est? Illum, enim
          inventore. Tempora deserunt perspiciatis harum error molestias
          repellendus aut fuga? Ut asperiores sit animi nobis hic tempore nemo
          aliquam perspiciatis delectus deleniti temporibus excepturi adipisci,
          est ipsa totam repudiandae corrupti recusandae molestias odit itaque
        </p>
      </div>
      <div className="max-h-[500px] grid grid-cols-4 gap-4  overscroll-contain overflow-y-auto ">
        <div className="h-[184px] col-span-4 lg:col-span-2 lg:items-start flex flex-col items-center  rounded-md bg-slate-800 p-6 gap-2">
          <p className="text-xl text-blue-500 font-bold">2025 - bis jetzt</p>
          <h2 className="text-xl font-mono text-white">
            Front-End Web Devolopment
          </h2>
          <h2 className="flex items-center gap-2 text-slate-400 text-lg">
            <span className=" text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="currentColor"
              >
                <circle
                  cx="5"
                  cy="5"
                  r="5"
                />
              </svg>
            </span>
            WeiterBildung - DevKarriere
          </h2>
        </div>
        <div className="h-[184px] col-span-4 lg:col-span-2 lg:items-start flex flex-col items-center   rounded-md bg-slate-800 p-6 gap-2">
          <p className="text-xl text-blue-500 font-bold">2024</p>
          <h2 className="text-xl font-mono text-white">
            Front-End Devolopment
          </h2>
          <h2 className="flex items-center gap-2 text-slate-400 text-xl ">
            <span className=" text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="currentColor"
              >
                <circle
                  cx="5"
                  cy="5"
                  r="5"
                />
              </svg>
            </span>
            Front-End Bootcamp - PDP Academy
          </h2>
        </div>
        <div className="h-[184px] col-span-4 lg:col-span-2 lg:items-start flex flex-col items-center  rounded-md bg-slate-800 p-6  gap-2">
          <p className="text-xl text-blue-500 font-bold">2021-2024</p>
          <h2 className="text-xl font-mono text-white">
            Qualifitzierte <br /> Berufskraftfahrer
          </h2>

          <h2 className="flex items-center gap-2 text-slate-400 text-xl ">
            <span className=" text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="currentColor"
              >
                <circle
                  cx="5"
                  cy="5"
                  r="5"
                />
              </svg>
            </span>
            Berufsbildende Schule Anhalt Bitterfeld
          </h2>
        </div>
        <div className="h-[184px] col-span-4 lg:col-span-2 lg:items-start flex flex-col items-center  rounded-md bg-slate-800 p-6  gap-2">
          <p className="text-xl text-blue-500 font-bold">2017-2020</p>
          <h2 className="text-xl font-mono text-white">Rechtswesen</h2>

          <h2 className="flex items-center gap-2 text-slate-400 text-xl ">
            <span className=" text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="currentColor"
              >
                <circle
                  cx="5"
                  cy="5"
                  r="5"
                />
              </svg>
            </span>
            Juristisches Berufskolleg Namangan, Usbekistan
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Ausbildung;
