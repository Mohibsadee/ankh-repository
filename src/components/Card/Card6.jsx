import PropTypes from "prop-types";
import ramen from '../../assets/ramen.png';
import pickupfood from '../../assets/Pickupfoods.png';

const Card6 = ({ }) => (
  <div className="flex justify-center items-center bg-[#E9BC06] ">
    <div className="">
      <img className="mb-4 mr-4" src={pickupfood} alt="" />
      <div className="flex">
        <img className="mr-4 h-full" src={ramen} alt="" />
        <p className="w-[217px] text-white font-thin font-hirakaku h-[269px]">めん徳　二代目つじ田　新橋店 1月24日にオープンしたばかりのラーメン店。 看板メニューのつけ麺は3段階に進化します。 最初はそのまま、途中ですだちを絞って爽やかに、 </p>
      </div>
    </div>
  </div>
);


Card6.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card6;
