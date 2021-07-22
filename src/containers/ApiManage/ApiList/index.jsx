import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { useTranslation } from 'react-i18next';
import ApiListStyle from './apiList.style';

export default function ApiList({ listApi, isLoadingListApi, history }) {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState();
  const [menuState, setMenuState] = useState([]);
  const handleRequestCloseMenu = (index) => () => {
    const newArr = [...menuState];
    newArr[index] = false;
    setMenuState(newArr);
  };
  const onContactOptionSelect = (index) => (e) => {
    const newArr = [...menuState];
    newArr[index] = true;
    setMenuState(newArr);
    setAnchorEl(e.currentTarget);
  };

  useEffect(() => {
    if (listApi) {
      const newArr = [];
      for (let i = 0; i < listApi.length; i += 1) {
        newArr.push(false);
      }
      setMenuState(newArr);
    }
  }, [listApi]);

  const tableTitle = ['STT', 'Api name', 'ID'];
  return (
    <ApiListStyle>
      <>
        <Table aria-label="customized table" className="table">
          <TableHead>
            <TableRow>
              {tableTitle &&
                tableTitle.map((item) => (
                  <TableCell
                    key={item}
                    align="left"
                    variant="head"
                    className="headerCell"
                  >
                    <div className="cellContent">{t(item)}</div>
                  </TableCell>
                ))}
              <TableCell className="headerCell" />
            </TableRow>
          </TableHead>
          <TableBody>
            {listApi &&
              listApi.map((api, index) => (
                <TableRow key={api.apiId}>
                  <TableCell className="cellBody">{index + 1}</TableCell>
                  <TableCell component="th" scope="row" className="cellBody">
                    {api.name}
                  </TableCell>
                  <TableCell component="th" scope="row" className="cellBody">
                    {api.apiId}
                  </TableCell>
                  <TableCell align="center" className="cellBody">
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={onContactOptionSelect(index)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={menuState[index] || false}
                    onClose={handleRequestCloseMenu(index)}
                  >
                    <MenuItem
                      onClick={() => {
                        history.push(`/api-view/${api.apiId}/view`);
                      }}
                    >
                      Xem thông tin/chỉnh sửa
                    </MenuItem>
                    <MenuItem>Xóa</MenuItem>
                    <MenuItem onClick={handleRequestCloseMenu(index)}>
                      Lịch sử
                    </MenuItem>
                  </Menu>
                </TableRow>
              ))}
            {listApi.length === 0 && !isLoadingListApi && (
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  {t('noData')}
                </TableCell>
              </TableRow>
            )}
            {isLoadingListApi && (
              <TableRow className="loader-view">
                <TableCell align="center" colSpan={4}>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </>
    </ApiListStyle>
  );
}
