
export const SkillList = ({ skills }: { skills: string[] }) => {
   return (<div id="skill">
      <h1>Skill</h1>
      {skills.map((item, index) => <li>item</li>)}
   </div>)
}