import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { textAlign, Typography } from "@pankod/refine-mui";
import { alignProperty } from "@mui/material/styles/cssUtils";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
// const lightTheme = createTheme({ palette: { mode: "light" } });

export const MyDropzone = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        
        // SEND TO BACKEND FOR HIGHLIGHTING THE COLUMNS

        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      {[darkTheme].map((theme, index) => (
        <ThemeProvider theme={theme}>
          <Box
            {...getRootProps()}
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            padding={2}
            sx={{
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Item elevation={4}>
              <input {...getInputProps()} />
              <Typography gutterBottom marginTop={2}>
                Drag 'n' drop or click to select csv files
              </Typography>
            </Item>
          </Box>
        </ThemeProvider>
      ))}
    </>
  );
};
