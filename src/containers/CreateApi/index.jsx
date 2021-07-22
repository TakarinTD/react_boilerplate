import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  CircularProgress,
  Paper,
  Icon,
} from '@material-ui/core';
import { Icon as Iconify } from '@iconify/react';
import codeJson from '@iconify-icons/mdi/code-json';
import googleSpreadsheet from '@iconify-icons/mdi/google-spreadsheet';
import * as XLSX from 'xlsx';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloudUpload from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JsonEditor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import ace from 'brace';
import randomstring from 'randomstring';
import 'brace/mode/json';
import { toastMsgError, toastSuccess } from '../../commons/Toastify';
import StyleCreateApi from './createApi.style';
import { createApi, getApi, getApiSet, updateApi } from '../../apis/apiManage';
import Info from './info';
import HeaderValues from './headerValues';
import Define from './define';

const clientSecret = require('../../constants/clientSecret.json');

export default function CreateForm({ history }) {
  const { t } = useTranslation();
  const { id, apiId, pageType } = useParams();
  const [api, setApi] = useState({});
  const [headerValues, setHeaderValues] = useState({});
  const [selected, setSelected] = useState({});
  const [rows, setRows] = useState([]);
  const [table2, setTable2] = useState();
  const [checkIdExist, setCheckIdExist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoad, setDataLoad] = useState('yes');
  const [value, setValue] = useState({
    name: '',
    data: '',
    type: '',
  });
  const [newDataset, setNewDataset] = useState({});
  const [name, setName] = useState('');
  const [newApiId, setNewApiId] = useState();
  const [openDialog, setOpenDialog] = useState({
    title: '',
    type: '',
  });
  const [url, setUrl] = useState('');
  const [keyData, setKeyData] = useState('');
  const [dataStructure, setDataStructure] = useState({
    keyData,
  });
  const [schema, setSchema] = useState([]);
  const [json, setJSON] = useState([]);
  const handleClickOpenDialog = (title, type) => {
    setOpenDialog({ title, type });
  };
  const handleCloseDiaLog = () => {
    setUrl('');
    setJSON([]);
    setValue({ name: '', data: '', type: '' });
    setOpenDialog({
      title: '',
      type: '',
    });
    setKeyData('');
    setDataLoad('yes');
    setSelected({});
    Object.keys(newDataset).map((key) => {
      newDataset[key] = '';
      return true;
    });
  };
  useEffect(() => {
    if (id) {
      getApi(id)
        .then((res) => {
          setApi(res.result);
          setName(res.result.name);
          if (apiId) {
            const apiSet = res.result.apiSets.find(
              (item) => item.apiId === apiId,
            );
            if (!apiSet) {
              toastMsgError(t('Api set does not exist'));
              history.push(`/`);
              return;
            }
            setNewApiId(apiSet.apiId);
            setDataStructure(apiSet.dataStructure);
            setSchema(apiSet.schema);
          }
        })
        .catch(() => {
          toastMsgError(t('ERROR'));
        });
    }
  }, []);
  const handleClickAddJSON = () => {
    setTable2();
    try {
      const dataApi = json;
      let tmpHeaderValues = {};
      let i = 0;
      while (Object.keys(dataApi[i]).length === 0) {
        i += 1;
      }
      Object.keys(dataApi[i]).map((item) => {
        tmpHeaderValues = {
          ...tmpHeaderValues,
          [item]: 'String',
        };
        return tmpHeaderValues;
      });
      setHeaderValues(tmpHeaderValues);
      setRows(dataApi);
      handleClickOpenDialog('Set up data structure', 'headerValue');
    } catch (e) {
      toastMsgError(t('JSON ERROR'));
    }
  };
  const handleClickDeleteData = (itemDelete) => {
    try {
      const newSchema = schema.filter((item) => item.keyData !== itemDelete);
      setSchema(newSchema);
      if (table2.keyData === itemDelete) {
        setTable2();
      }
    } catch (e) {
      toastMsgError(t('ERROR'));
    }
  };
  const handleEditValue = () => {
    try {
      if (!value.data) {
        toastMsgError(t('Value error'));
        return;
      }
      const newSchema = schema.reduce((acc, cur) => {
        if (cur.keyData === value.keyData) {
          const data =
            dataStructure.selected[value.name].toLowerCase() === 'number'
              ? Number(value.data)
              : value.data;
          const newData =
            value.name === dataStructure.keyData
              ? { ...cur, keyData: data, [value.name]: data }
              : { ...cur, [value.name]: data };
          setTable2(newData);
          return [...acc, newData];
        }
        return [...acc, cur];
      }, []);
      setSchema(newSchema);
      handleCloseDiaLog();
    } catch (error) {
      toastMsgError(t('ERROR'));
    }
  };
  const handleClickAddURL = async () => {
    setTable2();
    setIsLoading(true);
    const startId = url.indexOf('/d/') + 3;
    const endId = url.indexOf('/edit');
    const startSheetId = url.indexOf('gid=') + 4;
    try {
      const ggSheetId = url.slice(startId, endId);
      const sheetId = url.slice(startSheetId);
      const doc = new GoogleSpreadsheet(ggSheetId);
      await doc.useServiceAccountAuth({
        client_email: clientSecret.client_email,
        private_key: clientSecret.private_key,
      });
      await doc.loadInfo();
      const sheet = doc.sheetsById[sheetId];
      const tmpRows = await sheet.getRows();
      const headerValue = sheet.headerValues.reduce((acc, cur) => {
        return { ...acc, [cur]: 'String' };
      }, {});
      setHeaderValues({ ...headerValue });
      setRows(tmpRows);

      handleCloseDiaLog();
      handleClickOpenDialog('Set up data structure', 'headerValue');
    } catch (error) {
      toastMsgError(t('Error, please check the dataset again!'));
    }
    setIsLoading(false);
  };
  const addKeyData = (item, cur) => {
    if (item === '' || item === 'autoGenerate') {
      return randomstring.generate(16);
    }
    if (selected[item].toLowerCase() === 'string') {
      return cur[item];
    }
    if (selected[item].toLowerCase() === 'number' && Number(cur[item])) {
      return Number(cur[item]);
    }
    return false;
  };
  const handleAddDataSheet = () => {
    if (selected.length === 0) {
      toastMsgError(t('Please select at least one field'));
      return;
    }
    setDataStructure({
      selected,
      keyData,
    });
    if (dataLoad === 'yes') {
      let tmpDataSet = {};
      Object.keys(selected).map((item) => {
        tmpDataSet = { ...tmpDataSet, [item]: '' };
        return tmpDataSet;
      });
      setNewDataset(tmpDataSet);
      const data = rows.reduce((acc, cur) => {
        if (!addKeyData(keyData, cur)) return [...acc];
        let tmp = { keyData: addKeyData(keyData, cur) };
        Object.keys(selected).map((item) => {
          tmp = { ...tmp, [item]: addKeyData(item, cur) };
          return tmp;
        });
        return [...acc, tmp];
      }, []);
      setSchema(data);
      setTable2();
      handleCloseDiaLog();
    }
  };
  const handleAddData = () => {
    try {
      const dataNew = {
        ...newDataset,
        keyData:
          dataStructure.keyData === '' ||
          dataStructure.keyData === 'autoGenerate' ||
          !dataStructure.keyData
            ? randomstring.generate(16)
            : newDataset[dataStructure.keyData],
      };
      const check = Object.keys(dataNew).some((key) => !dataNew[key]);
      if (check) {
        toastMsgError(t('Value error'));
        return;
      }
      setSchema([...schema, dataNew]);
      handleCloseDiaLog();
    } catch (error) {
      toastMsgError(t('ERROR'));
    }
  };
  const checkId = (item) => {
    if ((apiId && item === apiId) || item === '') {
      return;
    }
    getApiSet(id, item)
      .then((res) => {
        if (res.result) {
          setCheckIdExist(true);
          return;
        }
        setCheckIdExist(false);
      })
      .catch(() => {
        toastMsgError(t('ERROR'));
      });
  };
  const addApi = () => {
    setIsLoading(true);
    if (!newApiId) {
      toastMsgError(t('Please add ID'));
      setIsLoading(false);
      return;
    }
    if (!name) {
      toastMsgError(t('Please name the api'));
      setIsLoading(false);
      return;
    }
    const apiSets = [
      {
        apiId: newApiId,
        dataStructure,
        schema,
      },
    ];
    createApi({
      name,
      apiSets,
    })
      .then(() => {
        toastSuccess(t('SUCCESS'));
        history.push(`/`);
        setIsLoading(false);
      })
      .catch(() => {
        toastMsgError(t('ERROR'));
        setIsLoading(false);
      });
    setCheckIdExist(false);
  };
  const update = () => {
    setIsLoading(true);
    if (!newApiId) {
      toastMsgError(t('Please add ID'));
      setIsLoading(false);
      return;
    }
    checkId(newApiId);
    if (checkIdExist) {
      toastMsgError(t('ID exist'));
      return;
    }

    let { apiSets } = api;
    if (pageType === 'create-api-set') {
      apiSets = [
        ...api.apiSets,
        {
          apiId: newApiId,
          dataStructure,
          schema,
        },
      ];
    }
    if (pageType === 'view-api-set') {
      const index = apiSets.findIndex((item) => item.apiId === apiId);
      if (index === -1) {
        toastMsgError(t('Api set does not exist'));
        history.push(`/`);
      }
      apiSets[index] = {
        ...apiSets[index],
        apiId: newApiId,
        schema,
      };
    }
    const updateFields = { apiSets };
    updateApi(id, updateFields)
      .then(() => {
        toastSuccess(t('SUCCESS'));
        setIsLoading(false);
        history.push(`/`);
      })
      .catch(() => {
        toastMsgError(t('ERROR'));
        setIsLoading(false);
      });
    setIsLoading(false);
    setCheckIdExist(false);
  };
  const handleFileSelected = (file) => {
    setTable2();
    const fileReader = new FileReader();
    if (file && file.type === 'application/json') {
      fileReader.readAsText(file);
      fileReader.onload = (e) => {
        const dataJson = e.target.result;
        setJSON(dataJson);
        try {
          const dataApi = JSON.parse(dataJson);
          let tmpHeaderValues = {};
          let i = 0;
          while (Object.keys(dataApi[i]).length === 0) {
            i += 1;
          }
          Object.keys(dataApi[i]).map((item) => {
            tmpHeaderValues = {
              ...tmpHeaderValues,
              [item]: 'String',
            };
            return tmpHeaderValues;
          });
          setHeaderValues(tmpHeaderValues);
          setRows(dataApi);
          handleClickOpenDialog('Set up data structure', 'headerValue');
        } catch (error) {
          toastMsgError(t('JSON ERROR'));
        }
      };
      return;
    }
    if (file) {
      fileReader.readAsBinaryString(file);
      fileReader.onload = (e) => {
        const dataArray = e.target.result;
        const wb = XLSX.read(dataArray, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const header = XLSX.utils.sheet_to_json(ws, { header: 1 })[0];
        if (header.length === 0) {
          toastMsgError(t('The first row cannot be empty'));
          return;
        }
        let tmpHeaderValues = {};
        header.map((item) => {
          tmpHeaderValues = {
            ...tmpHeaderValues,
            [item]: 'String',
          };
          return tmpHeaderValues;
        });
        setHeaderValues(tmpHeaderValues);
        const data = XLSX.utils.sheet_to_json(ws);
        setRows(data);
        handleClickOpenDialog('Set up data structure', 'headerValue');
      };
    }
  };
  const define = () => {
    try {
      if (!selected.map || selected.length === 0) {
        toastMsgError(t('Error, please check the data structure!'));
        return;
      }
      let tmp = {};
      selected.map((item) => {
        tmp = {
          ...tmp,
          [item.field]: item.type,
        };
        return tmp;
      });
      if (!Object.keys(tmp) || Object.hasOwnProperty.call(tmp, '')) {
        toastMsgError(t('Error, please check the data structure!'));
        return;
      }
      setDataStructure({
        ...dataStructure,
        selected: tmp,
        keyData: selected[keyData] ? selected[keyData].field : '',
      });
      handleCloseDiaLog();
    } catch (error) {
      toastMsgError(t('ERROR'));
    }
  };
  return (
    <StyleCreateApi>
      <Paper className="createApiContainer">
        <div className="cardHeader">
          {!pageType && (
            <>
              <Typography variant="h5" className="headTitle">
                {t('Create api')}
              </Typography>
              <Button
                className="button"
                onClick={() =>
                  handleClickOpenDialog('Create api using JSON', 'json')
                }
              >
                <Iconify className="buttonIcon" icon={codeJson} />
                {t('JSON')}
              </Button>
              <Button component="label" className="button">
                <input
                  accept=".xlsx, .xls, .csv, .json"
                  multiple
                  type="file"
                  style={{ display: 'none' }}
                  onClick={(e) => {
                    e.target.value = null;
                  }}
                  onChange={(e) => handleFileSelected(e.target.files[0])}
                />
                <CloudUpload className="buttonIcon" />
                {t('upload')}
              </Button>
              <Button
                className="button"
                onClick={() =>
                  handleClickOpenDialog('Create api using URL', 'url')
                }
              >
                <Iconify icon={googleSpreadsheet} className="buttonIcon" />
                {t('Google sheet')}
              </Button>
            </>
          )}
          {pageType && (
            <Typography variant="h5" className="headTitle">
              {name}
              {apiId && `/${apiId}`}
            </Typography>
          )}
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              className="button"
              onClick={() => (!pageType ? addApi() : update())}
            >
              <Icon className="buttonIcon">save</Icon>
              {t('Save api')}
            </Button>
          )}
        </div>
        <div className="container">
          <Info
            pageType={pageType}
            name={name}
            setName={setName}
            newApiId={newApiId}
            setNewApiId={setNewApiId}
            checkId={checkId}
            checkIdExist={checkIdExist}
          />
          <Typography gutterBottom variant="h6" className="title-card">
            {t('Data structure')}
          </Typography>
          {!dataStructure.selected && (
            <Button
              className="button-structure"
              onClick={() =>
                handleClickOpenDialog('Set up data structure', 'define')
              }
            >
              <Icon className="buttonIcon">add</Icon>
              {t('Define')}
            </Button>
          )}
          <Grid container className="data" spacing={1}>
            <Grid item xs={12} sm={4}>
              {dataStructure.selected && (
                <TableContainer
                  style={{ maxHeight: '450px' }}
                  className="table-container"
                >
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <div className="cell-head">
                            <AddCircleIcon
                              className="add"
                              style={{ cursor: 'pointer' }}
                              onClick={() => {
                                handleClickOpenDialog(
                                  'Add datasets',
                                  'datasets',
                                );
                              }}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="tableBody">
                      {schema &&
                        schema.map((item) => (
                          <TableRow key={item.keyData}>
                            <TableCell
                              className={
                                table2 && item.keyData === table2.keyData
                                  ? 'cellSelect'
                                  : 'cell'
                              }
                            >
                              <Typography
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                  setTable2(item);
                                }}
                              >
                                {item.keyData}
                              </Typography>
                              <div className="button-actions">
                                <DeleteIcon
                                  color="secondary"
                                  style={{ cursor: 'pointer' }}
                                  onClick={() =>
                                    handleClickDeleteData(item.keyData)
                                  }
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Grid>
            {table2 && (
              <Grid item xs={12} sm={4}>
                <TableContainer
                  style={{ maxHeight: '450px' }}
                  className="table-container"
                >
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell className="cell-head-table2">
                          <Typography>{table2.keyData}</Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="tableBody">
                      {table2 &&
                        Object.keys(table2).map(
                          (key) =>
                            key !== 'keyData' && (
                              <TableRow key={key}>
                                <TableCell
                                  className="cell"
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => {
                                    setValue({
                                      name: key,
                                      data: table2[key],
                                      keyData: table2.keyData,
                                    });
                                    handleClickOpenDialog(
                                      'Input value',
                                      'value',
                                    );
                                  }}
                                >
                                  <Typography>
                                    {key}: {table2[key]}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            ),
                        )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            )}
          </Grid>
        </div>
      </Paper>
      <Dialog
        open={openDialog.title !== ''}
        onClose={handleCloseDiaLog}
        fullWidth
        style={{ margin: '1%', overflow: 'hidden', width: 'auto' }}
      >
        <DialogTitle id="form-dialog-title">{t(openDialog.title)}</DialogTitle>
        <DialogContent style={{ width: 'auto' }}>
          {openDialog.type === 'json' && (
            <JsonEditor
              value={json}
              mode="code"
              ace={ace}
              mainMenuBar={false}
              onChange={(e) => {
                setJSON(e);
              }}
            />
          )}
          {openDialog.type === 'datasets' &&
            Object.keys(dataStructure.selected).map((key) => (
              <TextField
                key={key}
                margin="dense"
                value={newDataset[key] || ''}
                type={
                  dataStructure.selected[key].toLowerCase() === 'number'
                    ? 'number'
                    : ''
                }
                label={key}
                fullWidth
                onChange={(e) => {
                  e.persist();
                  setNewDataset({
                    ...newDataset,
                    [key]: e.target.value,
                  });
                }}
              />
            ))}
          {openDialog.type === 'headerValue' && (
            <HeaderValues
              keyData={keyData}
              setKeyData={setKeyData}
              headerValues={headerValues}
              dataLoad={dataLoad}
              setDataLoad={setDataLoad}
              selected={selected}
              setSelected={setSelected}
              setHeaderValues={setHeaderValues}
            />
          )}
          {openDialog.type === 'define' && (
            <Define
              selected={selected}
              setSelected={setSelected}
              keyData={keyData}
              setKeyData={setKeyData}
            />
          )}
          {openDialog.type === 'value' && (
            <TextField
              margin="dense"
              value={value.data}
              type={
                dataStructure.selected[value.name].toLowerCase() === 'number'
                  ? 'Number'
                  : ''
              }
              name="value"
              label={value.name}
              fullWidth
              onChange={(e) => {
                e.persist();
                setValue({ ...value, data: e.target.value });
              }}
            />
          )}
          {openDialog.type === 'url' && (
            <TextField
              margin="dense"
              value={url}
              name="URL"
              label="URL"
              helperText={`${t(
                'Google sheets need to be shared with email',
              )}: ${clientSecret.client_email}`}
              fullWidth
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDiaLog} color="primary">
            {t('Cancel')}
          </Button>
          {openDialog.type === 'datasets' && (
            <Button onClick={handleAddData} color="primary">
              {t('Add')}
            </Button>
          )}
          {openDialog.type === 'json' && (
            <Button onClick={handleClickAddJSON} color="primary">
              {t('Add')}
            </Button>
          )}
          {openDialog.type === 'value' && (
            <Button onClick={handleEditValue} color="primary">
              {t('Confirm')}
            </Button>
          )}
          {openDialog.type === 'headerValue' && (
            <Button onClick={handleAddDataSheet} color="primary">
              {t('Confirm')}
            </Button>
          )}
          {openDialog.type === 'url' && (
            <>
              {isLoading ? (
                <CircularProgress size="2%" />
              ) : (
                <Button onClick={handleClickAddURL} color="primary">
                  {t('Add')}
                </Button>
              )}
            </>
          )}
          {openDialog.type === 'define' && (
            <Button onClick={define} color="primary">
              {t('Confirm')}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </StyleCreateApi>
  );
}
