import Bio from "@components/Bio"
import Grid from '@mui/material/Grid'
import Poster from "./Poster"
import KPI from "@components/KPI"
// import Sponsored from "@components/Sponsored"


function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={6} md={8}>
        <Bio/>
      </Grid>
      <Grid item sm={6} md={4}>
        <Bio/>
      </Grid>
      <Grid item sm={6} md={4}>
        <KPI title='Product Sold' amount={31968} number={39.4} color='primary' />
      </Grid>
      <Grid item sm={6} md={4}>
        <KPI title='Total Balance' amount={48951} number={-2.4} color='info' />
      </Grid>
      <Grid item sm={6} md={4}>
        <KPI title='Sales Profit' amount={28971} number={9.4} color='warning' />
      </Grid>
      <Grid item sm={6} md={4}>
        <Poster title="Sales By Gender" graph="url acá" />
      </Grid>
      <Grid item sm={6} md={8}>
        <Poster title="Yearly Sales" graph="url acá"  />
      </Grid>
    </Grid>
  );
}

export default Home