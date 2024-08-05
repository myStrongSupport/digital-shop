import React from "react";
import classes from "./RecentNews.module.css";
import RecentNewsItem from "./RecentNewsItem";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";
const news = [
  {
    author: "October 5 , 2020",
    img: "https://i.pinimg.com/564x/2b/70/88/2b70888d5df774da0d1b87fa8c749107.jpg",
    title: "How to use perfect gadget",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos itaque aperiam odio qui tempore est soluta numquam iusto deserunt, ipsum doloremque quibusdam. Possimus repellat cupiditate, et error veniam temporibus vitae!",
    id: 1,
  },
  {
    author: "Des 5 , 2019",
    img: "https://i.pinimg.com/564x/c9/be/c7/c9bec73e431c1e32dad6bc59f0f037c9.jpg",
    title: "How to use perfect gadget",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos itaque aperiam odio qui tempore est soluta numquam iusto deserunt, ipsum doloremque quibusdam. Possimus repellat cupiditate, et error veniam temporibus vitae!",
    id: 2,
  },
  {
    author: "Nov 18 , 2020",
    img: "https://i.pinimg.com/564x/b1/a7/e2/b1a7e23efd345f622f5f6994ccc1b311.jpg",
    title: "How to use perfect gadget",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos itaque aperiam odio qui tempore est soluta numquam iusto deserunt, ipsum doloremque quibusdam. Possimus repellat cupiditate, et error veniam temporibus vitae!",
    id: 3,
  },
  {
    author: "October 5 , 2020",
    img: "https://i.pinimg.com/564x/2b/70/88/2b70888d5df774da0d1b87fa8c749107.jpg",
    title: "How to use perfect gadget",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos itaque aperiam odio qui tempore est soluta numquam iusto deserunt, ipsum doloremque quibusdam. Possimus repellat cupiditate, et error veniam temporibus vitae!",
    id: 4,
  },
  {
    author: "Des 5 , 2019",
    img: "https://i.pinimg.com/564x/c9/be/c7/c9bec73e431c1e32dad6bc59f0f037c9.jpg",
    title: "How to use perfect gadget",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos itaque aperiam odio qui tempore est soluta numquam iusto deserunt, ipsum doloremque quibusdam. Possimus repellat cupiditate, et error veniam temporibus vitae!",
    id: 5,
  },
  {
    author: "Nov 18 , 2020",
    img: "https://i.pinimg.com/564x/b1/a7/e2/b1a7e23efd345f622f5f6994ccc1b311.jpg",
    title: "How to use perfect gadget",
    content:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos itaque aperiam odio qui tempore est soluta numquam iusto deserunt, ipsum doloremque quibusdam. Possimus repellat cupiditate, et error veniam temporibus vitae!",
    id: 6,
  },
];
const RecentNews = () => {
  return (
    <section className={classes["recent-news"]}>
      <div className="container">
        <div className={classes.head}>
          <h3>Recent News</h3>
          <p>There are many variations passages</p>
        </div>
        <div className={classes.news}>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              700: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 3,
              },
            }}
            grid={{ rows: 1 }}
            className={classes.swiper}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
          >
            {news.map((news) => (
              <SwiperSlide key={news.id}>
                <RecentNewsItem
                  key={news.id}
                  title={news.title}
                  content={news.content}
                  img={news.img}
                  author={news.author}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
