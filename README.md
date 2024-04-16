# react-audio-hook

This package is react hook for controlling audio easrly.

It's a very lightweight library.

## Installation

Package can be added using npm

```bash
npm i react-audio-hook
```

## Usage

Below sample is simplest program.

First, you need to import useAudio hook.

You can load audio by specifying the path of the audio file in argument of the hook.

Just import the method you want to use and run it.

However, due to browser limitations, the sound will not be executed until the user takes some action (e.g. onClick).

```tsx
"use client"

import { useAudio } from "react-audio-hook"

export default function Index() {
  const { play, stop, pause } = useAudio("/assets/audio/bgm.mp3")

  const handleClickPlay = () => {
    play()
  }
  
  const handleClickPause = () => {
    pause()
  }
  
  const handleClickStop = () => {
    stop()
  }
  
  return (
    <div>
      <button onClick={handleClickPlay}>Play</button>
      <button onClick={handleClickStop}>Stop</button>
      <button onClick={handleClickPause}>Pause</button>
    </div>
  )
}
```

## Documents

### useAudio: (src, options?) => AudioContext

This function is the basic function for controlling audio and provides all methods.

- ``src`` : string - audio file path. **(Required)**

- ``options`` : AudioOptions - audio options **(Optional)**

  - ``volume`` : number - range is 0 to 1.

  - ``loop`` : boolean - if true, audio is loop.

  - ``speed`` : number - playback speed.

---

### play() => void

Play the audio from current playback position.

---

### stop() => void

Stop the audio.

The playback position returns to the beginning.

---

### pause() => void

Pause the audio.

The playback position will be retained.

## License

[MIT License](https://opensource.org/license/mit)
