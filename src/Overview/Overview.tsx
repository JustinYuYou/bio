import "./Overview.css"
export const Overview = () => {
   return (
      <div className="overview">
         <div className="overview-experience">
            <p className="year-exp">{getYearsOfExp()}+</p>
            <p>Years of Experience</p>
         </div>
         <div className="overview-project">
            <p className="complete-project">{getNumOfCompletedProjects()}+</p>
            <p>Completed Project</p>
         </div>
      </div>
   )
}

const getYearsOfExp = () => new Date().getFullYear() - 2019;
const getNumOfCompletedProjects = () => 6;