import Navbar from '../components/Navbar';
import PhraseCard from '../components/PhraseCard';

export default function Page() {
    const phrase = "Phrase";
    const meaning = "Meaning";

    return (
        <div>
            <Navbar />
            <main>
                <h1>DASHBOARD</h1>
                <div>
                    <PhraseCard phrase={phrase} meaning={meaning} />
                </div>
            </main>
        </div>
    );
}
