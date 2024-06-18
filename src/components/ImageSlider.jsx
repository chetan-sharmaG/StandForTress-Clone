import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Stack, SvgIcon, Typography } from '@mui/material'
import Carousel from "react-multi-carousel";
// import wavyTop from '../assets/wavyTop.svg'
import React from 'react'
import { Paper, Button } from '@mui/material'
import Marquee from "react-fast-marquee";


const ImageSlider = () => {

    var partners = [
        {
            name: "Audi",
            location: "/audi.svg",
        },
        {
            name: "microsoft",
            location: "/microsoft.svg",
        },
        {
            name: "netflix",
            location: "/netflix.svg",
        },
        {
            name: "pwc",
            location: "/pwc.svg"
        }, {
            name: "zurich",
            location: "/zurich.svg"
        }
    ]

    var workingModel = [{
        name: "Project saves a forest, stopping carbon emissions",
        link: "https://standfortrees.org/wp-content/uploads/how-1-1.png"
    }, {
        name: "Independent auditors verify successes",
        link: "https://standfortrees.org/wp-content/uploads/how-2-1.png"
    }, {
        name: "Project issues carbon credits",
        link: "https://standfortrees.org/wp-content/uploads/how-3.png"
    }, {
        name: "You buy credits through Stand For Trees",
        link: "https://standfortrees.org/wp-content/uploads/how-4-1.png"
    }, {
        name: "Project receives money to keep delivering results",
        link: "https://standfortrees.org/wp-content/uploads/how-5-1.png"
    }
    ]
    const responsive = {
        desktop: {
            breakpoint: { max: 40000, min: 900 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 900, min: 0 },
            items: 2
        }
    };
    return (
        <>

            <Box component='div' sx={{ width: '100%', position: 'relative', zIndex: 1, 
                // 'top': 'calc(100vh - 104px)'
                top:"-97px"
                 }}>
                {/* <div class="wave-container"></div> */}
                <Box component='img' sc src='/wavyTop.svg' alt='svh'></Box>
                <Box component={'div'} sx={{
                    height: '225px', display: 'flex', flexDirection: 'column', left: '50%', transform: 'translateX(-50%)', position: 'relative', gap: 7, backgroundColor: 'white'
                    , justifyContent: 'center', alignItems: 'center', width: '100%'
                }}>
                    <Typography variant='h1' sx={{ fontFamily: 'Poppins', fontSize: '40px', fontWeight: 700, color: '#C86C61' }}>Projects Trusted By</Typography>
                    <Marquee speed={130} autoFill>
                        {partners.map((partner, index) => {
                            return (
                                <Box component='img' src={partner.location} alt={partner.name} sx={{ width: 150, height: 100, paddingLeft: 10 }} key={index} />)
                        })}
                    </Marquee>
                </Box>

                <img className='wave1' src='/wavyBottom.svg'></img>

                <Box sx={{ width: '100%', paddingBottom: '24vh', backgroundColor: '#E2EDEB' }}>
                    <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                        <Typography variant='h1' sx={{ fontFamily: 'Poppins', fontSize: '22px', fontWeight: 400, color: '#939393' }}>How it works</Typography>
                        <Typography variant='h1' sx={{ fontFamily: 'Poppins', fontSize: '42px', fontWeight: 700, color: '#41464b' }}>We work directly with projects</Typography>
                        <Stack direction={'row'} flexWrap={'wrap'}  spacing={0} justifyContent={'space-evenly'} alignItems={'center'} sx={{ width: '90%',gap:"10px 5px" ,marginTop:'30px !important' }}>
                            {workingModel.map((model, index) => {
                                return (
                                <Card sx={{ minHeight: 315,maxWidth: 215, borderRadius: 3, padding: '10px 20px ' , }}>
                                    <CardActionArea sx={{cursor:'none'}}>
                                        <CardMedia
                                            component="img"
                                            height="190"
                                            // sx={{padding:'0px 10px 0px 10px',width: '245px'}}
                                            image={model.link}
                                            alt={model.name}
                                        />
                                        <CardContent>

                                            <Typography variant="body1" sx={{ fontSize: 20, fontWeight: 300, textAlign: 'center' }} color="text.secondary">
                                                {model.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>)
                            })}


                        </Stack>
                        <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%',marginTop:'30px !important' }}>
                        <Typography variant='h1' sx={{ fontFamily: 'Poppins',wordSpacing:'3px' ,fontSize:'14px', fontWeight: 700, color: '#6ecbb8' }}>READ MORE ABOUT HOW WE WORK HERE</Typography>
                            

                            </Stack>
                    </Stack>
                </Box>
            </Box>
        </>

    )
}

export default ImageSlider
