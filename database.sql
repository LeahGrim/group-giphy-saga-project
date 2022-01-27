CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

INSERT INTO "category" ("name")
VALUES ('funny'), ('animal'), ('inspirational'), ('sports');

CREATE TABLE "favorites"(
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR (5000) NOT NULL,
	"category_id" INT DEFAULT 1
);