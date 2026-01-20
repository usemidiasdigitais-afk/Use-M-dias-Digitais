import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Monitor, Loader2, Sparkles } from 'lucide-react';

const LogoDisplay: React.FC = () => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateLogo = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = "Professional high-end minimalist logo for 'Use Mídias Digitais' agency. Iconic emblem combining digital screen elements with subtle growth bars and a futuristic abstract lens. Premium navy blue and golden yellow color scheme. Clean, modern, vector style on white background.";
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          setLogoUrl(`data:image/png;base64,${base64Data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Erro ao gerar logo:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative group cursor-pointer" onClick={generateLogo}>
        <div className="bg-use-gold p-2 rounded-lg group-hover:bg-white transition-all duration-300 shadow-md flex items-center justify-center w-10 h-10 overflow-hidden relative">
          {loading ? (
            <Loader2 className="w-6 h-6 text-use-blue animate-spin" />
          ) : logoUrl ? (
            <img src={logoUrl} alt="Logo" className="w-full h-full object-contain animate-fade-in" />
          ) : (
            <Monitor className="w-6 h-6 text-use-blue" />
          )}
          
          {/* Glass glare effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-use-blue text-use-gold rounded-full p-0.5 shadow-sm">
            <Sparkles className="w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl tracking-tight leading-none text-white group-hover:text-use-gold transition-colors">
          USE
        </span>
        <span className="text-[10px] uppercase tracking-widest text-gray-200">
          Mídias Digitais
        </span>
      </div>
    </div>
  );
};

export default LogoDisplay;