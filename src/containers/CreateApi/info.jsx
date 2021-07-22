/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  InputLabel,
  FormControl,
  Input,
  InputAdornment,
} from '@material-ui/core';
import Tvkd from 'tieng-viet-khong-dau';
import { useTranslation } from 'react-i18next';
import randomstring from 'randomstring';

export default function Info({
  pageType,
  name,
  setName,
  newApiId,
  setNewApiId,
  checkId,
  checkIdExist,
}) {
  const { t } = useTranslation();
  return (
    <div className="card">
      <Typography gutterBottom variant="h6" className="title-card">
        {t('Basic information')}
      </Typography>
      <Card className="card-info-container">
        <CardContent className="card--info-content">
          <Grid container className="basic-info-container">
            {!pageType && (
              <Grid item xs={3} sm={3}>
                <TextField
                  label={t('Api name')}
                  name="nameApi"
                  value={name}
                  onChange={(e) => {
                    e.persist();
                    setName(e.target.value);
                  }}
                />
              </Grid>
            )}
            <Grid item sx={3} sm={3}>
              <FormControl>
                <InputLabel>ID</InputLabel>
                <Input
                  value={newApiId || ''}
                  onChange={(e) => {
                    e.persist();
                    const newId = e.target.value;
                    setNewApiId(newId);
                    if (pageType) checkId(newId);
                  }}
                  endAdornment={
                    <InputAdornment
                      className="buttonAuto"
                      position="end"
                      onClick={() => {
                        let tmpNameApi = Tvkd.c(name);
                        tmpNameApi = tmpNameApi.replace(/ /g, '_');
                        const randomId = `${tmpNameApi}_${randomstring.generate(
                          4,
                        )}`;
                        setNewApiId(randomId);
                        if (pageType) checkId(randomId);
                      }}
                    >
                      Auto-ID
                    </InputAdornment>
                  }
                />
              </FormControl>
              {checkIdExist && (
                <Typography color="error">{t('ID exist')}</Typography>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
