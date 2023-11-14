import http from '../interceptor'

export const getAllNews = (params) => {
    const result = http.get(
      `/News?PageNumber=${params.PageNumber}&RowsOfPage=${params.RowsOfPage}&SortingCol=${params.SortingCol}&SortType=${params.SortType}&Query=`
    );
    console.log(result);
    return result;
  };
