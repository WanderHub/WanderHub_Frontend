// useDeleteQuitAccompany.tsx
import { useMutation } from 'react-query';
import WanderHubAPI from '@/api/WanderHubAPI';

const deleteQuitAccompany = async (id: string) => {
  const response = await WanderHubAPI.delete(`/accompany/quit/${id}`);
  return response.data;
};

const useDeleteQuitAccompany = () => {
  const mutation = useMutation(deleteQuitAccompany);
  return mutation;
};

export default useDeleteQuitAccompany;
/* 
  message:"Cannot quit as not a member"
  message:"Already joined"
  message:"Cannot quit as not a member",
  message:"Max num over"
  message:"Already joined"
  message:"Cannot quit as you made"
*/
