export interface QuestionOption {
  number: number; // 1, 2, 3, 4
  letter: string; // A, B, C, D
  text: string;
}

export interface Question {
  id: number;
  grade: number; // 3 to 11
  questionNumber: number; // 1 to 20
  title: string;
  statement: string;
  contextText?: string;
  diagramType?: 'table' | 'bar_chart' | 'line_chart' | 'geometry' | 'tree' | 'pictogram' | 'custom_svg' | 'none';
  diagramData?: any;
  options: QuestionOption[];
  correctOption: number; // 1 = A, 2 = B, 3 = C, 4 = D
  correctLetter: 'A' | 'B' | 'C' | 'D';
  competency: string; // e.g. "Comunicación", "Razonamiento", "Resolución de problemas"
  component: string; // "Numérico-Variacional", "Espacial-Métrico", "Aleatorio"
  affirmation: string;
  evidence: string;
  standard: string;
  justification: string;
  invalidOptionsReasoning: Record<string, string>;
  socraticHints: {
    recordar: string;
    comprender: string;
    aplicar: string;
    analizar: string;
  };
}

export interface ChatMessage {
  id: string;
  sender: 'tutor' | 'student' | 'system';
  text: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
  questionRef?: number; // question ID if relevant
  imageUrl?: string;
  audioDuration?: string;
  isEvidenceAlert?: boolean;
}

export interface StudentProfile {
  name: string;
  grade: number | null;
  currentQuestionIndex: number;
  solvedQuestionsCount: number;
  blockSolvedCount: number; // 0 to 4
  activeQuestion?: Question;
  completedQuestionIds: number[];
  startedAt: string;
}
