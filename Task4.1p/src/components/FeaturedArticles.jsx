function FeaturedArticles() {
  let articles = [
    {
      title: "react basics",
      author: "john",
      description: "React OR Vue",
      rating: 5,
      image:
        "https://th.bing.com/th/id/OIP.PtU3oZdtcX1QysiofE2zOQHaE8?w=274&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      title: "props",
      author: "jane",
      description: "NodeJS",
      rating: 4,
      image:
        "https://th.bing.com/th/id/OIP.bXQXRJ4Q2cprQHU9BD5x5AHaD4?w=317&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Featured Articles</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {articles.map((val) => (
          <div>
            <span style={{ lineHeight: "0.3" }}>
              <img style={{ width: "200px" }} src={val.image}></img>
              <h3>Title: {val.title}</h3>
              <p>By: {val.author}</p>
              <p>Info: {val.description}</p>
              <p>Rating: {val.rating}</p>
            </span>
          </div>
        ))}
      </div>
      <button>See all articles </button>
    </div>
  );
}

export default FeaturedArticles;
