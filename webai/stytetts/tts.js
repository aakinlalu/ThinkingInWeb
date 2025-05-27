import { KokoroTTS } from "kokoro-js";
import fetch, { Headers, Blob } from "node-fetch"; // Import Blob from node-fetch
global.Headers = Headers;
global.fetch = fetch;
global.Blob = Blob; // Add Blob to the global scope

console.log(global.Blob);

const mondel_id = "onnx-community/Kokoro-82M-ONNX";
const tts = await KokoroTTS.from_pretrained(mondel_id, {
    dtype: "q8",
});

const text = " Hello, this is a test of the Kokoro TTS model. I hope you enjoy it!";
const audio = await tts.generate(text, {
    voice: "af_bella",
});
audio.save("output.wav");