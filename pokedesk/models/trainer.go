package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Trainer struct {
	ID     primitive.ObjectID `bson:"_id,omitempty"`
	Name   string             `bson:"name"`
	Money  int                `bson:"money"`
	Badges []string           `bson:"badges"`
}
