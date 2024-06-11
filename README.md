# Nuli Workout Overview Backend Service

## How to run

Run `npm run start:dev` to start the development server. Once started, GraphQL Playground is accessible at `http://localhost:3000/graphql`.

## Querying exercise, circuits, and mappings

### Query all

To query all exercises, run:

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
      {
        "id": 4,
        "name": "Cable Kickback (Left)",
        "imageURL": "cable-kickback.jpg"
      },
      {
        "id": 5,
        "name": "Cable Kickback (Right)",
        "imageURL": "cable-kickback.jpg"
      },
      {
        "id": 6,
        "name": "Dumbbell Shoulder Press",
        "imageURL": "dumbbell-shoulder-press.jpg"
      },
      {
        "id": 7,
        "name": "Single Arm Cable Row (Left)",
        "imageURL": "single-arm-cable-row.jpg"
      },
      {
        "id": 8,
        "name": "Single Arm Barbell Row (Left)",
        "imageURL": "single-arm-barbell-row.jpg"
      },
      {
        "id": 9,
        "name": "Single Arm Cable Row (Right)",
        "imageURL": "single-arm-cable-row.jpg"
      },
      {
        "id": 10,
        "name": "Cable Seated Row",
        "imageURL": "cable-seated-row.jpg"
      },
      {
        "id": 11,
        "name": "Dumbbell Jump Squat",
        "imageURL": "dumbbell-jump-squat.jpg"
      },
      {
        "id": 12,
        "name": "Barbell Lunge",
        "imageURL": "barbell-lunge.jpg"
      },
      {
        "id": 13,
        "name": "Plank With Stability Ball",
        "imageURL": "plank-with-stability-ball.jpg"
      },
      {
        "id": 14,
        "name": "Glute Bridge Hold",
        "imageURL": "glute-bridge-hold.jpg"
      }
    ]
  }
}
```

To query all circuits and circuit mappings, use `circuits` and `exerciseCircuitMappings`
