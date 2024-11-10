-- Query 1: List all categories
-- Returns: All categories with their IDs, names, and descriptions
SELECT category_id, category_name, category_desc
FROM CATEGORY
ORDER BY category_name;

-- Query 2: Get all phrases in a specific category
-- Parameters: category_id
-- Returns: All phrases belonging to a specified category with their descriptions
SELECT p.phrase_id, p.phrase, p.phrase_desc, p.context, c.category_name
FROM PHRASE p
JOIN CATEGORY c ON p.category_id = c.category_id
WHERE c.category_id = 1;  -- Replace 1 with desired category_id

-- Query 3: Get all examples for a specific phrase
-- Parameters: phrase_id
-- Returns: All examples and their context for a specific phrase
SELECT e.example_id, e.example, p.phrase
FROM EXAMPLE e
JOIN PHRASE p ON e.phrase_id = p.phrase_id
WHERE p.phrase_id = 1;  -- Replace 1 with desired phrase_id

-- Query 4: List all saved phrases for a user
-- Parameters: user_id
-- Returns: All phrases saved by a specific user
SELECT p.phrase_id, p.phrase, p.phrase_desc, p.context, c.category_name, GROUP_CONCAT(e.example SEPARATOR ', ') AS examples
FROM SAVED_PHRASE sp
JOIN USER u ON sp.user_id = u.user_id
JOIN PHRASE p ON sp.phrase_id = p.phrase_id
JOIN CATEGORY c ON p.category_id = c.category_id
LEFT JOIN EXAMPLE e ON p.phrase_id = e.phrase_id
WHERE sp.user_id = 1  -- Replace 1 with desired user_id
GROUP BY p.phrase_id, p.phrase, p.phrase_desc, p.context, c.category_name
ORDER BY c.category_name, p.phrase;

-- Query 5: Find a phrase by keyword
-- Parameters: search keyword
-- Returns: All phrases containing the keyword and their categories
SELECT p.phrase_id, p.phrase, p.phrase_desc, c.category_name
FROM PHRASE p
JOIN CATEGORY c ON p.category_id = c.category_id
WHERE p.phrase LIKE '%bussin%'
   OR p.phrase_desc LIKE '%bussin%';  -- Replace 'bussin' with desired search term

-- Query 6: Add a phrase to the saved table
-- Parameters: user_id, phrase_id
-- Note: This is an INSERT statement that saves a new phrase for a user
INSERT INTO SAVED_PHRASE (user_id, phrase_id)
VALUES (1, 1)  -- Replace with desired user_id and phrase_id
ON DUPLICATE KEY UPDATE user_id = user_id;  -- Prevents duplicate saves