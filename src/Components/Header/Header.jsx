import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 mx-4 border-b-2">
      <h1 className="text-4xl font-bold">
        <span className="text-red-500">Knowledge </span>Cafe
      </h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;