export default {
  "data" : [
    {
        "name": "Dashboard",
        "url": "/dashboard",
        icons:"fa-solid fa-gauge"
    },
    {
      "name": "Graphical Report",
      "url": "/graphical",
      icons:"fa-solid fa-gears",
      "children": [
        {
          "name": "Users",
          "url": "/users"
        },
        {
          "name": "Compaigns",
          "url": "/compaigns"
        }
       
      ]
     
    },
    {
      "name": "User",
      "url": "/user",
      icons:"fa-solid fa-user",
      "children": [
        {
          "name": "Administrator",
          "url": "/child31"
        },
        {
          "name": "User List",
          "url": "/child32"
        },
        {
          "name": "User Login",
          "url": "/child33"
        },
        {
          "name": "Accreditation Users",
          "url": "/child33"
        }
      ]
    },
    {
      "name": "Payment Gateways",
      "url": "/payment",
      icons:"fa-solid fa-bag-shopping",
      "children": [
       
      ]
    },
    {
      "name": "Transaction",
      "url": "/transaction",
      icons:"fa-solid fa-credit-card",
      "children": [
        {
          "name": "Transaction",
          "url": "/transaction"
        },
        {
          "name": "AddTransaction",
          "url": "/addtransaction"
        },
      ]
    }
  ]
}