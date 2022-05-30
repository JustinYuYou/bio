
export const SkillList = ({ skills }: { skills: string[] }) => {
   return (<div>
      {skills.map((item, index) => <li>item</li>)}
   </div>)
}