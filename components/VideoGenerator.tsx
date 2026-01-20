// Fix type error by safely casting operation error and adjusting poll interval
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Upload, Film, Play, Loader2, Video, AlertCircle, CheckCircle2 } from 'lucide-react';

const VideoGenerator: React.FC = () => {
  const [apiKeyReady, setApiKeyReady] = useState(false);
  const [prompt, setPrompt] = useState('Cinematic shot of a modern digital agency office, marketing team analyzing data on futuristic holographic screens, professional lighting, 4k, timelapse showing growth and strategy execution');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkApiKey();
  }, []);

  const checkApiKey = async () => {
    if (window.aistudio && await window.aistudio.hasSelectedApiKey()) {
      setApiKeyReady(true);
    }
  };

  const handleApiKeySelection = async () => {
    try {
      if (window.aistudio) {
        await window.aistudio.openSelectKey();
        setApiKeyReady(true);
      }
    } catch (e) {
      console.error(e);
      setError("Erro ao selecionar chave de API. Tente novamente.");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Remove data:image/jpeg;base64, prefix
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const generateVideo = async () => {
    if (!selectedImage) {
      setError("Por favor, faça o upload de uma imagem de referência.");
      return;
    }

    if (!apiKeyReady) {
      await handleApiKeySelection();
      if (!await window.aistudio.hasSelectedApiKey()) return;
    }

    setLoading(true);
    setError(null);
    setGeneratedVideoUrl(null);
    setLoadingMessage('Iniciando motor criativo Veo...');

    try {
      // Create a new instance right before use as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Image = await fileToBase64(selectedImage);
      
      setLoadingMessage('Enviando assets para a IA...');

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        image: {
          imageBytes: base64Image,
          mimeType: selectedImage.type,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p', // Supported by fast-generate-preview
          aspectRatio: aspectRatio
        }
      });

      setLoadingMessage('Renderizando vídeo (isso pode levar alguns minutos)...');
      
      // Polling loop
      while (!operation.done) {
        // Guidelines recommend 10s wait between polling calls
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      // Fix: cast operation.error to any to safely access message property (line 110)
      if (operation.error) {
        throw new Error((operation.error as any).message || "Falha na geração do vídeo.");
      }

      const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
      
      if (videoUri) {
        setLoadingMessage('Finalizando download...');
        // Append API key when fetching from the download link
        const response = await fetch(`${videoUri}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setGeneratedVideoUrl(url);
      } else {
        throw new Error("Nenhum vídeo retornado pela API.");
      }

    } catch (err: any) {
      console.error(err);
      if (err.message && err.message.includes("Requested entity was not found")) {
         setError("Sua chave de API parece inválida ou expirada. Por favor, selecione novamente.");
         setApiKeyReady(false);
      } else {
         setError(err.message || "Ocorreu um erro ao gerar o vídeo. Tente novamente.");
      }
    } finally {
      setLoading(false);
      setLoadingMessage('');
    }
  };

  return (
    <section id="studio" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-use-gold/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 text-use-gold border border-white/20">
            <Film className="w-4 h-4" />
            <span>Veo AI Studio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Dê Vida à Sua Marca
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Use nossa tecnologia de IA generativa para visualizar os bastidores, estratégias ou transformar o logo da sua empresa em um vídeo institucional dinâmico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Input Section */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
            
            {/* API Key Gate */}
            {!apiKeyReady && (
              <div className="mb-8 bg-blue-900/50 p-6 rounded-xl border border-blue-500/30 text-center">
                <AlertCircle className="w-10 h-10 text-use-gold mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Acesso ao Studio</h3>
                <p className="text-sm text-gray-300 mb-4">Para gerar vídeos de alta qualidade com Veo, é necessário conectar uma chave de API válida.</p>
                <button 
                  onClick={handleApiKeySelection}
                  className="bg-use-gold text-use-blue px-6 py-2 rounded-full font-bold hover:bg-white transition-colors"
                >
                  Conectar Chave API
                </button>
                <div className="mt-4 text-xs text-gray-400">
                   <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline hover:text-white">Saiba mais sobre cobrança</a>
                </div>
              </div>
            )}

            <div className={`space-y-6 transition-opacity ${!apiKeyReady ? 'opacity-50 pointer-events-none' : ''}`}>
              
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">1. Imagem de Referência (Obrigatório)</label>
                <div className="relative group cursor-pointer">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                    imagePreview ? 'border-use-gold bg-use-gold/10' : 'border-gray-600 hover:border-gray-400 bg-black/20'
                  }`}>
                    {imagePreview ? (
                      <div className="relative h-48 w-full">
                        <img src={imagePreview} alt="Preview" className="h-full w-full object-contain rounded-lg" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                          <span className="text-white font-bold flex items-center"><Upload className="w-4 h-4 mr-2"/> Trocar Imagem</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center py-6">
                        <Upload className="w-10 h-10 text-gray-400 mb-3" />
                        <span className="text-gray-300 font-medium">Clique ou arraste uma imagem</span>
                        <span className="text-xs text-gray-500 mt-1">JPG ou PNG (Max 5MB)</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Prompt Input */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">2. Descreva o Cenário</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full bg-black/30 border border-gray-600 rounded-lg p-4 text-white focus:border-use-gold focus:ring-1 focus:ring-use-gold outline-none transition-all h-32 resize-none"
                  placeholder="Descreva o movimento, iluminação e atmosfera..."
                />
              </div>

              {/* Aspect Ratio */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">3. Formato</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setAspectRatio('16:9')}
                    className={`flex items-center justify-center py-3 rounded-lg border transition-all ${
                      aspectRatio === '16:9' 
                      ? 'bg-use-gold text-use-blue border-use-gold font-bold shadow-lg' 
                      : 'bg-transparent text-gray-400 border-gray-600 hover:border-gray-400'
                    }`}
                  >
                    <div className="w-6 h-4 border-2 border-current rounded-sm mr-2"></div>
                    Horizontal (16:9)
                  </button>
                  <button
                    onClick={() => setAspectRatio('9:16')}
                    className={`flex items-center justify-center py-3 rounded-lg border transition-all ${
                      aspectRatio === '9:16' 
                      ? 'bg-use-gold text-use-blue border-use-gold font-bold shadow-lg' 
                      : 'bg-transparent text-gray-400 border-gray-600 hover:border-gray-400'
                    }`}
                  >
                    <div className="w-4 h-6 border-2 border-current rounded-sm mr-2"></div>
                    Vertical (9:16)
                  </button>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={generateVideo}
                disabled={loading || !selectedImage}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
                  loading 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-use-gold to-yellow-500 text-use-blue hover:scale-[1.02] shadow-xl hover:shadow-[0_0_25px_rgba(250,204,21,0.6)]'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    <Video className="w-5 h-5 mr-3" />
                    Gerar Animação
                  </>
                )}
              </button>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-200 p-4 rounded-lg text-sm flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

            </div>
          </div>

          {/* Preview Section */}
          <div className="flex flex-col h-full justify-center">
            <div className="bg-black/40 rounded-2xl border border-white/10 p-2 shadow-2xl min-h-[400px] flex items-center justify-center relative overflow-hidden group">
              
              {loading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
                   <div className="w-20 h-20 border-4 border-use-gold/30 border-t-use-gold rounded-full animate-spin mb-6"></div>
                   <p className="text-use-gold font-bold animate-pulse">{loadingMessage}</p>
                   <p className="text-gray-500 text-xs mt-2">Isso pode levar até 2 minutos.</p>
                </div>
              )}

              {generatedVideoUrl ? (
                <div className="w-full h-full relative">
                  <video 
                    src={generatedVideoUrl} 
                    controls 
                    autoPlay 
                    loop 
                    className="w-full h-full object-contain rounded-xl"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <a 
                      href={generatedVideoUrl} 
                      download="use-midias-veo.mp4"
                      className="bg-use-blue/80 hover:bg-use-blue text-white p-2 rounded-full backdrop-blur-md transition-colors flex items-center"
                      title="Download Video"
                    >
                      <Upload className="w-5 h-5 transform rotate-180" />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-white flex items-center">
                    <CheckCircle2 className="w-3 h-3 text-green-400 mr-2" />
                    Gerado com Veo
                  </div>
                </div>
              ) : (
                <div className="text-center p-8 opacity-40">
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Aguardando Geração</h3>
                  <p className="text-gray-400">Configure os parâmetros ao lado e veja a mágica acontecer aqui.</p>
                </div>
              )}
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                 <h4 className="text-use-gold font-bold mb-1">Passo 1</h4>
                 <p className="text-xs text-gray-400">Faça upload de uma imagem do seu site ou escritório.</p>
               </div>
               <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                 <h4 className="text-use-gold font-bold mb-1">Passo 2</h4>
                 <p className="text-xs text-gray-400">A IA cria movimentos realistas baseados na sua descrição.</p>
               </div>
               <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                 <h4 className="text-use-gold font-bold mb-1">Passo 3</h4>
                 <p className="text-xs text-gray-400">Baixe o vídeo e use nas suas redes sociais.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoGenerator;