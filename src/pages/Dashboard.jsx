import Bio from "@pages/dashboard/Bio"
import KPI from "@components/KPI"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import PerformLit from "@pages/dashboard/PerformLit"
import ShortCuts from "@pages/dashboard/ShortCuts"
import ProjectsLit from "@pages/dashboard/ProjectsLit"

// Resumen de estadísticas clave, como rendimiento del equipo, objetivos alcanzados, etc.
// Acceso rápido a funciones importantes y proyectos destacados.
// Informes y gráficos detallados sobre el rendimiento del equipo.
// Datos de ventas, productividad, eficiencia, etc.

function Dashboard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12} md={8}>
          <Bio/>
        </Grid>
        <Grid item sm={12} md={4}>
          <ShortCuts />
        </Grid>
      </Grid>

      <Grid item sm={12} md={12}>
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          <KPI title='Hero CSAT Score' lastValue={56} newValue={67} type="percent" bgColor='primary.main' textColor='white' />
          <KPI title='Net Promoter Score' lastValue={-14} newValue={38} type="percent" bgColor='primary.light' textColor='white' />
          <KPI title='Documentation' lastValue={48} newValue={90} type="percent" bgColor='terciary.main' textColor='white' />
          <KPI title='Frontend Performance' lastValue={20} newValue={40} type="percent" bgColor='secondary.main' textColor='white' />
        </Box>
      </Grid>
        
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <PerformLit />
        </Grid>
        <Grid item sm={12} md={6}>
          <ProjectsLit />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard