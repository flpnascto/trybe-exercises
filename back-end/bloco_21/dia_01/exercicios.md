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

<details>
  <summary>3. Aggregate Functions and Group</summary>

1. Write a query to list the number of jobs available in the employees table
```sql
SELECT COUNT(DISTINCT job_id) FROM hr.employees;
   ```

2. Write a query to get the total salaries payable to employees.
```sql
SELECT SUM(salary) FROM hr.employees;
   ```

3. Write a query to get the minimum salary from employees table.
```sql
SELECT MIN(salary) FROM hr.employees;
   ```

4. Write a query to get the maximum salary of an employee working as a Programmer.
```sql
SELECT MAX(salary) FROM hr.employees
WHERE job_id = 'IT_PROG';
   ```
5. Write a query to get the average salary and number of employees working the department 90. 
```sql
SELECT AVG(salary) AS 'Avarege_Salary',
COUNT(*) AS 'Number_Employees'
FROM hr.employees
WHERE department_id = 90;
   ```

6. Write a query to get the highest, lowest, sum, and average salary of all employees.
```sql
SELECT MIN(salary) FROM hr.employees;
   ```

7. Write a query to get the number of employees with the same job.
```sql

   ```

8. Write a query to get the difference between the highest and lowest salaries.
```sql

   ```

9. Write a query to find the manager ID and the salary of the lowest-paid employee for that manager. 
```sql

   ```

10. Write a query to get the department ID and the total salary payable in each department.
```sql

   ```

11. Write a query to get the average salary for each job ID excluding programmer. 
```sql

   ```

12. Write a query to get the total salary, maximum, minimum, average salary of employees (job ID wise), for department ID 90 only.
```sql

   ```

13. Write a query to get the job ID and maximum salary of the employees where maximum salary is greater than or equal to $4000.
```sql

   ```

14. Write a query to get the average salary for all departments employing more than 10 employees.
```sql

   ```

</details>