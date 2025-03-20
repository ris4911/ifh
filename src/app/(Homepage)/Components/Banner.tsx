import Video from "@/components/Common/Video";

const Banner = () => {
  return (
    <>
      <Video
        src="/assets/videos/banner-video.mp4"
        bannerVideo={true}
        height={660}
      />
    </>
  );
};

export default Banner;
