
import React from 'react';
import Word from './Word';
import styles from './Homepage.module.css'; 

const TypingTest = ({
    status,
    words,
    wordStatus,
    currentWordIndex,
    typedValue,
    timer,
    inputRef,
    wordContainerRef,
    handleTyping,
    initializeTest,
    isError,
}) => {
    return (
        <>
            <div className={styles.timer}>
                <span>{timer}</span>
            </div>

            <div ref={wordContainerRef} className={styles.wordSection}>
                {words.map((word, index) => (
                    <Word
                        key={index}
                        word={word}
                        isCurrent={index === currentWordIndex}
                        wordStatus={wordStatus[index]}
                    />
                ))}
            </div>

            <div className={styles.typingSection}>
                <input
                    ref={inputRef}
                    type="text"
                    value={typedValue}
                    onChange={handleTyping}
                    disabled={status === 'finished'}
                    className={`${styles.typebox} ${isError ? styles.inputError : ''}`}
                    placeholder={status === 'waiting' ? 'Start typing...' : ''}
                    autoFocus
                />
                <button onClick={initializeTest} className={styles.restartButtonIcon} aria-label="Restart Test">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg>
                </button>
            </div>
        </>
    );
};

export default TypingTest;