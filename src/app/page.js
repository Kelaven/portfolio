import ThreeScene from "@/components/hero/ThreeScene";
import Layout from "@/components/layout/Layout";
// import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <ThreeScene />
      </div>
    </Layout>
  );
}
