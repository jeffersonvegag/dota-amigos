import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/AppSidebar'
import Home from '@/pages/Home'
import Versus from '@/pages/Versus'
import './App.css'

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <AppSidebar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/versus" element={<Versus />} />
            </Routes>
          </main>
        </div>
      </SidebarProvider>
    </Router>
  )
}

export default App