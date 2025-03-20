import { VideoType } from "@/utils/types";

const Video = ({ src, height }: VideoType) => {
  return (
    <video
      className={`w-full object-cover h-[${height}px]`}
      autoPlay
      muted
      loop
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
