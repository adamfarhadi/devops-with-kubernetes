CREATE TABLE todo (
    id      SERIAL PRIMARY KEY,
    content VARCHAR(140)
);

INSERT INTO todo (content) VALUES ('Learn JavaScript');
INSERT INTO todo (content) VALUES ('Learn React');
INSERT INTO todo (content) VALUES ('Build a project');