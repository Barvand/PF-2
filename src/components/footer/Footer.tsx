import Waves from "../../waves/Waves";
function Footer() {
  return (
    <div className="bg-main flex flex-col justify-center relative mb-20 gap-10 pb-20">
      <Waves color={"#000"} flip={false} />
      <div className="container border-b border-black flex justify-between cursor-pointer group">
        <h2 className="text-5xl font-bold">Projects</h2>
        <div className="transition-transform duration-300 group-hover:animate-bounce"></div>
      </div>
      <div className="container border-b border-black flex justify-between cursor-pointer group">
        <h2 className="text-5xl font-bold">Tech stack</h2>
        <div className="transition-transform duration-300 group-hover:animate-bounce"></div>
      </div>
      <div className="container border-black border-b flex justify-between cursor-pointer group">
        <h2 className="text-5xl font-bold">Learn more about me</h2>
        <div className="transition-transform duration-300 group-hover:animate-bounce"></div>
      </div>
    </div>
  );
}

export default Footer;
