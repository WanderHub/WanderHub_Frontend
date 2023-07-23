import WanderHubAPI from '@/api/WanderHubAPI';
import { useMutation } from 'react-query';
import { FormDataType } from '@components/accompany/post/PostDataHandleBox';

export interface PostAccompanyType extends FormDataType {
  accompanyDate: string | null;
}

const postAccompany = async (params: PostAccompanyType) => {
  const response = await WanderHubAPI.post('/accompany', params);
  return response.data;
};

const usePostAccompany = () => {
  const mutation = useMutation(postAccompany);
  return mutation;
};

export default usePostAccompany;
