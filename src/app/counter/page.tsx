'use client';

import { useEffect, useState } from "react";
import styles from './counter.module.css'

export default function CounterPage() {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);
    // });

    return (
        <div className={styles.padding}>
            <h1>Counter : {count}</h1>
            <div className={styles.btn}>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrese</button>
                <button onClick={() => setCount(count * 0)}>reset</button>
            </div>
        </div>
    );
}