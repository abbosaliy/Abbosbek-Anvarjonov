function Ausbildung() {
  return (
    <div className="flex flex-col  min-h-[70vh] w-full gap-20">
      <div className="flex flex-col items-center 2xl:items-start text-center gap-15 ">
        <h1 className="font-semibold text-4xl  2xl:text-6xl">
          Meine Ausbildung
        </h1>
        <p className="text-slate-400 font-mono text-xl 2xl:text-start 2xl:text-[23px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          quidem accusantium et, sit neque vitae sunt tempora est? Illum, enim
          inventore. Tempora deserunt perspiciatis harum error molestias
          repellendus aut fuga? Ut asperiores sit animi nobis hic tempore nemo
          aliquam perspiciatis delectus deleniti temporibus excepturi adipisci,
          est ipsa totam repudiandae corrupti recusandae molestias odit itaque
        </p>
      </div>
      <div className=" flex flex-wrap gap-10">
        <div className="w-full flex flex-col items-center text-center justify-center  rounded-md bg-slate-800 p-8 gap-2">
          <p className="text-2xl text-blue-500 font-bold">2025</p>
          <h2 className="text-3xl font-mono text-white pt-3">
            Front-End <br />
            Web Devolopment
          </h2>
          <h2 className="flex items-center gap-2 text-slate-400 text-xl font-[550] pt-2">
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
        <div className="w-full flex flex-col items-center text-center justify-center  rounded-md bg-slate-800 p-8 gap-2">
          <p className="text-2xl text-blue-500 font-bold">2024</p>
          <h2 className="text-3xl font-mono text-white pt-3">
            Front-End <br />
            Devolopment
          </h2>
          <h2 className="flex items-center gap-2 text-slate-400 text-xl font-[550] pt-2">
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

        <div className="w-full flex flex-col items-center text-center justify-center  rounded-md bg-slate-800 p-8 gap-2">
          <p className="text-2xl text-blue-500 font-bold">2021-2024</p>
          <h2 className="text-3xl font-mono text-white pt-3">
            Qualifitzierte
            <br />
            Berufskraftfahrer
          </h2>
          <h2 className="flex items-center gap-2 text-slate-400 text-xl font-[550] pt-2">
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
      </div>
    </div>
  );
}

export default Ausbildung;
