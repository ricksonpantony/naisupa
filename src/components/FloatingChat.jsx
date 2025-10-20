import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { MessageCircle, Phone, X, Send } from 'lucide-react'

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [showChatWidget, setShowChatWidget] = useState(false)
  const [message, setMessage] = useState('')
  const [portalElement, setPortalElement] = useState(null)

  // WhatsApp number
  const whatsappNumber = '+61478320397'

  // Create portal element on mount
  useEffect(() => {
    const element = document.createElement('div')
    element.style.cssText = `
      position: fixed !important;
      bottom: 20px !important;
      right: 20px !important;
      z-index: 999999 !important;
      pointer-events: none !important;
    `
    document.body.appendChild(element)
    setPortalElement(element)

    return () => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element)
      }
    }
  }, [])

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      setMessage('')
      setIsOpen(false)
    }
  }

  const handleCall = () => {
    window.open(`tel:${whatsappNumber}`, '_self')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const quickMessages = [
    "Hi! I'm interested in NCLEX preparation courses.",
    "I'd like to know more about OSCE training.",
    "Can you tell me about OBA pathway guidance?",
    "What are your course fees and schedules?"
  ]

  if (!portalElement) return null

  return createPortal(
    <div 
      style={{
        pointerEvents: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '16px'
      }}
    >
      {/* Chat widget - appears above buttons when open */}
      {showChatWidget && (
        <div 
          style={{
            width: window.innerWidth <= 768 ? '320px' : '350px',
            maxWidth: 'calc(100vw - 32px)',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 20px 40px -8px rgba(82, 209, 219, 0.15), 0 8px 24px -4px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(82, 209, 219, 0.2)',
            overflow: 'hidden',
            marginBottom: window.innerWidth <= 768 ? '16px' : '20px',
            backdropFilter: 'blur(10px)',
            transform: showChatWidget ? 'translateY(0) scale(1) rotateX(0deg)' : 'translateY(20px) scale(0.9) rotateX(-10deg)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            opacity: showChatWidget ? '1' : '0',
            transformOrigin: 'bottom center'
          }}
        >
          {/* Header */}
          <div 
            style={{
              background: 'linear-gradient(135deg, #52d1db 0%, #00bcc9 50%, #2a8a96 100%)',
              color: 'white',
              padding: window.innerWidth <= 768 ? '16px' : '20px',
              position: 'relative'
            }}
          >
            <div style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              opacity: 0.6
            }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: window.innerWidth <= 768 ? '36px' : '40px',
                  height: window.innerWidth <= 768 ? '36px' : '40px',
                  background: 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  animation: 'float 3s ease-in-out infinite'
                }}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 style={{ fontWeight: '600', margin: '0', fontSize: '16px' }}>NAI Support</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%',
                      animation: 'pulse 2s infinite'
                    }} />
                    <p style={{ fontSize: '12px', opacity: '0.9', margin: '0' }}>Online now</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => {
                  setShowChatWidget(false)
                  setShowOptions(false)
                }}
                style={{
                  color: 'white',
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.3)'
                  e.target.style.transform = 'scale(1.1)'
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Welcome message */}
          <div style={{ padding: '20px 20px 16px 20px', backgroundColor: '#fafbfc' }}>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '16px', 
              padding: '16px', 
              fontSize: '14px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(203, 213, 224, 0.2)'
            }}>
              <p style={{ color: '#1f2937', margin: '0', lineHeight: '1.5' }}>
                👋 Hi there! Welcome to <strong>NAI</strong>.<br />
                How can we help with your nursing career journey?
              </p>
            </div>
          </div>

          {/* Quick messages - desktop only */}
          <div className="hidden sm:block" style={{ padding: '0 20px 16px 20px', maxHeight: '140px', overflowY: 'auto' }}>
            <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px', fontWeight: '600', letterSpacing: '0.5px' }}>QUICK ACTIONS</p>
            {quickMessages.map((msg, index) => (
              <button
                key={index}
                onClick={() => setMessage(msg)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  fontSize: '13px',
                  color: '#475569',
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  marginBottom: '8px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f8fafc'
                  e.target.style.borderColor = '#0ea5e9'
                  e.target.style.transform = 'translateY(-1px)'
                  e.target.style.boxShadow = '0 4px 12px rgba(14, 165, 233, 0.15)'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'white'
                  e.target.style.borderColor = '#e2e8f0'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04)'
                }}
              >
                {msg}
              </button>
            ))}
          </div>

          {/* Message input */}
          <div style={{ padding: '16px 20px 20px 20px', borderTop: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                style={{
                  flex: '1',
                  padding: '12px 16px',
                  fontSize: '14px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '16px',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  backgroundColor: '#fafbfc'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#52d1db'
                  e.target.style.backgroundColor = 'white'
                  e.target.style.boxShadow = '0 0 0 3px rgba(82, 209, 219, 0.15)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0'
                  e.target.style.backgroundColor = '#fafbfc'
                  e.target.style.boxShadow = 'none'
                }}
              />
              <button
                onClick={() => {
                  handleSendMessage()
                  setShowChatWidget(false)
                  setShowOptions(false)
                }}
                disabled={!message.trim()}
                style={{
                  padding: '12px',
                  backgroundColor: message.trim() ? '#52d1db' : '#94a3b8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '16px',
                  cursor: message.trim() ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  minWidth: '44px',
                  height: '44px'
                }}
                onMouseOver={(e) => {
                  if (message.trim()) {
                    e.target.style.backgroundColor = '#00bcc9'
                    e.target.style.transform = 'scale(1.05) rotate(5deg)'
                  }
                }}
                onMouseOut={(e) => {
                  if (message.trim()) {
                    e.target.style.backgroundColor = '#52d1db'
                    e.target.style.transform = 'scale(1) rotate(0deg)'
                  }
                }}
              >
                <Send size={18} />
              </button>
            </div>
            <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '12px', textAlign: 'center', margin: '12px 0 0 0' }}>
              💬 Messages sent via WhatsApp • Secure & Private
            </p>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
        
        {/* Expanded options - appear when main button is clicked */}
        {showOptions && (
          <>
            {/* Call button option */}
            <button
              onClick={() => {
                handleCall()
                setShowOptions(false)
              }}
              style={{
                width: window.innerWidth <= 768 ? '48px' : '52px',
                height: window.innerWidth <= 768 ? '48px' : '52px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                boxShadow: '0 6px 20px rgba(16, 185, 129, 0.35), 0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transform: 'scale(0) rotate(-180deg)',
                animation: 'expandIn 0.5s ease 0.1s forwards',
                position: 'relative'
              }}
              title={`Call ${whatsappNumber}`}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                e.target.style.transform = 'scale(1.1) translateY(-3px) rotate(5deg)'
                e.target.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.45), 0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                e.target.style.transform = 'scale(1) rotate(0deg)'
                e.target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.35), 0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Phone size={20} />
              {/* Label */}
              <div style={{
                position: 'absolute',
                right: '100%',
                top: '50%',
                transform: 'translateY(-50%)',
                marginRight: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                opacity: '0',
                transition: 'opacity 0.2s ease'
              }}
              className="button-label">
                Call Now
              </div>
            </button>

            {/* Chat button option */}
            <button
              onClick={() => {
                setShowChatWidget(true)
                setShowOptions(false)
              }}
              style={{
                width: window.innerWidth <= 768 ? '48px' : '52px',
                height: window.innerWidth <= 768 ? '48px' : '52px',
                background: 'linear-gradient(135deg, #52d1db 0%, #00bcc9 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                boxShadow: '0 6px 20px rgba(82, 209, 219, 0.35), 0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transform: 'scale(0) rotate(180deg)',
                animation: 'expandIn 0.5s ease forwards',
                position: 'relative'
              }}
              title="Open Chat"
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #00bcc9 0%, #2a8a96 100%)'
                e.target.style.transform = 'scale(1.1) translateY(-3px) rotate(-5deg)'
                e.target.style.boxShadow = '0 12px 30px rgba(82, 209, 219, 0.45), 0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #52d1db 0%, #00bcc9 100%)'
                e.target.style.transform = 'scale(1) rotate(0deg)'
                e.target.style.boxShadow = '0 6px 20px rgba(82, 209, 219, 0.35), 0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <MessageCircle size={20} />
              {/* Label */}
              <div style={{
                position: 'absolute',
                right: '100%',
                top: '50%',
                transform: 'translateY(-50%)',
                marginRight: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                opacity: '0',
                transition: 'opacity 0.2s ease'
              }}
              className="button-label">
                Start Chat
              </div>
            </button>
          </>
        )}

        {/* Main floating button */}
        <button
          onClick={() => {
            if (showChatWidget) {
              setShowChatWidget(false)
            }
            setShowOptions(!showOptions)
          }}
          style={{
            width: window.innerWidth <= 768 ? '56px' : '60px',
            height: window.innerWidth <= 768 ? '56px' : '60px',
            background: showOptions || showChatWidget
              ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' 
              : 'linear-gradient(135deg, #52d1db 0%, #00bcc9 50%, #2a8a96 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            boxShadow: showOptions || showChatWidget
              ? '0 8px 25px rgba(239, 68, 68, 0.4), 0 2px 10px rgba(0, 0, 0, 0.1)'
              : '0 8px 25px rgba(82, 209, 219, 0.4), 0 2px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: 'scale(1)',
            position: 'relative',
            animation: showOptions || showChatWidget ? 'none' : 'float 4s ease-in-out infinite'
          }}
          onMouseOver={(e) => {
            if (showOptions || showChatWidget) {
              e.target.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
              e.target.style.boxShadow = '0 12px 30px rgba(239, 68, 68, 0.5), 0 4px 12px rgba(0, 0, 0, 0.15)'
            } else {
              e.target.style.background = 'linear-gradient(135deg, #00bcc9 0%, #2a8a96 50%, #1f6b73 100%)'
              e.target.style.boxShadow = '0 12px 30px rgba(82, 209, 219, 0.5), 0 4px 12px rgba(0, 0, 0, 0.15)'
            }
            e.target.style.transform = 'scale(1.1) translateY(-3px) rotate(5deg)'
            e.target.style.animation = 'none'
          }}
          onMouseOut={(e) => {
            if (showOptions || showChatWidget) {
              e.target.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
              e.target.style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.4), 0 2px 10px rgba(0, 0, 0, 0.1)'
            } else {
              e.target.style.background = 'linear-gradient(135deg, #52d1db 0%, #00bcc9 50%, #2a8a96 100%)'
              e.target.style.boxShadow = '0 8px 25px rgba(82, 209, 219, 0.4), 0 2px 10px rgba(0, 0, 0, 0.1)'
              e.target.style.animation = 'float 4s ease-in-out infinite'
            }
            e.target.style.transform = 'scale(1) rotate(0deg)'
          }}
        >
          {showOptions || showChatWidget ? (
            <X size={26} style={{ transform: 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
          ) : (
            <>
              <MessageCircle size={26} />
              {/* Notification dot */}
              <div 
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '14px',
                  height: '14px',
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  borderRadius: '50%',
                  border: '2px solid white',
                  animation: 'pulse 2s infinite',
                  boxShadow: '0 2px 8px rgba(239, 68, 68, 0.4)'
                }}
              />
            </>
          )}
        </button>
      </div>

      {/* Backdrop for mobile */}
      {(showOptions || showChatWidget) && (
        <div 
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: '-1',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => {
            setShowOptions(false)
            setShowChatWidget(false)
          }}
        />
      )}

      {/* Add keyframes for animations */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.15); }
          }
          @keyframes expandIn {
            0% { 
              transform: scale(0) translateY(20px) rotate(180deg); 
              opacity: 0; 
              filter: blur(4px);
            }
            60% { 
              opacity: 0.8; 
              filter: blur(1px);
            }
            100% { 
              transform: scale(1) translateY(0) rotate(0deg); 
              opacity: 1; 
              filter: blur(0px);
            }
          }
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
            }
            25% { 
              transform: translateY(-6px) rotate(1deg); 
            }
            50% { 
              transform: translateY(-8px) rotate(0deg); 
            }
            75% { 
              transform: translateY(-4px) rotate(-1deg); 
            }
          }
          .button-label {
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          button:hover .button-label {
            opacity: 1 !important;
            transform: translateY(-50%) translateX(-5px) !important;
          }
        `}
      </style>
    </div>,
    portalElement
  )
}

export default FloatingChat
