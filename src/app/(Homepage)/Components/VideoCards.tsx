import { videoModule } from "@/utils/mockData";
import CourseCard from "@/app/(Homepage)/Components/CourseCard";

const VideoCards = () => {
  return (
    <section className="py-20 bg-[linear-gradient(180deg,_#FCEFEF_0%,_#FFFFFF_100%)]">
      <div className="w-container-1240  mx-auto">
        <div className="content-wrapper flex flex-col">
          <h2 className="text-body-1 font-bold">Watch Free Demo Videos</h2>
          <p className="pt-3 text-base font-medium">
            Our courses provide conceptual clarity with a result oriented and
            application driven approach for Political Science, Geography,
            History, Economics,Aptitude & Reasoning, Psychology and Sociology.
            These result-oriented courses are structured .
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {videoModule.map((course) => (
            <CourseCard key={`card-${course.id}`} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCards;
