import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Typography, Button, Grid, Menu, MenuItem,IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { useSpring, animated } from 'react-spring';
import { PlayArrow, Pause } from '@mui/icons-material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ff00ff', // Rosa neón
    },
    secondary: {
      main: '#00ff00', // Verde lima
    },
     
    background: {
      default: '#000000', // Negro para el fondo
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", cursive', // Fuente típica de los 90
  },
});

// Componentes estilizados
const NeonBox = styled(Box)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  boxShadow: `0 0 10px ${theme.palette.primary.main}`,
  padding: theme.spacing(2),
  borderRadius: '10px',
}));

const PixelatedImage = styled('img')({
  imageRendering: 'pixelated',
  width: '100%',
  height: '60%',
});

const GeometricBackground = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  backgroundColor: '#000',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ff00ff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2L74 40h-2zm4 0l4-4v2L78 40h-2zm4 0v2L80 40h-2zM0 40h2L0 42v-2zm0 4l4-4h2L0 46v-2zm0 4l8-8h2L0 50v-2zm0 4l12-12h2L0 54v-2zm0 4l16-16h2L0 58v-2zm0 4l20-20h2L0 62v-2zm0 4l24-24h2L0 66v-2zm0 4l28-28h2L0 70v-2zm0 4l32-32h2L0 74v-2zm0 4l36-36h2L0 78v-2zm0 4l40-40h2L2 80H0v-2zm4 0l40-40h2L6 80H4v-2zm4 0l40-40h2L10 80H8v-2zm4 0l40-40h2L14 80h-2v-2zm4 0l40-40h2L18 80h-2v-2zm4 0l40-40h2L22 80h-2v-2zm4 0l40-40h2L26 80h-2v-2zm4 0l40-40h2L30 80h-2v-2zm4 0l40-40h2L34 80h-2v-2zm4 0l40-40h2L38 80h-2v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
});

// Componente de menú estilo arcade
function ArcadeMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="contained"
        color="secondary"
        sx={{ mb: 2 }}
      >
        Menú Arcade
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: 'black',
            border: '2px solid #ff00ff',
            boxShadow: '0 0 10px #ff00ff',
            color: "white"
          },
        }}
      >
        <MenuItem onClick={handleClose}>Hamburguesa Clásica</MenuItem>
        <MenuItem onClick={handleClose}>Burger Pixelada</MenuItem>
        <MenuItem onClick={handleClose}>Combo Retro</MenuItem>
        <MenuItem onClick={handleClose}>Batido Neón</MenuItem>
      </Menu>
    </>
  );
}

// Componente de reproductor de música
function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(new Audio('/Images/Music/DaftPunk.mp3'));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    
    <Box container sx={{ display: 'flex', flexDirection: 'colum', mt: 2 ,justifyContent: 'center',}}>
      <Typography color={'white'} variant="body1" sx={{ mr: 2 , flexDirection: "column" , flexWrap: "wrap" , alignContent: "center"  }}>
        Música de los '90
      </Typography>
      <Button onClick={togglePlay} variant="contained" color="primary">
        {isPlaying ? <Pause /> : <PlayArrow />}
      </Button>
    </Box>
  );
}

// Nuevo componente para el footer estilo casete
const CassetteFooter = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  position: 'relative',
  backgroundImage: 'url("/Images/cassette-image.png")',
   
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '400px', // Ajusta según el tamaño de tu imagen
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

// Componente principal de la Landing Page
function LandingPage() {
  // Animaciones con react-spring
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const bounceTitle = useSpring({
    from: { transform: 'translateY(-50px)' },
    to: { transform: 'translateY(0)' },
    config: { tension: 300, friction: 10 },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GeometricBackground />
      <Box sx={{ minHeight: '100vh', padding: 4, display: 'flex', flexDirection: 'column' }}>
        <animated.div style={bounceTitle}>
          <Typography variant="h1" align="center" gutterBottom
            sx={{ color: 'secondary.main', textShadow: '2px 2px #ff00ff' }}>
            KIDDO <br></br>BURGERS
          </Typography>
        </animated.div>

        <ArcadeMenu />

        <animated.div style={fadeIn}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <NeonBox>
                <Typography variant="h2" gutterBottom color={'white'}>
                  Nuestras burgers
                </Typography>
                <PixelatedImage src="/Images/burger-image.jpg" alt="Hamburguesa pixelada" />
                <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
                  VER MENÚ COMPLETO
                </Button>
              </NeonBox>
            </Grid>

            <Grid item xs={12} md={6}>
              <NeonBox>
                <Typography variant="h2" gutterBottom color={'white'}>
                  Promoción del Día
                </Typography>
                
                  <PixelatedImage src="/Images/burger-image.jpg" alt="Hamburguesa pixelada" />
                
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  PEDIR AHORA
                </Button>
              </NeonBox>
            </Grid>
          </Grid>
        </animated.div>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ color: 'primary.main' }}>
            Síguenos en las redes
          </Typography>
          <IconButton color="primary" href="https://facebook.com">
            <Facebook />
          </IconButton>
          <IconButton color="primary" href="https://twitter.com">
            <Twitter />
          </IconButton>
          <IconButton color="primary" href="https://www.instagram.com/kiddo.arg/?hl=es">
            <Instagram />
          </IconButton>
          <IconButton color="primary" href="https://youtube.com">
            <YouTube />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1 }} /> {/* Espaciador flexible */}

        <CassetteFooter>
  <Typography variant="h6" align="center" marginTop={'-70px'} sx={{ color: 'primary.main', textShadow: '1px 1px 2px black' }}>
    KIDDO BURGERS © 2024
  </Typography>
  <Typography variant="body2" align="center" sx={{ color: 'secondary.main', textShadow: '1px 1px 2px black' }}>
    Revive los 90s con cada mordida
  </Typography>
</CassetteFooter>
       
        <MusicPlayer />
      </Box>
    </ThemeProvider>
  );
}

export default LandingPage;