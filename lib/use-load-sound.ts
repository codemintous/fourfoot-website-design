"use client"

import { useEffect, useRef, useState } from "react"

// Generate a fun meme-style sound effect
function createMemeSoundDataUrl(): string {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const sampleRate = audioContext.sampleRate
  const duration = 0.8 // seconds
  const numSamples = sampleRate * duration
  
  // Create buffer
  const buffer = audioContext.createBuffer(1, numSamples, sampleRate)
  const channelData = buffer.getChannelData(0)
  
  // Generate a fun "boop" sound with multiple tones
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate
    
    // Main tone (descending pitch for "boop" effect)
    const freq1 = 800 * Math.exp(-t * 3)
    const tone1 = Math.sin(2 * Math.PI * freq1 * t)
    
    // Harmonic
    const freq2 = 1200 * Math.exp(-t * 4)
    const tone2 = Math.sin(2 * Math.PI * freq2 * t) * 0.3
    
    // Sub bass for richness
    const freq3 = 200 * Math.exp(-t * 2)
    const tone3 = Math.sin(2 * Math.PI * freq3 * t) * 0.4
    
    // Envelope (fade out)
    const envelope = Math.exp(-t * 3)
    
    channelData[i] = (tone1 + tone2 + tone3) * envelope * 0.3
  }
  
  // Convert to WAV
  const wav = audioBufferToWav(buffer)
  const blob = new Blob([wav], { type: 'audio/wav' })
  return URL.createObjectURL(blob)
}

// Convert AudioBuffer to WAV format
function audioBufferToWav(buffer: AudioBuffer): ArrayBuffer {
  const numChannels = buffer.numberOfChannels
  const sampleRate = buffer.sampleRate
  const format = 1 // PCM
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
  
  // Write audio data
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
    // Generate or use provided sound
    const url = soundUrl || createMemeSoundDataUrl()
    
    // Create audio element
    const audio = new Audio(url)
    audio.volume = volume
    audio.preload = "auto"
    audioRef.current = audio

    // Mark as ready when loaded
    audio.addEventListener("canplaythrough", () => {
      setIsReady(true)
    })

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
      // Clean up generated URL if we created it
      if (!soundUrl && url.startsWith('blob:')) {
        URL.revokeObjectURL(url)
      }
    }
  }, [soundUrl, volume])

  useEffect(() => {
    if (!isReady || hasPlayedRef.current) return

    const playSound = async () => {
      if (!audioRef.current || hasPlayedRef.current) return

      try {
        // Try to play immediately (works if autoplay is allowed)
        await audioRef.current.play()
        hasPlayedRef.current = true
      } catch (error) {
        // Autoplay blocked - play on first user interaction
        const playOnInteraction = async () => {
          if (!audioRef.current || hasPlayedRef.current) return
          
          try {
            await audioRef.current.play()
            hasPlayedRef.current = true
            
            // Remove all listeners after playing
            document.removeEventListener("click", playOnInteraction)
            document.removeEventListener("keydown", playOnInteraction)
            document.removeEventListener("touchstart", playOnInteraction)
          } catch (err) {
            console.log("Sound playback failed:", err)
          }
        }

        // Add listeners for first user interaction
        document.addEventListener("click", playOnInteraction, { once: true })
        document.addEventListener("keydown", playOnInteraction, { once: true })
        document.addEventListener("touchstart", playOnInteraction, { once: true })
      }
    }

    // Small delay to ensure page is loaded
    const timer = setTimeout(playSound, 500)

    return () => clearTimeout(timer)
  }, [isReady])

  return { isReady, hasPlayed: hasPlayedRef.current }
}

