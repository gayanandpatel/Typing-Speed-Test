import React from 'react';
import { useTypingTest } from '../hooks/useTypingTest';
import Results from './Results';
import TypingTest from './TypingTest';
import styles from './Homepage.module.css';

const Homepage = () => {
    // Call the hook with an options object to set the test duration
    // You can change this value to 15, 60, etc.
    const typingTest = useTypingTest({ duration: 30 });

    return (
        <main className={styles.homepage}>
            <div className={styles.testContainer}>
                {typingTest.status === 'finished' ? (
                    <Results 
                        stats={typingTest.stats} 
                        onRestart={typingTest.initializeTest} 
                        testDuration={typingTest.TEST_DURATION} 
                    />
                ) : (
                    <TypingTest {...typingTest} />
                )}
            </div>
        </main>
    );
};

export default Homepage;