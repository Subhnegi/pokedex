// models/pokemon.go
package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Pokemon struct {
	ID    primitive.ObjectID `bson:"_id,omitempty"`
	Name  string             `bson:"name"`
	Level int                `bson:"level"`
	HP    int                `bson:"hp"`
	Moves []string           `bson:"moves"`
	Types []string           `bson:"types"`
}
