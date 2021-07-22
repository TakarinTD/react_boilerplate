/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  FormControl,
  Tooltip,
  Checkbox,
  Icon,
  TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Info({ selected, setSelected, keyData, setKeyData }) {
  const { t } = useTranslation();
  return (
    <TableContainer style={{ maxHeight: '500px', width: 'auto' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <Tooltip title={t('Add a data field')} placement="right">
                <Button
                  className="button-structure"
                  onClick={() => {
                    if (Array.isArray(selected)) {
                      setSelected([
                        ...selected,
                        {
                          field: '',
                          type: 'String',
                        },
                      ]);
                      return;
                    }
                    setSelected([
                      {
                        field: '',
                        type: 'String',
                      },
                    ]);
                  }}
                >
                  <Icon className="buttonIcon">add</Icon>
                </Button>
              </Tooltip>
            </TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>
              Tên trường dữ liệu
            </TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Kiểu dữ liệu</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>
              Trường định danh
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(selected) &&
            selected.map((item, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell>
                  <Button
                    className="button-structure"
                    onClick={() => {
                      const tmpSelected = [...selected];
                      setSelected(
                        tmpSelected
                          .slice(0, index)
                          .concat(
                            tmpSelected.slice(index + 1, tmpSelected.length),
                          ),
                      );
                      if (keyData === index) setKeyData('');
                    }}
                  >
                    <DeleteIcon
                      color="secondary"
                      style={{ cursor: 'pointer' }}
                    />
                  </Button>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    value={item.field}
                    onChange={(e) => {
                      const newKey = e.target.value;
                      const tmp = [...selected];
                      tmp[index] = { ...tmp[index], field: newKey };
                      setSelected(tmp);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <FormControl variant="outlined">
                    <Select
                      value={item.type}
                      onChange={(e) => {
                        const newType = e.target.value;
                        const tmp = [...selected];
                        tmp[index] = { ...tmp[index], type: newType };
                        setSelected(tmp);
                      }}
                    >
                      <MenuItem value="String">String</MenuItem>
                      <MenuItem value="Number">Number</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <Checkbox
                    checked={keyData === index}
                    onChange={() => setKeyData(index)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
