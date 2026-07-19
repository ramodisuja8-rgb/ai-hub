const AI_TOOLS = [
  {id:"chatgpt", name:"ChatGPT", category:"Chat AI", description:"Conversational AI assistant for questions, writing, and brainstorming.", url:"https://chat.openai.com", free:true, trending:true, isNew:false},
  {id:"claude", name:"Claude", category:"Chat AI", description:"AI assistant for conversation, analysis, and creative work.", url:"https://claude.ai", free:true, trending:true, isNew:false},
  {id:"gemini", name:"Gemini", category:"Chat AI", description:"Google's AI assistant for chat, research, and productivity.", url:"https://gemini.google.com", free:true, trending:false, isNew:false},
  {id:"perplexity", name:"Perplexity", category:"Search AI", description:"AI-powered answer engine with cited sources.", url:"https://www.perplexity.ai", free:true, trending:true, isNew:false},
  {id:"you", name:"You.com", category:"Search AI", description:"AI search engine with chat and multiple modes.", url:"https://you.com", free:true, trending:false, isNew:false},
  {id:"midjourney", name:"Midjourney", category:"Image AI", description:"Generate high-quality AI art from text prompts.", url:"https://www.midjourney.com", free:false, trending:true, isNew:false},
  {id:"leonardo", name:"Leonardo AI", category:"Image AI", description:"Free AI image generator for art and design assets.", url:"https://leonardo.ai", free:true, trending:false, isNew:false},
  {id:"stablediffusion", name:"Stable Diffusion Online", category:"Image AI", description:"Open image generation model, free web access.", url:"https://stablediffusionweb.com", free:true, trending:false, isNew:false},
  {id:"runway", name:"Runway", category:"Video AI", description:"AI video generation and editing tools.", url:"https://runwayml.com", free:true, trending:true, isNew:false},
  {id:"pika", name:"Pika", category:"Video AI", description:"Text and image to short AI video clips.", url:"https://pika.art", free:true, trending:false, isNew:true},
  {id:"capcut", name:"CapCut", category:"Video AI", description:"AI-assisted video editor for short-form content.", url:"https://www.capcut.com", free:true, trending:false, isNew:false},
  {id:"elevenlabs", name:"ElevenLabs", category:"Voice AI", description:"Realistic AI voice generation and cloning.", url:"https://elevenlabs.io", free:true, trending:true, isNew:false},
  {id:"murf", name:"Murf AI", category:"Voice AI", description:"AI voiceover generator for videos and presentations.", url:"https://murf.ai", free:true, trending:false, isNew:false},
  {id:"suno", name:"Suno", category:"Music AI", description:"Generate original songs from text prompts.", url:"https://suno.com", free:true, trending:true, isNew:true},
  {id:"udio", name:"Udio", category:"Music AI", description:"AI music generation with vocals and instrumentals.", url:"https://www.udio.com", free:true, trending:false, isNew:true},
  {id:"jasper", name:"Jasper", category:"Writing AI", description:"AI writing assistant for marketing and content.", url:"https://www.jasper.ai", free:false, trending:false, isNew:false},
  {id:"quillbot", name:"QuillBot", category:"Writing AI", description:"AI paraphrasing, grammar, and summarizing tool.", url:"https://quillbot.com", free:true, trending:false, isNew:false},
  {id:"copilot", name:"GitHub Copilot", category:"Coding AI", description:"AI pair programmer for code completion.", url:"https://github.com/features/copilot", free:false, trending:true, isNew:false},
  {id:"cursor", name:"Cursor", category:"Coding AI", description:"AI-first code editor built for pair programming.", url:"https://www.cursor.com", free:true, trending:true, isNew:false},
  {id:"replit", name:"Replit", category:"Coding AI", description:"AI-assisted online coding and app building.", url:"https://replit.com", free:true, trending:false, isNew:false},
  {id:"chatpdf", name:"ChatPDF", category:"PDF AI", description:"Chat with any PDF document to get quick answers.", url:"https://www.chatpdf.com", free:true, trending:false, isNew:false},
  {id:"pdfgpt", name:"PDF.ai", category:"PDF AI", description:"Summarize and query PDF files using AI.", url:"https://pdf.ai", free:true, trending:false, isNew:false},
  {id:"khanmigo", name:"Khanmigo", category:"Education AI", description:"AI tutor for personalized learning support.", url:"https://www.khanmigo.ai", free:false, trending:false, isNew:false},
  {id:"duolingo", name:"Duolingo Max", category:"Education AI", description:"AI-enhanced language learning practice.", url:"https://www.duolingo.com", free:true, trending:false, isNew:false},
  {id:"deepl", name:"DeepL", category:"Translation AI", description:"High-accuracy AI translation for text and documents.", url:"https://www.deepl.com", free:true, trending:true, isNew:false},
  {id:"googletranslate", name:"Google Translate", category:"Translation AI", description:"Free AI-powered translation across many languages.", url:"https://translate.google.com", free:true, trending:false, isNew:false},
  {id:"notionai", name:"Notion AI", category:"Productivity AI", description:"AI writing and organization inside your workspace.", url:"https://www.notion.so/product/ai", free:false, trending:false, isNew:false},
  {id:"otter", name:"Otter.ai", category:"Productivity AI", description:"AI meeting notes and transcription.", url:"https://otter.ai", free:true, trending:false, isNew:false}
];

const CATEGORIES = [
  {name:"Chat AI", icon:"💬"},
  {name:"Image AI", icon:"🖼️"},
  {name:"Video AI", icon:"🎬"},
  {name:"Voice AI", icon:"🎙️"},
  {name:"Music AI", icon:"🎵"},
  {name:"Writing AI", icon:"✍️"},
  {name:"Coding AI", icon:"💻"},
  {name:"PDF AI", icon:"📄"},
  {name:"Education AI", icon:"🎓"},
  {name:"Translation AI", icon:"🌐"},
  {name:"Productivity AI", icon:"⚡"},
  {name:"Search AI", icon:"🔎"}
];

function iconForCategory(name){
  const c = CATEGORIES.find(c => c.name === name);
  return c ? c.icon : "✨";
}
