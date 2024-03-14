# Blocks!

# puts "Hello!"

# sleep(3)

# puts "Bye"


def say_hi
  puts "Hi!"
end

def make_it_fancy
  puts "🔥🔥🔥🔥🔥🔥🔥"
  yield
  puts "🔥🔥🔥🔥🔥🔥🔥"
end

make_it_fancy { say_hi }


def repeat_message
  amount = yield

  amount.times do
    puts "WAZZZAAA"
  end
end

repeat_message { rand(20) }