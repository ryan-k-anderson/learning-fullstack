import random

print("Welcome to rock, paper scissors")

player_choice = input("Rock, Paper, or Scissors: ")
computer_choice = random.choice(['Rock', 'Paper', 'Scissors'])

if player_choice.lower() == 'scissors' and computer_choice.lower() == 'paper':
    print(f'Computer chose {computer_choice} You Win')

elif player_choice.lower() == 'paper' and computer_choice.lower() == 'scissors':
    print(f'Computer chose {computer_choice} You lose')

elif player_choice.lower() == 'rock' and computer_choice.lower() == 'paper':
    print(f"Computer chose {computer_choice} you lose")

elif player_choice.lower() == 'paper' and computer_choice.lower() == 'rock':
    print(f'Computer chose {computer_choice} You win')

elif player_choice.lower() == 'rock' and computer_choice.lower() == 'scissors':
    print(f"Computer chose {computer_choice} You win")

else:
    print(f"Computer chose {computer_choice} You lose")