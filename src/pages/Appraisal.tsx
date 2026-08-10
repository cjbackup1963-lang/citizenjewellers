import {
  BadgeCheck,
  Gem,
  MessageCircle,
  Scale,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function Appraisal() {
  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum, I would like to book a jewellery assessment and appraisal.

Please guide me about purity testing, weight verification, condition assessment and valuation.`
  );

  const services = [
    {
      icon: <SearchCheck size={22} aria-hidden="true" />,
      title: "Gold Purity Assessment",
      description:
        "Assessment of the jewellery's gold purity or karat based on the testing method available at our outlet.",
    },
    {
      icon: <Scale size={22} aria-hidden="true" />,
      title: "Weight Verification",
      description:
        "Verification of the jewellery's gross and applicable net weight for valuation purposes.",
    },
    {
      icon: <Gem size={22} aria-hidden="true" />,
      title: "Gemstone Details",
      description:
        "Basic gemstone observations and jewellery details where applicable to the piece being assessed.",
    },
    {
      icon: <Sparkles size={22} aria-hidden="true" />,
      title: "Condition Assessment",
      description:
        "Visual review of the jewellery's current condition, workmanship and visible wear.",
    },
    {
      icon: <BadgeCheck size={22} aria-hidden="true" />,
      title: "Indicative Valuation",
      description:
        "An indicative valuation based on verified gold content, weight, condition and prevailing market factors.",
    },
    {
      icon: <ShieldCheck size={22} aria-hidden="true" />,
      title: "Assessment Record",
      description:
        "A written assessment summary may be provided according to the scope of the service performed.",
    },
  ];

  return (
    <section
      className="
        min-h-screen
        bg-[#050505]
        px-5
        py-14
        sm:px-6
        lg:py-20
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#D4AF37]
            "
          >
            Jewellery Assessment
          </p>

          <h1
            className="
              mt-5
              font-serif
              text-4xl
              leading-tight
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Jewellery Assessment & Appraisal
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-white/55
              sm:text-base
            "
          >
            Get your jewellery assessed for purity, weight, condition and
            indicative value through a transparent in-store evaluation process.
          </p>
        </div>

        {/* Service Cards */}
        <div
          className="
            mt-12
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="
                rounded-[24px]
                border
                border-[#D4AF37]/15
                bg-[#0a0a0a]
                p-6
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#D4AF37]/40
              "
            >
              <div
                className="
                  grid
                  h-12
                  w-12
                  place-items-center
                  rounded-full
                  border
                  border-[#D4AF37]/30
                  bg-[#D4AF37]/[0.04]
                  text-[#D4AF37]
                "
              >
                {service.icon}
              </div>

              <h2 className="mt-5 font-serif text-2xl text-white">
                {service.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/45">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* Process */}
        <div
          className="
            mt-12
            grid
            gap-8
            rounded-[28px]
            border
            border-[#D4AF37]/15
            bg-[#0a0a0a]
            p-6
            sm:p-8
            lg:grid-cols-[1fr_0.9fr]
            lg:p-10
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]
              "
            >
              How It Works
            </p>

            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
              Professional In-Store Assessment
            </h2>

            <div className="mt-7 space-y-6">
              {[
                {
                  number: "01",
                  title: "Bring Your Jewellery",
                  text: "Visit our outlet with the jewellery item you would like to have assessed.",
                },
                {
                  number: "02",
                  title: "Physical Examination",
                  text: "The piece is examined for purity, weight, visible condition and other relevant details.",
                },
                {
                  number: "03",
                  title: "Assessment & Valuation",
                  text: "The findings are reviewed and an indicative valuation is discussed based on the assessment scope.",
                },
                {
                  number: "04",
                  title: "Assessment Summary",
                  text: "Where applicable, a written summary may be provided describing the assessment performed.",
                },
              ].map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div
                    className="
                      grid
                      h-11
                      w-11
                      shrink-0
                      place-items-center
                      rounded-full
                      border
                      border-[#D4AF37]/35
                      text-xs
                      font-bold
                      text-[#D4AF37]
                    "
                  >
                    {step.number}
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      {step.title}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/45">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA / Disclaimer */}
          <aside
            className="
              h-fit
              rounded-[24px]
              border
              border-[#D4AF37]/20
              bg-black/35
              p-6
              sm:p-7
            "
          >
            <ShieldCheck
              size={28}
              className="text-[#D4AF37]"
              aria-hidden="true"
            />

            <h3 className="mt-5 font-serif text-3xl text-white">
              Book an Assessment
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/50">
              Contact our team to discuss the jewellery item you would like to
              have assessed and arrange a suitable visit.
            </p>

            <a
              href={`https://wa.me/923352484936?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                flex
                min-h-14
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#D4AF37]
                px-6
                text-sm
                font-bold
                uppercase
                tracking-[0.08em]
                text-black
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e2c15b]
              "
            >
              <MessageCircle size={18} aria-hidden="true" />
              Book Assessment
            </a>

            <div
              className="
                mt-6
                border-t
                border-white/7
                pt-5
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#D4AF37]
                "
              >
                Important
              </p>

              <p className="mt-3 text-xs leading-6 text-white/40">
                This jewellery assessment is not represented as an independent
                gemological laboratory grading report or laboratory certificate
                unless a separate accredited laboratory service is specifically
                arranged and identified.
              </p>
            </div>
          </aside>
        </div>

        {/* Trust Note */}
        <div
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-center
          "
        >
          <p className="text-xs leading-6 text-white/35">
            The scope and accuracy of any assessment depends on the testing
            methods and examination actually performed on the jewellery item.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Appraisal;