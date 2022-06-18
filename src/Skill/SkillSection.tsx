import Chip from "@mui/material/Chip/Chip";
import "./SkillSection.scss";


const CHIP_COLORS = ["#708DAF", "#25586D", "#3E7A9C"];
export const SkillSection = ({ skills }: { skills: string[] }) => {
   return (
      <div id="skill">
         <h1>Skill</h1>
         <div className="skill-chip-list">
            {skills.map((item, index) => <Chip className="chip" label={item} sx={{ color: "white", "background-color": CHIP_COLORS[index % 3] }} />)}
         </div>
      </div>
   )
}