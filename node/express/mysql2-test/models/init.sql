USE honuxdb;


CREATE TABLE IF NOT EXISTS USER(
	ID INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(32)
	);
	
INSERT INTO USER (NAME) VALUES('HONUX'), ('CRONG'), ('POBI'), ('JK'), ('SM9');

--- SELECT * FROM USER WHERE ID > 2;