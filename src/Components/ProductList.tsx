import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      {" "}
      <h1>Product List :</h1>
      {products.map(function (data) {
        return (
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={data.thumbnail}
                title={data.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Model : {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description : {data.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Update </Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default ProductList;
