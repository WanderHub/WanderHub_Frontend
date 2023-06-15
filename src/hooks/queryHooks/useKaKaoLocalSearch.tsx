import axios from 'axios';
import { useQuery } from 'react-query';

const useKaKaoLocalSearch = (searchVal: string, isAction: boolean) => {
  const { data, isLoading, error } = useQuery(
    ['kakaoLocal', searchVal],
    () => {
      axios
        .get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${searchVal}`, {
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
          },
        })
        .then(res => {
          console.log(res);
          return res.data;
        })
        .catch(err => console.log(err));
    },
    {
      enabled: isAction && !!searchVal,
    },
  );

  return { data, isLoading, error };
};

export default useKaKaoLocalSearch;