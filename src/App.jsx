import { Box, SvgIcon } from '@mui/material/';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import './App.css';
import Wallpaper from './components/Wallpaper';
import Nabar from './components/Nabar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Stats from './components/Stats';
import ImageSlider from './components/ImageSlider';
import TressAreKeys from './components/TressAreKeys';

function App() {



  return (
    <>
      <Nabar />
      <Wallpaper />
      <Stats/>
      <ImageSlider/>
      <TressAreKeys/>



      
    </>
  )
}

export default App
