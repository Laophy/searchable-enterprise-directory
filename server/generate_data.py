import csv
import random
from datetime import datetime, timedelta
import json
from faker import Faker # pip install Faker in server directory

fake = Faker()

# generating 1000 people
num_rows = 1000

#create the csv 
output_file = "enterprise_directory.csv"


# generate data rows
data_rows = []
for i in range(1, num_rows+1):
    #generate random data for each column
    if i <=10:
        emp_id = i+100
        manager_id = 0 # defaults the managers to 0 since they manage
    else:
        emp_id = 1000+i
        # when checking for manager, remember it uses the emp_id of the manager
        manager_id = random.randint(101,110) # points employee to a manager's employee id
    #print(emp_id)
    #print(manager_id)
    full_name = fake.name()
    username = full_name[0] + full_name.split()[1] + str(random.randint(1,100))
    #print(username)
    phone_number = random.randint(1000000000,9999999999)
    #print(phone_number)
    job_role = random.choice(["Software Engineer", "Data Engineer", "Business Analyst",
                              "Web Developer","Mechanical Engineer", "Systems Analyst",
                              "IT Specialist","Data Architect"])
    work_location = random.choice(["Hartford", "St.Paul", "Phoenix", "Denver", "Boston"])
    salary = random.randint(65000,110000)
    data_row = [
        emp_id,
        manager_id,
        full_name,
        username,
        phone_number,
        job_role,
        work_location,
        salary,

    ]

    #a dds the data row to the list
    data_rows.append(data_row)

# writing data to the csv file
with open(output_file,"w",newline="") as file:
    writer = csv.writer(file)
    writer.writerow(
        ["emp_id", "manager_id", "full_name", "username", "phone_number", "job_role", 
         "work_location", "salary"]
    )
    writer.writerows(data_rows)

print("Data generation complete!")

    