const { Container, Card, makeStyles, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Icon, Paper, Grid } = window['MaterialUI'];

class HotelContainer extends React.Component {
  /// hotel Container recibe como props data y al ser el padre es la unica fuente de la verdad, de ahi la pasa al header y al grid

  state = {
    cosas: "the single source of truth"
  }

  render() {

    // console.log(this.props.data)
    return (
      <Container>
        <Header />

        <Grid container spacing={8}>

          {this.props.data.map((hotel, i) => (
            <Grid item xs={12} sm={4}>
              <Hotelcard
                hotel={hotel}
                key={i}
              />
            </Grid>
          ))}

        </Grid>


      </Container>
    );
  }
} 