import { makeStyles, Paper, Typography } from "@material-ui/core"
import procesador from "../imagenes/tecnologia2.jpg"
import logo from "../imagenes/ui.png"
import { CheckCircle } from "@material-ui/icons"
const Banner = () => {
    const classes = useStyles()
  return (
    <>
       <Paper variant="outlined" elevation={0} className={classes.banner}>
            <div className={classes.titlecontainer}>
                <Typography variant="h4" component="h1" className={classes.title}>
                    Consigue Tu pc En <span style={{color: "#d50000", fontSize: "45px", fontStyle: "italic", fontWeight: "bold", margin:4}}>UX</span>
                </Typography>
                <img src={logo } alt="logo" className={classes.logo}/>
            </div>

            <div className={classes.subtitlecontainer}>
                <Typography variant="h6" className={classes.subtitle}>
                     Consigue tu pc de preferencia...
                     <br />
                     <CheckCircle className={classes.icon} fontSize="small"/>
                     100% certificada en marca.
                     <CheckCircle className={classes.icon} fontSize="small"/>
                     Consigue a credito.
                     <CheckCircle className={classes.icon} fontSize="small"/>
                     Garantía por 5 años.
                     <CheckCircle className={classes.icon} fontSize="small"/>
                     Obsequios por compra.
                </Typography>
            </div>
       </Paper>
    </>
  )
}

export default Banner

const useStyles = makeStyles((theme) => ({
    banner: {
        width: "inherit",
        height: "55vh",
        backgroundImage: `url(${procesador})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        color: "#fff",
        fontWeight: "bold",
        position: "relative",

    },

    titlecontainer: {
        background: "#000",
        opacity: 0.8,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,

    },

    logo: {
        width: "3.5rem",
        height: "auto",
        padding: theme.spacing(1.5), 
        marginRight: theme.spacing(1)
    },

    title: {
        padding: theme.spacing(1.5)
    },

    subtitlecontainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#000",
        opacity: 0.9,
    },

    icon:{
      color:"#ede7f6",
      verticalAlign: "middle",
      marginLeft: theme.spacing(1)
    },    

    subtitle:{
        color:"#7b1fa2",
        fontWeight: "bold",
        padding: theme.spacing(2),
        height:"auto",
        textAlign: "center"
    },

    [theme.breakpoints.down("sm")] : {
        title: {
            fontSize: "1.6rem"
        },

        logo: {
            width: "2.5rem"
        },
        
        subtitle: {
            fontSize: "1rem"
        }
    }
}))