import Image from "next/image";
import PageIntro from "~/components/layout/PageIntro";
import Menu from "~/components/menu";

export default function Home() {
  return (
    <>
      <PageIntro
        heading="وجباتنا الرئيسية"
        text="تتميز وجباتنا الرئيسية بمجموعة لذيذة من الأطباق المعدة بخبرة، والمحضرة
        من مكونات طازجة وعالية الجودة"
      />
      <Menu />
    </>
  );
}
