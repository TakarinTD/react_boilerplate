import React from 'react';
import {
  Typography,
  FormLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  InputLabel,
  FormControl,
  Tooltip,
  RadioGroup,
  Radio,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export default function Info({
  keyData,
  setKeyData,
  headerValues,
  dataLoad,
  setDataLoad,
  selected,
  setSelected,
  setHeaderValues,
}) {
  const { t } = useTranslation();
  return (
    <>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">
          {t('Identifier field')}
        </InputLabel>
        <Select
          label={t('Identifier field')}
          value={keyData}
          onChange={(e) => {
            setKeyData(e.target.value);
          }}
        >
          <MenuItem value="autoGenerate">
            <em style={{ color: 'orange' }}>{t('Auto generate')}</em>
          </MenuItem>
          {Object.keys(headerValues).map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <hr />
      <FormControl>
        <FormLabel>{t('Do you load data?')}</FormLabel>
        <RadioGroup
          row
          name="dataLoad"
          value={dataLoad}
          onChange={(e) => {
            setDataLoad(e.target.value);
          }}
        >
          <FormControlLabel value="yes" control={<Radio />} label={t('yes')} />
          <FormControlLabel value="no" control={<Radio />} label={t('no')} />
        </RadioGroup>
      </FormControl>
      <hr />
      <Typography>
        {t('Select the data field to add and its data type')}
      </Typography>
      <Typography>
        {selected.length} {t('selected field')}
      </Typography>
      <TableContainer style={{ maxHeight: '500px' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <Tooltip title={t('Select all')} placement="right">
                  <Checkbox
                    indeterminate={
                      Object.keys(selected).length > 0 &&
                      Object.keys(selected).length <
                        Object.keys(headerValues).length
                    }
                    checked={
                      Object.keys(headerValues).length > 0 &&
                      Object.keys(selected).length ===
                        Object.keys(headerValues).length
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelected(headerValues);
                        return;
                      }
                      setSelected({});
                    }}
                  />
                </Tooltip>
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>
                Tên trường dữ liệu
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Kiểu dữ liệu</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(headerValues).map((key) => {
              const isItemSelected = Object.prototype.hasOwnProperty.call(
                selected,
                key,
              );
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                  <TableCell>
                    <Checkbox
                      checked={isItemSelected}
                      onClick={() => {
                        let newSelected = { ...selected };
                        if (isItemSelected) delete newSelected[key];
                        else
                          newSelected = {
                            ...newSelected,
                            [key]: headerValues[key],
                          };
                        setSelected(newSelected);
                      }}
                    />
                  </TableCell>
                  <TableCell>{key}</TableCell>
                  <TableCell>
                    <FormControl variant="outlined">
                      <Select
                        value={headerValues[key]}
                        onChange={(e) => {
                          setHeaderValues({
                            ...headerValues,
                            [key]: e.target.value,
                          });
                          if (isItemSelected)
                            setSelected({
                              ...selected,
                              [key]: e.target.value,
                            });
                        }}
                      >
                        <MenuItem value="String">String</MenuItem>
                        <MenuItem value="Number">Number</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
