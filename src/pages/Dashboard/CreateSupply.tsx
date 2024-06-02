import { useCreateProjectMutation } from "../../redux/api/allReliefGoodsApi";
import Container from "../../Components/ui/Container";
import { Button } from "../../Components/ui/button";
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
// import { Card, CardContent } from "../../Components/ui/card";
// import { Label } from "../../Components/ui/label";
// import { Input } from "../../Components/ui/input";
// import { Textarea } from "../../Components/ui/textarea";

import { TProjectData } from "../../types";

type TResponseData = {
  status: number;
} & TProjectData;

interface TResponseProject {
  data: TResponseData;
}

const CreateSupply = () => {
  const navigate = useNavigate();
  const [addSupply, { isLoading }] = useCreateProjectMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProjectData>({
    // resolver: zodResolver(supplyCreateValidation),
  });

  const onSubmit = async (values: FieldValues) => {
    const allValue = { ...values, quantity: parseInt(values.quantity) };
    const response = await addSupply(allValue);
    console.log(response);
    console.log(allValue);
    if ((response as TResponseProject)?.data?.status === 200) {
      navigate("/dashboard/project");
    }
  };

  return (
    <div>
      <Container>
        <div className="bg-[#b8baba] p-24 m-5 rounded-md">
          <h2 className="text-3xl font-extrabold mb-8 text-center">
            Add Project
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-xl">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full rounded p-2"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </label>
              </div>

              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text font-bold text-xl"> Server</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Server site Link"
                    className="input input-bordered w-full rounded p-2"
                    {...register("serverSiteLink")}
                  />
                  {errors.serverSiteLink && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.serverSiteLink.message}
                    </p>
                  )}
                </label>
              </div>
            </div>

            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-xl">Client Site Link</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Client"
                    className="input input-bordered w-full p-2 rounded"
                    {...register("clientSiteLink")}
                  />
                  {errors.clientSiteLink && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.clientSiteLink.message}
                    </p>
                  )}
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text font-bold text-xl">Image</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Image"
                    className="input input-bordered w-full p-2 rounded"
                    {...register("image")}
                  />
                  {errors.image && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.image.message}
                    </p>
                  )}
                </label>
              </div>
            </div>

            <div className="md:flex mb-8">
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text font-bold text-xl">
                    Live Site Link
                  </span>
                </label>
                <label className="input-group">
                  <input
                    placeholder="Live Site Link"
                    className="input input-bordered w-full p-2 rounded"
                    {...register("liveSiteLink")}
                  />
                  {errors.liveSiteLink && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.liveSiteLink.message}
                    </p>
                  )}
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full my-5">
              {isLoading ? "Loading..." : "Add Project"}
            </Button>
          </form>
        </div>
      </Container>

      {/* <div>
      <div className="flex  justify-center items-center full-screen">
        <Card className="w-full lg:w-1/2 mx-auto">
          <CardContent>
            <h3 className="text-2xl text-center font-bold my-10">Add Supply</h3>
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="mb-3">
                <Label>Title</Label>
                <Input type="text" className="mt-1" {...register("title")} />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <Label>Category</Label>
                <Input type="text" className="mt-1" {...register("category")} />
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <Label>Image</Label>
                <Input type="text" className="mt-1" {...register("image")} />
                {errors.image && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <Label>Quantity</Label>
                <Input
                  type="number"
                  className="mt-1"
                  {...register("quantity")}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.quantity.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <Label>Description</Label>
                <Textarea className="mt-1" {...register("description")} />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <Button className="w-full my-5">
                {isLoading ?"Loading...": "Add Supply"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div> */}
    </div>
  );
};

export default CreateSupply;
