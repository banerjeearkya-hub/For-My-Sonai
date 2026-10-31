import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Heart, RotateCcw, Trophy, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveContent, QuizQuestion } from '../data/loveContent';

export const LoveQuiz: React.FC = () => {
  const questions: QuizQuestion[] = loveContent.quiz.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 55,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#8B1538', '#F4A6B8', '#FFF8F5', '#E91E63'],
        });
      } catch {
        // Fallback
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <section id="quiz" className="py-16 sm:py-24 px-3.5 sm:px-6 relative bg-[#FFF8F5] overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#FCE4EC]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl sm:max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F4A6B8]/40 text-[#8B1538] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Playful Love Trivia</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A1025] mb-2 sm:mb-4 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {loveContent.quiz.title}
          </h2>

          <p className="text-sm sm:text-lg text-[#4A1025]/75 leading-relaxed font-light">
            {loveContent.quiz.subtitle}
          </p>
        </div>

        {/* Quiz Card */}
        <div className="glass-panel rounded-2xl sm:rounded-3xl p-4.5 sm:p-10 shadow-xl shadow-[#8B1538]/10 border-2 border-[#F4A6B8]/40 relative">
          <AnimatePresence mode="wait">
            {!isCompleted ? (
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                {/* Progress bar & Question number */}
                <div className="flex items-center justify-between text-xs font-semibold text-[#8B1538] mb-2.5">
                  <span>
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <span>Score: {score}</span>
                </div>

                <div className="w-full h-2 bg-[#FCE4EC] rounded-full overflow-hidden mb-6 sm:mb-8">
                  <div
                    className="h-full bg-gradient-to-r from-[#8B1538] to-[#F4A6B8] transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Question Text */}
                <h3
                  className="text-lg sm:text-2xl font-serif font-bold text-[#4A1025] mb-5 sm:mb-8 text-center px-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {currentQ.question}
                </h3>

                {/* Options List */}
                <div className="flex flex-col gap-2.5 sm:gap-3.5 mb-6 sm:mb-8">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQ.correctIndex;

                    let btnStyle =
                      'bg-white text-[#4A1025] border-[#F4A6B8]/40 hover:border-[#8B1538] active:bg-[#FCE4EC]/40';

                    if (isAnswered) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-50 text-emerald-900 border-emerald-400 font-medium';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-50 text-rose-900 border-rose-300';
                      } else {
                        btnStyle = 'opacity-60 bg-white border-gray-200';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswered}
                        className={`w-full text-left p-3.5 sm:p-4.5 rounded-xl sm:rounded-2xl border-2 transition-all duration-200 flex items-center justify-between cursor-pointer touch-manipulation min-h-[48px] active:scale-98 ${btnStyle}`}
                      >
                        <span className="text-xs sm:text-base pr-2">{option}</span>
                        {isAnswered && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isAnswered && isSelected && !isCorrect && (
                          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Sweet Note Feedback */}
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 sm:p-4 rounded-xl bg-[#FCE4EC] border border-[#F4A6B8]/50 text-[#8B1538] text-xs sm:text-sm mb-5 sm:mb-6 flex items-start gap-2"
                  >
                    <Heart className="w-4 h-4 fill-[#8B1538] shrink-0 mt-0.5" />
                    <span>{currentQ.sweetNote}</span>
                  </motion.div>
                )}

                {/* Next Button */}
                {isAnswered && (
                  <div className="flex justify-end">
                    <button
                      onClick={handleNextQuestion}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#8B1538] to-[#4A1025] text-white font-medium text-sm shadow-md active:scale-96 transition-all cursor-pointer touch-manipulation min-h-[46px]"
                    >
                      <span>
                        {currentQuestionIndex < questions.length - 1
                          ? 'Next Question'
                          : 'See Surprise Results'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              /* COMPLETED RESULTS SCREEN */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4 sm:py-6 flex flex-col items-center px-1"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#8B1538] to-[#F4A6B8] flex items-center justify-center text-white shadow-xl mb-4 sm:mb-6 animate-pulse-glow">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-[#8B1538] mb-1 sm:mb-2">
                  Quiz Completed With Love!
                </span>

                <h3
                  className="text-2xl sm:text-4xl font-serif font-bold text-[#4A1025] mb-2 sm:mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {loveContent.quiz.resultMessage}
                </h3>

                <p className="text-base sm:text-lg text-[#8B1538] font-semibold mb-3 sm:mb-4">
                  Score: {score} / {questions.length} (Always 100% in My Heart! ❤️)
                </p>

                <p className="text-xs sm:text-base text-[#4A1025]/80 max-w-md mx-auto leading-relaxed mb-6 sm:mb-8">
                  {loveContent.quiz.resultSubtext}
                </p>

                <button
                  onClick={handleRestartQuiz}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-6 sm:py-3 rounded-full bg-[#FFF8F5] border-2 border-[#8B1538] text-[#8B1538] active:bg-[#8B1538] active:text-white font-medium text-sm transition-all shadow-xs cursor-pointer touch-manipulation min-h-[46px]"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Play Again</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
