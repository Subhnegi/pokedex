// main.go
package main

import (
	"log"
	"os"
	"pokedex/db"
	"pokedex/routes"

	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}
	// Initialize MongoDB connection
	db.Init(os.Getenv("MONGODB_URI"))

	// Setup Gin router
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // Allow frontend origin
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// Trainer routes
	router.POST("/trainers", routes.CreateTrainer)
	router.GET("/trainers/:id", routes.GetTrainer)
	router.PUT("/trainers/:id", routes.UpdateTrainer)
	router.DELETE("/trainers/:id", routes.DeleteTrainer)
	router.GET("/trainers", routes.GetAllTrainers)

	// Pokemon routes
	router.POST("/pokemons", routes.CreatePokemon)
	router.GET("/pokemons/:id", routes.GetPokemon)
	router.PUT("/pokemons/:id", routes.UpdatePokemon)
	router.DELETE("/pokemons/:id", routes.DeletePokemon)
	router.GET("/pokemons", routes.GetAllPokemons)
	// Start server
	if err := router.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}
