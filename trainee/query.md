## PSQL

## SET 1


**1.Employee_Name and Manager_Name**
```   
SELECT e.name as "Employee name",m.name as "Manager name" 
FROM employee e ,employee m 
WHERE m.emp_id=e.mgr_id;
```

**2.Employee name, emp doj, manager name, manger doj**
```
SELECT e.name as "Employee name",e.joining_date as "Employee joining date",m.name as "Manager name",m.joining_date as "Manager joining date"
FROM employee e ,employee m 
WHEREe.mgr_id=m.emp_id;
```

**3.Employee name, Emp Dept, Mgr Dept**

```
SELECT a.name Emp_Name,ad.name Employee_dept ,bd.name Manager_dept 
FROM employee a, employee b ,dept ad,dept bd 
WHERE b.emp_id = a.mgr_id and a.dept_id=ad.dept_id 
AND b.dept_id=bd.dept_id;
```

**4.List of employees without a manager**
```
SELECT name 
FROM employee 
WHERE mgr_id IS NULL;
```
**5.List of terminated manager names**

```
SELECT  distinct b.name AS manager_names 
FROM employee a,employee b 
WHERE a.mgr_id=b.emp_id and b.termination_date IS NOT NULL;
```
**6.List of department names where we have a terminated employee**
```
SELECT distinct d.name as "Department name" 
FROM dept d, employee e 
WHERE d.dept_id=e.dept_id and e.termination_date IS NOT NULL;
```
**7.List of department names where we have a terminated Manager**
```
SELECT DISTINCT d.name as "Department name" 
FROM dept d, employee e 
WHERE d.dept_id=e.dept_id and e.termination_date IS NOT NULL;
```

**8.List of employees whose manager's salary is less then employee salary**
```
SELECT a.name AS "Emp_Name" 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id and b.salary<a.salary;
```

**9.List of employees whose doj is earlier than manager**
```
SELECT a.name AS "Emp_Name" 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id and a.joining_date
```

**10.List of employees whose name has a vowel**
```
SELECT name 
FROM employee 
WHERE name LIKE '%A%'OR name LIKE '%E%'OR name LIKE '%I%'OR name LIKE '%O%'OR name LIKE '%U%'OR name LIKE '%a%'OR name LIKE '%e%'OR name LIKE '%i%'OR name LIKE '%o%'OR name LIKE '%u%'
```
**11.List of employees whose's manager name has a vowel and employee salary is less than 20000**
```
SELECT b.name AS "Emp_Name" 
FROM employee a, employee b 
WHERE a.emp_id = b.mgr_id and b.salary < 20000 
AND (a.name LIKE '%A%' OR a.name LIKE '%E%' OR a.name LIKE '%I%' OR a.name LIKE '%O%' OR a.name LIKE '%U%' OR a.name LIKE '%a%' OR a.name LIKE '%e%' OR a.name LIKE '%i%' OR a.name LIKE '%o%' OR a.name LIKE '%u%')
```
**2.List of employees who has joined in Jan/Feb/Nov**
```
SELECT name FROM employee 
WHERE to_char(joining_date, 'mm') = '02'OR to_char(joining_date, 'mm') = '01'
OR to_char(joining_date, 'mm') = '11';
 ```
 
 
 **13.Replacing null values as NA**
```
SELECT emp_id,
COALESCE(cast(mgr_id as varchar),'NA') 
AS mid,salary,joining_date 
FROM employee;
```





## SET - 2 

**1. Manager Name, Count of Employees whose start date is after 2013** 

```
SELECT b.name AS  Mgr_Name,count(a.name) AS Emp_count 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND a.joining_date>'01-01-2013' 
GROUP BY b.name 
ORDER BY b.name;
```


**2) Manager Name, Min(emp salary) where manager start date is after 2013**

```
SELECT b.name AS "Mgr_Name",min(a.salary) AS "Emp_salary" 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND b.joining_date>'01-01-2013' 
GROUP BY b.name;
```

**3) Manager name who atleast has two employees started after 2013**

```
SELECT b.name AS  Mgr_Name,count(a.name) AS Emp_count 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND a.joining_date>'01-01-2013' 
GROUP BY b.name 
HAVING count(a.name) >=2;
```

**4) Dept Name, Count of Employees whose start date is after 2013**

```
SELECT d.name,count(e.name) 
FROM employee e,dept d  
WHERE d.dept_id=e.dept_id 
AND e.joining_date>'01-01-2013' 
GROUP BY d.name;
```

**5) Dept Name, Min(emp salary) where manager start date is after 2013**

```
SELECT d.name,min(a.salary) 
FROM employee a,employee b,dept d  
WHERE d.dept_id=a.dept_id 
AND d.dept_id=b.dept_id 
AND b.emp_id=a.mgr_id 
AND  b.joining_date>'01-01-2013' 
GROUP BY d.name;
```

