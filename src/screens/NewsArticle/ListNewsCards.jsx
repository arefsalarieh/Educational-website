import { useNavigate } from "react-router-dom";
import { NewsCard } from "./NewsCard";
import NewsListSkeleton from "./NewsListSkeleton";

const ListNewsCards = ({ data, isLoading }) => {
  const navigate = useNavigate()
  if (isLoading) {
    <NewsListSkeleton />;
  }

  return (
    <div className="container mx-auto justify-center flex flex-wrap  gap-6 p-3 lg:flex-row lg:flex-wrap">
      {data?.map((card, index) => {
        return (
          <NewsCard
            key={index}
            id={card.id}
            title={card.title}
            view={card.currentView}
            nameWriter={card.addUserFullName}
            description={card.miniDescribe}
            pic={card.currentImageAddressTumb}
            isLiked={card.currentUserIsLike}
            onClick={() => navigate("/NewsArticle/menudetail/" + card.id)}
          />
        );
      })}
    </div>
  );
};

export { ListNewsCards };
