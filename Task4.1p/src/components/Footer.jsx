function Footer() {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <br />
      SIGN UP FOR DAILY INSIDER
      <input
        style={{ margin: "10px" }}
        type="text"
        placeholder="Enter your Email"
      ></input>
      <button type="submit">Subscribe</button>
      <div style={{ backgroundColor: "green", textAlign: "center" }}>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "100px" }}
        >
          {" "}
          <div>
            <h3>Explore</h3>
            home <br />
            Questions <br />
            Articles
            <br />
            Tutorials
          </div>
          <div>
            <h3>Support</h3>
            FAQs
            <br />
            Help
            <br />
            Contact Us
          </div>
          <div>
            <h3>Stay Connected</h3>
            Facebook <br />
            Twitter
            <br />
            Instagram
          </div>
        </div>{" "}
        DEV@deakin 2022
        <br />
        <p style={{ display: "inline", margin: "30px" }}>Privacy policy</p>{" "}
        <p style={{ display: "inline", margin: "30px" }}>Terms </p>
        <p style={{ display: "inline", margin: "30px" }}> Code of COnduct</p>
      </div>
    </div>
  );
}
export default Footer;
