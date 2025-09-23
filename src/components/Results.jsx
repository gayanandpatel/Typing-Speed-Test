import React from 'react';
import styles from './Results.module.css';

// SVG Icon Components for better readability
const AccuracyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>;
const CorrectIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5L4 14.2l5 5L21 7l-1.5-1.5L9 16.2z"></path></svg>;
const IncorrectIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>;

const Results = ({ stats, onRestart, testDuration }) => {
    const { correct, incorrect, typed } = stats; //
    const total = correct + incorrect; //
    const wpm = Math.round((typed / 5) / (testDuration / 60)); //
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0; //

    return (
        <div className={styles.resultsContainer}>
            <h2 className={styles.resultsTitle}>Test Complete!</h2>

            <div className={styles.heroStat}>
                <div className={styles.wpmValue}>{wpm > 0 ? wpm : 0}</div>
                <p>Words Per Minute</p>
            </div>

            <div className={styles.secondaryStats}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}><AccuracyIcon /></div>
                    <div className={styles.statDetails}>
                        <p>Accuracy</p>
                        <span className={accuracy > 80 ? styles.accValueGood : styles.accValueBad}>{accuracy}%</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}><CorrectIcon /></div>
                    <div className={styles.statDetails}>
                        <p>Correct Words</p>
                        <span className={styles.correctWord}>{correct}</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}><IncorrectIcon /></div>
                    <div className={styles.statDetails}>
                        <p>Incorrect Words</p>
                        <span className={styles.incorrectWord}>{incorrect}</span>
                    </div>
                </div>
            </div>

            <button onClick={onRestart} className={styles.restartButton}>
                Restart Test
            </button>
        </div>
    );
};

export default Results;