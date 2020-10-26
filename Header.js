const { FormControl, InputLabel, MenuItem, Select, TextField, Box, Card, makeStyles, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Icon, Paper, Grid } = window['MaterialUI'];





class Header extends React.Component {


  render() {


    return (
      <header>
        <Box className="header" color="white" bgcolor="success.main">
          <h1>Hoteles</h1>
          <h3>Hola paper 2</h3>
        </Box>
        <Box className="params-header" color="white" bgcolor="primary.main">
          <form className="params-form" noValidate>


            <TextField
              id="since"
              label="Desde"
              type="date"
              defaultValue="2017-05-24" // hacerlo con now
              // className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}

              format="dd/MM/yyyy"
              margin="dense"
            // value={selectedDate}
            // onChange={handleDateChange}
            />

            <TextField
              id="until"
              label="Hasta"
              type="date"
              defaultValue="2017-05-24" // hacerlo con now
              // className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}

              format="dd/MM/yyyy"
              margin="dense"
            // value={selectedDate}
            // onChange={handleDateChange}
            />

            <FormControl className="country-picker" margin="dense">
              <InputLabel id="demo-simple-select-label">Todos los paises</InputLabel>
              <Select
                margin="dense"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeHolder="Todos los Paises"
              // onChange={handleChange}
              >
                <MenuItem value={10}>Argentina</MenuItem>
                <MenuItem value={20}>Uruguay</MenuItem>
                <MenuItem value={30}>Brasil</MenuItem>
              </Select>
            </FormControl>

          </form>
        </Box>
      </header>
    )
  }
}