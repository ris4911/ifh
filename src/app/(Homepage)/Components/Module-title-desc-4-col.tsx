import { fourColumnNumberTitle } from "@/utils/mockData";

const FourColumnWithNumber = () => {
  return (
    <>
      <div
        className="min-h-52 bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/assets/images/banner-gradient.png')" }}
      >
        <div className="w-container-1440 px-2 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {fourColumnNumberTitle?.map((count, index) => (
              <div key={`{${count?.title} - ${index}}`} className="text-center">
                <h3 className="text-body-1 font-bold">{count.title}</h3>
                <p className="text-xl pt-4">{count.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default FourColumnWithNumber;
