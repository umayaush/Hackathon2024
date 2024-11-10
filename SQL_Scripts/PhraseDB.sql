-- Drop existing tables if they exist
DROP TABLE IF EXISTS CATEGORY;
DROP TABLE IF EXISTS PHRASE;
DROP TABLE IF EXISTS USERS;
DROP TABLE IF EXISTS EXAMPLE;
DROP TABLE IF EXISTS SAVED_PHRASE;

-- Create Category table
CREATE TABLE CATEGORY (
    category_id         INTEGER PRIMARY KEY,
    category_name       TEXT        NOT NULL UNIQUE,
    category_desc       TEXT
    
    
);

-- Create Phrase table
CREATE TABLE PHRASE (
    phrase_id           INTEGER PRIMARY KEY,
    category_id         INTEGER                 NOT NULL,
    phrase              TEXT        NOT NULL UNIQUE,
    phrase_desc         TEXT,                           -- phrase definition
    context             TEXT        NOT NULL,           -- phrase context

    FOREIGN KEY (category_id) REFERENCES CATEGORY(category_id) ON DELETE CASCADE
);

-- Create User table
CREATE TABLE USERS (
    user_id             INTEGER PRIMARY KEY                AUTOINCREMENT,
    user_email          TEXT        NOT NULL UNIQUE,
    user_password       TEXT        NOT NULL
    
   
);

-- Create Example table
CREATE TABLE EXAMPLE (
    example_id          INTEGER PRIMARY KEY,
    phrase_id           INTEGER                 NOT NULL,
    example             TEXT        NOT NULL,           -- phrase example
    
    FOREIGN KEY (phrase_id) REFERENCES PHRASE(phrase_id) ON DELETE CASCADE
);

-- Create Saved_Phrase table (Bridge table)
CREATE TABLE SAVED_PHRASE (
    user_id             INTEGER,
    phrase_id           INTEGER,
    
    PRIMARY KEY (user_id, phrase_id),
    FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE,
    FOREIGN KEY (phrase_id) REFERENCES PHRASE(phrase_id) ON DELETE CASCADE
);

-- Populate Category table
INSERT INTO CATEGORY (category_id, category_name, category_desc) VALUES
(1, 'Academic Life', 'Phrases and expressions commonly used in educational and scholarly settings.'),
(2, 'Social Life & Entertainment', 'Phrases used in social gatherings, leisure activities, and entertainment contexts.'),
(3, 'Food & Dining', 'Expressions related to meals, dining experiences, and food culture.'),
(4, 'Daily Life & Casual Speech', 'Common expressions for everyday interactions and casual conversations.'),
(5, 'Emotions & Reactions', 'Phrases that express feelings, reactions, and emotional responses.'),
(6, 'Technology & Social Media', 'Modern expressions related to technology, the internet, and social media interactions.'),
(7, 'Money & Work', 'Phrases and expressions related to jobs, careers, and financial matters.');

