import pygame

pygame.init()

SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

# create game window
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

# create player model
player = pygame.Rect((300, 250, 50, 50))

run = True
while run:

    # assign background color
    screen.fill((0, 0, 0))

    # display player model
    pygame.draw.rect(screen, (255, 0, 0), player)

    # assign movement event handlers
    key = pygame.key.get_pressed()
    if key[pygame.K_a] == True:
        player.move_ip(-1, 0)
    elif key[pygame.K_d] == True:
        player.move_ip(1, 0)
    elif key[pygame.K_w] == True:
        player.move_ip(0, -1)
    elif key[pygame.K_s] == True:
        player.move_ip(0,   1)

    # assign quit event handler
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False

    pygame.display.update()

pygame.quit()