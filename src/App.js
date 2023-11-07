import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Link,
    Grid,
    ListItem,
    Drawer,
    List,
    IconButton, Modal
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import backgroundImg from './assets/background.jpg'


const LandingPage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const phoneNumber = '123-456-7890'; // Replace with your actual phone number

    return (
      <div>
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
              <Toolbar sx={{backgroundColor: '#ffc107'}}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                      Your Logo
                  </Typography>
                  <Box sx={{ display: { xs: 'block', md: 'none', color: 'black'} }}>
                      <IconButton color="inherit" onClick={toggleMobileMenu}>
                          <MenuIcon />
                      </IconButton>
                  </Box>
                  <Box sx={{ display: { xs: 'none', md: 'block', color: 'black'} }}>
                      <Button color="inherit" onClick={() => scrollToSection('projects')}>
                          Projects
                      </Button>
                      <Button color="inherit" onClick={() => scrollToSection('main')}>
                          Home
                      </Button>
                      <Button color="inherit" onClick={() => scrollToSection('work')}>
                          Work We Do
                      </Button>
                  </Box>
              </Toolbar>
          </AppBar>

          {/* Mobile Drawer for Hamburger Menu */}
          <Drawer anchor="right" open={mobileMenuOpen} onClose={toggleMobileMenu}>
              <List>
                  <ListItem button onClick={() => scrollToSection('projects')}>
                      Projects
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection('main')}>
                      Home
                  </ListItem>
                  <ListItem button onClick={() => scrollToSection('work')}>
                      Work We Do
                  </ListItem>
              </List>
          </Drawer>

        {/* Main Section */}
          <Box id="main" sx={{ margin: 0, padding: 0, width: '100vw', overflow: 'hidden' }}>
              <img
                  src={backgroundImg}
                  alt="Your Image"
                  style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              />
              <Box
                  sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'white',
                  }}
              >
                  <Typography variant="h3" gutterBottom>
                      Welcome to Our Site
                  </Typography>
                  <Button variant="contained" color="primary" onClick={handleOpenModal}>
                      Contact Us
                  </Button>
              </Box>
          </Box>


          {/* Work We Do Section */}
        <Box id="work" sx={{ marginTop: '64px', padding: '20px' }}>
          <Container>
            <Typography variant="h4" gutterBottom>
              Work We Do
            </Typography>
            <Typography variant="body1">
              Description of the work we do goes here. This section can contain information about the services or work your company offers.
            </Typography>
          </Container>
        </Box>

        {/* Projects Section (This is a placeholder, you need to create your own projects section) */}
        <Box id="projects" sx={{ marginTop: '64px', height: '100vh', backgroundColor: '#f0f0f0' }}>
          <Container>
            <Typography variant="h4" gutterBottom>
              Our Projects
            </Typography>
            {/* Add your projects section here */}
          </Container>
        </Box>
      </div>
  );
};

export default LandingPage;