-- Populate Phrase table
INSERT INTO PHRASE (phrase_id, category_id, phrase, phrase_desc, context) VALUES
(1, 1, 'I''m cooked / We''re cooked', 'Feeling overwhelmed or unprepared, especially before exams', 'Exam stress'),
(2, 1, 'Pull an all-nighter', 'Staying up all night to study or complete work', 'Late-night studying'),
(3, 1, 'Prof', 'Short for professor, commonly used by students', 'Casual term for professor'),
(4, 1, 'Office hours', 'Designated meeting times when students can consult their professor', 'Professor availability'),
(5, 1, 'Bird course', 'A class that is perceived to be very easy, commonly used in Canadian universities', 'Easy class'),
(6, 1, 'Cram', 'To study intensively right before an exam or deadline', 'Intensive studying'),
(7, 1, 'Dead week', 'The week before finals, often used to prepare intensively', 'Pre-finals week'),
(8, 1, 'Readings', 'Assigned chapters or articles from textbooks or journals', 'Course material'),
(9, 2, 'Slay', 'To do something extremely well, often with confidence', 'High achievement'),
(10, 2, 'GOAT', 'An acronym for "Greatest Of All Time", referring to exceptional talent', 'Top performer'),
(11, 2, 'Built different', 'Used to describe someone who is exceptionally talented or unique', 'Distinct talent'),
(12, 2, 'Periodt', 'A term used for emphasis, signifying the end of a discussion', 'Final word'),
(13, 2, 'Mid', 'Describes something that is mediocre or not impressive', 'Average quality'),
(14, 2, 'Cap / No cap', 'Used to call out a lie ("Cap") or to confirm honesty ("No cap")', 'Truth assessment'),
(15, 2, 'Fire', 'Used to describe something that is amazing or excellent', 'High praise'),
(16, 2, 'Hits different', 'Describes something that is exceptionally good or has a unique impact', 'Unique impact'),
(17, 2, 'Bet', 'Used to confirm agreement or show readiness', 'Affirmation'),
(18, 2, 'Vibe check', 'A quick assessment of someone’s mood or overall attitude', 'Mood assessment'),
(19, 2, 'Tea', 'Gossip or drama, typically shared in casual conversation', 'Social gossip'),
(20, 2, 'Sending it', 'To go all out or put in maximum effort, often in a fun or daring way', 'Full effort'),
(21, 3, 'Munchies', 'A term used to refer to snacks or the desire to eat', 'Snack cravings'),
(22, 3, 'Tim''s run', 'Refers to going to Tim Hortons, a popular Canadian coffee shop', 'Canadian coffee culture'),
(23, 3, 'I''m down', 'Used to express interest or willingness to participate', 'Agreeing to an activity'),
(24, 3, 'Slaps', 'Describes food that tastes really good or is highly enjoyable', 'Food praise'),
(25, 3, 'Hits the spot', 'Used when food satisfies a specific craving or need', 'Craving satisfaction'),
(26, 3, 'Grab a bite', 'Casual term for getting something to eat', 'Casual dining'),
(27, 3, 'Double double', 'A coffee with two creams and two sugars, commonly ordered at Tim Hortons', 'Canadian coffee order'),
(28, 4, 'Take a rain check', 'To postpone or reschedule plans or an invitation', 'Postponing plans'),
(29, 4, 'What''s up', 'An informal greeting, asking how someone is or what is happening', 'Casual greeting'),
(30, 4, 'Talk shop', 'To discuss business or work-related matters, often informally', 'Work discussion'),
(31, 4, 'Reach', 'To contact or get in touch with someone, often used in Canada', 'Contacting someone'),
(32, 4, 'True say', 'A Canadian phrase used to affirm something as true or correct', 'Affirmation'),
(33, 4, 'Blessed', 'Feeling grateful, fortunate, or thankful', 'Expressing gratitude'),
(34, 4, 'Facts', 'A term used to agree with someone or confirm something as true', 'Agreement'),
(35, 4, 'Living rent-free', 'To constantly think about something, usually something minor or unnecessary', 'Obsession'),
(36, 4, 'It''s giving...', 'A phrase used to express what something or someone resembles or reminds you of', 'Resembling something'),
(37, 5, 'Shook', 'To be surprised or shocked by something unexpected', 'Shock or surprise'),
(38, 5, 'Pressed', 'To feel agitated, upset, or irritated about something', 'Feeling upset'),
(39, 5, 'Salty', 'To be upset or angry, often over something minor', 'Minor irritation'),
(40, 5, 'Sus', 'Short for suspicious, used to describe something or someone shady', 'Suspicion'),
(41, 5, 'Dead', 'Used to describe something extremely funny or laughable', 'Laughing hard'),
(42, 5, 'I can''t even', 'To feel overwhelmed, usually in a positive or amazed way', 'Overwhelmed (positive)'),
(43, 5, 'Mood', 'Used to express that a feeling or situation is relatable or shared', 'Relatable feeling'),
(44, 5, 'Based', 'To describe something or someone admirable or agreeable', 'Approval or admiration'),
(45, 6, 'Ghosted', 'To be ignored or not responded to in communications, especially messages', 'Ignored communication'),
(46, 6, 'Left on read', 'When a message is seen but not replied to', 'Unanswered message'),
(47, 6, 'Slide into DMs', 'To send a private, often informal, message to someone on social media', 'Private messaging'),
(48, 6, 'Main character energy', 'To exhibit confident or protagonist-like behavior, often on social media', 'Confident behavior'),
(49, 6, 'Touch grass', 'To step away from online life and reconnect with the real world', 'Disconnecting from the internet'),
(50, 6, 'Ratio''d', 'When a post receives more negative responses than positive, often indicating failure', 'Negative feedback'),
(51, 6, 'It ate', 'Used to describe something that succeeded or did really well, especially on social media', 'Success or approval'),
(52, 7, 'Broke', 'A term used to describe having no money or being financially strained', 'Lack of money'),
(53, 7, 'Bag', 'Slang for money or success, especially financial gain', 'Financial success'),
(54, 7, 'Side hustle', 'A part-time job or business venture to earn extra income', 'Extra income'),
(55, 7, 'Bread', 'Slang for money, commonly used in casual conversation', 'Money'),
(56, 7, 'Secure the bag', 'To earn money or successfully achieve a financial or personal goal', 'Achieving success'),
(57, 7, 'Bank''s closed', 'A phrase meaning no more money will be spent or available', 'Financial limit');

