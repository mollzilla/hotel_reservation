const { FormControl, InputLabel, MenuItem, Select, TextField, Box, Card, makeStyles, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Icon, Paper, Grid } = window['MaterialUI'];


class Header extends React.Component {


  render() {

    const {
      handleDateChange,
      since,
      until
    } = this.props;

    const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Sábado", "Domingo"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const getDateString = (limit) => {
      console.log("mili")
    return  limit ? ` el ${daysOfWeek[limit.getDay()]} ${since.getDate()} ${months[limit.getMonth()]} de ${limit.getFullYear()}`: " hoy"
    }

    console.log(typeof since)
    return (
      <header>
        <Box className="header" color="white" bgcolor="success.main">
          <h1>Hoteles</h1>
        <h3>Desde{getDateString(since)} hasta {getDateString(until)}</h3>
        </Box>
        <Box className="params-header" color="white" bgcolor="primary.main">
          <form className="params-form" noValidate>


            <TextField
              id="since"
              label="Desde"
              type="date"
              defaultValue="2017-05-24" // hacerlo con now
              className={"date-picker"}
              InputLabelProps={{
                shrink: true,
              }}

              format="dd/MM/yyyy"
              margin="dense"
              // value={selectedDate}
              onChange={(e) => {handleDateChange("since", e.target.value)}}
            />

            <TextField
              id="until"
              label="Hasta"
              type="date"
              defaultValue="2017-05-24" // hacerlo con now
              className={"date-picker"}
              InputLabelProps={{
                shrink: true,
                // className: "date-picker"
              }}

              format="dd/MM/yyyy"
              margin="dense"
            // value={selectedDate}
              onChange={(e) => {handleDateChange(e.target.id, e.target.value)}}
            />

            <FormControl className="country-picker" margin="dense">
              <InputLabel id="demo-simple-select-label">Todos los paises</InputLabel>
              <Select
                margin="dense"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder="Todos los Paises"
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