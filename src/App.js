import { useState } from 'react'

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑']

export default function App() {
  return (
    <>
      <Steps />
      <Steps />
    </>
  )
}

function Steps() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  const firtStep = step === 1
  console.log(firtStep)
  const lastStep = step === messages.length

  function handlePrevious() {
    setStep(s => Math.max(1, s - 1))
  }

  function handleNext() {
    setStep(s => Math.min(messages.length, s + 1))
  }

  return (
    <>
      <div className="close" onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon open" viewBox="0 0 512 512">
            <path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
          </svg>
        )}
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`step-1 ${step >= 1 && 'active'}`}>1</div>
            <div className={`step-2 ${step >= 2 && 'active'}`}>2</div>
            <div className={`step-3 ${step >= 3 && 'active'}`}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button className={`previous ${firtStep ? 'disabled' : ''}`.trim()} onClick={handlePrevious}>
              <span>⬅️</span>
              <span>Previous</span>
            </Button>
            <Button className={`next ${lastStep ? 'disabled' : ''}`.trim()} onClick={handleNext}>
              <span>Next</span>
              <span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  )
}

function Button({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
