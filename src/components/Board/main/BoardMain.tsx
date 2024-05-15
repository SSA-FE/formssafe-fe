import { Cursor, Form } from '@/api/viewApi';
import { useFetchSurveyListQuery } from '@/api/viewApi';
import { useEffect, useState } from 'react';
import FormCard from '@/components/Myspace/FormCard';
import Loading from '@/components/Loading';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setStatus, setCategory } from '@components/Board/boardViewSlice';

const formStatusCodes: { [key: string]: string } = {
  _all: '전체 설문',
  progress: '진행중인 설문',
  done: '마감된 설문',
};

const BoardMain = () => {
  const [formList, setFormList] = useState<Form[]>([]);
  const [cursor, setCursor] = useState<Cursor>({});
  const boardViewInput = useSelector((state: RootState) => state.boardView);
  const dispatch = useAppDispatch();
  const [queryParams, setQueryParams] = useState(boardViewInput);

  useEffect(() => {
    const updatedQueryParams = { ...boardViewInput };

    if (
      updatedQueryParams.status === '' ||
      updatedQueryParams.status === '_all'
    ) {
      delete updatedQueryParams.status;
    }

    setQueryParams(updatedQueryParams);
    console.log(updatedQueryParams);
  }, [boardViewInput]);

  const { data, isLoading } = useFetchSurveyListQuery({
    ...queryParams,
    ...cursor,
  });

  useEffect(() => {
    if (data) {
      setFormList((prev) => [...prev, ...data.forms]);
    }
  }, [data]);

  useEffect(() => {
    setCursor({});
    setFormList([]);
  }, [boardViewInput]);

  useEffect(() => {
    console.log(formList);
  }, [formList]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && data) {
        if (data.forms.length === 0) return;
        setCursor(data.cursor);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return function () {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col min-h-screen py-2 border-t min-w-min border-slate-200">
      <div className="flex space-x-2">
        {boardViewInput.status && (
          <button
            onClick={() => dispatch(setStatus(''))}
            className="mb-2 px-4 py-1 whitespace-nowrap rounded-[12px] bg-blue-400 hover:bg-blue-500 text-white font-bold text-xs"
          >
            {formStatusCodes[boardViewInput.status]}
          </button>
        )}
        {boardViewInput.category && boardViewInput.category[0] && (
          <button
            onClick={() => dispatch(setCategory(''))}
            className="mb-2 px-4 py-1 whitespace-nowrap rounded-[12px] bg-blue-400 hover:bg-blue-500 text-white font-bold text-xs"
          >
            {boardViewInput.category[0]}
          </button>
        )}
      </div>
      <div className="flex flex-wrap justify-start gap-2 pb-4 mx-auto">
        {formList &&
          Array.isArray(formList) &&
          formList.map((form: Form) => <FormCard key={form.id} {...form} />)}
      </div>
    </div>
  );
};

export default BoardMain;
