import { API, BASE_URL } from '@/config';
import { questionType } from '@/types/questionTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface FormResponse {
  type: questionType;
  questionId: string;
  content: string | number[];
}

interface FormResponseRequest {
  submissions: FormResponse[];
  isTemp: boolean;
  surveyId: number;
}

export const submissionApi = createApi({
  reducerPath: 'submissionApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    fetchFormSubmission: builder.mutation<void, FormResponseRequest>({
      query: ({ surveyId, submissions, isTemp }) => ({
        url: `${API.SUBMISSION}/${surveyId}/submission`,
        method: 'POST',
        body: { submissions, isTemp },
      }),
    }),
  }),
});

export const { useFetchFormSubmissionMutation } = submissionApi;
