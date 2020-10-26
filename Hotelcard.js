const { Card, makeStyles, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Icon, Paper, Grid } = window['MaterialUI'];



class Hotelcard extends React.Component {

  render() {

    const {
      slug,
      name,
      photo,
      description,
      availabilityFrom,
      availabilityTo,
      rooms,
      city,
      country,
      price,
    } = this.props.hotel

    return (

      <Card width="50">
        <CardActionArea>

          <Grid Item xs={12}>
            <Paper className="info-paper" elevation={0}>
              <img src={photo} />
            </Paper>
          </Grid>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
          <Grid Item xs={12}>
            <Paper className="info-paper" style={{display: "flex", alignItems: "center"}} elevation={2}>
              <Icon className="next-to-icon">location_on</Icon>{city}, {country}
            </Paper>
          </Grid>

          <Grid container className="limbo">
            <Grid Item xs={7}>
              <Paper className="info-paper" style={{display: "flex", alignItems: "center"}} elevation={2}>
                <Icon className="next-to-icon">local_hotel</Icon><span>{rooms} {rooms > 1 ? "Habitaciones" : "Habitación"}</span>
              </Paper>
            </Grid>
            <Grid Item xs={5}>
              <Paper className="info-paper" elevation={2}>
                <Icon className="money">attach_money</Icon>
                <Icon className="money" color={price > 1 ? "black" : "disabled"}>attach_money</Icon>
                <Icon className="money" color={price > 2 ? "black" : "disabled"}>attach_money</Icon>
                <Icon className="money" color={price > 3 ? "black" : "disabled"}>attach_money</Icon>
              </Paper>
            </Grid>
          </Grid>


        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="primary" className="reservar">
            Reservar
          </Button>
        </CardActions>
      </Card>


    )
  }


}

