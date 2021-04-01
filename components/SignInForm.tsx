import { useForm } from 'react-hook-form';
import Input from './Input';
import InputSpacer from './InputSpacer';

const FormError = ({ errorMessage }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

interface Props {
  onSubmit: any;
}

export default function SignInForm(props: Props) {
  
  const { register, handleSubmit, errors } = useForm();
  return (
      <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>

      <InputSpacer>
        <Input
          placeholder="Email"
          name="email"
          formRef={register({ required: true })}
        />
        {errors.email && <FormError errorMessage="Email is required" />}
      </InputSpacer>

      <InputSpacer>
        <Input
          placeholder="password"
          name="password"
          formRef={register({ required: true })}
          type="password"
        />
        {errors.password && (
          <FormError errorMessage="password is required" />
        )}
      </InputSpacer>

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}