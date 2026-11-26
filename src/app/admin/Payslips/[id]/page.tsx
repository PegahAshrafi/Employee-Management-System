import React from 'react'
import PaylipsReport from '../components/PaylipsReport'

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  return <PaylipsReport id={id} />;
};
export default Page;