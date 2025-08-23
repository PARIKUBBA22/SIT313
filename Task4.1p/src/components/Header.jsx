function Header() {
  return (
    <div>
      DEV@Deakin
      <button syle={{ height: "13px" }}>&#128269;</button>
      <input type="text" syle={{ height: "13px" }} placeholder="search"></input>
      {/* <br /> */}
      <a href="#" style={{ color: "blue", margin: "10px" }}>
        {" "}
        home
      </a>
      <a href="#" style={{ color: "blue", margin: "10px" }}>
        contact
      </a>
      <a href="#" style={{ color: "blue", margin: "10px" }}>
        articles
      </a>
    </div>
  );
}
export default Header;
