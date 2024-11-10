DROP DATABASE IF EXISTS phrasedb;
CREATE DATABASE phrasedb;
USE phrasedb;

-- Create Category table
CREATE TABLE CATEGORY (
    category_id         INT,
    category_name       VARCHAR(255)        NOT NULL UNIQUE,
    category_desc       VARCHAR(255),
    
    CONSTRAINT PK_CATEGORY PRIMARY KEY (category_id)
);

-- Create Phrase table
CREATE TABLE PHRASE (
    phrase_id           INT,
    category_id         INT                 NOT NULL,
    phrase              VARCHAR(255)        NOT NULL UNIQUE,
    phrase_desc         VARCHAR(255),                           -- phrase definition
    context             VARCHAR(255)        NOT NULL,           -- phrase context

    CONSTRAINT PK_PHRASE PRIMARY KEY (phrase_id),
    CONSTRAINT FK_PHRASE_CATEGORY FOREIGN KEY (category_id) 
        REFERENCES CATEGORY(category_id)
        ON DELETE CASCADE
);

-- Create User table
CREATE TABLE USER (
    user_id             INT                 AUTO_INCREMENT,
    user_email          VARCHAR(255)        NOT NULL UNIQUE,
    user_password       VARCHAR(255)        NOT NULL,
    
    CONSTRAINT PK_USER PRIMARY KEY (user_id)
);

-- Create Examples table
CREATE TABLE EXAMPLE (
    example_id          INT,
    phrase_id           INT                 NOT NULL,
    example             VARCHAR(255)        NOT NULL,           -- phrase example
    
    CONSTRAINT PK_EXAMPLE PRIMARY KEY (example_id),
    CONSTRAINT FK_EXAMPLE_PHRASE FOREIGN KEY (phrase_id) 
        REFERENCES PHRASE(phrase_id)
        ON DELETE CASCADE
);

-- Create Saved_Phrase table (Bridge table)
CREATE TABLE SAVED_PHRASE (
    user_id             INT,
    phrase_id           INT,
    
    CONSTRAINT PK_SAVED_PHRASE PRIMARY KEY (user_id, phrase_id),
    CONSTRAINT FK_SAVED_PHRASE_USER FOREIGN KEY (user_id) 
        REFERENCES USER(user_id)
        ON DELETE CASCADE,
    CONSTRAINT FK_SAVED_PHRASE_PHRASE FOREIGN KEY (phrase_id) 
        REFERENCES PHRASE(phrase_id)
        ON DELETE CASCADE
);