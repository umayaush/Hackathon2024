import Navbar from '../components/Navbar';
// import PhraseCard from '../components/PhraseCard';
import PhraseGrid from '../components/PhraseGrid';

export default function Page() {
    const phrases = [
        { phrase: 'Example 1', meaning: 'Meaning of example 1' },
        { phrase: 'Example 2', meaning: 'Meaning of example 2' },
        { phrase: 'Example 3', meaning: 'Meaning of example 3' },
        { phrase: 'Example 4', meaning: 'Meaning of example 4' },
        { phrase: 'Example 5', meaning: 'Meaning of example 5' },
        { phrase: 'Example 6', meaning: 'Meaning of example 6' },
        { phrase: 'Example 7', meaning: 'Meaning of example 7' },
        { phrase: 'Example 8', meaning: 'Meaning of example 8' },
        { phrase: 'Example 9', meaning: 'Meaning of example 9' },
        { phrase: 'Example 10', meaning: 'Meaning of example 10' },
                // sql will probably handle this, but these are just placeholders
      ];

    return (
        <div>
            <Navbar />
            <main>
                <h1>DASHBOARD</h1>
                <div>
                    <PhraseGrid phrases={phrases} />
                </div>
            </main>
        </div>
    );
}
