# each 

list_of_numbers = [9001,42,1337]
some_user = {name:"Bob", age:9001}

list_of_numbers.each do |number|
  puts "The cool number #{number}"
end

some_user.each do |property|
  p property
end

# each_with

list_of_numbers.each_with_index do |number, index|
  puts "The cool number #{number} at position #{index}"
end

# for 

for number in list_of_numbers do
  puts number
end

for property in some_user do
  p property[1]
end


# .times

10.times do
  puts "HELLOOOOOO"
end

# .upto

10.upto(20) do |number|
  puts number
end

