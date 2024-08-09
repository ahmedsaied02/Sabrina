import type { MetaFunction } from "@remix-run/node";
import page1 from "~/assets/Menu_page-0001.jpg"
import page2 from "~/assets/Menu_page-0002.jpg"
import page3 from "~/assets/Menu_page-0003.jpg"
import page4 from "~/assets/Menu_page-0004.jpg"
import page5 from "~/assets/Menu_page-0005.jpg"
import page6 from "~/assets/Menu_page-0006.jpg"
import page7 from "~/assets/Menu_page-0007.jpg"
import page8 from "~/assets/Menu_page-0008.jpg"
import page9 from "~/assets/Menu_page-0009.jpg"
import page10 from "~/assets/Menu_page-0010.jpg"
import page11 from "~/assets/Menu_page-0011.jpg"
import page12 from "~/assets/Menu_page-0012.jpg"
import page13 from "~/assets/Menu_page-0013.jpg"
import page14 from "~/assets/Menu_page-0014.jpg"
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex">
      <img src={page1} alt="" />
      <img src={page2} alt="" />
      <img src={page3} alt="" />
      <img src={page4} alt="" />
      <img src={page5} alt="" />
      <img src={page6} alt="" />
      <img src={page7} alt="" />
      <img src={page8} alt="" />
      <img src={page9} alt="" />
      <img src={page10} alt="" />
      <img src={page11} alt="" />
      <img src={page12} alt="" />
      <img src={page13} alt="" />
      <img src={page14} alt="" />
    </div>
  );
}
