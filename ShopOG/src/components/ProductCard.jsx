import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom'
import { detailsproducts } from "../features/products";



const ProductCard = ({ img, title, description, price, id}) => {
  const dispatch = useDispatch()
  const {type} = useParams()
  return (
    <Link to={`/filtredProduct/${type}/${id}`}>
      <Card className="w-96" onClick={()=> dispatch(detailsproducts(id))}>
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={img}
            alt="card-image"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {price} $
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default ProductCard