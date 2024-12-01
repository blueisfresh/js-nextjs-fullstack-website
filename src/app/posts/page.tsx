export default async function Page() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>

      <ul>
        {data.posts.map((post) => (
          <li key={post.id} className="mb-5">
            <h2 className="text-2xl font-bold">{post.title}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}
