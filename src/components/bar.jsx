export default function Bar({ dark, light }) {
  return (
    <>
      <span
        className={`inline-block w-40 h-1 rounded-full ${
          dark ? 'bg-slate-600' : light ? 'bg-orange-500' : 'bg-orange-600'
        }`}
      ></span>
      <span
        className={`inline-block w-3 h-1 ml-1 rounded-full ${
          dark ? 'bg-slate-600' : light ? 'bg-orange-500' : 'bg-orange-600'
        }`}
      ></span>
      <span
        className={`inline-block w-1 h-1 ml-1 rounded-full ${
          dark ? 'bg-slate-600' : light ? 'bg-orange-500' : 'bg-orange-600'
        }`}
      ></span>
    </>
  );
}
