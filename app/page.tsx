import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Next.js</h1>
        <p className="text-lg mb-8">
          Start building your next project with the power and simplicity of Next.js.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <a
            className="bg-white text-blue-500 rounded-full py-2 px-4 text-sm font-semibold transition-colors hover:bg-gray-200"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            className="bg-transparent border-2 border-white rounded-full py-2 px-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-blue-500"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Docs
          </a>
        </div>
      </div>
    </div>
  );
}
