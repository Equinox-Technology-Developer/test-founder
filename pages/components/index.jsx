import React from 'react';
import CardAssessmentDefault from '../../components/CardAssessment/CardAssessmentDefault';
import CardAssessmentButton from '../../components/CardAssessment/CardAssessmentButton';

const Components = () => {
  return (
    <>
      <main className="flex space-x-10 px-5 py-5">
        <div className="flex w-[50%] flex-col space-y-10">
          <CardAssessmentDefault />
        </div>
        <div className="flex w-[50%] flex-col space-y-10">
          <CardAssessmentButton />
        </div>
      </main>
    </>
  );
};

export default Components;
