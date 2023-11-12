import { NewsCard } from "./NewsCard";

const ListNewsCards = ({ articelList }) => {
  
  return (
    <>
      <div className="container mx-auto justify-center flex flex-wrap  gap-6 p-3 lg:flex-row lg:flex-wrap">
        {articelList.map((card, index) => {
          return (
            <NewsCard
              key={index}
              id={card.id}
              title={card.title}
              view={card.view}
              nameWriter={card.nameWriter}
              description={card.description}
              // pic={NewsCard.pic}
            />
          );
        })}
      </div>
    </>
  );
};

export { ListNewsCards };
