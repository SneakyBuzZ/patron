export default function HeroImage() {
  return (
    <div className="relative w-full flex justify-center items-center mt-10 mb-20 px-32">
      <img
        src="https://res.cloudinary.com/dvwnsmtdy/image/upload/v1769698642/Screenshot_2025-01-05_124416_jb7it7.png"
        alt="Hero Image"
        className="border border-neutral-800 rounded-md z-10 relative"
      />

      {/* Center-top gradient glow */}
      <div className="absolute -top-10 left-12 right-0 w-[1200px] h-[1000px] blur-3xl rounded-full z-0 hero-gradient" />
    </div>
  );
}
