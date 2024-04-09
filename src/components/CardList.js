import CardItem from "./CardItem";

const CardList = ({ title, cardsList }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg ml-3 font-semibold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {cardsList?.map((card) => (
            <CardItem key={card.title} cardData={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardList;