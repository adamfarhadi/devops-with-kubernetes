CREATE TABLE todos (
    id      SERIAL PRIMARY KEY,
    content VARCHAR(140) NOT NULL CHECK(length(content)>0)
);

INSERT INTO todos (content) VALUES ('Learn JavaScript');
INSERT INTO todos (content) VALUES ('Learn React');
INSERT INTO todos (content) VALUES ('Build a project');