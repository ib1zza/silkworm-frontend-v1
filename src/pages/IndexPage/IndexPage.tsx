import { Catalog } from "@/widgets/Catalog";
import s from "./IndexPage.module.scss";

export default function IndexPage() {
  return (
    <div className={s.page}>
      <div className={s.hero}></div>

      <Catalog />
    </div>
  );
}
