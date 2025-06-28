function UberMich() {
  return (
    <div className="flex flex-col  min-h-[70vh] w-full gap-20">
      <div className="flex flex-col items-center 2xl:items-start text-center gap-15 ">
        <h1 className="font-semibold text-4xl  2xl:text-6xl">Über mich</h1>
        <p className="text-slate-400 font-mono text-xl 2xl:text-start 2xl:text-[23px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          quidem accusantium et, sit neque vitae sunt tempora est? Illum, enim
          inventore. Tempora deserunt perspiciatis harum error molestias
          repellendus aut fuga? Ut asperiores sit animi nobis hic tempore nemo
          aliquam perspiciatis delectus deleniti temporibus excepturi adipisci,
          est ipsa totam repudiandae corrupti recusandae molestias odit itaque
        </p>
        <ul className="grid grid-cols-1 items-center justify-center gap-10  ">
          <li className="flex items-center justify-center 2xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Name</span>
            <span className="text-2xl">Abbosbek Anvarjonov</span>
          </li>
          <li className="flex items-center justify-center 2xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Telefon</span>
            <span className="text-2xl">(+49)1734759122</span>
          </li>
          <li className="flex items-center justify-center 2xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Email</span>
            <span className="text-2xl break-all">
              abbosbekanvarjonov8@gmail.com
            </span>
          </li>
          <li className="flex items-center justify-center 2xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Sprachen</span>
            <span className="text-2xl">Deutsch, Usbekisch, Englisch</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UberMich;
