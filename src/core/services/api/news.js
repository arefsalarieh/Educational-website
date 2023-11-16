import http from '../interceptor'

export const getAllNews = (params) => {
    const result = http.get(
      `/News?PageNumber=${params.PageNumber}&RowsOfPage=${params.RowsOfPage}&SortingCol=${params.SortingCol}&SortType=${params.SortType}&Query=`
    );
    return result;
  };

  export const getAllNewsPure = () => {
    const result = http.get(
      `/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=`
    );
    return result;
  };

  // export const getInfiniteAllNews = (pageNumber) => {
  //   const result = http.get(
  //     `/News?PageNumber=${pageNumber}&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=`
  //   );
  //   console.log(result);
  //   return result;
  // };

  export const getNewsWithId = (id) => {
    const result = http.get(
      `/News/${id}`
    );
    console.log(result);
    return result;
  };

  