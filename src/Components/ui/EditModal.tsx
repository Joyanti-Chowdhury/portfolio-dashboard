import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { TProjectData, TProjectUpdateField } from "../../types";
import { ReactNode } from "react";

import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectUpdateValidation } from "../../validation";
import { DialogClose } from "@radix-ui/react-dialog";
import { useUpdateProjectMutation} from "../../redux/api/allReliefGoodsApi";
type TEditModalProps = {
  children: ReactNode;
  project: TProjectData;
};
export default function EditModal({ children, project }: TEditModalProps) {
  const [updateProject, { isLoading }] = useUpdateProjectMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProjectUpdateField>({
    resolver: zodResolver(projectUpdateValidation),
  });

  const onSubmit = async (values: FieldValues) => {
    const allValue = { ...values, quantity: parseInt(values.quantity) };
    updateProject({ id: project.id, payload: allValue });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Supply</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
              Name
              </Label>
              <Input
                id="name"
                defaultValue={project?.name}
                className="col-span-3"
                {...register("name")}
              />
              {errors?.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.name?.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                id="image"
                defaultValue={project.image}
                className="col-span-3"
                {...register("image")}
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                id="quantity"
                defaultValue={supply.quantity}
                className="col-span-3"
                {...register("quantity")}
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.quantity.message}
                </p>
              )}
            </div> */}
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="quantity"
                defaultValue={supply.description}
                className="col-span-3"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div> */}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">
                {isLoading ? "loading..." : "Save Changes"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
