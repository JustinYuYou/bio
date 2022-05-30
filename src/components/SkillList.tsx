import { Chip } from "@react-md/chip";

export const SkillList = ({ skills }: { skills: string[] }) => {
   return (<div>
      {skills.map((item, index) => <Chip id={item}>item</Chip>)}
   </div>)
}