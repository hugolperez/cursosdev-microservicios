# Microservicios

Mini proyecto de pagos con los siguientes microservicios:
- Orden de compra

## Imagenes
### Mongo
```bash
docker run -d --name mongo-server -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=12345 -p 27017:27017 -v mongo_order_volume:/data/db mongo-express 
```