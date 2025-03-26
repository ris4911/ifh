"use client";
import { videoModule } from "@/utils/mockData";
import CourseCard from "@/app/(Homepage)/Components/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./style.css";

const VideoCards = () => {
  return (
    <section className="py-20 bg-[linear-gradient(180deg,_#FCEFEF_0%,_#FFFFFF_100%)]">
      <div className="w-container-1240  mx-auto">
        <div className="grid grid-cols-10 max-w-[980px]">
          <div className="content-wrapper col-span-10 flex flex-col">
            <h2 className="text-body-1 font-bold">Watch Free Demo Videos</h2>
            <p className="pt-3 text-base font-medium">
              Our courses provide conceptual clarity with a result oriented and
              application driven approach for Political Science, Geography,
              History, Economics,Aptitude & Reasoning, Psychology and Sociology.
              These result-oriented courses are structured .
            </p>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          className="videos-slider"
        >
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {videoModule.map((course) => (
              <SwiperSlide key={`card-${course.id}`}>
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default VideoCards;
