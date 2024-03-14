# == != && ||

list_of_names = ["Mike","Mikhail","Ryan","Cedric"]
student_met1 = ["Mike","Mikhail","Ryan","Cedric"]
student_met2 = ["Mike","Mikhail","Ryan"]


remaining_students = list_of_names - student_met1


# if remaining_students.empty?
#   puts "No students remaining"
# elsif remaining_students.count == 1
#   puts "Only one left!"
# else
#   puts "Multiple students left"
# end

# == !=

unless remaining_students.empty?
  puts "Keep working you lazy person!"
end

puts "Keep working you lazy person!" unless remaining_students.empty?

# redirect_to("/") unless logged_in


# if !remaining_students.empty?
#   puts "Keep working you lazy person!"
# end