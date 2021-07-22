import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Grid,
  TableContainer,
  CircularProgress,
  Menu,
  MenuItem,
  TextField,
  Input,
  Icon,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { useTranslation } from 'react-i18next';
import ApiListStyle from './apiList.style';

export default function ApiList({ listApi, isLoadingListApi, history }) {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState();
  const [menuState, setMenuState] = useState([]);
  const [table2, setTable2] = useState();
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

  return (
    <ApiListStyle>
      <Grid container className="data" spacing={1}>
        <Grid item xs={12} sm={6}>
          <TableContainer className="table-container">
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <div className="cell-head">
                      <Input placeholder="search" />
                      <Icon
                        className="add"
                        onClick={() => history.push('/create-api')}
                      >
                        add_circle
                      </Icon>
                    </div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="tableBody">
                {listApi &&
                  listApi.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell
                        className={
                          table2 && item.id === table2.id
                            ? 'cellSelect'
                            : 'cell'
                        }
                      >
                        <Typography
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            setTable2({
                              id: item.id,
                              name: item.name,
                              apiSets: item.apiSets,
                            });
                          }}
                        >
                          {item.name}
                        </Typography>
                        <div className="button-actions">
                          <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={onContactOptionSelect(index)}
                          >
                            <MoreVertIcon />
                          </IconButton>
                        </div>
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
                            history.push(`/api/${item.apiId}/view`);
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
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {table2 && (
          <Grid item xs={12} sm={6}>
            <TableContainer className="table-container">
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell className="cell-head-table2">
                      <div className="cell-head">
                        <Typography>{table2.name}</Typography>
                        <Input placeholder="search" />
                        <Icon
                          className="add"
                          onClick={() =>
                            history.push(`/apis/${table2.id}/create-api-set`)
                          }
                        >
                          add_circle
                        </Icon>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="tableBody">
                  {table2.apiSets &&
                    table2.apiSets.map((item, index) => (
                      <TableRow key={item.apiId}>
                        <TableCell
                          className="cell"
                          style={{ cursor: 'pointer' }}
                          // onClick={() => {
                          //   setValue({
                          //     name: key,
                          //     data: table2[key],
                          //     keyData: table2.keyData,
                          //   });
                          //   handleClickOpenDialog('Input value', 'value');
                          // }}
                        >
                          <Typography>{item.apiId}</Typography>
                          <div className="button-actions">
                            <IconButton
                              aria-label="more"
                              aria-controls="long-menu"
                              aria-haspopup="true"
                              onClick={onContactOptionSelect(index)}
                            >
                              <MoreVertIcon />
                            </IconButton>
                          </div>
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
                              history.push(
                                `/apis/${table2.id}/api-sets/${item.apiId}/view-api-set`,
                              );
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
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )}
      </Grid>
    </ApiListStyle>
  );
}
