export type AudioContext = {
  play: () => void,
  stop: () => void,
  pause: () => void,
}

export type AudioOptions = {
  volume?: number,
  loop?: boolean,
}