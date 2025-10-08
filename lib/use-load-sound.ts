"use client"

import { useEffect, useRef, useState } from "react"

// Simple beep sound using Web Audio API
function createBeepSound(): string {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const sampleRate = audioContext.sampleRate
    const duration = 0.3
    const numSamples = sampleRate * duration
    
    const buffer = audioContext.createBuffer(1, numSamples, sampleRate)
    const channelData = buffer.getChannelData(0)
    
    // Simple beep sound
    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate
      const freq = 800 * Math.exp(-t * 2) // Descending frequency
      const envelope = Math.exp(-t * 4) // Fade out
      channelData[i] = Math.sin(2 * Math.PI * freq * t) * envelope * 0.2
    }
    
    // Convert to WAV
    const wav = audioBufferToWav(buffer)
    const blob = new Blob([wav], { type: 'audio/wav' })
    return URL.createObjectURL(blob)
  } catch (error) {
    console.log('Audio generation failed:', error)
    return ''
  }
}

function audioBufferToWav(buffer: AudioBuffer): ArrayBuffer {
  const numChannels = buffer.numberOfChannels
  const sampleRate = buffer.sampleRate
  const format = 1
  const bitDepth = 16
  
  const bytesPerSample = bitDepth / 8
  const blockAlign = numChannels * bytesPerSample
  
  const data = interleave(buffer)
  const dataLength = data.length * bytesPerSample
  const headerLength = 44
  
  const arrayBuffer = new ArrayBuffer(headerLength + dataLength)
  const view = new DataView(arrayBuffer)
  
  // WAV header
  writeString(view, 0, 'RIFF')
  view.setUint32(4, 36 + dataLength, true)
  writeString(view, 8, 'WAVE')
  writeString(view, 12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, format, true)
  view.setUint16(22, numChannels, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * blockAlign, true)
  view.setUint16(32, blockAlign, true)
  view.setUint16(34, bitDepth, true)
  writeString(view, 36, 'data')
  view.setUint32(40, dataLength, true)
  
  floatTo16BitPCM(view, 44, data)
  return arrayBuffer
}

function interleave(buffer: AudioBuffer): Float32Array {
  const length = buffer.length * buffer.numberOfChannels
  const result = new Float32Array(length)
  
  let offset = 0
  for (let i = 0; i < buffer.length; i++) {
    for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
      result[offset++] = buffer.getChannelData(channel)[i]
    }
  }
  
  return result
}

function writeString(view: DataView, offset: number, string: string): void {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i))
  }
}

function floatTo16BitPCM(view: DataView, offset: number, input: Float32Array): void {
  for (let i = 0; i < input.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, input[i]))
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true)
  }
}

export function useLoadSound(soundUrl?: string, volume: number = 0.3) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hasPlayedRef = useRef(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    try {
      const url = soundUrl || createBeepSound()
      
      if (!url) {
        console.log('No audio URL available')
        return
      }
      
      const audio = new Audio(url)
      audio.volume = volume
      audio.preload = "auto"
      audioRef.current = audio

      audio.addEventListener("canplaythrough", () => {
        setIsReady(true)
      })

      return () => {
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current = null
        }
        if (!soundUrl && url.startsWith('blob:')) {
          URL.revokeObjectURL(url)
        }
      }
    } catch (error) {
      console.log('Audio setup failed:', error)
    }
  }, [soundUrl, volume])

  useEffect(() => {
    if (!isReady || hasPlayedRef.current) return

    const playSound = async () => {
      if (!audioRef.current || hasPlayedRef.current) return

      try {
        await audioRef.current.play()
        hasPlayedRef.current = true
      } catch (error) {
        console.log('Autoplay blocked, waiting for user interaction')
        
        const playOnInteraction = async () => {
          if (!audioRef.current || hasPlayedRef.current) return
          
          try {
            await audioRef.current.play()
            hasPlayedRef.current = true
            
            document.removeEventListener("click", playOnInteraction)
            document.removeEventListener("keydown", playOnInteraction)
            document.removeEventListener("touchstart", playOnInteraction)
          } catch (err) {
            console.log("Sound playback failed:", err)
          }
        }

        document.addEventListener("click", playOnInteraction, { once: true })
        document.addEventListener("keydown", playOnInteraction, { once: true })
        document.addEventListener("touchstart", playOnInteraction, { once: true })
      }
    }

    const timer = setTimeout(playSound, 500)
    return () => clearTimeout(timer)
  }, [isReady])

  return { isReady, hasPlayed: hasPlayedRef.current }
}