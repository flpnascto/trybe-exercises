# Exercícios 21.1
<details>
  <summary>1. SQL Lesson 10: Queries with aggregates (Pt. 1)</summary>
  
- Find the longest time that an employee has been at the studio:
```sql
SELECT MAX(Years_employed) FROM employees;
   ```
- For each role, find the average number of years employed by employees in that role:
```sql
SELECT role, AVG(Years_employed) FROM employees
GROUP BY role;
   ```
- Find the total number of employee years worked in each building 
```sql
SELECT Building, SUM(Years_employed) FROM employees
GROUP BY Building
   ```
</details>

<details>
  <summary>2. SQL Lesson 11: Queries with aggregates (Pt. 2)</summary>
  
- Find the number of Artists in the studio (without a HAVING clause)
```sql
SELECT Building, COUNT(Name) FROM employees
WHERE role = 'Artist'
GROUP BY Building;
   ```
-Find the number of Employees of each role in the studio
```sql
SELECT role, COUNT(Name) FROM employees
GROUP BY role;
   ```
-Find the total number of years employed by all Engineers
```sql
SELECT SUM(Years_employed) FROM employees
WHERE role = 'Engineer'
   ```

</details>
