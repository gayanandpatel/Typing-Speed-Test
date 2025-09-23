import { useState, useEffect, useRef, useCallback } from 'react';
import { wordList } from '../data/Wordlist';

const TOTAL_WORDS = 200;

const shuffleWords = () => {
    return [...wordList].sort(() => Math.random() - 0.5).slice(0, TOTAL_WORDS);
};

// The hook now accepts an options object with a default value
export const useTypingTest = (options = {}) => {
    // Destructure duration from options, with a default of 60 seconds
    const { duration = 60 } = options;

    const [status, setStatus] = useState('waiting'); 
    const [words, setWords] = useState([]);
    const [wordStatus, setWordStatus] = useState([]); 
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [typedValue, setTypedValue] = useState('');
    const [isError, setIsError] = useState(false);
    // Timer state is now initialized with the dynamic duration
    const [timer, setTimer] = useState(duration);
    const [stats, setStats] = useState({ correct: 0, incorrect: 0, typed: 0 });
    
    const inputRef = useRef(null);
    const wordContainerRef = useRef(null);

    const initializeTest = useCallback(() => {
        const newWords = shuffleWords();
        setWords(newWords);
        setWordStatus(Array(newWords.length).fill(''));
        setCurrentWordIndex(0);
        setTypedValue('');
        setIsError(false);
        // Timer is reset to the dynamic duration
        setTimer(duration);
        setStatus('waiting');
        setStats({ correct: 0, incorrect: 0, typed: 0 });
        inputRef.current?.focus();
    }, [duration]); // Add duration to the dependency array

    useEffect(() => {
        initializeTest();
    }, [initializeTest]);

    useEffect(() => {
        let interval;
        if (status === 'running' && timer > 0) {
            interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setStatus('finished');
        }
        return () => clearInterval(interval);
    }, [status, timer]);


    useEffect(() => {
        if (wordContainerRef.current && currentWordIndex > 0) {
            const currentWordEl = wordContainerRef.current.children[currentWordIndex];
            if (currentWordEl) {
                currentWordEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
        }
    }, [currentWordIndex]);

    const handleTyping = (e) => {
        const { value } = e.target;

        if (status === 'waiting' && value.length > 0) {
            setStatus('running');
        }

        const currentWord = words[currentWordIndex];

        if (value.endsWith(' ')) {
            if (value.trim() === '') {
                setTypedValue('');
                return;
            }

            const typedWord = value.trim();
            const isCorrect = typedWord === currentWord;

            setWordStatus(prev => {
                const newStatus = [...prev];
                newStatus[currentWordIndex] = isCorrect ? 'correct' : 'incorrect';
                return newStatus;
            });

            setStats(prev => ({
                correct: prev.correct + (isCorrect ? 1 : 0),
                incorrect: prev.incorrect + (isCorrect ? 0 : 1),
                typed: prev.typed + typedWord.length + 1
            }));

            setCurrentWordIndex(prev => prev + 1);
            setTypedValue('');
            setIsError(false);
        } else {
            if (value.length > 0 && !currentWord.startsWith(value)) {
                setIsError(true);
            } else {
                setIsError(false);
            }
            setTypedValue(value);
        }
    };

    return {
        status,
        words,
        wordStatus,
        currentWordIndex,
        typedValue,
        timer,
        stats,
        inputRef,
        wordContainerRef,
        handleTyping,
        initializeTest,
        TEST_DURATION: duration,
        isError,
    };
};