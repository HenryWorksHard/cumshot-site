'use client'

import { useEffect, useState } from 'react'

export default function SecretPage() {
  const [revealed, setRevealed] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    console.log('%c🤫 YOU FOUND THE SECRET PAGE 🤫', 'font-size: 40px; color: #ff00ff;')
    console.log('%cBut why? There\'s nothing here.', 'color: #00ff00;')
    console.log('%cOr is there?', 'color: red;')
  }, [])

  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#000',
      color: '#fff',
      fontFamily: 'monospace',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div 
        onClick={() => {
          setClickCount(prev => {
            const newCount = prev + 1
            if (newCount >= 10) {
              setRevealed(true)
            }
            return newCount
          })
        }}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        <h1 style={{ 
          fontSize: revealed ? '10rem' : '20rem', 
          margin: 0,
          transition: 'font-size 1s ease'
        }}>
          ?
        </h1>
      </div>

      {clickCount > 0 && clickCount < 10 && (
        <p style={{ color: '#666', marginTop: '20px' }}>
          clicks: {clickCount}/10
        </p>
      )}

      {revealed && (
        <div style={{ marginTop: '40px', animation: 'fadeIn 2s ease' }}>
          <h2 className="rainbow" style={{ fontSize: '2rem' }}>
            🎉 CONGRATULATIONS 🎉
          </h2>
          <p className="glitch" style={{ fontSize: '1.5rem', marginTop: '20px' }}>
            You found the secret page AND clicked 10 times.
          </p>
          <p style={{ marginTop: '20px', color: '#00ff00' }}>
            Your reward is: NOTHING.
          </p>
          <p style={{ marginTop: '10px', color: '#ff00ff' }}>
            But you did prove you have too much free time.
          </p>
          <p style={{ marginTop: '30px', fontSize: '0.8rem', color: '#666' }}>
            (The real secret was the time you wasted along the way)
          </p>
          
          <div style={{ marginTop: '40px' }}>
            <p className="blink" style={{ color: 'red' }}>
              SECRET CODE: IAMNOTARUG
            </p>
            <p style={{ fontSize: '0.7rem', color: '#444' }}>
              (this code does nothing)
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .rainbow {
          animation: rainbow 2s linear infinite;
        }
        @keyframes rainbow {
          0% { color: red; }
          15% { color: orange; }
          30% { color: yellow; }
          45% { color: green; }
          60% { color: blue; }
          75% { color: indigo; }
          90% { color: violet; }
          100% { color: red; }
        }
        .glitch {
          animation: glitch 0.3s infinite;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .blink {
          animation: blink 0.5s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </main>
  )
}
