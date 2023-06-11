import CardBlog from "./(components)/card-blog";

export default function Home() {
  const tabs = ['View All', 'Programming', 'Architecture', 'Database', 'Tips & Trick', 'Motivation'];
  return (
    <main className="flex flex-col content">
      <section className="py-10 md:py-20 flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="md:text-5xl text-3xl font-semibold mb-5 md:mb-0">Koding</h1>
        </div>
        <div className="w-full md:w-[560px] text-start text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae fugiat at distinctio ex ipsam aliquid tenetur eaque mollitia dignissimos facilis
        </div>
      </section>
      <section className="relative min-w-min flex flex-col md:items-start items-center mt-5">
        <input type="text" className="border px-4 py-3 rounded-full w-full md:w-96 block md:absolute" placeholder={'your email'} />
        <button className="bg-black text-white block md:mt-0 mt-5 md:max-w-fit w-full md:absolute px-4 py-3 rounded-full left-72 md:left-80">Subscribe</button>
      </section>
      <section className="mt-32">
        {/* tab bar */}
        <div>
          {tabs.map((item, index) => {
            return (
            <button key={index} className={`font-bold py-5 text-sm ${index == 0 ? "text-black" : "text-gray-400"} mr-10`}>
              {item}
            </button>
            )
          })}
        </div>
        {/* tab container */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <CardBlog slug="app-app" />
          <CardBlog slug="app-three" />
          <CardBlog slug="app-two" />
          <CardBlog slug="app-onw" />
          <CardBlog slug="app-zero" />
          <CardBlog slug="app-minus" />
        </div>
        {/* tab footer */}
        <div className="w-full mt-10 flex justify-center">
          <button className="bg-black px-6 py-2 rounded-full text-white font-semibold">Load More</button>
        </div>
      </section>
    </main>
  )
}
