import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Grid,
    ListItem,
    Drawer,
    IconButton,
    Modal,
    ThemeProvider,
    createTheme, List, Fab
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import backgroundImg from './assets/background.jpg';
import {Brush, Build, Construction, Carpenter, Settings, SettingsApplications, Phone} from '@mui/icons-material';

const workData = [
    {
        icon: <Brush sx={{ fontSize: 60 }} />,
        text: 'Interior and exterior painting services for a fresh and vibrant look.',
        title: 'Painting'
    },
    {
        icon: <Construction sx={{ fontSize: 60 }} />, // Using Construction icon as an alternative
        text: 'Repairing, patching, or installing drywall for a smooth and flawless finish.',
        title: 'Drywall'
    },
    {
        icon: <Carpenter sx={{ fontSize: 60 }} />,
        text: 'Customized woodwork such as shelves, trim work, or small carpentry projects.',
        title: 'Small Finish Carpentry'
    },
    {
        icon: <SettingsApplications sx={{ fontSize: 60 }} />,
        text: 'Mounting TVs, installing doors, and setting up shelves for a neat and organized space.',
        title: 'Installation of TV, Doors, Shelves'
    },
    {
        icon: <Build sx={{ fontSize: 60 }} />,
        text: 'Handling various home repair tasks, including minor plumbing, electrical fixes, and more.',
        title: 'General Repairs'
    },
    {
        icon: <Settings sx={{ fontSize: 60 }} />,
        text: 'Expert assembly and installation of IKEA furniture, ensuring a professional setup.',
        title: 'IKEA Installation'
    },
];

const LandingPage = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#ffc107",
                contrastText: "#000" // Change button text color to white
            },
            secondary: {
                main: "#ffc107",
                contrastText: "#fff" // Change button text color to white
            },
            background: {
                default: "#fff"
            }
        },
    });

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const phoneNumber = '4375396533'; // Replace with your actual phone number

    return (
        <ThemeProvider theme={theme}>
            <div>
                {/* Contact Modal */}
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="contact-modal-title"
                    aria-describedby="contact-modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'white',
                            padding: '20px',
                            width: '30vh',
                            borderRadius: '8px',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Contact Information
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Phone: {phoneNumber}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => window.open(`tel:${phoneNumber}`)}
                        >
                            Call Us
                        </Button>
                    </Box>
                </Modal>

                {/* Navigation Bar */}
                <AppBar position="fixed">
                    <Toolbar sx={{ backgroundColor: theme.palette.primary.main }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.primary.contrastText }}>
                            Household Heroes
                        </Typography>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton color="inherit" onClick={toggleMobileMenu}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Button color="inherit" onClick={() => scrollToSection('main')}>
                                Home
                            </Button>
                            <Button color="inherit" onClick={() => scrollToSection('work')}>
                                Work We Do
                            </Button>
                            <Button variant="inherit" color="primary" onClick={handleOpenModal}>
                                Contact Us
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* Mobile Drawer for Hamburger Menu */}
                <Drawer anchor="right" open={mobileMenuOpen} onClose={toggleMobileMenu}>
                    <List>
                        <ListItem button onClick={() => scrollToSection('main')}>
                            Home
                        </ListItem>
                        <ListItem button onClick={() => scrollToSection('work')}>
                            Work We Do
                        </ListItem>
                        <ListItem  onClick={() => window.open(`tel:${phoneNumber}`)}>
                            Contact Us
                        </ListItem>
                    </List>
                </Drawer>

                {/* Main Section */}
                <Box
                    id="main"
                    sx={{
                        width: '100vw',
                        height: '70vh',
                        backgroundImage: `url(${backgroundImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '20px', width: '100%', maxWidth: '700px'}}>
                        <Typography variant="h4" gutterBottom style={{ color: '#fff' }}>
                            Household Heroes: Your Expert Handyman Team
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom style={{ color: '#fff' }}>
                            Our skilled team handles all household needs, from minor fixes to major renovations. With extensive experience and a dedication to quality, we offer a wide array of services for your home's optimal condition.
                        </Typography>
                        <Button variant="contained" color="primary" onClick={handleOpenModal}>
                            Contact Us
                        </Button>
                    </div>
                </Box>



                {/* Work We Do Section */}
                <Box id="work" sx={{marginBottom: '64px', marginTop: '64px', padding: '20px', backgroundColor: theme.palette.background.default }}>
                    <Container>
                        <Typography variant="h4" gutterBottom align="center">
                            Work We Do
                        </Typography>

                        <Grid container justifyContent="center" spacing={3} sx={{ marginTop: '20px' }}>
                            <Grid item xs={12} sm={6}>
                                <Grid container spacing={3}>
                                    {workData.map((work, index) => (
                                        <Grid item xs={6} key={index}>
                                            <Box textAlign="center">
                                                {work.icon}
                                                <Typography variant="h6">{work.title}</Typography>
                                                <Typography variant="subtitle1">{work.text}</Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Fab
                color="primary"
                aria-label="contact"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    display: { xs: 'block', md: 'none' },
                }}
                onClick={() => window.open(`tel:${phoneNumber}`)}
            >
                <Phone />
            </Fab>
            </div>

        </ThemeProvider>
    );
};

export default LandingPage;
