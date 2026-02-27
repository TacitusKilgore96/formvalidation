import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required("Enter your name"),
    age: yup
    .number()
    .typeError("Must be a number")
    .required("Required")
    .min(18, "Must be at least 18")
    .max(99, "Must be under 99"),

    email: yup
    .string()
    .email("Invalid email")
    .required("Required")
    .matches(/@.*\./, "error"),

    pet: yup
    .string()
    .required("This field cannot be empty"),

    terms: yup
    .bool()
    .oneOf([true], "You must accept our terms")
    });
   
    const UseYupForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    return { register, handleSubmit, errors };
};

  export default UseYupForm;