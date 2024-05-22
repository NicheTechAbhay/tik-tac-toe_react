import * as Yup from 'yup'

const OrganizationNameSchema = Yup.string()
.required('Organization name is required. Please enter your organization name.')
  .min(2, 'The organization name should be at least 2 characters long.')
  .max(100, 'The organization name should not exceed 100 characters.')
  .matches(/^[a-zA-Z0-9\s\-_.,]+$/, 'Please enter a valid organization name.')
  ;

const DomainSchema = Yup.string()
  .required('Domain is required. Please enter a domain.')
  .min(2, 'The domain should be at least 2 characters long.')
  .max(255, 'The domain should not exceed 255 characters.')
  .matches(
    /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z]{2,})+$/,
    'Invalid domain format. Please enter a valid domain.'
  )
  

const TypeDropdownSchema = Yup.string().required('Please select a type from the dropdown menu.');

const MessageSchema = Yup.string()
  .required('Message field is required. Please enter a message.')
  .min(1, 'Message must be at least 1 character long.')
  .max(1000, 'Message must be at most 1000 characters long.')
const emailSchema = Yup.string()
  .email("Invalid email address format. Please enter a valid email address.")
  .required("Email address is required. Please enter your email address.")
  .matches(/^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address format. Please enter a valid email address.");

const nameSchema = Yup.string()
  .required("Please enter your name.")
  .min(2, "Name must be at least 2 characters long.")
  .matches(/^[a-zA-Z]+$/, "Please enter a valid name.")
  .max(255, "Name must be at most 255 characters long.");

const roleSchema = Yup.string()
  .required("Please select a role from the dropdown menu.");

const passwordSchema = Yup.string()
  .required("Password is required. Please enter your password.")
  // .min(8, "Password must be at least 8 characters long.")
  // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).+$/,
  //   "Invalid password format. Please use at least one uppercase letter, one lowercase letter, one digit, and one special character."),


export { MessageSchema, TypeDropdownSchema, DomainSchema, OrganizationNameSchema, emailSchema, roleSchema, passwordSchema, nameSchema }