

USE EventDB;
CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100),
    email VARCHAR(100),
    city VARCHAR(100),
    registration_date DATE
);

CREATE TABLE IF NOT EXISTS Events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200),
    description TEXT,
    city VARCHAR(100),
    start_date DATETIME,
    end_date DATETIME,
    status VARCHAR(20),
    organizer_id INT
);

CREATE TABLE IF NOT EXISTS Registrations (
    registration_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    registration_date DATE
);

USE EventDB;
CREATE TABLE IF NOT EXISTS Feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    rating INT,
    comments TEXT,
    feedback_date DATE
);
INSERT INTO Feedback (user_id, event_id, rating, comments, feedback_date) VALUES
(1,1,4,'Good','2025-06-11'),
(2,1,5,'Excellent','2025-06-11'),
(1,1,3,'Okay','2025-06-11'),
(2,1,4,'Nice','2025-06-11'),
(1,1,5,'Super','2025-06-11'),
(2,1,4,'Great','2025-06-11'),
(1,1,3,'Average','2025-06-11'),
(2,1,4,'Good','2025-06-11'),
(1,1,5,'Amazing','2025-06-11'),
(2,1,4,'Nice','2025-06-11');
SELECT * FROM Feedback;
SELECT e.title, AVG(f.rating) AS avg_rating
FROM Events e
JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(f.feedback_id) >= 10
ORDER BY avg_rating DESC;
USE EventDB;
SHOW TABLES;
SELECT * FROM Users;
SELECT * FROM Registrations;

SELECT *
FROM Users
WHERE user_id NOT IN (
    SELECT user_id
    FROM Registrations
    WHERE registration_date >= CURDATE() - INTERVAL 90 DAY
);
USE EventDB;
CREATE TABLE IF NOT EXISTS Sessions (
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT,
    title VARCHAR(200),
    speaker_name VARCHAR(100),
    start_time DATETIME,
    end_time DATETIME
);
INSERT INTO Sessions (event_id, title, speaker_name, start_time, end_time) VALUES
(1,'Opening Keynote','Dr. Tech','2025-06-10 10:00:00','2025-06-10 11:00:00'),
(1,'Web Dev Talk','Alice','2025-06-10 11:15:00','2025-06-10 12:30:00'),
(2,'AI Session','Charlie','2025-05-15 09:30:00','2025-05-15 11:00:00'),
(3,'HTML Intro','Bob','2025-07-01 10:30:00','2025-07-01 11:30:00');
SELECT * FROM Sessions;
SELECT event_id, COUNT(*) AS session_count
FROM Sessions
WHERE HOUR(start_time) BETWEEN 10 AND 12
GROUP BY event_id;

USE EventDB;
SHOW TABLES;
SELECT * FROM Users;
SELECT * FROM Registrations;
SELECT u.city, COUNT(DISTINCT r.user_id) AS users_count
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY users_count DESC
LIMIT 5;
USE EventDB;
CREATE TABLE IF NOT EXISTS Resources (
    resource_id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT,
    resource_type VARCHAR(20),
    resource_url VARCHAR(255),
    uploaded_at DATETIME
);
INSERT INTO Resources (event_id, resource_type, resource_url, uploaded_at) VALUES
(1,'pdf','link1','2025-05-01 10:00:00'),
(1,'image','link2','2025-05-01 11:00:00'),
(1,'link','link3','2025-05-01 12:00:00'),
(2,'pdf','link4','2025-05-02 10:00:00'),
(2,'image','link5','2025-05-02 11:00:00'),
(3,'link','link6','2025-05-03 10:00:00');
SELECT * FROM Resources;
SELECT event_id,
COUNT(CASE WHEN resource_type = 'pdf' THEN 1 END) AS pdf_count,
COUNT(CASE WHEN resource_type = 'image' THEN 1 END) AS image_count,
COUNT(CASE WHEN resource_type = 'link' THEN 1 END) AS link_count
FROM Resources
GROUP BY event_id;
USE EventDB;
SHOW TABLES;
SELECT * FROM Feedback;
INSERT INTO Feedback (user_id, event_id, rating, comments, feedback_date) VALUES
(1,1,2,'Not good','2025-06-12');
SELECT u.full_name, e.title, f.rating, f.comments
FROM Feedback f
JOIN Users u ON f.user_id = u.user_id
JOIN Events e ON f.event_id = e.event_id
WHERE f.rating < 3;
USE EventDB;
SHOW TABLES;
SELECT * FROM Events;
SELECT * FROM Sessions;
SELECT e.title, COUNT(s.session_id) AS session_count
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id, e.title;
USE EventDB;
SHOW TABLES;
SELECT * FROM Events;
INSERT INTO Events (event_id, title, description, city, start_date, end_date, status, organizer_id) VALUES
(3,'Frontend Bootcamp','Training','Los Angeles','2025-07-01 10:00:00','2025-07-03 16:00:00','upcoming',2);
SELECT organizer_id, status, COUNT(*) AS total_events
FROM Events
GROUP BY organizer_id, status;
USE EventDB;
SHOW TABLES;
SELECT * FROM Events;
SELECT * FROM Registrations;
SELECT * FROM Feedback;
INSERT INTO Events (event_id, title, description, city, start_date, end_date, status, organizer_id) VALUES
(4,'Cloud Workshop','Cloud basics','Delhi','2025-08-01 10:00:00','2025-08-01 15:00:00','upcoming',1);

INSERT INTO Registrations (registration_id, user_id, event_id, registration_date) VALUES
(6,1,4,'2025-07-20');
SELECT DISTINCT e.title
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON e.event_id = f.event_id
WHERE f.feedback_id IS NULL;
USE EventDB;
SELECT * FROM Users;
INSERT INTO Users (user_id, full_name, email, city, registration_date) VALUES
(10,'Rahul','rahul@gmail.com','Delhi',CURDATE()),
(11,'Priya','priya@gmail.com','Mumbai',CURDATE() - INTERVAL 1 DAY),
(12,'Amit','amit@gmail.com','Chennai',CURDATE() - INTERVAL 2 DAY),
(13,'Sneha','sneha@gmail.com','Hyderabad',CURDATE() - INTERVAL 3 DAY);
SELECT registration_date, COUNT(*) AS user_count
FROM Users
WHERE registration_date >= CURDATE() - INTERVAL 7 DAY
GROUP BY registration_date
ORDER BY registration_date;
USE EventDB;
SELECT * FROM Users;
INSERT INTO Sessions (event_id, title, speaker_name, start_time, end_time) VALUES
(1,'Session A','Speaker 1','2025-06-10 10:00:00','2025-06-10 11:00:00'),
(1,'Session B','Speaker 2','2025-06-10 11:30:00','2025-06-10 12:30:00'),
(2,'Session C','Speaker 3','2025-05-15 09:00:00','2025-05-15 10:00:00'),
(3,'Session D','Speaker 4','2025-07-01 10:00:00','2025-07-01 11:00:00'),
(3,'Session E','Speaker 5','2025-07-01 11:30:00','2025-07-01 12:30:00'),
(3,'Session F','Speaker 6','2025-07-01 01:00:00','2025-07-01 02:00:00');

SELECT event_id
FROM Sessions
GROUP BY event_id
HAVING COUNT(*) = (
    SELECT MAX(session_count)
    FROM (
        SELECT COUNT(*) AS session_count
        FROM Sessions
        GROUP BY event_id
    ) AS temp
);
