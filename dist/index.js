"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAudio = void 0;
const react_1 = require("react");
const useAudio = (src, options) => {
    const audio = (0, react_1.useMemo)(() => {
        if (typeof Audio !== 'undefined') {
            const audio = new Audio(src);
            audio.volume = (options === null || options === void 0 ? void 0 : options.volume) || 1;
            audio.loop = (options === null || options === void 0 ? void 0 : options.loop) || false;
            return audio;
        }
        return;
    }, [src, options]);
    const play = () => {
        if (!audio) {
            return;
        }
        audio.play();
    };
    const stop = () => {
        if (!audio) {
            return;
        }
        audio.pause();
        audio.currentTime = 0;
    };
    const pause = () => {
        if (!audio) {
            return;
        }
        audio.pause();
    };
    return {
        play,
        stop,
        pause,
    };
};
exports.useAudio = useAudio;
//# sourceMappingURL=index.js.map