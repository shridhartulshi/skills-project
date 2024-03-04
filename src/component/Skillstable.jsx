import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import skills from "@/Data/skills-data";

function Skillstable() {
  return (
    <>
      {skills.map((skills, index) => (
        <div key={index}>
          
          <div>
            <ul className="pt-3 pb-5 text-sm text-gray-600">
              <li className="mb-1">Skill : {skills.skill}</li>
              <li className="mb-1">Category : {skills.category}</li>
              <li className="mb-1">Level : {skills.level}</li>
           
            </ul>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Skillstable;
