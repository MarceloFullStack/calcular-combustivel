import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Container, FormControl, Grid, Paper, TextField } from "@material-ui/core";
import "./App.css";
import imagem from "./assets/google_maps_direcoes.png"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent:"center",
    alignItems: "center",
    marginTop: 30,
    marginLeft:15,
    width: 200
  },
  form: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  botao: {
    margin: 20
  },
  imagem: {
    width: "100%",
    height: "100%",
    backgroundSize: "contain"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div >

      <Grid container spacing={3}>
        <Grid item md={6} className={classes.form}>
          <Paper elevation={9} className={classes.paper}>
          <h1  align="center" textAlign="center">CUSTO COMBUSTÍVEL</h1>

          <FormControl className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="KM por litro" value={"36.13km"}/>
            <TextField id="standard-basic" label="Distância da residência em KM" value={6.3}/>
            <TextField id="standard-basic" label="Dias Trabalhados" value={21}/>
            <TextField id="standard-basic" label="Viagens Por Dia" value={2}/>
            <TextField id="standard-basic" label="Distância total percorrida" value={"26.60km"}/>
            <TextField id="standard-basic" label="Combustível Gasto" value={8}/>
            <TextField id="standard-basic" label="Preço Combustível" value={5.50}/>
            <TextField id="standard-basic" label="TOTAL" value={"R$40,28"}/>
          <Button className={classes.botao} variant="contained" color="primary" onClick={()=>{
            alert("calcular combustivel")
          }}>
            Calcular
          </Button>
          </FormControl>
          </Paper>
        </Grid>
        <Grid item md={6} className={classes.form}>
          <img src={imagem} alt="" srcset=""/>
        </Grid>
          <Grid className={classes.imagem} item md={12} className={classes.paper}>
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
