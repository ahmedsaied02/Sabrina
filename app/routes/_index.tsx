import type { MetaFunction } from "@remix-run/node";
import page1 from "~/assets/Menu_page-0001.webp"
import page2 from "~/assets/Menu_page-0002.webp"
import page3 from "~/assets/Menu_page-0003.webp"
import page4 from "~/assets/Menu_page-0004.webp"
import page5 from "~/assets/Menu_page-0005.webp"
import page6 from "~/assets/Menu_page-0006.webp"
import page7 from "~/assets/Menu_page-0007.webp"
import page8 from "~/assets/Menu_page-0008.webp"
import page9 from "~/assets/Menu_page-0009.webp"
import page10 from "~/assets/Menu_page-0010.webp"
import page11 from "~/assets/Menu_page-0011.webp"
import page12 from "~/assets/Menu_page-0012.webp"
import page13 from "~/assets/Menu_page-0013.webp"
import page14 from "~/assets/Menu_page-0014.webp"
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-2">
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
