import React, { useState, useEffect } from 'react';
import { Typography, Paper } from '@material-ui/core';
// import Pagination from '@material-ui/lab/Pagination';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import ApiManageStyle from './apiManage.style';
import ApiList from './ApiList';
import { toastSuccess } from '../../commons/Toastify';
import { filterApi, fetchHandleApiSuccess } from '../../redux/api/actions';

export default function ApiManage({ history }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    // totalPages,
    limitPage,
    isLoadingListApi,
    listApi,
    noticeHandleApiSuccess,
  } = useSelector((state) => state.api);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({
    key: '',
  });
  useEffect(() => {
    dispatch(
      filterApi({
        page,
        records: limitPage,
      }),
    );
  }, []);

  // const handleChangePagination = (e, value) => {
  //   setPage(value);
  //   dispatch(
  //     filterApi({
  //       page: value,
  //       records: limitPage,
  //     }),
  //   );
  // };
  useEffect(() => {
    if (noticeHandleApiSuccess) {
      toastSuccess('Xóa api thành công');
      dispatch(fetchHandleApiSuccess(false));
      dispatch(
        filterApi({
          page,
          records: limitPage,
        }),
      );
    }
  }, [noticeHandleApiSuccess]);
  return (
    <ApiManageStyle>
      <Paper className="api-manage-container">
        <div className="cardHeader">
          <Typography variant="h5" className="headTitle">
            {t('Api list')}
          </Typography>
        </div>
        <ApiList
          isLoadingListApi={isLoadingListApi}
          listApi={listApi}
          history={history}
          search={search}
          limitPage={limitPage}
          page={page}
          setPage={setPage}
        />
        {/* <div className="pagination">
          <Pagination
            page={page}
            count={totalPages}
            onChange={handleChangePagination}
          />
        </div> */}
      </Paper>
    </ApiManageStyle>
  );
}
