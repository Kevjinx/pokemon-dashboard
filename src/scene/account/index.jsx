import Register from "../../components/RegisterMui";
import Login from '../../components/LoginMui';
import { Container, Grid } from "@mui/material";


function Account() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Register />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Login />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Account;
