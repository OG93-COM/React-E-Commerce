import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth";

const Login = ({ userState }) => {
    const initialState = {
        name: "",
        password: "",
    }
    const [values, setValues] = useState(initialState)
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        console.log(userState)
    }
    const dispatch = useDispatch()

    return (
        <div>
            <Card className="w-96 my-16 mx-auto">
                <CardHeader
                    variant="gradient"
                    color="gray"
                    className="mb-4 grid h-20 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Pseudo" size="lg" type="text" name="name" value={values.name} onChange={handleChange} />
                    <Input label="Password" size="lg" type="password" name="password" value={values.password} onChange={handleChange} />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" color="blue" fullWidth onClick={() => dispatch(login(values))}>
                        Sign In
                    </Button>

                    {userState.authError &&
                        <Typography variant="small" color="red" className="mt-6 flex justify-center">
                            {userState.authError}
                        </Typography>}
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login