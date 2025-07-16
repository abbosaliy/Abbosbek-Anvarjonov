function UberMich() {
  return (
    <div className="flex flex-col  min-h-[70vh] w-full gap-20">
      <div className="flex flex-col items-center xl:items-start text-center gap-4 ">
        <h1 className="font-semibold text-4xl ">Über mich</h1>
        <p className="text-slate-400 font-mono text-xl xl:text-start ">
          Engagierter Quereinsteiger mit intensiver Weiterbildung in moderner
          Webentwicklung über DevKarriere. Im Rahmen des Programms habe ich über
          zehn praxisnahe Projekte u.a mit JavaScript, React, TailwindCSS und
          TypeScript eigenständig umgesetzt. Ich bringe eine hohe
          Eigenmotivation mit, neue Technologien zu lernen und Herausforderungen
          strukturiert zu lösen. Mein beruflicher Hintergrund außerhalb der IT
          hat meine Kommunikationsstärke, Zuverlässigkeit und den Blick für
          effiziente Abläufe geprägt. Mein Ziel ist es nun, meine Fähigkeiten in
          einem professionellen Umfeld einzubringen und mich kontinuierlich
          weiterzuentwickeln
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
