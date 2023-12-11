import React from 'react';
import CardAssessmentDefault from '../../components/CardAssessment/CardAssessmentDefault';
import CardAssessmentButton from '../../components/CardAssessment/CardAssessmentButton';

const Components = () => {
  return (
    <>
      <main className="px-5 py-5 space-x-10 flex">
        <div className="flex flex-col space-y-10 w-[50%]">
          <CardAssessmentDefault />
        </div>
        <div className="flex flex-col space-y-10 w-[50%]">
          <CardAssessmentButton />
        </div>
      </main>
    </>
  );
};

export default Components;
