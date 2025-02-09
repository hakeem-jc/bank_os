export default function Home() {
  return (
    <main>
      <nav className="bg-[#212121] w-full border-b border-gray-600 mb-6">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
             Bank OS API's
            </span>
          </a>
        </div>
      </nav>

      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs uppercase bg-[#212121]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Methods
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-t bg-[#212121] border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ACH
            </th>
            <td className="px-6 py-4">POST /example</td>
          </tr>

          <tr className="border-b border-t bg-[#212121] border-gray-20">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              RTGS
            </th>
            <td className="px-6 py-4">POST /example</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
