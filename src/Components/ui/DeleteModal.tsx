import { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

import { TProjectData, } from "@/types";


import { useDeleteProjectMutation, } from "../../redux/api/allReliefGoodsApi";
// import { LoaderCircle } from 'lucide-react';
type TProjectModalProps = {
  children: ReactNode;
  project: TProjectData;
};

const DeleteModal = ({ children, project }: TProjectModalProps) => {
    const [deleteProject, { isLoading }] = useDeleteProjectMutation();
    return (
        <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            supply post data from our server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteProject({ id: project.id })}>
            {isLoading ? "loading..." : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    );
};

export default DeleteModal;