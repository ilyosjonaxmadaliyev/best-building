function Navbar() {
  return (
    <div className="flex items-center w-full">
      <div className=" border-r-[55px] border-r-[#364782] border-b-[44px] border-b-transparent"></div>
      <ul className="flex items-center gap-8 bg-[#364782] px-24 py-2 text-white text-lg">
        <li>
          <a href="#home">Asosiy</a>
        </li>
        <li>
          <a href="#about">Biz haqimizda</a>
        </li>
        <li>
          <a href="#services">Xizmatlar</a>
        </li>
        <li>
          <a href="#advantages">Afzalliklarimiz</a>
        </li>
        <li>
          <a href="#news">Yangiliklar</a>
        </li>
        <li>
          <a href="#informations">Malumotlar</a>
        </li>
        <li>
          <a href="#contact">Aloqa</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
