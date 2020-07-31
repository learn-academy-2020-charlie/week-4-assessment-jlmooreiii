# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# Declare a funciton that can take in any array
def odds_and_ordered (array)
    # Use filter to take out only the odd numbers
    odd_num_array = array.select do | value |
        (value.instance_of? Integer) && (value % 2 != 0)
    end
    # Sort the array of numbers
    odd_num_array.sort { |a, b| a <=> b}
end
# Test to make sure the method works
puts '-----CHALLENGE 1-----'
puts 'Original array: fullArr1: '
p fullArr1
puts 'Result of odds_and_ordered fullArr1:'
p odds_and_ordered fullArr1

puts 'Original array: fullArr2: '
p fullArr2
puts 'Result of odds_and_ordered fullArr2:'
p odds_and_ordered fullArr2
puts

# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

class Bike
    def initialize
        @wheels = 2
        @model = 'standard_model'
        @frame_size = 'standard_frame_size'
        @bell = "Excuse me!"
        @speedometer = 0
    end

    def get_info
        p "The #{@model} bike has #{@wheels} wheels and a #{@frame_size}."
    end
    
    # Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'
    
    
    # -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.
    def ring_bell
        puts @bell
    end

    # Expected output example: my_bike.ring_bell => 'Beep beep!'
    
    
    # -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

    def get_speed
        @speedometer
    end

    # Expected output example: my_bike.speed => 0
    
    
    # -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

    def pedal_faster
        @speedometer = @speedometer + 10
    end

    def brake
        if !(@speedometer - 10 < 0)
            @speedometer = @speedometer - 10
        end
    end

    
    
end #ends class



# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

puts '-----CHALLENGE 2-----'
my_bike = Bike.new
puts my_bike.get_info
puts

puts '-----CHALLENGE 3-----'
my_bike.ring_bell
puts

puts '-----CHALLENGE 4-----'
puts my_bike.get_speed
puts

puts '-----CHALLENGE 5-----'
puts my_bike.get_speed
my_bike.pedal_faster
puts my_bike.get_speed
my_bike.brake
puts my_bike.get_speed
my_bike.brake
puts my_bike.get_speed