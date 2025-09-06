const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 180, y: 500, width: 40, height: 60, speed: 5 };
let keys = {};
let enemies = [];
let gameRunning = true;
let score = 0;

// Listen for key presses
document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

// Spawn enemy cars
function spawnEnemy() {
  let enemyX = Math.random() * (canvas.width - 40);
    enemies.push({ x: enemyX, y: -60, width: 40, height: 60, speed: 3 });
    }
    setInterval(spawnEnemy, 1500);

    // Collision detection
    function isColliding(a, b) {
      return !(
          a.x > b.x + b.width ||
              a.x + a.width < b.x ||
                  a.y > b.y + b.height ||
                      a.y + a.height < b.y
                        );
                        }

                        // Game loop
                        function gameLoop() {
                          if (!gameRunning) {
                              ctx.fillStyle = "white";
                                  ctx.font = "30px Arial";
                                      ctx.fillText("Game Over!", 120, 300);
                                          return;
                                            }

                                              ctx.clearRect(0, 0, canvas.width, canvas.height);

                                                // Move player
                                                  if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
                                                    if (keys["ArrowRight"] && player.x + player.width < canvas.width) player.x += player.speed;

                                                      // Draw player
                                                        ctx.fillStyle = "cyan";
                                                          ctx.fillRect(player.x, player.y, player.width, player.height);

                                                            // Move enemies
                                                              ctx.fillStyle = "red";
                                                                enemies.forEach((enemy, i) => {
                                                                    enemy.y += enemy.speed;
                                                                        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);

                                                                            // Check collision
                                                                                if (isColliding(player, enemy)) {
                                                                                      gameRunning = false;
                                                                                          }

                                                                                              // Remove off-screen enemies
                                                                                                  if (enemy.y > canvas.height) {
                                                                                                        enemies.splice(i, 1);
                                                                                                              score += 10;
                                                                                                                  }
                                                                                                                    });

                                                                                                                      // Draw score
                                                                                                                        ctx.fillStyle = "white";
                                                                                                                          ctx.font = "20px Arial";
                                                                                                                            ctx.fillText("Score: " + score, 10, 20);

                                                                                                                              requestAnimationFrame(gameLoop);
                                                                                                                              }

                                                                                                                              gameLoop();