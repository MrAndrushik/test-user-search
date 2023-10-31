SET STATISTICS TIME ON;

WITH 
RecursiveQuery (id, parent_id, name, level) as (
	SELECT id, parent_id, name, 0 as level
	FROM subdivisions
	WHERE subdivisions.id = (
		SELECT collaborators.subdivision_id
		FROM collaborators 
		WHERE collaborators.id = 710253
	)
	UNION ALL
	SELECT sub.id, sub.parent_id, sub.name, level + 1
	FROM subdivisions as sub
	JOIN RecursiveQuery as rec ON sub.parent_id = rec.id
),
CountColls as (
	SELECT 
		COUNT(collaborators.id) colls_count,
		subdivisions.name 
	FROM collaborators 
	JOIN subdivisions ON subdivisions.id = collaborators.subdivision_id
	GROUP BY subdivisions.name
)

SELECT 
	collaborators.id,
	collaborators.name,
	rec.name as sub_name,
	rec.id as sub_id,
	level as sub_level,
	colls_count
FROM collaborators
JOIN RecursiveQuery as rec ON collaborators.subdivision_id = rec.id
JOIN CountColls ON rec.name = CountColls.name
WHERE 
	(collaborators.age < 40) AND 
	(LEN(collaborators.name) > 11) AND 
	(rec.id != 100055) AND 
	(rec.id != 100059)
ORDER BY sub_level