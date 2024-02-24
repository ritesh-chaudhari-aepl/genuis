const Error404 = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center grid gap-4">
        <h1 className="text-9xl font-Inter font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold font-Inter tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="my-4 text-gray-500">We can&apos;t find that page.</p>

        <a
          href="/"
          className="bg-gradient-to-r hover:no-underline cursor-pointer from-slate-900 to-slate-700 text-white w-full px-16 py-4 rounded-full font-bold font-Nunito"
        >
          Back Home
        </a>
      </div>
    </div>
  );
};

export default Error404;
