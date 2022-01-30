# Walmart challenge backend

## Instalation 
First install [database](https://github.com/walmartdigital/brand-discounts-db), Then:
```
npm install
```

## Start server

To run with node
```
npm start
```
To run in dev mode with nodemon
```
npm run dev
```

## Testing
To run all test run
```
npm run test
```
To run test with coverage run
```
npm run coverage
```

## Endpoints
The available endpoints are:

To get all products `http://[host]:[port]/products`
```
curl --request GET --url http://localhost:3000/products
```

To get a product by id `http://[host]:[port]/product/[productId]`
```
curl --request GET --url http://localhost:3000/product/3
```

To get a discount bye brand name `http://[host]:[port]/discount/[brand]`
```
curl --request GET --url http://localhost:3000/discount/Marca1
```
