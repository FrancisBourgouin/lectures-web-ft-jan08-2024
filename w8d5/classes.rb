# What's a class ?

# A group of students?
# Blueprint to build something

class Potato
  def initialize name
    @name = name
  end

  # attr_reader :name
  # attr_writer :name

  attr_accessor :name

  def greet
    puts "Hi, my name is #{@name}"
  end

end


yukon = Potato.new("Yukon Gold")
irish = Potato.new("Irish Cobbler")

p yukon.name
p irish.name

yukon.greet