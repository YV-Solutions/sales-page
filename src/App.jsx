import './App.css'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Roadmap from './components/Roadmap'
import SocialProof from './components/SocialProof'
import Value from './components/Value'
import Contrast from './components/Contrast'
import Anchoring from './components/Anchoring'
import Proposal from './components/Proposal'

function App() {
  return (
    <div className="w-full bg-slate-50 p-0 m-0">
      <Hero />
      <SocialProof />
      <Problem />
      <Value />
      <Roadmap />
      <Contrast />
      <Anchoring />
      <Proposal />
    </div>
  )
}

export default App
