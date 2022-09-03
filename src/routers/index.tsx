import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import MediaText from './MediaText'

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MediaText" element={<MediaText />} />
    </Routes>
  )
}
