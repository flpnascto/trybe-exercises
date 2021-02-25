/*
  SQL Lesson 7: OUTER JOINs
  from: https://sqlbolt.com/lesson/select_queries_with_outer_joins
*/

-- 1. Find the list of all buildings that have employees
SELECT building
FROM employees
LEFT JOIN buildings
ON building = building_name
GROUP BY building;

-- 2. Find the list of all buildings and their capacity
SELECT * FROM buildings;

-- 3. List all buildings and the distinct employee roles in each building (including empty buildings)
SELECT DISTINCT role, building_name
FROM buildings
LEFT JOIN employees
ON building_name = building;