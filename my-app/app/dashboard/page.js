'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PhraseGrid from '../components/PhraseGrid';
import Searchbar from '../components/Searchbar';
import Filter from '../components/Filter';

export default function Dashboard() {
    const allPhrases = [
        { phrase: 'Example 1', meaning: 'Meaning of example 1', category: 'academic' },
        { phrase: 'Example 2', meaning: 'Meaning of example 2', category: 'social' },
        { phrase: 'Example 3', meaning: 'Meaning of example 3', category: 'food' },
        { phrase: 'Example 4', meaning: 'Meaning of example 4', category: 'technology' },
        { phrase: 'Example 5', meaning: 'Meaning of example 5', category: 'work' },
        { phrase: 'Example 6', meaning: 'Meaning of example 6', category: 'daily' },
        { phrase: 'Example 7', meaning: 'Meaning of example 7', category: 'emotions' },
    ];

    const [filter, setFilter] = useState("all");

    const filters = [
        { name: "Academic Life", value: "academic", description: "Phrases and expressions commonly used in educational and scholarly settings." },
        { name: "Social Life & Entertainment", value: "social", description: "Phrases used in social gatherings, leisure activities, and entertainment contexts." },
        { name: "Food & Dining", value: "food", description: "Expressions related to meals, dining experiences, and food culture." },
        { name: "Daily Life & Casual Speech", value: "daily", description: "Common expressions for everyday interactions and casual conversations." },
        { name: "Emotions & Reactions", value: "emotions", description: "Phrases that express feelings, reactions, and emotional responses." },
        { name: "Technology & Social Media", value: "technology", description: "Modern expressions related to technology, the internet, and social media interactions." },
        { name: "Money & Work", value: "work", description: "Phrases and expressions related to jobs, careers, and financial matters." },
    ];

    const handleFilterChange = (selectedFilter) => {
        if (selectedFilter === filter) {
            setFilter("all");
        } else {
            setFilter(selectedFilter);
        }
    };

    const filteredPhrases = allPhrases.filter((phrase) => {
        if (filter === "all") return true;
        return phrase.category === filter;
    });

    return (
        <div>
            <Navbar />
            <main>
                <h1>DASHBOARD</h1>
                <Searchbar />

                <Filter
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    activeFilter={filter}
                />

                <PhraseGrid phrases={filteredPhrases} />
            </main>
        </div>
    );
}

