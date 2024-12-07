import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const BackButton = ({ destination = "/movies" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-300 text-black px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowRight className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
