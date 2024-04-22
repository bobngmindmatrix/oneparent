import React from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/Form/Input";
import yup from "@/utils/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components";
import { useRecoilState } from "recoil";
import { authAtom, buildAuthAtom } from "@/store/atoms/authAtom";
import { useRouter } from "next/navigation";

const FIELD = {
  EMAIL: "email",
  PASSWORD: "password",
};

const schema = yup.object().shape({
  [FIELD.EMAIL]: yup.string().email().required().label("Email"),
  [FIELD.PASSWORD]: yup.string().required().label("Password"),
});

const LoginForm = ({}) => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const router = useRouter();

  const {
    formState: { errors, isDirty },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    // TODO: Call API
    const response = {
      user: {
        _id: "1xdf",
        fullname: "User name",
        email: data.email,
      },
      accessToken: "1234",
      refreshToken: "1234",
    };
    setAuth(buildAuthAtom(true, response.accessToken, response.user));
    router.push("/");
  };

  return (
    <form
      className={"flex flex-col space-y-4"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        name={FIELD.EMAIL}
        error={errors[FIELD.EMAIL]}
        {...register(FIELD.EMAIL)}
        label="Email"
      />
      <Input
        name={FIELD.PASSWORD}
        error={errors[FIELD.PASSWORD]}
        {...register(FIELD.PASSWORD)}
        label="Password"
        type={"password"}
      />
      <Button color={"primary"} type={"submit"}>
        Login
      </Button>
    </form>
  );
};
export default LoginForm;
