## LLM INference task for web using MediaPipe

1. Download [Gemma 2B](https://www.kaggle.com/models/google/gemma/tfLite/gemma-2b-it-gpu-int4) (TensorFlow Lite 2b-it-gpu-int4 or 2b-it-gpu-int8) or convert an external LLM (Phi-2, Falcon, or StableLM) following the [guide](https://ai.google.dev/edge/mediapipe/solutions/genai/llm_inference/web_js#convert-model) (only gpu backend is currently supported), into the `textGeneration` folder.
2. In your `index.js` file, update modelFileName with your model file's name.
3. Run `python3 -m http.server 8000` under the `textGeneration` folder to host the three files (or `python -m SimpleHTTPServer 8000` for older python versions).
Open `localhost:8000` in Chrome. 