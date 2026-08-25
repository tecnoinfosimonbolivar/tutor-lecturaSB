import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Mic, 
  MicOff, 
  Paperclip, 
  BookOpen, 
  Award, 
  HelpCircle, 
  Check, 
  CheckCheck, 
  Sparkles, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  RefreshCw, 
  FileText, 
  Smile, 
  Info,
  Maximize2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
  GraduationCap,
  Clock,
  AlertCircle,
  Trash2,
  Radio
} from 'lucide-react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { CuadernoModal } from './components/CuadernoModal';
import { EvidenceModal } from './components/EvidenceModal';
import { AcademicResourcesModal } from './components/AcademicResourcesModal';
import { VoiceAccessibilityBar } from './components/VoiceAccessibilityBar';
import { QuestionDiagram } from './components/QuestionDiagram';
import { EscudoInstitucional, LogoTecnoInfo } from './components/Branding';
import { 
  GRADES_AVAILABLE, 
  getQuestionForGradeAndNumber, 
  getGradeQuestionsList 
} from './data/questionBank';
import { parseStudentMessage } from './utils/studentParser';
import { Question, ChatMessage, StudentProfile } from './types';

export default function App() {
  // Student & Grade state
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(() => {
    const saved = localStorage.getItem('simon_bolivar_profile');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        if (parsed.name) {
          parsed.name = parsed.name.toUpperCase().trim();
        }
        return parsed; 
      } catch (e) {}
    }
    return {
      name: '',
      grade: 11, // Default grade 11° Saber 11
      currentQuestionIndex: 0,
      solvedQuestionsCount: 0,
      blockSolvedCount: 0,
      completedQuestionIds: [],
      startedAt: new Date().toISOString()
    };
  });

  const [currentGrade, setCurrentGrade] = useState<number>(studentProfile.grade || 11);
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>(() => {
    return getQuestionForGradeAndNumber(studentProfile.grade || 11, 1);
  });

  // 15-Minute Study Timer state per question
  const [studySeconds, setStudySeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [activeCognitiveLevel, setActiveCognitiveLevel] = useState<number>(1); // 1 to 6

  // Timer tick effect (15 minutes = 900 seconds)
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setStudySeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, currentQuestion?.id]);

  // Reset timer when question changes
  useEffect(() => {
    setStudySeconds(0);
    setIsTimerRunning(true);
    setActiveCognitiveLevel(1);
  }, [currentQuestion?.id]);

  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return [
      {
        id: 'msg-welcome-1',
        sender: 'tutor',
        text: `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ, TOLIMA*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Bienvenido, estudiante Bolivariano! 👋 Hoy entrenaremos con gran entusiasmo y rigor pedagógico el área de **LECTURA / COMPRENSIÓN LECTORA Y LECTURA CRÍTICA** (Preparación Saber).

⏱️ *METODOLOGÍA DE ESTUDIO:* Dedicaremos **15 minutos de trabajo riguroso en tu cuaderno** por cada pregunta, siguiendo la **Ruta de Aprendizaje de 6 Niveles** (Recordar, Comprender, Aplicar, Analizar, Evaluar y Crear).

Para iniciar tu entrenamiento y cargar el cuadernillo correspondiente:
1️⃣ ¿Cuál es tu **Nombre completo**?
2️⃣ ¿En qué **Grado** o curso estás?
   *(Ejemplos válidos: **Sexto**, **6°**, **601**, **6.1**, **Séptimo**, **702**, **Décimo**, **1001**, **Once**, **11°**)*
3️⃣ ¿En qué **número de pregunta** (1 a 20) deseas empezar?
   *(Ejemplos: **Pregunta 4**, **Pregunta cuatro**, **Pregunta 20**, **Pregunta veinte**)*

💡 *Puedes escribir todo en un solo mensaje, por ejemplo:*
👉 *"Soy Rene del grado quinto pregunta 10"* o *"Harrison Valencia grado 701 pregunta 4"*`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'read'
      }
    ];
  });

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const [speechState, setSpeechState] = useState<'idle' | 'playing' | 'paused'>('idle');
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [currentReadingTitle, setCurrentReadingTitle] = useState<string>('');
  const [showVoiceBar, setShowVoiceBar] = useState<boolean>(false);
  const [speechHighlight, setSpeechHighlight] = useState<{
    messageId: string | null;
    charIndex: number;
    charLength: number;
    currentWord: string;
    cleanText: string;
  }>({
    messageId: null,
    charIndex: -1,
    charLength: 0,
    currentWord: '',
    cleanText: ''
  });
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [interimTranscript, setInterimTranscript] = useState('');
  const [voiceInputError, setVoiceInputError] = useState<string | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showQuestionDetails, setShowQuestionDetails] = useState(false);
  const [showDiagramPanel, setShowDiagramPanel] = useState(false);
  const [showCuadernoModal, setShowCuadernoModal] = useState(false);
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(!studentProfile.name);
  const [tempName, setTempName] = useState(studentProfile.name || '');
  const [tempGrade, setTempGrade] = useState<number>(studentProfile.grade || 11);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<any>(null);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const accumulatedSpeechRef = useRef<string>('');
  const isHoldModeRef = useRef<boolean>(false);
  const recordingStartTimestampRef = useRef<number>(0);
  const speechRateRef = useRef<number>(1.0);
  const lastSpeechParamsRef = useRef<{ text: string; title?: string; messageId?: string }>({ text: '' });

  // Cleanup speech recognition and timers on unmount
  useEffect(() => {
    return () => {
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      if (recordingIntervalRef.current) clearInterval(recordingIntervalRef.current);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
    };
  }, []);

  // Save profile changes
  useEffect(() => {
    localStorage.setItem('simon_bolivar_profile', JSON.stringify(studentProfile));
  }, [studentProfile]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Filter questions for current grade (Complete 20 questions)
  const gradeQuestions = getGradeQuestionsList(currentGrade);

  // Handle grade change
  const handleSelectGrade = (grade: number) => {
    setCurrentGrade(grade);
    setStudentProfile(prev => ({ ...prev, grade }));
    const firstQ = getQuestionForGradeAndNumber(grade, currentQuestion?.questionNumber || 1);
    if (firstQ) {
      setCurrentQuestion(firstQ);
      presentQuestionInChat(firstQ, grade);
    }
  };

  // Handle question change from sidebar or list
  const handleSelectQuestion = (q: Question) => {
    setCurrentQuestion(q);
    presentQuestionInChat(q, currentGrade);
  };

  // Present question formatted according to Socratic instructions
  const presentQuestionInChat = (q: Question, grade: number) => {
    const sName = (studentProfile.name || 'ESTUDIANTE').toUpperCase();
    const formattedText = `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ, TOLIMA*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Bienvenido(a), **${sName}**! He cargado tu cuadernillo de **LECTURA** para **Grado ${grade}°** (20 Preguntas Oficiales ICFES).

⏱️ *TIEMPO DE ESTUDIO RIGUROSO: 15 MINUTOS POR PREGUNTA*
Para garantizar un aprendizaje significativo y desarrollar tus competencias lectoras, debes completar las actividades en tu cuaderno de apuntes siguiendo los 6 pasos de la ruta de aprendizaje antes de avanzar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 **PREGUNTA #${q.questionNumber}: ${q.title.toUpperCase()}**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${q.contextText ? `
📜 **TEXTO DE LECTURA / CONTEXTO COMPLETO:**
${q.contextText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━` : ''}

📖 **ENUNCIADO / PREGUNTA:**
${q.statement}

🔘 **OPCIONES DE RESPUESTA (ICFES):**
**A.** ${q.options[0]?.text || ''}
**B.** ${q.options[1]?.text || ''}
**C.** ${q.options[2]?.text || ''}
**D.** ${q.options[3]?.text || ''}

📋 **FICHA PEDAGÓGICA (ICFES):**
• **Tipología / Componente:** ${q.component}
• **Competencia:** ${q.competency}
• **Evidencia evaluada:** ${q.evidence || q.affirmation}

📓 **GUÍA DE ESTUDIO EN TU CUADERNO (15 MINUTOS POR PREGUNTA):**
✍️ *Realiza en tu cuaderno de apuntes los 6 pasos de la ruta de aprendizaje:*
1. **Recordar (Nivel 1):** Registra el título, grado, tipología textual, personajes y datos explícitos del texto.
2. **Comprender (Nivel 2):** Resume la idea central con tus propias palabras e ilustra un mapa mental, esquema o dibujo explicativo.
3. **Aplicar (Nivel 3):** Extrae citas textuales y relaciona párrafos o fragmentos para fundamentar tu interpretación en el cuaderno.
4. **Analizar (Nivel 4):** Compara las opciones A, B, C y D; clasifica cada una y explica qué error o trampa contiene cada distractor.
5. **Evaluar (Nivel 5):** Argumenta y defiende por escrito con evidencias del texto por qué la opción elegida es la única respuesta válida.
6. **Crear (Nivel 6):** Redacta en tu cuaderno una reflexión crítica propia, un desenlace alternativo o un texto análogo contextualizado en Ibagué o el Tolima.

💬 **¿CÓMO DESEAS INTERACTUAR CON TU TUTOR SOCRÁTICO?**
1️⃣ Registrar tipología, datos y vocabulario (Nivel 1: Recordar)
2️⃣ Resumir e ilustrar la idea central (Nivel 2: Comprender)
3️⃣ Extraer citas y sustentar en tu cuaderno (Nivel 3: Aplicar)
4️⃣ Comparar y descartar distractores (Nivel 4: Analizar)
5️⃣ Argumentar y defender tu respuesta elegida (Nivel 5: Evaluar)
6️⃣ Redactar una reflexión crítica contextualizada (Nivel 6: Crear)
7️⃣ Solicitar una pista socrática orientadora

${sName ? sName + ', ' : ''}¿cuál de las 4 opciones (**A**, **B**, **C** o **D**) consideras correcta o qué actividad de tu cuaderno deseas revisar primero?`;

    const newMsg: ChatMessage = {
      id: `msg-q-${Date.now()}`,
      sender: 'tutor',
      text: formattedText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'read',
      questionRef: q.id
    };

    setMessages(prev => [...prev, newMsg]);

    if (speechEnabled) {
      speakText(
        `Pregunta número ${q.questionNumber}. ${q.statement}. Revisa las opciones A, B, C y D y completa tus 15 minutos de estudio en el cuaderno.`,
        `Pregunta #${q.questionNumber}`,
        newMsg.id
      );
    }
  };

  // Speech TTS Function & Full Accessibility Player with Kindle-style Real-time Highlight
  const speakText = (text: string, title?: string, messageId?: string, overrideRate?: number) => {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta síntesis de voz nativa.');
      return;
    }
    window.speechSynthesis.cancel();
    
    // Clean markdown characters and emojis for crystal clear Colombian Spanish pronunciation
    const cleanText = text
      .replace(/[*_~`#]/g, '')
      .replace(/1️⃣|2️⃣|3️⃣|4️⃣|5️⃣|6️⃣|7️⃣|📝|📌|✍️|🏛️|👋|💡|🔘|📋|📜|📖|💬|🦉|🇨🇴|📚|🎯|⚠️|👤|🏆|⏱️/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) return;

    lastSpeechParamsRef.current = { text: cleanText, title, messageId };
    const activeRate = overrideRate !== undefined ? overrideRate : speechRateRef.current;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-CO';
    utterance.rate = activeRate;
    utterance.pitch = 1.0;

    const targetMsgId = messageId || 'speech-active';

    utterance.onstart = () => {
      setSpeechState('playing');
      setShowVoiceBar(true);
      setCurrentReadingTitle(title || 'Leyendo intervención del Tutor Socrático');
      setSpeechHighlight({
        messageId: targetMsgId,
        charIndex: 0,
        charLength: 6,
        currentWord: '',
        cleanText
      });
    };

    // Kindle-style word boundary listener
    utterance.onboundary = (event: any) => {
      const charIdx = event.charIndex;
      let wordLen = event.charLength || 0;
      if (!wordLen) {
        const slice = cleanText.slice(charIdx);
        const nextSpace = slice.search(/\s/);
        wordLen = nextSpace > 0 ? nextSpace : slice.length;
      }
      const currentWord = cleanText.substring(charIdx, charIdx + wordLen).trim();
      
      setSpeechHighlight({
        messageId: targetMsgId,
        charIndex: charIdx,
        charLength: wordLen,
        currentWord,
        cleanText
      });
    };

    utterance.onpause = () => {
      setSpeechState('paused');
    };

    utterance.onresume = () => {
      setSpeechState('playing');
    };

    utterance.onend = () => {
      setSpeechState('idle');
      setSpeechHighlight({
        messageId: null,
        charIndex: -1,
        charLength: 0,
        currentWord: '',
        cleanText: ''
      });
    };

    utterance.onerror = () => {
      setSpeechState('idle');
      setSpeechHighlight({
        messageId: null,
        charIndex: -1,
        charLength: 0,
        currentWord: '',
        cleanText: ''
      });
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePauseSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.pause();
      setSpeechState('paused');
    }
  };

  const handleResumeSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.resume();
      setSpeechState('playing');
    }
  };

  const handleStopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeechState('idle');
      setSpeechHighlight({
        messageId: null,
        charIndex: -1,
        charLength: 0,
        currentWord: '',
        cleanText: ''
      });
    }
  };

  const handleChangeSpeechRate = (newRate: number) => {
    setSpeechRate(newRate);
    speechRateRef.current = newRate;
    // If speaking or paused, immediately re-speak with new speed so user feels the change instantly
    if ((speechState === 'playing' || speechState === 'paused') && lastSpeechParamsRef.current.text) {
      const { text, title, messageId } = lastSpeechParamsRef.current;
      speakText(text, title, messageId, newRate);
    }
  };

  const handlePlayCurrentQuestion = () => {
    if (!currentQuestion) return;
    const textToRead = `Pregunta número ${currentQuestion.questionNumber}. ${currentQuestion.title}. Enunciado: ${currentQuestion.statement}. Opciones de respuesta: Opción A: ${currentQuestion.options[0]?.text || ''}. Opción B: ${currentQuestion.options[1]?.text || ''}. Opción C: ${currentQuestion.options[2]?.text || ''}. Opción D: ${currentQuestion.options[3]?.text || ''}. Recuerda completar tus 15 minutos en el cuaderno.`;
    speakText(textToRead, `Pregunta #${currentQuestion.questionNumber}: ${currentQuestion.title}`, `question-${currentQuestion.id}`);
  };

  const handleToggleVoicePanel = () => {
    const nextEnabled = !speechEnabled;
    setSpeechEnabled(nextEnabled);
    setShowVoiceBar(nextEnabled);
    if (!nextEnabled) {
      handleStopSpeech();
    }
  };

  // Subtle audio confirmation tone (Pop/Chime)
  const playAudioFeedback = (type: 'start' | 'send') => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'start') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'send') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      }
    } catch (e) {}
  };

  // Clean stop for recording without sending
  const stopVoiceRecordingCleanly = () => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
    if (recordingIntervalRef.current) {
      clearInterval(recordingIntervalRef.current);
      recordingIntervalRef.current = null;
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        try { recognitionRef.current.abort(); } catch (err) {}
      }
    }
    setIsRecording(false);
    setInterimTranscript('');
    setRecordingDuration(0);
    isHoldModeRef.current = false;
  };

  // Discard recording
  const handleCancelVoiceRecording = () => {
    accumulatedSpeechRef.current = '';
    setInputMessage('');
    stopVoiceRecordingCleanly();
  };

  // Stop recording and send message immediately
  const stopAndSendVoiceMessage = (textToSend?: string) => {
    const finalText = (textToSend || accumulatedSpeechRef.current || inputMessage).trim();
    stopVoiceRecordingCleanly();
    if (finalText) {
      playAudioFeedback('send');
      handleSendMessage(finalText);
      accumulatedSpeechRef.current = '';
      setInputMessage('');
    }
  };

  // Start WhatsApp-style speech recognition
  const startVoiceRecognition = (isHold = false) => {
    setVoiceInputError(null);
    setInterimTranscript('');
    accumulatedSpeechRef.current = '';
    isHoldModeRef.current = isHold;
    recordingStartTimestampRef.current = Date.now();
    setRecordingDuration(0);

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceInputError('Tu navegador no soporta dictado por voz. Recomendamos Google Chrome o Microsoft Edge.');
      return;
    }

    // Stop tutor speech synthesis so mic doesn't pick up tutor audio
    handleStopSpeech();

    try {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch (e) {}
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'es-CO';
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      // Start elapsed timer
      if (recordingIntervalRef.current) clearInterval(recordingIntervalRef.current);
      recordingIntervalRef.current = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);

      recognition.onstart = () => {
        setIsRecording(true);
        setVoiceInputError(null);
        playAudioFeedback('start');
      };

      recognition.onresult = (event: any) => {
        let finalChunk = '';
        let interimChunk = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const trans = event.results[i][0]?.transcript || '';
          if (event.results[i].isFinal) {
            finalChunk += trans;
          } else {
            interimChunk += trans;
          }
        }

        if (finalChunk) {
          const updated = accumulatedSpeechRef.current 
            ? `${accumulatedSpeechRef.current} ${finalChunk.trim()}`
            : finalChunk.trim();
          accumulatedSpeechRef.current = updated;
          setInputMessage(updated);
          setInterimTranscript('');
        } else if (interimChunk) {
          setInterimTranscript(interimChunk);
        }

        // 10-Second rule: Do not auto-send early while the student is in their first 10 seconds of talking/thinking.
        if (!isHoldModeRef.current) {
          if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
          const elapsedMs = Date.now() - recordingStartTimestampRef.current;
          // Guarantee at least 10 seconds of recording time plus 3.5s silence buffer
          const delayUntilAutoSend = elapsedMs < 10000
            ? (10000 - elapsedMs) + 3500
            : 3500;

          silenceTimerRef.current = setTimeout(() => {
            const textToSubmit = (accumulatedSpeechRef.current || interimChunk).trim();
            if (textToSubmit) {
              stopAndSendVoiceMessage(textToSubmit);
            }
          }, delayUntilAutoSend);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error event:', event.error);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setVoiceInputError('Permiso de micrófono no habilitado. Por favor permite el acceso al micrófono en tu navegador.');
        } else if (event.error === 'network') {
          setVoiceInputError('Error de red al procesar el audio. Verifica tu conexión a internet.');
        } else if (event.error === 'no-speech') {
          // Normal silence, handled by silence timer
        } else if (event.error !== 'aborted') {
          setVoiceInputError(`Dictado finalizado (${event.error}).`);
        }
        stopVoiceRecordingCleanly();
      };

      recognition.onend = () => {
        if (isRecording) {
          const elapsedMs = Date.now() - recordingStartTimestampRef.current;
          const textToSubmit = accumulatedSpeechRef.current.trim();
          
          // If under 10 seconds, try to keep listening so student has their full 10s speaking window
          if (elapsedMs < 9500 && !isHoldModeRef.current) {
            try {
              recognition.start();
              return;
            } catch (e) {}
          }

          if (textToSubmit && !isHoldModeRef.current && elapsedMs >= 9500) {
            stopAndSendVoiceMessage(textToSubmit);
          } else {
            stopVoiceRecordingCleanly();
          }
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e: any) {
      console.error('Error starting speech recognition:', e);
      setVoiceInputError('No se pudo activar el micrófono. Verifica los permisos de tu dispositivo.');
      stopVoiceRecordingCleanly();
    }
  };

  // Toggle Voice Input (Tap Mode)
  const handleToggleVoiceInput = () => {
    if (isRecording) {
      stopAndSendVoiceMessage();
    } else {
      startVoiceRecognition(false);
    }
  };

  // Push-to-Talk Handlers (Hold Mode)
  const handleMicMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (isRecording) {
      stopAndSendVoiceMessage();
      return;
    }
    startVoiceRecognition(true);
  };

  const handleMicMouseUp = () => {
    if (isRecording && isHoldModeRef.current) {
      const elapsed = Date.now() - recordingStartTimestampRef.current;
      if (elapsed > 500) {
        // Held and spoken -> submit immediately after brief delay for final chunk
        setTimeout(() => {
          stopAndSendVoiceMessage();
        }, 300);
      } else {
        // Quick tap -> switch to tap mode with auto-send on silence
        isHoldModeRef.current = false;
      }
    }
  };

  // Reset student profile to test onboarding
  const handleResetProfile = () => {
    localStorage.removeItem('simon_bolivar_profile');
    setStudentProfile({
      name: '',
      grade: 11,
      currentQuestionIndex: 0,
      solvedQuestionsCount: 0,
      blockSolvedCount: 0,
      completedQuestionIds: [],
      startedAt: new Date().toISOString()
    });
    setTempName('');
    setTempGrade(11);
    setShowWelcomeModal(true);
  };

  // Send student message
  const handleSendMessage = async (textToSend?: string, attachedImage?: string) => {
    const messageText = (textToSend || inputMessage).trim();
    if (!messageText && !attachedImage) return;

    // Dedicated parser for student intent, name, grade, and question
    const parsed = parseStudentMessage(messageText, studentProfile);

    // 0. Handle Unsupported Grade (Grades outside 3°-11°, e.g. 1°, 2°, preescolar, 12°, etc.)
    if (parsed.isUnsupportedGrade) {
      const studentMsg: ChatMessage = {
        id: `msg-student-${Date.now()}`,
        sender: 'student',
        text: messageText,
        imageUrl: attachedImage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };

      const gradeDesc = parsed.unsupportedGradeText || 'el grado indicado';
      const tutorUnsupportedReply = `⚠️ *AVISO INSTITUCIONAL - ÁREA DE LECTURA*
🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ, TOLIMA*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

Estimado(a) estudiante, te informamos que en el área de **LECTURA / COMPRENSIÓN LECTORA** de la institución contamos únicamente con cuadernillos oficiales estructurados para los grados desde **3° (Tercero) hasta 11° (Undécimo)**.

🚫 *No existe material de estudio ni preguntas oficiales para ${gradeDesc}.*

Por favor, indícanos un grado oficial válido entre **3° y 11°** para cargar tu cuadernillo correspondiente:

1️⃣ ¿Cuál es tu **Nombre completo**?
2️⃣ ¿En qué **Grado** estás? *(3°, 4°, 5°, 6°, 7°, 8°, 9°, 10°, 11°)*
3️⃣ ¿En qué **número de pregunta (1 a 20)** deseas iniciar?

💡 *Ejemplo:* 👉 *"Soy Carlos del grado 8 pregunta 1"*`;

      const tutorMsg: ChatMessage = {
        id: `msg-tutor-${Date.now()}`,
        sender: 'tutor',
        text: tutorUnsupportedReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'read'
      };

      setMessages(prev => [...prev, studentMsg, tutorMsg]);
      setInputMessage('');
      if (speechEnabled) {
        speakText(
          `Aviso: En Lectura solamente contamos con cuadernillos oficiales desde grado tercero hasta undécimo. Por favor indica un grado entre tercero y undécimo.`,
          'Aviso de Grado',
          tutorMsg.id
        );
      }
      return;
    }

    let updatedName = (parsed.name || studentProfile.name || '').toUpperCase().trim();
    let updatedGrade = parsed.grade || currentGrade;

    if (parsed.grade) {
      updatedGrade = parsed.grade;
      setCurrentGrade(parsed.grade);
    }

    // Determine active question
    let activeQuestionToUse = currentQuestion;
    if (parsed.questionNumber) {
      const targetQNum = Math.min(20, Math.max(1, parsed.questionNumber));
      const targetQuestion = getQuestionForGradeAndNumber(updatedGrade, targetQNum);
      if (targetQuestion) {
        activeQuestionToUse = targetQuestion;
        setCurrentQuestion(targetQuestion);
      }
    } else if (parsed.grade) {
      const targetQNum = currentQuestion?.questionNumber || 1;
      const targetQuestion = getQuestionForGradeAndNumber(updatedGrade, targetQNum) || getQuestionForGradeAndNumber(updatedGrade, 1);
      if (targetQuestion) {
        activeQuestionToUse = targetQuestion;
        setCurrentQuestion(targetQuestion);
      }
    }

    // Save updated profile
    setStudentProfile(prev => ({
      ...prev,
      name: updatedName || (prev.name ? prev.name.toUpperCase().trim() : ''),
      grade: updatedGrade
    }));

    const studentMsg: ChatMessage = {
      id: `msg-student-${Date.now()}`,
      sender: 'student',
      text: messageText || (attachedImage ? '📎 [He adjuntado una hoja de mi cuaderno con mis operaciones y esquemas]' : ''),
      imageUrl: attachedImage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => [...prev, studentMsg]);
    setInputMessage('');
    setIsLoading(true);

    // Check if the student provided a choice or an answer
    const checkIsOptionAnswer = activeQuestionToUse && (
      messageText.includes(`Opción ${activeQuestionToUse.correctLetter}`) ||
      messageText.includes(`opción ${activeQuestionToUse.correctLetter.toLowerCase()}`) ||
      messageText.startsWith(`${activeQuestionToUse.correctOption}`) ||
      messageText.includes(`Opción ${activeQuestionToUse.correctOption}`) ||
      messageText.includes(`${activeQuestionToUse.correctLetter})`) ||
      messageText.trim().toUpperCase() === activeQuestionToUse.correctLetter ||
      messageText.toLowerCase().includes('elijo la opción') ||
      messageText.toLowerCase().includes('opción a') ||
      messageText.toLowerCase().includes('opción b') ||
      messageText.toLowerCase().includes('opción c') ||
      messageText.toLowerCase().includes('opción d')
    );

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          history: messages.slice(-8),
          studentProfile: {
            ...studentProfile,
            name: updatedName,
            grade: updatedGrade
          },
          currentQuestion: activeQuestionToUse,
          imageBase64: attachedImage
        })
      });

      const data = await res.json();
      const tutorReply = data.reply || 'Recibido, estudiante Bolivariano. Continúa con tu análisis en el cuaderno.';

      const tutorMsg: ChatMessage = {
        id: `msg-tutor-${Date.now()}`,
        sender: 'tutor',
        text: tutorReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'read'
      };

      setMessages(prev => [...prev, tutorMsg]);

      // If speech enabled
      if (speechEnabled) {
        speakText(tutorReply, 'Intervención del Tutor Socrático', tutorMsg.id);
      }

      // Check if 4-question block milestone completed
      if (tutorReply.includes('completando un bloque de 4 preguntas') || tutorReply.includes('colegiosonline.com')) {
        const newTotalSolved = studentProfile.solvedQuestionsCount + 1;
        const newCompletedIds = activeQuestionToUse && !studentProfile.completedQuestionIds.includes(activeQuestionToUse.id)
          ? [...studentProfile.completedQuestionIds, activeQuestionToUse.id]
          : studentProfile.completedQuestionIds;

        setStudentProfile(prev => ({
          ...prev,
          solvedQuestionsCount: newTotalSolved,
          blockSolvedCount: 4,
          completedQuestionIds: newCompletedIds
        }));
        
        setShowEvidenceModal(true);
      } else if (checkIsOptionAnswer && activeQuestionToUse) {
        if (!studentProfile.completedQuestionIds.includes(activeQuestionToUse.id)) {
          const newBlockCount = (studentProfile.blockSolvedCount + 1);
          const newTotal = studentProfile.solvedQuestionsCount + 1;
          const newCompleted = [...studentProfile.completedQuestionIds, activeQuestionToUse.id];
          
          setStudentProfile(prev => ({
            ...prev,
            solvedQuestionsCount: newTotal,
            blockSolvedCount: newBlockCount > 4 ? 1 : newBlockCount,
            completedQuestionIds: newCompleted
          }));

          if (newBlockCount === 4) {
            setShowEvidenceModal(true);
          }
        }
      }

    } catch (err) {
      console.error('Error sending message:', err);
      const errorMsg: ChatMessage = {
        id: `msg-err-${Date.now()}`,
        sender: 'system',
        text: '⚠️ Hubo un inconveniente al conectar con el servidor socrático. Por favor verifica tu conexión.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Quick Option selection (Pure Letters for ICFES)
  const handleQuickOptionClick = (optionLetter: string, optionText: string) => {
    const text = `Elijo la Opción ${optionLetter} (${optionText}) porque según el análisis y las evidencias textuales registradas en mi cuaderno...`;
    handleSendMessage(text);
  };

  // Handle Quick Socratic Hint or Pedagogical Action (Bloom Taxonomy 6 levels + Pista + Siguiente)
  const handleRequestPedagogicalAction = (
    actionType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'recordar' | 'comprender' | 'aplicar' | 'analizar' | 'evaluar' | 'crear' | 'pista' | 'siguiente'
  ) => {
    if (!currentQuestion) return;

    if (actionType === '1' || actionType === 'recordar') {
      setActiveCognitiveLevel(1);
      const promptText = `1️⃣ Tutor, ¿cuáles son los personajes, tipología textual y datos explícitos que debo registrar en mi cuaderno para Recordar (Nivel 1)?`;
      handleSendMessage(promptText);
    } else if (actionType === '2' || actionType === 'comprender') {
      setActiveCognitiveLevel(2);
      const promptText = `2️⃣ Tutor, ¿cómo debo resumir la idea central e ilustrar este texto con un esquema o mapa mental en mi cuaderno para Comprender (Nivel 2)?`;
      handleSendMessage(promptText);
    } else if (actionType === '3' || actionType === 'aplicar') {
      setActiveCognitiveLevel(3);
      const promptText = `3️⃣ Tutor, ¿cuáles citas y evidencias textuales debo extraer y registrar en mi cuaderno para Aplicar (Nivel 3)?`;
      handleSendMessage(promptText);
    } else if (actionType === '4' || actionType === 'analizar') {
      setActiveCognitiveLevel(4);
      const promptText = `4️⃣ Tutor, comparemos las 4 opciones (A, B, C y D) para registrar en mi cuaderno el descarte justificado de las trampas de lectura (Nivel 4: Analizar).`;
      handleSendMessage(promptText);
    } else if (actionType === '5' || actionType === 'evaluar') {
      setActiveCognitiveLevel(5);
      const promptText = `5️⃣ Tutor, ¿cómo defiendo y redacto en mi cuaderno la justificación crítica de por qué mi opción es la única válida (Nivel 5: Evaluar)?`;
      handleSendMessage(promptText);
    } else if (actionType === '6' || actionType === 'crear') {
      setActiveCognitiveLevel(6);
      const promptText = `6️⃣ Tutor, propónme una reflexión crítica o texto análogo contextualizado en Ibagué o Tolima para redactar en mi cuaderno (Nivel 6: Crear).`;
      handleSendMessage(promptText);
    } else if (actionType === '7' || actionType === 'pista') {
      const promptText = `7️⃣ Tutor, dame una pista socrática orientadora que me ayude a avanzar en el análisis de mi cuaderno.`;
      handleSendMessage(promptText);
    } else if (actionType === 'siguiente') {
      const nextQNum = (currentQuestion.questionNumber % 20) + 1;
      const nextQ = getQuestionForGradeAndNumber(currentGrade, nextQNum);
      if (nextQ) {
        setCurrentQuestion(nextQ);
        presentQuestionInChat(nextQ, currentGrade);
      }
    }
  };

  // Save student profile from modal
  const handleSaveProfile = () => {
    const nameToSave = (tempName.trim() || 'ESTUDIANTE BOLIVARIANO').toUpperCase();
    setStudentProfile(prev => ({
      ...prev,
      name: nameToSave,
      grade: tempGrade
    }));
    setCurrentGrade(tempGrade);
    setShowWelcomeModal(false);

    const firstQ = getQuestionForGradeAndNumber(tempGrade, 1);
    if (firstQ) {
      setCurrentQuestion(firstQ);
      presentQuestionInChat(firstQ, tempGrade);
    }
  };

  // Helper to parse bold markdown and highlight the currently spoken word (Kindle-style) with ZERO layout shift
  const renderTextWithKindleHighlight = (
    rawText: string,
    isMsgSpeaking: boolean,
    targetWord: string
  ) => {
    if (!isMsgSpeaking || !targetWord) {
      return parseBoldMarkdown(rawText);
    }

    const cleanTarget = targetWord
      .replace(/[.,;:!?()¿¡"'\-_/]/g, '')
      .trim()
      .toLowerCase();

    if (!cleanTarget) {
      return parseBoldMarkdown(rawText);
    }

    // Split text keeping bold markers **bold**
    const parts = rawText.split(/(\*\*?[^*]+?\*\*?|\s+)/g);
    let matchedWordFound = false;

    return parts.map((part, pIdx) => {
      if (!part) return null;

      const isBold = (part.startsWith('**') && part.endsWith('**')) || (part.startsWith('*') && part.endsWith('*'));
      const cleanContent = isBold ? part.replace(/^\*+|\*+$/g, '') : part;

      // Check words in this part
      const subWords = cleanContent.split(/([^\wáéíóúÁÉÍÓÚñÑ]+)/);
      const hasMatch = !matchedWordFound && subWords.some(w => w.toLowerCase().trim() === cleanTarget);

      if (hasMatch) {
        matchedWordFound = true;
        return (
          <span key={pIdx}>
            {subWords.map((sw, swIdx) => {
              const cleanSW = sw.toLowerCase().trim();
              if (cleanSW === cleanTarget) {
                return (
                  <mark
                    key={swIdx}
                    className="bg-amber-300 text-slate-950 font-bold px-0.5 py-0 rounded-xs inline transition-none"
                  >
                    {sw}
                  </mark>
                );
              }
              if (isBold) {
                return <strong key={swIdx} className="font-extrabold text-[#1a365d]">{sw}</strong>;
              }
              return <span key={swIdx}>{sw}</span>;
            })}
          </span>
        );
      }

      if (isBold) {
        return (
          <strong key={pIdx} className="font-extrabold text-[#1a365d]">
            {cleanContent}
          </strong>
        );
      }

      return <span key={pIdx}>{part}</span>;
    });
  };

  // Format markdown helper (bold, lists, options A-D, dividers, emojis) with Kindle highlighting support and strict overflow control
  const renderMessageContent = (text: string, messageId?: string) => {
    const lines = text.split('\n');
    const isMsgSpeaking = Boolean(
      messageId && 
      (speechHighlight.messageId === messageId || (speechHighlight.messageId === 'speech-active' && speechState !== 'idle')) && 
      speechState !== 'idle'
    );
    const targetWord = speechHighlight.currentWord;

    return (
      <div className="space-y-2 text-[14px] sm:text-[15px] leading-relaxed text-gray-900 break-words max-w-full overflow-hidden">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={idx} className="h-1" />;

          // Line separator ━━━━━━━━━
          if (/^[━─—_=*-]{4,}$/.test(trimmed)) {
            return <hr key={idx} className="border-t border-gray-200 my-2 max-w-full" />;
          }

          // Option lines: **A.** or **B.** or A. or B.
          const isOptionLine = /^\*?\*?([A-D])\.\*?\*?\s+(.*)/i.exec(trimmed);
          if (isOptionLine) {
            const letter = isOptionLine[1].toUpperCase();
            const content = isOptionLine[2];
            return (
              <div 
                key={idx}
                className="flex items-start gap-2.5 p-2 rounded-xl bg-blue-50/70 border border-blue-100 my-1 hover:bg-blue-50 transition-colors max-w-full break-words"
              >
                <span className="w-6 h-6 rounded-lg bg-[#1a365d] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  {letter}
                </span>
                <div className="text-gray-900 font-medium leading-snug flex-1 min-w-0 break-words">
                  {renderTextWithKindleHighlight(content, isMsgSpeaking, targetWord)}
                </div>
              </div>
            );
          }

          // Question header: 📌 **PREGUNTA...
          if (trimmed.startsWith('📌')) {
            return (
              <div key={idx} className="p-2.5 rounded-xl bg-[#1a365d] text-white font-extrabold text-xs sm:text-sm shadow-xs flex items-start gap-2 my-1.5 break-words max-w-full">
                <span className="shrink-0">📌</span>
                <span className="tracking-wide uppercase break-words min-w-0 flex-1 leading-snug">
                  {trimmed.replace(/^📌\s*/, '').replace(/\*\*/g, '')}
                </span>
              </div>
            );
          }

          // Section headers like 📜 **TEXTO DE LECTURA... or 📖 **ENUNCIADO:** or 📓 **GUÍA...
          if (/^(📜|📖|🔘|📋|📓|💬|⏱️|⚠️|💡|🚫|🏛️)\s*\*\*/.test(trimmed)) {
            const isReadingHeader = trimmed.startsWith('📜');
            return (
              <div 
                key={idx} 
                className={`text-xs sm:text-sm font-black pt-1.5 pb-1 border-b break-words max-w-full leading-snug ${
                  isReadingHeader 
                    ? 'text-amber-900 border-amber-200 bg-amber-50/90 px-2.5 py-1.5 rounded-lg my-1.5 shadow-2xs' 
                    : 'text-[#1a365d] border-blue-100/80'
                }`}
              >
                {renderTextWithKindleHighlight(trimmed, isMsgSpeaking, targetWord)}
              </div>
            );
          }

          // Numbered bullet items like 1️⃣, 2️⃣, 1., 2.
          if (/^([1-7]️⃣|\d+\.)\s+/.test(trimmed)) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1 my-0.5 leading-snug text-gray-800 break-words max-w-full">
                <span className="font-bold text-blue-900 shrink-0">
                  {trimmed.split(' ')[0]}
                </span>
                <div className="flex-1 min-w-0 break-words">
                  {renderTextWithKindleHighlight(trimmed.substring(trimmed.indexOf(' ') + 1), isMsgSpeaking, targetWord)}
                </div>
              </div>
            );
          }

          // Standard paragraph line
          return (
            <p key={idx} className="my-0.5 leading-relaxed break-words max-w-full">
              {renderTextWithKindleHighlight(line, isMsgSpeaking, targetWord)}
            </p>
          );
        })}
      </div>
    );
  };

  // Helper to parse bold markdown **text** or *text*
  const parseBoldMarkdown = (text: string) => {
    const parts = text.split(/(\*\*?[^*]+?\*\*?)/g);
    return parts.map((part, pIdx) => {
      if ((part.startsWith('**') && part.endsWith('**')) || (part.startsWith('*') && part.endsWith('*'))) {
        const clean = part.replace(/^\*+|\*+$/g, '');
        return (
          <strong key={pIdx} className="font-extrabold text-[#1a365d]">
            {clean}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#f0f2f5] font-sans text-[#1c1e21] select-none overflow-hidden">
      {/* 1. Header (Institutional & Status) */}
      <Header
        currentGrade={currentGrade}
        onSelectGrade={handleSelectGrade}
        studentName={studentProfile.name}
        onOpenCuaderno={() => setShowCuadernoModal(true)}
        onOpenEvidence={() => setShowEvidenceModal(true)}
        onOpenResources={() => setShowResourcesModal(true)}
        speechEnabled={speechEnabled}
        onToggleSpeech={handleToggleVoicePanel}
        onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        solvedCount={studentProfile.solvedQuestionsCount}
        onResetProfile={handleResetProfile}
      />

      {/* 2. Main High-Density Workspace Container */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Sidebar (Desktop + Drawer for Mobile) */}
        <Sidebar
          currentGrade={currentGrade}
          studentName={studentProfile.name}
          activeQuestion={currentQuestion}
          allGradeQuestions={gradeQuestions}
          onSelectQuestion={handleSelectQuestion}
          solvedCount={studentProfile.solvedQuestionsCount}
          blockSolvedCount={studentProfile.blockSolvedCount}
          completedIds={studentProfile.completedQuestionIds}
          onOpenEvidenceModal={() => setShowEvidenceModal(true)}
          onOpenCuaderno={() => setShowCuadernoModal(true)}
          className={`shrink-0 z-20 transition-all duration-300 md:relative absolute inset-y-0 left-0 ${
            mobileSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'
          }`}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />

        {/* Backdrop for Mobile Sidebar */}
        {mobileSidebarOpen && (
          <div
            onClick={() => setMobileSidebarOpen(false)}
            className="md:hidden fixed inset-0 bg-black/40 z-10"
          />
        )}

        {/* Center Panel: WhatsApp-Style Conversational Chat */}
        <main className="flex-1 flex flex-col min-w-0 bg-[#efeae2] relative overflow-hidden">
          {/* WhatsApp Texture Wallpaper Background */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231a365d' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />

          {/* Chat Subheader / Active Question Bar & 15-Minute Bloom Study Header */}
          <div className="bg-[#f0f2f5] border-b border-[#e2e8f0] px-3 py-2 flex flex-col gap-1.5 z-10 shrink-0 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative">
                  <EscudoInstitucional size={36} className="bg-white shadow-xs" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-xs md:text-sm font-bold text-gray-900 truncate">
                      Tutor Socrático Bolivariano
                    </h2>
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 border border-blue-200">
                      Grado {currentGrade}°
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 flex items-center gap-1 truncate">
                    <span className="text-green-600 font-bold">•</span>
                    {currentQuestion ? `Pregunta #${currentQuestion.questionNumber}: ${currentQuestion.title}` : 'Orientación Socrática Activa'}
                  </p>
                </div>
              </div>

              {/* Subheader Quick Actions & 15-min Timer Indicator */}
              <div className="flex items-center gap-1.5">
                {/* 15-Minute Study Timer Widget */}
                {currentQuestion && (
                  <div className="flex items-center gap-1.5 bg-white border border-blue-200 px-2.5 py-1 rounded-lg shadow-xs">
                    <Clock className={`w-3.5 h-3.5 ${studySeconds >= 900 ? 'text-emerald-600' : 'text-blue-600 animate-pulse'}`} />
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] font-extrabold text-blue-950 font-mono leading-none">
                        {String(Math.floor(studySeconds / 60)).padStart(2, '0')}:{String(studySeconds % 60).padStart(2, '0')} / 15:00
                      </span>
                      <span className="text-[8px] font-semibold text-gray-500 uppercase tracking-tight">
                        {studySeconds >= 900 ? 'Meta 15m cumplida' : 'Estudio Riguroso'}
                      </span>
                    </div>
                  </div>
                )}

                {currentQuestion && (
                  <button
                    onClick={() => setShowDiagramPanel(!showDiagramPanel)}
                    className={`flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-lg border shadow-xs transition-colors ${
                      showDiagramPanel
                        ? 'bg-amber-100 border-amber-300 text-amber-900'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    title="Ver figura, tabla o gráfico interactivo de la pregunta"
                  >
                    <Layers className="w-3.5 h-3.5 text-blue-700" />
                    <span className="hidden sm:inline">Figura</span>
                    {showDiagramPanel ? <ChevronUp className="w-3 h-3 ml-0.5" /> : <ChevronDown className="w-3 h-3 ml-0.5" />}
                  </button>
                )}

                {currentQuestion && (
                  <button
                    onClick={() => setShowQuestionDetails(!showQuestionDetails)}
                    className="flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-xs transition-colors"
                    title="Ver detalles de la pregunta y competencias"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-700" />
                    <span className="hidden sm:inline">Ficha</span>
                    {showQuestionDetails ? <ChevronUp className="w-3 h-3 ml-0.5" /> : <ChevronDown className="w-3 h-3 ml-0.5" />}
                  </button>
                )}

                {currentQuestion && (
                  <button
                    onClick={() => setShowResourcesModal(true)}
                    className="flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 hover:bg-amber-100 shadow-xs transition-colors"
                    title="Ver cápsulas conceptuales y fuentes académicas confiables"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
                    <span className="hidden sm:inline">Recursos</span>
                  </button>
                )}

                {/* Voice / Audio trigger in subheader */}
                <button
                  onClick={handleToggleVoicePanel}
                  className={`flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-lg border shadow-xs transition-colors ${
                    showVoiceBar || speechEnabled
                      ? 'bg-amber-500 text-slate-950 border-amber-400'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  title="Abrir controles de audio, síntesis de voz y lectura guiada"
                >
                  <Volume2 className="w-3.5 h-3.5 text-blue-700" />
                  <span className="hidden sm:inline">Voz</span>
                </button>

                <button
                  onClick={() => setShowCuadernoModal(true)}
                  className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#1a365d] text-white hover:bg-blue-900 shadow-xs transition-colors"
                  title="Abrir cuaderno para escribir u operar"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-200" />
                  <span className="hidden sm:inline">Cuaderno</span>
                </button>
              </div>
            </div>

            {/* 6-Level Progress & Navigation Bar */}
            {currentQuestion && (
              <div className="flex items-center gap-1 overflow-x-auto scrollbar-none pt-0.5 border-t border-gray-200/70">
                <span className="text-[9px] font-extrabold text-gray-500 uppercase tracking-wider shrink-0 mr-0.5">
                  Ruta de Aprendizaje (15m):
                </span>
                {[
                  { level: 1, label: '1. Recordar', action: 'recordar' as const, tip: 'Tipología, datos y vocabulario en cuaderno' },
                  { level: 2, label: '2. Comprender', action: 'comprender' as const, tip: 'Resumir e ilustrar mapa mental' },
                  { level: 3, label: '3. Aplicar', action: 'aplicar' as const, tip: 'Extraer citas y sustentar en cuaderno' },
                  { level: 4, label: '4. Analizar', action: 'analizar' as const, tip: 'Descartar trampas de lectura A, B, C, D' },
                  { level: 5, label: '5. Evaluar', action: 'evaluar' as const, tip: 'Defender y argumentar respuesta crítica' },
                  { level: 6, label: '6. Crear', action: 'crear' as const, tip: 'Redactar reflexión en contexto' },
                ].map((b) => (
                  <button
                    key={b.level}
                    onClick={() => handleRequestPedagogicalAction(b.action)}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 transition-all active:scale-95 border flex items-center gap-1 ${
                      activeCognitiveLevel === b.level
                        ? 'bg-blue-700 text-white border-blue-800 shadow-xs'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-900'
                    }`}
                    title={b.tip}
                  >
                    <span>{b.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Voice & Speech Accessibility Control Bar (Matches Tutor Socrático de Matemáticas) */}
          {showVoiceBar && (
            <VoiceAccessibilityBar
              speechEnabled={speechEnabled}
              onToggleSpeech={handleToggleVoicePanel}
              speechState={speechState}
              onPlay={handlePlayCurrentQuestion}
              onPause={handlePauseSpeech}
              onResume={handleResumeSpeech}
              onStop={handleStopSpeech}
              speechRate={speechRate}
              onChangeRate={handleChangeSpeechRate}
              currentReadingTitle={currentReadingTitle}
              onClose={() => {
                setShowVoiceBar(false);
                handleStopSpeech();
              }}
            />
          )}

          {/* Optional Collapsible Technical Badge for Active Question */}
          {showQuestionDetails && currentQuestion && (
            <div className="bg-blue-50/95 border-b border-blue-200/80 px-4 py-2 text-xs flex items-center justify-between z-10 shrink-0 gap-2 flex-wrap text-blue-950 backdrop-blur-xs">
              <div className="flex items-center gap-3 text-[11px] flex-wrap">
                <span className="font-bold text-[#1a365d] flex items-center gap-1">
                  <strong>Competencia:</strong> {currentQuestion.competency}
                </span>
                <span className="text-blue-800">
                  <strong>Componente:</strong> {currentQuestion.component}
                </span>
                <span className="text-blue-700 hidden lg:inline">
                  <strong>Evidencia:</strong> {currentQuestion.evidence}
                </span>
              </div>
              <span className="text-[10px] font-semibold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                ICFES Saber 2026
              </span>
            </div>
          )}

          {/* Chat Messages Stream */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-3 md:p-5 space-y-3.5 z-0 scrollbar-thin"
          >
            {messages.map((msg) => {
              const isTutor = msg.sender === 'tutor';
              const isStudent = msg.sender === 'student';
              const isSystem = msg.sender === 'system';

              if (isSystem) {
                return (
                  <div key={msg.id} className="flex justify-center my-2">
                    <div className="bg-amber-100 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-medium shadow-xs max-w-md text-center">
                      {msg.text}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${isStudent ? 'justify-end' : 'justify-start'}`}
                >
                  {isTutor && (
                    <div className="w-7 h-7 rounded-full bg-[#1a365d] text-white flex items-center justify-center shrink-0 shadow-xs mb-1">
                      <span className="text-[10px] font-black">SB</span>
                    </div>
                  )}

                  <div
                    className={`max-w-[94%] sm:max-w-[85%] md:max-w-[78%] rounded-2xl p-3.5 sm:p-4 shadow-sm relative text-[#1c1e21] transition-all ${
                      isStudent
                        ? 'bg-[#d9fdd3] rounded-br-xs border border-green-300/80 shadow-xs'
                        : 'bg-white rounded-bl-xs border border-gray-200/90 shadow-xs'
                    } ${
                      speechHighlight.messageId === msg.id && speechState !== 'idle'
                        ? 'ring-2 ring-amber-400 shadow-md bg-amber-50/20'
                        : ''
                    }`}
                  >
                    {/* Tutor Header Badge */}
                    {isTutor && (
                      <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-gray-100 text-[10px]">
                        <span className="font-extrabold text-[#1a365d] uppercase tracking-wider flex items-center gap-1">
                          🏛️ Tutor Socrático
                        </span>
                        <span className="text-gray-400 font-medium">I.E. Simón Bolívar</span>
                      </div>
                    )}

                    {/* Image Attachment (from Cuaderno) */}
                    {msg.imageUrl && (
                      <div className="mb-2 rounded-lg overflow-hidden border border-gray-300 bg-white p-1 shadow-xs">
                        <img 
                          src={msg.imageUrl} 
                          alt="Apuntes del Cuaderno" 
                          className="max-h-60 w-full object-contain rounded"
                        />
                        <div className="text-[10px] text-gray-500 font-medium text-center mt-1">
                          📓 Hoja de apuntes del estudiante
                        </div>
                      </div>
                    )}

                    {/* Message Text with Kindle-style highlight (Question Statement, Options, Ficha Pedagógica) */}
                    {renderMessageContent(msg.text, msg.id)}

                    {/* Módulo Integrado de Ayudas del Tutor Socrático (Esquema Visual, Recursos, Guía Cuaderno y Pistas) */}
                    {isTutor && currentQuestion && (msg.text.includes('PREGUNTA #') || msg.text.includes('ENUNCIADO:') || msg.text.includes('FICHA PEDAGÓGICA')) && (
                      <div className="mt-3 pt-3 border-t-2 border-blue-200/90 bg-slate-50/95 rounded-xl p-2.5 sm:p-3 space-y-2.5 shadow-2xs border border-blue-100 max-w-full overflow-hidden">
                        <div className="flex items-center justify-between gap-1 flex-wrap">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-sm">🦉</span>
                            <h4 className="text-xs font-black text-[#1a365d] uppercase tracking-wide truncate">
                              Módulo de Ayudas del Tutor Socrático
                            </h4>
                          </div>
                          <span className="text-[10px] font-bold text-blue-900 bg-blue-100/90 px-2 py-0.5 rounded-full border border-blue-200">
                            Paso a Paso
                          </span>
                        </div>

                        {/* Botones de Acción de Ayuda Rápida */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-0.5">
                          <button
                            onClick={() => setShowDiagramPanel(prev => !prev)}
                            className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold shadow-2xs transition-all active:scale-95 ${
                              showDiagramPanel
                                ? 'bg-amber-100 border-amber-300 text-amber-900'
                                : 'bg-white border-blue-300 hover:bg-blue-50 text-blue-900'
                            }`}
                          >
                            <Layers className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                            <span>{showDiagramPanel ? 'Ocultar Esquema' : 'Ver Esquema Visual'}</span>
                          </button>

                          <button
                            onClick={() => setShowResourcesModal(true)}
                            className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 border border-amber-300 hover:bg-amber-100 text-amber-900 text-xs font-bold shadow-2xs transition-all active:scale-95"
                          >
                            <GraduationCap className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                            <span>Recursos y Cápsula</span>
                          </button>

                          <button
                            onClick={() => setShowCuadernoModal(true)}
                            className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1a365d] hover:bg-blue-900 text-white text-xs font-bold shadow-2xs transition-all active:scale-95"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-blue-200 shrink-0" />
                            <span>Pasar al Cuaderno</span>
                          </button>
                        </div>

                        {/* Esquema Visual / Figura Integrado (Visible cuando está activo o cuando la pregunta tiene esquema) */}
                        {showDiagramPanel && (
                          <div className="animate-in fade-in duration-200">
                            <QuestionDiagram 
                              question={currentQuestion} 
                              onOpenCuaderno={() => setShowCuadernoModal(true)} 
                            />
                          </div>
                        )}

                        {/* Explicaciones y Pistas Socráticas Paso a Paso (Ruta Cognitiva Bloom) */}
                        <div className="bg-white rounded-lg p-2 border border-gray-200/90">
                          <div className="text-[10px] font-extrabold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                            <span>💡 Pistas y Explicaciones Socráticas:</span>
                            <span className="text-[9px] text-blue-700 font-semibold">15 min en Cuaderno</span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                            {[
                              { level: 1, label: '1. Recordar', action: 'recordar' as const, emoji: '📝' },
                              { level: 2, label: '2. Comprender', action: 'comprender' as const, emoji: '🗺️' },
                              { level: 3, label: '3. Aplicar', action: 'aplicar' as const, emoji: '🔍' },
                              { level: 4, label: '4. Analizar', action: 'analizar' as const, emoji: '⚖️' },
                              { level: 5, label: '5. Evaluar', action: 'evaluar' as const, emoji: '🎯' },
                              { level: 6, label: '6. Crear', action: 'crear' as const, emoji: '✍️' },
                            ].map((step) => (
                              <button
                                key={step.level}
                                onClick={() => handleRequestPedagogicalAction(step.action)}
                                className="flex items-center gap-1 px-1.5 py-1 rounded bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-[10px] font-bold text-slate-800 transition-colors text-left truncate"
                                title={`Pedir orientación socrática para el nivel ${step.level}`}
                              >
                                <span>{step.emoji}</span>
                                <span className="truncate">{step.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Message Footer (Timestamp & Status & Audio TTS button) */}
                    <div className="flex items-center justify-between gap-1 mt-1.5 pt-1 border-t border-gray-100/80 text-[10px] text-gray-500">
                      {isTutor ? (
                        <button
                          onClick={() => speakText(msg.text, 'Mensaje del Tutor Socrático', msg.id)}
                          className={`flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded transition-colors ${
                            speechHighlight.messageId === msg.id && speechState !== 'idle'
                              ? 'bg-amber-200 text-amber-950 font-bold'
                              : 'text-blue-700 hover:text-blue-900 hover:bg-blue-50'
                          }`}
                          title="Escuchar este mensaje en voz alta con resaltado de lectura"
                        >
                          <Volume2 className="w-3 h-3 text-blue-600" />
                          <span>{speechHighlight.messageId === msg.id && speechState === 'playing' ? 'Leyendo...' : 'Escuchar'}</span>
                        </button>
                      ) : <span />}
                      <div className="flex items-center gap-1">
                        <span>{msg.timestamp}</span>
                        {isStudent && (
                          <CheckCheck className="w-3.5 h-3.5 text-blue-500 inline ml-0.5" />
                        )}
                      </div>
                    </div>
                  </div>

                  {isStudent && (
                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs text-xs font-bold mb-1">
                      {studentProfile.name ? studentProfile.name.charAt(0).toUpperCase() : 'E'}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading Indicator (WhatsApp style typing dots) */}
            {isLoading && (
              <div className="flex items-end gap-2 justify-start">
                <div className="w-7 h-7 rounded-full bg-[#1a365d] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="text-[10px] font-black">SB</span>
                </div>
                <div className="bg-white rounded-2xl rounded-bl-xs p-3 shadow-sm border border-gray-200 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">El Tutor Socrático está respondiendo...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Option & Pedagogical Action Chips (Pure ICFES Letters + Numbered Socratic Menu) */}
          {currentQuestion && (
            <div className="bg-[#f0f2f5] px-3 py-2 border-t border-gray-200/80 shrink-0 z-10 flex flex-col gap-1.5">
              {/* Row 1: ICFES Answer Options (Strictly Letters A, B, C, D) */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                <span className="text-[10px] font-extrabold text-blue-900 uppercase tracking-tight shrink-0 mr-1 flex items-center gap-1">
                  🔘 Opciones ICFES:
                </span>
                {currentQuestion.options.map((opt) => (
                  <button
                    key={opt.letter}
                    onClick={() => handleQuickOptionClick(opt.letter, opt.text)}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-white hover:bg-blue-50 hover:border-blue-400 border border-gray-300 text-gray-900 shrink-0 shadow-xs transition-all flex items-center gap-1.5 active:scale-95 group"
                    title={`Seleccionar Opción ${opt.letter}: ${opt.text}`}
                  >
                    <span className="w-4 h-4 rounded-full bg-blue-700 text-white font-bold text-[10px] flex items-center justify-center group-hover:bg-blue-800">
                      {opt.letter}
                    </span>
                    <span className="truncate max-w-[140px] text-gray-800">{opt.text}</span>
                  </button>
                ))}
              </div>

              {/* Row 2: Numbered Socratic Menu for Chat & Iteration */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-0.5 border-t border-gray-200/60">
                <span className="text-[10px] font-extrabold text-gray-600 uppercase tracking-tight shrink-0 mr-1 flex items-center gap-1">
                  💬 Diálogo:
                </span>

                <button
                  onClick={() => handleRequestPedagogicalAction('recordar')}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-white hover:bg-blue-50 border border-gray-300 text-gray-800 shrink-0 transition-colors flex items-center gap-1 shadow-xs"
                  title="1️⃣ Registrar datos y conceptos en cuaderno (Recordar)"
                >
                  <span className="font-bold text-blue-700">1️⃣</span>
                  <span>Recordar</span>
                </button>

                <button
                  onClick={() => handleRequestPedagogicalAction('comprender')}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-white hover:bg-blue-50 border border-gray-300 text-gray-800 shrink-0 transition-colors flex items-center gap-1 shadow-xs"
                  title="2️⃣ Ilustrar y explicar el problema (Comprender)"
                >
                  <span className="font-bold text-blue-700">2️⃣</span>
                  <span>Comprender</span>
                </button>

                <button
                  onClick={() => handleRequestPedagogicalAction('aplicar')}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-white hover:bg-blue-50 border border-gray-300 text-gray-800 shrink-0 transition-colors flex items-center gap-1 shadow-xs"
                  title="3️⃣ Extraer citas y sustentar en tu cuaderno (Aplicar)"
                >
                  <span className="font-bold text-blue-700">3️⃣</span>
                  <span>Aplicar / Citas</span>
                </button>

                <button
                  onClick={() => handleRequestPedagogicalAction('analizar')}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-white hover:bg-blue-50 border border-gray-300 text-gray-800 shrink-0 transition-colors flex items-center gap-1 shadow-xs"
                  title="4️⃣ Analizar y justificar el descarte de distractores (Analizar)"
                >
                  <span className="font-bold text-blue-700">4️⃣</span>
                  <span>Analizar / Descarte</span>
                </button>

                <button
                  onClick={() => handleRequestPedagogicalAction('evaluar')}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-white hover:bg-blue-50 border border-gray-300 text-gray-800 shrink-0 transition-colors flex items-center gap-1 shadow-xs"
                  title="5️⃣ Argumentar y defender respuesta elegida (Evaluar)"
                >
                  <span className="font-bold text-blue-700">5️⃣</span>
                  <span>Evaluar</span>
                </button>

                <button
                  onClick={() => handleRequestPedagogicalAction('crear')}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-white hover:bg-blue-50 border border-gray-300 text-gray-800 shrink-0 transition-colors flex items-center gap-1 shadow-xs"
                  title="6️⃣ Crear reflexión crítica en contexto de Ibagué / Tolima (Crear)"
                >
                  <span className="font-bold text-blue-700">6️⃣</span>
                  <span>Crear (Reflexión)</span>
                </button>

                <button
                  onClick={() => handleRequestPedagogicalAction('pista')}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 shrink-0 transition-colors flex items-center gap-1 shadow-xs"
                  title="7️⃣ Solicitar pista socrática orientadora"
                >
                  <span className="font-bold text-amber-700">7️⃣</span>
                  <span>Pista</span>
                </button>

                <div className="h-4 w-px bg-gray-300 shrink-0 mx-0.5"></div>

                <button
                  onClick={() => handleRequestPedagogicalAction('siguiente')}
                  className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#1a365d] hover:bg-blue-900 text-white shrink-0 transition-colors flex items-center gap-1 shadow-xs"
                  title="Pasar a la siguiente pregunta del cuadernillo"
                >
                  <span>➡️ Siguiente</span>
                </button>
              </div>
            </div>
          )}

          {/* Bottom Chat Input Bar */}
          <footer className="bg-[#f0f2f5] p-2 md:p-3 border-t border-gray-300 z-10 shrink-0">
            {/* Voice Input Error Notification */}
            {voiceInputError && (
              <div className="flex items-center justify-between gap-2 px-3 py-1.5 mb-2 bg-amber-50 border border-amber-300 rounded-xl text-amber-900 text-xs shadow-xs animate-in fade-in max-w-5xl mx-auto">
                <div className="flex items-center gap-1.5 min-w-0">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="truncate">{voiceInputError}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setVoiceInputError(null)}
                  className="text-amber-800 hover:text-amber-950 font-black text-xs px-1.5 py-0.5 rounded hover:bg-amber-100 transition-colors"
                  title="Cerrar aviso"
                >
                  ✕
                </button>
              </div>
            )}

            {isRecording ? (
              /* WhatsApp-Style Active Audio Recording Dock */
              <div className="max-w-5xl mx-auto bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border-2 border-emerald-500 rounded-2xl p-2 sm:p-2.5 shadow-md flex items-center justify-between gap-2 animate-in fade-in zoom-in-95">
                {/* Left: Recording Red Dot & Live Timer */}
                <div className="flex items-center gap-2 shrink-0 bg-red-100 text-red-800 px-2.5 py-1.5 rounded-xl border border-red-300 font-mono font-black text-xs shadow-xs">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                  </span>
                  <span>
                    {Math.floor(recordingDuration / 60)}:{(recordingDuration % 60).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Center: Live Wave Bars & Real-time Transcript */}
                <div className="flex-1 min-w-0 px-2 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <div className="flex items-center gap-0.5 h-3 shrink-0">
                      <span className="w-0.5 h-3 bg-emerald-600 rounded-full animate-pulse"></span>
                      <span className="w-0.5 h-2 bg-emerald-500 rounded-full animate-pulse delay-75"></span>
                      <span className="w-0.5 h-3.5 bg-emerald-600 rounded-full animate-pulse delay-150"></span>
                      <span className="w-0.5 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    </div>
                    <span className="text-[11px] font-black text-emerald-800 shrink-0">
                      Grabando tu voz...
                    </span>
                    {recordingDuration < 10 ? (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                        Habla con calma (mínimo 10s para responder)
                      </span>
                    ) : (
                      <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">
                        ✓ Listo para auto-envío al hacer silencio
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-900 font-bold truncate italic mt-0.5">
                    {interimTranscript || accumulatedSpeechRef.current || inputMessage || 'Habla ahora con tranquilidad...'}
                  </p>
                </div>

                {/* Right: Discard (Trash) & Send Instant Button */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleCancelVoiceRecording}
                    className="p-2 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-xl transition-colors flex items-center gap-1 text-xs font-bold"
                    title="Cancelar y descartar nota de voz"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Descartar</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => stopAndSendVoiceMessage()}
                    className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-xl font-black text-xs shadow-md transition-transform active:scale-95 border border-emerald-500"
                    title="Enviar nota de voz inmediatamente"
                  >
                    <Send className="w-3.5 h-3.5 fill-current" />
                    <span>Enviar</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Standard WhatsApp-Style Form with Big Friendly Mic */
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-1.5 sm:gap-2 max-w-5xl mx-auto"
                >
                  {/* Cuaderno Drawing shortcut */}
                  <button
                    type="button"
                    onClick={() => setShowCuadernoModal(true)}
                    className="p-2 text-gray-600 hover:text-[#1a365d] hover:bg-gray-200 rounded-full transition-colors shrink-0"
                    title="Abrir cuaderno digital de esquemas y apuntes"
                  >
                    <BookOpen className="w-5 h-5" />
                  </button>

                  {/* Text Input */}
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Escribe un mensaje o usa el micrófono verde..."
                      className="w-full bg-white text-gray-900 placeholder-gray-500 text-xs sm:text-sm rounded-2xl px-4 py-2.5 outline-none border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-xs"
                    />
                  </div>

                  {/* WhatsApp-Style Push-to-Talk & Auto-Send Mic */}
                  <button
                    type="button"
                    onClick={handleToggleVoiceInput}
                    onMouseDown={handleMicMouseDown}
                    onMouseUp={handleMicMouseUp}
                    onTouchStart={handleMicMouseDown}
                    onTouchEnd={handleMicMouseUp}
                    className="p-2.5 sm:px-3 sm:py-2.5 rounded-full sm:rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all shrink-0 flex items-center gap-1.5 active:scale-95 select-none touch-none border border-emerald-500"
                    title="Toca para hablar o mantén presionado como en WhatsApp (se envía solo al terminar)"
                  >
                    <Mic className="w-5 h-5" />
                    <span className="hidden lg:inline text-xs font-bold">Hablar</span>
                  </button>

                  {/* Send Button (for typed text) */}
                  {inputMessage.trim() && (
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="p-2.5 rounded-full bg-[#1a365d] text-white hover:bg-blue-900 hover:scale-105 active:scale-95 shadow-sm transition-all shrink-0"
                      title="Enviar mensaje escrito"
                    >
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  )}
                </form>

                {/* Friendly Accessibility Hint for 3rd Graders and Parents */}
                <div className="flex items-center justify-center gap-1.5 mt-1.5 text-[10px] text-gray-500 max-w-5xl mx-auto text-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>
                    Toca el micrófono 🎤 verde o mantenlo presionado para hablar. Al guardar silencio, tu mensaje se enviará solo.
                  </span>
                </div>
              </div>
            )}
          </footer>
        </main>
      </div>

      {/* 3. Cuaderno Modal (Digital Scratchpad) */}
      <CuadernoModal
        isOpen={showCuadernoModal}
        onClose={() => setShowCuadernoModal(false)}
        onSendDrawing={(dataUrl) => {
          handleSendMessage('', dataUrl);
        }}
        questionTitle={currentQuestion ? `Pregunta #${currentQuestion.questionNumber}: ${currentQuestion.title}` : 'Hoja de Trabajo y Análisis de Lectura'}
        currentQuestion={currentQuestion || undefined}
      />

      {/* 4. Evidence Report Modal */}
      <EvidenceModal
        isOpen={showEvidenceModal}
        onClose={() => setShowEvidenceModal(false)}
        studentName={studentProfile.name}
        grade={currentGrade}
        solvedCount={studentProfile.solvedQuestionsCount}
        completedIds={studentProfile.completedQuestionIds}
      />

      {/* 5. Academic Resources & Conceptual Capsule Modal */}
      {currentQuestion && (
        <AcademicResourcesModal
          isOpen={showResourcesModal}
          onClose={() => setShowResourcesModal(false)}
          question={currentQuestion}
          studentName={studentProfile.name}
        />
      )}

      {/* 6. Welcome & Profile Setup Modal (First Launch) */}
      {showWelcomeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="flex flex-col w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-200">
            <div className="bg-[#1a365d] p-5 text-white text-center">
              <div className="flex justify-center mb-2">
                <EscudoInstitucional size={60} className="bg-white/95" />
              </div>
              <h3 className="font-black text-base uppercase tracking-tight">
                I.E. Técnica Simón Bolívar
              </h3>
              <p className="text-[11px] text-blue-200 italic mt-0.5">
                "Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"
              </p>
              <div className="mt-2 text-xs font-bold text-amber-300 bg-blue-950/70 py-1 px-3 rounded-full inline-block border border-amber-400/30">
                Tutor Socrático Institucional - Lectura
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Nombre Completo del Estudiante:
                </label>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value.toUpperCase())}
                  placeholder="EJ: LAURA SOFÍA VARGAS"
                  className="w-full text-sm px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none uppercase font-semibold"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Grado de Estudio:
                </label>
                <select
                  value={tempGrade}
                  onChange={(e) => setTempGrade(Number(e.target.value))}
                  className="w-full text-sm px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none font-medium cursor-pointer"
                >
                  {GRADES_AVAILABLE.map((g) => (
                    <option key={g} value={g}>
                      {g}° Grado {g >= 10 ? '(Media Académica - Saber 11)' : g >= 6 ? '(Básica Secundaria)' : '(Básica Primaria)'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-3 bg-blue-50 rounded-xl text-xs text-blue-900 space-y-1 border border-blue-100">
                <p className="font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                  Metodología Pedagógica:
                </p>
                <p className="text-[11px] leading-relaxed text-blue-800">
                  El tutor socrático guiará tu comprensión lectora con preguntas, citas y pistas para tu cuaderno de apuntes. Cada 4 preguntas completadas, radica tus evidencias con fotos en el portal del colegio.
                </p>
              </div>

              <button
                onClick={handleSaveProfile}
                className="w-full py-2.5 bg-[#1a365d] hover:bg-blue-900 text-white font-bold text-sm rounded-xl shadow-md transition-all"
              >
                ¡Iniciar Entrenamiento en Lectura!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
