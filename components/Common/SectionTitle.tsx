const SectionTitle = ({
  kicker,
  title,
  paragraph,
  width = "800px",
  center,
  mb = "100px",
}: {
  kicker?: string;
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        {kicker && <p className='uppercase overline-title text-primary text-[12px] tracking-widest'>{kicker}</p>}
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-[40px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed dark:text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
