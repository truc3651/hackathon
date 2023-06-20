const TOPICS = {
    LOCATION: {
        name: 'location',
        tags: ['store', 'location', 'restaurant', 'shop']
    },
    ORDER_TYPE: {
        name: 'orderType',
        tags: ['delivery', 'pickup', 'pick up', 'pick-up', 'dine-in', 'dine in', 'dinein', 'take away']
    },
    PIZZA: {
        name: 'pizza',
        tags: ['pizza', 'cheese', 'crust', 'crispy']
    },
    BEVERAGE: {
        name: 'beverage',
        tags: ['drink', 'beverage', 'coca', 'coca cola', 'pepsi', 'coke', 'fanta']
    },
    CONFIRM: {
        name: 'confirm',
        tags: ['confirm', 'ok', 'oke', 'okay', 'okeydokey', 'sound great', 'yep']
    },
}
const responses = {
    [TOPICS.LOCATION.name]: {
        answer: 'Here are some location near you?',
        options: [
            "Test Store",
            "Quay Street",
            "Takanini"
        ]
    },
    [TOPICS.ORDER_TYPE.name]: {
        answer: 'Order type do you want?',
        options: [
            "Pickup",
            "Delivery",
        ]
    },
    [TOPICS.PIZZA.name]: {
        answer: 'Okay here our suggestion?',
        "cart": {
            "summary": {
              "items": [
                {
                  "cartItemId": "e6813fa8-9fb3-4443-9909-1f7dda96c0b3",
                  "type": "pizza",
                  "id": "veggie-supreme-pan-medium",
                  "title": "Medium Veggie Supreme",
                  "amount": 60900,
                  "total": 60900,
                  "items": [
                    {
                      "id": "pan",
                      "type": "crust",
                      "title": "Pan"
                    }
                  ]
                }
              ],
              "surcharges": [
                {
                  "title": "Restaurant Handling Charges",
                  "amount": 0
                }
              ],
              "taxes": [
                {
                  "title": "CGST",
                  "amount": 1523
                },
                {
                  "title": "SGST",
                  "amount": 1523
                }
              ],
              "totals": {
                "subtotal": 60900,
                "taxes": 3046,
                "total": 63946,
                "discount": 0
              },
              "loyaltyInfo": {
                "needToPay": 54,
                "pointsGet": 63,
                "points": {
                  "currentBalance": 0,
                  "newBalance": 0,
                  "usedInThisOrder": 0,
                  "toBeEarned": 0
                }
              }
            },
            "legacyOrderState": {
              "checksum": "5b6396ad-d485-4960-bb80-04a917a02ce9",
              "hut": {
                "id": "lsretail-test",
                "sector": "in-1"
              },
              "disposition": {
                "type": "collection",
                "when": "asap"
              },
              "deals": [
                {
                  "desserts": [],
                  "drinks": [],
                  "sides": [],
                  "pizzas": [
                    {
                      "cartItemId": "e6813fa8-9fb3-4443-9909-1f7dda96c0b3",
                      "type": "pizza",
                      "id": "veggie-supreme-pan-medium",
                      "toppings": [
                        {
                          "id": "black-olives-medium",
                          "type": "topping"
                        },
                        {
                          "id": "green-capsicum-medium",
                          "type": "topping"
                        },
                        {
                          "id": "mushroom-medium",
                          "type": "topping"
                        },
                        {
                          "id": "onion-medium",
                          "type": "topping"
                        },
                        {
                          "id": "red-paprika-medium",
                          "type": "topping"
                        },
                        {
                          "id": "sweet-corn-medium",
                          "type": "topping"
                        }
                      ]
                    }
                  ],
                  "dips": [],
                  "id": "ND"
                }
              ],
              "surcharges": [],
              "payment": {
                "type": "razorpay",
                "amount": 639.46,
                "breakdown": {
                  "netTotal": 609,
                  "grossTotal": 639.46,
                  "taxTotal": 30.46,
                  "taxes": [
                    {
                      "description": "CGST",
                      "amount": 15.23
                    },
                    {
                      "description": "SGST",
                      "amount": 15.23
                    }
                  ],
                  "rounding": 0
                }
              }
            }
          } ,
        "cartConfirmation": false
    },
    [TOPICS.BEVERAGE.name]: {
        answer: "What kind of you beverage?",
        options: [
            {
                name: 'pepsi',
                price: '5$',
                photo: ''
            },
            {
                name: 'fanta',
                price: '5$',
                photo: ''
            },
            {
                name: 'coke',
                price: '5$',
                photo: ''
            }
        ]
    },
    [TOPICS.CONFIRM]: {
        answer: "Anything else?",
        "cart": {
            "summary": {
              "items": [
                {
                  "cartItemId": "e6813fa8-9fb3-4443-9909-1f7dda96c0b3",
                  "type": "pizza",
                  "id": "veggie-supreme-pan-medium",
                  "title": "Medium Veggie Supreme",
                  "amount": 60900,
                  "total": 60900,
                  "items": [
                    {
                      "id": "pan",
                      "type": "crust",
                      "title": "Pan"
                    }
                  ]
                },
                {
                  "cartItemId": "2fa29382-d0a7-4c00-b463-d5d01bffa44d",
                  "type": "drink",
                  "id": "pepsi-600ml",
                  "title": "Pepsi",
                  "amount": 5700,
                  "total": 5700
                }
              ],
              "surcharges": [
                {
                  "title": "Restaurant Handling Charges",
                  "amount": 0
                }
              ],
              "taxes": [
                {
                  "title": "CGST",
                  "amount": 1665
                },
                {
                  "title": "SGST",
                  "amount": 1665
                }
              ],
              "totals": {
                "subtotal": 66600,
                "taxes": 3330,
                "total": 69930,
                "discount": 0
              },
              "loyaltyInfo": {
                "needToPay": 70,
                "pointsGet": 69,
                "points": {
                  "currentBalance": 0,
                  "newBalance": 0,
                  "usedInThisOrder": 0,
                  "toBeEarned": 0
                }
              }
            },
            "legacyOrderState": {
              "checksum": "5b6396ad-d485-4960-bb80-04a917a02ce9",
              "hut": {
                "id": "lsretail-test",
                "sector": "in-1"
              },
              "disposition": {
                "type": "collection",
                "when": "asap"
              },
              "deals": [
                {
                  "desserts": [],
                  "drinks": [
                    {
                      "cartItemId": "2fa29382-d0a7-4c00-b463-d5d01bffa44d",
                      "type": "drink",
                      "id": "pepsi-600ml"
                    }
                  ],
                  "sides": [],
                  "pizzas": [
                    {
                      "cartItemId": "e6813fa8-9fb3-4443-9909-1f7dda96c0b3",
                      "type": "pizza",
                      "id": "veggie-supreme-pan-medium",
                      "toppings": [
                        {
                          "id": "black-olives-medium",
                          "type": "topping"
                        },
                        {
                          "id": "green-capsicum-medium",
                          "type": "topping"
                        },
                        {
                          "id": "mushroom-medium",
                          "type": "topping"
                        },
                        {
                          "id": "onion-medium",
                          "type": "topping"
                        },
                        {
                          "id": "red-paprika-medium",
                          "type": "topping"
                        },
                        {
                          "id": "sweet-corn-medium",
                          "type": "topping"
                        }
                      ]
                    }
                  ],
                  "dips": [],
                  "id": "ND"
                }
              ],
              "surcharges": [],
              "payment": {
                "type": "razorpay",
                "amount": 699.3,
                "breakdown": {
                  "netTotal": 666,
                  "grossTotal": 699.3,
                  "taxTotal": 33.3,
                  "taxes": [
                    {
                      "description": "CGST",
                      "amount": 16.65
                    },
                    {
                      "description": "SGST",
                      "amount": 16.65
                    }
                  ],
                  "rounding": 0
                }
              }
            }
          },
        "cartConfirmation": true
    }
}

export {
    TOPICS,
    responses
} ;