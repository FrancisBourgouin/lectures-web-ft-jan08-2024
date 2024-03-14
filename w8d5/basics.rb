# Strings & ' vs " & #{}

age = 42
some_name = "Little Chicken, age #{age}"

# Numbers


p age
p age.to_s

some_name.upcase
p some_name

# String


# Array

list_of_names = ["Mike","Mikhail","Ryan","Cedric"]
list_of_names1 = ["Mike","Mikhail","Ryan","Cedric"]

p list_of_names == list_of_names1

list_of_student_met = ["Mike", "Mikhail"]

remaining_students_to_meet = list_of_names - list_of_student_met

p remaining_students_to_meet.empty?

p list_of_names.first
p list_of_names.last
p list_of_names[1..2]

p list_of_names.shuffle!




# Puts vs P

p "Hello!"
puts "Hello!"
puts list_of_names
