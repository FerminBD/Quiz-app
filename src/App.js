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

function App() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
      <Typography variant='h2' fontWeight='bold'>Quiz App</Typography>
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
