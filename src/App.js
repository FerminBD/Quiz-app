import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';
import './styles.css';

function App() {
  return (
    <Container fixed>
      <Box  textAlign="center" mt={3}>     
      <Typography variant='h2' fontWeight='bold' mb={5}>QUIZ APP</Typography>
        <Router>
          <Routes>
            <Route path="/" element={<Settings />}></Route>  
            <Route path="/questions" element={<Questions />}></Route>  
            <Route path="/score" element={<FinalScreen />}></Route>  
          </Routes> 
        </Router>
      </Box>  
    </Container>
  );
}

export default App;