-- Populate User table
INSERT INTO USERS (user_email, user_password) VALUES
('user1@example.com', 'password1'),
('user2@example.com', 'password2'),
('user3@example.com', 'password3');

-- Populate Example table
INSERT INTO EXAMPLE (example_id, phrase_id, example) VALUES
(1, 1, 'I''m cooked, there''s no way I''ll finish this essay in time.'),
(2, 2, 'I had to pull an all-nighter to finish the project before the deadline.'),
(3, 3, 'My prof gave us a surprise quiz today.'),
(4, 4, 'I need to go during office hours to ask my prof a question about the assignment.'),
(5, 5, 'This bird course is an easy way to get an extra credit.'),
(6, 6, 'I had to cram for the exam because I didn''t study beforehand.'),
(7, 7, 'Dead week is coming up, I need to prepare for finals.'),
(8, 8, 'I haven''t finished all my readings for this week.'),
(9, 9, 'You totally slayed that presentation, everyone loved it!'),
(10, 10, 'He''s the GOAT of basketball, no one can compare to him.'),
(11, 11, 'That artist is built different, their creativity is unmatched.'),
(12, 12, 'Periodt, there''s no debate, that''s the truth!'),
(13, 13, 'This movie was mid, nothing special about it.'),
(14, 14, 'Stop capping, I know you didn''t actually do that.'),
(15, 15, 'That concert was fire, the energy was incredible!'),
(16, 16, 'This song really hits different after a long day at work.'),
(17, 17, 'Bet, I''m in for the weekend trip!'),
(18, 18, 'Let me do a vibe check before we decide on the restaurant.'),
(19, 19, 'Did you hear the tea? They broke up last week!'),
(20, 20, 'I''m sending it at this party tonight, let''s go all out!'),
(21, 21, 'I got the munchies, anyone want to grab some chips?'),
(22, 22, 'I''m about to make a Tim''s run, anyone want a coffee?'),
(23, 23, 'I''m down to join you guys for bowling this weekend.'),
(24, 24, 'This pizza slaps, I can''t stop eating it.'),
(25, 25, 'This burger really hits the spot after a long day of hiking.'),
(26, 26, 'Let''s grab a bite at that new diner downtown.'),
(27, 27, 'I ordered a double double at Tim Hortons for my morning coffee.'),
(28, 28, 'I can''t make it tonight, I''ll have to take a rain check on dinner.'),
(29, 29, 'What''s up, how have you been?'),
(30, 30, 'We need to talk shop about the new project next week.'),
(31, 31, 'I''ll reach out to you later today to confirm the details.'),
(32, 32, 'True say, that movie was really underrated.'),
(33, 33, 'I feel so blessed to have such supportive friends.'),
(34, 34, 'Facts, I agree with everything you said in the meeting.'),
(35, 35, 'I can''t stop thinking about that song, it''s living rent-free in my head.'),
(36, 36, 'It''s giving me major 90s vibes, doesn''t it?'),
(37, 37, 'I was shook when I found out she won the award.'),
(38, 38, 'He was really pressed when they canceled his meeting.'),
(39, 39, 'She got salty when I beat her at the game.'),
(40, 40, 'That whole situation felt sus, I think something is off.'),
(41, 41, 'That joke was dead, I couldn''t stop laughing.'),
(42, 42, 'I can''t even handle how good that concert was, it was unreal.'),
(43, 43, 'That''s my mood right now, I''m exhausted but still working.'),
(44, 44, 'Based, I totally agree with your point on the topic.'),
(45, 45, 'I haven''t heard from him in days, I think he ghosted me.'),
(46, 46, 'I saw your message, but I didn''t reply — I left it on read.'),
(47, 47, 'He slid into my DMs to ask about the project details.'),
(48, 48, 'She walks with main character energy, always confident and ready to take charge.'),
(49, 49, 'You really need to touch grass, get off your phone for a while.'),
(50, 50, 'That post got ratio''d, the negative comments are outnumbering the likes.'),
(51, 51, 'That movie really ate, it was the best I''ve seen in months.'),
(52, 52, 'I''m totally broke right now, I can''t even afford lunch.'),
(53, 53, 'She''s making serious bag moves with her new business.'),
(54, 54, 'He started a side hustle selling handmade jewelry online.'),
(55, 55, 'She''s all about the bread, working hard for her goals.'),
(56, 56, 'Let''s secure the bag by finishing this project early.'),
(57, 57, 'I''ve spent too much this month, the bank''s closed for now.');

-- Populate Saved_Phrase table (Bridge Table)
INSERT INTO SAVED_PHRASE (user_id, phrase_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 1);


