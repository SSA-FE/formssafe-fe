import BoardToolbar from './BoardToolbar';
import { Form } from '@/api/viewApi';

import { useFetchSurveyListQuery } from '@/api/viewApi';
import { useEffect, useState } from 'react';
import FormCard from '@/components/Myspace/FormCard';

const BoardMain = () => {
  const [FormList, setFormList] = useState<Form[] | null>(null);
  const { data, isLoading } = useFetchSurveyListQuery({});

  useEffect(() => {
    if (data) {
      setFormList(data.forms);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen min-w-min mx-[100px] py-4 gap-4 ">
      <BoardToolbar />
      <div className="flex flex-wrap justify-center gap-4 px-8 pb-4">
        {FormList &&
          Array.isArray(FormList) &&
          FormList.map((form: Form) => <FormCard key={form.id} {...form} />)}
      </div>
    </div>
  );
};

export default BoardMain;
