import { FaTriangleExclamation } from "react-icons/fa6";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaTriangleExclamation className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">Tato stránka neexistuje</p>
      <a href="/" className="underline">
        Jít zpět
      </a>
    </section>
  );
};

export default NotFoundPage;
