import { Button, Divider, makeStyles, Paper, Typography } from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import { AccountCircle, EmailOutlined, EmailRounded } from "@material-ui/icons"
import Box from "@material-ui/core/Box"
import InputAdornment from "@mui/material/InputAdornment"


const Explanation = () => {
    const classes = useStyles()
  return (  
    <Paper className={classes.explanation} variant="outlined" elevation={0} square>
        <Typography variant="subtitle3" paragraph gutterBottom > 
          Las <span style={{fontWeight: "bold",}}>COMPUTADORAS</span> 💻 son una manera rápida y fácil 
          de almacenar información👍🏼, datos y contenido multimedia, descargar y subir información de la web, 
          digitalizar todo tipo de contenidos a través de diferentes dispositivos de entrada🖱️, por eso hoy para
          ti de ofrecemos los siguientes paquetes en <strong>OFERTA...!</strong> 
        </Typography>

          <Divider />

        <Typography variant="subtitle1" paragraph gutterBottom style={{ margin:"0rem 0.5rem"}}>
          <strong>Para ti</strong> que nos estás leyendo, <strong>UX</strong> en este momento te tiene 2 paquetes los cuales vas a poder elegir 
          de preferencia siempre y cuando poniendo en primer lugar tu necesidades, para ellos te traemos los 
          siguientes paquetes con su respectivo descuento💲.
        </Typography>

        <Typography variant="subtitle1" paragraph gutterBottom style={{margin:"1rem 2rem"}}>
          👉Para el <strong>Primer Paquete en 30% de descuento</strong>, te ofrecemos una computadora sencilla, 
            con   procesador intel core i 12 que maneja una velocidad de 3000 GHz, cuenta con un 
            disco duro  Exos liquido de mercurio Mach 3000 con una velocidad de 2000 TR/s.
        </Typography>

        <Typography variant="subtitle1" paragraph gutterBottom style={{margin:"1rem 2rem"}}>
          👉Para el <strong>Segundo Paquete en 150% de descuento</strong>, te presentamos a una computadora promedio que 
            cuenta con un Ryzen 15 5950XPR junto con 200gb de memoria RAM, mas 6000 revoluciones de 
            rápidos y furiosos, superando la velocidad de la luz.
        </Typography>

        <Typography variant="subtitle1" paragraph gutterBottom style={{ margin:"0rem 0.5rem"}}>
        Finalizadas las especificaciones de cada uno de lo paquetes que esperamos hayan
         sido de gusto, estaremos atentos a cada una de sus inquietudes, para así poder 
         resolverlas de la mejor manera, respondiendo a cada una de sus dudas.
        </Typography>


        <form className={classes.action} action="https://formsubmit.co/nicolljaviernieveslopez@gmail.com" method="POST">
        
        <box> 
                <TextField
                  type="text"
                  name="name"
                  id="input-with-icon-textfield"
                  label="Nombre"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />

              <br />
              <br />

                <TextField
                type="email"
                  id="input-with-icon-textfield"
                  name="email"
                  label="Gmail"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />

              <br />
              <br />

              <TextField
              type="text"
              name="Motivo"
                id="outlined-multiline-flexible"
                label="Motivo"
                multiline
                maxRows={4}

              />  
                
       <br />
       <br />

    </box>
     
           <Button type="submit" variant="contained" startIcon={<EmailIcon />} style={{margin:"2rem", background:"#ab47bc"}}>
              Enviar mensaje a email   <span className={classes.ExtendText}> para mas información!</span>
           </Button>

           <a href="https://wa.link/k8gi0s">
                <h4>
                  link de wa
                  </h4>    

           </a>
               
        </form>

    </Paper>
  )
}

export default Explanation

const useStyles = makeStyles((theme) => ({

   explanation:{
    width: "inherit",
    height: "auto",
    padding:theme.spacing(2)
   },

   action: {
    margin:"1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& button:hover": {
      backgroundColor: "#ccc !important",
      
    }
   },

   [theme.breakpoints.down("md")]:{
      ExtendText : { 
        display:"none"
      }
    }
}))
