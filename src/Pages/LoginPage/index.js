import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  console.log("🚀 Puritin ~ LoginPage ~ getValues:", getValues());

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        maxWidth: "470px",
        textAlign: "center",
        background: "#818181",
        border: "1px solid black",
        borderRadius: "8px",
        padding: "14px",
        zIndex: 3,
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        mb={3}
        style={{
          fontWeight: 600,
          fontFamily: `"Roboto"`,
          color: "#fff",
          letterSpacing: "0.5rem",
        }}
      >
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

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FCheckBox
            name="remember"
            label="Remember me"
            style={{ color: "#fff" }}
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
