// "use client"

import { FC, ReactElement } from "react";
import axios from "axios";

interface pageProps {}

const page = async ({}): Promise<ReactElement> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  console.log("Hello");

  return <div>{JSON.stringify(data)}</div>;
};

export default page;
