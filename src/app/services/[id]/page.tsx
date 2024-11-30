import React from 'react';
import { aserviceData } from '@/data/aserviceData';
import Letstalk from '@/components/letsTalk';
import AService from '@/components/aService';

export default function Aservice({ params }: { params: { id: string } }) {
  const service = aserviceData.find(s => s.id === parseInt(params.id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
        <AService data={service}/>
    </>
  );
}
