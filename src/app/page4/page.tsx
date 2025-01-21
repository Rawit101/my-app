"use client"
import Link from 'next/link'
import '../globals.css'
import { useState } from "react"

export default function Page() {
    const [fruit, setFruit] = useState('banana');
    const [fruitt, setFruitt] = useState('apple');
    const [fruittt, setFruittt] = useState('coconut');
    const toBanana = () => {
        setFruit('Banana');
    }
    const toApple = () => {
        setFruitt('Apple');
    }
    const toCoconut = () => {
        setFruittt('Coconut');
    }
    return (
        <div>
            
        
            {fruit}
           <br />
            <button onClick={toBanana}>Banana</button>
            <br />
            {fruitt}
            <br />
            <button onClick={toApple}>Apple</button>
            <br />
            {fruittt}
            <br />
            <button onClick={toCoconut}>Coconut</button>
            <br />
            <br />
            <Link href="\page1">Go to Page 1</Link><br />
            <Link href="\page2">Go to Page 2</Link><br />
            <Link href="\page3">Go to Page 3</Link><br />
            <Link href="\page4">Go to Page 4</Link><br />
        </div>
    );
}