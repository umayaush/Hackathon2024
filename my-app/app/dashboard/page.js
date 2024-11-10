'use client'

import React, { useState, useEffect  } from 'react';
import Navbar from '../components/Navbar';
import PhraseGrid from '../components/PhraseGrid';
import Searchbar from '../components/Searchbar';
import Filter from '../components/Filter';
import Modal from '../components/Modal'; 

export default function Dashboard() {
    const [allPhrases, setAllPhrases] = useState([]);
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

    useEffect(() => {
        // Fetch phrases from the API
        fetch("http://localhost:8080/api/dashboard")
            .then(response => response.json())
            .then(data => setAllPhrases(data))
            .catch(error => console.error("Error fetching phrases:", error));
    }, []);

    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter === filter ? "all" : selectedFilter);
    };

  const filteredPhrases = allPhrases.filter((phrase) => {
    if (filter === "all") return true;
    return phrase.category === filter;
  });

  const openModal = (phrase) => {
    setSelectedPhrase(phrase);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhrase(null);
  };

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
        <PhraseGrid phrases={filteredPhrases} openModal={openModal} />

        {/* add Modal component */}
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          phrase={selectedPhrase?.phrase}
          meaning={selectedPhrase?.meaning}
          context={selectedPhrase?.context}
          category={selectedPhrase?.category}
        />
      </main>
    </div>
  );
}
