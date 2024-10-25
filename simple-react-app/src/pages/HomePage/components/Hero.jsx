export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center rounded-lg border-2 border-orange-500">
      <div className="flex flex-col p-10 md:p-20 gap-2 w-full md:w-1/2">
        <h1 className="font-semibold text-3xl md:text-5xl">JSON Placeholder</h1>
        <h2 className="text-2xl md:text-4xl text-orange-500">Simple App</h2>
      </div>
      <div className="flex p-10 w-full md:w-1/2 justify-center items-center">
        <img
          src="/images/posts.svg"
          alt="Image of person looking at posts"
          className="object-cover w-[300px] h-[300px]"
        />
      </div>
    </section>
  );
}
