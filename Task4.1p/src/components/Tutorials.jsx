function Tutorials() {
  let articles = [
    {
      title: "tom",

      description: "React OR Vue",
      rating: 5,
      image:
        "data:image/webp;base64,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",
    },
    {
      title: "jerry",

      description: "NodeJS",
      rating: 4,
      image:
        "https://thfvnext.bing.com/th/id/OIP.RSEYKmm_k6nZkrNuN7RiDAHaGi?w=194&h=180&c=7&r=0&o=5&cb=thfvnext&dpr=1.3&pid=1.7",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Featured Tutorials</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {articles.map((val) => (
          <div>
            <span style={{ lineHeight: "0.3" }}>
              <img style={{ width: "200px" }} src={val.image}></img>
              <h3>Name: {val.title}</h3>
              <p>description: {val.description}</p>
              <p>Rating: {val.rating}</p>
            </span>
          </div>
        ))}
      </div>
      <button>See all Tutorials</button>
    </div>
  );
}

export default Tutorials;
