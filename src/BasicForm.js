
import { useFormik } from "formik";
import * as yup from "yup";
import Button from '@mui/material/Button';

const formValidationSchema = yup.object({
    email: yup.string() .required("Why not fill this email? 😉")
    .min(5, "Need a longer email 😄"),
password: yup.string().required("Why not fill this password? 😉")
    .min(8, "Need a longer password 😄")
    .max(12, "Too much password 😅"),
    });

  export default function Basicform()
 {
     const formik = useFormik({initialValues: { email: "", password: "" },
     validationSchema: formValidationSchema,
     onSubmit: (values) => 
     {
         console.log("onSubmit", values); 
         },});

         return (
             <div className="form-order">

         <form onSubmit={formik.handleSubmit}>
             <input type="email"id="email"name="email"
             value={formik.values.email}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}placeholder="email"/>
             <br />
             {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
             <br />

             <input type="password"id="password"name="password"
             value={formik.values.password}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}placeholder="password"/>
             <br />
             {formik.touched.password && formik.errors.password? formik.errors.password:""}
             <br />
             <Button variant="contained" type ="submit">Submit</Button>
             </form>
             </div>
         );
 }