**6) Dept Name who atleast has two employees started after 2013**

```
SELECT d.name,count(e.name) 
FROM employee e,dept d  
WHERE d.dept_id=e.dept_id 
AND e.joining_date>'01-01-2013' 
GROUP BY d.name 
HAVING count(e.name)>=2;
```

**7. Number of employees per year**

```
SELECT COUNT(name) AS emp_count,EXTRACT(year FROM joining_date) 
FROM employee 
GROUP BY EXTRACT(year from joining_date);
```


**8. Number of employees per year, per department**

```
SELECT EXTRACT(year FROM e.joining_date) ,d.name,COUNT(e.emp_id) 
FROM employee e,dept d 
WHERE e.dept_id=d.dept_id 
GROUP BY EXTRACT(year FROM e.joining_date),d.name 
ORDER BY d.name;
```


**9.List of Months (Say, Jan-2018) where number of employees joined is more than 2**

```
SELECT EXTRACT(year FROM joining_date) AS YEAR,EXTRACT(month FROM joining_date) AS Month ,COUNT(emp_id) AS COUNT 
FROM employee GROUP BY EXTRACT(year FROM joining_date),
EXTRACT(month FROM joining_date) 
HAVING COUNT(emp_id)>2;
```


**10. List of Managers who has employees from more than one department**

```
SEELCT m.name 
FROM employee e,employee m,dept d 
WHERE e.mgr_id=m.emp_id 
AND e.dept_id=d.dept_id 
GROUP BY m.name having COUNT(DISTINCT d.name)>1;
```


**11. List of Departments who has atleast two managers**

```
SELECT d.name,COUNT(distinct m.name) 
FROM employee e,employee m,dept d 
WHERE e.mgr_id=m.emp_id 
AND m.dept_id=d.dept_id 
GROUP BY d.name 
HAVING COUNT(DISTINCT m.name)>=2;
```


**12. Employee Names who joined after 2013 and his manager has more than two reportees**

```
SELECT a.name 
FROM employee a,employee b 
WHERE b.emp_id=a.mgr_id 
AND a.joining_date>'01-01-2013'
AND (select count(a.name) 
FROM employee a,employee b 
WHERE b.emp_id = a.mgr_id )>2;
```

## SET - 3

**1. SQL to find the missing ids from dept**

```
SELECT  dept_id +1
FROM dept
WHERE dept_id + 1 NOT IN (SELECT DISTINCT dept_id FROM dept)
AND dept_id + 1 < (select MAX(dept_id) from dept) ;
```

**2. Manager Name, Reportee who joined first (Reportee Name - doj), Reportee who draws less sal (Reportee Name - salary)**

```
SELECT a.name,a.doj AS "Reportee Name - doj",b.sal AS "Reportee Name - salary"
FROM
    (SELECT b.name,CONCAT(a.name,'-',a.joining_date) AS doj 
     FROM employee a,employee b
     WHERE b.emp_id=a.mgr_id 
     AND EXISTS(
         SELECT 1
         FROM employee a_inr
         WHERE a_inr.mgr_id=b.emp_id
         HAVING min(a_inr.joining_date)=a.joining_date
         ) 
) a
INNER JOIN (
    SELECT b.name,CONCAT(a.name,'-',a.salary) AS sal	
    FROM employee a,employee b
    WHERE b.emp_id=a.mgr_id
    AND EXISTS(
             SELECT 1
             FROM employee a_inr
             WHERE a_inr.mgr_id=b.emp_id
             HAVING min(a_inr.salary)=a.salary     
             )
) b
ON a.name=b.name;
```

**2. Manager Name, Reportee who joined first (Reportee Name - doj), Reportee who draws less sal (Reportee Name - salary) using window function**
```
SELECT m1.Manager_name,m1.jd,m2.sd
FROM
    (SELECT DISTINCT m2.name AS Manager_name,
     FIRST_VALUE(CONCAT(m1.name,'-',m1.joining_date)) OVER(
     PARTITION BY m1.mgr_id
     ORDER BY m1.joining_date) AS jd
     FROM employee m1, employee m2
     WHERE m2.emp_id=m1.mgr_id
    )m1 
INNER JOIN
    (SELECT DISTINCT m2.name AS Manager_name,
     FIRST_VALUE(CONCAT(m1.name,'-',m1.salary)) OVER ( 
     PARTITION BY m1.mgr_id 
     ORDER BY m1.salary) AS sd 
     FROM employee m1, employee m2 
     WHERE m2.emp_id=m1.mgr_id
    )m2
ON m1.Manager_name=m2.Manager_name;
```
