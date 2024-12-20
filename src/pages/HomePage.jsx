

const HomePage = () => {
  return (
    <div className="flex items-center justify-center bg-[url('C:\Users\lucie\VMRS\schoolTrackReact\src\assets\images\file-A0kWzdfy1NFm6I0ygsQNoLf3_1.webp')] bg-cover bg-center h-screen">
      <form action="" className="border p-8 rounded shadow-md">
        <h1 className="text-xl font-bold mb-4">Přihlásit se</h1>
        <label htmlFor="" className="block">
          Přihlašovací jméno
        </label>
        <input type="text" className="border p-2 w-full mb-4" />
        <label htmlFor="" className="block">
          Heslo
        </label>
        <input type="text" className="border p-2 w-full mb-4ck" />
        <a href="#" className="block m-2 p-2 underline">Zapomenuté heslo</a>
        <button className="border text-black px-4 py-2 rounded mt-4">Přihlásit se</button>
      </form>
    </div>
  );
};

export default HomePage;
