# Nuli Workout Overview Backend Service

## How to run

Run `npm run start:dev` to start the development server. Once started, GraphQL Playground is accessible at `http://localhost:3000/graphql`.

### If you run into any package resolution problems:

Use `nvm` and the `latest` version to ensure that this works as expected. A Docker image will be the next step.

## Querying exercise, circuits, and mappings

### Query all

To query all exercises and all its fields, run in GraphQL playground:

```gql
{
  exercises {
    id
    name
    imageURL
  }
}
```

This will return the following:

```json
{
  "data": {
    "exercises": [
      {
        "id": 1,
        "name": "Barbell Lunge (Left)",
        "imageURL": "barbell-lunge.jpg"
      },
      {
        "id": 2,
        "name": "Barbell Lunge (Right)",
        "imageURL": "barbell-lunge.jpg"
      },
      {
        "id": 3,
        "name": "Sumo Deadlift",
        "imageURL": "sumo-deadlift.jpg"
      },
      ...
    ]
  }
}
```

To query all circuits and circuit mappings, use `circuits` and `exerciseCircuitMappings`.

For `circuits`, you may query the following fields:

```
  id
  name
```

For `exerciseCircuitMappings`, you may query:

```
  id
  exerciseId
  circuitId
  swapWithExerciseId
  reps
  sets
  weight
```

## Query by ID

To query circuits by ID, you may run:

```gql
{
  getCircuit(id: 1) {
    id
    name
  }
}
```

which takes an `id` parameter for the particular circuit's ID you wish to query (1 in this example). Fields which can be queried here are the same as the fields detailed above.

This returns:

```json
{
  "data": {
    "getCircuit": {
      "id": 1,
      "name": "Superset 1"
    }
  }
}
```

To query exercises and exerciseCircuitMappings by ID, similarly use `getExercise` and `getExerciseCircuitMapping` respectively.

### Getting exercise data for a given circuit

Within `circuits`, you may run this query:

```gql
{
  getCircuit(id: 6) {
    name
    getExerciseCircuitMappings {
      exerciseCircuitMappings {
        sets
        reps
        weight
        swapWithExerciseId
        exercise {
          id
          name
        }
      }
    }
  }
}
```

This returns the following

```json
{
  "data": {
    "getCircuit": {
      "name": "Triset",
      "getExerciseCircuitMappings": [
        {
          "exerciseCircuitMappings": [
            {
              "sets": "4 sets",
              "reps": "10-12 reps",
              "weight": null,
              "swapWithExerciseId": 8,
              "exercise": {
                "id": 7,
                "name": "Single Arm Cable Row (Left)"
              }
            },
            ...
          ]
        }
      ]
    }
  }
}
```

## Data schema and types

For more information on the schema and types, please refer to the schema and docs tabs on GraphQL playground.

## Notes

### Consistent data re-seeding

This service seeds test data upon startup. However, due to a limitation of SQLite, clearing the database and re-seeding means that the id fields are not reset back to 0. Therefore, to ensure a consistent experience, please delete the `:memory` file that is generated after running the service.
