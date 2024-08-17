import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Login.css";

import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Typography,
  Stack,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";

import loginSchema from "./Login.Schema";
import { useLoginContext } from "../../Context/Login.Context";
import { FTextField, FormProvider, FCheckBox } from "../../Components";

const LoginPage = () => {
  const { onSubmit } = useLoginContext();

  const defaultValues = {
    email: "test1@gmail.com",
    password: "1234",
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="containerLogIn">
      <Typography className="titleLogInBox" variant="h3" mb={3}>
        Sign In
      </Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          <FTextField name="email" label="Email Address" />

          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack className="rememberContainer" direction="row" sx={{ my: 2 }}>
          <FCheckBox
            className="rememberBox"
            name="remember"
            label="Remember me"
          />
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </FormProvider>
    </div>
  );
};

export default LoginPage;
