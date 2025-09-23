import React from 'react';
import styles from './Homepage.module.css'; 

const Word = React.memo(({ word, isCurrent, wordStatus }) => {
    let className = styles.word;
    if (isCurrent) {
        className = `${styles.word} ${styles.currentWord}`;
    } else if (wordStatus === 'correct') {
        className = `${styles.word} ${styles.correctWord}`;
    } else if (wordStatus === 'incorrect') {
        className = `${styles.word} ${styles.incorrectWord}`;
    }
    return <span className={className}>{word}</span>;
});

export default Word;