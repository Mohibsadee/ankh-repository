import PropTypes from "prop-types";
import photo from '../../assets/photo.png';
import { FaGraduationCap } from "react-icons/fa";


const Card5 = ({ title, description }) => (
  <div className="bg-red-50 shadow-lg p-4  overflow-hidden">
    <div className="p-4">
      <h2 className="flex mt-4 items-center  mb-12 font-bold text-lg">
        <FaGraduationCap />
        <div className="mx-2 font-hirakaku">
          {title}
        </div>

      </h2>

      <img className="w-full h-auto" src={photo} alt={title} />

      <p className="py-8 font-hirakaku">
      めん徳　二代目つじ田　新橋店 1月24日にオープンしたばかりのラーメン店。 看板メニューのつけ麺は3段階に進化します。 最初はそのまま、途中ですだちを絞って爽やかに、
      </p>

    </div>
  </div>

);


Card5.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card5;
