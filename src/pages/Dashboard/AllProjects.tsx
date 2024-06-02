import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../../Components/ui/loader";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../Components/ui/table";
import EditModal from "../../Components/ui/EditModal";
import { Button } from "../../Components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import DeleteModal from "../../Components/ui/DeleteModal";
import { useGetAllProjectsQuery } from "../../redux/api/allReliefGoodsApi";
import { TProjectData } from "../../types";
import Error from "../../Components/ui/Error";
const AllProjects = () => {
  const navigate = useNavigate();
 
  const { data, isLoading, isError } = useGetAllProjectsQuery(undefined);
  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <Error></Error>;
  }

  console.log(data);


  console.log("projects data...",data)



    return (
        <div>
              <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: TProjectData) => (
          <TableRow key={item.id}>
            <TableCell>{item?.name}</TableCell>
            <TableCell>{item}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell className="text-right space-x-5">
              {/* <EditModal supply={item}>
                <Button>
                  <Pencil />
                </Button>
              </EditModal> */}
              {/* <DeleteModal supply={item}>
                <Button variant="destructive">
                  <Trash2 />
                </Button>
              </DeleteModal> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="">
          <TableCell colSpan={4} className="">
            <Button onClick={() => navigate("/dashboard/create-supply")}>
              Add Supply
            </Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
        </div>
    );
};

export default AllProjects;