import React from 'react'
import { Box, SvgIcon } from '@mui/material/';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Wallpaper = () => {
    const Item = styled(Typography)(({ theme }) => ({
        color: "white",
        fontFamily: "Poppins",
        userSelect: 'none',
    }))


    const MyButton = styled(Button)(({ theme }) => ({
        color: "white",
        backgroundColor: '#EDAA00',
        fontSize: 18,
        fontWeight: 600,
        // fontFamily: "Poppins",
        width: 180,
        height: 66,
        // padding: 15,
        '&:hover': {
            backgroundColor: '#EDAA00',
            'transform': 'translateY(-2px)'
        }
    }))
    return (
        <>
            <Box component='div'
            sx={{backgroundColor: '#9A9FA2',}} >
            <Box component='div'
            className='border-custom'
                sx={{
                    zIndex:5,
                    width: '100%',
                    position: 'relative',
                    height: 'calc(100vh - 48px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}>

                <Box component='img'
                    sx={{
                        width: '100%',
                        position: 'relative',
                        zIndex: 1,
                        height: '100%', 'transform': 'scale(1.2)', objectFit: 'cover'
                    }} src='https://static.wixstatic.com/media/6d86bb_c2f284654a054fea884f236bec76df2f~mv2.jpg/v1/fill/w_2000,h_1114,al_c/6d86bb_c2f284654a054fea884f236bec76df2f~mv2.jpg'>
                </Box>
                <Box component='div' sx={{ position: 'absolute', zIndex: 1, top: '50%', left: '50%', 'transform': 'translate(-50%, -50%)', zIndex: 2 }}>
                    <Stack spacing={2} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                        <Item sx={{ fontSize: 70, fontWeight: 700 }}>STAND FOR TREES</Item>
                        <Item sx={{ fontSize: 42, display: 'flex', fontWeight: 700, lineHeight: '67px' }}>One dollar&nbsp;
                            <Item sx={{ fontSize: 42, display: 'flex', position: 'relative', fontWeight: 700 }}>
                                saves<SvgIcon className='svgCircle'>
                                    <svg viewBox="0 0 800 350" preserveAspectRatio="none">
                                        <path style={{ "animationDuration": "1.8s" }} transform="matrix(0.9791300296783447,0,0,0.9791300296783447,400,179)" strokeLinejoin="miter" fillOpacity="0" pathLength="1" strokeMiterlimit="4" stroke="#edaa00" strokeOpacity="1" strokeWidth="20" d=" M253,-161 C253,-161 -284.78900146484375,-201.4600067138672 -376,-21 C-469,163 67.62300109863281,174.2100067138672 256,121 C564,34 250.82899475097656,-141.6929931640625 19.10700035095215,-116.93599700927734"></path></svg>
                                </SvgIcon></Item>&nbsp;one tree</Item>
                        <Item className='poppins-thin' sx={{ fontSize: 14, fontWeight: 700 }}>JOIN 100K+ FOREST HEROES ON AMERICA’S TOP CLIMATE PLATFORM.</Item>
                        <Stack direction='row' spacing={4} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
                            <MyButton className='poppins-thin' endIcon={<KeyboardArrowRightIcon />} variant='contained'>Individual</MyButton>
                            <MyButton endIcon={<KeyboardArrowRightIcon />} variant='contained'>Business</MyButton>
                        </Stack>
                    </Stack>
                </Box>
                <Box component='div' sx={{ width: 190, height: 53, position: 'absolute', top: '1%', left: '2%', zIndex: 1 }}>
                    <Box component={'img'} sx={{ width: '100%', height: '100%' }} src='https://g5d2h4c6.rocketcdn.me/wp-content/uploads/2020/03/SFT-Logo-Long-White.png'></Box >
                </Box>
               
            </Box>
            </Box>
        </>
    )
}

export default Wallpaper
