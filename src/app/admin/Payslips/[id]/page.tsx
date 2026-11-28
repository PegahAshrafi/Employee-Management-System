"use client";
import { Suspense } from "react";
import PaylipsReport from "../components/PaylipsReport";

const page = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <PaylipsReport />
    </Suspense>
  );
};

export default page;
