import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/Accordion';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal';

const Tour = () => <Container sx={{width: 900}}>
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore Vegas
    </Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
        <img src="https://cdn.aarp.net/content/dam/aarp/travel/tips/2020/12/1140-las-vegas-sign.jpg" alt="Vegas" height={325}></img>
        <ImageCollage />
    </Box>
    <Box>
    <Typography variant="h6" component="h4" marginTop={3}>
        About this Tour
    </Typography>
    <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, magnam doloremque incidunt voluptatem libero commodi autem ea labore, fuga debitis voluptas voluptate est dolor, harum dolores id odio obcaecati deserunt perferendis cumque praesentium vitae doloribus accusantium at. Blanditiis, debitis minus.
    </Typography>
    </Box>
    <Box marginBottom={10}>
    <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        Frequently Asked Questions
    </Typography>
    <CustomizedAccordions/>
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
</Container>

export default Tour;