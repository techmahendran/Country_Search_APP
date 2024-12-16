import Header from "@/components/Header";
import MainContainer from "@/components/Main-container";

export const metadata = {
  title: "Country Search",
};

export default function Home() {
  return (
    <>
      <title>{metadata.title}</title>
          {/* <Header /> */}
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white rounded-md p-8 w-[80vw] max-w-xl shadow-lg">
          <MainContainer />
        </div>
      </div>
    </>
  );
}
