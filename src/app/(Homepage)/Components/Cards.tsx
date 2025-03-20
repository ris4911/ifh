import { courses } from "@/utils/mockData";
import CourseCard from "@/app/(Homepage)/Components/CourseCard";
import Button from "@/components/Common/Button";

const Cards = () => {
  return (
    <section className="py-20 bg-[linear-gradient(180deg,_#EDF1F8_0%,_#FFFFFF_100%)]">
      <div className="w-container-1240  mx-auto">
        <div className="content-wrapper flex flex-col items-center">
          <h2 className="text-body-1 font-bold">Our Best Courses</h2>
          <p className="pt-3 text-base font-medium">
            Our courses provide conceptual clarity with a result-oriented
            approach for Political Science, Geography, History, Economics, and
            more.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {courses.map((course) => (
            <CourseCard key={`card-${course.id}`} course={course} />
          ))}
        </div>
        <div className="button-wrapper flex justify-center pt-10">
          <Button href="#" title="View all courses" type={"primary"} />
        </div>
      </div>
    </section>
  );
};

export default Cards;
