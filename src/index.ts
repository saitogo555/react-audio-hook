"use client"

import { useMemo } from "react"
import { AudioContext, AudioOptions } from "../types"

export const useAudio = (src: string, options?: AudioOptions): AudioContext => {
  const audio = useMemo(() => {
    if (typeof Audio !== 'undefined') {
      const audio = new Audio(src)
      audio.volume = options?.volume || 1
      audio.loop = options?.loop || false
      audio.playbackRate = options?.speed || 1
      return audio
    } 
    return
  }, [src, options])

  const play = () => {
    if (!audio) {
      return
    }
    audio.play()
  }

  const stop = () => {
    if (!audio) {
      return
    }
    audio.pause()
    audio.currentTime = 0
  }

  const pause = () => {
    if (!audio) {
      return
    }
    audio.pause()
  }

  return {
    play,
    stop,
    pause,
  }
}