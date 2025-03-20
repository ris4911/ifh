import { VideoType } from "@/utils/types";

const Video = ({ src, bannerVideo }: VideoType) => {
  return (
    <video
      className={`w-full object-cover ${bannerVideo ? "h-[660px]" : ""}`}
      autoPlay
      muted
      loop
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
