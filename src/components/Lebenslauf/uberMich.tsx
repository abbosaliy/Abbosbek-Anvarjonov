function UberMich() {
  return (
    <div className="flex flex-col  min-h-[70vh] w-full gap-20">
      <div className="flex flex-col items-center xl:items-start text-center gap-8 ">
        <h1 className="font-semibold text-4xl ">Über mich</h1>
        <p className="text-slate-400 font-mono text-xl xl:text-start ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          quidem accusantium et, sit neque vitae sunt tempora est? Illum, enim
          inventore. Tempora deserunt perspiciatis harum error molestias
          repellendus aut fuga? Ut asperiores sit animi nobis hic tempore nemo
          aliquam perspiciatis delectus deleniti temporibus excepturi adipisci,
          est ipsa totam repudiandae corrupti recusandae molestias odit itaque
        </p>
        <ul className="grid grid-cols-1 items-center justify-center gap-10  ">
          <li className="flex items-center justify-center xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Name</span>
            <span className="text-xl">Abbosbek Anvarjonov</span>
          </li>
          <li className="flex items-center justify-center xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Telefon</span>
            <span className="text-xl">(+49)1734759122</span>
          </li>
          <li className="flex items-center justify-center xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Email</span>
            <span className="text-xl break-all">
              abbosbekanvarjonov8@gmail.com
            </span>
          </li>
          <li className="flex items-center justify-center xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Sprachen</span>
            <span className="text-xl">Deutsch, Usbekisch, Englisch</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UberMich;
