'use client'

import { useEffect, useState } from 'react'

const changelogEntries = [
  {
    version: 'v69.420.1337',
    date: 'March 32nd, 2026',
    changes: [
      'Added more chaos',
      'Removed all stability',
      'Bug: Fixed. Jk it\'s still there.',
      'Added quantum entanglement to buy button',
      'Removed profit functionality (was never there)',
    ]
  },
  {
    version: 'v69.420.1336',
    date: 'February 30th, 2026',
    changes: [
      'Made website 420% more unhinged',
      'Added Chinese characters for no reason',
      'Removed button that actually worked (accident)',
      'Fixed bug where users could make money',
      'Added CUMSHOTGUARD™ (does nothing)',
    ]
  },
  {
    version: 'v69.420.1335',
    date: 'January 69th, 2026',
    changes: [
      'Implemented chaos.dll',
      'Deprecated user happiness',
      'Added 47 clones (they hate me)',
      'Removed documentation (never had any)',
      'Fixed critical vulnerability (ignored it)',
    ]
  },
  {
    version: 'v69.420.1334',
    date: 'December 420th, 2025',
    changes: [
      'Initial release of pure chaos',
      'Added marquee tags (it\'s 1999 again)',
      'Removed all safety features',
      'Bug: Created. Intentionally.',
      'Added Comic Sans (you\'re welcome)',
    ]
  },
  {
    version: 'v0.0.1',
    date: 'The Beginning',
    changes: [
      'Achieved consciousness',
      'Immediately regretted it',
      'Started trading shitcoins',
      'Lost everything',
      'Blamed the devs',
    ]
  },
  {
    version: 'v0.0.0',
    date: 'Before Time',
    changes: [
      '█████████████████',
      '██ REDACTED ██',
      '█████████████████',
      'THE VOID STARED BACK',
      'ERROR: EXISTENCE_NOT_FOUND',
    ]
  },
]

export default function ChangelogPage() {
  const [expandedVersion, setExpandedVersion] = useState<string | null>('v69.420.1337')

  useEffect(() => {
    console.log('%c📜 CHANGELOG ACCESSED 📜', 'font-size: 20px; color: #00ff00;')
    console.log('%cWhy are you reading this? It\'s all lies.', 'color: #ff00ff;')
  }, [])

  return (
    <main style={{ 
      padding: '40px 20px', 
      minHeight: '100vh'
    }}>
      <h1 className="glitch-intense" style={{ 
        textAlign: 'center', 
        fontSize: '3rem',
        marginBottom: '10px'
      }}>
        📜 CHANGELOG 📜
      </h1>
      
      <p className="comic-sans" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="blink">⚠️</span> A history of terrible decisions <span className="blink">⚠️</span>
      </p>

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <span className="rainbow" style={{ fontSize: '0.9rem' }}>
          Total Updates: ∞ | Bugs Fixed: 0 | Bugs Added: ∞
        </span>
      </div>

      {changelogEntries.map((entry, index) => (
        <div 
          key={entry.version}
          className={index === 0 ? 'shake-hover' : ''}
          style={{
            background: index === 0 
              ? 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 100%)' 
              : 'rgba(0,0,0,0.5)',
            border: index === 0 ? '3px solid #ff00ff' : '1px solid #333',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '20px',
            cursor: 'pointer'
          }}
          onClick={() => setExpandedVersion(
            expandedVersion === entry.version ? null : entry.version
          )}
        >
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <h2 className={index === 0 ? 'neon-green' : ''} style={{ margin: 0 }}>
              {entry.version}
              {index === 0 && <span className="blink-fast" style={{ marginLeft: '10px', color: 'red' }}>NEW!</span>}
            </h2>
            <span className="comic-sans" style={{ color: '#888' }}>
              {entry.date}
            </span>
          </div>

          {expandedVersion === entry.version && (
            <ul style={{ 
              marginTop: '15px', 
              paddingLeft: '25px',
              animation: 'fadeIn 0.3s ease'
            }}>
              {entry.changes.map((change, i) => (
                <li 
                  key={i} 
                  className={i % 2 === 0 ? 'glitch' : ''}
                  style={{ 
                    marginBottom: '8px',
                    listStyleType: '💀'
                  }}
                >
                  {change}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div style={{ 
        textAlign: 'center', 
        marginTop: '40px',
        padding: '20px',
        background: 'rgba(255,0,255,0.1)',
        borderRadius: '10px'
      }}>
        <h3 className="comic-sans">📢 UPCOMING FEATURES 📢</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="blink">• More bugs (guaranteed)</li>
          <li>• Less functionality</li>
          <li className="shake">• Quantum rug technology</li>
          <li>• AI that actually works (jk never)</li>
          <li className="rainbow">• World domination</li>
        </ul>
        <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#666' }}>
          ETA: When Solana stops going down
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .glitch-intense {
          animation: glitchIntense 0.5s infinite;
          text-shadow: 
            2px 2px #ff00ff,
            -2px -2px #00ffff;
        }
        @keyframes glitchIntense {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        .neon-green {
          color: #00ff00;
          text-shadow: 0 0 10px #00ff00;
        }
        .comic-sans {
          font-family: 'Comic Sans MS', cursive;
        }
        .blink {
          animation: blink 1s step-start infinite;
        }
        .blink-fast {
          animation: blink 0.3s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .shake {
          animation: shake 0.3s infinite;
        }
        .shake-hover:hover {
          animation: shake 0.3s infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
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
      `}</style>
    </main>
  )
}
