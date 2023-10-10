import { NewsCard } from "./NewsCard";

const ListNewsCards = ({ articelList }) => {
  return (
    <>
      <div className="container mx-auto justify-center flex flex-col gap-6 lg:flex-row lg:container">
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
