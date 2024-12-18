import { FaTriangleExclamation } from "react-icons/fa6";
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaTriangleExclamation className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">Tato stránka neexistuje</p>
      <Link to="/" className="underline">
        Jít zpět
      </Link>
    </section>
  );
};

export default NotFoundPage;
