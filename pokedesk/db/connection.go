// db/connection.go
package db

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	client    *mongo.Client
	pokedexDB *mongo.Database
)

func Init(uri string) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var err error
	client, err = mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		log.Fatal(err)
	}

	pokedexDB = client.Database("pokedex")
}

func GetTrainersCollection() *mongo.Collection {
	return pokedexDB.Collection("trainers")
}

func GetPokemonsCollection() *mongo.Collection {
	return pokedexDB.Collection("pokemons")
}
