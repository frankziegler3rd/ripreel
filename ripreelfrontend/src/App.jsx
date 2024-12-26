import { useState } from 'react'
import ripreellogo from './assets/ripreellogo.svg'
import './App.css'
import { Box, Button, TextField } from '@mui/material'
import Navbar from './Components/Navbar'

function App() {

  const [format, setFormat] = useState('MP3')

  const handleFormatToggle = () => {
    setFormat((prevFormat) => (prevFormat == 'MP3' ? 'MP4' : 'MP3'))
  }

  return (
    <>
      <Navbar />
      <div>
        <img src={ripreellogo} className="logo" alt="Vite logo" />
      </div>
      <Box display="flex" alignItems="center" gap={2} padding="20px">
        <TextField
          sx={{ width: '600px' }}
          label="Enter a YouTube video URL"
          id="customWidth"
        />
        <Button variant="contained" color="primary" sx={{height: 56, backgroundColor: 'black'}} onClick={handleFormatToggle}>{format}</Button>
        <Button variant="contained" color="primary" sx={{height: 56, backgroundColor: 'black'}}>Convert</Button>
      </Box>
      <h1>YouTube to MP3 Converter</h1>
      <p>Free, ad-free, unlimited, and easy conversion from YouTube video URLs to MP3 or MP4 audio files.</p>
    </>
  )
}

export default App
