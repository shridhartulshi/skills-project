import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import pdata from "@/Data/pdata";

function Proftable() {
  return (
    <>
      {pdata.map((pdata, index) => (
        <div key={index}>
          <ul className="flex gap-20 text-sm  font-semibold pt-5">
            <li>{pdata.organisation}</li>
            <li>{pdata.tenure}</li>
          </ul>
          <ul className="text-sm  font-semibold mb-3">
            <li>{pdata.designation}</li>
          </ul>
          <div>
            <ul className="pt-3 pb-5 text-sm text-gray-600">
              <li className="mb-1">Project : {pdata.project}</li>
              <li className="mb-1">Description : {pdata.desc}</li>
              <li className="mb-1">Responsibilities : {pdata.resp}</li>
              <li className="mb-1">Technologies : {pdata.tech}</li>
            </ul>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Proftable;
