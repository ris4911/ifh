import FourColumnWithNumber from "@/app/(Homepage)/Components/Module-title-desc-4-col";
import Cards from "./Components/Cards";
import VideoCards from "./Components/VideoCards";

export default function Home() {
  return (
    <div className="page-wrapper">
      <FourColumnWithNumber />
      <Cards />
      <VideoCards />
    </div>
  );
}
