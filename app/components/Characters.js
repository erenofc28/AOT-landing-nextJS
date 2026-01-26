import Image from "next/image";

const characters = [
  {
    name: "Eren Yeager",
    role: "The Attack Titan",
    desc:
      "Eren Jaeger (エレン・イェーガー Eren Yēgā?) was a former member of the Scout Regiment and the main protagonist of Attack on Titan. He was the only son of Grisha and Carla Jaeger, the younger paternal half brother of Zeke Jaeger,[ and the last holder of the Attack Titan, Founding Titan, and the War Hammer Titan.",
    img: "/aot/characters/eren.png",
  },
  {
    name: "Mikasa Ackerman",
    role: "Elite Soldier",
    desc:
      "Mikasa Ackermann (ミカサ・アッカーマン Mikasa Akkāman?) is one of the two deuteragonists of the series. She is the last descendant of the Shogun clan that stayed on Paradis Island, thereby related to the Azumabito family, and holds significant political power in Hizuru.",
    img: "/aot/characters/mikasa1.png",
  },
  {
    name: "Armin Arlert",
    role: "The Strategist",
    desc:
      "Armin Arlelt (アルミン・アルレルト Arumin Arureruto?) is the 15th and current commander (団長 Danchō?) of the Scout Regiment. He is also a childhood friend of Eren Jaeger and Mikasa Ackermann, and is one of the two deuteragonists of the series",
    img: "/aot/characters/armin1.png",
  },
  {
    name: "Levi Ackerman",
    role: "Humanity’s Strongest",
    desc:
      "Levi Ackermann (リヴァイ・アッカーマン Rivai Akkāman?), often formally referred to as Captain Levi (リヴァイ兵長 Rivai Heichō?), is the squad captain (兵士長 Heishichō?, lit. leader of the soldiers of the Special Operations Squad within the Scout Regiment, and is said to be humanity's strongest soldier.",
    img: "/aot/characters/levi1.png",
  },
  {
    name: "Erwin Smith",
    role: "Commander",
    desc:
      "Erwin Smith (エルヴィン・スミス Eruvin Sumisu?) was the 13th commander (団長 Danchō?) of the Survey Corps. Discerning, intelligent, and widely respected, Erwin was an able commander. While he cared deeply for his men, he did not hesitate to sacrifice them for the good and prosperity of mankind",
    img: "/aot/characters/erwin3.png",
  },
  {
    name: "Hange Zoë",
    role: "Scientist & Commander",
    desc:
      "Hange Zoë (ハンジ・ゾエ Hanji Zoe?) was the 14th commander (団長 Danchō?) of the Survey Corps, named so by Erwin Smith before his death.[7] Hange was formerly a squad leader (分隊長 Bun-taichō?) in charge of the Fourth Squad, having the duties of innovative inventing",
    img: "/aot/characters/hange2.png",
  },
];


export default function CharactersPage() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-36 space-y-48">
        {characters.map((char, i) => {
          const isReverse = i % 2 !== 0;

          return (
            <div
              key={char.name}
              className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
            >
              {/* TEXT */}
              <div
                className={`${
                  isReverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* NAME */}
                <h2 className="font-display text-5xl md:text-6xl font-bold tracking-[0.15em]">
                  {char.name}
                </h2>

                {/* ROLE */}
                <p className="mt-4 text-red-600 tracking-[0.45em] text-xs uppercase font-body">
                  {char.role}
                </p>

                {/* DIVIDER */}
                <div className="w-20 h-[1px] bg-red-700/70 my-8" />

                {/* DESCRIPTION */}
                <p className="max-w-md text-gray-300 text-[15px] leading-8 tracking-wide font-body font-light">
                  {char.desc}
                </p>
              </div>

              {/* IMAGE */}
              <div
                className={`${
                  isReverse ? "lg:order-1" : "lg:order-2"
                } flex justify-center`}
              >
                <Image
                  src={char.img}
                  alt={char.name}
                  width={440}
                  height={620}
                  className="
                   mt-auto
                   mb-auto
                    object-contain
                    opacity-95
                    drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]
                  "
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
