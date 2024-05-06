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
    <div className="flex flex-col min-h-screen py-2 border-t min-w-min border-slate-200">
      <div className="flex flex-wrap justify-start gap-2 pb-4 mx-auto">
        {FormList &&
          Array.isArray(FormList) &&
          FormList.map((form: Form) => <FormCard key={form.id} {...form} />)}
      </div>
    </div>
  );
};

export default BoardMain;
