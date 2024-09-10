import Link from "next/link";

export default function Page() {
  return (
    <div className="flex py-32 md:px-96 ml-10">
      <div className="md:flex px-32 w-full justify-between">
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-6xl font-sans">404</h1>
        </div>
        <p className="border-r-2"></p>
        <div className="flex flex-col md:gap-5 gap-8 items-center md:items-start md:mt-0 mt-12">
          <p className="text-xl font-bold">Page Not Found</p>

          <Link href="/">
            <button className="w-fit border-2 bg-blue-500 text-white border-none py-2 px-4 rounded-xl font-sans">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
