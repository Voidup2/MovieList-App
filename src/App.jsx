import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/header/Header'
import Layout from './components/Layout/Layout'
import Hero from './components/hero/Hero'
import Herotwo from './components/hero/Herotwo'
import Details from './components/details/Details'

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Layout>
        <Header onSearch={setSearchQuery} />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Herotwo searchQuery={searchQuery} />
              </>
            }
          />
           <Route path="/movies" element={<Herotwo searchQuery={searchQuery} />}/>
          {/* Movie Details Page */}
          <Route path="/movie/:id" element={<Details />} />
          <Route path="/tv/:id" element={<Details />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
