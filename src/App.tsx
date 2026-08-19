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
  Clock
} from 'lucide-react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { CuadernoModal } from './components/CuadernoModal';
import { EvidenceModal } from './components/EvidenceModal';
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
  const [isRecording, setIsRecording] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showQuestionDetails, setShowQuestionDetails] = useState(false);
  const [showDiagramPanel, setShowDiagramPanel] = useState(false);
  const [showCuadernoModal, setShowCuadernoModal] = useState(false);
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(!studentProfile.name);
  const [tempName, setTempName] = useState(studentProfile.name || '');
  const [tempGrade, setTempGrade] = useState<number>(studentProfile.grade || 11);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

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
      speakText(`Pregunta número ${q.questionNumber}. ${q.statement}. Revisa las opciones A, B, C y D y completa tus 15 minutos de estudio en el cuaderno.`);
    }
  };

  // Speech TTS Function
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    // Clean markdown characters
    const cleanText = text
      .replace(/[*_~`#]/g, '')
      .replace(/1️⃣|2️⃣|3️⃣|4️⃣|📝|📌|✍️|🏛️|👋|💡|📌/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-CO';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  // Handle Speech Recognition
  const handleToggleVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Tu navegador no soporta entrada de voz directa. Puedes escribir en el chat o activar la voz socrática.');
      return;
    }

    if (isRecording) {
      setIsRecording(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'es-CO';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsRecording(true);
      recognition.onend = () => setIsRecording(false);
      recognition.onerror = () => setIsRecording(false);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputMessage(prev => prev ? `${prev} ${transcript}` : transcript);
        }
      };

      recognition.start();
    } catch (e) {
      setIsRecording(false);
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
        speakText(`Aviso: En Lectura solamente contamos con cuadernillos oficiales desde grado tercero hasta undécimo. Por favor indica un grado entre tercero y undécimo.`);
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
        speakText(tutorReply);
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

  // Format markdown helper (bold, lists, options A-D, dividers, emojis)
  const renderMessageContent = (text: string) => {
    const lines = text.split('\n');
    return (
      <div className="space-y-2 text-[14px] sm:text-[15px] leading-relaxed text-gray-900 break-words">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={idx} className="h-1.5" />;

          // Line separator ━━━━━━━━━
          if (/^[━─—_=*-]{4,}$/.test(trimmed)) {
            return <hr key={idx} className="border-t border-gray-200 my-2 opacity-80" />;
          }

          // Option lines: **A.** or **B.** or A. or B.
          const isOptionLine = /^\*?\*?([A-D])\.\*?\*?\s+(.*)/i.exec(trimmed);
          if (isOptionLine) {
            const letter = isOptionLine[1].toUpperCase();
            const content = isOptionLine[2];
            return (
              <div 
                key={idx}
                className="flex items-start gap-2.5 p-2 rounded-xl bg-blue-50/70 border border-blue-100 my-1 hover:bg-blue-50 transition-colors"
              >
                <span className="w-6 h-6 rounded-lg bg-[#1a365d] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  {letter}
                </span>
                <div className="text-gray-900 font-medium leading-snug flex-1">
                  {parseBoldMarkdown(content)}
                </div>
              </div>
            );
          }

          // Question header: 📌 **PREGUNTA...
          if (trimmed.startsWith('📌')) {
            return (
              <div key={idx} className="p-2.5 rounded-xl bg-blue-900 text-white font-extrabold text-xs sm:text-sm shadow-xs flex items-center gap-2 my-1.5">
                <span>📌</span>
                <span className="tracking-wide uppercase">{trimmed.replace(/^📌\s*/, '').replace(/\*\*/g, '')}</span>
              </div>
            );
          }

          // Section headers like 📜 **TEXTO DE LECTURA... or 📖 **ENUNCIADO:** or 📓 **GUÍA...
          if (/^(📜|📖|🔘|📋|📓|💬|⏱️|⚠️|💡|🚫|🏛️)\s*\*\*/.test(trimmed)) {
            const isReadingHeader = trimmed.startsWith('📜');
            return (
              <div 
                key={idx} 
                className={`text-xs sm:text-sm font-black pt-1.5 pb-1 flex items-center gap-1.5 border-b ${
                  isReadingHeader 
                    ? 'text-amber-900 border-amber-200 bg-amber-50/80 px-2.5 py-1 rounded-lg my-1.5' 
                    : 'text-[#1a365d] border-blue-100/80'
                }`}
              >
                {parseBoldMarkdown(trimmed)}
              </div>
            );
          }

          // Numbered bullet items like 1️⃣, 2️⃣, 1., 2.
          if (/^([1-7]️⃣|\d+\.)\s+/.test(trimmed)) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1 my-0.5 leading-snug text-gray-800">
                <span className="font-bold text-blue-900 shrink-0">
                  {trimmed.split(' ')[0]}
                </span>
                <div className="flex-1">
                  {parseBoldMarkdown(trimmed.substring(trimmed.indexOf(' ') + 1))}
                </div>
              </div>
            );
          }

          // Standard paragraph line
          return (
            <p key={idx} className="leading-relaxed">
              {parseBoldMarkdown(line)}
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
        speechEnabled={speechEnabled}
        onToggleSpeech={() => setSpeechEnabled(!speechEnabled)}
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

          {/* Top Interactive Diagram Reference Banner */}
          {showDiagramPanel && currentQuestion && (
            <div className="bg-slate-50 border-b border-blue-200/90 p-3 z-10 shrink-0 animate-in slide-in-from-top-2 duration-200 shadow-inner">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#1a365d] flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-700" />
                  Figura / Gráfico Oficial - Pregunta #{currentQuestion.questionNumber}
                </span>
                <button
                  onClick={() => setShowDiagramPanel(false)}
                  className="text-xs text-gray-500 hover:text-gray-800 px-2 py-0.5 rounded border bg-white"
                >
                  Ocultar
                </button>
              </div>
              <QuestionDiagram question={currentQuestion} onOpenCuaderno={() => setShowCuadernoModal(true)} />
            </div>
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

                    {/* Interactive Vector Diagram for Questions in Chat Stream */}
                    {isTutor && currentQuestion && (msg.text.includes('PREGUNTA #') || msg.text.includes('ENUNCIADO:') || msg.text.includes('FICHA PEDAGÓGICA')) && (
                      <div className="mb-3">
                        <QuestionDiagram 
                          question={currentQuestion} 
                          onOpenCuaderno={() => setShowCuadernoModal(true)} 
                        />
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

                    {/* Message Text */}
                    {renderMessageContent(msg.text)}

                    {/* Message Footer (Timestamp & Status) */}
                    <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-gray-500">
                      <span>{msg.timestamp}</span>
                      {isStudent && (
                        <CheckCheck className="w-3.5 h-3.5 text-blue-500 inline ml-0.5" />
                      )}
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
          <footer className="bg-[#f0f2f5] p-2.5 md:p-3 border-t border-gray-300 z-10 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 max-w-5xl mx-auto"
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
                  placeholder="Escribe tu argumento, respuesta o pregunta socrática..."
                  className="w-full bg-white text-gray-900 placeholder-gray-500 text-xs md:text-sm rounded-2xl px-4 py-2.5 outline-none border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-xs"
                />
              </div>

              {/* Voice Input (Dictation) */}
              <button
                type="button"
                onClick={handleToggleVoiceInput}
                className={`p-2.5 rounded-full transition-colors shrink-0 ${
                  isRecording 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
                title={isRecording ? 'Detener dictado' : 'Dictar por voz'}
              >
                {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>

              {/* Send Button */}
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className={`p-2.5 rounded-full shadow-sm transition-all shrink-0 ${
                  inputMessage.trim() && !isLoading
                    ? 'bg-[#1a365d] text-white hover:bg-blue-900 hover:scale-105 active:scale-95'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                title="Enviar mensaje"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </form>
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

      {/* 5. Welcome & Profile Setup Modal (First Launch) */}
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
