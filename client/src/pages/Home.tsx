import { Typography } from "@pankod/refine-mui";
import React from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { MyDropzone } from "components/layout/dropzone";
const Home: React.FC = () => {
  const { data: user } = useGetIdentity();

  return (
    <>
      <Typography variant="h3" paddingBottom={3}>Welcome {user?.name}</Typography>
      <MyDropzone/>
    </>
  );
};

export default Home;