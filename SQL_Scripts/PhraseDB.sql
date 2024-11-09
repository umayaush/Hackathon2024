DROP DATABASE IF EXISTS phrasedb;
CREATE DATABASE phrasedb;
USE phrasedb;

-- Create Category table
CREATE TABLE CATEGORY (
    category_id         INT AUTO_INCREMENT,
    CategoryName       VARCHAR(255)        NOT NULL UNIQUE,
    CategoryDescription VARCHAR(255),
    
    CONSTRAINT PK_CATEGORY PRIMARY KEY (category_id)
);

-- Create Phrase table
CREATE TABLE PHRASE (
    phrase_id INT AUTO_INCREMENT,
    category_id INT NOT NULL,
    phrase VARCHAR(255) NOT NULL UNIQUE,
    PhraseDescription VARCHAR(255),
    
    CONSTRAINT PK_PHRASE PRIMARY KEY (phrase_id),
    CONSTRAINT FK_PHRASE_CATEGORY FOREIGN KEY (category_id) 
        REFERENCES CATEGORY(category_id)
        ON DELETE CASCADE
);

-- Create User table
CREATE TABLE USER (
    user_id INT AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    
    CONSTRAINT PK_USER PRIMARY KEY (user_id)
);

-- Create Examples table
CREATE TABLE EXAMPLES (
    example_id INT AUTO_INCREMENT,
    expression_id INT NOT NULL,
    context VARCHAR(255) NOT NULL,
    example VARCHAR(255) NOT NULL,
    
    CONSTRAINT PK_EXAMPLES PRIMARY KEY (example_id),
    CONSTRAINT FK_EXAMPLES_PHRASE FOREIGN KEY (expression_id) 
        REFERENCES PHRASE(phrase_id)
        ON DELETE CASCADE
);

-- Create Saved_Phrase table (junction table)
CREATE TABLE SAVED_PHRASE (
    user_id INT,
    expression_id INT,
    
    CONSTRAINT PK_SAVED_PHRASE PRIMARY KEY (user_id, expression_id),
    CONSTRAINT FK_SAVED_PHRASE_USER FOREIGN KEY (user_id) 
        REFERENCES USER(user_id)
        ON DELETE CASCADE,
    CONSTRAINT FK_SAVED_PHRASE_PHRASE FOREIGN KEY (expression_id) 
        REFERENCES PHRASE(phrase_id)
        ON DELETE CASCADE
);