import Button from "@/components/Common/Button";
import Video from "@/components/Common/Video";
import { Course } from "@/utils/types";
import Image from "next/image";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="bg-white border text-start border-border-color shadow-md rounded-lg p-5 transition-transform hover:scale-105">
      {course?.image && (
        <Image
          src={course?.image}
          alt={course?.title}
          className="w-full h-40 object-cover rounded-lg"
          height={161}
          width={255}
        />
      )}
      {course?.videoUrl && <Video src={course?.videoUrl} height={161} />}
      <h3 className="mt-4 text-base font-semibold">{course?.title}</h3>

      {course?.discountedPrice && (
        <div className="flex items-center gap-3">
          <p className="text-foreground text-base line-through">
            ₹{course?.originalPrice}
          </p>
          <p className="text-blue-4971B2 text-base font-medium">
            ₹{course?.discountedPrice}/-
          </p>
        </div>
      )}
      {course?.validity && (
        <p className="text-gray-600 text-xs mt-1">{course?.validity}</p>
      )}
      {course?.discountedPrice && (
        <div className="button-wrapper pt-10">
          <Button href="#" />
        </div>
      )}
    </div>
  );
};

export default CourseCard;
